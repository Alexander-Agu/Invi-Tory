namespace InventoryApi.Entities
{
    public class InventoryType
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        // Relationships
        public List<Inventory>? Inventories { get; set; }
    }
}
