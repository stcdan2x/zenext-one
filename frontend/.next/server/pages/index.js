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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/stevenmuhamadjamaaldandan/Projects/Web/Nextjs/zenext-one/frontend/pages/index.tsx\";\n\n\n\n\nconst ALL_PRODUCTS_Q = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n\tquery ALL_PRODUCTS {\n\t\tzenextoneCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tpublishedAt\n\t\t\t\t\tpublishedVersion\n\t\t\t\t\tid\n\t\t\t\t\tspaceId\n\t\t\t\t\tenvironmentId\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\tprice\n\t\t\t\tphoto {\n\t\t\t\t\tsize\n\t\t\t\t\tfileName\n\t\t\t\t\tcontentfulMetadata {\n\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n`;\nasync function getServerSideProps() {\n  const client = (0,contentful__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n    space: process.env.CONTENTFUL_SPACE_ID,\n    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN\n  });\n  const res = await client.getEntries({\n    content_type: \"zenextone\"\n  });\n  console.log(res);\n  return {\n    props: {\n      zenextoneItems: res.items\n    }\n  };\n}\n\nconst Index = () => {\n  //console.log(zenextoneItems);\n  //const products = zenextoneItems;\n  const {\n    0: items,\n    1: setItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(ALL_PRODUCTS_Q, {\n    onCompleted: data => {\n      const {\n        zenextoneCollection: {\n          items\n        }\n      } = data;\n      setItems(items);\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"index-container\",\n      children: items.map((product, idx) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: product.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 9\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            children: product.price\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 9\n          }, undefined)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 8\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5leHQtb25lLWZyb250ZW5kLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQUxMX1BST0RVQ1RTX1EiLCJncWwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJzcGFjZSIsInByb2Nlc3MiLCJlbnYiLCJDT05URU5URlVMX1NQQUNFX0lEIiwiYWNjZXNzVG9rZW4iLCJDT05URU5URlVMX0FDQ0VTU19UT0tFTiIsInJlcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ6ZW5leHRvbmVJdGVtcyIsIml0ZW1zIiwiSW5kZXgiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVF1ZXJ5Iiwib25Db21wbGV0ZWQiLCJ6ZW5leHRvbmVDb2xsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsImlkeCIsIm5hbWUiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Msb0RBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1QkE7QUE4Qk8sZUFBZUMsa0JBQWYsR0FBb0M7QUFDMUMsUUFBTUMsTUFBTSxHQUFHQyx3REFBWSxDQUFDO0FBQzNCQyxTQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFEUTtBQUUzQkMsZUFBVyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGRSxHQUFELENBQTNCO0FBS0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsVUFBUCxDQUFrQjtBQUFFQyxnQkFBWSxFQUFFO0FBQWhCLEdBQWxCLENBQWxCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBRUEsU0FBTztBQUNOSyxTQUFLLEVBQUU7QUFDTkMsb0JBQWMsRUFBRU4sR0FBRyxDQUFDTztBQURkO0FBREQsR0FBUDtBQUtBOztBQUVELE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ25CO0FBQ0E7QUFDQSxRQUFNO0FBQUEsT0FBQ0QsS0FBRDtBQUFBLE9BQVFFO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsTUFBMkJDLHdEQUFRLENBQUN6QixjQUFELEVBQWlCO0FBQ3pEMEIsZUFBVyxFQUFHSixJQUFELElBQVU7QUFDdEIsWUFBTTtBQUNMSywyQkFBbUIsRUFBRTtBQUFFVDtBQUFGO0FBRGhCLFVBRUZJLElBRko7QUFHQUYsY0FBUSxDQUFDRixLQUFELENBQVI7QUFDQTtBQU53RCxHQUFqQixDQUF6QztBQVNBLHNCQUNDO0FBQUEsY0FDRSxDQUFDTSxPQUFELGlCQUNBO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsZ0JBQ0VOLEtBQUssQ0FBQ1UsR0FBTixDQUFVLENBQUNDLE9BQUQsRUFBVUMsR0FBVixLQUFrQjtBQUM1Qiw0QkFDQztBQUFBLGtDQUNDO0FBQUEsc0JBQUtELE9BQU8sQ0FBQ0U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBQSxzQkFBS0YsT0FBTyxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQSxXQUFTRixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFNQSxPQVBBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQUREO0FBZ0JBLENBN0JEOztBQStCQSwrREFBZVgsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGVudGZ1bENsaWVudEFwaSwgY3JlYXRlQ2xpZW50IH0gZnJvbSBcImNvbnRlbnRmdWxcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBBTExfUFJPRFVDVFNfUSA9IGdxbGBcblx0cXVlcnkgQUxMX1BST0RVQ1RTIHtcblx0XHR6ZW5leHRvbmVDb2xsZWN0aW9uIHtcblx0XHRcdGl0ZW1zIHtcblx0XHRcdFx0c3lzIHtcblx0XHRcdFx0XHRwdWJsaXNoZWRBdFxuXHRcdFx0XHRcdHB1Ymxpc2hlZFZlcnNpb25cblx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdHNwYWNlSWRcblx0XHRcdFx0XHRlbnZpcm9ubWVudElkXG5cdFx0XHRcdH1cblx0XHRcdFx0bmFtZVxuXHRcdFx0XHRkZXNjcmlwdGlvblxuXHRcdFx0XHRzdGF0dXNcblx0XHRcdFx0cHJpY2Vcblx0XHRcdFx0cGhvdG8ge1xuXHRcdFx0XHRcdHNpemVcblx0XHRcdFx0XHRmaWxlTmFtZVxuXHRcdFx0XHRcdGNvbnRlbnRmdWxNZXRhZGF0YSB7XG5cdFx0XHRcdFx0XHR0YWdzIHtcblx0XHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcblx0Y29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcblx0XHRzcGFjZTogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9TUEFDRV9JRCxcblx0XHRhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU5cblx0fSk7XG5cblx0Y29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwiemVuZXh0b25lXCIgfSk7XG5cblx0Y29uc29sZS5sb2cocmVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHR6ZW5leHRvbmVJdGVtczogcmVzLml0ZW1zXG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblx0Ly9jb25zb2xlLmxvZyh6ZW5leHRvbmVJdGVtcyk7XG5cdC8vY29uc3QgcHJvZHVjdHMgPSB6ZW5leHRvbmVJdGVtcztcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RLCB7XG5cdFx0b25Db21wbGV0ZWQ6IChkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdHplbmV4dG9uZUNvbGxlY3Rpb246IHsgaXRlbXMgfVxuXHRcdFx0fSA9IGRhdGE7XG5cdFx0XHRzZXRJdGVtcyhpdGVtcyk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7IWxvYWRpbmcgJiYgKFxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaW5kZXgtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e2l0ZW1zLm1hcCgocHJvZHVjdCwgaWR4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpZHh9PlxuXHRcdFx0XHRcdFx0XHRcdDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PGg0Pntwcm9kdWN0LnByaWNlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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