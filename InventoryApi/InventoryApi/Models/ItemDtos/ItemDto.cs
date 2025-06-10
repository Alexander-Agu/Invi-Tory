namespace InventoryApi.Models.ItemDtos
{
    public class ItemDto
    {
        public int ItemId { get; set; }
        public int InventoryId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Tag { get; set; } = string.Empty;
    }
}
