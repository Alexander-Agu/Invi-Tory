using InventoryApi.Entities;
using InventoryApi.Models.InventoryValuationDtos;

namespace InventoryApi.Mappings
{
    public static class InventoryValuationMapping
    {
        public static InventoryValuationDto ToDto(this InventoryValuation request)
        {
            return new InventoryValuationDto
            {
                Id = request.Id,
                UserId = request.UserId,
                InventoryId = request.InventoryId,
            };
        }
    }
}
