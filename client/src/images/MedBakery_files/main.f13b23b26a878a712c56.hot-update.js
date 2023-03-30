webpackHotUpdate("main",{

/***/ "./src/components/ECGPage/ECGQuestionProgress.tsx":
/*!********************************************************!*\
  !*** ./src/components/ECGPage/ECGQuestionProgress.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/ECGPage/ECGQuestionProgress.tsx";



const ECGQuestionProgress = props => {
  const backButtonActive = props.questionIdx > 0;
  const forwadButtonActive = props.questionIdx < props.questions.length;
  const [backButtonColor, backButtonFunc] = backButtonActive ? ["#FAD000", () => props.updateQuestionIdx(i => i - 1)] : ["grey", () => {}];
  const [forwardButtonColor, forwardButtonFunc] = forwadButtonActive ? ["#FAD000", () => props.updateQuestionIdx(i => i + 1)] : ["grey", () => {}];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    darkMode: darkMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Button, {
      backgroundColor: backButtonColor,
      textColor: darkMode ? "white" : "black",
      onClick: backButtonFunc,
      children: "<"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Dosset, {
      children: Array(props.questions.length).fill(0).map((_, idx) => {
        const correct = props.questions[idx].sections.reduce((flag, section) => flag && section.selected === section.correct, true);
        let backgroundColor = "grey";
        if (correct && props.questions[idx].answered) backgroundColor = "green";
        if (!correct && props.questions[idx].answered) backgroundColor = "red";
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Pill, {
          backgroundColor: backgroundColor,
          darkMode: darkMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 32
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Button, {
      backgroundColor: forwardButtonColor,
      textColor: darkMode ? "white" : "black",
      onClick: forwardButtonFunc,
      children: ">"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

_c = ECGQuestionProgress;
/* harmony default export */ __webpack_exports__["default"] = (ECGQuestionProgress);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: inline-block;
    border-radius: 10px;
    border: none;
    font-size: 24px;
    margin: 0 10px;
    padding: 0 10px;
    background-color: ${props => props.darkMode ? "rgba(64, 75, 224, 0.459)" : "#FFC9C9"};
    color: ${props => props.darkMode ? "white" : "black"};
`;
_c2 = Container;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
    display: inline-block;
    border-style: none;
    background-color: transparent;
    color: ${props => props.textColor};
`;
_c3 = Button;
const Dosset = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: inline-block;
    white-space: wrap;
    margin: 0px auto 0 auto;
    text-align: center;
`;
_c4 = Dosset;
const Pill = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: inline-block;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    margin: 0px 2px;
    background-color: ${props => props.backgroundColor}
`;
_c5 = Pill;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "ECGQuestionProgress");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Button");
__webpack_require__.$Refresh$.register(_c4, "Dosset");
__webpack_require__.$Refresh$.register(_c5, "Pill");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.f13b23b26a878a712c56.hot-update.js.map