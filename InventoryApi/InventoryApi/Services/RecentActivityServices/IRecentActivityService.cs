using InventoryApi.Models.RecentActivityDtos;

namespace InventoryApi.Services.RecentActivityServices
{
    public interface IRecentActivityService
    {
        Task<List<RecentActivityDto>> GetAllRecentActivitiesAsync();
    }
}
