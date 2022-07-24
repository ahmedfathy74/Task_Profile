﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Entities
{
    public class Job
    {
        [Key]
        public int jobId { get; set; }
        [Required, MaxLength(150)]
        public string JobName { get; set; }
    }
}
