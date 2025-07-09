using System.Collections;
using System.Diagnostics.Metrics;
using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.InventoryDtos;
using InventoryApi.Models.InventoryTypeDtos;
using InventoryApi.Models.RecentActivityDtos;
using InventoryApi.Repository;
using InventoryApi.Services.InventoryValuationServices;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Services.InventoryServices
{
    public class InventoryService(InvitoryContext context) : IInventoryService
    {
        // Creates user's Inventory
        public async Task<InventoryDto> CreateInventoryAsync(int userId, CreateInventoryDto request)
        {
            // Find user
            User? user = await context.Users.FindAsync(userId);
            if (user == null) return null;

            // Do not allow user to add an inventory with the same Inventory Name
            if (await context.Inventory.Where(n => n.Name == request.Name ).AnyAsync()) return null;




            Inventory inventory = request.ToEntity();
            inventory.UserId = userId;

            await context.Inventory.AddAsync(inventory);
            await context.SaveChangesAsync();
            await AddUnit(userId, inventory.Id, inventory.Name);
            await AddRecentActivity(userId, inventory.Name, "Inventory", "Create");

            InventoryValuation inventoryValuation = CreateInventoryValuationData(inventory);
            await context.inventoryValuations.AddAsync(inventoryValuation);
            await context.SaveChangesAsync();


            return inventory.ToDto();
        }
         

        // Deletes user inventory
        public async Task<bool> DeleteInventoryAsync(int userId, int inventoryId)
        {
            Inventory? inventory = await context.Inventory.Where(x => x.Id == inventoryId && x.UserId == userId).FirstOrDefaultAsync();
            if (inventory is null) return false;

            await AddRecentActivity(userId, inventory.Name, "Inventory", "Delete");
            await context.Inventory.Where(x => x.Id == inventoryId && x.UserId == userId)
                .ExecuteDeleteAsync();
            await context.SaveChangesAsync();
            

            return true;
        }


        // Get all users inventory boxes
        public async Task<List<InventoryDto>> GetAllInventoryAsync(int userId)
        {
            if (!await FindUser(userId)) return null;

            List<Item> items = await context.Items.Where(x => x.UserId == userId).ToListAsync();
            List<InventoryDto> inventories = await context.Inventory.Where(x => x.UserId == userId)
                .Select(inventory => new InventoryDto
                {
                    InventoryId = inventory.Id,
                    UserId = userId,
                    Category = inventory.Category,
                    Name = inventory.Name,
                    ItemCount = 1,
                    SharedCosts = inventory.SharedCost,

                }).ToListAsync();

            foreach (var inventory in inventories)
            {
                inventory.ItemCount = await context.Items.Where(x => x.UserId == userId && x.InventoryId == inventory.InventoryId).CountAsync();
            }
            

            return inventories;
        }


        // Get user Inventory
        public async Task<InventoryDto> GetInventoryAsync(int userId, int inventoryId)
        {
            Inventory? inventory = await context.Inventory.Where(x => x.UserId == userId && x.Id == inventoryId)
                .FirstOrDefaultAsync();
            if (inventory == null) return null;

            return inventory.ToDto();
        }


        // Update inventory name
        public async Task<bool> UpdateInventoryNameAsync(int userId, int inventoryId, SetInventoryDto request)
        {
            Inventory? inventory = await context.Inventory.Where(x => x.UserId == userId && x.Id == inventoryId)
                .FirstOrDefaultAsync();
            if (inventory == null) return false;

            if (!string.IsNullOrEmpty(request.Name)) inventory.Name = request.Name; ;
            await context.SaveChangesAsync();
            await AddRecentActivity(userId, inventory.Name, "Inventory", "Update");

            return true;
        }


        // Update inventory
        public async Task<bool> UpdateInventoryAsync(int userId, int inventoryId, UpdateInventoryDto request)
        {
            // Checking if the inventory exists
            Inventory? inventory = await context.Inventory.Where(x => x.UserId == userId && x.Id == inventoryId)
                .FirstOrDefaultAsync();
            if (inventory == null) return false;

            // Because InvantoryValuation gets created when inventory gets created it should be found if inventory is also found
            InventoryValuation? inventoryValuation = await context.inventoryValuations.Where(x => x.UserId == userId && x.InventoryId == inventoryId)
                .FirstOrDefaultAsync();
            if (inventoryValuation == null) return false;


            // Updat if values are not empty and not the same
            if (!string.IsNullOrEmpty(request.Name)) inventory.Name = request.Name;
            if (!string.IsNullOrEmpty(request.Category)) inventory.Category = request.Category;
            if (request.SharedCosts != inventory.SharedCost)
            {
                inventory.SharedCost = request.SharedCosts;
                inventoryValuation.SharedCost = request.SharedCosts;

                inventoryValuation.WeightedAvarage = CalculateWeightedAvarage(inventoryValuation.TotalPurchaceCost, inventoryValuation.SharedCost, inventoryValuation.Quintity);
                inventoryValuation.ClosingStock = inventoryValuation.WeightedAvarage * inventoryValuation.Quintity;
            };


            await context.SaveChangesAsync();
            await AddRecentActivity(userId, inventory.Name, "Inventory", "Update");

            return true;

        }


        // Filter inventory by category
        public async Task<List<InventoryDto>> FilterInventoryByCategoryAsync(int userId, FilterInventoryDto filter)
        {
            if (!await FindUser(userId)) return null;


            List<Item> items = await context.Items.Where(x => x.UserId == userId).ToListAsync();
            List<InventoryDto> inventories;


            if (filter.Category.ToLower() == "all")
            {
                inventories = await context.Inventory.Where(x => x.UserId == userId)
                    .Select(inventory => new InventoryDto
                    {
                        InventoryId = inventory.Id,
                        UserId = userId,
                        Category = inventory.Category,
                        Name = inventory.Name,
                        ItemCount = 1

                    }).ToListAsync();
            } else
            { // Filter only when neccesary
                inventories = await context.Inventory.Where(x => x.UserId == userId && x.Category.ToLower() == filter.Category.ToLower())
                    .Select(inventory => new InventoryDto
                    {
                        InventoryId = inventory.Id,
                        UserId = userId,
                        Category = inventory.Category,
                        Name = inventory.Name,
                        ItemCount = 1

                    }).ToListAsync();
            }


            foreach (var inventory in inventories)
            {
                inventory.ItemCount = await context.Items.Where(x => x.UserId == userId && x.InventoryId == inventory.InventoryId).CountAsync();
            }

            return inventories;
        }



        // HELPER METHODS

        // Finds inventory by userId
        private async Task<bool> FindUser(int UserId)
        {
            bool userExists = await context.Users.Where(x => x.Id == UserId).AnyAsync();
            if (userExists) return true;

            return false;
        }


        // Finds inventory by inventoryId and userId
        private async Task<bool> FindInventory(int UserId, int InventoryId)
        {
            bool userExists = await context.Users.Where(x => x.Id == UserId).AnyAsync();
            bool inventoryExists = await context.Inventory.Where(x => x.Id == InventoryId).AnyAsync();

            if (inventoryExists && userExists) return true;

            return false;
        }



        // UNITS

        // Adding Inventory Unit
        public async Task AddUnit(int userId, int inventoryId, string name)
        {
            Unit? unit = new Unit();
            unit.UserId = userId;
            unit.InventoryId = inventoryId;
            unit.InventoryName = name;
            await context.Units.AddAsync(unit);
            await context.SaveChangesAsync();
        }



        // RECENT ACTIVITY TABLE
        public async Task AddRecentActivity(int userId, string activityName, string requestType, string endpointType)
        {
            List<RecentActivity>? recentActivitis = await context.RecentActivities.Where(x => x.UserId == userId)
                .ToListAsync();

            if (recentActivitis.Count >= 5)
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


        // Create Inventory Valuation data
        public InventoryValuation CreateInventoryValuationData(Inventory inventory)
        {
            return new InventoryValuation
            {
                InventoryId = inventory.Id,
                UserId = inventory.UserId,
                SharedCost = inventory.SharedCost,
                CreatedAt = DateOnly.FromDateTime(DateTime.Today),
                UpdatedDate = DateOnly.FromDateTime(DateTime.Today),
            };
        }


        // Calculate the weighted avarage
        public decimal CalculateWeightedAvarage(decimal totalPurchaseCost, decimal SharedCosts, int quintity)
        {
            return (totalPurchaseCost + SharedCosts) / quintity;
        }
    }
}
