(function() {
var exports = {};
exports.id = "pages/blog/[title]";
exports.ids = ["pages/blog/[title]"];
exports.modules = {

/***/ "./api/getBlogPostByUrlTitle.js":
/*!**************************************!*\
  !*** ./api/getBlogPostByUrlTitle.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiBaseUrl.js */ "./utils/apiBaseUrl.js");


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(urlTitle) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`${_utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__.default}/posts/get-blog-post-by-url-title?urlTitle=${urlTitle}`);
    return response.data;
  } catch (error) {
    return {
      getDataError: true
    };
  }
}

/***/ }),

/***/ "./pages/blog/[title].js":
/*!*******************************!*\
  !*** ./pages/blog/[title].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.js */ "prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js */ "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/header.js */ "./components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_headMetadata_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/headMetadata.js */ "./components/headMetadata.js");
/* harmony import */ var _api_getBlogPostByUrlTitle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/getBlogPostByUrlTitle.js */ "./api/getBlogPostByUrlTitle.js");


var _jsxFileName = "E:\\coding-blog\\frontend\\website\\pages\\blog\\[title].js";









/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps({
    query
  }) {
    const apiResult = await (0,_api_getBlogPostByUrlTitle_js__WEBPACK_IMPORTED_MODULE_9__.default)(query.title);
    return {
      post: apiResult && apiResult.post,
      getDataError: apiResult && apiResult.getDataError,
      notFoundError: apiResult && apiResult.notFoundError
    };
  }

  componentDidMount() {
    prismjs__WEBPACK_IMPORTED_MODULE_2___default().highlightAll();
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_headMetadata_js__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: this.props.post ? this.props.post.seoTitleTag : "Blog Post | Coding Blog",
        metaDescription: this.props.post && this.props.post.seoMetaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "blog-post-container",
        children: this.props.post ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blog-post-top-section",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: this.props.post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "blog-post-top-meta",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: moment__WEBPACK_IMPORTED_MODULE_3___default().unix(this.props.post.dateTimestamp).format("MMMM Do, YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, this), this.props.post.tags.map((tag, index) => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "blog-post-top-tag-btn",
                  href: `/blog/tags/${tag}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: tag
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 27
                  }, this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 25
                }, this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            dangerouslySetInnerHTML: {
              __html: this.props.post.markdownContent
            },
            className: "blog-post-body-content"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)]
        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blog-post-get-data-error-msg",
          children: this.props.notFoundError ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Blog post not found."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 16
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "An error occurred."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 16
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_js__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this);
  }

});

/***/ }),

/***/ "./utils/apiBaseUrl.js":
/*!*****************************!*\
  !*** ./utils/apiBaseUrl.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let apiBaseUrl;

if (true) {
  apiBaseUrl = "http://localhost:5000";
} else {}

/* harmony default export */ __webpack_exports__["default"] = (apiBaseUrl);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismjs");;

/***/ }),

/***/ "prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!*********************************************************************!*\
  !*** external "prismjs/plugins/line-numbers/prism-line-numbers.js" ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismjs/plugins/line-numbers/prism-line-numbers.js");;

/***/ }),

/***/ "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js":
/*!*************************************************************************************!*\
  !*** external "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js" ***!
  \*************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_footer_js-components_headMetadata_js-components_header_js"], function() { return __webpack_exec__("./pages/blog/[title].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vYXBpL2dldEJsb2dQb3N0QnlVcmxUaXRsZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvYmxvZy9bdGl0bGVdLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi91dGlscy9hcGlCYXNlVXJsLmpzIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInByaXNtanNcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuanNcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicHJpc21qcy9wbHVnaW5zL25vcm1hbGl6ZS13aGl0ZXNwYWNlL3ByaXNtLW5vcm1hbGl6ZS13aGl0ZXNwYWNlLmpzXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVybFRpdGxlIiwicmVzcG9uc2UiLCJheGlvcyIsImFwaUJhc2VVcmwiLCJkYXRhIiwiZXJyb3IiLCJnZXREYXRhRXJyb3IiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImFwaVJlc3VsdCIsImdldEJsb2dQb3N0QnlVcmxUaXRsZSIsInRpdGxlIiwicG9zdCIsIm5vdEZvdW5kRXJyb3IiLCJjb21wb25lbnREaWRNb3VudCIsIlByaXNtIiwicmVuZGVyIiwicHJvcHMiLCJzZW9UaXRsZVRhZyIsInNlb01ldGFEZXNjcmlwdGlvbiIsIm1vbWVudCIsImRhdGVUaW1lc3RhbXAiLCJmb3JtYXQiLCJ0YWdzIiwibWFwIiwidGFnIiwiaW5kZXgiLCJfX2h0bWwiLCJtYXJrZG93bkNvbnRlbnQiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSw2QkFBZSwwQ0FBZUEsUUFBZixFQUF5QjtBQUN0QyxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUUsR0FBRUMseURBQVcsOENBQTZDSCxRQUFTLEVBQXJFLENBQTVCO0FBQ0EsV0FBT0MsUUFBUSxDQUFDRyxJQUFoQjtBQUNELEdBSEQsQ0FHRSxPQUFNQyxLQUFOLEVBQWE7QUFDYixXQUFPO0FBQUNDLGtCQUFZLEVBQUU7QUFBZixLQUFQO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsK0RBQWUsY0FBY0MsNENBQWQsQ0FBd0I7QUFDckMsZUFBYUMsZUFBYixDQUE4QjtBQUFFQztBQUFGLEdBQTlCLEVBQXlDO0FBQ3ZDLFVBQU1DLFNBQVMsR0FBRyxNQUFNQyxzRUFBcUIsQ0FBQ0YsS0FBSyxDQUFDRyxLQUFQLENBQTdDO0FBRUEsV0FBTztBQUNMQyxVQUFJLEVBQUVILFNBQVMsSUFBSUEsU0FBUyxDQUFDRyxJQUR4QjtBQUVMUCxrQkFBWSxFQUFFSSxTQUFTLElBQUlBLFNBQVMsQ0FBQ0osWUFGaEM7QUFHTFEsbUJBQWEsRUFBRUosU0FBUyxJQUFJQSxTQUFTLENBQUNJO0FBSGpDLEtBQVA7QUFLRDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDbEJDLCtEQUFBO0FBQ0Q7O0FBRURDLFFBQU0sR0FBSTtBQUNSLHdCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0UsOERBQUMsZ0VBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS0MsS0FBTCxDQUFXTCxJQUFYLEdBQWtCLEtBQUtLLEtBQUwsQ0FBV0wsSUFBWCxDQUFnQk0sV0FBbEMsR0FBZ0QseUJBRHpEO0FBRUUsdUJBQWUsRUFBRSxLQUFLRCxLQUFMLENBQVdMLElBQVgsSUFBbUIsS0FBS0ssS0FBTCxDQUFXTCxJQUFYLENBQWdCTztBQUZ0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSxrQkFFSSxLQUFLRixLQUFMLENBQVdMLElBQVgsZ0JBQ0E7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLLEtBQUtLLEtBQUwsQ0FBV0wsSUFBWCxDQUFnQkQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUssdUJBQVMsRUFBQyxvQkFBZjtBQUFBLHNDQUNFO0FBQUEsMEJBQU9TLGtEQUFBLENBQVksS0FBS0gsS0FBTCxDQUFXTCxJQUFYLENBQWdCUyxhQUE1QixFQUEyQ0MsTUFBM0MsQ0FBa0QsZUFBbEQ7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBR0ksS0FBS0wsS0FBTCxDQUFXTCxJQUFYLENBQWdCVyxJQUFoQixDQUFxQkMsR0FBckIsQ0FBeUIsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3ZDLG9DQUNFO0FBQ0UsMkJBQVMsRUFBQyx1QkFEWjtBQUdFLHNCQUFJLEVBQUcsY0FBYUQsR0FBSSxFQUgxQjtBQUFBLHlDQUtFO0FBQUEsOEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLG1CQUVPQyxLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREY7QUFTRCxlQVZELENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQW9CRTtBQUFLLG1DQUF1QixFQUFFO0FBQUNDLG9CQUFNLEVBQUUsS0FBS1YsS0FBTCxDQUFXTCxJQUFYLENBQWdCZ0I7QUFBekIsYUFBOUI7QUFBeUUscUJBQVMsRUFBQztBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCRjtBQUFBLHdCQURBLGdCQXVCQztBQUFLLG1CQUFTLEVBQUMsOEJBQWY7QUFBQSxvQkFFRSxLQUFLWCxLQUFMLENBQVdKLGFBQVgsZ0JBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZ0JBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQXdDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBNENEOztBQTVEb0MsQzs7Ozs7Ozs7Ozs7O0FDYnZDLElBQUlYLFVBQUo7O0FBRUEsSUFBSSxNQUF3QztBQUMxQ0EsWUFBVSxHQUFHMkIsdUJBQWI7QUFDRCxDQUZELE1BRU8sRUFFTjs7QUFFRCwrREFBZTNCLFVBQWYsRTs7Ozs7Ozs7Ozs7QUNSQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9ibG9nL1t0aXRsZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi91dGlscy9hcGlCYXNlVXJsLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHVybFRpdGxlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoYCR7YXBpQmFzZVVybH0vcG9zdHMvZ2V0LWJsb2ctcG9zdC1ieS11cmwtdGl0bGU/dXJsVGl0bGU9JHt1cmxUaXRsZX1gKVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge2dldERhdGFFcnJvcjogdHJ1ZX1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxyXG5cclxuaW1wb3J0IFwicHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuanNcIlxyXG5pbXBvcnQgXCJwcmlzbWpzL3BsdWdpbnMvbm9ybWFsaXplLXdoaXRlc3BhY2UvcHJpc20tbm9ybWFsaXplLXdoaXRlc3BhY2UuanNcIlxyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIuanNcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvb3Rlci5qc1wiXHJcbmltcG9ydCBIZWFkTWV0YWRhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZE1ldGFkYXRhLmpzXCJcclxuXHJcbmltcG9ydCBnZXRCbG9nUG9zdEJ5VXJsVGl0bGUgZnJvbSBcIi4uLy4uL2FwaS9nZXRCbG9nUG9zdEJ5VXJsVGl0bGUuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3RCeVVybFRpdGxlKHF1ZXJ5LnRpdGxlKVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdDogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5wb3N0LFxyXG4gICAgICBnZXREYXRhRXJyb3I6IGFwaVJlc3VsdCAmJiBhcGlSZXN1bHQuZ2V0RGF0YUVycm9yLFxyXG4gICAgICBub3RGb3VuZEVycm9yOiBhcGlSZXN1bHQgJiYgYXBpUmVzdWx0Lm5vdEZvdW5kRXJyb3JcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC13cmFwcGVyXCI+XHJcbiAgICAgICAgPEhlYWRNZXRhZGF0YVxyXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMucG9zdCA/IHRoaXMucHJvcHMucG9zdC5zZW9UaXRsZVRhZyA6IFwiQmxvZyBQb3N0IHwgQ29kaW5nIEJsb2dcIn1cclxuICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5wb3N0ICYmIHRoaXMucHJvcHMucG9zdC5zZW9NZXRhRGVzY3JpcHRpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucG9zdCA/XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3QtdG9wLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5wb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdC10b3AtbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bW9tZW50LnVuaXgodGhpcy5wcm9wcy5wb3N0LmRhdGVUaW1lc3RhbXApLmZvcm1hdChcIk1NTU0gRG8sIFlZWVlcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3N0LnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2ctcG9zdC10b3AtdGFnLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2Jsb2cvdGFncy8ke3RhZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLnBvc3QubWFya2Rvd25Db250ZW50fX0gY2xhc3NOYW1lPVwiYmxvZy1wb3N0LWJvZHktY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8Lz4gOiBcclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LWdldC1kYXRhLWVycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICB0aGlzLnByb3BzLm5vdEZvdW5kRXJyb3IgP1xyXG4gICAgICAgICAgICAgICA8c3Bhbj5CbG9nIHBvc3Qgbm90IGZvdW5kLjwvc3Bhbj4gOlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5BbiBlcnJvciBvY2N1cnJlZC48L3NwYW4+XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJsZXQgYXBpQmFzZVVybFxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICBhcGlCYXNlVXJsID0gcHJvY2Vzcy5lbnYuREVWX0FQSV9VUkxcclxufSBlbHNlIHtcclxuICBhcGlCYXNlVXJsID0gcHJvY2Vzcy5lbnYuUFJPRFVDVElPTl9BUElfVVJMXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaUJhc2VVcmwiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL3BsdWdpbnMvbm9ybWFsaXplLXdoaXRlc3BhY2UvcHJpc20tbm9ybWFsaXplLXdoaXRlc3BhY2UuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=