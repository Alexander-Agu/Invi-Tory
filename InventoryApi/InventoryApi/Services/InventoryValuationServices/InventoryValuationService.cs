//using InventoryApi.Entities;
//using InventoryApi.Models.InventoryValuationDtos;
//using InventoryApi.Repository;
//using Microsoft.EntityFrameworkCore;

//namespace InventoryApi.Services.InventoryValuationServices
//{
//    public class InventoryValuationService(InvitoryContext context) : IInventoryValuation
//    {
//        public async Task<InventoryValuationDto> InventoryValuationAsync(int userId, int inventoryId)
//        {
//            List<decimal>? items = await context.Items.Where(x => x.UserId == userId && x.InventoryId == inventoryId)
//                .Select(value => value.Value)
//                .ToListAsync();

            
//        }
//    }
//}
