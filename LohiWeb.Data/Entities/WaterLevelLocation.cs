﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LohiWeb.Data.Entities
{
    public class WaterLevelLocation
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public ICollection<WaterLevel> WaterLevels { get; set; }
    }
}
