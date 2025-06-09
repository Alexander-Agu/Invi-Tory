using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.UserDtos;
using InventoryApi.Repository;
using Microsoft.AspNetCore.Identity;

namespace InventoryApi.Services.UserServices
{
    public class UserService(InvitoryContext context) : IUserService
    {
        // Creates user account
        public async Task<UserDto> RegisterUserAsync(CreateUserDto request)
        {
            User user = request.ToEntity();

            // If user did not input Firstname or Username return null
            if (string.IsNullOrEmpty(user.Firstname) || string.IsNullOrEmpty(user.Username)) return null;


            // Validate email... add an email validation method later
            if (string.IsNullOrEmpty(user.Email)) return null;


            // Validate password... add a password validation method later
            if (string.IsNullOrEmpty(request.Password)) return null;

            user.HashedPassword = HashPassword(user, request.Password);


            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();
            
            return user.ToDto();
        }


        // Logs in user into their account
        public Task<UserDto> LoginAsync(LoginDto request)
        {
            throw new NotImplementedException();
        }

        // HELPER METHODS
        public string HashPassword(User user, string password)
        {
            return new PasswordHasher<User>()
                .HashPassword(user, password);
        }
    }
}
