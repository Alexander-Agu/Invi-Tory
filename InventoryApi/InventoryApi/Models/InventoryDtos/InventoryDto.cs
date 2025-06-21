namespace InventoryApi.Models.InventoryTypeDtos
{
    public class InventoryDto
    {
        public int InventoryId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public int ItemCount { get; set; }
    }
}
