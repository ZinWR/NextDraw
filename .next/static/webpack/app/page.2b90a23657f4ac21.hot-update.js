"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useDraw */ \"(app-pages-browser)/./hooks/useDraw.ts\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-color */ \"(app-pages-browser)/./node_modules/react-color/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = (param)=>{\n    let {} = param;\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown, clear } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(drawLine);\n    function drawLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        const { x: currX, y: currY } = currentPoint;\n        const lineWidth = 5;\n        // draw\n        let startPoint = prevPoint !== null && prevPoint !== void 0 ? prevPoint : currentPoint;\n        ctx.beginPath();\n        ctx.lineWidth = lineWidth;\n        ctx.strokeStyle = color;\n        ctx.moveTo(startPoint.x, startPoint.y);\n        ctx.lineTo(currX, currY);\n        ctx.stroke();\n        ctx.fillStyle = color;\n        ctx.beginPath();\n        // (x, y, radius, startAngle, endAngle)\n        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-white flex justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-10 pr-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_3__.ChromePicker, {\n                        color: color,\n                        onChange: (e)=>setColor(e.hex)\n                    }, void 0, false, {\n                        fileName: \"/Users/quannguyen/Documents/Personal Projects/next-draw/src/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"p-2 rounded-md border border-black text-black\",\n                        onClick: clear,\n                        children: \" Clear Canvas\"\n                    }, void 0, false, {\n                        fileName: \"/Users/quannguyen/Documents/Personal Projects/next-draw/src/app/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quannguyen/Documents/Personal Projects/next-draw/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                onMouseDown: onMouseDown,\n                ref: canvasRef,\n                width: 750,\n                height: 750,\n                className: \"border border-black rounded-md\"\n            }, void 0, false, {\n                fileName: \"/Users/quannguyen/Documents/Personal Projects/next-draw/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/quannguyen/Documents/Personal Projects/next-draw/src/app/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"SImt29i4jMGZFfWnirppSQI+p9k=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFcUM7QUFDUztBQUNIO0FBTTNDLE1BQU1HLE9BQXNCO1FBQUMsRUFBRTs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sRUFBRU0sU0FBUyxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRSxHQUFHUCx1REFBT0EsQ0FBQ1E7SUFFbEQsU0FBU0EsU0FBUyxLQUFzQztZQUF0QyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsR0FBRyxFQUFRLEdBQXRDO1FBQ2hCLE1BQU0sRUFBRUMsR0FBR0MsS0FBSyxFQUFFQyxHQUFHQyxLQUFLLEVBQUUsR0FBR0w7UUFDL0IsTUFBTU0sWUFBWTtRQUVsQixPQUFPO1FBQ1AsSUFBSUMsYUFBYVIsc0JBQUFBLHVCQUFBQSxZQUFhQztRQUM5QkMsSUFBSU8sU0FBUztRQUNiUCxJQUFJSyxTQUFTLEdBQUdBO1FBQ2hCTCxJQUFJUSxXQUFXLEdBQUdoQjtRQUNsQlEsSUFBSVMsTUFBTSxDQUFDSCxXQUFXTCxDQUFDLEVBQUVLLFdBQVdILENBQUM7UUFDckNILElBQUlVLE1BQU0sQ0FBQ1IsT0FBT0U7UUFDbEJKLElBQUlXLE1BQU07UUFFVlgsSUFBSVksU0FBUyxHQUFHcEI7UUFDaEJRLElBQUlPLFNBQVM7UUFDYix1Q0FBdUM7UUFDdkNQLElBQUlhLEdBQUcsQ0FBQ1AsV0FBV0wsQ0FBQyxFQUFFSyxXQUFXSCxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUlXLEtBQUtDLEVBQUU7UUFDckRmLElBQUlnQixJQUFJO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQzVCLHFEQUFZQTt3QkFBQ0UsT0FBT0E7d0JBQU8yQixVQUFVLENBQUNDLElBQU0zQixTQUFTMkIsRUFBRUMsR0FBRzs7Ozs7O2tDQUMzRCw4REFBQ0M7d0JBQU9DLE1BQUs7d0JBQVNMLFdBQVU7d0JBQWdETSxTQUFTNUI7a0NBQU87Ozs7Ozs7Ozs7OzswQkFFbEcsOERBQUM2QjtnQkFDQzlCLGFBQWFBO2dCQUNiK0IsS0FBS2hDO2dCQUNMaUMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUlYsV0FBVTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBdkNNM0I7O1FBRXNDRixtREFBT0E7OztBQXVDbkQsK0RBQWVFLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JyAvLyBuZWVkZWQgZm9yIE5leHRKUyAxM1xuXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEcmF3IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlRHJhdyc7XG5pbXBvcnQgeyBDaHJvbWVQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcic7XG5cbmludGVyZmFjZSBwYWdlUHJvcHMge1xuICBcbn07XG5cbmNvbnN0IHBhZ2U6IEZDPHBhZ2VQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcjMDAwJyk7XG4gIGNvbnN0IHsgY2FudmFzUmVmLCBvbk1vdXNlRG93biwgY2xlYXIgfSA9IHVzZURyYXcoZHJhd0xpbmUpO1xuXG4gIGZ1bmN0aW9uIGRyYXdMaW5lKHsgcHJldlBvaW50LCBjdXJyZW50UG9pbnQsIGN0eCB9OiBEcmF3KTogdm9pZCB7XG4gICAgY29uc3QgeyB4OiBjdXJyWCwgeTogY3VyclkgfSA9IGN1cnJlbnRQb2ludDtcbiAgICBjb25zdCBsaW5lV2lkdGggPSA1O1xuXG4gICAgLy8gZHJhd1xuICAgIGxldCBzdGFydFBvaW50ID0gcHJldlBvaW50ID8/IGN1cnJlbnRQb2ludDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubW92ZVRvKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55KTtcbiAgICBjdHgubGluZVRvKGN1cnJYLCBjdXJyWSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpXG4gICAgY3R4LmFyYyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMTAgcHItMTAnPlxuICAgICAgICA8Q2hyb21lUGlja2VyIGNvbG9yPXtjb2xvcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2xvcihlLmhleCl9Lz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0ncC0yIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ibGFjayB0ZXh0LWJsYWNrJyBvbkNsaWNrPXtjbGVhcn0+IENsZWFyIENhbnZhczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzIFxuICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD17NzUwfVxuICAgICAgICBoZWlnaHQ9ezc1MH1cbiAgICAgICAgY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQnXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VEcmF3IiwiQ2hyb21lUGlja2VyIiwicGFnZSIsImNvbG9yIiwic2V0Q29sb3IiLCJjYW52YXNSZWYiLCJvbk1vdXNlRG93biIsImNsZWFyIiwiZHJhd0xpbmUiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJjdHgiLCJ4IiwiY3VyclgiLCJ5IiwiY3VyclkiLCJsaW5lV2lkdGgiLCJzdGFydFBvaW50IiwiYmVnaW5QYXRoIiwic3Ryb2tlU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJmaWxsU3R5bGUiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJlIiwiaGV4IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJjYW52YXMiLCJyZWYiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});