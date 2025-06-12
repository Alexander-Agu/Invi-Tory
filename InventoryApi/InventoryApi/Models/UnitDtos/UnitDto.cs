namespace InventoryApi.Models.UnitDtos
{
    public class UnitDto
    {
        public int UnitId { get; set; }
        public int UserId { get; set; }
        public string InventoryName { get; set; } = string.Empty;
        public int InventoryUnit { get; set; }
        public int ItemUnit { get; set; }
    }
}
