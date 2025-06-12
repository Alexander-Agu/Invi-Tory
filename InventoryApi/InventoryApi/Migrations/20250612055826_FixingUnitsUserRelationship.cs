using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InventoryApi.Migrations
{
    /// <inheritdoc />
    public partial class FixingUnitsUserRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Units_InventoryId",
                table: "Units");

            migrationBuilder.DropIndex(
                name: "IX_Units_UserId",
                table: "Units");

            migrationBuilder.AddColumn<int>(
                name: "InventoryId1",
                table: "Units",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Units_InventoryId",
                table: "Units",
                column: "InventoryId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Units_InventoryId1",
                table: "Units",
                column: "InventoryId1");

            migrationBuilder.CreateIndex(
                name: "IX_Units_UserId",
                table: "Units",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Units_Inventory_InventoryId1",
                table: "Units",
                column: "InventoryId1",
                principalTable: "Inventory",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Units_Inventory_InventoryId1",
                table: "Units");

            migrationBuilder.DropIndex(
                name: "IX_Units_InventoryId",
                table: "Units");

            migrationBuilder.DropIndex(
                name: "IX_Units_InventoryId1",
                table: "Units");

            migrationBuilder.DropIndex(
                name: "IX_Units_UserId",
                table: "Units");

            migrationBuilder.DropColumn(
                name: "InventoryId1",
                table: "Units");

            migrationBuilder.CreateIndex(
                name: "IX_Units_InventoryId",
                table: "Units",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Units_UserId",
                table: "Units",
                column: "UserId",
                unique: true);
        }
    }
}
