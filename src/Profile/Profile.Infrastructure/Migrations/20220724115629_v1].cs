using Microsoft.EntityFrameworkCore.Migrations;

namespace Profile.Infrastructure.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Experiences_ProfID",
                table: "Experiences",
                column: "ProfID");

            migrationBuilder.AddForeignKey(
                name: "FK_Experiences_profiles_ProfID",
                table: "Experiences",
                column: "ProfID",
                principalTable: "profiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Experiences_profiles_ProfID",
                table: "Experiences");

            migrationBuilder.DropIndex(
                name: "IX_Experiences_ProfID",
                table: "Experiences");
        }
    }
}
