using InventoryApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Repository
{
    public class InvitoryContext(DbContextOptions<InvitoryContext> options) : DbContext(options)
    {
        public DbSet<User> Users => Set<User>();
        public DbSet<Inventory> Inventory => Set<Inventory>();
        public DbSet<Item> Items => Set<Item>();
        public DbSet<Unit> Units => Set<Unit>();
        public DbSet<RecentActivity> RecentActivities => Set<RecentActivity>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Delete all inventory if user has been  deleted
            modelBuilder.Entity<Inventory>()
                .HasOne<User>()
                .WithMany(u => u.Inventories)
                .HasForeignKey(i => i.UserId)
                .OnDelete(DeleteBehavior.Cascade);


            // Delete all items if inventory has been deleted
            modelBuilder.Entity<Item>()
                .HasOne<Inventory>()
                .WithMany(i => i.items)
                .HasForeignKey( i => i.InventoryId)
                .OnDelete(DeleteBehavior.Cascade);


            // Specify the one to one realtion between User and Units
            modelBuilder.Entity<Unit>()
                .HasOne<User>()
                .WithOne(i => i.Unit)
                .HasForeignKey<Unit>(u => u.UserId)
                .OnDelete(DeleteBehavior.Cascade);


            // Delete all recent activities if user has been deleted
            modelBuilder.Entity<RecentActivity>()
                .HasOne<User>()
                .WithMany(i => i.RecentActivities)
                .HasForeignKey(i => i.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
