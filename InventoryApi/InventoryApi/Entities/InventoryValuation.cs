namespace InventoryApi.Entities
{
    public class InventoryValuation
    {
        public int Id { get; set; }
        public int UnitsPurchased { get; set; }
        public int UnitsSold { get; set; }
        public int UnitsRemaining { get; set; }
        public decimal TotalPurchaceCost { get; set; }
        public decimal WeightedAvarage { get; set; }
        public decimal ClosingStock { get; set; }
        public string Period { get; set; } = string.Empty;
        public DateOnly CreatedAt { get; set; }


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }
        public int InventoryId { get; set; }
        public Inventory? Inventory { get; set; }
    }
}
