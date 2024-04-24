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

/***/ "(app-pages-browser)/./hooks/useDraw.ts":
/*!**************************!*\
  !*** ./hooks/useDraw.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDraw: function() { return /* binding */ useDraw; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useDraw = (onDraw)=>{\n    const [mouseDown, setMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const prevPoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const onMouseDown = ()=>setMouseDown(true);\n    const mouseUpHandler = ()=>setMouseDown(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        var // Add event listeners\n        _canvasRef_current;\n        const handler = (e)=>{\n            var _canvasRef_current;\n            if (!mouseDown) return;\n            // console.log({ x: e.clientX, y: e.clientY });\n            const currentPoint = computePointInCanvas(e);\n            const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n            // logic to check if exist\n            if (!ctx || !currentPoint) return;\n            onDraw({\n                ctx,\n                currentPoint,\n                prevPoint: prevPoint.current\n            });\n            // set previous point to current point for smooth drawing\n            prevPoint.current = currentPoint;\n        };\n        const computePointInCanvas = (e)=>{\n            const canvas = canvasRef.current;\n            if (!canvas) return;\n            // get the coordinate based on canvas not the page\n            const rect = canvas.getBoundingClientRect();\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            return {\n                x,\n                y\n            };\n        };\n        (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.addEventListener(\"mousemove\", handler);\n        window.addEventListener(\"mouseup\", mouseUpHandler);\n        // Clean up for memory leak\n        return ()=>{\n            var _canvasRef_current;\n            (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.removeEventListener(\"mousemove\", handler);\n            window.removeEventListener(\"mouseup\", mouseUpHandler);\n        };\n    }, []);\n    return {\n        canvasRef,\n        onMouseDown\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZURyYXcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBRTdDLE1BQU1HLFVBQVUsQ0FBQ0M7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU1PLFlBQVlMLDZDQUFNQSxDQUFvQjtJQUM1QyxNQUFNTSxZQUFZTiw2Q0FBTUEsQ0FBZTtJQUV2QyxNQUFNTyxjQUFjLElBQVlILGFBQWE7SUFFN0MsTUFBTUksaUJBQWlCLElBQU1KLGFBQWE7SUFFMUNMLGdEQUFTQSxDQUFDO1lBeUJOLHNCQUFzQjtRQUN0Qk07UUF6QkEsTUFBTUksVUFBVSxDQUFDQztnQkFJREw7WUFIWixJQUFJLENBQUNGLFdBQVc7WUFDaEIsK0NBQStDO1lBQy9DLE1BQU1RLGVBQWVDLHFCQUFxQkY7WUFDMUMsTUFBTUcsT0FBTVIscUJBQUFBLFVBQVVTLE9BQU8sY0FBakJULHlDQUFBQSxtQkFBbUJVLFVBQVUsQ0FBQztZQUMxQywwQkFBMEI7WUFDMUIsSUFBSSxDQUFDRixPQUFPLENBQUNGLGNBQWM7WUFDM0JULE9BQU87Z0JBQUVXO2dCQUFLRjtnQkFBY0wsV0FBV0EsVUFBVVEsT0FBTztZQUFDO1lBQ3pELHlEQUF5RDtZQUN6RFIsVUFBVVEsT0FBTyxHQUFHSDtRQUN4QjtRQUVBLE1BQU1DLHVCQUF1QixDQUFDRjtZQUMxQixNQUFNTSxTQUFTWCxVQUFVUyxPQUFPO1lBQ2hDLElBQUksQ0FBQ0UsUUFBUTtZQUViLGtEQUFrRDtZQUNsRCxNQUFNQyxPQUFPRCxPQUFPRSxxQkFBcUI7WUFDekMsTUFBTUMsSUFBSVQsRUFBRVUsT0FBTyxHQUFHSCxLQUFLSSxJQUFJO1lBQy9CLE1BQU1DLElBQUlaLEVBQUVhLE9BQU8sR0FBR04sS0FBS08sR0FBRztZQUM5QixPQUFPO2dCQUFFTDtnQkFBR0c7WUFBRTtRQUNsQjtTQUlBakIscUJBQUFBLFVBQVVTLE9BQU8sY0FBakJULHlDQUFBQSxtQkFBbUJvQixnQkFBZ0IsQ0FBQyxhQUFhaEI7UUFDakRpQixPQUFPRCxnQkFBZ0IsQ0FBQyxXQUFXakI7UUFFbkMsMkJBQTJCO1FBQzNCLE9BQU87Z0JBQ0hIO2FBQUFBLHFCQUFBQSxVQUFVUyxPQUFPLGNBQWpCVCx5Q0FBQUEsbUJBQW1Cc0IsbUJBQW1CLENBQUMsYUFBYWxCO1lBQ3BEaUIsT0FBT0MsbUJBQW1CLENBQUMsV0FBV25CO1FBQzFDO0lBQ0osR0FBRyxFQUFFO0lBRUwsT0FBTztRQUFFSDtRQUFXRTtJQUFZO0FBQ3BDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRHJhdy50cz80MTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgdXNlRHJhdyA9IChvbkRyYXc6ICh7IGN0eCwgY3VycmVudFBvaW50LCBwcmV2UG9pbnQgfTogRHJhdykgPT4gdm9pZCkgPT4ge1xuICAgIGNvbnN0IFttb3VzZURvd24sIHNldE1vdXNlRG93bl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBwcmV2UG9pbnQgPSB1c2VSZWY8bnVsbCB8IFBvaW50PihudWxsKTtcblxuICAgIGNvbnN0IG9uTW91c2VEb3duID0gKCk6IHZvaWQgPT4gc2V0TW91c2VEb3duKHRydWUpO1xuXG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXIgPSAoKSA9PiBzZXRNb3VzZURvd24oZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vdXNlRG93bikgcmV0dXJuO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IGNvbXB1dGVQb2ludEluQ2FudmFzKGUpO1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzUmVmLmN1cnJlbnQ/LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAvLyBsb2dpYyB0byBjaGVjayBpZiBleGlzdFxuICAgICAgICAgICAgaWYgKCFjdHggfHwgIWN1cnJlbnRQb2ludCkgcmV0dXJuO1xuICAgICAgICAgICAgb25EcmF3KHsgY3R4LCBjdXJyZW50UG9pbnQsIHByZXZQb2ludDogcHJldlBvaW50LmN1cnJlbnQgfSk7XG4gICAgICAgICAgICAvLyBzZXQgcHJldmlvdXMgcG9pbnQgdG8gY3VycmVudCBwb2ludCBmb3Igc21vb3RoIGRyYXdpbmdcbiAgICAgICAgICAgIHByZXZQb2ludC5jdXJyZW50ID0gY3VycmVudFBvaW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVQb2ludEluQ2FudmFzID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjb29yZGluYXRlIGJhc2VkIG9uIGNhbnZhcyBub3QgdGhlIHBhZ2VcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBjYW52YXNSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgICAgIC8vIENsZWFuIHVwIGZvciBtZW1vcnkgbGVha1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2FudmFzUmVmLmN1cnJlbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZXIpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4geyBjYW52YXNSZWYsIG9uTW91c2VEb3duIH07XG59OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURyYXciLCJvbkRyYXciLCJtb3VzZURvd24iLCJzZXRNb3VzZURvd24iLCJjYW52YXNSZWYiLCJwcmV2UG9pbnQiLCJvbk1vdXNlRG93biIsIm1vdXNlVXBIYW5kbGVyIiwiaGFuZGxlciIsImUiLCJjdXJyZW50UG9pbnQiLCJjb21wdXRlUG9pbnRJbkNhbnZhcyIsImN0eCIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiY2FudmFzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useDraw.ts\n"));

/***/ })

});