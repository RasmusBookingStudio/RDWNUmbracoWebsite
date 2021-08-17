/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./App_Plugins/Grid/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App_Plugins/Grid/GallerySpot.ts":
/*!*****************************************!*\
  !*** ./App_Plugins/Grid/GallerySpot.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function GallerySpot($scope, editorService, mediaResource) {
  this.open = function () {
    var options = {
      title: "Gallery Spot",
      view: "/App_Plugins/Grid/GallerySpotView.cshtml",
      submit: function submit(model) {
        editorService.close();
      },
      close: function close() {
        editorService.close();
      },
      value: $scope.control.value || {}
    };
    editorService.open(options);
  };

  $scope.$watch("control.value.images", function () {
    var _$scope$control$value;

    $scope.imagesCount = 0;

    if ((_$scope$control$value = $scope.control.value) === null || _$scope$control$value === void 0 ? void 0 : _$scope$control$value.images) {
      var _$scope$control$value2;

      var images = (_$scope$control$value2 = $scope.control.value.images) === null || _$scope$control$value2 === void 0 ? void 0 : _$scope$control$value2.split(/,/g).map(function (id) {
        return parseInt(id, 10);
      });

      if (images && images.length) {
        mediaResource.getById(images[0]).then(function (media) {
          $scope.url = media.mediaLink;
        });
        $scope.imagesCount = images.length;
      }
    }
  });
}

GallerySpot.$inject = ["$scope", "editorService", "mediaResource"];
/* harmony default export */ __webpack_exports__["default"] = (GallerySpot);

/***/ }),

/***/ "./App_Plugins/Grid/GallerySpotDialog.ts":
/*!***********************************************!*\
  !*** ./App_Plugins/Grid/GallerySpotDialog.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GallerySpotDialog; });
function GallerySpotDialog($scope) {
  var _$scope$model$value, _$scope$model$value2;

  $scope.link = {
    view: 'contentPicker',
    config: {
      minNumber: 0,
      maxNumber: 1
    },
    value: (_$scope$model$value = $scope.model.value) === null || _$scope$model$value === void 0 ? void 0 : _$scope$model$value.link
  };
  $scope.$watch("link.value", function () {
    $scope.model.value.link = $scope.link.value;
  });
  $scope.images = {
    view: 'mediaPicker',
    config: {
      multiPicker: true,
      minNumber: 0,
      maxNumber: 20
    },
    value: (_$scope$model$value2 = $scope.model.value) === null || _$scope$model$value2 === void 0 ? void 0 : _$scope$model$value2.images
  };
  $scope.$watch("images.value", function () {
    $scope.model.value.images = $scope.images.value;
  });

  this.submit = function () {
    if ($scope.model.submit) {
      $scope.model.submit($scope.model);
    }
  };

  this.close = function () {
    if ($scope.model.close) {
      $scope.model.close();
    }
  };
}

/***/ }),

/***/ "./App_Plugins/Grid/index.ts":
/*!***********************************!*\
  !*** ./App_Plugins/Grid/index.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GallerySpot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GallerySpot */ "./App_Plugins/Grid/GallerySpot.ts");
/* harmony import */ var _GallerySpotDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GallerySpotDialog */ "./App_Plugins/Grid/GallerySpotDialog.ts");


 // GallerySpot

