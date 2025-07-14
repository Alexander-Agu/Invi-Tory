using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.InventoryValuationDtos;
using InventoryApi.Repository;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Services.InventoryValuationServices
{
    public class InventoryValuationService(InvitoryContext context) : IInventoryValuation
    {
        public async Task<InventoryValuationDto> InventoryValuationAsync(int userId, int inventoryId)
        {
            InventoryValuation? inventoryValuation = await context.inventoryValuations.Where(x => x.UserId == userId && x.InventoryId == inventoryId).FirstOrDefaultAsync();
            if (inventoryValuation == null) return null;

            return inventoryValuation.ToDto();
        }
    }
}
