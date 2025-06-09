namespace InventoryApi.Models.ItemDtos
{
    public class ItemDto
    {
        public string Name { get; set; } = string.Empty;
        public string Tag { get; set; } = string.Empty;
        public int InventoryId { get; set; }
        public int UserId { get; set; }
    }
}
