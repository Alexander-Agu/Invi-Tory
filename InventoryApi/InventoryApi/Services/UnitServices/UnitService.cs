using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.UnitDtos;
using InventoryApi.Repository;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Services.UnitServices
{
    public class UnitService(InvitoryContext context) : IUnitService
    {
        // Get the sum of inventory units
        public async Task<InventoryUnitDto> GetAllUserInventoryCountAsync(int userId)
        {
            List<Unit>? units = await context.Units.Where(x => x.UserId == userId).ToListAsync();
            if (units is null) return null;

            InventoryUnitDto inventoryUnit = new InventoryUnitDto();
            inventoryUnit.InventoryUnit = units.Count();

            return inventoryUnit;
        }


        // Get all items the user has across all inventory
        public async Task<ItemUnitDto> GetAllUserItemCountAsync(int userId)
        {
            List<Unit>? units = await context.Units.Where(x => x.UserId == userId).ToListAsync();
            if (units is null) return null;

            int unitSum = 0;
            for (int i = 0; i < units.Count; i++)
            {
                unitSum += units[i].ItemUnit;
            }

            ItemUnitDto itemUnit = new ItemUnitDto();
            itemUnit.ItemUnit = unitSum;

            return itemUnit;
        }


        // Get a list of all user units
        public async Task<List<UnitDto>> GetAllUserUnitsAsync(int userId)
        {
            List<UnitDto>? units = await context.Units.Where(x => x.UserId == userId)
                .Select(unit => new UnitDto
                {
                    UnitId = unit.Id,
                    UserId = unit.UserId,
                    InventoryUnit = unit.InventoryId,
                    InventoryName = unit.InventoryName
                }).ToListAsync();
            if (units is null) return null;

            return units;
        }


        // Get unit data
        public async Task<UnitDto> GetUnitAsync(int userId, int inventoryId)
        {
            Unit? unit = await context.Units.Where(x => x.UserId == userId && x.InventoryId == inventoryId).FirstOrDefaultAsync();
            if (unit is null) return null;

            return unit.ToDto();
        }



    }
}
