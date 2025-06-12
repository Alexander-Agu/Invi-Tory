using InventoryApi.Models.RecentActivityDtos;
using InventoryApi.Repository;

namespace InventoryApi.Services.RecentActivityServices
{
    public class RecentActivityService(InvitoryContext context) : IRecentActivityService
    {
        public Task<List<RecentActivityDto>> GetAllRecentActivitiesAsync()
        {
            throw new NotImplementedException();
        }
    }
}
