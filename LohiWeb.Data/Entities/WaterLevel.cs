using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LohiWeb.Data.Entities
{
    public class WaterLevel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public long UnixTime { get; set; }
        [Required]
        public double Value { get; set; }
    }
}
