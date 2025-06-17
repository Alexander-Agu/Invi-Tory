using InventoryApi.Entities;
using InventoryApi.Models.UserDtos;
using InventoryApi.Services.UserServices;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(IUserService userService) : Controller
    {
        // Creates user account
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register([FromBody] CreateUserDto request)
        {
            UserDto user = await userService.RegisterUserAsync(request);
            if (user == null) return BadRequest("Invalid information");

            return Ok(user);
        }


        // Signs user into their account
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login([FromBody] LoginDto request)
        {
            UserDto? user = await userService.LoginAsync(request);
            if (user == null) return BadRequest("Invalid email or password");

            return Ok(user);
        }


        // Deletes user account
        [HttpDelete("delete/{userId}")]
        public async Task<ActionResult<bool>> DeleteAccount(int userId)
        {
            bool userDeleted = await userService.DeleteUserAsync(userId);

            if (!userDeleted) return BadRequest("User not found");

            return Ok("Account deleted");
        }


        // Updates basic user information
        [HttpPut("update-basic/{userId}")]
        public async Task<ActionResult<bool>> UpdateBasicInformation(int userId, SetUserInfoDto request)
        {
            bool basicInfoUpdated = await userService.UpdateBasicInformationAsync(userId, request);
            if (!basicInfoUpdated) return BadRequest("User not found");

            return Ok("Basic informayion updated");
        }


        // Update username
        [HttpPut("update-username/{userId}")]
        public async Task<ActionResult<bool>> UpdateUsername(int userId, UsernameDto request)
        {
            bool usernameUpdated = await userService.UpdateUsernameAsync(userId, request);
            if (!usernameUpdated) return BadRequest("User not found");

            return Ok("Username updated");
        }


        // Update email
        [HttpPut("update-email/{userId}")]
        public async Task<ActionResult<bool>> UpdateEmail(int userId, EmailDto request)
        {
            bool emailUpdated = await userService.UpdateEmailAsync(userId,request);
            if (!emailUpdated) return BadRequest("Email not updated");

            return Ok("Email updated");
        }


        // Update password
        [HttpPut("update-password/{userId}")]
        public async Task<ActionResult<bool>> UpdatePassword(int userId, PasswordDto request)
        {
            bool passowordUpdated = await userService.UpdatePasswordAsync(userId, request);
            if (!passowordUpdated) return BadRequest("Password not updated");

            return Ok("Password Updated");
        }


        // Get user information
        [HttpGet("get-user/{userId}")]
        public async Task<ActionResult<UserDto>> GetUser(int userId)
        {
            UserDto? user = await userService.GetUserAsync(userId);
            if (user == null) return BadRequest("User not found");

            return Ok(user);
        }

    }
}
