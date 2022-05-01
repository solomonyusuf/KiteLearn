using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KiteLearn.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string ImgPath { get; set; }
        public ICollection<Role> Role { get; internal set; }
        public ApplicationUser()
        {
           Role = new Collection<Role>();    
        }
    }
    
}
