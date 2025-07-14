using InventoryApi.Models.InventoryValuationDtos;
using InventoryApi.Services.InventoryValuationServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryValuationController(IInventoryValuation valuationService) : Controller
    {
        [Authorize]
        [HttpGet("get-inventory-valuation/{userId}/{inventoryId}")]
        public async Task<ActionResult<InventoryValuationDto>> GetInventoryValuation(int userId, int inventoryId)
        {
            InventoryValuationDto inventoryValuation = await valuationService.InventoryValuationAsync(userId, inventoryId);

            if (inventoryValuation == null) return BadRequest("Valuation not found");

            return Ok(inventoryValuation);
        }
    }
}
