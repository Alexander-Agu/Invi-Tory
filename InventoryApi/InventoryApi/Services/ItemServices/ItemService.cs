using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.ItemDtos;
using InventoryApi.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;
using Microsoft.Extensions.Configuration.UserSecrets;

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
            item.CreatedAt = DateOnly.FromDateTime(DateTime.Today);

            await context.Items.AddAsync(item);
            await context.SaveChangesAsync();
            await AddItemUnit(userId, inventoryId);
            await AddRecentActivity(userId, item.Name, "Item", "Create");

            // Check if inventory exists
            Inventory? inventory = await context.Inventory.Where(x => x.Id == item.InventoryId && x.UserId == item.UserId)
                .FirstOrDefaultAsync();
            if (inventory is null) return null;


            // Add item valuation
            await AddItemValuationCalcAsync(inventory, userId, item);


            ItemDto itemDto = item.ToDto();
            itemDto.InventoryName = inventory.Name;
            itemDto.InventoryCategory = inventory.Category;
            itemDto.CreatedAt = DateOnly.FromDateTime(DateTime.Today);

            return itemDto;
        }


        // Delete item
        public async Task<bool> DeleteItemAsync(int userId, int inventoryId, int itemId)
        {


            // Check if item exists
            Item? item = await context.Items.Where(x => x.Id == itemId && x.UserId == userId && x.InventoryId == inventoryId).FirstOrDefaultAsync();
            if (
                item is null 
                ) return false;

            // Check if inventory exists
            Inventory? inventory = await context.Inventory.Where(x => x.Id == item.InventoryId && x.UserId == item.UserId)
                .FirstOrDefaultAsync();
            if (inventory is null) return false;

            await SubtractItemValuationCalcAsync(inventory, userId, item);
            await AddRecentActivity(userId, item.Name, "Item", "Delete");
            await context.Items.Where(u => u.Id == itemId && u.UserId == userId && u.InventoryId == inventoryId)
                .ExecuteDeleteAsync();

            await context.SaveChangesAsync();
            await SubtractItemUnit(userId, inventoryId);

            return true;
        }


        // Gets all user item
        public async Task<List<ItemDto>> GetAllItemsAsync(int userId)
        {
            List<ItemDto> items = await context.Items.Where(i => i.UserId == userId)
                .Select(item => new ItemDto
                {
                    InventoryId = item.InventoryId,
                    ItemId = item.Id,
                    Name = item.Name,
                    Tag = item.Tag,
                    CreatedAt = item.CreatedAt,
                    Value = item.Value
                }).ToListAsync();


            foreach (var item in items)
            {
                Inventory? inventory = await context.Inventory.Where(x => x.Id == item.InventoryId)
                    .FirstOrDefaultAsync();
                item.InventoryName = inventory.Name;
                item.InventoryCategory = inventory.Category;
            }

            return items;
        }


        public async Task<List<ItemDto>> GetAllInventoryItemsAsync(int userId, int inventoryId)
        {
            if (!await CheckInventory(userId, inventoryId)) return null;

            List<ItemDto> items = await context.Items.Where(i => i.UserId == userId && i.InventoryId == inventoryId)
                .Select(item => new ItemDto
                {
                    InventoryId = inventoryId,
                    ItemId = item.Id,
                    Name = item.Name,
                    Tag = item.Tag,
                    CreatedAt = item.CreatedAt,
                    Value = item.Value
                }).ToListAsync();


            foreach (var item in items)
            {
                Inventory? inventory = await context.Inventory.Where(x => x.Id == item.InventoryId)
                    .FirstOrDefaultAsync();

                item.InventoryName = inventory.Name;
                item.InventoryCategory = inventory.Category;
            }

            return items;
        }


        // Get user item
        public async Task<ItemDto> GetItemAsync(int userId, int inventoryId, int itemId)
        {
            Item? item = await GetItem(userId, inventoryId, itemId);
            if (item is null) return null;

            Inventory? inventory = await context.Inventory.Where(x => x.Id == item.InventoryId && x.UserId == item.UserId)
                .FirstOrDefaultAsync();
            if (inventory is null) return null;

            ItemDto itemDto = item.ToDto();
            itemDto.InventoryName = inventory.Name;
            itemDto.InventoryCategory = inventory.Category;

            return itemDto;
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


        // INVENTORY VALUATION CALCULATIONS


        // Calculate the weighted avarage
        public decimal CalculateWeightedAvarage(decimal totalPurchaseCost, decimal SharedCosts, int quintity)
        {
            try
            {
                return Math.Round((totalPurchaseCost + SharedCosts) / quintity, 2);
            }
            catch
            {
                return 0;
            }
        }

        // Calculate closing stock
        public decimal CalculateClosingStock(decimal WeightedAvarage, int quintity)
        {
            return Math.Round(WeightedAvarage * quintity, 2);
        }


        public async Task<bool> AddItemValuationCalcAsync(Inventory inventory, int userId, Item item)
        {
            // Check if inventoryValuation exists
            InventoryValuation? inventoryValuation = await context.inventoryValuations.Where(x => x.UserId == userId && inventory.Id == x.InventoryId)
                .FirstOrDefaultAsync();
            if (inventoryValuation is null) return false;

            inventoryValuation.Quintity += 1;
            inventoryValuation.TotalPurchaceCost += Math.Round(item.Value, 2);

            
            decimal WeightedAvarage = CalculateWeightedAvarage(inventoryValuation.TotalPurchaceCost, inventoryValuation.SharedCost, inventoryValuation.Quintity);
            inventoryValuation.WeightedAvarage = Math.Round(WeightedAvarage, 2);
            inventoryValuation.ClosingStock = Math.Round(WeightedAvarage * inventoryValuation.Quintity, 2);

            await context.SaveChangesAsync();

            return true;
        }


        //public async Task<bool> UpdateItemValuationCalcAsync(Inventory inventory, int userId, Item item)
        //{
        //    // Check if inventoryValuation exists
        //    InventoryValuation? inventoryValuation = await context.inventoryValuations.Where(x => x.UserId == userId && inventory.Id == x.InventoryId)
        //        .FirstOrDefaultAsync();
        //    if (inventoryValuation is null) return false;

        //    inventoryValuation.TotalPurchaceCost -= Math.Round(item.Value, 2);


        //    decimal WeightedAvarage = CalculateWeightedAvarage(inventoryValuation.TotalPurchaceCost, inventoryValuation.SharedCost, inventoryValuation.Quintity);
        //    inventoryValuation.WeightedAvarage = Math.Round(WeightedAvarage, 2);
        //    inventoryValuation.ClosingStock = Math.Round(WeightedAvarage * inventoryValuation.Quintity, 2);

        //    await context.SaveChangesAsync();

        //    return true;
        //}


        public async Task<bool> SubtractItemValuationCalcAsync(Inventory inventory, int userId, Item item)
        {
            // Check if inventoryValuation exists
            InventoryValuation? inventoryValuation = await context.inventoryValuations.Where(x => x.UserId == userId && inventory.Id == x.InventoryId)
                .FirstOrDefaultAsync();
            if (inventoryValuation is null) return false;

            inventoryValuation.Quintity -= 1;
            inventoryValuation.TotalPurchaceCost -= Math.Round(item.Value, 2);

            inventoryValuation.ClosingStock = Math.Round(CalculateClosingStock(inventoryValuation.WeightedAvarage, inventoryValuation.Quintity), 2);

            await context.SaveChangesAsync();

            return true;

        }
    }
}
