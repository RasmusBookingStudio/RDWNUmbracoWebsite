using RWDNUmbracoModels.Models;
using System.Collections.Generic;
using Umbraco.Core.Scoping;
using Umbraco.Web.Editors;
using Umbraco.Web.Mvc;

namespace RWDNUmbracoModels.Controllers
{
    [PluginController("RDWN")]
    public class PersonApiController : UmbracoAuthorizedJsonController
    {
        private readonly IScopeProvider scopeProvider;

        public PersonApiController(IScopeProvider scopeProvider)
        {
            this.scopeProvider = scopeProvider;
        }

        public IEnumerable<Person> GetAll()
        {
            using (var scope = scopeProvider.CreateScope(autoComplete: true))
            {
                // build a query to select everything the people table
                var sql = scope.SqlContext.Sql().Select("*").From("people");

                // fetch data from the database with the query and map to the Person class
                return scope.Database.Fetch<Person>(sql);
            }
        }
    }
}
