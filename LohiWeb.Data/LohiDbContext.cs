using LohiWeb.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace LohiWeb.Data
{
    public interface ILohiDbContext
    {
        DbSet<WaterLevelLocation> WaterLevelLocation { get; set; }
        DbSet<WaterMeasurementLocation> WaterMeasurementLocation { get; set; }

        DbSet<WaterLevel> WaterLevel { get; set; }
        DbSet<WaterMeasurement> WaterMeasurement { get; set; }
        DbSet<WaterMeasurementRaw> WaterMeasurementRaw { get; set; }
    }

    public class LohiDbContext : DbContext, ILohiDbContext
    {
        public LohiDbContext(DbContextOptions<LohiDbContext> options) : base(options)
        {
        }

        public DbSet<WaterLevelLocation> WaterLevelLocation { get; set; }
        public DbSet<WaterMeasurementLocation> WaterMeasurementLocation { get; set; }

        public DbSet<WaterLevel> WaterLevel { get; set; }
        public DbSet<WaterMeasurement> WaterMeasurement { get; set; }
        public DbSet<WaterMeasurementRaw> WaterMeasurementRaw { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlite("Data Source=lohi.db");
        //}
    }
}

