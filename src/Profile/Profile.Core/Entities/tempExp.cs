using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Entities
{
   public class tempExp
    {
        public int expid { get; set; }
        public string ExpName { get; set; }
        public string CityName { get; set; }
        public string CompanyName { get; set; }
        public int CurrentlyWork { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string JobDescription { get; set; }
        public int SkillBank { get; set; }
        public int ProfID { get; set; }
    }
}
