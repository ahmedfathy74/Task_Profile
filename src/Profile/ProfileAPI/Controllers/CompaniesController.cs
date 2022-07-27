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
    public class CompaniesController : ControllerBase
    {
        private readonly IHprofileRepo<Company> _repoCompany;
        public CompaniesController(IHprofileRepo<Company> repoCompany)
        {
            _repoCompany = repoCompany;
        }
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Company>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Company>>> GetALLByID()
        {
            var ALLComapnies = await _repoCompany.GetALLByID();
            //if (ALLWorkExper == null)
            //{
            //    _logger.LogError($"Work Experience with {id} not found");
            //    return NotFound();
            //}
            //else
            //{
            //    return Ok(ALLWorkExper);
            //}
            return Ok(ALLComapnies);
        }
    }
}
