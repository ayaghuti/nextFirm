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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_slide1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/slide1.jpg */ \"./public/slide1.jpg\");\n/* harmony import */ var _public_slide2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/slide2.jpg */ \"./public/slide2.jpg\");\n/* harmony import */ var _public_slide3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/slide3.jpg */ \"./public/slide3.jpg\");\n/* harmony import */ var _public_slide4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/slide4.jpg */ \"./public/slide4.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        src: _public_slide1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        altText: 'Slide 1',\n        caption: 'شما شایسته بهترین ها هستید'\n    },\n    {\n        src: _public_slide2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        altText: 'Slide 2',\n        caption: 'AFARINESH FEKRI FARAZ'\n    },\n    {\n        src: _public_slide3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        altText: 'Slide 3',\n        caption: 'ایده های نو اگر به ثبت برسند تکرار خواهند شد'\n    },\n    {\n        src: _public_slide4_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        altText: 'Slide 4',\n        caption: 'اولین قدم در خلق اختراع پرورش و ثبت ایده های نو است'\n    }, \n];\nvar CarouselComp = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIndex = ref[0], setActiveIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), animating = ref1[0], setAnimating = ref1[1];\n    var onExiting = function() {\n        setAnimating(true);\n    };\n    var onExited = function() {\n        setAnimating(false);\n    };\n    var next = function() {\n        // if(animating) return\n        var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;\n        setActiveIndex(nextIndex);\n    };\n    var previous = function() {\n        // if(animating) return\n        var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n        setActiveIndex(nextIndex);\n    };\n    var goToIndex = function(newIndex) {\n        // if(animating) return\n        setActiveIndex(newIndex);\n    };\n    var slides = items.map(function(item, c) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselItem, {\n            onExiting: onExiting,\n            onExited: onExited,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: item.src,\n                    layout: \"responsive\",\n                    priority: true,\n                    alt: item.altText\n                }, void 0, false, {\n                    fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselCaption, {\n                    captionText: item.caption\n                }, void 0, false, {\n                    fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, c, true, {\n            fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, _this1));\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            className: \"text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Carousel, {\n                activeIndex: activeIndex,\n                next: next,\n                previous: previous,\n                children: [\n                    slides,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselControl, {\n                        direction: \"prev\",\n                        directionText: \"Previous\",\n                        onClickHandler: previous\n                    }, void 0, false, {\n                        fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.CarouselControl, {\n                        direction: \"next\",\n                        directionText: \"Next\",\n                        onClickHandler: next\n                    }, void 0, false, {\n                        fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"E:\\\\e\\\\ALI_university\\\\codeing\\\\next-firm\\\\components\\\\CarouselComp.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(CarouselComp, \"n1ZnYgRi7xkIH7X4fVjkk6gEMkk=\");\n_c = CarouselComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselComp);\nvar _c;\n$RefreshReg$(_c, \"CarouselComp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEVBQUVBLFdBQVc7Z0JBQ3hCTSxJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZHLFFBQVEsRUFBRUEsUUFBUTs7b0JBR2pCRyxNQUFNO2dHQUNOekIsdURBQWU7d0JBQUNrQyxTQUFTLEVBQUMsQ0FBTTt3QkFBQ0MsYUFBYSxFQUFDLENBQVU7d0JBQUNDLGNBQWMsRUFBRWQsUUFBUTs7Ozs7O2dHQUNsRnRCLHVEQUFlO3dCQUFDa0MsU0FBUyxFQUFDLENBQU07d0JBQUNDLGFBQWEsRUFBQyxDQUFNO3dCQUFDQyxjQUFjLEVBQUVqQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckYsQ0FBQztHQXBES1AsWUFBWTtLQUFaQSxZQUFZO0FBc0RsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWxDb21wLmpzP2EwNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2Fyb3VzZWwsXHJcbiAgQ2Fyb3VzZWxJdGVtLFxyXG4gIENhcm91c2VsQ29udHJvbCxcclxuICAvLyBDYXJvdXNlbEluZGljYXRvcnMsXHJcbiAgQ2Fyb3VzZWxDYXB0aW9uLFxyXG4gIENvbnRhaW5lclxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHNsaWRlMSBmcm9tICcuLi9wdWJsaWMvc2xpZGUxLmpwZydcclxuaW1wb3J0IHNsaWRlMiBmcm9tICcuLi9wdWJsaWMvc2xpZGUyLmpwZydcclxuaW1wb3J0IHNsaWRlMyBmcm9tICcuLi9wdWJsaWMvc2xpZGUzLmpwZydcclxuaW1wb3J0IHNsaWRlNCBmcm9tICcuLi9wdWJsaWMvc2xpZGU0LmpwZydcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHNyYzogc2xpZGUxLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDEnLFxyXG4gICAgY2FwdGlvbjogJ9i02YXYpyDYtNin24zYs9iq2Ycg2KjZh9iq2LHbjNmGINmH2Kcg2YfYs9iq24zYrydcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogc2xpZGUyLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDInLFxyXG4gICAgY2FwdGlvbjogJ0FGQVJJTkVTSCBGRUtSSSBGQVJBWidcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogc2xpZGUzLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDMnLFxyXG4gICAgY2FwdGlvbjogJ9in24zYr9mHINmH2KfbjCDZhtmIINin2q/YsSDYqNmHINir2KjYqiDYqNix2LPZhtivINiq2qnYsdin2LEg2K7ZiNin2YfZhtivINi02K8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6IHNsaWRlNCxcclxuICAgIGFsdFRleHQ6ICdTbGlkZSA0JyxcclxuICAgIGNhcHRpb246ICfYp9mI2YTbjNmGINmC2K/ZhSDYr9ixINiu2YTZgiDYp9iu2KrYsdin2Lkg2b7YsdmI2LHYtCDZiCDYq9io2Kog2KfbjNiv2Ycg2YfYp9uMINmG2Ygg2KfYs9iqJ1xyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBDYXJvdXNlbENvbXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBcclxuICBjb25zdCBvbkV4aXRpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmltYXRpbmcodHJ1ZSlcclxuICB9XHJcbiAgY29uc3Qgb25FeGl0ZWQgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmltYXRpbmcoZmFsc2UpXHJcbiAgfVxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICAvLyBpZihhbmltYXRpbmcpIHJldHVyblxyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxXHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpXHJcbiAgfVxyXG4gIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgLy8gaWYoYW5pbWF0aW5nKSByZXR1cm5cclxuICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSAwID8gaXRlbXMubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMVxyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KVxyXG4gIH1cclxuICBjb25zdCBnb1RvSW5kZXggPSBuZXdJbmRleCA9PiB7XHJcbiAgICAvLyBpZihhbmltYXRpbmcpIHJldHVyblxyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbEl0ZW0gb25FeGl0aW5nPXtvbkV4aXRpbmd9IG9uRXhpdGVkPXtvbkV4aXRlZH0ga2V5PXtjfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLnNyY30gbGF5b3V0PSdyZXNwb25zaXZlJyBwcmlvcml0eSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cclxuICAgICAgICA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IC8+XHJcbiAgICAgICAgey8qIDxDYXJvdXNlbENhcHRpb24gY2FwdGlvblRleHQ9e2l0ZW0uY2FwdGlvbn0gY2FwdGlvbkhlYWRlcj17aXRlbS5jYXB0aW9ufSAvPiAqL31cclxuICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG4gICAgICAgICAgbmV4dD17bmV4dH1cclxuICAgICAgICAgIHByZXZpb3VzPXtwcmV2aW91c31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogPENhcm91c2VsSW5kaWNhdG9ycyBpdGVtcz17aXRlbXN9IGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gb25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH0gLz4gKi99XHJcbiAgICAgICAgICB7c2xpZGVzfVxyXG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJwcmV2XCIgZGlyZWN0aW9uVGV4dD1cIlByZXZpb3VzXCIgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfSAvPlxyXG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJuZXh0XCIgZGlyZWN0aW9uVGV4dD1cIk5leHRcIiBvbkNsaWNrSGFuZGxlcj17bmV4dH0gLz5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbENvbXA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2Fyb3VzZWwiLCJDYXJvdXNlbEl0ZW0iLCJDYXJvdXNlbENvbnRyb2wiLCJDYXJvdXNlbENhcHRpb24iLCJDb250YWluZXIiLCJJbWFnZSIsInNsaWRlMSIsInNsaWRlMiIsInNsaWRlMyIsInNsaWRlNCIsIml0ZW1zIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iLCJDYXJvdXNlbENvbXAiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwib25FeGl0aW5nIiwib25FeGl0ZWQiLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iLCJjIiwibGF5b3V0IiwicHJpb3JpdHkiLCJhbHQiLCJjYXB0aW9uVGV4dCIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsImRpcmVjdGlvblRleHQiLCJvbkNsaWNrSGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CarouselComp.js\n");

/***/ })

});