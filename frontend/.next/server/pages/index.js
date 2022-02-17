/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/stevenmuhamadjamaaldandan/Projects/Web/Nextjs/zenext-one/frontend/pages/index.tsx\";\n\n\n\n\nconst ALL_PRODUCTS_Q = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n\tquery ALL_PRODUCTS {\n\t\tzenextoneCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tpublishedAt\n\t\t\t\t\tpublishedVersion\n\t\t\t\t\tid\n\t\t\t\t\tspaceId\n\t\t\t\t\tenvironmentId\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tprice\n\t\t\t\tphoto {\n\t\t\t\t\tsize\n\t\t\t\t\tfileName\n\t\t\t\t\tcontentfulMetadata {\n\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n`;\nasync function getStaticProps() {\n  const client = (0,contentful__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n    space: process.env.CONTENTFUL_SPACE_ID,\n    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN\n  });\n  const res = await client.getEntries({\n    content_type: \"zenextone\"\n  }); //console.log(res);\n\n  return {\n    props: {\n      zenextoneItems: res.items\n    }\n  };\n}\n\nconst Index = ({\n  zenextoneItems\n}) => {\n  //console.log(zenextoneItems);\n  const products = zenextoneItems;\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(ALL_PRODUCTS_Q);\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"index-container\",\n      children: products.map((product, idx) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: product.fields.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 8\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            children: product.fields.price\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 8\n          }, undefined)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 7\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUSIsImdxbCIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiZW52IiwiQ09OVEVOVEZVTF9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJyZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudF90eXBlIiwicHJvcHMiLCJ6ZW5leHRvbmVJdGVtcyIsIml0ZW1zIiwiSW5kZXgiLCJwcm9kdWN0cyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9kdWN0IiwiaWR4IiwiZmllbGRzIiwibmFtZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxvREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTVCQTtBQThCTyxlQUFlQyxjQUFmLEdBQWdDO0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0Msd0RBQVksQ0FBQztBQUMzQkMsU0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBRFE7QUFFM0JDLGVBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRkUsR0FBRCxDQUEzQjtBQUtBLFFBQU1DLEdBQUcsR0FBRyxNQUFNUixNQUFNLENBQUNTLFVBQVAsQ0FBa0I7QUFBRUMsZ0JBQVksRUFBRTtBQUFoQixHQUFsQixDQUFsQixDQU5zQyxDQVF0Qzs7QUFFQSxTQUFPO0FBQ05DLFNBQUssRUFBRTtBQUNOQyxvQkFBYyxFQUFFSixHQUFHLENBQUNLO0FBRGQ7QUFERCxHQUFQO0FBS0E7O0FBRUQsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQXdCO0FBQ3JDO0FBQ0EsUUFBTUcsUUFBUSxHQUFHSCxjQUFqQjtBQUNBLFFBQU07QUFBRUksUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsTUFBMkJDLHdEQUFRLENBQUN0QixjQUFELENBQXpDO0FBQ0F1QixTQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUVBLHNCQUNDO0FBQUEsMkJBQ0M7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQSxnQkFDRUQsUUFBUSxDQUFDTyxHQUFULENBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxHQUFWLEtBQWtCO0FBQy9CLDRCQUNDO0FBQUEsa0NBQ0M7QUFBQSxzQkFBS0QsT0FBTyxDQUFDRSxNQUFSLENBQWVDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFFQztBQUFBLHNCQUFLSCxPQUFPLENBQUNFLE1BQVIsQ0FBZUU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRDtBQUFBLFdBQVNILEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQU1BLE9BUEE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFjQSxDQXBCRDs7QUFzQkEsK0RBQWVWLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZW50ZnVsQ2xpZW50QXBpLCBjcmVhdGVDbGllbnQgfSBmcm9tIFwiY29udGVudGZ1bFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IEFMTF9QUk9EVUNUU19RID0gZ3FsYFxuXHRxdWVyeSBBTExfUFJPRFVDVFMge1xuXHRcdHplbmV4dG9uZUNvbGxlY3Rpb24ge1xuXHRcdFx0aXRlbXMge1xuXHRcdFx0XHRzeXMge1xuXHRcdFx0XHRcdHB1Ymxpc2hlZEF0XG5cdFx0XHRcdFx0cHVibGlzaGVkVmVyc2lvblxuXHRcdFx0XHRcdGlkXG5cdFx0XHRcdFx0c3BhY2VJZFxuXHRcdFx0XHRcdGVudmlyb25tZW50SWRcblx0XHRcdFx0fVxuXHRcdFx0XHRuYW1lXG5cdFx0XHRcdGRlc2NyaXB0aW9uXG5cdFx0XHRcdHN0YXR1c1xuXHRcdFx0XHRwcmljZVxuXHRcdFx0XHRwaG90byB7XG5cdFx0XHRcdFx0c2l6ZVxuXHRcdFx0XHRcdGZpbGVOYW1lXG5cdFx0XHRcdFx0Y29udGVudGZ1bE1ldGFkYXRhIHtcblx0XHRcdFx0XHRcdHRhZ3Mge1xuXHRcdFx0XHRcdFx0XHRuYW1lXG5cdFx0XHRcdFx0XHRcdGlkXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cdGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG5cdFx0c3BhY2U6IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfU1BBQ0VfSUQsXG5cdFx0YWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXG5cdH0pO1xuXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInplbmV4dG9uZVwiIH0pO1xuXG5cdC8vY29uc29sZS5sb2cocmVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHR6ZW5leHRvbmVJdGVtczogcmVzLml0ZW1zXG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBJbmRleCA9ICh7IHplbmV4dG9uZUl0ZW1zIH0pID0+IHtcblx0Ly9jb25zb2xlLmxvZyh6ZW5leHRvbmVJdGVtcyk7XG5cdGNvbnN0IHByb2R1Y3RzID0gemVuZXh0b25lSXRlbXM7XG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RKTtcblx0Y29uc29sZS5sb2coZGF0YSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cImluZGV4LWNvbnRhaW5lclwiPlxuXHRcdFx0XHR7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGxpIGtleT17aWR4fT5cblx0XHRcdFx0XHRcdFx0PGgxPntwcm9kdWN0LmZpZWxkcy5uYW1lfTwvaDE+XG5cdFx0XHRcdFx0XHRcdDxoND57cHJvZHVjdC5maWVsZHMucHJpY2V9PC9oND5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3VsPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("contentful");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();