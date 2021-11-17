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
                  href: "https://github.com",
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
                  href: "https://github.com",
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
                  href: "https://github.com",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-icon",
                    children: "\u231B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "homepage-project-title",
                    children: "Time Converter"
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
                  href: "https://github.com",
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
                  href: "https://github.com",
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
var __webpack_exports__ = __webpack_require__.X(0, ["components_footer_js-components_headMetadata_js-components_header_js-utils_apiBaseUrl_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vYXBpL2dldEZpdmVOZXdlc3RQb3N0cy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJyZXNwb25zZSIsImF4aW9zIiwiYXBpQmFzZVVybCIsImRhdGEiLCJlcnJvciIsImdldERhdGFFcnJvciIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwaVJlc3VsdCIsImdldEZpdmVOZXdlc3RQb3N0cyIsInBvc3RzIiwicmVuZGVyIiwicHJvcHMiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJ1cmxUaXRsZSIsInRodW1ibmFpbEltYWdlVXJsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLDZCQUFlLDRDQUFpQjtBQUM5QixNQUFJO0FBQ0YsVUFBTUEsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUUsR0FBRUMsc0RBQVcsOEJBQWYsQ0FBNUI7QUFDQSxXQUFPRixRQUFRLENBQUNHLElBQWhCO0FBQ0QsR0FIRCxDQUdFLE9BQU1DLEtBQU4sRUFBYTtBQUNiLFdBQU87QUFBQ0Msa0JBQVksRUFBRTtBQUFmLEtBQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsK0RBQWUsY0FBY0MsNENBQWQsQ0FBd0I7QUFFckMsZUFBYUMsZUFBYixHQUFnQztBQUM5QixVQUFNQyxTQUFTLEdBQUcsTUFBTUMsbUVBQWtCLEVBQTFDO0FBRUEsV0FBTztBQUNM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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQThFRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBa0ZEOztBQTVGb0MsQzs7Ozs7Ozs7Ozs7QUNUdkMsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi91dGlscy9hcGlCYXNlVXJsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGAke2FwaUJhc2VVcmx9L3Bvc3RzL2dldC1maXZlLW5ld2VzdC1wb3N0c2ApXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIHJldHVybiB7Z2V0RGF0YUVycm9yOiB0cnVlfVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci5qc1wiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLmpzXCJcclxuaW1wb3J0IEhlYWRNZXRhZGF0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkTWV0YWRhdGEuanNcIlxyXG5cclxuXHJcbmltcG9ydCBnZXRGaXZlTmV3ZXN0UG9zdHMgZnJvbSBcIi4uL2FwaS9nZXRGaXZlTmV3ZXN0UG9zdHMuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcclxuICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IGdldEZpdmVOZXdlc3RQb3N0cygpXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0czogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5wb3N0c1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxIZWFkTWV0YWRhdGFcclxuICAgICAgICAgIHRpdGxlPVwiQ29kaW5nIEJsb2dcIlxyXG4gICAgICAgICAgbWV0YURlc2NyaXB0aW9uPVwiTW9zZXMgQ2hlYm9pIGlzIGEgZnVsbCBzdGFjayBzb2Z0d2FyZSBkZXZlbG9wZXIgdGhhdCBhbHNvIHdyaXRlcyBhYm91dCBtb2Rlcm4gTm9kZUpTICxKYXZhU2NyaXB0IGFuZCBDIy5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLWludHJvZHVjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDE+SGksIEknbSBDaGVib2kgTW9zZXMgS2lwdG9vLiBJIGhlbHAgcGVvcGxlIGxlYXJuIHNvZnR3YXJlIGRldmVsb3BtZW50LjwvaDE+XHJcbiAgICAgICAgICAgIDxwPkknbSBhIGZ1bGwgc3RhY2sgc29mdHdhcmUgZGV2ZWxvcGVyIHRoYXQgd3JpdGVzIGFib3V0IG1vZGVybiBOb2RlLmpzLCBKYXZhU2NyaXB0LCBDIyBBU1AuTkVUIEZyYW1ld29yayBhbmQgZGV2ZWxvcG1lbnQuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLWxhdGVzdC1ibG9nLXBvc3RzXCI+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICBMYXRlc3QgQmxvZyBQb3N0c1xyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvbWVwYWdlLWxhdGVzdC1ibG9nLXBvc3RzLXZpZXctYWxsXCIgaHJlZj1cIi9ibG9nXCI+VmlldyBhbGw8L2E+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtbGF0ZXN0LWJsb2ctcG9zdHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzID9cclxuICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGEga2V5PXtpbmRleH0gaHJlZj17YC9ibG9nLyR7cG9zdC51cmxUaXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1sYXRlc3QtYmxvZy1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1sYXRlc3QtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC50aHVtYm5haWxJbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLWxhdGVzdC1ibG9nLXBvc3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgIH0pOiBudWxsXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3RzXCI+XHJcbiAgICAgICAgICAgIDxoMj5NeSBQcm9qZWN0czwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LWljb25cIj7wn5OePC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LXRpdGxlXCI+RGlzY291cnNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD5BIHBsYXRmb3JtIGZvciBjb21tdW5pdHkgZGlzY3Vzc2lvbi4gRnJlZSwgb3Blbiwgc2ltcGxlLjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3Qtdmlldy1idG5cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tXCI+VmlldzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LWljb25cIj7ijJs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3QtdGl0bGVcIj5UaW1lIENvbnZlcnRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+Q29udmVydCBtaWxsaXNlY29uZHMgb3Igc2Vjb25kcyB0byBkYXlzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMgaW4gbm9kZS5qcy48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3QtYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LXZpZXctYnRuXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbVwiPlZpZXc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXByb2plY3RcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC1pY29uXCI+4oybPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LXRpdGxlXCI+U2hvd2Rvd248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPkEgYmlkaXJlY3Rpb25hbCBNYXJrZG93biB0byBIVE1MIHRvIE1hcmtkb3duIGNvbnZlcnRlciB3cml0dGVuIGluIEphdmFzY3JpcHQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS1wcm9qZWN0LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZXBhZ2UtcHJvamVjdC12aWV3LWJ0blwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hvd2Rvd25qcy9zaG93ZG93blwiPlZpZXc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=