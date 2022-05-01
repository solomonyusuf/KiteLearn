using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using KiteLearn.Data;
using KiteLearn.Models;
using Microsoft.AspNetCore.Identity;

namespace KiteLearn.Areas_Identity_Pages_Roles
{
    public class DetailsModel : PageModel
    {
        private readonly ApplicationDbContext _context;
        private readonly RoleManager<IdentityRole> _RoleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        public DetailsModel(ApplicationDbContext context, RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _RoleManager = roleManager;
            _userManager = userManager;
           
        }

        public Role Role { get; set; }
        
       


        public async Task<IActionResult> OnGetAsync(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
           
            Role = await _context.Role.FirstOrDefaultAsync(m => m.Id == id);

            if (Role == null)
            {
                return NotFound();
            }
            return Page();
        }
      
       
    }
}
