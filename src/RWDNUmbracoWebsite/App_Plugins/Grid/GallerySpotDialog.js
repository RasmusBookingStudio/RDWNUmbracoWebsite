export default function GallerySpotDialog($scope) {
    
    $scope.link = {
        view: 'contentPicker',
        config: {
            minNumber: 0,
            maxNumber: 1
        },
        value: $scope.model.value?.link
    };
    
    $scope.$watch("link.value", () => {
        $scope.model.value.link = $scope.link.value;
    });
    
    $scope.images = {
        view: 'mediaPicker',
        config : {
            multiPicker: true,
            minNumber: 0,
            maxNumber: 20
        },
        value: $scope.model.value?.images
    };
    
    $scope.$watch("images.value", () => {
        $scope.model.value.images = $scope.images.value;
    });
    
    this.submit = () => {
        if ($scope.model.submit) {
            $scope.model.submit($scope.model);
        }
    }
    
    this.close = () => {
        if ($scope.model.close) {
            $scope.model.close();
        }
    }
}