import angular from "angular";
import GallerySpot from "./GallerySpot";
import GallerySpotDialog from "./GallerySpotDialog";

// GallerySpot
angular
    .module("umbraco")
    .controller("Grid.GallerySpot", [
        "$scope",
        "editorService",
        "mediaResource",
        GallerySpot,
    ]);
angular
    .module("umbraco")
    .controller("Grid.GallerySpotDialog", ["$scope", GallerySpotDialog]);
