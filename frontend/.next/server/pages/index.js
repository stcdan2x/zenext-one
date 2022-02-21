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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/stevenmuhamadjamaaldandan/Projects/Web/Nextjs/zenext-one/frontend/pages/index.tsx\";\n\n\n\n\nconst ALL_PRODUCTS_Q = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n\tquery ALL_PRODUCTS {\n\t\tzenextoneCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tpublishedAt\n\t\t\t\t\tpublishedVersion\n\t\t\t\t\tid\n\t\t\t\t\tspaceId\n\t\t\t\t\tenvironmentId\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tprice\n\t\t\t\tphoto {\n\t\t\t\t\tsize\n\t\t\t\t\tfileName\n\t\t\t\t\tcontentfulMetadata {\n\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n`; // export async function getServerSideProps() {\n// \tconst client = createClient({\n// \t\tspace: process.env.CONTENTFUL_SPACE_ID,\n// \t\taccessToken: process.env.CONTENTFUL_ACCESS_TOKEN\n// \t});\n// \tconst res = await client.getEntries({ content_type: \"zenextone\" });\n// \tconsole.log(res);\n// \treturn {\n// \t\tprops: {\n// \t\t\tzenextoneItems: res.items\n// \t\t}\n// \t};\n// }\n\nconst Index = () => {\n  //console.log(zenextoneItems);\n  //const products = zenextoneItems;\n  const {\n    0: items,\n    1: setItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(ALL_PRODUCTS_Q, {\n    onCompleted: data => {\n      const {\n        zenextoneCollection: {\n          items\n        }\n      } = data;\n      setItems(items);\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 4\n    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"index-container\",\n      children: items.map((product, idx) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: product.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 9\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            children: product.price\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 9\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            children: product.status\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 9\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: product.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 9\n          }, undefined)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 8\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5leHQtb25lLWZyb250ZW5kLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQUxMX1BST0RVQ1RTX1EiLCJncWwiLCJJbmRleCIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsIm9uQ29tcGxldGVkIiwiemVuZXh0b25lQ29sbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZHgiLCJuYW1lIiwicHJpY2UiLCJzdGF0dXMiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Msb0RBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1QkEsQyxDQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNuQjtBQUNBO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmLE1BQTJCQyx3REFBUSxDQUFDVCxjQUFELEVBQWlCO0FBQ3pEVSxlQUFXLEVBQUdKLElBQUQsSUFBVTtBQUN0QixZQUFNO0FBQ0xLLDJCQUFtQixFQUFFO0FBQUVSO0FBQUY7QUFEaEIsVUFFRkcsSUFGSjtBQUdBRixjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBO0FBTndELEdBQWpCLENBQXpDO0FBU0Esc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxFQUlFLENBQUNLLE9BQUQsaUJBQ0E7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQSxnQkFDRUwsS0FBSyxDQUFDUyxHQUFOLENBQVUsQ0FBQ0MsT0FBRCxFQUFtQkMsR0FBbkIsS0FBMkI7QUFDckMsNEJBQ0M7QUFBQSxrQ0FDQztBQUFBLHNCQUFLRCxPQUFPLENBQUNFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDO0FBQUEsc0JBQUtGLE9BQU8sQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELGVBR0M7QUFBQSxzQkFBS0gsT0FBTyxDQUFDSTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEQsZUFJQztBQUFBLHNCQUFJSixPQUFPLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRDtBQUFBLFdBQVNKLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQVFBLE9BVEE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUEsa0JBREQ7QUFxQkEsQ0FsQ0Q7O0FBb0NBLCtEQUFlWixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZW50ZnVsQ2xpZW50QXBpLCBjcmVhdGVDbGllbnQgfSBmcm9tIFwiY29udGVudGZ1bFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IEFMTF9QUk9EVUNUU19RID0gZ3FsYFxuXHRxdWVyeSBBTExfUFJPRFVDVFMge1xuXHRcdHplbmV4dG9uZUNvbGxlY3Rpb24ge1xuXHRcdFx0aXRlbXMge1xuXHRcdFx0XHRzeXMge1xuXHRcdFx0XHRcdHB1Ymxpc2hlZEF0XG5cdFx0XHRcdFx0cHVibGlzaGVkVmVyc2lvblxuXHRcdFx0XHRcdGlkXG5cdFx0XHRcdFx0c3BhY2VJZFxuXHRcdFx0XHRcdGVudmlyb25tZW50SWRcblx0XHRcdFx0fVxuXHRcdFx0XHRuYW1lXG5cdFx0XHRcdGRlc2NyaXB0aW9uXG5cdFx0XHRcdHN0YXR1c1xuXHRcdFx0XHRwcmljZVxuXHRcdFx0XHRwaG90byB7XG5cdFx0XHRcdFx0c2l6ZVxuXHRcdFx0XHRcdGZpbGVOYW1lXG5cdFx0XHRcdFx0Y29udGVudGZ1bE1ldGFkYXRhIHtcblx0XHRcdFx0XHRcdHRhZ3Mge1xuXHRcdFx0XHRcdFx0XHRuYW1lXG5cdFx0XHRcdFx0XHRcdGlkXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5gO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gXHRjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuLy8gXHRcdHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuLy8gXHRcdGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19UT0tFTlxuLy8gXHR9KTtcblxuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJ6ZW5leHRvbmVcIiB9KTtcblxuLy8gXHRjb25zb2xlLmxvZyhyZXMpO1xuXG4vLyBcdHJldHVybiB7XG4vLyBcdFx0cHJvcHM6IHtcbi8vIFx0XHRcdHplbmV4dG9uZUl0ZW1zOiByZXMuaXRlbXNcbi8vIFx0XHR9XG4vLyBcdH07XG4vLyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XG5cdG5hbWU6IHN0cmluZztcblx0cHJpY2U6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXHQvL2NvbnNvbGUubG9nKHplbmV4dG9uZUl0ZW1zKTtcblx0Ly9jb25zdCBwcm9kdWN0cyA9IHplbmV4dG9uZUl0ZW1zO1xuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1EsIHtcblx0XHRvbkNvbXBsZXRlZDogKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0emVuZXh0b25lQ29sbGVjdGlvbjogeyBpdGVtcyB9XG5cdFx0XHR9ID0gZGF0YTtcblx0XHRcdHNldEl0ZW1zKGl0ZW1zKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+SG9tZTwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHR7IWxvYWRpbmcgJiYgKFxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaW5kZXgtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e2l0ZW1zLm1hcCgocHJvZHVjdDogUHJvZHVjdCwgaWR4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpZHh9PlxuXHRcdFx0XHRcdFx0XHRcdDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PGg0Pntwcm9kdWN0LnByaWNlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0PGg0Pntwcm9kdWN0LnN0YXR1c308L2g0PlxuXHRcdFx0XHRcdFx0XHRcdDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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