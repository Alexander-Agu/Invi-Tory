using InventoryApi.Entities;
using InventoryApi.Models.InventoryDtos;
using InventoryApi.Models.InventoryTypeDtos;
using InventoryApi.Services.InventoryServices;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController(IInventoryService inventoryService) : Controller
    {
        // Creates user inventory
        [HttpPost("create-iventory/{userId}")]
        public async Task<ActionResult<InventoryDto>> CreateInventory(int userId, [FromBody] CreateInventoryDto request)
        {
            InventoryDto? inventory = await inventoryService.CreateInventoryAsync(userId, request);
            if (inventory == null) return BadRequest("Inventory already exists");

            return Ok(inventory);
        }


        // Delete user inventory
        [HttpDelete("delete-inventory/{userId}/{inventoryId}")]
        public async Task<ActionResult<bool>> DeleteInventory(int userId, int inventoryId)
        {
            bool inventoryDeleted = await inventoryService.DeleteInventoryAsync(userId, inventoryId);

            if (!inventoryDeleted) return BadRequest("Inventory not found");

            return Ok("Inventory deleted");
        }


        // Get all user inventory
        [HttpGet("get-inventory/{userId}")]
        public async Task<ActionResult<List<InventoryDto>>> GetAllInventory(int userId)
        {
            List<InventoryDto>? inventory = await inventoryService.GetAllInventoryAsync(userId);

            return Ok(inventory);
        }


        // Get user inventory
        [HttpGet("get-inventory/{userId}/{inventoryId}")]
        public async Task<ActionResult<InventoryDto>> GetInventory(int userId, int inventoryId)
        {
            InventoryDto inventory = await inventoryService.GetInventoryAsync(userId,inventoryId);
            if (inventory == null) return BadRequest("Inventory not found");

            return Ok(inventory);
        }


        // Update inventory name
        [HttpPut("update-inventory-name/{userId}/{inventoryId}")]
        public async Task<ActionResult<bool>> UpdateInventoryName(int userId, int inventoryId, [FromBody] SetInventoryDto request)
        {
            bool inventoryUpdated = await inventoryService.UpdateInventoryNameAsync(userId, inventoryId, request);
            if (!inventoryUpdated) return BadRequest("Inventory not updated");

            return Ok("Inventory Updated");
        }


        [HttpPut("update-inventory/{userId}/{inventoryId}")]
        public async Task<ActionResult<bool>> UpdateInventory(int userId, int inventoryId, [FromBody] UpdateInventoryDto request)
        {
            bool inventoryUpdated = await inventoryService.UpdateInventoryAsync(userId, inventoryId, request);
            if (!inventoryUpdated) return BadRequest("Inventory not updated");

            return Ok("Inventory Updated");
        }
    }
}
