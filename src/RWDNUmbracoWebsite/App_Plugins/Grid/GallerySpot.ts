function GallerySpot (this: any, $scope, editorService, mediaResource) {
    
    this.open = () => {
        const options = {
            title: "Gallery Spot",
            view: "/App_Plugins/Grid/GallerySpotDialog.html",
            submit: function (model) {
                $scope.control.value = model.value;
                editorService.close();
            },
            close: function () {
                editorService.close();
            },
            value: $scope.control.value || {}
        };
        editorService.open(options);
    }
    
    $scope.$watch("control.value.images", () => {
        $scope.imagesCount = 0;
        if ($scope.control.value?.images) {
            const images = $scope.control.value.images?.split(/,/g).map(id => parseInt(id, 10));
            if (images && images.length) {
                mediaResource.getById(images [0]).then(media => {
                    $scope.url = media.mediaLink;
                });
                $scope.imagesCount = images.length;
            }
        }
    });
}

(GallerySpot as any).$inject = ["$scope", "editorService", "mediaResource"];

export default GallerySpot;