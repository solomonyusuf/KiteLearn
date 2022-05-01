using IdentityServer4.EntityFramework.Options;
using Kitelearn.Models;
using KiteLearn.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KiteLearn.Data
{
    public partial class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<New> News { get; set; }
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<EmployeeModel> Employees { get; set; }

       
        
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

       
        
        public DbSet<KiteLearn.Models.Role> Role { get; set; }
      
    }
}
 
