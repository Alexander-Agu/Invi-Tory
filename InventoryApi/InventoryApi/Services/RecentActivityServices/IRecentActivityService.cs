using InventoryApi.Models.RecentActivityDtos;

namespace InventoryApi.Services.RecentActivityServices
{
    public interface IRecentActivityService
    {
        // Return all user recent activity
        Task<List<RecentActivityDto>> GetAllRecentActivitiesAsync(int userId);
    }
}
