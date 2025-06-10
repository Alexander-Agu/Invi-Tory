using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.InventoryTypeDtos;
using InventoryApi.Repository;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Services.InventoryServices
{
    public class InventoryService(InvitoryContext context) : IInventoryService
    {
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

            return inventory.ToDto();
        }

        public Task<bool> DeleteAllInventoryAsync(int userId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteInventoryAsync(int userId, int inventoryId)
        {
            throw new NotImplementedException();
        }

        public Task<List<InventoryDto>> GetAllInventoryAsync(int userId)
        {
            throw new NotImplementedException();
        }

        public Task<InventoryDto> GetInventoryAsync(int userId, int inventoryId)
        {
            throw new NotImplementedException();
        }

        public Task<InventoryDto> UpdateInventoryAsync(int userId, int inventoryId, SetInventoryDto request)
        {
            throw new NotImplementedException();
        }
    }
}
