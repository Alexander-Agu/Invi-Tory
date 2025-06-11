using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.ItemDtos;
using InventoryApi.Repository;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Services.ItemServices
{
    public class ItemService(InvitoryContext context) : IItemService
    {
        // Creates items
        public async Task<ItemDto> CreateItemAsync(int userId, int inventoryId, CreateItemDto request)
        {
            // Check if inventory exists
            if (!await CheckInventory(userId, inventoryId)) return null;

            Item item = request.ToEntity();
            item.InventoryId = inventoryId;
            item.UserId = userId;

            await context.Items.AddAsync(item);
            await context.SaveChangesAsync();

            return item.ToDto();
        }


        // Delete item
        public async Task<bool> DeleteItemAsync(int userId, int inventoryId, int itemId)
        {
            if (
                !await CheckInventory(userId, inventoryId) &&
                !await context.Items.Where(i => i.Id == itemId).AnyAsync()
                ) return false;

            await context.Items.Where(u => u.Id == itemId && u.UserId == userId && u.InventoryId == inventoryId)
                .ExecuteDeleteAsync();

            await context.SaveChangesAsync();
            return true;
        }


        // Gets all user item
        public async Task<List<ItemDto>> GetAllItemsAsync(int userId, int inventoryId)
        {
            if (!await CheckInventory(userId, inventoryId)) return null;

            List<ItemDto> items = await context.Items.Where(i => i.UserId == userId && i.InventoryId == inventoryId)
                .Select(item => new ItemDto
                {
                    InventoryId = inventoryId,
                    ItemId = item.Id,
                    Name = item.Name,
                    Tag = item.Tag
                }).ToListAsync();

            return items;
        }


        // Get user item
        public async Task<ItemDto> GetItemAsync(int userId, int inventoryId, int itemId)
        {
            Item? item = await GetItem(userId, inventoryId, itemId);

            return item is null? null : item.ToDto();
        }



        // Update userItem
        public async Task<bool> UpdateItemAsync(int userId, int inventoryId, int itemId, SetItemDto request)
        {
            Item? item = await GetItem(userId, inventoryId, itemId);
            if (item is null) return false;

            item.Name = request.Name;
            item.Tag = request.Tag;

            await context.SaveChangesAsync();

            return true;
        }


        
        // HELPER METHODS

        // Check if inventory exists
        private async Task<bool> CheckInventory(int userId, int inventoryId)
        {
            if (
                await context.Users.Where(u => u.Id == userId).AnyAsync() &&
                await context.Inventory.Where(i => i.Id == inventoryId).AnyAsync()
               ) return true;

            return false;
        }

        // Get Item by userId, inventoryId and itemId
        private async Task<Item> GetItem(int userId, int inventoryId, int itemId)
        {
            Item? item = await context.Items.Where(i => i.UserId == userId && i.InventoryId == inventoryId)
                        .FirstOrDefaultAsync();
            if (item is null) return null;

            return item;
        }
    }
}
