using System;
using System.Collections.Generic;
using WSPlanningPoker.Models;

namespace WSPlanningPoker.Services
{
    public class WSPPData:IWSPPData
    {
        public IEnumerable<Member> Members { get; set; }

        public WSPPData(){
            Members = new List<Member>();
        }
    }
}
