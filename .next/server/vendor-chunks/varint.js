/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/varint";
exports.ids = ["vendor-chunks/varint"];
exports.modules = {

/***/ "(ssr)/./node_modules/varint/decode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/decode.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = read\n\nvar MSB = 0x80\n  , REST = 0x7F\n\nfunction read(buf, offset) {\n  var res    = 0\n    , offset = offset || 0\n    , shift  = 0\n    , counter = offset\n    , b\n    , l = buf.length\n\n  do {\n    if (counter >= l) {\n      read.bytes = 0\n      throw new RangeError('Could not decode varint')\n    }\n    b = buf[counter++]\n    res += shift < 28\n      ? (b & REST) << shift\n      : (b & REST) * Math.pow(2, shift)\n    shift += 7\n  } while (b >= MSB)\n\n  read.bytes = counter - offset\n\n  return res\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2RlY29kZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBvcnRrZXkvbmV4dC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9kZWNvZGUuanM/NDQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlYWRcblxudmFyIE1TQiA9IDB4ODBcbiAgLCBSRVNUID0gMHg3RlxuXG5mdW5jdGlvbiByZWFkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciByZXMgICAgPSAwXG4gICAgLCBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICAgICwgc2hpZnQgID0gMFxuICAgICwgY291bnRlciA9IG9mZnNldFxuICAgICwgYlxuICAgICwgbCA9IGJ1Zi5sZW5ndGhcblxuICBkbyB7XG4gICAgaWYgKGNvdW50ZXIgPj0gbCkge1xuICAgICAgcmVhZC5ieXRlcyA9IDBcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb3VsZCBub3QgZGVjb2RlIHZhcmludCcpXG4gICAgfVxuICAgIGIgPSBidWZbY291bnRlcisrXVxuICAgIHJlcyArPSBzaGlmdCA8IDI4XG4gICAgICA/IChiICYgUkVTVCkgPDwgc2hpZnRcbiAgICAgIDogKGIgJiBSRVNUKSAqIE1hdGgucG93KDIsIHNoaWZ0KVxuICAgIHNoaWZ0ICs9IDdcbiAgfSB3aGlsZSAoYiA+PSBNU0IpXG5cbiAgcmVhZC5ieXRlcyA9IGNvdW50ZXIgLSBvZmZzZXRcblxuICByZXR1cm4gcmVzXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/decode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/encode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/encode.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = encode\n\nvar MSB = 0x80\n  , REST = 0x7F\n  , MSBALL = ~REST\n  , INT = Math.pow(2, 31)\n\nfunction encode(num, out, offset) {\n  out = out || []\n  offset = offset || 0\n  var oldOffset = offset\n\n  while(num >= INT) {\n    out[offset++] = (num & 0xFF) | MSB\n    num /= 128\n  }\n  while(num & MSBALL) {\n    out[offset++] = (num & 0xFF) | MSB\n    num >>>= 7\n  }\n  out[offset] = num | 0\n  \n  encode.bytes = offset - oldOffset + 1\n  \n  return out\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2VuY29kZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBvcnRrZXkvbmV4dC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9lbmNvZGUuanM/NWUzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGVuY29kZVxuXG52YXIgTVNCID0gMHg4MFxuICAsIFJFU1QgPSAweDdGXG4gICwgTVNCQUxMID0gflJFU1RcbiAgLCBJTlQgPSBNYXRoLnBvdygyLCAzMSlcblxuZnVuY3Rpb24gZW5jb2RlKG51bSwgb3V0LCBvZmZzZXQpIHtcbiAgb3V0ID0gb3V0IHx8IFtdXG4gIG9mZnNldCA9IG9mZnNldCB8fCAwXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcblxuICB3aGlsZShudW0gPj0gSU5UKSB7XG4gICAgb3V0W29mZnNldCsrXSA9IChudW0gJiAweEZGKSB8IE1TQlxuICAgIG51bSAvPSAxMjhcbiAgfVxuICB3aGlsZShudW0gJiBNU0JBTEwpIHtcbiAgICBvdXRbb2Zmc2V0KytdID0gKG51bSAmIDB4RkYpIHwgTVNCXG4gICAgbnVtID4+Pj0gN1xuICB9XG4gIG91dFtvZmZzZXRdID0gbnVtIHwgMFxuICBcbiAgZW5jb2RlLmJ5dGVzID0gb2Zmc2V0IC0gb2xkT2Zmc2V0ICsgMVxuICBcbiAgcmV0dXJuIG91dFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/encode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/index.js":
/*!**************************************!*\
  !*** ./node_modules/varint/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n    encode: __webpack_require__(/*! ./encode.js */ \"(ssr)/./node_modules/varint/encode.js\")\n  , decode: __webpack_require__(/*! ./decode.js */ \"(ssr)/./node_modules/varint/decode.js\")\n  , encodingLength: __webpack_require__(/*! ./length.js */ \"(ssr)/./node_modules/varint/length.js\")\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLDBEQUFhO0FBQ2pDLFlBQVksbUJBQU8sQ0FBQywwREFBYTtBQUNqQyxvQkFBb0IsbUJBQU8sQ0FBQywwREFBYTtBQUN6QyIsInNvdXJjZXMiOlsid2VicGFjazovL0Bwb3J0a2V5L25leHQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy92YXJpbnQvaW5kZXguanM/MWU2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlbmNvZGU6IHJlcXVpcmUoJy4vZW5jb2RlLmpzJylcbiAgLCBkZWNvZGU6IHJlcXVpcmUoJy4vZGVjb2RlLmpzJylcbiAgLCBlbmNvZGluZ0xlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGguanMnKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/length.js":
/*!***************************************!*\
  !*** ./node_modules/varint/length.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nvar N1 = Math.pow(2,  7)\nvar N2 = Math.pow(2, 14)\nvar N3 = Math.pow(2, 21)\nvar N4 = Math.pow(2, 28)\nvar N5 = Math.pow(2, 35)\nvar N6 = Math.pow(2, 42)\nvar N7 = Math.pow(2, 49)\nvar N8 = Math.pow(2, 56)\nvar N9 = Math.pow(2, 63)\n\nmodule.exports = function (value) {\n  return (\n    value < N1 ? 1\n  : value < N2 ? 2\n  : value < N3 ? 3\n  : value < N4 ? 4\n  : value < N5 ? 5\n  : value < N6 ? 6\n  : value < N7 ? 7\n  : value < N8 ? 8\n  : value < N9 ? 9\n  :              10\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2xlbmd0aC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcG9ydGtleS9uZXh0LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvdmFyaW50L2xlbmd0aC5qcz8xOWMxIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIE4xID0gTWF0aC5wb3coMiwgIDcpXG52YXIgTjIgPSBNYXRoLnBvdygyLCAxNClcbnZhciBOMyA9IE1hdGgucG93KDIsIDIxKVxudmFyIE40ID0gTWF0aC5wb3coMiwgMjgpXG52YXIgTjUgPSBNYXRoLnBvdygyLCAzNSlcbnZhciBONiA9IE1hdGgucG93KDIsIDQyKVxudmFyIE43ID0gTWF0aC5wb3coMiwgNDkpXG52YXIgTjggPSBNYXRoLnBvdygyLCA1NilcbnZhciBOOSA9IE1hdGgucG93KDIsIDYzKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIDwgTjEgPyAxXG4gIDogdmFsdWUgPCBOMiA/IDJcbiAgOiB2YWx1ZSA8IE4zID8gM1xuICA6IHZhbHVlIDwgTjQgPyA0XG4gIDogdmFsdWUgPCBONSA/IDVcbiAgOiB2YWx1ZSA8IE42ID8gNlxuICA6IHZhbHVlIDwgTjcgPyA3XG4gIDogdmFsdWUgPCBOOCA/IDhcbiAgOiB2YWx1ZSA8IE45ID8gOVxuICA6ICAgICAgICAgICAgICAxMFxuICApXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/length.js\n");

/***/ })

};
;