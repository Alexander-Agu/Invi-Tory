using InventoryApi.Models.UserDtos;

namespace InventoryApi.Services.UserServices
{
    public class UserService : IUserService
    {
        // Creates user account
        public Task<UserDto> RegisterUserAsync(CreateUserDto request)
        {
            throw new NotImplementedException();
        }


        // Logs in user into their account
        public Task<UserDto> LoginAsync(LoginDto request)
        {
            throw new NotImplementedException();
        }


    }
}
