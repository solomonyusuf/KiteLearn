using System;
using KiteLearn.Data;
using KiteLearn.Interface_Api;
using KiteLearn.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(KiteLearn.Areas.Identity.IdentityHostingStartup))]
namespace KiteLearn.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
               /* services.AddDefaultIdentity<IdentityUser>(config =>
                {
                    config.SignIn.RequireConfirmedEmail = true;
                    config.Tokens.ProviderMap.Add("CustomEmailConfirmation",
                        new TokenProviderDescriptor(
                            typeof(CustomEmailConfirmationTokenProvider<IdentityUser>)));
                    config.Tokens.EmailConfirmationTokenProvider = "CustomEmailConfirmation";
                }).AddEntityFrameworkStores<ApplicationDbContext>();
               */
            });
        }
    }
}