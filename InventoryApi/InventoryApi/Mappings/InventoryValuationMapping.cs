using InventoryApi.Entities;
using InventoryApi.Models.InventoryValuationDtos;

namespace InventoryApi.Mappings
{
    public static class InventoryValuationMapping
    {
        public static InventoryValuationDto ToDto(this InventoryValuation request)
        {
            return new InventoryValuationDto
            {
                Id = request.Id,
                UserId = request.UserId,
                InventoryId = request.InventoryId,
                UnitsPurchased = request.UnitsPurchased,
                UnitsRemaining = request.UnitsRemaining,
                UnitsSold = request.UnitsSold,
                TotalPurchaceCost = request.TotalPurchaceCost,
                WeightedAvarage = request.WeightedAvarage,
                ClosingStock = request.ClosingStock,
                Period = request.Period,
                CreatedAt = request.CreatedAt,
            };
        }
    }
}
