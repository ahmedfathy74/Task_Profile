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
    public class HprofileRepo <T>: IHprofileRepo<T> where T :class
    {
        private readonly ProfileContext _context;
        public HprofileRepo(ProfileContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<T>> GetALLByID()
        {
            return await _context.Set<T>().ToListAsync();
        }
        //public async Task<IEnumerable<T>> GetALLByID(int id)
        //{
        //    var WorrkExperience_List = await _context.Experience
        //              .Where(E => E.profID == id)
        //              .ToListAsync();
        //    return WorrkExperience_List;
        //}
        public async Task AddWork(T Entity)
        {
            await _context.Set<T>().AddAsync(Entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteWork(int id)
        {
            var experiencess = await _context.Set<T>().FindAsync(id);
            _context.Set<T>().Remove(experiencess);
            await _context.SaveChangesAsync();
        }

       public async Task<T> UpdateWork(T Entity)
        {
             _context.Set<T>().Update(Entity);
            await _context.SaveChangesAsync();
            return Entity;
        }

        public async Task<T> GetByID(int id)
        {
          return  await _context.Set<T>().FindAsync(id);
        }
    }
}

