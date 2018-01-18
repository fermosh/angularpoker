using System;
using System.Collections.Generic;
using WSPlanningPoker.Models;

namespace WSPlanningPoker.Services
{
    public interface IWSPPData
    {
        IEnumerable<Member> Members { get; set; }
    }
}
