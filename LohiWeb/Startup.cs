﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using LohiWeb.Data;
using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using LohiWeb.Data.Repositories;
using LohiWeb.GraphQL;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

namespace LohiWeb
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
{
            services.AddMvc();
            services.AddScoped<ILohiDbContext>(provider => provider.GetService<LohiDbContext>());
            services.AddDbContextPool<LohiDbContext> (options =>
            {
                options.UseSqlite("Data Source=../LohiWeb.Data/lohi.db");
            });
            services.AddScoped<WaterLevelRepository>();
            services.AddScoped<WaterLevelLocationRepository>();
            services.AddScoped<WaterMeasurementLocationRepository>();
            services.AddScoped<WaterMeasurementRepository>();
            services.AddScoped<WaterMeasurementRawRepository>();

            services.AddScoped<IDependencyResolver>(s => new FuncDependencyResolver(s.GetRequiredService));
            services.AddScoped<LohiSchema>();

            services.AddGraphQL(o => { o.ExposeExceptions = true; })
                .AddGraphTypes(ServiceLifetime.Scoped)
                .AddDataLoader();

            services.Configure<IISServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseGraphQL<LohiSchema>();

            if (env.IsDevelopment())
            {
                app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
                //app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                //{
                //    ConfigFile = "webpack.development.js",
                //    HotModuleReplacement = true,
                //});

                app.Map("/dist", innerApp =>
                {
                    innerApp.UseSpa(spa =>
                    {
                        spa.Options.SourcePath = ".";
                        spa.UseReactDevelopmentServer(npmScript: "dev");
                    });
                });
            }

            // Serve all static files 
            app.UseStaticFiles();
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=SpaIndex}/{action=Index}",
                    defaults: new { controller = "SpaIndex", action = "Index" });
            });

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=SpaIndex}/{action=Index}");

            //    routes.MapSpaFallbackRoute(
            //        name: "spa-fallback",
            //        defaults: new { controller = "SpaIndex", action = "Index" });
            //});
        }
    }
}