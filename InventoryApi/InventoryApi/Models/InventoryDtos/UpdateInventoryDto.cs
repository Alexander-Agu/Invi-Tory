namespace InventoryApi.Models.InventoryDtos
{
    public class UpdateInventoryDto
    {
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal SharedCosts { get; set; }
    }
}
