using InventoryApi.Models.ItemDtos;

namespace InventoryApi.Services.ItemServices
{
    public interface IItemService
    {
        // Create item using userId and inventoryId
        Task<ItemDto> CreateItemAsync(int userId, int inventoryId, CreateItemDto request);

        // Delete item using userId, inventoryId and itemId
        Task<bool> DeleteItemAsync(int userId, int inventoryId, int itemId);

        // Updates item using userId, inventoryId and itemId
        Task<bool> UpdateItemAsync(int userId, int inventoryId, int itemId, SetItemDto request);

        // Get all inventory user items
        Task<List<ItemDto>> GetAllItemsAsync(int userId);

        // Get user item
        Task<ItemDto> GetItemAsync(int userId, int inventoryId, int itemId);

        // Get all items
        Task<List<ItemDto>> GetAllInventoryItemsAsync(int userId, int inventoryId);
    }
}
