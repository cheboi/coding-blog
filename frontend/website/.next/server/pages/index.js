(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/getFiveNewestPosts.js":
/*!***********************************!*\
  !*** ./api/getFiveNewestPosts.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiBaseUrl */ "./utils/apiBaseUrl.js");


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`${_utils_apiBaseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/posts/get-five-newest-posts`);
    return response.data;
  } catch (error) {
    return {
      getDataError: true
    };
  }
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_headMetadata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/headMetadata.js */ "./components/headMetadata.js");
/* harmony import */ var _api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getFiveNewestPosts.js */ "./api/getFiveNewestPosts.js");

var _jsxFileName = "E:\\pr\\coding-blog\\frontend\\website\\pages\\index.js";





/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const apiResult = await (0,_api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_5__.default)();
    return {
      posts: apiResult && apiResult.posts
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_headMetadata_js__WEBPACK_IMPORTED_MODULE_4__.default, {
        title: "Coding Blog",
        metaDescription: "Moses Cheboi is a full stack software developer that also writes about modern NodeJS ,JavaScript and C#."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "homepage-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "homepage-introduction",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Hi, I'm Cheboi Moses Kiptoo. I help people learn software development."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "I'm a full stack software developer that writes about modern Node.js, JavaScript, C# ASP.NET Framework and development."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "homepage-latest-blog-posts",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: ["Latest Blog Posts", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "homepage-latest-blog-posts-view-all",
              href: "/blog",
              children: "View all"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "homepage-latest-blog-posts-list",
            children: this.props.posts ? this.props.posts.map((post, index) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: `/blog/${post.urlTitle}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "homepage-latest-blog-post",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-latest-thumbnail",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      src: post.thumbnailImageUrl
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-latest-blog-post-title",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                      children: post.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 19
                }, this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 19
              }, this);
            }) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "homepage-projects",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "My Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "homepage-projects-list",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "homepage-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "https://github.com/discourse/discourse",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-icon",
                    children: "\uD83D\uDCDE"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-title",
                    children: "Discourse"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "A platform for community discussion. Free, open, simple."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "homepage-project-btns",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "homepage-project-view-btn",
                  href: "https://github.com/discourse/discourse",
                  children: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "homepage-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "https://github.com/nmajor25/seconds-converter",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-icon",
                    children: "\u231B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-title",
                    children: "Seconds Converter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "homepage-project-btns",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "homepage-project-view-btn",
                  href: "https://github.com/nmajor25/seconds-converter",
                  children: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "homepage-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "https://github.com/showdownjs/showdown",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-icon",
                    children: "\u231B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-title",
                    children: "Showdown"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "A bidirectional Markdown to HTML to Markdown converter written in Javascript."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "homepage-project-btns",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "homepage-project-view-btn",
                  href: "https://github.com/showdownjs/showdown",
                  children: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
var __webpack_exports__ = __webpack_require__.X(0, ["components_footer_js-components_headMetadata_js-components_header_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vYXBpL2dldEZpdmVOZXdlc3RQb3N0cy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3V0aWxzL2FwaUJhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJyZXNwb25zZSIsImF4aW9zIiwiYXBpQmFzZVVybCIsImRhdGEiLCJlcnJvciIsImdldERhdGFFcnJvciIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwaVJlc3VsdCIsImdldEZpdmVOZXdlc3RQb3N0cyIsInBvc3RzIiwicmVuZGVyIiwicHJvcHMiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJ1cmxUaXRsZSIsInRodW1ibmFpbEltYWdlVXJsIiwidGl0bGUiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSw2QkFBZSw0Q0FBaUI7QUFDOUIsTUFBSTtBQUNGLFVBQU1BLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFFLEdBQUVDLHNEQUFXLDhCQUFmLENBQTVCO0FBQ0EsV0FBT0YsUUFBUSxDQUFDRyxJQUFoQjtBQUNELEdBSEQsQ0FHRSxPQUFNQyxLQUFOLEVBQWE7QUFDYixXQUFPO0FBQUNDLGtCQUFZLEVBQUU7QUFBZixLQUFQO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBLCtEQUFlLGNBQWNDLDRDQUFkLENBQXdCO0FBRXJDLGVBQWFDLGVBQWIsR0FBZ0M7QUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUE4RUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWtGRDs7QUE1Rm9DLEM7Ozs7Ozs7Ozs7OztBQ1R2QyxJQUFJYixVQUFKOztBQUVBLElBQUksTUFBd0M7QUFDMUNBLFlBQVUsR0FBR2lCLHVCQUFiO0FBQ0QsQ0FGRCxNQUVPLEVBRU47O0FBRUQsK0RBQWVqQixVQUFmLEU7Ozs7Ozs7Ozs7O0FDUkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi91dGlscy9hcGlCYXNlVXJsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGAke2FwaUJhc2VVcmx9L3Bvc3RzL2dldC1maXZlLW5ld2VzdC1wb3N0c2ApXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIHJldHVybiB7Z2V0RGF0YUVycm9yOiB0cnVlfVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci5qc1wiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLmpzXCJcclxuaW1wb3J0IEhlYWRNZXRhZGF0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkTWV0YWRhdGEuanNcIlxyXG5cclxuXHJcbmltcG9ydCBnZXRGaXZlTmV3ZXN0UG9zdHMgZnJvbSBcIi4uL2FwaS9nZXRGaXZlTmV3ZXN0UG9zdHMuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcclxuICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IGdldEZpdmVOZXdlc3RQb3N0cygpXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0czogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5wb3N0c1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxIZWFkTWV0YWRhdGFcclxuICAgICAgICAgIHRpdGxlPVwiQ29kaW5nIEJsb2dcIlxyXG4gICAgICAgICAgbWV0YURlc2NyaXB0aW9uPVwiTW9zZXMgQ2hlYm9pIGlzIGEgZnVsbCBzdGFjayBzb2Z0d2FyZSBkZXZlbG9wZXIgdGhhdCBhbHNvIHdyaXRlcyBhYm91dCBtb2Rlcm4gTm9kZUpTICxKYXZhU2NyaXB0IGFuZCBDIy5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLWludHJvZHVjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDE+SGksIEknbSBDaGVib2kgTW9zZXMgS2lwdG9vLiBJIGhlbHAgcGVvcGxlIGxlYXJuIHNvZnR3YXJlIGRldmVsb3BtZW50LjwvaDE+XHJcbiAgICAgICAgICAgIDxwPkknbSBhIGZ1bGwgc3RhY2sgc29mdHdhcmUgZGV2ZWxvcGVyIHRoYXQgd3JpdGVzIGFib3V0IG1vZGVybiBOb2RlLmpzLCBKYXZhU2NyaXB0LCBDIyBBU1AuTkVUIEZyYW1ld29yayBhbmQgZGV2ZWxvcG1lbnQuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLWxhdGVzdC1ibG9nLXBvc3RzXCI+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICBMYXRlc3QgQmxvZyBQb3N0c1xyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvbWVwYWdlLWxhdGVzdC1ibG9nLXBvc3RzLXZpZXctYWxsXCIgaHJlZj1cIi9ibG9nXCI+VmlldyBhbGw8L2E+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtbGF0ZXN0LWJsb2ctcG9zdHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzID9cclxuICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGEga2V5PXtpbmRleH0gaHJlZj17YC9ibG9nLyR7cG9zdC51cmxUaXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1sYXRlc3QtYmxvZy1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1sYXRlc3QtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC50aHVtYm5haWxJbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLWxhdGVzdC1ibG9nLXBvc3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgIH0pOiBudWxsXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3RzXCI+XHJcbiAgICAgICAgICAgIDxoMj5NeSBQcm9qZWN0czwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Rpc2NvdXJzZS9kaXNjb3Vyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3QtaWNvblwiPvCfk548L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3QtdGl0bGVcIj5EaXNjb3Vyc2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPkEgcGxhdGZvcm0gZm9yIGNvbW11bml0eSBkaXNjdXNzaW9uLiBGcmVlLCBvcGVuLCBzaW1wbGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC12aWV3LWJ0blwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGlzY291cnNlL2Rpc2NvdXJzZVwiPlZpZXc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3RcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ubWFqb3IyNS9zZWNvbmRzLWNvbnZlcnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC1pY29uXCI+4oybPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LXRpdGxlXCI+U2Vjb25kcyBDb252ZXJ0ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPkNvbnZlcnQgbWlsbGlzZWNvbmRzIG9yIHNlY29uZHMgdG8gZGF5cywgaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzIGluIG5vZGUuanMuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC12aWV3LWJ0blwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm1ham9yMjUvc2Vjb25kcy1jb252ZXJ0ZXJcIj5WaWV3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hvd2Rvd25qcy9zaG93ZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC1pY29uXCI+4oybPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LXRpdGxlXCI+U2hvd2Rvd248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPkEgYmlkaXJlY3Rpb25hbCBNYXJrZG93biB0byBIVE1MIHRvIE1hcmtkb3duIGNvbnZlcnRlciB3cml0dGVuIGluIEphdmFzY3JpcHQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC12aWV3LWJ0blwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hvd2Rvd25qcy9zaG93ZG93blwiPlZpZXc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSIsImxldCBhcGlCYXNlVXJsXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGFwaUJhc2VVcmwgPSBwcm9jZXNzLmVudi5ERVZfQVBJX1VSTFxyXG59IGVsc2Uge1xyXG4gIGFwaUJhc2VVcmwgPSBwcm9jZXNzLmVudi5QUk9EVUNUSU9OX0FQSV9VUkxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpQmFzZVVybCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=