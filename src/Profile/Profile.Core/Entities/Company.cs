using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Entities
{
    public class Company
    {
        [Key]
        public int ComapnyID { get; set; }

        [Required, MaxLength(150)]
        public string CompanyName { get; set; }
    }
}
