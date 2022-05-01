using System;
using System.Collections.Generic;

#nullable disable

namespace KiteLearn.Models
{
    public partial class Employee
    {
        public Guid EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Occupation { get; set; }
        public string ImageName { get; set; }
    }
}
