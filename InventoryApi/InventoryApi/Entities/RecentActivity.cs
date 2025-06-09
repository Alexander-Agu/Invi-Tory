namespace InventoryApi.Entities
{
    public class RecentActivity
    {
        public int Id { get; set; }
        public string Request { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;


        // Relationships
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
