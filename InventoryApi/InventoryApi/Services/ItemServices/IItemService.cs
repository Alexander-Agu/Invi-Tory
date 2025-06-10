using InventoryApi.Models.ItemDtos;

namespace InventoryApi.Services.ItemServices
{
    public interface IItemService
    {
        // Create item using userId and inventoryId
        Task<ItemDto> CreateItemAsync(int userId, int inventoryId, CreateItemDto itemDto);

        // Delete item using userId, inventoryId and itemId
        Task DeleteItemAsync(int userId, int inventoryId, int itemId);

        // Updates item using userId, inventoryId and itemId
        Task UpdateItemAsync(int userId, int inventoryId, int itemId);

        // Get all user items
        Task<List<ItemDto>> GetAllItemsAsync(int userId, int inventoryId);

        // Get user item
        Task<ItemDto> GetItemAsync(int userId, int inventoryId, int itemId);
    }
}
