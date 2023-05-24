using FirstAngularProject.Domain.Entities;
using Flights.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace FirstAngularProject.Data
{
    public class Entities : DbContext
    {
        public DbSet<Passenger> Passengers => Set<Passenger>();

        public DbSet<Flight> Flights => Set<Flight>();

        public Entities(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Passenger>().HasKey(p => p.Email);  // primary key 

            modelBuilder.Entity<Flight>().OwnsOne(f => f.Departure);

            modelBuilder.Entity<Flight>().OwnsOne(f => f.Arrival);

        }
    }
}
