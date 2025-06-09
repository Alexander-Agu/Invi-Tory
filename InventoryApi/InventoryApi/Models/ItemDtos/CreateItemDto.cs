namespace InventoryApi.Models.ItemDtos
{
    public class CreateItemDto
    {
        public required string Name { get; set; }
        public required string Tag { get; set; }
    }
}
