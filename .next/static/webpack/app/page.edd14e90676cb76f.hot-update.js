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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useDraw */ \"(app-pages-browser)/./hooks/useDraw.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = (param)=>{\n    let {} = param;\n    _s();\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__.useDraw)(drawLine);\n    function drawLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        const { x: currX, y: currY } = currentPoint;\n        const lineColor = \"#000\";\n        const lineWidth = 5;\n        // draw\n        let startPoint = currentPoint;\n        ctx.beginPath();\n        ctx.lineWidth = lineWidth;\n        ctx.strokeStyle = lineColor;\n        ctx.moveTo(startPoint.x, startPoint.y);\n        ctx.lineTo(currX, currY);\n        ctx.stroke();\n        ctx.fillStyle = lineColor;\n        ctx.beginPath();\n        // (x, y, radius, startAngle, endAngle)\n        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-white flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            ref: canvasRef,\n            width: 750,\n            height: 750,\n            className: \"border border-black rounded-md\"\n        }, void 0, false, {\n            fileName: \"/Users/quannguyen/Documents/Personal Projects/next-draw/src/app/page.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/quannguyen/Documents/Personal Projects/next-draw/src/app/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"pqBc+jcSEgFwfJP9VUZpcRclagg=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__.useDraw\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHOEM7QUFNOUMsTUFBTUMsT0FBc0I7UUFBQyxFQUFFOztJQUU3QixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFLEdBQUdILHVEQUFPQSxDQUFDSTtJQUUzQyxTQUFTQSxTQUFTLEtBQXNDO1lBQXRDLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQVEsR0FBdEM7UUFDaEIsTUFBTSxFQUFFQyxHQUFHQyxLQUFLLEVBQUVDLEdBQUdDLEtBQUssRUFBRSxHQUFHTDtRQUMvQixNQUFNTSxZQUFZO1FBQ2xCLE1BQU1DLFlBQVk7UUFFbEIsT0FBTztRQUNQLElBQUlDLGFBQWFSO1FBQ2pCQyxJQUFJUSxTQUFTO1FBQ2JSLElBQUlNLFNBQVMsR0FBR0E7UUFDaEJOLElBQUlTLFdBQVcsR0FBR0o7UUFDbEJMLElBQUlVLE1BQU0sQ0FBQ0gsV0FBV04sQ0FBQyxFQUFFTSxXQUFXSixDQUFDO1FBQ3JDSCxJQUFJVyxNQUFNLENBQUNULE9BQU9FO1FBQ2xCSixJQUFJWSxNQUFNO1FBRVZaLElBQUlhLFNBQVMsR0FBR1I7UUFDaEJMLElBQUlRLFNBQVM7UUFDYix1Q0FBdUM7UUFDdkNSLElBQUljLEdBQUcsQ0FBQ1AsV0FBV04sQ0FBQyxFQUFFTSxXQUFXSixDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUlZLEtBQUtDLEVBQUU7UUFDckRoQixJQUFJaUIsSUFBSTtJQUNWO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQ0N4QixhQUFhQTtZQUNieUIsS0FBSzFCO1lBQ0wyQixPQUFPO1lBQ1BDLFFBQVE7WUFDUkosV0FBVTs7Ozs7Ozs7Ozs7QUFJbEI7R0FwQ016Qjs7UUFFK0JELG1EQUFPQTs7O0FBb0M1QywrREFBZUMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnIC8vIG5lZWRlZCBmb3IgTmV4dEpTIDEzXG5cbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRHJhdyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZURyYXcnO1xuXG5pbnRlcmZhY2UgcGFnZVByb3BzIHtcbiAgXG59O1xuXG5jb25zdCBwYWdlOiBGQzxwYWdlUHJvcHM+ID0gKHt9KSA9PiB7XG5cbiAgY29uc3QgeyBjYW52YXNSZWYsIG9uTW91c2VEb3duIH0gPSB1c2VEcmF3KGRyYXdMaW5lKTtcblxuICBmdW5jdGlvbiBkcmF3TGluZSh7IHByZXZQb2ludCwgY3VycmVudFBvaW50LCBjdHggfTogRHJhdyk6IHZvaWQge1xuICAgIGNvbnN0IHsgeDogY3VyclgsIHk6IGN1cnJZIH0gPSBjdXJyZW50UG9pbnQ7XG4gICAgY29uc3QgbGluZUNvbG9yID0gJyMwMDAnO1xuICAgIGNvbnN0IGxpbmVXaWR0aCA9IDU7XG5cbiAgICAvLyBkcmF3XG4gICAgbGV0IHN0YXJ0UG9pbnQgPSBjdXJyZW50UG9pbnQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gbGluZUNvbG9yO1xuICAgIGN0eC5tb3ZlVG8oc3RhcnRQb2ludC54LCBzdGFydFBvaW50LnkpO1xuICAgIGN0eC5saW5lVG8oY3VyclgsIGN1cnJZKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgY3R4LmZpbGxTdHlsZSA9IGxpbmVDb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpXG4gICAgY3R4LmFyYyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICA8Y2FudmFzIFxuICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD17NzUwfVxuICAgICAgICBoZWlnaHQ9ezc1MH1cbiAgICAgICAgY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQnXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiXSwibmFtZXMiOlsidXNlRHJhdyIsInBhZ2UiLCJjYW52YXNSZWYiLCJvbk1vdXNlRG93biIsImRyYXdMaW5lIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwiY3R4IiwieCIsImN1cnJYIiwieSIsImN1cnJZIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwic3RhcnRQb2ludCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbFN0eWxlIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImRpdiIsImNsYXNzTmFtZSIsImNhbnZhcyIsInJlZiIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});