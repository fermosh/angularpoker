using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WSPlanningPoker.Models;
using WSPlanningPoker.Services;

namespace WSPlanningPoker.Controllers
{
    public class HomeController : Controller
    {
        private IWSPPData _data;
        public HomeController(IWSPPData data){
            _data = data;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Vote(string name,int vote)
        {
            _data.Members.Where(m=>m.Name.Equals(name)).First().Vote=vote;

            return Ok();
        }

        public IActionResult GetData(){
            return Ok(_data);
        }

        public IActionResult Join(string name)
        {
            if (!_data.Members.Any(m => m.Name.Equals(name)))
                _data.Members = _data.Members.Append(new Member { Name = name });
            ViewData["MySelf"] = name;
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
