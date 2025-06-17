namespace InventoryApi.Models.InventoryValuationDtos
{
    public class InventoryValuationDto
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

        public int UserId { get; set; }
        public int InventoryId { get; set; }
    }
}
