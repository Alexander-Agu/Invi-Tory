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
        
    }
}
