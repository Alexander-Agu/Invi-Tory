# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

# Restore
COPY ["InventoryApi/InventoryApi.csproj", "InventoryApi/"]
RUN dotnet restore "InventoryApi/InventoryApi.csproj"

# Build
COPY ["InventoryApi/", "InventoryApi/"]
WORKDIR /src/InventoryApi
RUN dotnet build "InventoryApi.csproj" -c Release -o /app/build


# Publish Stage
FROM build AS publish
RUN dotnet publish "InventoryApi.csproj" -c Release -o /app/publish

# Run Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
ENV ASPNETCORE_HTTP_PORTS=5000
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 5000
ENTRYPOINT ["dotnet", "InventoryApi.dll"]