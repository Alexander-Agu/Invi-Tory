using System.Security.Claims;
using InventoryApi.Models.ItemDtos;
using InventoryApi.Services.ItemServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController(IItemService itemService) : Controller
    {
        // Creates user item
        [Authorize]
        [HttpPost("create-item/{userId}/{inventoryId}")]
        public async Task<ActionResult<ItemDto>> CreateItem(int userId, int inventoryId, [FromBody] CreateItemDto request)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            ItemDto itemDto = await itemService.CreateItemAsync(userId, inventoryId, request);
            if (null == itemDto) return BadRequest("Inventory not fount");

            return Ok(itemDto);
        }


        // Delete Item
        [Authorize]
        [HttpDelete("delete-item/{userId}/{inventoryId}/{itemId}")]
        public async Task<ActionResult<bool>> DeleteItem(int userId, int inventoryId, int itemId)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            bool itemDeleted = await itemService.DeleteItemAsync(userId, inventoryId, itemId);
            if (!itemDeleted) return BadRequest("Item not found");

            return Ok("Item deleted");
        }


        // Get all user Items
        [Authorize]
        [HttpGet("get-all-items/{userId}")]
        public async Task<ActionResult<List<ItemDto>>> GetAllItems(int userId)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            List<ItemDto> items = await itemService.GetAllItemsAsync(userId);
            if (null == items) return BadRequest("Found No Items");

            return Ok(items);
        }


        // Get all inventory Items
        [Authorize]
        [HttpGet("get-all-inventory-items/{userId}/{inventoryId}")]
        public async Task<ActionResult<List<ItemDto>>> GetAllInventoryItems(int userId, int inventoryId)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            List<ItemDto> items = await itemService.GetAllInventoryItemsAsync(userId, inventoryId);
            if (null == items) return BadRequest("Inventory not found");

            return Ok(items);
        }


        // Get user item
        [Authorize]
        [HttpGet("get-item/{userId}/{inventoryId}/{itemId}")]
        public async Task<ActionResult<ItemDto>> GetItem(int userId, int inventoryId, int itemId)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            ItemDto? item = await itemService.GetItemAsync(userId, inventoryId, itemId);
            if (item == null) return BadRequest("Item not fount");

            return Ok(item);
        }


        // Update item
        [Authorize]
        [HttpPut("update-item/{userId}/{inventoryId}/{itemId}")]
        public async Task<ActionResult<bool>> UpdateItem(int userId, int inventoryId, int itemId, [FromBody] SetItemDto request)
        {
            var tokenUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            if (tokenUserId != userId) return Forbid();


            bool itemUpdated = await itemService.UpdateItemAsync(userId, inventoryId, itemId, request);
            if (!itemUpdated) return BadRequest("Item not updated");

            return Ok("Item updated");
        }
    }
}
