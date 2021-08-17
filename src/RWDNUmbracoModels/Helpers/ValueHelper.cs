using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace RWDNUmbracoModels.Helpers
{
    public static class ValueHelper
    {
        public static IEnumerable<int> ParseIds(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return Array.Empty<int>();
                
            }

            return value
                .Split(',')
                .Select(part => ToInt(part))
                .Where(id => id.HasValue)
                .Select(id => id.Value)
                .ToArray();
        }

        public static int? ToInt(string value)
        {
            if (int.TryParse(value, out int result))
            {
                return result;
            }

            return null;
        }
    }
}