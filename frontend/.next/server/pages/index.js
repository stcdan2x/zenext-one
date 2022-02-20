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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/stevenmuhamadjamaaldandan/Projects/Web/Nextjs/zenext-one/frontend/pages/index.tsx\";\n\n\n\n\nconst ALL_PRODUCTS_Q = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n\tquery ALL_PRODUCTS {\n\t\tzenextoneCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tpublishedAt\n\t\t\t\t\tpublishedVersion\n\t\t\t\t\tid\n\t\t\t\t\tspaceId\n\t\t\t\t\tenvironmentId\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tprice\n\t\t\t\tphoto {\n\t\t\t\t\tsize\n\t\t\t\t\tfileName\n\t\t\t\t\tcontentfulMetadata {\n\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n`;\nasync function getStaticProps() {\n  const client = (0,contentful__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n    space: process.env.CONTENTFUL_SPACE_ID,\n    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN\n  });\n  const res = await client.getEntries({\n    content_type: \"zenextone\"\n  }); //console.log(res);\n\n  return {\n    props: {\n      zenextoneItems: res.items\n    }\n  };\n}\n\nconst Index = ({\n  zenextoneItems\n}) => {\n  //console.log(zenextoneItems);\n  const products = zenextoneItems;\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(ALL_PRODUCTS_Q);\n  console.log(data);\n  console.log(loading);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"index-container\",\n      children: products.map((product, idx) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: product.fields.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 8\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            children: product.fields.price\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 8\n          }, undefined)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 7\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 4\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5leHQtb25lLWZyb250ZW5kLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQUxMX1BST0RVQ1RTX1EiLCJncWwiLCJnZXRTdGF0aWNQcm9wcyIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImVudiIsIkNPTlRFTlRGVUxfU1BBQ0VfSUQiLCJhY2Nlc3NUb2tlbiIsIkNPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIiwicmVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsInByb3BzIiwiemVuZXh0b25lSXRlbXMiLCJpdGVtcyIsIkluZGV4IiwicHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsImlkeCIsImZpZWxkcyIsIm5hbWUiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Msb0RBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1QkE7QUE4Qk8sZUFBZUMsY0FBZixHQUFnQztBQUN0QyxRQUFNQyxNQUFNLEdBQUdDLHdEQUFZLENBQUM7QUFDM0JDLFNBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQURRO0FBRTNCQyxlQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZFLEdBQUQsQ0FBM0I7QUFLQSxRQUFNQyxHQUFHLEdBQUcsTUFBTVIsTUFBTSxDQUFDUyxVQUFQLENBQWtCO0FBQUVDLGdCQUFZLEVBQUU7QUFBaEIsR0FBbEIsQ0FBbEIsQ0FOc0MsQ0FRdEM7O0FBRUEsU0FBTztBQUNOQyxTQUFLLEVBQUU7QUFDTkMsb0JBQWMsRUFBRUosR0FBRyxDQUFDSztBQURkO0FBREQsR0FBUDtBQUtBOztBQUVELE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUF3QjtBQUNyQztBQUNBLFFBQU1HLFFBQVEsR0FBR0gsY0FBakI7QUFDQSxRQUFNO0FBQUVJLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmLE1BQTJCQyx3REFBUSxDQUFDdEIsY0FBRCxDQUF6QztBQUNBdUIsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFFQSxzQkFDQztBQUFBLDJCQUNDO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsZ0JBQ0VILFFBQVEsQ0FBQ08sR0FBVCxDQUFhLENBQUNDLE9BQUQsRUFBVUMsR0FBVixLQUFrQjtBQUMvQiw0QkFDQztBQUFBLGtDQUNDO0FBQUEsc0JBQUtELE9BQU8sQ0FBQ0UsTUFBUixDQUFlQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBQSxzQkFBS0gsT0FBTyxDQUFDRSxNQUFSLENBQWVFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQSxXQUFTSCxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFNQSxPQVBBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBY0EsQ0FyQkQ7O0FBdUJBLCtEQUFlVixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGVudGZ1bENsaWVudEFwaSwgY3JlYXRlQ2xpZW50IH0gZnJvbSBcImNvbnRlbnRmdWxcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBBTExfUFJPRFVDVFNfUSA9IGdxbGBcblx0cXVlcnkgQUxMX1BST0RVQ1RTIHtcblx0XHR6ZW5leHRvbmVDb2xsZWN0aW9uIHtcblx0XHRcdGl0ZW1zIHtcblx0XHRcdFx0c3lzIHtcblx0XHRcdFx0XHRwdWJsaXNoZWRBdFxuXHRcdFx0XHRcdHB1Ymxpc2hlZFZlcnNpb25cblx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdHNwYWNlSWRcblx0XHRcdFx0XHRlbnZpcm9ubWVudElkXG5cdFx0XHRcdH1cblx0XHRcdFx0bmFtZVxuXHRcdFx0XHRkZXNjcmlwdGlvblxuXHRcdFx0XHRzdGF0dXNcblx0XHRcdFx0cHJpY2Vcblx0XHRcdFx0cGhvdG8ge1xuXHRcdFx0XHRcdHNpemVcblx0XHRcdFx0XHRmaWxlTmFtZVxuXHRcdFx0XHRcdGNvbnRlbnRmdWxNZXRhZGF0YSB7XG5cdFx0XHRcdFx0XHR0YWdzIHtcblx0XHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuXHRcdHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuXHRcdGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19UT0tFTlxuXHR9KTtcblxuXHRjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJ6ZW5leHRvbmVcIiB9KTtcblxuXHQvL2NvbnNvbGUubG9nKHJlcyk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0emVuZXh0b25lSXRlbXM6IHJlcy5pdGVtc1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgSW5kZXggPSAoeyB6ZW5leHRvbmVJdGVtcyB9KSA9PiB7XG5cdC8vY29uc29sZS5sb2coemVuZXh0b25lSXRlbXMpO1xuXHRjb25zdCBwcm9kdWN0cyA9IHplbmV4dG9uZUl0ZW1zO1xuXHRjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUSk7XG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRjb25zb2xlLmxvZyhsb2FkaW5nKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaW5kZXgtY29udGFpbmVyXCI+XG5cdFx0XHRcdHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGlkeCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtpZHh9PlxuXHRcdFx0XHRcdFx0XHQ8aDE+e3Byb2R1Y3QuZmllbGRzLm5hbWV9PC9oMT5cblx0XHRcdFx0XHRcdFx0PGg0Pntwcm9kdWN0LmZpZWxkcy5wcmljZX08L2g0PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvdWw+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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