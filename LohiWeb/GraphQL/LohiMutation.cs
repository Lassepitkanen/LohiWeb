using GraphQL.Types;
using LohiWeb.Data.Entities;
using LohiWeb.Data.Repositories;
using LohiWeb.GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LohiWeb.GraphQL
{
    public class LohiMutation : ObjectGraphType
    {
        public LohiMutation(WaterMeasurementLocationRepository waterMeasurementLocationRepository, WaterLevelLocationRepository waterLevelLocationRepository)
        {
            FieldAsync<WaterMeasurementLocationType>(
                "createWaterMeasurementLocation",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<WaterMeasurementLocationInputType>> { Name = "waterMeasurementLocation" }),
                resolve: async context =>
                {
                    var waterMeasurementLocation = context.GetArgument<WaterMeasurementLocation>("waterMeasurementLocation");
                    return await context.TryAsyncResolve(
                        async c => await waterMeasurementLocationRepository.AddWaterMeasurementLocation(waterMeasurementLocation));
                });

            FieldAsync<WaterLevelLocationType>(
                "createWaterLevelLocation",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<WaterLevelLocationInputType>> { Name = "waterLevelLocation" }),
                resolve: async context =>
                {
                    var waterLevelLocation = context.GetArgument<WaterLevelLocation>("waterLevelLocation");
                    return await context.TryAsyncResolve(
                        async c => await waterLevelLocationRepository.AddWaterLevelLocation(waterLevelLocation));
                });
        }
    }
}
