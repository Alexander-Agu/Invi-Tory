using InventoryApi.Models.InventoryDtos;
using InventoryApi.Models.InventoryTypeDtos;

namespace InventoryApi.Services.InventoryServices
{
    public interface IInventoryService
    {
        // Create Inventory
        Task<InventoryDto> CreateInventoryAsync(int userId, CreateInventoryDto request);

        // Delete Inventory
        Task<bool> DeleteInventoryAsync(int userId, int inventoryId);

        // Delete all Inventory
        //Task<bool> DeleteAllInventoryAsync(int userId);

        // Update Inventory name
        Task<bool> UpdateInventoryNameAsync(int userId, int inventoryId, SetInventoryDto request);

        // Update Inventory
        Task<bool> UpdateInventoryAsync(int userId, int inventoryId, UpdateInventoryDto request);

        // Get Inventory
        Task<InventoryDto> GetInventoryAsync(int userId, int inventoryId);

        // Get all Inventory
        Task<List<InventoryDto>> GetAllInventoryAsync(int userId);

        // Filter inventory
        Task<List<InventoryDto>> FilterInventoryByCategoryAsync(int userId, FilterInventoryDto filter);
    }
}
