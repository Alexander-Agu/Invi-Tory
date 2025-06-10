using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InventoryApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUnit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InventoryId",
                table: "Units",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Units_InventoryId",
                table: "Units",
                column: "InventoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Units_Inventory_InventoryId",
                table: "Units",
                column: "InventoryId",
                principalTable: "Inventory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Units_Inventory_InventoryId",
                table: "Units");

            migrationBuilder.DropIndex(
                name: "IX_Units_InventoryId",
                table: "Units");

            migrationBuilder.DropColumn(
                name: "InventoryId",
                table: "Units");
        }
    }
}
