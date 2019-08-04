using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LohiWeb.GraphQL.Types
{
    public class WaterMeasurementLocationInputType : InputObjectGraphType
    {
        public WaterMeasurementLocationInputType()
        {
            Name = "waterMeasurementLocationInput";
            Field<NonNullGraphType<StringGraphType>>("Name");
        }
    }
}
