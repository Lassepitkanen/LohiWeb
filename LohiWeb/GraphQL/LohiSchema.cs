using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace LohiWeb.GraphQL
{
    public class LohiSchema : Schema
    {
        public LohiSchema(IDependencyResolver resolver): base(resolver)
        {
            Query = resolver.Resolve<LohiQuery>();
        }
    }
}
