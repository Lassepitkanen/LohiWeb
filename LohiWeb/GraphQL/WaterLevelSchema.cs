using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace LohiWeb.Data.GraphQL
{
    public class WaterLevelSchema : Schema
    {
        public WaterLevelSchema(IDependencyResolver resolver): base(resolver)
        {
            Query = resolver.Resolve<WaterLevelQuery>();
        }
    }
}
