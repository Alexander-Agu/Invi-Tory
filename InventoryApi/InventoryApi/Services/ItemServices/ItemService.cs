using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.ItemDtos;
using InventoryApi.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;

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
            await AddItemUnit(userId, inventoryId);
            await AddRecentActivity(userId, item.Name, "Item", "Create");

            return item.ToDto();
        }


        // Delete item
        public async Task<bool> DeleteItemAsync(int userId, int inventoryId, int itemId)
        {
            Item? item = await context.Items.Where(x => x.Id == itemId && x.UserId == userId && x.InventoryId == inventoryId).FirstOrDefaultAsync();
            if (
                item is null 
                ) return false;

            await AddRecentActivity(userId, item.Name, "Item", "Delete");
            await context.Items.Where(u => u.Id == itemId && u.UserId == userId && u.InventoryId == inventoryId)
                .ExecuteDeleteAsync();

            await context.SaveChangesAsync();
            await SubtractItemUnit(userId, inventoryId);

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
            await AddRecentActivity(userId, item.Name, "Item", "Update");

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
            Item? item = await context.Items.Where(i => i.UserId == userId && i.InventoryId == inventoryId && i.Id == itemId)
                        .FirstOrDefaultAsync();
            if (item is null) return null;

            return item;
        }




        // UNITS TABLE
        
        // Add 1 to Itemunit when item is created
        public async Task AddItemUnit(int userId, int inventoryId)
        {
            Unit? itemUnit = await context.Units.Where(x => x.UserId == userId && inventoryId == x.InventoryId).FirstOrDefaultAsync();

            if (itemUnit != null)
            {
                itemUnit.ItemUnit++;
            }

            await context.SaveChangesAsync();
        }


        // Subtract 1 to Itemunit when item is deleted
        public async Task SubtractItemUnit(int userId, int inventoryId)
        {
            Unit? itemUnit = await context.Units.Where(x => x.UserId == userId && inventoryId == x.InventoryId).FirstOrDefaultAsync();

            if (itemUnit != null)
            {
                itemUnit.ItemUnit--;
            }

            await context.SaveChangesAsync();
        }



        // RECENT ACTIVITY TABLE
        public async Task AddRecentActivity(int userId, string activityName, string requestType, string endpointType)
        {
            List<RecentActivity>? recentActivitis = await context.RecentActivities.Where(x => x.UserId == userId)
                .ToListAsync(); // FInd recent activities

            if (recentActivitis.Count >= 5) // Ensure user has only 5 activities
            {
                RecentActivity? activity = recentActivitis.FirstOrDefault();

                await context.RecentActivities.Where(x => x.Id == activity.Id && x.UserId == userId).ExecuteDeleteAsync();
            }

            RecentActivity recentActivity = new RecentActivity();
            recentActivity.UserId = userId;
            recentActivity.Name = activityName;
            recentActivity.Request = requestType;
            recentActivity.Type = endpointType;

            await context.RecentActivities.AddAsync(recentActivity);
            await context.SaveChangesAsync();
        }
    }
}
