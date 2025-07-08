using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InventoryApi.Migrations
{
    /// <inheritdoc />
    public partial class Inventory_Valuation_Update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Period",
                table: "inventoryValuations");

            migrationBuilder.DropColumn(
                name: "UnitsPurchased",
                table: "inventoryValuations");

            migrationBuilder.DropColumn(
                name: "UnitsRemaining",
                table: "inventoryValuations");

            migrationBuilder.RenameColumn(
                name: "UnitsSold",
                table: "inventoryValuations",
                newName: "Quintity");

            migrationBuilder.AddColumn<bool>(
                name: "BoughtOrSold",
                table: "inventoryValuations",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "SharedCost",
                table: "inventoryValuations",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<DateOnly>(
                name: "UpdatedDate",
                table: "inventoryValuations",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BoughtOrSold",
                table: "inventoryValuations");

            migrationBuilder.DropColumn(
                name: "SharedCost",
                table: "inventoryValuations");

            migrationBuilder.DropColumn(
                name: "UpdatedDate",
                table: "inventoryValuations");

            migrationBuilder.RenameColumn(
                name: "Quintity",
                table: "inventoryValuations",
                newName: "UnitsSold");

            migrationBuilder.AddColumn<string>(
                name: "Period",
                table: "inventoryValuations",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "UnitsPurchased",
                table: "inventoryValuations",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UnitsRemaining",
                table: "inventoryValuations",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
