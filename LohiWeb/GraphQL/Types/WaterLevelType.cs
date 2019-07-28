using GraphQL.Types;
using LohiWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace LohiWeb.GraphQL.Types
{
    public class WaterLevelType : ObjectGraphType<WaterLevel>
    {
        public WaterLevelType()
        {
            Field(t => t.Id);
            Field(t => t.UnixTime);
            Field(t => t.Value);
        }
    }
}
