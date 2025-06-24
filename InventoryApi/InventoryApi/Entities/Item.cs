namespace InventoryApi.Entities
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Tag { get; set; } = string.Empty;
        public decimal Value { get; set; }
        public DateOnly CreatedAt { get; set; } = DateOnly.FromDateTime(DateTime.Today);
        //public DateOnly ExpiryDate { get; set; }


        // Relationships
        public int InventoryId { get; set; }
        public Inventory? Inventory { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
