using GraphQL.Types;
using LohiWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LohiWeb.GraphQL.Types
{
    public class WaterMeasurementRawType : ObjectGraphType<WaterMeasurementRaw>
    {
        public WaterMeasurementRawType()
        {
            Field(t => t.Id);
            Field(t => t.UnixTime);
            Field(t => t.Depth);
            Field(t => t.HeatMap);
            Field(t => t.Lat);
            Field(t => t.Lng);
            Field(t => t.Alt);
            Field(t => t.Speed);
            Field(t => t.Heading);
            Field(t => t.LatError);
            Field(t => t.LngError);
            Field(t => t.AltError);
            Field(t => t.AirTemp);
            Field(t => t.WaterTemp);
            Field(t => t.WaterMeasurementLocationId);
        }
    }
}
