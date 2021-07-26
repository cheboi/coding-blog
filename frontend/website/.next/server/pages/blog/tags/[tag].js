(function() {
var exports = {};
exports.id = "pages/blog/tags/[tag]";
exports.ids = ["pages/blog/tags/[tag]"];
exports.modules = {

/***/ "./api/getBlogPostsByTag.js":
/*!**********************************!*\
  !*** ./api/getBlogPostsByTag.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiBaseUrl.js */ "./utils/apiBaseUrl.js");


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(tag) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`${_utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__.default}/posts/get-blog-posts-by-tag?tag=${tag}`);
    return response.data;
  } catch (error) {
    return {
      getDataError: true
    };
  }
}

/***/ }),

/***/ "./pages/blog/tags/[tag].js":
/*!**********************************!*\
  !*** ./pages/blog/tags/[tag].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/header.js */ "./components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_headMetadata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/headMetadata.js */ "./components/headMetadata.js");
/* harmony import */ var _api_getBlogPostsByTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/getBlogPostsByTag.js */ "./api/getBlogPostsByTag.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\coding-blog\\frontend\\website\\pages\\blog\\tags\\[tag].js";






/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps({
    query
  }) {
    const apiResult = await (0,_api_getBlogPostsByTag_js__WEBPACK_IMPORTED_MODULE_5__.default)(query.tag);
    return {
      posts: apiResult && apiResult.posts,
      tag: query.tag,
      getDataError: apiResult && apiResult.getDataError
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_headMetadata_js__WEBPACK_IMPORTED_MODULE_4__.default, {
        title: `Blog posts tagged as "${this.props.tag}" | Coding Blog`,
        metaDescription: `All blog posts tagged as "${this.props.tag}".`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "blog-posts-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["Blog posts tagged as ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("u", {
            children: this.props.tag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 36
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
                    lineNumber: 39,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "blog-posts-list-item-title-and-date",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    children: post.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 15
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "blog-posts-list-item-date",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: moment__WEBPACK_IMPORTED_MODULE_6___default().unix(post.dateTimestamp).format("MMMM Do, YYYY")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 15
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 11
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 9
            }, this);
          }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blog-posts-get-data-error-msg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "An error occurred."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 5
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_footer_js-components_headMetadata_js-components_header_js-utils_apiBaseUrl_js"], function() { return __webpack_exec__("./pages/blog/tags/[tag].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vYXBpL2dldEJsb2dQb3N0c0J5VGFnLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi9wYWdlcy9ibG9nL3RhZ3MvW3RhZ10uanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93ZWJzaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidGFnIiwicmVzcG9uc2UiLCJheGlvcyIsImFwaUJhc2VVcmwiLCJkYXRhIiwiZXJyb3IiLCJnZXREYXRhRXJyb3IiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImFwaVJlc3VsdCIsImdldEJsb2dQb3N0c0J5VGFnIiwicG9zdHMiLCJyZW5kZXIiLCJwcm9wcyIsIm1hcCIsInBvc3QiLCJpbmRleCIsInVybFRpdGxlIiwidGh1bWJuYWlsSW1hZ2VVcmwiLCJ0aXRsZSIsIm1vbWVudCIsImRhdGVUaW1lc3RhbXAiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLDZCQUFlLDBDQUFlQSxHQUFmLEVBQW9CO0FBQ2pDLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBRSxHQUFFQyx5REFBVyxvQ0FBbUNILEdBQUksRUFBdEQsQ0FBNUI7QUFDQSxXQUFPQyxRQUFRLENBQUNHLElBQWhCO0FBQ0QsR0FIRCxDQUdFLE9BQU1DLEtBQU4sRUFBYTtBQUNiLFdBQU87QUFBQ0Msa0JBQVksRUFBRTtBQUFmLEtBQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0FBRUE7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YXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi91dGlscy9hcGlCYXNlVXJsLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHRhZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGAke2FwaUJhc2VVcmx9L3Bvc3RzL2dldC1ibG9nLXBvc3RzLWJ5LXRhZz90YWc9JHt0YWd9YClcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtnZXREYXRhRXJyb3I6IHRydWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCJcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXIuanNcIlxyXG5pbXBvcnQgSGVhZE1ldGFkYXRhIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRNZXRhZGF0YS5qc1wiXHJcbmltcG9ydCBnZXRCbG9nUG9zdHNCeVRhZyBmcm9tIFwiLi4vLi4vLi4vYXBpL2dldEJsb2dQb3N0c0J5VGFnLmpzXCJcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCBhcGlSZXN1bHQgPSBhd2FpdCBnZXRCbG9nUG9zdHNCeVRhZyhxdWVyeS50YWcpXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0czogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5wb3N0cyxcclxuICAgICAgdGFnOiBxdWVyeS50YWcsXHJcbiAgICAgIGdldERhdGFFcnJvcjogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5nZXREYXRhRXJyb3JcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC13cmFwcGVyXCI+XHJcbiAgICAgICAgIDxIZWFkTWV0YWRhdGFcclxuICAgICAgICAgIHRpdGxlPXtgQmxvZyBwb3N0cyB0YWdnZWQgYXMgXCIke3RoaXMucHJvcHMudGFnfVwiIHwgQ29kaW5nIEJsb2dgfVxyXG4gICAgICAgICAgbWV0YURlc2NyaXB0aW9uPXtgQWxsIGJsb2cgcG9zdHMgdGFnZ2VkIGFzIFwiJHt0aGlzLnByb3BzLnRhZ31cIi5gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5CbG9nIHBvc3RzIHRhZ2dlZCBhcyA8dT57dGhpcy5wcm9wcy50YWd9PC91PjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtbGlzdFwiPlxyXG4gIHtcclxuICAgIHRoaXMucHJvcHMucG9zdHMgP1xyXG4gICAgdGhpcy5wcm9wcy5wb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEga2V5PXtpbmRleH0gaHJlZj17YC9ibG9nLyR7cG9zdC51cmxUaXRsZX1gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLXRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LnRodW1ibmFpbEltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbS10aXRsZS1hbmQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0LWl0ZW0tZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51bml4KHBvc3QuZGF0ZVRpbWVzdGFtcCkuZm9ybWF0KFwiTU1NTSBEbywgWVlZWVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApXHJcbiAgICB9KSA6IFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWdldC1kYXRhLWVycm9yLW1zZ1wiPlxyXG4gICAgPHNwYW4+QW4gZXJyb3Igb2NjdXJyZWQuPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIH1cclxuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=