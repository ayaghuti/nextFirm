"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CarouselComp.js":
/*!************************************!*\
  !*** ./components/CarouselComp.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_slide1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/slide1.jpg */ \"./public/slide1.jpg\");\n/* harmony import */ var _public_slide2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/slide2.jpg */ \"./public/slide2.jpg\");\n/* harmony import */ var _public_slide3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/slide3.jpg */ \"./public/slide3.jpg\");\n/* harmony import */ var _public_slide4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/slide4.jpg */ \"./public/slide4.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        src: _public_slide1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        altText: 'Slide 1',\n        caption: 'شما شایسته بهترین ها هستید'\n    },\n    {\n        src: _public_slide2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        altText: 'Slide 2',\n        caption: 'AFARINESH FEKRI FARAZ'\n    },\n    {\n        src: _public_slide3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        altText: 'Slide 3',\n        caption: 'ایده های نو اگر به ثبت برسند تکرار خواهند شد'\n    },\n    {\n        src: _public_slide4_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        altText: 'Slide 4',\n        caption: 'اولین قدم در خلق اختراع پرورش و ثبت ایده های نو است'\n    }, \n];\nvar CarouselComp = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIndex = ref[0], setActiveIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), animating = ref1[0], setAnimating = ref1[1];\n    var onExiting = function() {\n        setAnimating(true);\n    };\n    var onExited = function() {\n        setAnimating(false);\n    };\n    var next = function() {\n        // if(animating) return\n        var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;\n        setActiveIndex(nextIndex);\n    };\n    var previous = function() {\n        // if(animating) return\n        var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n        setActiveIndex(nextIndex);\n    };\n    var goToIndex = function(newIndex) {\n        // if(animating) return\n        setActiveIndex(newIndex);\n    };\n    var slides = items.map(function(item, c) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselItem, {\n            onExiting: onExiting,\n            onExited: onExited,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item.src,\n                layout: \"responsive\",\n                priority: true,\n                alt: item.altText\n            }, void 0, false, {\n                fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, _this1)\n        }, c, false, {\n            fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, _this1));\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            className: \"text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Carousel, {\n                activeIndex: activeIndex,\n                next: next,\n                previous: previous,\n                children: [\n                    slides,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselControl, {\n                        direction: \"prev\",\n                        directionText: \"Previous\",\n                        onClickHandler: previous\n                    }, void 0, false, {\n                        fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselControl, {\n                        direction: \"next\",\n                        directionText: \"Next\",\n                        onClickHandler: next\n                    }, void 0, false, {\n                        fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(CarouselComp, \"n1ZnYgRi7xkIH7X4fVjkk6gEMkk=\");\n_c = CarouselComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselComp);\nvar _c;\n$RefreshReg$(_c, \"CarouselComp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFROztvQkFHakJHLE1BQU07Z0dBQ056Qix1REFBZTt3QkFBQ2lDLFNBQVMsRUFBQyxDQUFNO3dCQUFDQyxhQUFhLEVBQUMsQ0FBVTt3QkFBQ0MsY0FBYyxFQUFFYixRQUFROzs7Ozs7Z0dBQ2xGdEIsdURBQWU7d0JBQUNpQyxTQUFTLEVBQUMsQ0FBTTt3QkFBQ0MsYUFBYSxFQUFDLENBQU07d0JBQUNDLGNBQWMsRUFBRWhCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRixDQUFDO0dBcERLUCxZQUFZO0tBQVpBLFlBQVk7QUFzRGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbENvbXAuanM/YTA3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJvdXNlbCxcclxuICBDYXJvdXNlbEl0ZW0sXHJcbiAgQ2Fyb3VzZWxDb250cm9sLFxyXG4gIC8vIENhcm91c2VsSW5kaWNhdG9ycyxcclxuICBDYXJvdXNlbENhcHRpb24sXHJcbiAgQ29udGFpbmVyXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc2xpZGUxIGZyb20gJy4uL3B1YmxpYy9zbGlkZTEuanBnJ1xyXG5pbXBvcnQgc2xpZGUyIGZyb20gJy4uL3B1YmxpYy9zbGlkZTIuanBnJ1xyXG5pbXBvcnQgc2xpZGUzIGZyb20gJy4uL3B1YmxpYy9zbGlkZTMuanBnJ1xyXG5pbXBvcnQgc2xpZGU0IGZyb20gJy4uL3B1YmxpYy9zbGlkZTQuanBnJ1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiBzbGlkZTEsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMScsXHJcbiAgICBjYXB0aW9uOiAn2LTZhdinINi02KfbjNiz2KrZhyDYqNmH2KrYsduM2YYg2YfYpyDZh9iz2KrbjNivJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiBzbGlkZTIsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMicsXHJcbiAgICBjYXB0aW9uOiAnQUZBUklORVNIIEZFS1JJIEZBUkFaJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiBzbGlkZTMsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMycsXHJcbiAgICBjYXB0aW9uOiAn2KfbjNiv2Ycg2YfYp9uMINmG2Ygg2Kfar9ixINio2Ycg2KvYqNiqINio2LHYs9mG2K8g2Kraqdix2KfYsSDYrtmI2KfZh9mG2K8g2LTYrydcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogc2xpZGU0LFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDQnLFxyXG4gICAgY2FwdGlvbjogJ9in2YjZhNuM2YYg2YLYr9mFINiv2LEg2K7ZhNmCINin2K7Yqtix2KfYuSDZvtix2YjYsdi0INmIINir2KjYqiDYp9uM2K/ZhyDZh9in24wg2YbZiCDYp9iz2KonXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IENhcm91c2VsQ29tcCA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIFxyXG4gIGNvbnN0IG9uRXhpdGluZyA9ICgpID0+IHtcclxuICAgIHNldEFuaW1hdGluZyh0cnVlKVxyXG4gIH1cclxuICBjb25zdCBvbkV4aXRlZCA9ICgpID0+IHtcclxuICAgIHNldEFuaW1hdGluZyhmYWxzZSlcclxuICB9XHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIC8vIGlmKGFuaW1hdGluZykgcmV0dXJuXHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDFcclxuICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleClcclxuICB9XHJcbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICAvLyBpZihhbmltYXRpbmcpIHJldHVyblxyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxXHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpXHJcbiAgfVxyXG4gIGNvbnN0IGdvVG9JbmRleCA9IG5ld0luZGV4ID0+IHtcclxuICAgIC8vIGlmKGFuaW1hdGluZykgcmV0dXJuXHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleClcclxuICB9XHJcblxyXG4gIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLm1hcCgoaXRlbSwgYykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcm91c2VsSXRlbSBvbkV4aXRpbmc9e29uRXhpdGluZ30gb25FeGl0ZWQ9e29uRXhpdGVkfSBrZXk9e2N9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uc3JjfSBsYXlvdXQ9J3Jlc3BvbnNpdmUnIHByaW9yaXR5IGFsdD17aXRlbS5hbHRUZXh0fSAvPlxyXG4gICAgICAgIHsvKiA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IC8+ICovfVxyXG4gICAgICAgIHsvKiA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IGNhcHRpb25IZWFkZXI9e2l0ZW0uY2FwdGlvbn0gLz4gKi99XHJcbiAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuICAgICAgICAgIG5leHQ9e25leHR9XHJcbiAgICAgICAgICBwcmV2aW91cz17cHJldmlvdXN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIDxDYXJvdXNlbEluZGljYXRvcnMgaXRlbXM9e2l0ZW1zfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9IC8+ICovfVxyXG4gICAgICAgICAge3NsaWRlc31cclxuICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c30gLz5cclxuICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e25leHR9IC8+XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxDb21wOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxDb250cm9sIiwiQ2Fyb3VzZWxDYXB0aW9uIiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJzbGlkZTEiLCJzbGlkZTIiLCJzbGlkZTMiLCJzbGlkZTQiLCJpdGVtcyIsInNyYyIsImFsdFRleHQiLCJjYXB0aW9uIiwiQ2Fyb3VzZWxDb21wIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImFuaW1hdGluZyIsInNldEFuaW1hdGluZyIsIm9uRXhpdGluZyIsIm9uRXhpdGVkIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJtYXAiLCJpdGVtIiwiYyIsImxheW91dCIsInByaW9yaXR5IiwiYWx0IiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwiZGlyZWN0aW9uVGV4dCIsIm9uQ2xpY2tIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CarouselComp.js\n");

/***/ })

});