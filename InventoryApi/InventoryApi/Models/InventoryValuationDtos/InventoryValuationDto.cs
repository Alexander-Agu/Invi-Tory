namespace InventoryApi.Models.InventoryValuationDtos
{
    public class InventoryValuationDto
    {
        public int Id { get; set; }
        public int Quintity { get; set; }
        public decimal TotalPurchaceCost { get; set; }
        public decimal SharedCost { get; set; }
        public decimal WeightedAvarage { get; set; }
        public decimal ClosingStock { get; set; }
        public bool BoughtOrSold { get; set; }
        public DateOnly CreatedAt { get; set; }
        public DateOnly UpdatedDate { get; set; }

        public int UserId { get; set; }
        public int InventoryId { get; set; }
    }
}
