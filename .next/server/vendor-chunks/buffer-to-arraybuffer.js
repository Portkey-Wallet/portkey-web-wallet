/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-to-arraybuffer";
exports.ids = ["vendor-chunks/buffer-to-arraybuffer"];
exports.modules = {

/***/ "(ssr)/./node_modules/buffer-to-arraybuffer/buffer-to-arraybuffer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/buffer-to-arraybuffer/buffer-to-arraybuffer.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

eval("(function(root) {\n  var isArrayBufferSupported = (new Buffer(0)).buffer instanceof ArrayBuffer;\n\n  var bufferToArrayBuffer = isArrayBufferSupported ? bufferToArrayBufferSlice : bufferToArrayBufferCycle;\n\n  function bufferToArrayBufferSlice(buffer) {\n    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);\n  }\n\n  function bufferToArrayBufferCycle(buffer) {\n    var ab = new ArrayBuffer(buffer.length);\n    var view = new Uint8Array(ab);\n    for (var i = 0; i < buffer.length; ++i) {\n      view[i] = buffer[i];\n    }\n    return ab;\n  }\n\n  if (true) {\n    if ( true && module.exports) {\n      exports = module.exports = bufferToArrayBuffer;\n    }\n    exports.bufferToArrayBuffer = bufferToArrayBuffer;\n  } else {}\n})(this);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnVmZmVyLXRvLWFycmF5YnVmZmVyL2J1ZmZlci10by1hcnJheWJ1ZmZlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBOEI7QUFDcEMsUUFBUSxLQUE2QjtBQUNyQztBQUNBO0FBQ0EsSUFBSSwyQkFBMkI7QUFDL0IsSUFBSSxLQUFLLEVBTU47QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBvcnRrZXkvbmV4dC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci10by1hcnJheWJ1ZmZlci9idWZmZXItdG8tYXJyYXlidWZmZXIuanM/Y2RkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24ocm9vdCkge1xuICB2YXIgaXNBcnJheUJ1ZmZlclN1cHBvcnRlZCA9IChuZXcgQnVmZmVyKDApKS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcblxuICB2YXIgYnVmZmVyVG9BcnJheUJ1ZmZlciA9IGlzQXJyYXlCdWZmZXJTdXBwb3J0ZWQgPyBidWZmZXJUb0FycmF5QnVmZmVyU2xpY2UgOiBidWZmZXJUb0FycmF5QnVmZmVyQ3ljbGU7XG5cbiAgZnVuY3Rpb24gYnVmZmVyVG9BcnJheUJ1ZmZlclNsaWNlKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXIuYnVmZmVyLnNsaWNlKGJ1ZmZlci5ieXRlT2Zmc2V0LCBidWZmZXIuYnl0ZU9mZnNldCArIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlclRvQXJyYXlCdWZmZXJDeWNsZShidWZmZXIpIHtcbiAgICB2YXIgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyLmxlbmd0aCk7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWZmZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZpZXdbaV0gPSBidWZmZXJbaV07XG4gICAgfVxuICAgIHJldHVybiBhYjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclRvQXJyYXlCdWZmZXI7XG4gICAgfVxuICAgIGV4cG9ydHMuYnVmZmVyVG9BcnJheUJ1ZmZlciA9IGJ1ZmZlclRvQXJyYXlCdWZmZXI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBidWZmZXJUb0FycmF5QnVmZmVyO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuYnVmZmVyVG9BcnJheUJ1ZmZlciA9IGJ1ZmZlclRvQXJyYXlCdWZmZXI7XG4gIH1cbn0pKHRoaXMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/buffer-to-arraybuffer/buffer-to-arraybuffer.js\n");

/***/ })

};
;