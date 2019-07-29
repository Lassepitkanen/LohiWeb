using LohiWeb.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LohiWeb.Data.Repositories
{
    public class WaterMeasurementRawRepository
    {
        private readonly ILohiDbContext _dbContext;

        public WaterMeasurementRawRepository(ILohiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<WaterMeasurementRaw>> GetAll()
        {
            return await _dbContext.WaterMeasurementRaw.ToListAsync();
        }

        public async Task<ILookup<int, WaterMeasurementRaw>> GetByWaterMeasurementLocationId(IEnumerable<int> ids)
        {
            var waterLevels = await _dbContext.WaterMeasurementRaw.Where(wl => ids.Contains(wl.WaterMeasurementLocationId)).ToListAsync();
            return waterLevels.ToLookup(wl => wl.WaterMeasurementLocationId);
        }
    }
}
