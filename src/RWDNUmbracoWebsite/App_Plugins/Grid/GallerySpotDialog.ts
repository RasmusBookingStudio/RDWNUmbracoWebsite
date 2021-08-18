export default function GallerySpotDialog(this: any, $scope) {
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