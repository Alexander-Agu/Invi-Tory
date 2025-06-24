namespace InventoryApi.Models.ItemDtos
{
    public class CreateItemDto
    {
        public required string Name { get; set; }
        public required string Tag { get; set; }
        public decimal Value { get; set; }
        //public DateOnly ExpiryDate { get; set; }
    }
}
