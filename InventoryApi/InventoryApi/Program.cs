using InventoryApi.Repository;
using InventoryApi.Services.InventoryServices;
using InventoryApi.Services.ItemServices;
using InventoryApi.Services.RecentActivityServices;
using InventoryApi.Services.UnitServices;
using InventoryApi.Services.UserServices;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using InventoryApi.Services.InventoryValuationServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<InvitoryContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("InvitoryDB"))
);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["AppSettings:Issuer"],
            ValidateAudience = true,
            ValidAudience = builder.Configuration["AppSettings:Audience"],
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["AppSettings:Token"]!)),
            ValidateIssuerSigningKey = true,

        };
    });

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IInventoryService , InventoryService>();
builder.Services.AddScoped<IItemService , ItemService>();
builder.Services.AddScoped<IUnitService , UnitService>();
builder.Services.AddScoped<IRecentActivityService , RecentActivityService>();
builder.Services.AddScoped<IInventoryValuation, InventoryValuationService>();

// Define CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
