(function() {
var exports = {};
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./api/getAllBlogPosts.js":
/*!********************************!*\
  !*** ./api/getAllBlogPosts.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiBaseUrl.js */ "./utils/apiBaseUrl.js");


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`${_utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__.default}/posts/get-all-blog-posts`);
    return response.data;
  } catch (error) {
    return {
      getDataError: true
    };
  }
}

/***/ }),

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header.js */ "./components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_headMetadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/headMetadata.js */ "./components/headMetadata.js");
/* harmony import */ var _api_getAllBlogPosts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/getAllBlogPosts.js */ "./api/getAllBlogPosts.js");

var _jsxFileName = "E:\\coding-blog\\frontend\\website\\pages\\blog\\index.js";






/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const apiResult = await (0,_api_getAllBlogPosts_js__WEBPACK_IMPORTED_MODULE_6__.default)();
    return {
      posts: apiResult && apiResult.posts,
      getDataError: apiResult && apiResult.getDataError
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_headMetadata_js__WEBPACK_IMPORTED_MODULE_5__.default, {
        title: "Blog Posts | Coding Blog",
        metaDescription: "List of all blog posts published on the Nick Major coding blog."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "blog-posts-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Blog posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "blog-posts-list",
          children: this.props.posts ? this.props.posts.map((post, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `/blog/${post.urlTitle}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "blog-posts-list-item",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "blog-posts-thumbnail",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: post.thumbnailImageUrl
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "blog-posts-list-item-title-and-date",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    children: post.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 25
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "blog-posts-list-item-date",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(post.dateTimestamp).format("MMMM Do, YYYY")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 21
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 19
            }, this);
          }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blog-posts-get-data-error-msg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "An error occurred."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this);
  }

});

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_footer_js-components_headMetadata_js-components_header_js-utils_apiBaseUrl_js"], function() { return __webpack_exec__("./pages/blog/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vYXBpL2dldEFsbEJsb2dQb3N0cy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvYmxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJyZXNwb25zZSIsImF4aW9zIiwiYXBpQmFzZVVybCIsImRhdGEiLCJlcnJvciIsImdldERhdGFFcnJvciIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwaVJlc3VsdCIsImdldEFsbEJsb2dQb3N0cyIsInBvc3RzIiwicmVuZGVyIiwicHJvcHMiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJ1cmxUaXRsZSIsInRodW1ibmFpbEltYWdlVXJsIiwidGl0bGUiLCJtb21lbnQiLCJkYXRlVGltZXN0YW1wIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSw2QkFBZSw0Q0FBaUI7QUFDOUIsTUFBSTtBQUNGLFVBQU1BLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFFLEdBQUVDLHlEQUFXLDJCQUFmLENBQTVCO0FBQ0EsV0FBT0YsUUFBUSxDQUFDRyxJQUFoQjtBQUNELEdBSEQsQ0FHRSxPQUFNQyxLQUFOLEVBQWE7QUFDYixXQUFPO0FBQUNDLGtCQUFZLEVBQUU7QUFBZixLQUFQO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQSwrREFBZSxjQUFjQyw0Q0FBZCxDQUF3QjtBQUNyQyxlQUFhQyxlQUFiLEdBQWdDO0FBQzlCLFVBQU1DLFNBQVMsR0FBRyxNQUFNQyxnRUFBZSxFQUF2QztBQUVBLFdBQU87QUFDTEMsV0FBSyxFQUFFRixTQUFTLElBQUlBLFNBQVMsQ0FBQ0UsS0FEekI7QUFFTEwsa0JBQVksRUFBRUcsU0FBUyxJQUFJQSxTQUFTLENBQUNIO0FBRmhDLEtBQVA7QUFJRDs7QUFFRE0sUUFBTSxHQUFJO0FBQ1Isd0JBQ0U7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUNFLGFBQUssRUFBQywwQkFEUjtBQUVFLHVCQUFlLEVBQUM7QUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxvQkFFSSxLQUFLQyxLQUFMLENBQVdGLEtBQVgsR0FDQSxLQUFLRSxLQUFMLENBQVdGLEtBQVgsQ0FBaUJHLEdBQWpCLENBQXFCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUNwQyxnQ0FDRTtBQUFlLGtCQUFJLEVBQUcsU0FBUUQsSUFBSSxDQUFDRSxRQUFTLEVBQTVDO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLHNCQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDLHNCQUFmO0FBQUEseUNBQ0U7QUFBSyx1QkFBRyxFQUFFRixJQUFJLENBQUNHO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFLLDJCQUFTLEVBQUMscUNBQWY7QUFBQSwwQ0FDRTtBQUFBLDhCQUFLSCxJQUFJLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUssNkJBQVMsRUFBQywyQkFBZjtBQUFBLDJDQUNFO0FBQUEsZ0NBQU9DLGtEQUFBLENBQVlMLElBQUksQ0FBQ00sYUFBakIsRUFBZ0NDLE1BQWhDLENBQXVDLGVBQXZDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVFOLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERjtBQWVELFdBaEJELENBREEsZ0JBa0JBO0FBQUsscUJBQVMsRUFBQywrQkFBZjtBQUFBLG1DQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBa0NFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFzQ0Q7O0FBakRvQyxDOzs7Ozs7Ozs7OztBQ1R2QyxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5pbXBvcnQgYXBpQmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYXBpQmFzZVVybC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhgJHthcGlCYXNlVXJsfS9wb3N0cy9nZXQtYWxsLWJsb2ctcG9zdHNgKVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge2dldERhdGFFcnJvcjogdHJ1ZX1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIuanNcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvb3Rlci5qc1wiXHJcbmltcG9ydCBIZWFkTWV0YWRhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZE1ldGFkYXRhLmpzXCJcclxuXHJcbmltcG9ydCBnZXRBbGxCbG9nUG9zdHMgZnJvbSBcIi4uLy4uL2FwaS9nZXRBbGxCbG9nUG9zdHMuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKCkge1xyXG4gICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgZ2V0QWxsQmxvZ1Bvc3RzKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0czogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5wb3N0cyxcclxuICAgICAgZ2V0RGF0YUVycm9yOiBhcGlSZXN1bHQgJiYgYXBpUmVzdWx0LmdldERhdGFFcnJvclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LXdyYXBwZXJcIj5cclxuICAgICAgICA8SGVhZE1ldGFkYXRhXHJcbiAgICAgICAgICB0aXRsZT1cIkJsb2cgUG9zdHMgfCBDb2RpbmcgQmxvZ1wiXHJcbiAgICAgICAgICBtZXRhRGVzY3JpcHRpb249XCJMaXN0IG9mIGFsbCBibG9nIHBvc3RzIHB1Ymxpc2hlZCBvbiB0aGUgTmljayBNYWpvciBjb2RpbmcgYmxvZy5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5CbG9nIHBvc3RzPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzID9cclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhIGtleT17aW5kZXh9IGhyZWY9e2AvYmxvZy8ke3Bvc3QudXJsVGl0bGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLXRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC50aHVtYm5haWxJbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbS10aXRsZS1hbmQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbS1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51bml4KHBvc3QuZGF0ZVRpbWVzdGFtcCkuZm9ybWF0KFwiTU1NTSBEbywgWVlZWVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KSA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWdldC1kYXRhLWVycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFuIGVycm9yIG9jY3VycmVkLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9