using InventoryApi.Models.UnitDtos;
using InventoryApi.Services.UnitServices;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitController(IUnitService unitService) : Controller
    {
        // Get a list of all user units
        [HttpGet("get-all-units/{userId}")]
        public async Task<ActionResult<List<UnitDto>>> GetAllUserUnits(int userId)
        {
            List<UnitDto>? units = await unitService.GetAllUserUnitsAsync(userId);
            if (units == null) return BadRequest("Units not found");

            return Ok(units);
        }


        // Get the sum of inventory units
        [HttpGet("get-inventory-unit/{userId}")]
        public async Task<ActionResult<InventoryUnitDto>> GetAllUserInventoryCountAsync(int userId)
        {
            InventoryUnitDto? inventoryUnit = await unitService.GetAllUserInventoryCountAsync(userId);
            if (inventoryUnit == null) return BadRequest("Inventory unit not found");

            return Ok(inventoryUnit);
        }


        // Get all items the user has across all inventory
        [HttpGet("get-item-unit/{userId}")]
        public async Task<ActionResult<ItemUnitDto>> GetAllUserItemCountAsync(int userId)
        {
            ItemUnitDto? itemUnit = await unitService.GetAllUserItemCountAsync(userId);
            if (itemUnit == null) return BadRequest("Inventory not found");

            return Ok(itemUnit);
        }


        // Get unit data
        [HttpGet("get-unit/{userId}/{inventoryId}")]
        public async Task<ActionResult<UnitDto>> GetUnitAsync(int userId, int inventoryId)
        {
            UnitDto? unit = await unitService.GetUnitAsync(userId, inventoryId);
            if (unit == null) return BadRequest("Inventory not found");

            return Ok(unit);
        }
    }
}
