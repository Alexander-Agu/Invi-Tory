using InventoryApi.Entities;
using InventoryApi.Models.RecentActivityDtos;

namespace InventoryApi.Mappings
{
    public static class RecentActivityMapping
    {
        public static RecentActivityDto ToDto(this RecentActivity activity)
        {
            return new RecentActivityDto
            {
                RecentActivityId = activity.Id,
                UserId = activity.UserId,
                Request = activity.Request,
                Type = activity.Type,
                Name = activity.Name,
            };
        }
    }
}
