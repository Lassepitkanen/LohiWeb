using FluentAssertions;
using LohiWeb.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace LohiWeb.Tests.Repositories
{
    public class WaterLevelRepositoryTests
    {
        private DbContextFactory _dbContextFactory;

        public WaterLevelRepositoryTests()
        {
            _dbContextFactory = new DbContextFactory();
        }

        [Fact]
        public async void GetAll_ShouldNotReturnNullOrEmpty()
        {
            //Arrange
            var _dbContext = _dbContextFactory.BuildDbContext();
            var sut = new WaterLevelRepository(_dbContext);

            var expected = _dbContext.WaterLevel;

            //Act
            var actual = await sut.GetAll();

            //Assert
            actual.Should().NotBeNullOrEmpty();
        }

        [Fact]
        public async void GetAll_ShouldReturnData()
        {
            //Arrange
            var _dbContext = _dbContextFactory.BuildDbContext();
            var sut = new WaterLevelRepository(_dbContext);

            var expected = _dbContext.WaterLevel;

            //Act
            var actual = await sut.GetAll();

            //Assert
            actual.Should().Equal(expected);
        }
    }
}
