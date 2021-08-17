import angular from "angular";
import GallerySpot from "./GallerySpot";
import GallerySpotDialog from "./GallerySpotDialog";

// GallerySpot
angular
    .module("umbraco")
    .controller("BookingStudio.GallerySpot", [
        "$scope",
        "editorService",
        "mediaResource",
        GallerySpot,
    ]);
angular
    .module("umbraco")
    .controller("BookingStudio.GallerySpotDialog", ["$scope", GallerySpotDialog]);
