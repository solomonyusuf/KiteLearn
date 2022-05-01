using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using KiteLearn.Data;
using KiteLearn.Models;
using Microsoft.AspNetCore.Authorization;

namespace KiteLearn.Areas.Identity.Pages.Roles
{
    
    [AllowAnonymous]
    public class CreateRoles : PageModel
    {
        private readonly KiteLearn.Data.ApplicationDbContext _context;

        public CreateRoles(KiteLearn.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Role Role { get; set; }

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Role.Add(Role);
            await _context.SaveChangesAsync();

            return RedirectToPage("./List");
        }
    }
}
