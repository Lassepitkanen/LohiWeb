using LohiWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace LohiWeb.Data.Repositories
{
    public class WaterLevelRepository
    {
        private readonly LohiDbContext _dbContext;

        public WaterLevelRepository(LohiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<WaterLevel>> GetAll()
        {
            return await _dbContext.WaterLevel.ToListAsync();
        }

        public async Task<ILookup<int, WaterLevel>> GetByWaterLevelLocationId(IEnumerable<int> ids)
        {
            var waterLevels = await _dbContext.WaterLevel.Where(wl => ids.Contains(wl.WaterLevelLocationId)).ToListAsync();
            return waterLevels.ToLookup(wl => wl.WaterLevelLocationId);
        }
    }
}
