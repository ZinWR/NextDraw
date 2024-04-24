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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDraw: function() { return /* binding */ useDraw; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useDraw = (onDraw)=>{\n    const [mouseDown, setMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const prevPoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const onMouseDown = ()=>setMouseDown(true);\n    const mouseUpHandler = ()=>setMouseDown(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        var // Add event listeners\n        _canvasRef_current;\n        const handler = (e)=>{\n            var _canvasRef_current;\n            if (!mouseDown) return;\n            // console.log({ x: e.clientX, y: e.clientY });\n            const currentPoint = computePointInCanvas(e);\n            const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n            // logic to check if exist\n            if (!ctx || !currentPoint) return;\n            onDraw({\n                ctx,\n                currentPoint,\n                prevPoint: prevPoint.current\n            });\n        // set previous point to current point for smooth drawing\n        // prevPoint.current = currentPoint;\n        };\n        const computePointInCanvas = (e)=>{\n            const canvas = canvasRef.current;\n            if (!canvas) return;\n            // get the coordinate based on canvas not the page\n            const rect = canvas.getBoundingClientRect();\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            return {\n                x,\n                y\n            };\n        };\n        (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.addEventListener(\"mousemove\", handler);\n        window.addEventListener(\"mouseup\", mouseUpHandler);\n        // Clean up for memory leak\n        return ()=>{\n            var _canvasRef_current;\n            (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.removeEventListener(\"mousemove\", handler);\n            window.removeEventListener(\"mouseup\", mouseUpHandler);\n        };\n    }, [\n        onDraw\n    ]);\n    return {\n        canvasRef,\n        onMouseDown\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZURyYXcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBRTdDLE1BQU1HLFVBQVUsQ0FBQ0M7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU1PLFlBQVlMLDZDQUFNQSxDQUFvQjtJQUM1QyxNQUFNTSxZQUFZTiw2Q0FBTUEsQ0FBZTtJQUV2QyxNQUFNTyxjQUFjLElBQVlILGFBQWE7SUFDN0MsTUFBTUksaUJBQWlCLElBQU1KLGFBQWE7SUFFMUNMLGdEQUFTQSxDQUFDO1lBd0JOLHNCQUFzQjtRQUN0Qk07UUF4QkEsTUFBTUksVUFBVSxDQUFDQztnQkFJREw7WUFIWixJQUFJLENBQUNGLFdBQVc7WUFDaEIsK0NBQStDO1lBQy9DLE1BQU1RLGVBQWVDLHFCQUFxQkY7WUFDMUMsTUFBTUcsT0FBTVIscUJBQUFBLFVBQVVTLE9BQU8sY0FBakJULHlDQUFBQSxtQkFBbUJVLFVBQVUsQ0FBQztZQUMxQywwQkFBMEI7WUFDMUIsSUFBSSxDQUFDRixPQUFPLENBQUNGLGNBQWM7WUFDM0JULE9BQU87Z0JBQUVXO2dCQUFLRjtnQkFBY0wsV0FBV0EsVUFBVVEsT0FBTztZQUFDO1FBQ3pELHlEQUF5RDtRQUN6RCxvQ0FBb0M7UUFDeEM7UUFFQSxNQUFNRix1QkFBdUIsQ0FBQ0Y7WUFDMUIsTUFBTU0sU0FBU1gsVUFBVVMsT0FBTztZQUNoQyxJQUFJLENBQUNFLFFBQVE7WUFFYixrREFBa0Q7WUFDbEQsTUFBTUMsT0FBT0QsT0FBT0UscUJBQXFCO1lBQ3pDLE1BQU1DLElBQUlULEVBQUVVLE9BQU8sR0FBR0gsS0FBS0ksSUFBSTtZQUMvQixNQUFNQyxJQUFJWixFQUFFYSxPQUFPLEdBQUdOLEtBQUtPLEdBQUc7WUFDOUIsT0FBTztnQkFBRUw7Z0JBQUdHO1lBQUU7UUFDbEI7U0FHQWpCLHFCQUFBQSxVQUFVUyxPQUFPLGNBQWpCVCx5Q0FBQUEsbUJBQW1Cb0IsZ0JBQWdCLENBQUMsYUFBYWhCO1FBQ2pEaUIsT0FBT0QsZ0JBQWdCLENBQUMsV0FBV2pCO1FBRW5DLDJCQUEyQjtRQUMzQixPQUFPO2dCQUNISDthQUFBQSxxQkFBQUEsVUFBVVMsT0FBTyxjQUFqQlQseUNBQUFBLG1CQUFtQnNCLG1CQUFtQixDQUFDLGFBQWFsQjtZQUNwRGlCLE9BQU9DLG1CQUFtQixDQUFDLFdBQVduQjtRQUMxQztJQUNKLEdBQUc7UUFBQ047S0FBTztJQUVYLE9BQU87UUFBRUc7UUFBV0U7SUFBWTtBQUNwQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZURyYXcudHM/NDE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHVzZURyYXcgPSAob25EcmF3OiAoeyBjdHgsIGN1cnJlbnRQb2ludCwgcHJldlBvaW50IH06IERyYXcpID0+IHZvaWQpID0+IHtcbiAgICBjb25zdCBbbW91c2VEb3duLCBzZXRNb3VzZURvd25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgcHJldlBvaW50ID0gdXNlUmVmPG51bGwgfCBQb2ludD4obnVsbCk7XG5cbiAgICBjb25zdCBvbk1vdXNlRG93biA9ICgpOiB2b2lkID0+IHNldE1vdXNlRG93bih0cnVlKTtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlciA9ICgpID0+IHNldE1vdXNlRG93bihmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghbW91c2VEb3duKSByZXR1cm47XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBvaW50ID0gY29tcHV0ZVBvaW50SW5DYW52YXMoZSk7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIC8vIGxvZ2ljIHRvIGNoZWNrIGlmIGV4aXN0XG4gICAgICAgICAgICBpZiAoIWN0eCB8fCAhY3VycmVudFBvaW50KSByZXR1cm47XG4gICAgICAgICAgICBvbkRyYXcoeyBjdHgsIGN1cnJlbnRQb2ludCwgcHJldlBvaW50OiBwcmV2UG9pbnQuY3VycmVudCB9KTtcbiAgICAgICAgICAgIC8vIHNldCBwcmV2aW91cyBwb2ludCB0byBjdXJyZW50IHBvaW50IGZvciBzbW9vdGggZHJhd2luZ1xuICAgICAgICAgICAgLy8gcHJldlBvaW50LmN1cnJlbnQgPSBjdXJyZW50UG9pbnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZVBvaW50SW5DYW52YXMgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGNvb3JkaW5hdGUgYmFzZWQgb24gY2FudmFzIG5vdCB0aGUgcGFnZVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBjYW52YXNSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgICAgIC8vIENsZWFuIHVwIGZvciBtZW1vcnkgbGVha1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2FudmFzUmVmLmN1cnJlbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZXIpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9LCBbb25EcmF3XSk7XG5cbiAgICByZXR1cm4geyBjYW52YXNSZWYsIG9uTW91c2VEb3duIH07XG59OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURyYXciLCJvbkRyYXciLCJtb3VzZURvd24iLCJzZXRNb3VzZURvd24iLCJjYW52YXNSZWYiLCJwcmV2UG9pbnQiLCJvbk1vdXNlRG93biIsIm1vdXNlVXBIYW5kbGVyIiwiaGFuZGxlciIsImUiLCJjdXJyZW50UG9pbnQiLCJjb21wdXRlUG9pbnRJbkNhbnZhcyIsImN0eCIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiY2FudmFzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useDraw.ts\n"));

/***/ })

});