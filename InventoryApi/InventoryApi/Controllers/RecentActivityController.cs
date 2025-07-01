using InventoryApi.Models.RecentActivityDtos;
using InventoryApi.Services.RecentActivityServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecentActivityController(IRecentActivityService recentActivity) : Controller
    {
        // Return all user recent activity
        [Authorize]
        [HttpGet("get-recent-activity/{userId}")]
        public async Task<ActionResult<List<RecentActivityDto>>> GetAllRecentActivities(int userId)
        {
            List<RecentActivityDto> recentActivities = await recentActivity.GetAllRecentActivitiesAsync(userId);
            if (recentActivities == null) return BadRequest("User not found");

            return Ok(recentActivities);
        }

    }
}
