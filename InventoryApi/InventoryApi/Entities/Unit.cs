namespace InventoryApi.Entities
{
    public class Unit
    {
        public int Id { get; set; }
        public int ItemUnit { get; set; }


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }

        public int InventoryId { get; set; }
        public Inventory? Inventory { get; set; }
    }
}