angular__WEBPACK_IMPORTED_MODULE_0___default.a.module("umbraco").controller("BookingStudio.GallerySpot", ["$scope", "editorService", "mediaResource", _GallerySpot__WEBPACK_IMPORTED_MODULE_1__["default"]]);
angular__WEBPACK_IMPORTED_MODULE_0___default.a.module("umbraco").controller("BookingStudio.GallerySpotDialog", ["$scope", _GallerySpotDialog__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = angular;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwX1BsdWdpbnMvR3JpZC9HYWxsZXJ5U3BvdC50cyIsIndlYnBhY2s6Ly8vLi9BcHBfUGx1Z2lucy9HcmlkL0dhbGxlcnlTcG90RGlhbG9nLnRzIiwid2VicGFjazovLy8uL0FwcF9QbHVnaW5zL0dyaWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbIkdhbGxlcnlTcG90IiwiJHNjb3BlIiwiZWRpdG9yU2VydmljZSIsIm1lZGlhUmVzb3VyY2UiLCJvcGVuIiwib3B0aW9ucyIsInRpdGxlIiwidmlldyIsInN1Ym1pdCIsIm1vZGVsIiwiY2xvc2UiLCJ2YWx1ZSIsImNvbnRyb2wiLCIkd2F0Y2giLCJpbWFnZXNDb3VudCIsImltYWdlcyIsInNwbGl0IiwibWFwIiwiaWQiLCJwYXJzZUludCIsImxlbmd0aCIsImdldEJ5SWQiLCJ0aGVuIiwibWVkaWEiLCJ1cmwiLCJtZWRpYUxpbmsiLCIkaW5qZWN0IiwiR2FsbGVyeVNwb3REaWFsb2ciLCJsaW5rIiwiY29uZmlnIiwibWluTnVtYmVyIiwibWF4TnVtYmVyIiwibXVsdGlQaWNrZXIiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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RUFBRTtBQUhOLEtBRkc7QUFPWnBCLFNBQUssMEJBQUVWLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhRSxLQUFmLHlEQUFFLHFCQUFvQkk7QUFQZixHQUFoQjtBQVVBZCxRQUFNLENBQUNZLE1BQVAsQ0FBYyxjQUFkLEVBQThCLFlBQU07QUFDaENaLFVBQU0sQ0FBQ1EsS0FBUCxDQUFhRSxLQUFiLENBQW1CSSxNQUFuQixHQUE0QmQsTUFBTSxDQUFDYyxNQUFQLENBQWNKLEtBQTFDO0FBQ0gsR0FGRDs7QUFJQSxPQUFLSCxNQUFMLEdBQWMsWUFBTTtBQUNoQixRQUFJUCxNQUFNLENBQUNRLEtBQVAsQ0FBYUQsTUFBakIsRUFBeUI7QUFDckJQLFlBQU0sQ0FBQ1EsS0FBUCxDQUFhRCxNQUFiLENBQW9CUCxNQUFNLENBQUNRLEtBQTNCO0FBQ0g7QUFDSixHQUpEOztBQU1BLE9BQUtDLEtBQUwsR0FBYSxZQUFNO0FBQ2YsUUFBSVQsTUFBTSxDQUFDUSxLQUFQLENBQWFDLEtBQWpCLEVBQXdCO0FBQ3BCVCxZQUFNLENBQUNRLEtBQVAsQ0FBYUMsS0FBYjtBQUNIO0FBQ0osR0FKRDtBQUtILEM7Ozs7Ozs7Ozs7OztBQ3hDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUdBOztBQUNBdUIsOENBQU8sQ0FDRkMsTUFETCxDQUNZLFNBRFosRUFFS0MsVUFGTCxDQUVnQiwyQkFGaEIsRUFFNkMsQ0FDckMsUUFEcUMsRUFFckMsZUFGcUMsRUFHckMsZUFIcUMsRUFJckNuQyxvREFKcUMsQ0FGN0M7QUFRQWlDLDhDQUFPLENBQ0ZDLE1BREwsQ0FDWSxTQURaLEVBRUtDLFVBRkwsQ0FFZ0IsaUNBRmhCLEVBRW1ELENBQUMsUUFBRCxFQUFXUiwwREFBWCxDQUZuRCxFOzs7Ozs7Ozs7OztBQ2JBLHlCIiwiZmlsZSI6Ii4vZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vQXBwX1BsdWdpbnMvR3JpZC9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIEdhbGxlcnlTcG90ICh0aGlzOiBhbnksICRzY29wZSwgZWRpdG9yU2VydmljZSwgbWVkaWFSZXNvdXJjZSkge1xyXG4gICAgXHJcbiAgICB0aGlzLm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiR2FsbGVyeSBTcG90XCIsXHJcbiAgICAgICAgICAgIHZpZXc6IFwiL0FwcF9QbHVnaW5zL0dyaWQvR2FsbGVyeVNwb3RWaWV3LmNzaHRtbFwiLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yU2VydmljZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yU2VydmljZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogJHNjb3BlLmNvbnRyb2wudmFsdWUgfHwge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIGVkaXRvclNlcnZpY2Uub3BlbihvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJHNjb3BlLiR3YXRjaChcImNvbnRyb2wudmFsdWUuaW1hZ2VzXCIsICgpID0+IHtcclxuICAgICAgICAkc2NvcGUuaW1hZ2VzQ291bnQgPSAwO1xyXG4gICAgICAgIGlmICgkc2NvcGUuY29udHJvbC52YWx1ZT8uaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlcyA9ICRzY29wZS5jb250cm9sLnZhbHVlLmltYWdlcz8uc3BsaXQoLywvZykubWFwKGlkID0+IHBhcnNlSW50KGlkLCAxMCkpO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG1lZGlhUmVzb3VyY2UuZ2V0QnlJZChpbWFnZXMgWzBdKS50aGVuKG1lZGlhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXJsID0gbWVkaWEubWVkaWFMaW5rO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaW1hZ2VzQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbihHYWxsZXJ5U3BvdCBhcyBhbnkpLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCJlZGl0b3JTZXJ2aWNlXCIsIFwibWVkaWFSZXNvdXJjZVwiXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlTcG90OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnlTcG90RGlhbG9nKHRoaXM6IGFueSwgJHNjb3BlKSB7XHJcbiAgICBcclxuICAgICRzY29wZS5saW5rID0ge1xyXG4gICAgICAgIHZpZXc6ICdjb250ZW50UGlja2VyJyxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgbWluTnVtYmVyOiAwLFxyXG4gICAgICAgICAgICBtYXhOdW1iZXI6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiAkc2NvcGUubW9kZWwudmFsdWU/LmxpbmtcclxuICAgIH07XHJcbiAgICBcclxuICAgICRzY29wZS4kd2F0Y2goXCJsaW5rLnZhbHVlXCIsICgpID0+IHtcclxuICAgICAgICAkc2NvcGUubW9kZWwudmFsdWUubGluayA9ICRzY29wZS5saW5rLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICRzY29wZS5pbWFnZXMgPSB7XHJcbiAgICAgICAgdmlldzogJ21lZGlhUGlja2VyJyxcclxuICAgICAgICBjb25maWcgOiB7XHJcbiAgICAgICAgICAgIG11bHRpUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5OdW1iZXI6IDAsXHJcbiAgICAgICAgICAgIG1heE51bWJlcjogMjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiAkc2NvcGUubW9kZWwudmFsdWU/LmltYWdlc1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgJHNjb3BlLiR3YXRjaChcImltYWdlcy52YWx1ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGVsLnZhbHVlLmltYWdlcyA9ICRzY29wZS5pbWFnZXMudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5zdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCRzY29wZS5tb2RlbC5zdWJtaXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnN1Ym1pdCgkc2NvcGUubW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCBHYWxsZXJ5U3BvdCBmcm9tIFwiLi9HYWxsZXJ5U3BvdFwiO1xyXG5pbXBvcnQgR2FsbGVyeVNwb3REaWFsb2cgZnJvbSBcIi4vR2FsbGVyeVNwb3REaWFsb2dcIjtcclxuXHJcbi8vIEdhbGxlcnlTcG90XHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoXCJ1bWJyYWNvXCIpXHJcbiAgICAuY29udHJvbGxlcihcIkJvb2tpbmdTdHVkaW8uR2FsbGVyeVNwb3RcIiwgW1xyXG4gICAgICAgIFwiJHNjb3BlXCIsXHJcbiAgICAgICAgXCJlZGl0b3JTZXJ2aWNlXCIsXHJcbiAgICAgICAgXCJtZWRpYVJlc291cmNlXCIsXHJcbiAgICAgICAgR2FsbGVyeVNwb3QsXHJcbiAgICBdKTtcclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZShcInVtYnJhY29cIilcclxuICAgIC5jb250cm9sbGVyKFwiQm9va2luZ1N0dWRpby5HYWxsZXJ5U3BvdERpYWxvZ1wiLCBbXCIkc2NvcGVcIiwgR2FsbGVyeVNwb3REaWFsb2ddKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=