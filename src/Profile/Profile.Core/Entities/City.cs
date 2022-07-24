using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Entities
{
   public class City
    {
        [Key]
        public int CityId { get; set; }
        [Required, MaxLength(150)]
        public string CityName { get; set; }
    }
}
