using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace InventoryApi.Migrations
{
    /// <inheritdoc />
    public partial class Inventory_Valuation_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "inventoryValuations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UnitsPurchased = table.Column<int>(type: "integer", nullable: false),
                    UnitsSold = table.Column<int>(type: "integer", nullable: false),
                    UnitsRemaining = table.Column<int>(type: "integer", nullable: false),
                    TotalPurchaceCost = table.Column<decimal>(type: "numeric", nullable: false),
                    WeightedAvarage = table.Column<decimal>(type: "numeric", nullable: false),
                    ClosingStock = table.Column<decimal>(type: "numeric", nullable: false),
                    Period = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateOnly>(type: "date", nullable: false),
                    InventoryId = table.Column<int>(type: "integer", nullable: false),
                    InventoryId1 = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inventoryValuations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_inventoryValuations_Inventory_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inventoryValuations_Inventory_InventoryId1",
                        column: x => x.InventoryId1,
                        principalTable: "Inventory",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_inventoryValuations_InventoryId",
                table: "inventoryValuations",
                column: "InventoryId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_inventoryValuations_InventoryId1",
                table: "inventoryValuations",
                column: "InventoryId1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "inventoryValuations");
        }
    }
}
