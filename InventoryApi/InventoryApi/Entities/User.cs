namespace InventoryApi.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string HashedPassword { get; set; } = string.Empty;
        public DateOnly CreatedAt { get; set; }

        // Token
        public string Token { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
        public DateTime RefreshTokenExpiryDate { get; set; }


        // Relationships
        public List<Inventory>? Inventories { get; set; }
        public List<Item>? Items { get; set; }
        public List<Unit>? Units { get; set; }
        public List<RecentActivity>? RecentActivities { get; set; }
        public Unit? Unit { get; set; }

    }
}
