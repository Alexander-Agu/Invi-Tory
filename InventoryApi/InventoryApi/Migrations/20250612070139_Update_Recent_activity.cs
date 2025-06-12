using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InventoryApi.Migrations
{
    /// <inheritdoc />
    public partial class Update_Recent_activity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "RecentActivities",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "RecentActivities");
        }
    }
}
