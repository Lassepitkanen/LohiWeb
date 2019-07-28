using GraphQL.DataLoader;
using GraphQL.Types;
using LohiWeb.Data.Entities;
using LohiWeb.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LohiWeb.GraphQL.Types
{
    public class WaterLevelLocationType : ObjectGraphType<WaterLevelLocation>
    {
        public WaterLevelLocationType(WaterLevelRepository waterLevelRepository, IDataLoaderContextAccessor dataLoaderAccessor)
        {
            Field(t => t.Id);
            Field(t => t.Name);
            Field<ListGraphType<WaterLevelType>>(
                "waterLevels",
                resolve: context =>
                {
                    var loader = dataLoaderAccessor.Context.GetOrAddCollectionBatchLoader<int, WaterLevel>(
                        "GetByWaterLevelLocationId", waterLevelRepository.GetByWaterLevelLocationId);
                    return loader.LoadAsync(context.Source.Id);
                });
                //waterLevelRepository.GetByWaterLevelLocationId(context.Source.Id));
        }
    }
}
