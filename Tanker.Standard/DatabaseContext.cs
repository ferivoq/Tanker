using Auto.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace Tanker.Standard
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        private readonly string _databasePath;
        public DatabaseContext(string dbPath)
        {
            _databasePath = dbPath;
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite($"Filename={_databasePath}");
        }
    }
}
