using InventoryApi.Entities;
using InventoryApi.Mappings;
using InventoryApi.Models.UserDtos;
using InventoryApi.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

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


            // Validate email
            if (!ValidateEmail(user.Email)) return null;


            // Validate password... add a password validation method later
            if (!ValidateCreatePassword(request.Password)) return null;

            user.HashedPassword = HashPassword(user, request.Password);


            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();
            
            return user.ToDto();
        }


        // Logs in user into their account
        public async Task<UserDto> LoginAsync(LoginDto request)
        {
            User? user = await context.Users.Where(u => u.Email == request.Email)
                .FirstOrDefaultAsync();
            if (user == null) return null; // If user was not found

            // If password is wrong
            if (!ValidatePasswordLogin(user, request.Password)) return null;

            return user.ToDto();
        }


        // Delete user account
        public async Task<bool> DeleteUserAsync(int userId)
        {
            User? user = await context.Users.FindAsync(userId);
            if(user == null) return false; // Cannot delete if user is not found

            await context.Users.Where(u => u.Id == userId)
                .ExecuteDeleteAsync();

            await context.SaveChangesAsync();

            return true;
        }


        // Updates user's basic information
        public async Task<bool> UpdateBasicInformationAsync(int userId, SetUserInfoDto request)
        {
            User? user = await context.Users.FindAsync(userId);
            if (user == null) return false;

            if (!string.IsNullOrEmpty(request.Firstname)) user.Firstname = request.Firstname;

            if (!string.IsNullOrEmpty(request.Lastname)) user.Lastname = request.Lastname;

            await context.SaveChangesAsync();

            return true;
        }


        // Update username
        public async Task<bool> UpdateUsernameAsync(int userId, UsernameDto request)
        {
            User? user = await context.Users.FindAsync(userId);
            if (user == null) return false;

            // User cannot use the same username to update the username Column
            if (user.Username.Equals(request.Username)) return false;

            user.Username = request.Username;

            await context.SaveChangesAsync();
            return true;
        }


        // Update user email
        public async Task<bool> UpdateEmailAsync(int userId, EmailDto request)
        {
            User? user = await context.Users.FindAsync(userId);
            if (user == null) return false;

            // Validate password
            if (!ValidatePasswordLogin(user, request.Password)) return false;

            // Validate email
            if (!ValidateEmail(request.Email)) return false;

            // User cannot use the same email to update the email Column
            if (user.Email.Equals(request.Email)) return false;

            user.Email = request.Email;
            await context.SaveChangesAsync();

            return true;
        }


        // Update user password
        public async Task<bool> UpdatePasswordAsync(int userId, PasswordDto request)
        {
            User? user = await context.Users.FindAsync(userId);
            if (user == null) return false;

            user.HashedPassword = HashPassword(user, request.Password);

            await context.SaveChangesAsync();

            return true;
        }


        // Get User
        public async Task<GetUserDto> GetUserAsync(int userId)
        {
            User? user = await context.Users.FindAsync(userId);
            if (user is null) return null;

            return user.ToGetUserDto();
        }


        // HELPER METHODS

        // Hashes a password
        private string HashPassword(User user, string password)
        {
            return new PasswordHasher<User>()
                .HashPassword(user, password);
        }


        // VALIDATION METHODS

        // Validate Email
        private bool ValidateEmail(string email) {
            if (string.IsNullOrEmpty(email)) return false;

            string[] splitEmail = email.Split('@');

            // If email does not have words before @gmail.com 
            if (string.IsNullOrEmpty(splitEmail[0])) return false;

            // If email contains @gmail.com
            if (!email.ToLower().Contains("@gmail.com")) return false;


            return true;
        }


        // Validate create password
        private bool ValidateCreatePassword(string password)
        {
            if (password.Length < 8) return false; // Checks if password is over 8 characters


            bool number = false, special = false, lower = false, upper = false;

            for (int x = 0; x <= password.Length - 1; x++)
            {
                if (char.IsNumber(password, x)) number = true; // Checks if password has a number

                if (char.IsUpper(password, x)) upper = true; // Checks if password has an uppercase letter

                if (char.IsLower(password, x)) lower = true; // Checks if password has a lowercase letter

                if ("!@#$%^&*()_{}:''?//><|".Contains(password[x])) special = true; // Checks if password has special characters

                if (number && special && lower && upper) break; // If all these conditions have been met stop checking
            }

            if (number && special && lower && upper)
            {
                return true;
            }
            return false;
        }


        // Validate password login
        private bool ValidatePasswordLogin(User user, string password)
        {
            if (new PasswordHasher<User>().VerifyHashedPassword(user, user.HashedPassword, password) == PasswordVerificationResult.Failed) return false;
            return true;
        }
    }
}
