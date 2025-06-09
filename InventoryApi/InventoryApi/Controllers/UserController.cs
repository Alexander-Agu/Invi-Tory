using InventoryApi.Models.UserDtos;
using InventoryApi.Services.UserServices;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(IUserService userService) : Controller
    {
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register([FromBody] CreateUserDto request)
        {
            UserDto user = await userService.RegisterUserAsync(request);
            if (user == null) return BadRequest("Invalid information");

            return Ok(user);
        }
    }
}
