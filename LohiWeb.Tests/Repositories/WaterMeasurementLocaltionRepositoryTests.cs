using FluentAssertions;
using LohiWeb.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace LohiWeb.Tests.Repositories
{
    public class WaterMeasurementLocaltionRepositoryTests
    {
        private DbContextFactory _dbContextFactory;

        public WaterMeasurementLocaltionRepositoryTests()
        {
            _dbContextFactory = new DbContextFactory();
        }

        [Fact]
        public async void GetAll_ShouldReturnData()
        {
            //Arrange
            var _dbContext = _dbContextFactory.BuildDbContext();
            var sut = new WaterMeasurementLocationRepository(_dbContext);

            var expected = _dbContext.WaterMeasurementLocation;

            //Act
            var actual = await sut.GetAll();

            //Assert
            actual.Should().Equal(expected);
        }
    }
}
