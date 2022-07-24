using Profile.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Infrastructure.Repositories.Base
{
    public interface IHprofileRepo
    {
        Task<IEnumerable<Experience>> GetALLByID(int id);
        Task<IEnumerable<Experience>> GetALLByID();
        Task AddWork(Experience experience);
        Task DeleteWork(int id);
        Task<Experience> UpdateWork(Experience experience);
    }
}
