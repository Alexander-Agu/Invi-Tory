using InventoryApi.Models.InventoryValuationDtos;

namespace InventoryApi.Services.InventoryValuationServices
{
    public interface IInventoryValuation
    {
        Task<InventoryValuationDto> InventoryValuationAsync(int userId, int inventoryId);
    }
}
