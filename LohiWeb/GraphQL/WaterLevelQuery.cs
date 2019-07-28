using GraphQL.Types;
using LohiWeb.Data.GraphQL.Types;
using LohiWeb.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace LohiWeb.Data.GraphQL
{
    public class WaterLevelQuery : ObjectGraphType
    {
        public WaterLevelQuery(WaterLevelRepository waterLevelRepository)
        {
            Field<ListGraphType<WaterLevelType>>(
                "WaterLevels",
                resolve: context => waterLevelRepository.GetAll());
        }
    }
}
