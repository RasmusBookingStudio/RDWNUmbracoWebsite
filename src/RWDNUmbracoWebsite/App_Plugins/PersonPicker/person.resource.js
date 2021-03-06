// adds the resource to umbraco.resources module:
angular.module('umbraco.resources').factory('personResource',
    function ($q, $http, umbRequestHelper) {
        // the factory object returned
        return {
            // this calls the ApiController we setup earlier
            getAll: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get("backoffice/RDWN/PersonApi/GetAll"),
                    "failed to retrieve all Person data");
            }
        };
    }
);