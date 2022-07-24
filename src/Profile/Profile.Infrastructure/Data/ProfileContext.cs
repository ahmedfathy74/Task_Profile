using Microsoft.EntityFrameworkCore;
using Profile.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Infrastructure.Data
{
    public class ProfileContext : DbContext
    {
        public ProfileContext(DbContextOptions<ProfileContext>options):base(options)
        {

        }
        public DbSet<Profilea> profiles { get; set; }
        public DbSet<Job> jobs { get; set; }
        public DbSet<Experience> Experiences { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<City> Cities { get; set; }

    }
}
