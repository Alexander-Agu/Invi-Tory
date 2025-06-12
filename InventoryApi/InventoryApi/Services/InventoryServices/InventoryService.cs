using System.Diagnostics.Metrics;
using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.InventoryTypeDtos;
using InventoryApi.Repository;
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
            if (await context.Inventory.Where(n => n.Name == request.Name).AnyAsync()) return null;


            Inventory inventory = request.ToEntity();
            inventory.UserId = userId;

            await context.Inventory.AddAsync(inventory);
            await context.SaveChangesAsync();
            await AddUnit(userId, inventory.Id);

            return inventory.ToDto();
        }


        // Deletes user inventory
        public async Task<bool> DeleteInventoryAsync(int userId, int inventoryId)
        {
            if (!await FindInventory(userId, inventoryId)) return false;

            await context.Inventory.Where(x => x.Id == inventoryId && x.UserId == userId)
                .ExecuteDeleteAsync();
            await context.SaveChangesAsync();

            return true;
        }


        // Get all users inventory boxes
        public async Task<List<InventoryDto>> GetAllInventoryAsync(int userId)
        {
            if (!await FindUser(userId)) return null;

            
            List<InventoryDto> inventories = await context.Inventory.Where(x => x.UserId == userId)
                .Select(inventory => new InventoryDto
                {
                    InventoryId = inventory.Id,
                    UserId = userId,
                    Category = inventory.Category,
                    Name = inventory.Name
                }).ToListAsync();

            return inventories;
        }


        // Get user user Inventory
        public async Task<InventoryDto> GetInventoryAsync(int userId, int inventoryId)
        {
            Inventory? inventory = await context.Inventory.Where(x => x.UserId == userId && x.Id == inventoryId)
                .FirstOrDefaultAsync();
            if (inventory == null) return null;

            return inventory.ToDto();
        }

        public async Task<bool> UpdateInventoryNameAsync(int userId, int inventoryId, SetInventoryDto request)
        {
            Inventory? inventory = await context.Inventory.Where(x => x.UserId == userId && x.Id == inventoryId)
                .FirstOrDefaultAsync();
            if (inventory == null) return false;

            inventory.Name = request.Name;
            await context.SaveChangesAsync();

            return true;
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
        public async Task AddUnit(int userId, int inventoryId)
        {
            Unit? unit = new Unit();
            unit.UserId = userId;
            unit.InventoryId = inventoryId;
            await context.Units.AddAsync(unit);
            await context.SaveChangesAsync();
        }
    }
}
