self["webpackHotUpdate_N_E"]("pages/blog/[title]",{

/***/ "./pages/blog/[title].js":
/*!*******************************!*\
  !*** ./pages/blog/[title].js ***!
  \*******************************/
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
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.js */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js */ "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/header.js */ "./components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_headMetadata_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/headMetadata.js */ "./components/headMetadata.js");
/* harmony import */ var _api_getBlogPostByUrlTitle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api/getBlogPostByUrlTitle.js */ "./api/getBlogPostByUrlTitle.js");
/* module decorator */ module = __webpack_require__.hmd(module);









var _jsxFileName = "E:\\coding-blog\\frontend\\website\\pages\\blog\\[title].js";

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
    key: "componentDidMount",
    value: function componentDidMount() {
      prismjs__WEBPACK_IMPORTED_MODULE_9___default().highlightAll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "layout-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_headMetadata_js__WEBPACK_IMPORTED_MODULE_14__.default, {
          title: this.props.post ? this.props.post.seoTitleTag : "Blog Post | Coding Blog",
          metaDescription: this.props.post && this.props.post.seoMetaDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 8
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "blog-post-container",
          children: this.props.post ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "blog-post-top-section",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
                children: this.props.post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 7
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "blog-post-top-meta",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: moment.unix(this.props.post.dateTimestamp).format("MMMM Do, YYYY")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 9
                }, this), this.props.post.tags.map(function (tag, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "blog-post-top-tag-btn",
                    href: "/blog/tags/".concat(tag),
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: tag
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 17
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 15
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              dangerouslySetInnerHTML: {
                __html: this.props.post.markdownContent
              },
              className: "blog-post-body-content"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 5
            }, this)]
          }, void 0, true) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_footer_js__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,E_coding_blog_frontend_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_coding_blog_frontend_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {
        var query, apiResult;
        return E_coding_blog_frontend_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return (0,_api_getBlogPostByUrlTitle_js__WEBPACK_IMPORTED_MODULE_15__.default)(query.title);

              case 3:
                apiResult = _context.sent;
                return _context.abrupt("return", {
                  post: apiResult && apiResult.post
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bdGl0bGVdLmpzIl0sIm5hbWVzIjpbIlByaXNtIiwicHJvcHMiLCJwb3N0Iiwic2VvVGl0bGVUYWciLCJzZW9NZXRhRGVzY3JpcHRpb24iLCJ0aXRsZSIsIm1vbWVudCIsInVuaXgiLCJkYXRlVGltZXN0YW1wIiwiZm9ybWF0IiwidGFncyIsIm1hcCIsInRhZyIsImluZGV4IiwiX19odG1sIiwibWFya2Rvd25Db250ZW50IiwicXVlcnkiLCJnZXRCbG9nUG9zdEJ5VXJsVGl0bGUiLCJhcGlSZXN1bHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FHc0I7QUFDbEJBLGlFQUFBO0FBQ0Q7Ozs2QkFTUztBQUFBOztBQUNSLDBCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNDLDhEQUFDLGlFQUFEO0FBQ0wsZUFBSyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixLQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLFdBQWxDLEdBQWdELHlCQURsRDtBQUVMLHlCQUFlLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxJQUFYLElBQW1CLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkU7QUFGL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUtFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxvQkFFTixLQUFLSCxLQUFMLENBQVdDLElBQVgsZ0JBQ0E7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsdUJBQWY7QUFBQSxzQ0FDRTtBQUFBLDBCQUFLLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkc7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUsseUJBQVMsRUFBQyxvQkFBZjtBQUFBLHdDQUNFO0FBQUEsNEJBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtOLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQk0sYUFBNUIsRUFBMkNDLE1BQTNDLENBQWtELGVBQWxEO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUdJLEtBQUtSLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQlEsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN2QyxzQ0FDRTtBQUNFLDZCQUFTLEVBQUMsdUJBRFo7QUFHRSx3QkFBSSx1QkFBZ0JELEdBQWhCLENBSE47QUFBQSwyQ0FLRTtBQUFBLGdDQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixxQkFFT0MsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGO0FBU0QsaUJBVkQsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBb0JFO0FBQUsscUNBQXVCLEVBQUU7QUFBQ0Msc0JBQU0sRUFBRSxLQUFLYixLQUFMLENBQVdDLElBQVgsQ0FBZ0JhO0FBQXpCLGVBQTlCO0FBQXlFLHVCQUFTLEVBQUM7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFwQkY7QUFBQSwwQkFEQSxHQXNCTTtBQXhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBaUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBcUNEOzs7Ozs7Ozs7O0FBOUMrQkMscUIsUUFBQUEsSzs7dUJBQ05DLHVFQUFxQixDQUFDRCxLQUFLLENBQUNYLEtBQVAsQzs7O0FBQXZDYSx5QjtpREFFQztBQUNMaEIsc0JBQUksRUFBRWdCLFNBQVMsSUFBSUEsU0FBUyxDQUFDaEI7QUFEeEIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQa0JpQiw0QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1t0aXRsZV0uYWExOTQ1YWYzYjU5NWRmN2NkMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXHJcblxyXG5pbXBvcnQgXCJwcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qc1wiXHJcbmltcG9ydCBcInByaXNtanMvcGx1Z2lucy9ub3JtYWxpemUtd2hpdGVzcGFjZS9wcmlzbS1ub3JtYWxpemUtd2hpdGVzcGFjZS5qc1wiXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci5qc1wiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9vdGVyLmpzXCJcclxuaW1wb3J0IEhlYWRNZXRhZGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkTWV0YWRhdGEuanNcIlxyXG5pbXBvcnQgZ2V0QmxvZ1Bvc3RCeVVybFRpdGxlIGZyb20gXCIuLi8uLi9hcGkvZ2V0QmxvZ1Bvc3RCeVVybFRpdGxlLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3RCeVVybFRpdGxlKHF1ZXJ5LnRpdGxlKVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdDogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5wb3N0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgPEhlYWRNZXRhZGF0YVxyXG4gIHRpdGxlPXt0aGlzLnByb3BzLnBvc3QgPyB0aGlzLnByb3BzLnBvc3Quc2VvVGl0bGVUYWcgOiBcIkJsb2cgUG9zdCB8IENvZGluZyBCbG9nXCJ9XHJcbiAgbWV0YURlc2NyaXB0aW9uPXt0aGlzLnByb3BzLnBvc3QgJiYgdGhpcy5wcm9wcy5wb3N0LnNlb01ldGFEZXNjcmlwdGlvbn1cclxuLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAge1xyXG4gIHRoaXMucHJvcHMucG9zdCA/XHJcbiAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LXRvcC1zZWN0aW9uXCI+XHJcbiAgICAgIDxoMT57dGhpcy5wcm9wcy5wb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LXRvcC1tZXRhXCI+XHJcbiAgICAgICAgPHNwYW4+e21vbWVudC51bml4KHRoaXMucHJvcHMucG9zdC5kYXRlVGltZXN0YW1wKS5mb3JtYXQoXCJNTU1NIERvLCBZWVlZXCIpfTwvc3Bhbj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnBvc3QudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LXRvcC10YWctYnRuXCJcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtgL2Jsb2cvdGFncy8ke3RhZ31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0YWd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLnBvc3QubWFya2Rvd25Db250ZW50fX0gY2xhc3NOYW1lPVwiYmxvZy1wb3N0LWJvZHktY29udGVudFwiPjwvZGl2PlxyXG4gIDwvPiA6IG51bGxcclxufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==