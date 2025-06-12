using InventoryApi.Repository;
using InventoryApi.Services.InventoryServices;
using InventoryApi.Services.ItemServices;
using InventoryApi.Services.RecentActivityServices;
using InventoryApi.Services.UnitServices;
using InventoryApi.Services.UserServices;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<InvitoryContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("InvitoryDB"))
);

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IInventoryService , InventoryService>();
builder.Services.AddScoped<IItemService , ItemService>();
builder.Services.AddScoped<IUnitService , UnitService>();
builder.Services.AddScoped<IRecentActivityService , RecentActivityService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
