using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HprofileWEB.Controllers
{
    public class HPRofileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
