using InventoryApi.Models.RecentActivityDtos;
using InventoryApi.Repository;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Services.RecentActivityServices
{
    public class RecentActivityService(InvitoryContext context) : IRecentActivityService
    {
        // Return all user recent activity
        public async Task<List<RecentActivityDto>> GetAllRecentActivitiesAsync(int userId)
        {
            DateOnly currentDate = DateOnly.FromDateTime(DateTime.Now);
            List<RecentActivityDto>? reverse = new();
            List<RecentActivityDto>? recentActivities = await context.RecentActivities.Where(x => x.UserId == userId)
                .Select(activity => new RecentActivityDto
                {
                    UserId = userId,
                    RecentActivityId = activity.Id,
                    Name = activity.Name,
                    Request = activity.Request,
                    Type = activity.Type,
                    DaysPast = currentDate.DayNumber - activity.UpdateDate.DayNumber
                }).ToListAsync();

            if (
                recentActivities is null ||
                !await context.Users.Where(x => x.Id == userId).AnyAsync()
            ) return null;
            else
            {
                foreach(RecentActivityDto activity in recentActivities.Reverse<RecentActivityDto>())
                {
                    reverse.Add(activity);
                }
            }

            return reverse;
        }
    }
}
