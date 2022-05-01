using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using KiteLearn.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace KiteLearn.Areas.Identity.Pages.Account.Manage
{
    public class PersonalDataModel : PageModel
    {
        [NotMapped]
        public string ImgPath { get; set; }

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<PersonalDataModel> _logger;

        public PersonalDataModel(
            UserManager<ApplicationUser> userManager,
            ILogger<PersonalDataModel> logger)
        {
            _userManager = userManager;
            _logger = logger;
        }

        public async Task<IActionResult> OnGet()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }
            ImgPath = user.ImgPath;
            return Page();
        }
    }
}