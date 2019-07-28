using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using LohiWeb.Data;
using GraphQL;
using LohiWeb.Data.GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using LohiWeb.Data.Repositories;

namespace LohiWeb
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
{
            services.AddMvc();
            services.AddDbContextPool<LohiDbContext>(options =>
            {
                options.UseSqlite("Data Source=../LohiWeb.Data/lohi.db");
            });
            services.AddScoped<WaterLevelRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<WaterLevelSchema>();


            services.AddGraphQL(o => { o.ExposeExceptions = true; })
                .AddGraphTypes(ServiceLifetime.Scoped);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseGraphQL<WaterLevelSchema>();

            if (env.IsDevelopment())
            {
                app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    ConfigFile = "webpack.development.js",
                    HotModuleReplacement = true,
                });
            }

            // Serve all static files 
            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=SpaIndex}/{action=Index}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "SpaIndex", action = "Index" });
            });
        }
    }
}