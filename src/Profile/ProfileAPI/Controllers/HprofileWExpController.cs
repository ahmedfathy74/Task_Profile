using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Profile.Core.Entities;
using Profile.Infrastructure.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ProfileAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HprofileWExpController : ControllerBase
    {
        private readonly IHprofileRepo<Experience> _repoExperience;
        //private readonly IHprofileRepo<City> _repoCity;
        private readonly ILogger<Experience> _logger;
        public HprofileWExpController(IHprofileRepo<Experience> repo)
        {
            _repoExperience = repo;
        }
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Experience>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Experience>>> GetALLByID()
        {
            var ALLWorkExper = await _repoExperience.GetALLByID();
            //if (ALLWorkExper == null)
            //{
            //    _logger.LogError($"Work Experience with {id} not found");
            //    return NotFound();
            //}
            //else
            //{
            //    return Ok(ALLWorkExper);
            //}
            return Ok(ALLWorkExper);
        }
       // [HttpGet("{id:length(24)}")]
        //[HttpGet("{id}")]
       // [ProducesResponseType(typeof(IEnumerable<Experience>), StatusCodes.Status200OK)]
        //public async Task<ActionResult<IEnumerable<Experience>>> GetALLByID(int id)
        //{
        //    var ALLWorkExper = await _repoExperience.GetALLByID(id);
        //    //if (ALLWorkExper == null)
        //    //{
        //    //    _logger.LogError($"Work Experience with {id} not found");
        //    //    return NotFound();
        //    //}
        //    //else
        //    //{
        //    //    return Ok(ALLWorkExper);
        //    //}
        //    return Ok(ALLWorkExper);
        //}
        [HttpPost]
        [ProducesResponseType(typeof(Experience), StatusCodes.Status201Created)]
        public async Task<ActionResult> AddWork(tempExp tempExp)
        {
            var experience = new Experience()
            {
               ExpName = tempExp.ExpName,
               CityName = tempExp.CityName,
               CompanyName = tempExp.CompanyName,
               JobDescription = tempExp.JobDescription,
               ProfID =tempExp.ProfID
            };
           await _repoExperience.AddWork(experience);
            return Ok(experience);
        }
        [HttpPut]
        [ProducesResponseType(typeof(Experience), StatusCodes.Status201Created)]
        public async Task<ActionResult> update(tempExp tempExp)
        {
            Experience data = await _repoExperience.GetByID(tempExp.expid);

            data.ExpID = tempExp.expid;
            data.ExpName = tempExp.ExpName;
            data.CityName = tempExp.CityName;
            data.CompanyName = tempExp.CompanyName;
            data.JobDescription = tempExp.JobDescription;
            data.ProfID = tempExp.ProfID;
       
            return Ok(await _repoExperience.UpdateWork(data));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> delete(int id)
        {
            await _repoExperience.DeleteWork(id);
            return Ok();
        }

    }
}
