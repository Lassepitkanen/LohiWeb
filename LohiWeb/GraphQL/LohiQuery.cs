using GraphQL.Types;
using LohiWeb.Data.Repositories;
using LohiWeb.GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LohiWeb.GraphQL
{
    public class LohiQuery : ObjectGraphType
    {
        public LohiQuery(WaterLevelLocationRepository waterLevelLocationRepository, WaterLevelRepository waterLevelRepository)
        {
            Field<WaterLevelLocationType>(
                "WaterLevelLocation",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>>
                    { Name = "id" }),
                resolve: context =>
                {
                    var id = context.GetArgument<int>("id");
                    return waterLevelLocationRepository.GetOneById(id);
                }
            );

            Field<ListGraphType<WaterLevelLocationType>>(
                "WaterLevelLocations",
                resolve: context => waterLevelLocationRepository.GetAll());

            Field<ListGraphType<WaterLevelType>>(
                "WaterLevels",
                resolve: context => waterLevelRepository.GetAll());
        }
    }
}
