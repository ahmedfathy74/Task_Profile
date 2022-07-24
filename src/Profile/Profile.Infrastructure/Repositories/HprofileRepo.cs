using Microsoft.EntityFrameworkCore;
using Profile.Core.Entities;
using Profile.Infrastructure.Data;
using Profile.Infrastructure.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Infrastructure.Repositories
{
    public class HprofileRepo : IHprofileRepo
    {
        private readonly ProfileContext _context;
        public HprofileRepo(ProfileContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Experience>> GetALLByID()
        {
            return await _context.Experiences.ToListAsync();
        }
        public async Task<IEnumerable<Experience>> GetALLByID(int id)
        {
            var WorrkExperience_List = await _context.Experiences
                      .Where(E => E.ProfID ==id)
                      .ToListAsync();
            return WorrkExperience_List;
        }
        public async Task AddWork(Experience experience)
        {
            await _context.Experiences.AddAsync(experience);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteWork(int id)
        {
            var experiencess = await _context.Experiences.FindAsync(id);
            _context.Experiences.Remove(experiencess);
            await _context.SaveChangesAsync();
        }

       public async Task<Experience> UpdateWork(Experience experience)
        {
             _context.Experiences.Update(experience);
            await _context.SaveChangesAsync();
            return experience;
        }
    }
}

