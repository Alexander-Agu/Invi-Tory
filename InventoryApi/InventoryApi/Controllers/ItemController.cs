using InventoryApi.Models.ItemDtos;
using InventoryApi.Services.ItemServices;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController(IItemService itemService) : Controller
    {
        // Creates user item
        [HttpPost("create-item/{userId}/{inventoryId}")]
        public async Task<ActionResult<ItemDto>> CreateItem(int userId, int inventoryId, [FromBody] CreateItemDto request)
        {
            ItemDto itemDto = await itemService.CreateItemAsync(userId, inventoryId, request);
            if (null == itemDto) return BadRequest("Inventory not fount");

            return Ok(itemDto);
        }


        // Delete Item
        [HttpDelete("delete-item/{userId}/{inventoryId}/{itemId}")]
        public async Task<ActionResult<bool>> DeleteItem(int userId, int inventoryId, int itemId)
        {
            bool itemDeleted = await itemService.DeleteItemAsync(userId, inventoryId, itemId);
            if (!itemDeleted) return BadRequest("Item not found");

            return Ok("Item deleted");
        }
    }
}
