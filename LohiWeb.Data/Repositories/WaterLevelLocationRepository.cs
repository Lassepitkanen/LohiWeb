using LohiWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace LohiWeb.Data.Repositories
{
    public class WaterLevelLocationRepository
    {
        private readonly LohiDbContext _dbContext;

        public WaterLevelLocationRepository(LohiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<WaterLevelLocation>> GetAll()
        {
            return await _dbContext.WaterLevelLocation.ToListAsync();
        }
    }
}
