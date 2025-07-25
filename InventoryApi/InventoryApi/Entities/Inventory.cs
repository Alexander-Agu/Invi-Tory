using InventoryApi.Mappings;

namespace InventoryApi.Entities
{
    public class Inventory
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal SharedCost { get; set; }
        public DateOnly CreatedAt { get; set; } = DateOnly.FromDateTime(DateTime.Today);


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }
        public List<Item>? Items { get; set; }
        public Unit? Unit { get; set; }
        public InventoryValuation? InventoryValuation { get; set; }
    }
}
