self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_coding_blog_frontend_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/header.js */ "./components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_headMetadata_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/headMetadata.js */ "./components/headMetadata.js");
/* harmony import */ var _api_getAllBlogPosts_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../api/getAllBlogPosts.js */ "./api/getAllBlogPosts.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "E:\\coding-blog\\frontend\\website\\pages\\blog\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var _default = /*#__PURE__*/function (_Component) {
  (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, _default);

    return _super.apply(this, arguments);
  }

  (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(_default, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "layout-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_headMetadata_js__WEBPACK_IMPORTED_MODULE_12__.default, {
          title: "Blog Posts | Coding Blog",
          metaDescription: "List of all blog posts published on the Nick Major coding blog."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "blog-posts-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
            children: "Blog posts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "blog-posts-list",
            children: this.props.posts ? this.props.posts.map(function (post, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/blog/".concat(post.urlTitle),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "blog-posts-list-item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "blog-posts-thumbnail",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      src: post.thumbnailImageUrl
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "blog-posts-list-item-title-and-date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                      children: post.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                      className: "blog-posts-list-item-date",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                        children: moment__WEBPACK_IMPORTED_MODULE_9___default().unix(post.dateTimestamp).format("MMMM Do, YYYY")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 21
                }, _this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 19
              }, _this);
            }) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_footer_js__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_coding_blog_frontend_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var apiResult;
        return E_coding_blog_frontend_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_api_getAllBlogPosts_js__WEBPACK_IMPORTED_MODULE_13__.default)();

              case 2:
                apiResult = _context.sent;
                return _context.abrupt("return", {
                  posts: apiResult && apiResult.posts
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInBvc3RzIiwibWFwIiwicG9zdCIsImluZGV4IiwidXJsVGl0bGUiLCJ0aHVtYm5haWxJbWFnZVVybCIsInRpdGxlIiwibW9tZW50IiwiZGF0ZVRpbWVzdGFtcCIsImZvcm1hdCIsImdldEFsbEJsb2dQb3N0cyIsImFwaVJlc3VsdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OzZCQVlZO0FBQUE7O0FBQ1IsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsaUVBQUQ7QUFDRSxlQUFLLEVBQUMsMEJBRFI7QUFFRSx5QkFBZSxFQUFDO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUU7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxzQkFFSSxLQUFLQSxLQUFMLENBQVdDLEtBQVgsR0FDQSxLQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNwQyxrQ0FDRTtBQUFlLG9CQUFJLGtCQUFXRCxJQUFJLENBQUNFLFFBQWhCLENBQW5CO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLHNCQUFmO0FBQUEsMENBQ0U7QUFBSyw2QkFBUyxFQUFDLHNCQUFmO0FBQUEsMkNBQ0U7QUFBSyx5QkFBRyxFQUFFRixJQUFJLENBQUNHO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFJRTtBQUFLLDZCQUFTLEVBQUMscUNBQWY7QUFBQSw0Q0FDRTtBQUFBLGdDQUFLSCxJQUFJLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUssK0JBQVMsRUFBQywyQkFBZjtBQUFBLDZDQUNFO0FBQUEsa0NBQU9DLGtEQUFBLENBQVlMLElBQUksQ0FBQ00sYUFBakIsRUFBZ0NDLE1BQWhDLENBQXVDLGVBQXZDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFRTixLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFlRCxhQWhCRCxDQURBLEdBaUJLO0FBbkJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBK0JFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBbUNEOzs7Ozs7Ozs7Ozt1QkE1Q3lCTyxpRUFBZSxFOzs7QUFBakNDLHlCO2lEQUVDO0FBQ0xYLHVCQUFLLEVBQUVXLFNBQVMsSUFBSUEsU0FBUyxDQUFDWDtBQUR6QixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUprQlksNEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy41NWU1MmVjMDZhNzRhYTgzZTEyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCJcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb290ZXIuanNcIlxyXG5pbXBvcnQgSGVhZE1ldGFkYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRNZXRhZGF0YS5qc1wiXHJcblxyXG5pbXBvcnQgZ2V0QWxsQmxvZ1Bvc3RzIGZyb20gXCIuLi8uLi9hcGkvZ2V0QWxsQmxvZ1Bvc3RzLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcclxuICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IGdldEFsbEJsb2dQb3N0cygpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdHM6IGFwaVJlc3VsdCAmJiBhcGlSZXN1bHQucG9zdHMsXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LXdyYXBwZXJcIj5cclxuICAgICAgICA8SGVhZE1ldGFkYXRhXHJcbiAgICAgICAgICB0aXRsZT1cIkJsb2cgUG9zdHMgfCBDb2RpbmcgQmxvZ1wiXHJcbiAgICAgICAgICBtZXRhRGVzY3JpcHRpb249XCJMaXN0IG9mIGFsbCBibG9nIHBvc3RzIHB1Ymxpc2hlZCBvbiB0aGUgTmljayBNYWpvciBjb2RpbmcgYmxvZy5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5CbG9nIHBvc3RzPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzID9cclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhIGtleT17aW5kZXh9IGhyZWY9e2AvYmxvZy8ke3Bvc3QudXJsVGl0bGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLXRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC50aHVtYm5haWxJbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbS10aXRsZS1hbmQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbS1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51bml4KHBvc3QuZGF0ZVRpbWVzdGFtcCkuZm9ybWF0KFwiTU1NTSBEbywgWVlZWVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9