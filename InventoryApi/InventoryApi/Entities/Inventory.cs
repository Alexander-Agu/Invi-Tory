namespace InventoryApi.Entities
{
    public class Inventory
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }
        public List<Item>? items { get; set; }
    }
}
