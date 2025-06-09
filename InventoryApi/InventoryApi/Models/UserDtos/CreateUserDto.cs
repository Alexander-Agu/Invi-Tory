namespace InventoryApi.Models.UserDtos
{
    public class CreateUserDto
    {
        public required string Firstname { get; set; }
        public string Lastname { get; set; } = string.Empty;
        public required string Username { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        
    }
}
