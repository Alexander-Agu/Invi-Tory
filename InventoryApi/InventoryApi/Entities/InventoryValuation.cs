using InventoryApi.Mappings;

namespace InventoryApi.Entities
{
    public class InventoryValuation
    {
        public int Id { get; set; }
        public int Quintity { get; set; }
        public decimal TotalPurchaceCost { get; set; }
        public decimal SharedCost { get; set; }
        public decimal WeightedAvarage { get; set; }
        public decimal ClosingStock { get; set; }
        public bool BoughtOrSold { get; set; }
        public DateOnly CreatedAt { get; set; } = DateOnly.FromDateTime(DateTime.Today);
        public DateOnly UpdatedDate { get; set; }


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }
        public int InventoryId { get; set; }
        public Inventory? Inventory { get; set; }
    }
}
