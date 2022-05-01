using System;
using System.Collections.Generic;

#nullable disable

namespace KiteLearn.Models
{
    public  class Contact
    {
        public Guid id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Message { get; set; }
        public DateTime TimeStamp { get; set; }
        public Contact()
        {
            TimeStamp = DateTime.Now;   
        }



    }
   
}
