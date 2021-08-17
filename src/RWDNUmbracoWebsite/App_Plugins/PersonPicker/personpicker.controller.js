angular.module("umbraco")
    .controller("My.PersonPickerController", function($scope, personResource) {
        personResource.getAll().then(function (response) {
            console.log("response", response);
                $scope.people = response;
            });
        });
	