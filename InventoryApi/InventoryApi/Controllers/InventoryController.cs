using InventoryApi.Entities;
using InventoryApi.Models.InventoryTypeDtos;
using InventoryApi.Services.InventoryServices;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController(IInventoryService inventoryService) : Controller
    {
        [HttpPost("create-iventory/{userId}")]
        public async Task<ActionResult<InventoryDto>> CreateInventory(int userId, [FromBody] CreateInventoryDto request)
        {
            InventoryDto? inventory = await inventoryService.CreateInventoryAsync(userId, request);
            if (inventory == null) return BadRequest("Inventory already exists");

            return Ok(inventory);
        }
    }
}
