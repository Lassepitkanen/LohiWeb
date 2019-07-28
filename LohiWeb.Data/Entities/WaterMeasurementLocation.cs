using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LohiWeb.Data.Entities
{
    public class WaterMeasurementLocation
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<WaterMeasurementRaw> RawWaterMeasurement { get; set; }
        public ICollection<WaterMeasurement> WaterMeasurements { get; set; }
    }
}
