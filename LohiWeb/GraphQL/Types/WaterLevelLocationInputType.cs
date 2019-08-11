using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LohiWeb.GraphQL.Types
{
    public class WaterLevelLocationInputType : InputObjectGraphType
    {
        public WaterLevelLocationInputType()
        {
            Name = "waterLevelLocationInput";
            Field<NonNullGraphType<StringGraphType>>("Name");
        }
    }
}
