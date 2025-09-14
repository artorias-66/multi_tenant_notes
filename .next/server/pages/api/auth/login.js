"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyTokenFromHeader: () => (/* binding */ verifyTokenFromHeader)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n// lib/auth.js\n\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign(payload, process.env.JWT_SECRET, {\n        expiresIn: \"8h\"\n    });\n}\nfunction verifyTokenFromHeader(req) {\n    const auth = req.headers.authorization || req.headers.Authorization;\n    if (!auth) throw new Error(\"No authorization header\");\n    const t = auth.split(\" \");\n    if (t.length !== 2) throw new Error(\"Bad authorization header\");\n    const token = t[1];\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify(token, process.env.JWT_SECRET);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxjQUFjO0FBQ2lCO0FBRXhCLFNBQVNDLFVBQVVDLE9BQU87SUFDL0IsT0FBT0YsOENBQVEsQ0FBQ0UsU0FBU0UsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUU7UUFBRUMsV0FBVztJQUFLO0FBQ3JFO0FBRU8sU0FBU0Msc0JBQXNCQyxHQUFHO0lBQ3ZDLE1BQU1DLE9BQU9ELElBQUlFLE9BQU8sQ0FBQ0MsYUFBYSxJQUFJSCxJQUFJRSxPQUFPLENBQUNFLGFBQWE7SUFDbkUsSUFBSSxDQUFDSCxNQUFNLE1BQU0sSUFBSUksTUFBTTtJQUMzQixNQUFNQyxJQUFJTCxLQUFLTSxLQUFLLENBQUM7SUFDckIsSUFBSUQsRUFBRUUsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJSCxNQUFNO0lBQ3BDLE1BQU1JLFFBQVFILENBQUMsQ0FBQyxFQUFFO0lBQ2xCLE9BQU9mLGdEQUFVLENBQUNrQixPQUFPZCxRQUFRQyxHQUFHLENBQUNDLFVBQVU7QUFDakQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aS10ZW5hbnQtbm90ZXMtbW9uZ28vLi9saWIvYXV0aC5qcz8yODdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9hdXRoLmpzXHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiBcIjhoXCIgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbkZyb21IZWFkZXIocmVxKSB7XHJcbiAgY29uc3QgYXV0aCA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgcmVxLmhlYWRlcnMuQXV0aG9yaXphdGlvbjtcclxuICBpZiAoIWF1dGgpIHRocm93IG5ldyBFcnJvcihcIk5vIGF1dGhvcml6YXRpb24gaGVhZGVyXCIpO1xyXG4gIGNvbnN0IHQgPSBhdXRoLnNwbGl0KFwiIFwiKTtcclxuICBpZiAodC5sZW5ndGggIT09IDIpIHRocm93IG5ldyBFcnJvcihcIkJhZCBhdXRob3JpemF0aW9uIGhlYWRlclwiKTtcclxuICBjb25zdCB0b2tlbiA9IHRbMV07XHJcbiAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJzaWduVG9rZW4iLCJwYXlsb2FkIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW5Gcm9tSGVhZGVyIiwicmVxIiwiYXV0aCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiQXV0aG9yaXphdGlvbiIsIkVycm9yIiwidCIsInNwbGl0IiwibGVuZ3RoIiwidG9rZW4iLCJ2ZXJpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// lib/db.js\n\nconst MONGO_URI = process.env.MONGO_URI;\nif (!MONGO_URI) throw new Error(\"Please define MONGO_URI in .env\");\nlet cached = global.mongoose;\nif (!cached) cached = global.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function connectDB() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(MONGO_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        }).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxZQUFZO0FBQ29CO0FBRWhDLE1BQU1DLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBUztBQUN2QyxJQUFJLENBQUNBLFdBQVcsTUFBTSxJQUFJRyxNQUFNO0FBRWhDLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFDNUIsSUFBSSxDQUFDSyxRQUFRQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7SUFBRU8sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFN0QsZUFBZUM7SUFDcEIsSUFBSUosT0FBT0UsSUFBSSxFQUFFLE9BQU9GLE9BQU9FLElBQUk7SUFDbkMsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkJILE9BQU9HLE9BQU8sR0FBR1IsNkNBQWdCLENBQUNDLFdBQVc7WUFDM0NVLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCLEdBQUdDLElBQUksQ0FBQyxDQUFDQyxJQUFNQTtJQUNqQjtJQUNBVCxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGktdGVuYW50LW5vdGVzLW1vbmdvLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2RiLmpzXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSSTtcbmlmICghTU9OR09fVVJJKSB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZGVmaW5lIE1PTkdPX1VSSSBpbiAuZW52XCIpO1xuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuaWYgKCFjYWNoZWQpIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkksIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9KS50aGVuKChtKSA9PiBtKTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./models/Tenant.js":
/*!**************************!*\
  !*** ./models/Tenant.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// models/Tenant.js\n\nconst TenantSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true\n    },\n    plan: {\n        type: String,\n        enum: [\n            \"FREE\",\n            \"PRO\"\n        ],\n        default: \"FREE\"\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Tenant || mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"Tenant\", TenantSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVGVuYW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUJBQW1CO0FBQ2E7QUFFaEMsTUFBTUMsZUFBZSxJQUFJRCw0Q0FBZSxDQUFDO0lBQ3ZDRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsTUFBTTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO1FBQU1FLFFBQVE7UUFBTUMsV0FBVztJQUFLO0lBQ3BFQyxNQUFNO1FBQUVOLE1BQU1DO1FBQVFNLE1BQU07WUFBQztZQUFRO1NBQU07UUFBRUMsU0FBUztJQUFPO0FBQy9ELEdBQUc7SUFBRUMsWUFBWTtBQUFLO0FBRXRCLGlFQUFlYiw0Q0FBZSxDQUFDZSxNQUFNLElBQUlmLDJDQUFjLENBQUMsVUFBVUMsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL211bHRpLXRlbmFudC1ub3Rlcy1tb25nby8uL21vZGVscy9UZW5hbnQuanM/NWQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2RlbHMvVGVuYW50LmpzXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFRlbmFudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUsIGxvd2VyY2FzZTogdHJ1ZSB9LFxuICBwbGFuOiB7IHR5cGU6IFN0cmluZywgZW51bTogW1wiRlJFRVwiLCBcIlBST1wiXSwgZGVmYXVsdDogXCJGUkVFXCIgfVxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVGVuYW50IHx8IG1vbmdvb3NlLm1vZGVsKFwiVGVuYW50XCIsIFRlbmFudFNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJUZW5hbnRTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwic2x1ZyIsInVuaXF1ZSIsImxvd2VyY2FzZSIsInBsYW4iLCJlbnVtIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJUZW5hbnQiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Tenant.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var _Tenant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tenant.js */ \"(api)/./models/Tenant.js\");\n// models/User.js\n\n // ensure Tenant is registered before User (for populate)\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"ADMIN\",\n            \"MEMBER\"\n        ],\n        required: true\n    },\n    tenant: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Tenant\",\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQkFBaUI7QUFDZTtBQUNYLENBQUMseURBQXlEO0FBRS9FLE1BQU1DLGFBQWEsSUFBSUQsNENBQWUsQ0FBQztJQUNyQ0csT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7UUFBTUMsV0FBVztJQUFLO0lBQ3JFQyxVQUFVO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0ksTUFBTTtRQUFFTixNQUFNQztRQUFRTSxNQUFNO1lBQUM7WUFBUztTQUFTO1FBQUVMLFVBQVU7SUFBSztJQUNoRU0sUUFBUTtRQUFFUixNQUFNSiw0Q0FBZSxDQUFDYSxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztRQUFVVCxVQUFVO0lBQUs7QUFDaEYsR0FBRztJQUFFVSxZQUFZO0FBQUs7QUFFdEIsaUVBQWVoQiw0Q0FBZSxDQUFDa0IsSUFBSSxJQUFJbEIsMkNBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGktdGVuYW50LW5vdGVzLW1vbmdvLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2RlbHMvVXNlci5qc1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IFwiLi9UZW5hbnQuanNcIjsgLy8gZW5zdXJlIFRlbmFudCBpcyByZWdpc3RlcmVkIGJlZm9yZSBVc2VyIChmb3IgcG9wdWxhdGUpXG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlLCBsb3dlcmNhc2U6IHRydWUgfSxcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICByb2xlOiB7IHR5cGU6IFN0cmluZywgZW51bTogW1wiQURNSU5cIiwgXCJNRU1CRVJcIl0sIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHRlbmFudDogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJUZW5hbnRcIiwgcmVxdWlyZWQ6IHRydWUgfVxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJwYXNzd29yZCIsInJvbGUiLCJlbnVtIiwidGVuYW50IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./lib/auth.js\");\n// pages/api/auth/login.js\n\n\n\n\nasync function handler(req, res) {\n    res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n    if (req.method !== \"POST\") return res.status(405).end();\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n    const { email, password } = req.body || {};\n    if (!email || !password) return res.status(400).json({\n        error: \"Missing fields\"\n    });\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n        email: email.toLowerCase()\n    }).populate(\"tenant\");\n    if (!user) return res.status(401).json({\n        error: \"Invalid credentials\"\n    });\n    const ok = await bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare(password, user.password);\n    if (!ok) return res.status(401).json({\n        error: \"Invalid credentials\"\n    });\n    const token = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.signToken)({\n        userId: user._id.toString(),\n        role: user.role,\n        tenantId: user.tenant._id.toString(),\n        tenantSlug: user.tenant.slug\n    });\n    return res.json({\n        token\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDBCQUEwQjtBQUNJO0FBQ087QUFDSjtBQUNNO0FBRXhCLGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1Q0EsSUFBSUMsU0FBUyxDQUFDLCtCQUErQjtJQUM3QyxJQUFJRixJQUFJRyxNQUFNLEtBQUssUUFBUSxPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUNyRCxNQUFNVCxrREFBU0E7SUFDZixNQUFNLEVBQUVVLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdQLElBQUlRLElBQUksSUFBSSxDQUFDO0lBQ3pDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxVQUFVLE9BQU9OLElBQUlHLE1BQU0sQ0FBQyxLQUFLSyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFpQjtJQUUvRSxNQUFNQyxPQUFPLE1BQU1kLDREQUFZLENBQUM7UUFBRVMsT0FBT0EsTUFBTU8sV0FBVztJQUFHLEdBQUdDLFFBQVEsQ0FBQztJQUN6RSxJQUFJLENBQUNILE1BQU0sT0FBT1YsSUFBSUcsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQXNCO0lBRXRFLE1BQU1LLEtBQUssTUFBTXBCLDZDQUFjLENBQUNZLFVBQVVJLEtBQUtKLFFBQVE7SUFDdkQsSUFBSSxDQUFDUSxJQUFJLE9BQU9kLElBQUlHLE1BQU0sQ0FBQyxLQUFLSyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFzQjtJQUVwRSxNQUFNTyxRQUFRbkIsb0RBQVNBLENBQUM7UUFDdEJvQixRQUFRUCxLQUFLUSxHQUFHLENBQUNDLFFBQVE7UUFDekJDLE1BQU1WLEtBQUtVLElBQUk7UUFDZkMsVUFBVVgsS0FBS1ksTUFBTSxDQUFDSixHQUFHLENBQUNDLFFBQVE7UUFDbENJLFlBQVliLEtBQUtZLE1BQU0sQ0FBQ0UsSUFBSTtJQUM5QjtJQUVBLE9BQU94QixJQUFJUSxJQUFJLENBQUM7UUFBRVE7SUFBTTtBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL211bHRpLXRlbmFudC1ub3Rlcy1tb25nby8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL2F1dGgvbG9naW4uanNcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBzaWduVG9rZW4gfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zZXRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIGF3YWl0IGNvbm5lY3REQigpO1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHkgfHwge307XG4gIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJNaXNzaW5nIGZpZWxkc1wiIH0pO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9KS5wb3B1bGF0ZShcInRlbmFudFwiKTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XG5cbiAgY29uc3Qgb2sgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG4gIGlmICghb2spIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcIkludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcblxuICBjb25zdCB0b2tlbiA9IHNpZ25Ub2tlbih7XG4gICAgdXNlcklkOiB1c2VyLl9pZC50b1N0cmluZygpLFxuICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICB0ZW5hbnRJZDogdXNlci50ZW5hbnQuX2lkLnRvU3RyaW5nKCksXG4gICAgdGVuYW50U2x1ZzogdXNlci50ZW5hbnQuc2x1Z1xuICB9KTtcblxuICByZXR1cm4gcmVzLmpzb24oeyB0b2tlbiB9KTtcbn1cbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJjb25uZWN0REIiLCJVc2VyIiwic2lnblRva2VuIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNldEhlYWRlciIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwianNvbiIsImVycm9yIiwidXNlciIsImZpbmRPbmUiLCJ0b0xvd2VyQ2FzZSIsInBvcHVsYXRlIiwib2siLCJjb21wYXJlIiwidG9rZW4iLCJ1c2VySWQiLCJfaWQiLCJ0b1N0cmluZyIsInJvbGUiLCJ0ZW5hbnRJZCIsInRlbmFudCIsInRlbmFudFNsdWciLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();