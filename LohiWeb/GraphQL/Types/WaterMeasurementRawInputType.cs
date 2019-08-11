using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LohiWeb.GraphQL.Types
{
    public class WaterMeasurementRawInputType : InputObjectGraphType
    {
        public WaterMeasurementRawInputType()
        {
            Name = "WaterMeasurementRawInput";
            Field<NonNullGraphType<FloatGraphType>>("UnixTime");
            Field<FloatGraphType>("Depth");
            Field<IntGraphType>("HeatMap");
            Field<NonNullGraphType<FloatGraphType>>("Lat");
            Field<NonNullGraphType<FloatGraphType>>("Lng");
            Field<FloatGraphType>("Alt");
            Field<FloatGraphType>("Speed");
            Field<FloatGraphType>("Heading");
            Field<FloatGraphType>("LatError");
            Field<FloatGraphType>("LngError");
            Field<FloatGraphType>("AltError");
            Field<FloatGraphType>("AirTemp");
            Field<FloatGraphType>("WaterTemp");
            Field<NonNullGraphType<IntGraphType>>("WaterMeasurementLocationId");
        }
    }
}
