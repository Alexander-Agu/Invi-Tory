﻿using InventoryApi.Entities;
using InventoryApi.Models.UserDtos;

namespace InventoryApi.Services.UserServices
{
    public interface IUserService
    {
        // Creates user account
        Task<UserDto> RegisterUserAsync(CreateUserDto request);

        // Login user into their account
        Task<UserDto> LoginAsync(LoginDto request);

        // Deletes user account
        Task<bool> DeleteUserAsync(int userId);

        // Update basic information
        Task<bool> UpdateBasicInformationAsync(int userId, SetUserInfoDto request);

        // Update username
        Task<bool> UpdateUsernameAsync(int userId, UsernameDto request);

        // Update email
        Task<bool> UpdateEmailAsync(int userId, EmailDto request);

        // Update password
        Task<bool> UpdatePasswordAsync(int userId, PasswordDto request);

        // Get user
        Task<GetUserDto> GetUserAsync(int userId);

        // Get user days of using app
        Task<int> GetUserDaysUsingAppAsync(int userId);
    }
}
