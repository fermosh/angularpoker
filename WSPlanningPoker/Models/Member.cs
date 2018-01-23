using System;
namespace WSPlanningPoker.Models
{
    public class Member
    {
        public string Name { get; set; }
        public int Vote { get; set; }
        public string Voted => Vote != 0 ? "voted" : string.Empty;
        public Member()
        {
        }
    }
}
