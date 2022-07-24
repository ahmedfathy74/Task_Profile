using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Core.Entities
{
    public class Profilea
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        //public List<Experience> Experiences { get; set; }
        //public Profilea()
        //{
        //    Experiences = new List<Experience>();
        //}
    }
}
