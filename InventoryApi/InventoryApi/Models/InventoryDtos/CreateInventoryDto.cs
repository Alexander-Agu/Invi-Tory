namespace InventoryApi.Models.InventoryTypeDtos
{
    public class CreateInventoryDto
    {
        public required string Name { get; set; }
        public required string Category { get; set; }
    }
}
