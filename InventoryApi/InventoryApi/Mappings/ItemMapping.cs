using InventoryApi.Entities;
using InventoryApi.Models.ItemDtos;

namespace InventoryApi.Mappings
{
    public static class ItemMapping
    {
        public static Item ToEntity(this CreateItemDto request)
        {
            return new Item
            {
                Name = request.Name,
                Tag = request.Tag,
                Value = request.Value
            };
        }


        public static ItemDto ToDto(this Item item)
        {
            return new ItemDto
            {
                ItemId = item.Id,
                InventoryId = item.InventoryId,
                Name = item.Name,
                Tag = item.Tag,
                Value = item.Value,
                CreatedAt = item.CreatedAt,
            };
        }
    }
}
