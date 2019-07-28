using Microsoft.EntityFrameworkCore.Migrations;

namespace LohiWeb.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WaterLevelLocation",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WaterLevelLocation", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WaterMeasurementLocation",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WaterMeasurementLocation", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WaterLevel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UnixTime = table.Column<long>(nullable: false),
                    Value = table.Column<double>(nullable: false),
                    WaterLevelLocationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WaterLevel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WaterLevel_WaterLevelLocation_WaterLevelLocationId",
                        column: x => x.WaterLevelLocationId,
                        principalTable: "WaterLevelLocation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WaterMeasurement",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UnixTime = table.Column<double>(nullable: false),
                    Depth = table.Column<double>(nullable: false),
                    HeatMap = table.Column<double>(nullable: false),
                    Lat = table.Column<decimal>(nullable: false),
                    Lng = table.Column<decimal>(nullable: false),
                    Alt = table.Column<double>(nullable: false),
                    Speed = table.Column<double>(nullable: false),
                    Heading = table.Column<double>(nullable: false),
                    LatError = table.Column<double>(nullable: false),
                    LngError = table.Column<double>(nullable: false),
                    AltError = table.Column<double>(nullable: false),
                    AirTemp = table.Column<double>(nullable: false),
                    WaterTemp = table.Column<double>(nullable: false),
                    WaterMeasurementLocationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WaterMeasurement", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WaterMeasurement_WaterMeasurementLocation_WaterMeasurementLocationId",
                        column: x => x.WaterMeasurementLocationId,
                        principalTable: "WaterMeasurementLocation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WaterMeasurementRaw",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UnixTime = table.Column<double>(nullable: false),
                    Depth = table.Column<double>(nullable: false),
                    HeatMap = table.Column<double>(nullable: false),
                    Lat = table.Column<decimal>(nullable: false),
                    Lng = table.Column<decimal>(nullable: false),
                    Alt = table.Column<double>(nullable: false),
                    Speed = table.Column<double>(nullable: false),
                    Heading = table.Column<double>(nullable: false),
                    LatError = table.Column<double>(nullable: false),
                    LngError = table.Column<double>(nullable: false),
                    AltError = table.Column<double>(nullable: false),
                    AirTemp = table.Column<double>(nullable: false),
                    WaterTemp = table.Column<double>(nullable: false),
                    WaterMeasurementLocationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WaterMeasurementRaw", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WaterMeasurementRaw_WaterMeasurementLocation_WaterMeasurementLocationId",
                        column: x => x.WaterMeasurementLocationId,
                        principalTable: "WaterMeasurementLocation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_WaterLevel_WaterLevelLocationId",
                table: "WaterLevel",
                column: "WaterLevelLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_WaterMeasurement_WaterMeasurementLocationId",
                table: "WaterMeasurement",
                column: "WaterMeasurementLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_WaterMeasurementRaw_WaterMeasurementLocationId",
                table: "WaterMeasurementRaw",
                column: "WaterMeasurementLocationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WaterLevel");

            migrationBuilder.DropTable(
                name: "WaterMeasurement");

            migrationBuilder.DropTable(
                name: "WaterMeasurementRaw");

            migrationBuilder.DropTable(
                name: "WaterLevelLocation");

            migrationBuilder.DropTable(
                name: "WaterMeasurementLocation");
        }
    }
}
