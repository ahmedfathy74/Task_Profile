using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Entities
{
    public class Experience
    {
        [Key]
        public int ExpID { get; set; }
        [Required]
        public string ExpName { get; set; }
        [Required]
        public string CityName { get; set; }
        [Required]
        public string CompanyName { get; set;}
        public int CurrentlyWork { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string JobDescription { get; set;}
        public int SkillBank { get; set; }

        [ForeignKey("ProfID")]
        public Profilea profilea { get; set; }
        public int ProfID { get; set; }

    }
}
