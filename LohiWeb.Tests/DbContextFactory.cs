using LohiWeb.Data;
using LohiWeb.Data.Entities;
using Microsoft.EntityFrameworkCore;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore.InMemory;

namespace LohiWeb.Tests
{
    public class DbContextFactory
    {
        public ILohiDbContext BuildDbContext()
        {
            var options = new DbContextOptionsBuilder<LohiDbContext>()
                .UseInMemoryDatabase(databaseName: "Database")
                .Options;

            var dbContext = new LohiDbContext(options);
            dbContext.WaterLevelLocation.Add(new WaterLevelLocation { Id = 1, Name = "Pello", WaterLevels = new List<WaterLevel>() });
            dbContext.SaveChanges();

            return dbContext;
        }
    }
}
