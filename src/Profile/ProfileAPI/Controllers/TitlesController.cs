using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Profile.Core.Entities;
using Profile.Infrastructure.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProfileAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitlesController : ControllerBase
    {
        private readonly IHprofileRepo<Job> _repoJob;
        public TitlesController(IHprofileRepo<Job> repojob)
        {
            _repoJob = repojob;
        }
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Job>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Job>>> GetALLByID()
        {
            var ALLTitles = await _repoJob.GetALLByID();
            //if (ALLWorkExper == null)
            //{
            //    _logger.LogError($"Work Experience with {id} not found");
            //    return NotFound();
            //}
            //else
            //{
            //    return Ok(ALLWorkExper);
            //}
            return Ok(ALLTitles);
        }
    }
}
