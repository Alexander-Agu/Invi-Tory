using InventoryApi.Models.UnitDtos;

namespace InventoryApi.Services.UnitServices
{
    public interface IUnitService
    {
        // Get unit data
        Task<UnitDto> GetUnitAsync(int userId, int inventoryId);

        // Get the sum of inventory units
        Task<InventoryUnitDto> GetAllUserInventoryCountAsync(int userId);


        // Get all items the user has across all inventory
        Task<ItemUnitDto> GetAllUserItemCountAsync(int userId);

        // Get a list of all user units
        Task<List<UnitDto>> GetAllUserUnitsAsync(int userId);
    }
}
