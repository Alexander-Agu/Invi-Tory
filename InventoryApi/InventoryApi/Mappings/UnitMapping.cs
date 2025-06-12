using InventoryApi.Entities;
using InventoryApi.Models.UnitDtos;

namespace InventoryApi.Mappings
{
    public static class UnitMapping
    {
        public static UnitDto ToDto(this Unit request)
        {
            return new UnitDto
            {
                InventoryName = request.InventoryName,
                ItemUnit = request.ItemUnit,
                UnitId = request.Id,
                UserId = request.UserId,
                InventoryUnit = request.InventoryId
            };
        }
    }
}
