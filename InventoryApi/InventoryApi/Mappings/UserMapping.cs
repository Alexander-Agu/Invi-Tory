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
    }
}
