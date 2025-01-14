"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/staged-components";
exports.ids = ["vendor-chunks/staged-components"];
exports.modules = {

/***/ "(ssr)/./node_modules/staged-components/index.js":
/*!*************************************************!*\
  !*** ./node_modules/staged-components/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.staged = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nfunction processNext(next) {\n    if (typeof next === 'function') {\n        return (react_1.default.createElement(Stage, { stage: next }));\n    }\n    else {\n        return next;\n    }\n}\nfunction Stage(props) {\n    const next = props.stage();\n    return processNext(next);\n}\nfunction staged(stage) {\n    return function Staged(props, ref) {\n        const next = stage(props, ref);\n        return processNext(next);\n    };\n}\nexports.staged = staged;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhZ2VkLWNvbXBvbmVudHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsZ0NBQWdDLG1CQUFPLENBQUMsd0dBQU87QUFDL0M7QUFDQTtBQUNBLHVEQUF1RCxhQUFhO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcG9ydGtleS9uZXh0LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3RhZ2VkLWNvbXBvbmVudHMvaW5kZXguanM/MjU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RhZ2VkID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gcHJvY2Vzc05leHQobmV4dCkge1xuICAgIGlmICh0eXBlb2YgbmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN0YWdlLCB7IHN0YWdlOiBuZXh0IH0pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXh0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIFN0YWdlKHByb3BzKSB7XG4gICAgY29uc3QgbmV4dCA9IHByb3BzLnN0YWdlKCk7XG4gICAgcmV0dXJuIHByb2Nlc3NOZXh0KG5leHQpO1xufVxuZnVuY3Rpb24gc3RhZ2VkKHN0YWdlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFN0YWdlZChwcm9wcywgcmVmKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBzdGFnZShwcm9wcywgcmVmKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NOZXh0KG5leHQpO1xuICAgIH07XG59XG5leHBvcnRzLnN0YWdlZCA9IHN0YWdlZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/staged-components/index.js\n");

/***/ })

};
;