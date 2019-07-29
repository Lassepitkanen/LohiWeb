using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using FluentAssertions;
using LohiWeb.Data.Repositories;
using System.Threading.Tasks;
using LohiWeb.Data;
using System.Linq;

namespace LohiWeb.Tests.Repositories
{
    public class WaterLevelLocationRespositoryTests
    {
        private DbContextFactory _dbContextFactory;

        public WaterLevelLocationRespositoryTests()
        {
            _dbContextFactory = new DbContextFactory();
        }

        [Fact]
        public async Task GetAll_ShouldReturnData()
        {
            //Arrange
            var _dbContext = _dbContextFactory.BuildDbContext();
            var sut = new WaterLevelLocationRepository(_dbContext);

            var expected = _dbContext.WaterLevelLocation;

            //Act
            var actual = await sut.GetAll();
 
            //Assert
            actual.Should().Equal(expected);
        }
    }
}
