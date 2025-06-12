namespace InventoryApi.Entities
{
    public class RecentActivity
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Request { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public DateOnly UpdateDate { get; set; } = DateOnly.FromDateTime(DateTime.Today);


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
