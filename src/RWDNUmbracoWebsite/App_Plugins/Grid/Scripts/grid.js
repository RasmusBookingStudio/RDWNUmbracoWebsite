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
      view: "/App_Plugins/Grid/GallerySpotDialog.html",
      submit: function submit(model) {
        $scope.control.value = model.value;
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
  var _$scope$model$value;

  $scope.images = {
    view: 'mediaPicker',
    config: {
      multiPicker: true,
      minNumber: 0,
      maxNumber: 20
    },
    value: (_$scope$model$value = $scope.model.value) === null || _$scope$model$value === void 0 ? void 0 : _$scope$model$value.images
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

angular__WEBPACK_IMPORTED_MODULE_0___default.a.module("umbraco").controller("Grid.GallerySpot", ["$scope", "editorService", "mediaResource", _GallerySpot__WEBPACK_IMPORTED_MODULE_1__["default"]]);
angular__WEBPACK_IMPORTED_MODULE_0___default.a.module("umbraco").controller("Grid.GallerySpotDialog", ["$scope", _GallerySpotDialog__WEBPACK_IMPORTED_MODULE_2__["default"]]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwX1BsdWdpbnMvR3JpZC9HYWxsZXJ5U3BvdC50cyIsIndlYnBhY2s6Ly8vLi9BcHBfUGx1Z2lucy9HcmlkL0dhbGxlcnlTcG90RGlhbG9nLnRzIiwid2VicGFjazovLy8uL0FwcF9QbHVnaW5zL0dyaWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbIkdhbGxlcnlTcG90IiwiJHNjb3BlIiwiZWRpdG9yU2VydmljZSIsIm1lZGlhUmVzb3VyY2UiLCJvcGVuIiwib3B0aW9ucyIsInRpdGxlIiwidmlldyIsInN1Ym1pdCIsIm1vZGVsIiwiY29udHJvbCIsInZhbHVlIiwiY2xvc2UiLCIkd2F0Y2giLCJpbWFnZXNDb3VudCIsImltYWdlcyIsInNwbGl0IiwibWFwIiwiaWQiLCJwYXJzZUludCIsImxlbmd0aCIsImdldEJ5SWQiLCJ0aGVuIiwibWVkaWEiLCJ1cmwiLCJtZWRpYUxpbmsiLCIkaW5qZWN0IiwiR2FsbGVyeVNwb3REaWFsb2ciLCJjb25maWciLCJtdWx0aVBpY2tlciIsIm1pbk51bWJlciIsIm1heE51bWJlciIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LENBQWFELE1BQWpCLEVBQXlCO0FBQ3JCUCxZQUFNLENBQUNRLEtBQVAsQ0FBYUQsTUFBYixDQUFvQlAsTUFBTSxDQUFDUSxLQUEzQjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxPQUFLRyxLQUFMLEdBQWEsWUFBTTtBQUNmLFFBQUlYLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhRyxLQUFqQixFQUF3QjtBQUNwQlgsWUFBTSxDQUFDUSxLQUFQLENBQWFHLEtBQWI7QUFDSDtBQUNKLEdBSkQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7QUMxQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFDQW9CLDhDQUFPLENBQ0ZDLE1BREwsQ0FDWSxTQURaLEVBRUtDLFVBRkwsQ0FFZ0Isa0JBRmhCLEVBRW9DLENBQzVCLFFBRDRCLEVBRTVCLGVBRjRCLEVBRzVCLGVBSDRCLEVBSTVCbEMsb0RBSjRCLENBRnBDO0FBUUFnQyw4Q0FBTyxDQUNGQyxNQURMLENBQ1ksU0FEWixFQUVLQyxVQUZMLENBRWdCLHdCQUZoQixFQUUwQyxDQUFDLFFBQUQsRUFBV1AsMERBQVgsQ0FGMUMsRTs7Ozs7Ozs7Ozs7QUNiQSx5QiIsImZpbGUiOiIuL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0FwcF9QbHVnaW5zL0dyaWQvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBHYWxsZXJ5U3BvdCAodGhpczogYW55LCAkc2NvcGUsIGVkaXRvclNlcnZpY2UsIG1lZGlhUmVzb3VyY2UpIHtcbiAgICBcbiAgICB0aGlzLm9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJHYWxsZXJ5IFNwb3RcIixcbiAgICAgICAgICAgIHZpZXc6IFwiL0FwcF9QbHVnaW5zL0dyaWQvR2FsbGVyeVNwb3REaWFsb2cuaHRtbFwiLFxuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29udHJvbC52YWx1ZSA9IG1vZGVsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVkaXRvclNlcnZpY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVkaXRvclNlcnZpY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogJHNjb3BlLmNvbnRyb2wudmFsdWUgfHwge31cbiAgICAgICAgfTtcbiAgICAgICAgZWRpdG9yU2VydmljZS5vcGVuKG9wdGlvbnMpO1xuICAgIH1cbiAgICBcbiAgICAkc2NvcGUuJHdhdGNoKFwiY29udHJvbC52YWx1ZS5pbWFnZXNcIiwgKCkgPT4ge1xuICAgICAgICAkc2NvcGUuaW1hZ2VzQ291bnQgPSAwO1xuICAgICAgICBpZiAoJHNjb3BlLmNvbnRyb2wudmFsdWU/LmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VzID0gJHNjb3BlLmNvbnRyb2wudmFsdWUuaW1hZ2VzPy5zcGxpdCgvLC9nKS5tYXAoaWQgPT4gcGFyc2VJbnQoaWQsIDEwKSk7XG4gICAgICAgICAgICBpZiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtZWRpYVJlc291cmNlLmdldEJ5SWQoaW1hZ2VzIFswXSkudGhlbihtZWRpYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51cmwgPSBtZWRpYS5tZWRpYUxpbms7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmltYWdlc0NvdW50ID0gaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4oR2FsbGVyeVNwb3QgYXMgYW55KS4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiZWRpdG9yU2VydmljZVwiLCBcIm1lZGlhUmVzb3VyY2VcIl07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlTcG90OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnlTcG90RGlhbG9nKHRoaXM6IGFueSwgJHNjb3BlKSB7XG4gICAgJHNjb3BlLmltYWdlcyA9IHtcbiAgICAgICAgdmlldzogJ21lZGlhUGlja2VyJyxcbiAgICAgICAgY29uZmlnIDoge1xuICAgICAgICAgICAgbXVsdGlQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICBtaW5OdW1iZXI6IDAsXG4gICAgICAgICAgICBtYXhOdW1iZXI6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiAkc2NvcGUubW9kZWwudmFsdWU/LmltYWdlc1xuICAgIH07XG4gICAgXG4gICAgJHNjb3BlLiR3YXRjaChcImltYWdlcy52YWx1ZVwiLCAoKSA9PiB7XG4gICAgICAgICRzY29wZS5tb2RlbC52YWx1ZS5pbWFnZXMgPSAkc2NvcGUuaW1hZ2VzLnZhbHVlO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoJHNjb3BlLm1vZGVsLnN1Ym1pdCkge1xuICAgICAgICAgICAgJHNjb3BlLm1vZGVsLnN1Ym1pdCgkc2NvcGUubW9kZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICgkc2NvcGUubW9kZWwuY2xvc2UpIHtcbiAgICAgICAgICAgICRzY29wZS5tb2RlbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XG5pbXBvcnQgR2FsbGVyeVNwb3QgZnJvbSBcIi4vR2FsbGVyeVNwb3RcIjtcbmltcG9ydCBHYWxsZXJ5U3BvdERpYWxvZyBmcm9tIFwiLi9HYWxsZXJ5U3BvdERpYWxvZ1wiO1xuXG4vLyBHYWxsZXJ5U3BvdFxuYW5ndWxhclxuICAgIC5tb2R1bGUoXCJ1bWJyYWNvXCIpXG4gICAgLmNvbnRyb2xsZXIoXCJHcmlkLkdhbGxlcnlTcG90XCIsIFtcbiAgICAgICAgXCIkc2NvcGVcIixcbiAgICAgICAgXCJlZGl0b3JTZXJ2aWNlXCIsXG4gICAgICAgIFwibWVkaWFSZXNvdXJjZVwiLFxuICAgICAgICBHYWxsZXJ5U3BvdCxcbiAgICBdKTtcbmFuZ3VsYXJcbiAgICAubW9kdWxlKFwidW1icmFjb1wiKVxuICAgIC5jb250cm9sbGVyKFwiR3JpZC5HYWxsZXJ5U3BvdERpYWxvZ1wiLCBbXCIkc2NvcGVcIiwgR2FsbGVyeVNwb3REaWFsb2ddKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9