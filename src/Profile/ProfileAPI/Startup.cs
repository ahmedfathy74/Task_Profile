using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Profile.Core.Entities;
using Profile.Infrastructure.Data;
using Profile.Infrastructure.Repositories;
using Profile.Infrastructure.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProfileAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        string text = "";
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy(text,
                builder =>
                {
                    builder.AllowAnyOrigin();
                    //  builder.WithOrigins("url");
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                });
            });
            services.AddDbContext<ProfileContext>(c =>
                    c.UseSqlServer(Configuration.GetConnectionString("ProfileConnection"),
                    b=>b.MigrationsAssembly(typeof(ProfileContext).Assembly.FullName)));
            services.AddTransient(typeof(IHprofileRepo<Experience>), typeof(HprofileRepo<Experience>));
            services.AddTransient(typeof(IHprofileRepo<Company>), typeof(HprofileRepo<Company>));
            services.AddTransient(typeof(IHprofileRepo<Job>), typeof(HprofileRepo<Job>));


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProfileAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProfileAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseAuthorization();
            app.UseCors(text);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
