using Profile.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Profile.Infrastructure.Repositories.Base
{
    public interface IHprofileRepo <T> where T:class 
    {
        Task<T> GetByID(int id);
        Task<IEnumerable<T>> GetALLByID();
        Task AddWork(T experience);
        Task DeleteWork(int id);
        Task<T> UpdateWork(T experience);
    }
}
