namespace InventoryApi.Models.RecentActivityDtos
{
    public class RecentActivityDto
    {
        public int RecentActivityId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Request { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public int DaysPast { get; set; }
    }
}
