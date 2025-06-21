using InventoryApi.Entities;
using InventoryApi.Models.InventoryDtos;
using InventoryApi.Models.InventoryTypeDtos;

namespace InventoryApi.Mappings
{
    public static class InventoryMapping
    {
        public static Inventory ToEntity(this CreateInventoryDto request)
        {
            return new Inventory
            {
                Name = request.Name,
                Category = request.Category
            };
        }

        public static Inventory ToEntity(this UpdateInventoryDto request)
        {
            return new Inventory
            {
                Name = request.Name,
                Category = request.Category
            };
        }

        public static InventoryDto ToDto(this Inventory request)
        {
            return new InventoryDto
            {
                InventoryId = request.Id,
                UserId = request.UserId,
                Name = request.Name,
                Category = request.Category
            };
        }
    }
}
