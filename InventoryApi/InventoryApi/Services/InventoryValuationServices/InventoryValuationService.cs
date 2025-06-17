using InventoryApi.Models.InventoryValuationDtos;
using InventoryApi.Repository;

namespace InventoryApi.Services.InventoryValuationServices
{
    public class InventoryValuationService(InvitoryContext context) : IInventoryValuation
    {
        public async Task<InventoryValuationDto> InventoryValuationAsync(int userId, int inventoryId)
        {

        }
    }
}
