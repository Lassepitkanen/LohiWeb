using LohiWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace LohiWeb.Data.Repositories
{
    public class WaterLevelRepository
    {
        private readonly LohiDbContext _dbContext;

        public WaterLevelRepository(LohiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<WaterLevel> GetAll()
        {
            return _dbContext.WaterLevel;
        }
    }
}
