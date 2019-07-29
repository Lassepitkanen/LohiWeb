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
    public class WaterMeasurementLocationType : ObjectGraphType<WaterMeasurementLocation>
    {
        public WaterMeasurementLocationType(WaterMeasurementRepository waterMeasurementRepository, WaterMeasurementRawRepository waterMeasurementRawRepository, IDataLoaderContextAccessor dataLoaderAccessor)
        {
            Field(t => t.Id);
            Field(t => t.Name);
            Field<ListGraphType<WaterMeasurementType>>(
                "waterMeasurements",
                resolve: context =>
                {
                    var loader = dataLoaderAccessor.Context.GetOrAddCollectionBatchLoader<int, WaterMeasurement>(
                        "GetByWaterMeasurementLocationId", waterMeasurementRepository.GetByWaterMeasurementLocationId);
                    return loader.LoadAsync(context.Source.Id);
                });

            Field<ListGraphType<WaterMeasurementRawType>>(
               "rawWaterMeasurements",
                resolve: context =>
                {
                    var loader = dataLoaderAccessor.Context.GetOrAddCollectionBatchLoader<int, WaterMeasurementRaw>(
                        "GetByWaterMeasurementLocationId", waterMeasurementRawRepository.GetByWaterMeasurementLocationId);
                    return loader.LoadAsync(context.Source.Id);
                });
        }
    }
}
