namespace InventoryApi.Entities
{
    public class Inventory
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }
        public int InventoryId { get; set; }
        public InventoryType? InventoryType { get; set; }
    }
}
