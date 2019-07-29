using LohiWeb.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LohiWeb.Data.Repositories
{
    public class WaterMeasurementLocationRepository
    {
        private readonly LohiDbContext _dbContext;

        public WaterMeasurementLocationRepository(LohiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<WaterMeasurementLocation>> GetAll()
        {
            return await _dbContext.WaterMeasurementLocation.ToListAsync();
        }

        public async Task<WaterMeasurementLocation> GetOneById(int id)
        {
            return await _dbContext.WaterMeasurementLocation.SingleAsync(wml => wml.Id == id);
        }
    }
}
