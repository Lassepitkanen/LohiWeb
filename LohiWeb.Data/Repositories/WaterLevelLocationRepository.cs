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
        private readonly ILohiDbContext _dbContext;

        public WaterLevelLocationRepository(ILohiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<WaterLevelLocation>> GetAll()
        {
            return await _dbContext.WaterLevelLocation.ToListAsync();
        }

        public async Task<WaterLevelLocation> GetOneById(int id)
        {
            return await _dbContext.WaterLevelLocation.SingleAsync(wll => wll.Id == id);
        }

        public async Task<WaterLevelLocation> AddWaterLevelLocation(WaterLevelLocation waterLevelLocation)
        {
            _dbContext.WaterLevelLocation.Add(waterLevelLocation);
            await _dbContext.SaveChangesAsync();
            return waterLevelLocation;
        }
    }
}
