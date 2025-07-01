using System.Security.Claims;
using InventoryApi.Entities;
using InventoryApi.Models.InventoryDtos;
using InventoryApi.Models.InventoryTypeDtos;
using InventoryApi.Services.InventoryServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController(IInventoryService inventoryService) : Controller
    {
        // Creates user inventory
        [Authorize]
        [HttpPost("create-iventory/{userId}")]
        public async Task<ActionResult<InventoryDto>> CreateInventory(int userId, [FromBody] CreateInventoryDto request)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            InventoryDto? inventory = await inventoryService.CreateInventoryAsync(userId, request);
            if (inventory == null) return BadRequest("Inventory already exists");

            return Ok(inventory);
        }


        // Delete user inventory
        [Authorize]
        [HttpDelete("delete-inventory/{userId}/{inventoryId}")]
        public async Task<ActionResult<bool>> DeleteInventory(int userId, int inventoryId)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            bool inventoryDeleted = await inventoryService.DeleteInventoryAsync(userId, inventoryId);

            if (!inventoryDeleted) return BadRequest("Inventory not found");

            return Ok("Inventory deleted");
        }


        // Get all user inventory
        [Authorize]
        [HttpGet("get-inventory/{userId}")]
        public async Task<ActionResult<List<InventoryDto>>> GetAllInventory(int userId)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            List<InventoryDto>? inventory = await inventoryService.GetAllInventoryAsync(userId);

            return Ok(inventory);
        }


        // Get user inventory
        [Authorize]
        [HttpGet("get-inventory/{userId}/{inventoryId}")]
        public async Task<ActionResult<InventoryDto>> GetInventory(int userId, int inventoryId)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            InventoryDto inventory = await inventoryService.GetInventoryAsync(userId,inventoryId);
            if (inventory == null) return BadRequest("Inventory not found");

            return Ok(inventory);
        }


        // Update inventory name
        [Authorize]
        [HttpPut("update-inventory-name/{userId}/{inventoryId}")]
        public async Task<ActionResult<bool>> UpdateInventoryName(int userId, int inventoryId, [FromBody] SetInventoryDto request)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            bool inventoryUpdated = await inventoryService.UpdateInventoryNameAsync(userId, inventoryId, request);
            if (!inventoryUpdated) return BadRequest("Inventory not updated");

            return Ok("Inventory Updated");
        }


        // Updating the inventory
        [Authorize]
        [HttpPut("update-inventory/{userId}/{inventoryId}")]
        public async Task<ActionResult<bool>> UpdateInventory(int userId, int inventoryId, [FromBody] UpdateInventoryDto request)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            bool inventoryUpdated = await inventoryService.UpdateInventoryAsync(userId, inventoryId, request);
            if (!inventoryUpdated) return BadRequest("Inventory not updated");

            return Ok("Inventory Updated");
        }


        // Filtering the inventory by category
        [Authorize]
        [HttpGet("filter-inventory/{userId}")]
        public async Task<ActionResult<List<InventoryDto>>> FiilterInventoryByCategory(int userId, [FromBody] FilterInventoryDto request)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            List<InventoryDto> inventories = await inventoryService.FilterInventoryByCategoryAsync(userId, request);
            
            return inventories;
        }
    }
}
