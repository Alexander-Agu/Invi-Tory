namespace InventoryApi.Models.UserDtos
{
    public class GetUserDto
    {
        public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public int Days { get; set; }
        public string Email { get; set; } = string.Empty;
        public DateOnly CreatedAt { get; set; }
    }
}
