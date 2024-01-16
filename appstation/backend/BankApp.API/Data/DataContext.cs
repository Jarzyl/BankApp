using BankApp.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace BankApp.API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<AppUser> Users { get; set; }
}
