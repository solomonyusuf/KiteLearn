using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using KiteLearn.Data;
using KiteLearn.Models;

namespace KiteLearn.Areas_Identity_Pages_Roles
{
    public class ListModel : PageModel
    {
        private readonly KiteLearn.Data.ApplicationDbContext _context;

        public ListModel(KiteLearn.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IList<Role> Role { get;set; }

        public async Task OnGetAsync()
        {
            Role = await _context.Role.ToListAsync();
        }
    }
}
