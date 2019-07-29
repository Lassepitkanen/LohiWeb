using LohiWeb.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LohiWeb.Data.Repositories
{
    public class WaterMeasurementRepository
    {
        private readonly LohiDbContext _dbContext;

        public WaterMeasurementRepository(LohiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<WaterMeasurement>> GetAll()
        {
            return await _dbContext.WaterMeasurement.ToListAsync();
        }

        public async Task<ILookup<int, WaterMeasurement>> GetByWaterMeasurementLocationId(IEnumerable<int> ids)
        {
            var waterLevels = await _dbContext.WaterMeasurement.Where(wl => ids.Contains(wl.WaterMeasurementLocationId)).ToListAsync();
            return waterLevels.ToLookup(wl => wl.WaterMeasurementLocationId);
        }
    }
}
