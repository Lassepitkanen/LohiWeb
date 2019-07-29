using LohiWeb.Data;
using LohiWeb.Data.Entities;
using Microsoft.EntityFrameworkCore;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore.InMemory;
using System.Threading.Tasks;
using Xunit;

[assembly: CollectionBehavior(DisableTestParallelization = true)]

namespace LohiWeb.Tests
{
    public class DbContextFactory
    {
        private static LohiDbContext _dbContext; 

        public ILohiDbContext BuildDbContext()
        {
            if (_dbContext != null)
            {
                _dbContext.Database.EnsureDeleted();
            }

            var options = new DbContextOptionsBuilder<LohiDbContext>()
                .UseInMemoryDatabase(databaseName: "Database")
                .Options;

            _dbContext = new LohiDbContext(options);
            _dbContext.WaterLevelLocation.Add(new WaterLevelLocation { Id = 1, Name = "Pello", WaterLevels = new List<WaterLevel>() });
            _dbContext.SaveChanges();

            return _dbContext;
        }
    }
}
