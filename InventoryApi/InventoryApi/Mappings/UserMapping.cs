using InventoryApi.Entities;
using InventoryApi.Models.UserDtos;

namespace InventoryApi.Mappings
{
    public static class UserMapping
    {
        public static User ToEntity(this CreateUserDto request) {
            return new User
            {
                Firstname = request.Firstname,
                Lastname = request.Lastname,
                Username = request.Username,
                Email = request.Email

            };
        }
    


        public static UserDto ToDto(this User request)
        {
            return new UserDto
            {
                UserId = request.Id,
                AccessToken = request.Token,
                RefreshToken = request.RefreshToken,
                RefreshTokenExpiryDate = request.RefreshTokenExpiryDate,
            };
        }


        public static GetUserDto ToGetUserDto(this User request)
        {
            return new GetUserDto
            {
                Firstname = request.Firstname,
                Lastname = request.Lastname,
                Username = request.Username
            };
        }
    }
}
