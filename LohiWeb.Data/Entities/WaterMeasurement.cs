using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LohiWeb.Data.Entities
{
    public class WaterMeasurement
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public double UnixTime { get; set; }
        public double Depth { get; set; }
        public double HeatMap { get; set; }
        [Required]
        public decimal Lat { get; set; }
        [Required]
        public decimal Lng { get; set; }
        public double Alt { get; set; }
        public double Speed { get; set; }
        public double Heading { get; set; }
        public double LatError { get; set; }
        public double LngError { get; set; }
        public double AltError { get; set; }
        public double AirTemp { get; set; }
        public double WaterTemp { get; set; }
        public int WaterMeasurementLocationId { get; set; }
    }
}
