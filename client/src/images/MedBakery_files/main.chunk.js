(this["webpackJsonpmed-bakery-react"] = this["webpackJsonpmed-bakery-react"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_ProximaNova_Regular_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/ProximaNova-Regular.otf */ "./src/fonts/ProximaNova-Regular.otf");
/* harmony import */ var _fonts_Champion_HTF_Welterweight_otf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Champion-HTF-Welterweight.otf */ "./src/fonts/Champion-HTF-Welterweight.otf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_ProximaNova_Regular_otf__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Champion_HTF_Welterweight_otf__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n    font-family: Proxima;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n}\n\n@font-face {\n    font-family: Champion;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"opentype\");\n} \n\ndiv {\n    white-space: pre-line;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover {\n    color: inherit;\n}\n\n.react-icons{\n    color: #fdfdfd;\n}\n\nbody, html {\n    scrollbar-width: none;\n    margin: 0;\n}\n\ntable {\n    border: 2px solid #9B8DD8;\n    width: 100%;\n    text-align: center;\n    font-size: small;\n}\n\nth, td {\n    border: 2px solid #9B8DD8;\n    width: 33%;\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,+DAA8D;AAClE;;AAEA;IACI,qBAAqB;IACrB,+DAAoE;AACxE;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,UAAU;AACd","sourcesContent":["@font-face {\n    font-family: Proxima;\n    src: url(\"./fonts/ProximaNova-Regular.otf\") format(\"opentype\");\n}\n\n@font-face {\n    font-family: Champion;\n    src: url(\"./fonts/Champion-HTF-Welterweight.otf\") format(\"opentype\");\n} \n\ndiv {\n    white-space: pre-line;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover {\n    color: inherit;\n}\n\n.react-icons{\n    color: #fdfdfd;\n}\n\nbody, html {\n    scrollbar-width: none;\n    margin: 0;\n}\n\ntable {\n    border: 2px solid #9B8DD8;\n    width: 100%;\n    text-align: center;\n    font-size: small;\n}\n\nth, td {\n    border: 2px solid #9B8DD8;\n    width: 33%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HomePage/HomePage */ "./src/components/HomePage/HomePage.tsx");
/* harmony import */ var _components_UserPage_UserPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserPage/UserPage */ "./src/components/UserPage/UserPage.tsx");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/App.tsx",
    _s = __webpack_require__.$Refresh$.signature();










const App = () => {
  _s();

  const {
    token,
    setToken
  } = Object(_functions__WEBPACK_IMPORTED_MODULE_1__["useToken"])();
  const [darkMode, setDarkMode] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true); //initialise darkMode 
  // if we're on local host (development) then change url accordingly

  let SERVER_URL = "";
  if (window.location.href.startsWith("http://localhost:3000/")) SERVER_URL = "http://localhost:3001";
  if (window.location.href.startsWith("https://medbakery.co.uk")) SERVER_URL = "https://medbakery.co.uk";
  const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
  let prevPath = null; // listen and notify Segment of client-side page updates

  history.listen(location => {
    if (location.pathname !== prevPath) {
      prevPath = location.pathname;
      window.analytics.page();
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Container, {
    darkMode: darkMode,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          exact: true,
          path: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
            SERVER_URL: SERVER_URL,
            token,
            setDarkMode: setDarkMode,
            darkMode: darkMode,
            setToken: setToken
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          path: "/User",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_UserPage_UserPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            setToken: setToken,
            token,
            SERVER_URL: SERVER_URL,
            setDarkMode: setDarkMode,
            darkMode: darkMode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, undefined);
};

_s(App, "IZy2UUaAkFX5WTeCHZbUyJDSa7k=", false, function () {
  return [_functions__WEBPACK_IMPORTED_MODULE_1__["useToken"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
    background-color: ${props => props.darkMode ? "#0072CE" : "#F6F5F0"};
    background-image: ${props => props.darkMode ? "linear-gradient(-25deg, #3A1C89, #000000, #3A1C89)" : "none"};
    background-attachment: fixed;
    background-size: cover;
    color: ${props => props.darkMode ? "white" : "black"};
    fill: ${props => props.darkMode ? "#0072CE" : "#C02222"};
    font-family: Proxima;
    height: 100%;
`;
_c2 = Container;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "App");
__webpack_require__.$Refresh$.register(_c2, "Container");

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

/***/ }),

/***/ "./src/components/DevPage/DevPage.tsx":
/*!********************************************!*\
  !*** ./src/components/DevPage/DevPage.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _General_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../General/Container */ "./src/components/General/Container.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _General_BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../General/BackButton */ "./src/components/General/BackButton.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/DevPage/DevPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();









const DevPage = props => {
  _s();

  const [downloadState, updateDownloadState] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    uploadQuestionsAndPoints: "complete",
    updatetextbook: "complete",
    downloadUsers: "complete",
    downloadProducts: "complete",
    uploadProducts: "complete",
    uploadUsers: "complete",
    homepageQuestion: "complete"
  });
  console.log(downloadState);

  const devFunc = stateKey => {
    updateDownloadState({ ...downloadState,
      [stateKey]: "pending"
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(SERVER_URL + "/dev/" + stateKey, {
      token
    }).then(res => {
      if (res.data.success) updateDownloadState({ ...downloadState,
        [stateKey]: "complete"
      });else {
        updateDownloadState({ ...downloadState,
          [stateKey]: "failed"
        });
        console.log(res.data.error);
      }
    });
  };

  const buttons = [{
    stateKey: "updatetextbook",
    title: "UploadTextBook"
  }, {
    stateKey: "uploadQuestionsAndPoints",
    title: "UploadQuestions"
  }, {
    stateKey: "downloadUsers",
    title: "Download Users to Server"
  }, {
    stateKey: "downloadProducts",
    title: "Download Products to Server"
  }, {
    stateKey: "uploadProducts",
    title: "Upload Products from Server"
  }, {
    stateKey: "uploadUsers",
    title: "Upload Users from Server"
  }, {
    stateKey: "homepageQuestion",
    title: "Download Example Question"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_General_Container__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    darkMode: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_General_BackButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      darkMode: darkMode,
      path: "/User",
      label: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        padding: "100px 0px"
      },
      children: buttons.map(({
        stateKey,
        title
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(OptionButton, {
        darkMode: darkMode,
        selected: false,
        onClick: () => devFunc(stateKey),
        children: [title, downloadState[stateKey] === "complete" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCheck"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 68
        }, undefined) : downloadState[stateKey] === "failed" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCross"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 122
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBreadSlice"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 136
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, undefined);
};

_s(DevPage, "2KaZOJGyywNE26a6q7aeRfaRQZc=");

_c = DevPage;
/* harmony default export */ __webpack_exports__["default"] = (DevPage);
const OptionButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    display: flex;
    justify-content: space-between;
    width: 60%;
    min-width: 275px;
    background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#1B275E" : "#F6F5F0"};
    color: ${props => props.darkMode ? "white" : "black"};
    margin: 10px auto 15px auto;
    padding: 10px 20px;
    font:  35px Proxima;
    text-align: left;
    border-radius: 10px;
    border-style: none;
    &:hover {
        background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#7735FD" : "#FBE9EE"};
    }
`;
_c2 = OptionButton;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "DevPage");
__webpack_require__.$Refresh$.register(_c2, "OptionButton");

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

/***/ }),

/***/ "./src/components/ECGPage/ECGAnsweredOptions.tsx":
/*!*******************************************************!*\
  !*** ./src/components/ECGPage/ECGAnsweredOptions.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/ECGPage/ECGAnsweredOptions.tsx";



const ECGAnsweredOptions = props => {
  const backgroundColor = props.section.correct === props.section.selected ? "#1C725C" : "#A94D53";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    style: {
      margin: "30px auto auto auto",
      textAlign: "center"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        fontSize: "20px",
        width: "100px",
        textAlign: "left",
        display: "inline-block"
      },
      children: props.section.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Select, {
      backgroundColor: backgroundColor,
      textColor: "black",
      onChange: e => props.handleOptionChange(props.section.label, e.target.value),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
        value: "",
        selected: true,
        children: props.section.selected
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), props.section.correct !== props.section.selected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Select, {
      backgroundColor: "#1C725C",
      textColor: "black",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
        value: "",
        selected: true,
        children: props.section.correct
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Select, {
      backgroundColor: "transparent",
      textColor: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

_c = ECGAnsweredOptions;
/* harmony default export */ __webpack_exports__["default"] = (ECGAnsweredOptions);
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select`
    border-radius: 20px;
    margin: 5px 10px;
    padding: 3px 15px;
    width: 100%;
    max-width: 300px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    border: none;
`;
_c2 = Select;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ECGAnsweredOptions");
__webpack_require__.$Refresh$.register(_c2, "Select");

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

/***/ }),

/***/ "./src/components/ECGPage/ECGOptions.tsx":
/*!***********************************************!*\
  !*** ./src/components/ECGPage/ECGOptions.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/ECGPage/ECGOptions.tsx";



const ECGOptions = props => {
  const backgroundColor = darkMode ? "#0D163C" : "#F6F5F0";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    style: {
      margin: "30px auto auto auto",
      textAlign: "center",
      border: "2px solid white",
      whiteSpace: "nowrap",
      width: "50%",
      minWidth: "200px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        fontSize: "20px",
        width: "max-content",
        textAlign: "left",
        display: "inline-block"
      },
      children: props.section.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Select, {
      backgroundColor: backgroundColor,
      textColor: darkMode ? "white" : "black",
      onChange: e => props.handleOptionChange(props.section.label, e.target.value),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
        value: "",
        disabled: true,
        selected: true,
        children: "Select"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }, undefined), props.section.options.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
        children: option
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 63
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, undefined);
};

_c = ECGOptions;
/* harmony default export */ __webpack_exports__["default"] = (ECGOptions);
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select`
    border-radius: 20px;
    margin: 5px 10px;
    padding: 3px 15px;
    min-width: 100px;
    width: 40%;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    border: none;
`;
_c2 = Select;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ECGOptions");
__webpack_require__.$Refresh$.register(_c2, "Select");

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

/***/ }),

/***/ "./src/components/ECGPage/ECGPage.tsx":
/*!********************************************!*\
  !*** ./src/components/ECGPage/ECGPage.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ECGSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECGSummary */ "./src/components/ECGPage/ECGSummary.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ECGSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ECGSession */ "./src/components/ECGPage/ECGSession.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/ECGPage/ECGPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const ECGPage = props => {
  _s();

  const [topics, updateTopics] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(SERVER_URL + "/ecgs/topics", {
      token
    }).then(res => {
      updateTopics(res.data);
    });
  }, []);

  const finishEcgSession = () => {
    console.log("topics to be sent", topics);
    window.analytics.track({
      userId: "",
      event: "ECG session finished"
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(SERVER_URL + "/ecgs/finishsession", {
      token,
      topics
    }).then(res => {
      console.log("scores updated");
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      exact: true,
      path: "/User/ECG",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ECGSummary__WEBPACK_IMPORTED_MODULE_1__["default"], {
        topics: topics,
        updateTopics: updateTopics,
        darkMode: darkMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/User/ECG/Session",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ECGSession__WEBPACK_IMPORTED_MODULE_4__["default"], {
        topics: topics.filter(topic => topic.selected),
        darkMode: darkMode,
        finishEcgSession: finishEcgSession
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

_s(ECGPage, "Vq6AuvSSWW8IMYOIV5CTF9rbfNk=");

_c = ECGPage;
/* harmony default export */ __webpack_exports__["default"] = (ECGPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "ECGPage");

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

/***/ }),

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
    margin: 5px auto 0 auto;
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

/***/ }),

/***/ "./src/components/ECGPage/ECGResources/ECGSketchThemes.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/ECGPage/ECGResources/ECGSketchThemes.tsx ***!
  \*****************************************************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const WHITE = [255, 255, 255];
const GRAY = [50, 50, 50];
const DEFAULTBLUE = [25, 25, 100];
const YELLOW = [250, 208, 0];
const RED = [255, 150, 150];
const BLACK = [0, 0, 0];
const themes = [{
  name: "default",
  background: DEFAULTBLUE,
  majorTick: GRAY,
  minorTick: DEFAULTBLUE,
  label: YELLOW,
  signal: WHITE,
  watermark: WHITE
}, {
  name: "classic",
  background: WHITE,
  majorTick: RED,
  minorTick: RED,
  label: BLACK,
  signal: BLACK,
  watermark: GRAY
}];

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

/***/ }),

/***/ "./src/components/ECGPage/ECGSession.tsx":
/*!***********************************************!*\
  !*** ./src/components/ECGPage/ECGSession.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ECGAnsweredOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ECGAnsweredOptions */ "./src/components/ECGPage/ECGAnsweredOptions.tsx");
/* harmony import */ var _ECGOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ECGOptions */ "./src/components/ECGPage/ECGOptions.tsx");
/* harmony import */ var _ECGQuestionProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ECGQuestionProgress */ "./src/components/ECGPage/ECGQuestionProgress.tsx");
/* harmony import */ var _newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newECGtings/ECGGen2 */ "./src/components/ECGPage/newECGtings/ECGGen2.tsx");
/* harmony import */ var _newECGtings_ECGSketch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newECGtings/ECGSketch */ "./src/components/ECGPage/newECGtings/ECGSketch.tsx");
/* harmony import */ var _newECGtings_ECGSketchThemes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newECGtings/ECGSketchThemes */ "./src/components/ECGPage/newECGtings/ECGSketchThemes.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/ECGPage/ECGSession.tsx",
    _s = __webpack_require__.$Refresh$.signature();













// lets say last question in list is **always** unaanswered
const ECGSession = props => {
  _s();

  const [darkTheme, updateDarkTheme] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])props.darkMode);
  const [questions, updateQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [questionIdx, updateQuestionIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateDarkThemeprops.darkMode);
  }, [darkMode]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateQuestions([Object(_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_6__["generateECG"])(props.topics)]);
  }, []);

  const handleOptionChange = (label, selected) => {
    const currentWorkingQuestion = questions[questions.length - 1];
    const modifiedQuestion = { ...currentWorkingQuestion,
      sections: currentWorkingQuestion.sections.map(s => s.label === label ? { ...s,
        selected
      } : s)
    };
    updateQuestions(questions.map((q, i) => i === questions.length - 1 ? modifiedQuestion : q));
  };

  const submitAnswers = () => {
    updateQuestions(questions.map((q, i) => i === questions.length - 1 ? { ...q,
      answered: true
    } : q).concat([Object(_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_6__["generateECG"])(props.topics)]));
  };

  const refreshQuestion = () => {
    updateQuestions(questions.map((q, i) => i === questions.length - 1 ? Object(_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_6__["generateECG"])(props.topics) : q));
  };

  if (questions.length === 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {}, void 0, false); // can only submit if last question and all fields answered

  const submitPermitted = questionIdx === questions.length - 1 && questions[questions.length - 1].sections.reduce((flag, section) => flag && section.selected !== "unselected", true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Container, {
    darkMode: darkMode,
    children: [questionIdx === questions.length - 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(BakeButton, {
      darkMode: darkMode,
      onClick: refreshQuestion,
      children: "Bake new ECG"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      style: {
        textAlign: "center",
        display: "block",
        overflow: "auto"
      },
      id: "ecgsketch",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_newECGtings_ECGSketch__WEBPACK_IMPORTED_MODULE_7__["default"], {
        theme: _newECGtings_ECGSketchThemes__WEBPACK_IMPORTED_MODULE_8__["themes"][darkTheme ? 0 : 1],
        question: questions[questionIdx],
        reviewMode: questionIdx < questions.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      style: {
        maxWidth: 1000,
        height: "25px",
        margin: "auto",
        textAlign: "left"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ReveiwButton, {
        darkMode: darkMode,
        onClick: () => updateDarkTheme(!darkTheme),
        children: "Toggle Theme"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined), questions.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/User/ECG",
        style: {
          float: "right"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ReveiwButton, {
          darkMode: darkMode,
          onClick: props.finishEcgSession,
          children: "Finish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 33
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ReveiwButton, {
        darkMode: darkMode,
        children: "Finish"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ECGQuestionProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
        questionIdx: questionIdx,
        updateQuestionIdx: updateQuestionIdx,
        questions: questions,
        darkMode: darkMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      style: {
        font: "30px Champion"
      },
      children: "Interpret It!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "800px",
        border: "2px solid magenta",
        margin: "auto"
      },
      children: questions[questionIdx].sections.map(section => {
        return questions[questionIdx].answered ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ECGAnsweredOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
          section: section,
          darkMode: darkMode,
          handleOptionChange: handleOptionChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ECGOptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
          section: section,
          darkMode: darkMode,
          handleOptionChange: handleOptionChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 27
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, undefined), submitPermitted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SubmitButton, {
      submitPermitted: submitPermitted,
      onClick: submitPermitted ? submitAnswers : () => {},
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, undefined);
};

_s(ECGSession, "cAU6khXrRCHDCd4EKkuQESz7ylM=");

_c = ECGSession;
/* harmony default export */ __webpack_exports__["default"] = (ECGSession);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    margin: 50px auto;
    max-width: 1200px;
    border-radius: 20px;
    padding: 0 20px 20px 20px;
    text-align: center;
`;
_c2 = Container;
const BakeButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    display: inline-block;
    border-style: none;
    border-radius: 10px;
    margin: 0 10px 10px 10px;
    width: 200px;
    background-color: ${props => props.darkMode ? "rgba(64, 75, 224, 0.459)" : "#FFC9C9"};
    color: ${props => props.darkMode ? "white" : "black"};
`;
_c3 = BakeButton;
const ReveiwButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    display: inline-block;
    border-radius: 10px;
    border: none;
    font-size: 10px;
    margin: 0 10px;
    padding: 2px 10px;
    background-color: ${props => props.darkMode ? "rgba(64, 75, 224, 0.459)" : "#FFC9C9"};
    color: ${props => props.darkMode ? "white" : "black"};
`;
_c4 = ReveiwButton;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    width: 200px;
    margin: 40px auto 0 auto;
    font: bold 20px sans-serif;
    border-radius: 20px;
    border-style: none;
    background-color: ${props => props.submitPermitted ? "#FAD000" : "grey"};
`;
_c5 = SubmitButton;
const NextButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    width: 200px;
    margin: 40px auto 0 auto;
    font: bold 20px sans-serif;
    border-radius: 20px;
    border-style: none;
    background-color: ${props => props.active ? "#FAD000" : "grey"};
`;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "ECGSession");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "BakeButton");
__webpack_require__.$Refresh$.register(_c4, "ReveiwButton");
__webpack_require__.$Refresh$.register(_c5, "SubmitButton");

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

/***/ }),

/***/ "./src/components/ECGPage/ECGSummary.tsx":
/*!***********************************************!*\
  !*** ./src/components/ECGPage/ECGSummary.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _General_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../General/Container */ "./src/components/General/Container.tsx");
/* harmony import */ var _General_BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../General/BackButton */ "./src/components/General/BackButton.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/ECGPage/ECGSummary.tsx";






const ECGSummary = props => {
  const selectEcgOption = name => {
    console.log(props.topics);
    props.updateTopics(props.topics.map(topic => topic.name === name ? { ...topic,
      selected: !topic.selected
    } : topic));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_General_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    darkMode: darkMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_General_BackButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      darkMode: darkMode,
      label: "Home",
      path: "/User"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Title, {
      darkMode: darkMode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        style: {
          color: "#FAD000"
        },
        children: "ECG"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 50
      }, undefined), " Skills Trainer"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 18
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        fontSize: "30px",
        textAlign: "center"
      },
      children: "Select your prefered topics"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), props.topics.map(topic => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(OptionButton, {
        darkMode: darkMode,
        selected: topic.selected,
        onClick: () => selectEcgOption(topic.name),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          style: {
            width: "max-content"
          },
          children: topic.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            display: "inline-block"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            style: {
              fontSize: "10px",
              marginLeft: "10px"
            },
            children: ["Attempts: ", topic.attempts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            style: {
              fontSize: "10px",
              marginLeft: "10px"
            },
            children: ["Correct: ", topic.correct]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }, undefined);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        textAlign: "center"
      },
      children: props.topics.filter(topic => topic.selected).length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
        to: "/User/ECG/Session",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StartButton, {
          darkMode: darkMode,
          active: true,
          style: {
            marginTop: "50px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: "Start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 37
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 33
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StartButton, {
        darkMode: darkMode,
        active: false,
        style: {
          marginTop: "50px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          children: "Start"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 33
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 29
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

_c = ECGSummary;
/* harmony default export */ __webpack_exports__["default"] = (ECGSummary);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    text-align: center;
    font: 50px Champion;
    margin-bottom: 20px;
    margin-top: 20px;
`;
_c2 = Title;
const OptionButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    display: block;
    width: 60%;
    min-width: 275px;
    background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#1B275E" : "#F6F5F0"};
    color: ${props => props.darkMode ? "white" : "black"};
    margin: 10px auto 15px auto;
    padding: 10px 20px;
    font:  35px Proxima;
    text-align: left;
    border-radius: 10px;
    border-style: none;
    &:hover {
        background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#7735FD" : "#FBE9EE"};
    }
`;
_c3 = OptionButton;
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    background-color: ${props => props.active ? "#FAD000" : "grey"};
    padding: 10px;
    color: black;
    font: 30px Proxima;
    border-radius: 10px;
    width: 200px;
    border: none;
`;
_c4 = StartButton;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "ECGSummary");
__webpack_require__.$Refresh$.register(_c2, "Title");
__webpack_require__.$Refresh$.register(_c3, "OptionButton");
__webpack_require__.$Refresh$.register(_c4, "StartButton");

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

/***/ }),

/***/ "./src/components/ECGPage/newECGtings/ECGDiagnoses.tsx":
/*!*************************************************************!*\
  !*** ./src/components/ECGPage/newECGtings/ECGDiagnoses.tsx ***!
  \*************************************************************/
/*! exports provided: retrieveDiagnoses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveDiagnoses", function() { return retrieveDiagnoses; });
/* harmony import */ var _ECGFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECGFunctions */ "./src/components/ECGPage/newECGtings/ECGFunctions.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const retrieveDiagnoses = topics => {
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const relevantDiagnoses = diagnoses.filter(diagnosis => diagnosis.topics.includes(randomTopic.name));
  const selectedDiagnosis = relevantDiagnoses[Math.floor(Math.random() * relevantDiagnoses.length)]; //const selectedDiagnosis = diagnoses[0];

  return { ...selectedDiagnosis,
    rate: selectedDiagnosis.rate === "default" ? Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_0__["randomVal"])(60, 90) : selectedDiagnosis.rate,
    axis: selectedDiagnosis.axis === "default" ? Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_0__["randomVal"])(-30, 90) : selectedDiagnosis.axis
  };
};

const labelChange = (predicates, information) => {
  return {
    information: information,
    predicates: predicates,
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  };
}; // As per the master plan Diagnoses shoudl contain:
// ---- Global changes; Rate, Rhythm, Axis
// ---- Event-level changes: queries associated with specific wave changes


const diagnoses = [{
  topics: ["Rate"],
  diagnosis: "Sinus Bradycardia",
  explanation: "Heart rate < 60 with normal wave morphology",
  rate: 40,
  axis: "default",
  irregular: false,
  changes: [labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }], [{
    waveName: "r",
    description: "slow"
  }])]
}, //--------------------------------------------------------------------------------------
{
  topics: ["Rate"],
  diagnosis: "Ventricular Tachycardia",
  explanation: "Tachycardia with broad qrs complexes",
  rate: 200,
  axis: "default",
  irregular: false,
  changes: [labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }], [{
    waveName: "r",
    description: "regular fast ventricular rhythm"
  }]), {
    information: [],
    predicates: [{
      kind: "all"
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 0,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 0,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 15,
          mag: 1,
          upstroke: 0,
          kurtosis: 0.5
        },
        t: {
          radius: 0,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["ACS"],
  diagnosis: "Inferior STEMI",
  explanation: "ST segment elevation in leads II, III and aVF",
  rate: "default",
  axis: "default",
  irregular: false,
  changes: [{
    information: [{
      waveName: "t",
      description: "ST elevation"
    }],
    predicates: [{
      kind: "lead",
      leads: ["II", "III", "aVF", "Rhythm"]
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 5,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 70,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["ACS"],
  diagnosis: "Septal STEMI",
  explanation: "ST segment elevation in leads V1 and V2",
  rate: "default",
  axis: "default",
  irregular: false,
  changes: [{
    information: [{
      waveName: "t",
      description: "ST elevation"
    }],
    predicates: [{
      kind: "lead",
      leads: ["V1", "V2"]
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 5,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: -2,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 70,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["ACS"],
  diagnosis: "Lateral STEMI",
  explanation: "ST segment elevation in leads I and aVL",
  rate: "default",
  axis: "default",
  irregular: false,
  changes: [{
    information: [{
      waveName: "t",
      description: "ST elevation"
    }],
    predicates: [{
      kind: "lead",
      leads: ["I", "aVL"]
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 5,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 3,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 70,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["ACS"],
  diagnosis: "Anterior STEMI",
  explanation: "ST segment elevation in leads V3 and V4",
  rate: "default",
  axis: "default",
  irregular: false,
  changes: [{
    information: [{
      waveName: "t",
      description: "ST elevation"
    }],
    predicates: [{
      kind: "lead",
      leads: ["V3", "V4"]
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 5,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 70,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["Rhythm", "Rate"],
  diagnosis: "Atrial Flutter",
  explanation: "Regular fast rate, sawtooth atrial baseline",
  rate: 300,
  axis: "default",
  irregular: false,
  changes: [labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }, {
    kind: "startRepeat",
    start: 0,
    repeat: 3
  }], [{
    waveName: "r",
    description: "Conduction every third p-wave"
  }]), labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }, {
    kind: "startRepeat",
    start: 2,
    repeat: 3
  }], [{
    waveName: "p",
    description: "Saw tooth atrial baseline"
  }]), {
    information: [],
    predicates: [{
      kind: "startRepeat",
      start: 0,
      repeat: 3
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 0.5
        },
        pr: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }, {
    information: [],
    predicates: [{
      kind: "startRepeat",
      start: 1,
      repeat: 3
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 0.5
        },
        pr: {
          radius: 0,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }, {
    information: [],
    predicates: [{
      kind: "startRepeat",
      start: 2,
      repeat: 3
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 0.5
        },
        pr: {
          radius: 0,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["Rhythm"],
  diagnosis: "Moibtz I Second Degree Heart Block",
  explanation: "Progressive Lengthening of the PR interval",
  rate: "default",
  axis: "default",
  irregular: false,
  changes: [labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }, {
    kind: "startRepeat",
    start: 0,
    repeat: 4
  }], [{
    waveName: "pr",
    description: "first"
  }]), labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }, {
    kind: "startRepeat",
    start: 1,
    repeat: 4
  }], [{
    waveName: "pr",
    description: "second"
  }]), labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }, {
    kind: "startRepeat",
    start: 2,
    repeat: 4
  }], [{
    waveName: "pr",
    description: "third"
  }]), labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }, {
    kind: "startRepeat",
    start: 3,
    repeat: 4
  }], [{
    waveName: "r",
    description: "gone"
  }]), {
    information: [],
    predicates: [{
      kind: "startRepeat",
      start: 1,
      repeat: 4
    }],
    parameters: {
      start: -25,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 25,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }, {
    information: [],
    predicates: [{
      kind: "startRepeat",
      start: 2,
      repeat: 4
    }],
    parameters: {
      start: -50,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 50,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }, {
    information: [],
    predicates: [{
      kind: "startRepeat",
      start: 3,
      repeat: 4
    }],
    parameters: {
      start: -75,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 75,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["Rate"],
  diagnosis: "Sinus Tachycardia",
  explanation: "Tachycardia with normal qrst complexes",
  rate: 120,
  axis: "default",
  irregular: false,
  changes: [{
    information: [{
      waveName: "r",
      description: "fast"
    }],
    predicates: [{
      kind: "lead",
      leads: ["Rhythm"]
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["Rhythm"],
  diagnosis: "Atrial Fibrillation",
  explanation: "Irregularly irregular rhythm with absent p-waves",
  rate: "default",
  axis: "default",
  irregular: true,
  changes: [labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }], [{
    waveName: "p",
    description: "absent"
  }]), {
    information: [],
    predicates: [{
      kind: "all"
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 1,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        t: {
          radius: 1,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }]
}, //--------------------------------------------------------------------------------------
{
  topics: ["Rhythm"],
  diagnosis: "Ventricular Fibrillation",
  explanation: "Irregular broad complexes",
  rate: 450,
  axis: "default",
  irregular: true,
  changes: [labelChange([{
    kind: "lead",
    leads: ["Rhythm"]
  }, {
    kind: "startRepeat",
    start: 10,
    repeat: 10
  }], [{
    waveName: "r",
    description: "Irregular, ventricular rhythm"
  }]), {
    information: [],
    predicates: [{
      kind: "all"
    }],
    parameters: {
      start: 0,
      waves: {
        p: {
          radius: 0,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        pr: {
          radius: 0,
          mag: 1,
          upstroke: 0,
          kurtosis: 1
        },
        r: {
          radius: 10,
          mag: 0.5,
          upstroke: 0,
          kurtosis: 0.4
        },
        t: {
          radius: 0,
          mag: 0,
          upstroke: 0,
          kurtosis: 1
        }
      }
    }
  }]
}];

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

/***/ }),

/***/ "./src/components/ECGPage/newECGtings/ECGFunctions.tsx":
/*!*************************************************************!*\
  !*** ./src/components/ECGPage/newECGtings/ECGFunctions.tsx ***!
  \*************************************************************/
/*! exports provided: randomVal, qualifyHR, qualifyAxis, qualifyRhythm, renderLead, waveDuration, determinePointsOfInterest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVal", function() { return randomVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qualifyHR", function() { return qualifyHR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qualifyAxis", function() { return qualifyAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qualifyRhythm", function() { return qualifyRhythm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLead", function() { return renderLead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waveDuration", function() { return waveDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinePointsOfInterest", function() { return determinePointsOfInterest; });
/* harmony import */ var _ECGTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECGTypes */ "./src/components/ECGPage/newECGtings/ECGTypes.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const randomVal = (min, max) => Math.floor(min + Math.random() * (max - min));
const qualifyHR = hr => {
  if (hr < 60) return "Bradycardic";
  if (hr > 100) return "Tachycardic";else return "Normal";
};
const qualifyAxis = axis => {
  if (axis < -30) return "Left Axis Deviation";
  if (axis > 90) return "Right Axis Deviation";else return "Normal";
};
const qualifyRhythm = r => {
  if (r === 'r') return "Regular";
  return "Irregularly Irregular";
};

const bump = (pos, mag, kurtosis, upstroke) => {
  if (pos < 0) return mag * Math.pow(Math.E, -1 * Math.pow(kurtosis * pos, 2)) + upstroke;else return (mag + upstroke) * Math.pow(Math.E, -1 * Math.pow(kurtosis * pos, 2));
};

const renderLead = ({
  start,
  sampleCount,
  row,
  events
}) => {
  const fullLead = events.reduce((signal, event) => {
    // add each component to signal
    Object.entries(event.parameters.waves).reduce((offset, [_, {
      radius,
      mag,
      kurtosis,
      upstroke
    }]) => {
      for (let i = offset; i < offset + 2 * radius; i++) {
        signal[i] += bump(i - offset - radius, mag, kurtosis, upstroke);
      }

      return offset + 2 * radius;
    }, Math.floor(event.parameters.start));
    return signal;
  }, noisyBackground());
  return fullLead.slice(start, start + sampleCount);
};

const noisyBackground = () => {
  return Array(_ECGTypes__WEBPACK_IMPORTED_MODULE_0__["constants"].sampleCount).fill(0).reduce(({
    prevNoise,
    arr
  }, _) => {
    return {
      prevNoise: prevNoise + 0.4 * (Math.random() - 0.5) - (Math.random() * 0.0099 + 0.001) * prevNoise,
      arr: arr.concat([prevNoise])
    };
  }, {
    prevNoise: 0,
    arr: []
  }).arr;
};

const waveDuration = waves => {
  const waveParamEntries = Object.entries(waves);
  return waveParamEntries.reduce((acc, [_, settings]) => acc + 2 * settings.radius, 0);
};

const determinePosition = (waveName, parameters) => {
  const waveEntries = Object.entries(parameters.waves);
  return waveEntries.reduce(({
    pos,
    complete
  }, [wn, {
    radius
  }]) => {
    if (complete) return {
      pos,
      complete
    };
    if (waveName === wn) return {
      pos: pos + radius,
      complete: true
    };
    return {
      pos: pos + 2 * radius,
      complete: false
    };
  }, {
    pos: parameters.start - 25,
    complete: false
  }).pos; //need to figure out why -25????
};

const determinePointsOfInterest = (leads, scaleFactor, isoelectrics) => {
  // iterate through events and coallate/transform detail info
  const leadEntries = Object.entries(leads);
  return leadEntries.reduce((acc, [_, leadDetail]) => {
    leadDetail.events.forEach(event => {
      event.information.forEach(info => {
        const waveStart = determinePosition(info.waveName, event.parameters);

        if (waveStart > leadDetail.start && waveStart < leadDetail.start + leadDetail.sampleCount) {
          const infoPos = {
            x: waveStart * scaleFactor,
            y: isoelectrics[leadDetail.row] + 10
          };
          acc.push({
            infoPos,
            description: info.description
          });
        }
      });
    });
    return acc;
  }, []);
};

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

/***/ }),

/***/ "./src/components/ECGPage/newECGtings/ECGGen2.tsx":
/*!********************************************************!*\
  !*** ./src/components/ECGPage/newECGtings/ECGGen2.tsx ***!
  \********************************************************/
/*! exports provided: generateECG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateECG", function() { return generateECG; });
/* harmony import */ var _ECGDiagnoses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECGDiagnoses */ "./src/components/ECGPage/newECGtings/ECGDiagnoses.tsx");
/* harmony import */ var _ECGTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECGTypes */ "./src/components/ECGPage/newECGtings/ECGTypes.tsx");
/* harmony import */ var _ECGFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECGFunctions */ "./src/components/ECGPage/newECGtings/ECGFunctions.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



 // Master Plan
// first somehow collate the necessary changes form selected topics into list of list of signal parameters
// ---- randomly choose a subset of diagnoses using teh user seleccted topics
// ---- compile the chnages specified by these diangoses into a set of ecgEvents
// --------- create a template with the rate rhythm and axis (dedicated createTemplate function)
// -------------- create a master series of events over 5000 samples
// -------------- take chunks of this master strip for each lead (OVERLAP the boundaries!!!)
// --------- iterate through the events in this template and modify individual eventsParameters using query matching
// --------- we could set a percedence at the level of queries denoting the order of application (enables fancy things like mobitz)
// --------- iterate through events converting these parameters to signals (old generate ecg function)
// ---- pass to sketch :-)
// baaaad bobundary problem waaaaaah
// SOLUTION WHAAAAAT just had an awesome epiphany momnet, the OVERLAP thing above tehe
// interesting NB ==> durations of segmetns and interval DO NOT change between leads, only voltage changes do (obvious but important)
// overlapping events ==> include teh events startIdx, fold over the events passing the array to the geenrate function each time (i.e allow overwriting)

const generateECG = topics => {
  const {
    scaleFactor,
    isoelectrics
  } = _ECGTypes__WEBPACK_IMPORTED_MODULE_1__["constants"];
  const diagnosis = Object(_ECGDiagnoses__WEBPACK_IMPORTED_MODULE_0__["retrieveDiagnoses"])(topics);
  const eventCount = Math.floor(diagnosis.rate / 6);
  const irregularityOffsets = Array(eventCount).fill(0).map(_ => diagnosis.irregular ? Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(-100, 100) : 0); // identity wave parameters need to be the same for *every event*

  const identityParameters = generateIdentityWaves();
  const leadEntries = _ECGTypes__WEBPACK_IMPORTED_MODULE_1__["leadDetailEntries"].map(([lead, leadDetail]) => {
    return [lead, {
      start: leadDetail.startIdx,
      sampleCount: leadDetail.sampleCount,
      row: leadDetail.row,
      events: Array(eventCount).fill(0).map((_, eventIdx) => {
        // position of each pwave dependent only upon the evetn count and the iregularity offset
        const offset = irregularityOffsets[eventIdx] + eventIdx * 5000 / eventCount;
        const axisFactor = Math.cos((leadDetail.phase - 80) * (22 / 7) / 180);
        const identityEvent = createIdentityEvent(identityParameters, offset, axisFactor);
        return createEvent(lead, eventIdx, diagnosis, identityEvent);
      })
    }];
  });
  console.log(leadEntries);
  const leads = Object.fromEntries(leadEntries);
  return {
    signal: [[leads.I, leads.aVR, leads.V1, leads.V4], [leads.II, leads.aVL, leads.V2, leads.V5], [leads.III, leads.aVF, leads.V3, leads.V6], [leads.Rhythm]].map(row => row.map(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["renderLead"]).flat()),
    pointsOfInterest: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["determinePointsOfInterest"])(leads, scaleFactor, isoelectrics),
    explanation: diagnosis.explanation,
    answered: false,
    sections: [{
      label: "Rate",
      correct: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["qualifyHR"])(diagnosis.rate),
      selected: "unselected",
      options: _ECGTypes__WEBPACK_IMPORTED_MODULE_1__["constants"].rateOptions
    }, {
      label: "Rhythm",
      correct: diagnosis.irregular ? "Irregular" : "Regular",
      selected: "unselected",
      options: _ECGTypes__WEBPACK_IMPORTED_MODULE_1__["constants"].rhythmOptions
    }, {
      label: "Axis",
      correct: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["qualifyAxis"])(diagnosis.axis),
      selected: "unselected",
      options: _ECGTypes__WEBPACK_IMPORTED_MODULE_1__["constants"].axisOptions
    }, {
      label: "Diagnosis",
      correct: diagnosis.diagnosis,
      selected: "unselected",
      options: _ECGTypes__WEBPACK_IMPORTED_MODULE_1__["constants"].diagnosisOptions
    }]
  };
}; // just had a great idea
// each change within a diganosis could *scale* a randomly generated event
// each  diagnosis could then eb summed to the null event

const createEvent = (lead, eventIdx, diagnosis, identityEvent) => {
  // use each change to scale the identity event
  return diagnosis.changes.reduce((eventProduct, change) => {
    return !resolvePredicates(lead, eventIdx, change.predicates) ? eventProduct : {
      information: eventProduct.information.concat(change.information),
      parameters: {
        start: eventProduct.parameters.start + change.parameters.start,
        waves: mergeWaveParameters(eventProduct.parameters.waves, change.parameters.waves)
      }
    };
  }, identityEvent);
};

const resolvePredicates = (lead, eventIdx, predicates) => {
  return predicates.reduce((flag, predicate) => {
    if (predicate.kind === "startRepeat") return flag && (eventIdx - predicate.start) % predicate.repeat === 0;
    if (predicate.kind === "lead") return flag && predicate.leads.includes(lead);
    if (predicate.kind === "all") return flag && true;
    return false;
  }, true);
};

const mergeWaveParameters = (oldWaves, newWaves) => {
  const waveParamEntries = Object.entries(newWaves);
  return waveParamEntries.reduce((waves, [waveLetter, settings]) => {
    const settingsEntries = Object.entries(settings);
    settingsEntries.forEach(([setting, value]) => waves[waveLetter][setting] *= value);
    return waves;
  }, oldWaves);
};

const generateIdentityWaves = () => {
  return {
    p: {
      radius: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(20, 50),
      mag: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(2, 10),
      upstroke: 0.1,
      kurtosis: 0.1
    },
    pr: {
      radius: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(1, 3),
      mag: 0,
      upstroke: 0.1,
      kurtosis: 0.1
    },
    r: {
      radius: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(5, 10),
      mag: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(20, 50),
      upstroke: 0.1,
      kurtosis: 0.1
    },
    t: {
      radius: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(30, 80),
      mag: Object(_ECGFunctions__WEBPACK_IMPORTED_MODULE_2__["randomVal"])(5, 15),
      upstroke: 0.1,
      kurtosis: 0.06
    }
  };
};

const generateNullWaves = () => {
  return {
    p: {
      radius: 0,
      mag: 0,
      upstroke: 0,
      kurtosis: 0
    },
    pr: {
      radius: 0,
      mag: 0,
      upstroke: 0,
      kurtosis: 0
    },
    r: {
      radius: 0,
      mag: 0,
      upstroke: 0,
      kurtosis: 0
    },
    t: {
      radius: 0,
      mag: 0,
      upstroke: 0,
      kurtosis: 0
    }
  };
};

const createIdentityEvent = (identityParameters, offset, axisFactor) => {
  const waveParamEntries = Object.entries(identityParameters);
  const newWaves = waveParamEntries.reduce((waves, [waveLetter, settings]) => {
    const settingsEntries = Object.entries(settings);
    settingsEntries.map(([setting, value]) => {
      waves[waveLetter][setting] = (setting === "mag" ? axisFactor : 1) * value;
    });
    return waves;
  }, generateNullWaves());
  return {
    information: [],
    parameters: {
      start: offset,
      waves: newWaves
    }
  };
};

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

/***/ }),

/***/ "./src/components/ECGPage/newECGtings/ECGSketch.tsx":
/*!**********************************************************!*\
  !*** ./src/components/ECGPage/newECGtings/ECGSketch.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-p5 */ "./node_modules/react-p5/build/index.js");
/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ECGTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECGTypes */ "./src/components/ECGPage/newECGtings/ECGTypes.tsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/ECGPage/newECGtings/ECGSketch.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const ECGSketch = props => {
  _s();

  const [selectedPOI, updateSelectedPOI] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => updateSelectedPOI(-1), [props.question]);
  const {
    canvasWidth,
    canvasHeight,
    isoelectrics,
    sampleCount,
    leadDetails
  } = _ECGTypes__WEBPACK_IMPORTED_MODULE_2__["constants"];
  const horizontalLittleSquareCount = 250;
  const verticalLittleSquareCount = 80; // ONLY RENDER WHEN A VIABLE props.question.signal IS AVAILABLE

  if (!props.question.signal.reduce((flag, row) => row && row.length === sampleCount && flag, true) || props.question.signal.length === 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {}, void 0, false);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  const draw = p5 => {
    p5.background(props.theme.background); // draw le markers

    for (let i = 0; i < horizontalLittleSquareCount; i++) {
      const xcoord = i * canvasWidth / horizontalLittleSquareCount;

      if (i % 5 === 0) {
        p5.stroke(props.theme.majorTick);
        p5.strokeWeight(1.5);
        p5.line(xcoord, 0, xcoord, canvasHeight);
      } else {
        p5.stroke(props.theme.minorTick);
        p5.strokeWeight(0.5);
        p5.line(xcoord, 0, xcoord, canvasHeight);
      }
    }

    for (let i = 0; i < verticalLittleSquareCount; i++) {
      const ycoord = i * canvasHeight / verticalLittleSquareCount;

      if (i % 5 === 0) {
        p5.stroke(props.theme.majorTick);
        p5.strokeWeight(1.5);
        p5.line(0, ycoord, canvasWidth, ycoord);
      } else {
        p5.stroke(props.theme.minorTick);
        p5.strokeWeight(0.5);
        p5.line(0, ycoord, canvasWidth, ycoord);
      }
    } // draw le labels


    p5.stroke(props.theme.label);
    p5.strokeWeight(1);

    for (const leadName in leadDetails) {
      const {
        labelPos
      } = leadDetails[leadName];
      p5.text(leadName, labelPos.x, labelPos.y);
    } // watermark


    p5.stroke(props.theme.watermark);
    p5.fill(props.theme.watermark);
    p5.text("MedBakery Ltd\nmedbakery.co.uk", 10, 330);

    if (true) {} // draw le props.question.signals


    isoelectrics.map((iso, row) => {
      p5.fill(0, 0, 0, 0);
      p5.stroke(props.theme.signal);
      p5.beginShape();

      for (let i = 0; i < sampleCount; i++) {
        p5.vertex(i * canvasWidth / sampleCount, iso - props.question.signal[row][i]);
      }

      p5.endShape();
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: {
      textAlign: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        overflow: "scroll",
        display: "inline-block"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        style: {
          position: "relative",
          width: canvasWidth,
          height: canvasHeight,
          overflow: "hidden"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            top: 0,
            left: 0
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_p5__WEBPACK_IMPORTED_MODULE_0___default.a, {
            setup: setup,
            draw: draw
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined), props.question.pointsOfInterest.map((poi, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowUp"], {
          size: idx === selectedPOI ? 20 : 10,
          style: {
            position: "absolute",
            top: poi.infoPos.y,
            left: poi.infoPos.x,
            opacity: idx === selectedPOI ? "1" : "0.5",
            color: idx === selectedPOI ? "green" : "white"
          },
          onClick: () => updateSelectedPOI(idx)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            width: "500px",
            border: "2px solid white",
            position: "absolute",
            left: 250,
            top: 320
          },
          children: selectedPOI === -1 ? "choose a point of interest!" : props.question.pointsOfInterest[selectedPOI].description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, undefined);
};

_s(ECGSketch, "C+eh2jQbywp5f2WnH6Ix3leCeWk=");

_c = ECGSketch;
/* harmony default export */ __webpack_exports__["default"] = (ECGSketch);

var _c;

__webpack_require__.$Refresh$.register(_c, "ECGSketch");

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

/***/ }),

/***/ "./src/components/ECGPage/newECGtings/ECGSketchThemes.tsx":
/*!****************************************************************!*\
  !*** ./src/components/ECGPage/newECGtings/ECGSketchThemes.tsx ***!
  \****************************************************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const WHITE = [255, 255, 255];
const GRAY = [50, 50, 50];
const DEFAULTBLUE = [25, 25, 100];
const YELLOW = [250, 208, 0];
const RED = [255, 150, 150];
const BLACK = [0, 0, 0];
const themes = [{
  name: "default",
  background: DEFAULTBLUE,
  majorTick: GRAY,
  minorTick: DEFAULTBLUE,
  label: YELLOW,
  signal: WHITE,
  watermark: WHITE
}, {
  name: "classic",
  background: WHITE,
  majorTick: RED,
  minorTick: RED,
  label: BLACK,
  signal: BLACK,
  watermark: GRAY
}];

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

/***/ }),

/***/ "./src/components/ECGPage/newECGtings/ECGTypes.tsx":
/*!*********************************************************!*\
  !*** ./src/components/ECGPage/newECGtings/ECGTypes.tsx ***!
  \*********************************************************/
/*! exports provided: constants, leadDetailEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leadDetailEntries", function() { return leadDetailEntries; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const sampleCount = 5000;
const canvasHeight = 350;
const canvasWidth = 1000;
const isoelectrics = [50, 125, 200, 275];
const labelX = [10, 260, 510, 760];
const labelY = isoelectrics.map(iso => iso - 15);
const constants = {
  sampleCount: sampleCount,
  canvasHeight: canvasHeight,
  canvasWidth: canvasWidth,
  scaleFactor: canvasWidth / sampleCount,
  isoelectrics: isoelectrics,
  leadDetails: {
    "I": {
      startIdx: 0,
      sampleCount: 1250,
      row: 0,
      phase: 0,
      labelPos: {
        x: labelX[0],
        y: labelY[0]
      }
    },
    "II": {
      startIdx: 0,
      sampleCount: 1250,
      row: 1,
      phase: 60,
      labelPos: {
        x: labelX[0],
        y: labelY[1]
      }
    },
    "III": {
      startIdx: 0,
      sampleCount: 1250,
      row: 2,
      phase: 120,
      labelPos: {
        x: labelX[0],
        y: labelY[2]
      }
    },
    "aVR": {
      startIdx: 1250,
      sampleCount: 1250,
      row: 0,
      phase: -150,
      labelPos: {
        x: labelX[1],
        y: labelY[0]
      }
    },
    "aVL": {
      startIdx: 1250,
      sampleCount: 1250,
      row: 1,
      phase: -30,
      labelPos: {
        x: labelX[1],
        y: labelY[1]
      }
    },
    "aVF": {
      startIdx: 1250,
      sampleCount: 1250,
      row: 2,
      phase: 90,
      labelPos: {
        x: labelX[1],
        y: labelY[2]
      }
    },
    "V1": {
      startIdx: 2500,
      sampleCount: 1250,
      row: 0,
      phase: 0,
      labelPos: {
        x: labelX[2],
        y: labelY[0]
      }
    },
    "V2": {
      startIdx: 2500,
      sampleCount: 1250,
      row: 1,
      phase: 24,
      labelPos: {
        x: labelX[2],
        y: labelY[1]
      }
    },
    "V3": {
      startIdx: 2500,
      sampleCount: 1250,
      row: 2,
      phase: 48,
      labelPos: {
        x: labelX[2],
        y: labelY[2]
      }
    },
    "V4": {
      startIdx: 3750,
      sampleCount: 1250,
      row: 0,
      phase: 72,
      labelPos: {
        x: labelX[3],
        y: labelY[0]
      }
    },
    "V5": {
      startIdx: 3750,
      sampleCount: 1250,
      row: 1,
      phase: 96,
      labelPos: {
        x: labelX[3],
        y: labelY[1]
      }
    },
    "V6": {
      startIdx: 3750,
      sampleCount: 1250,
      row: 2,
      phase: 120,
      labelPos: {
        x: labelX[3],
        y: labelY[2]
      }
    },
    "Rhythm": {
      startIdx: 0,
      sampleCount: 5000,
      row: 3,
      phase: 60,
      labelPos: {
        x: labelX[0],
        y: labelY[3]
      }
    }
  },
  rhythmOptions: ["Regular", "Irregular"],
  rateOptions: ["Tachycardic", "Bradycardic", "Normal"],
  axisOptions: ["Left Axis Deviation", "Right Axis Deviation", "Normal"],
  diagnosisOptions: ["Inferior STEMI", "Anterior STEMI", "Lateral STEMI", "Septal STEMI", "Ventricular Fibrillation", "Ventricular Tachycardia", "Atrial Flutter", "Atrial Fibrillation", "Moibtz I Second Degree Heart Block", "Sinus Bradycardia", "Sinus Tachycardia"]
};
const leadDetailEntries = Object.entries(constants.leadDetails);

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

/***/ }),

/***/ "./src/components/FinalsPage/Category.tsx":
/*!************************************************!*\
  !*** ./src/components/FinalsPage/Category.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/FinalsPage/Category.tsx";



const Category = props => {
  const workingPath = props.workingPath.concat([props.category.categoryTitle]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    darkMode: darkMode,
    style: {
      marginLeft: `${props.depth * 25}px`
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(OuterDiv, {
      selected: props.category.selected,
      darkMode: darkMode,
      onClick: () => props.handleSelection(workingPath, !props.category.selected),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Title, {
        children: props.category.categoryTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        style: {
          display: "inline-block",
          marginLeft: "10px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ScoreDiv, {
          darkMode: darkMode,
          children: ["Available: ", props.category.totalQuestionCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ScoreDiv, {
          darkMode: darkMode,
          children: ["Answered: ", props.category.answeredQuestionsCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), props.category.subcategories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Category, {
      darkMode: darkMode,
      category: category,
      workingPath: workingPath,
      depth: props.depth + 1,
      handleSelection: props.handleSelection
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 93%;
    max-width: 375px;
    margin-bottom: 20px;
`;
_c2 = Container;
const OuterDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
    background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#1B275E" : "#F6F5F0"};
    color: ${props => props.darkMode ? "white" : "black"};
    margin: 5px 10px 5px 10px;
    border-style: none;
    border-radius: 10px;
    width: 100%;
    padding:0.5%;
    text-align: left;
    &:hover {
        background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#7735FD" : "#FBE9EE"};
    }
`;
_c3 = OuterDiv;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: inline-block;
    margin: 1px 0px 2px 10px;
    font-size: 22px;
`;
_c4 = Title;
const ScoreDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    border-radius: 5px;
    font-size: 10px;
    display: inline-block;
    margin: 5px;
    padding: 5px;
`;
_c5 = ScoreDiv;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "Category");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "OuterDiv");
__webpack_require__.$Refresh$.register(_c4, "Title");
__webpack_require__.$Refresh$.register(_c5, "ScoreDiv");

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

/***/ }),

/***/ "./src/components/FinalsPage/CategoryPage.tsx":
/*!****************************************************!*\
  !*** ./src/components/FinalsPage/CategoryPage.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./src/functions.tsx");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ "./src/components/FinalsPage/Category.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _General_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../General/Title */ "./src/components/General/Title.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/FinalsPage/CategoryPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();










const CategoryPage = props => {
  _s();

  const [selectAll, updateSelectAll] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const [masterCategory, updateMasterCategory] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    categoryTitle: "",
    totalQuestionCount: 0,
    answeredQuestionsCount: 0,
    correctlyAnsweredCount: 0,
    subcategories: [],
    selected: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(SERVER_URL + "/questions/finals/categorylist", {
      token
    }).then(res => {
      updateMasterCategory(res.data); // console.log("msater category", res.data)
    });
  }, []);

  const handleSelection = (path, value) => {
    updateSelectAll(false);
    updateMasterCategory(Object(_functions__WEBPACK_IMPORTED_MODULE_0__["updateCategory"])(masterCategory, path, value));
  }; // goes through master category and populates paths and totals


  const beginSession = () => {
    const paths = Object(_functions__WEBPACK_IMPORTED_MODULE_0__["getPaths"])(masterCategory);
    props.retriveQuestions(paths);
  };

  const handleSelectAll = () => {
    updateSelectAll(!selectAll);
    updateMasterCategory({ ...masterCategory,
      subcategories: masterCategory.subcategories.map(sc => {
        return { ...sc,
          selected: !selectAll
        };
      })
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    style: {
      maxWidth: "800px",
      margin: "auto"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_General_Title__WEBPACK_IMPORTED_MODULE_6__["Title"], {
      children: "Select Your Sauce"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {},
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Button, {
        darkMode: darkMode,
        onClick: handleSelectAll,
        selected: selectAll,
        children: "SelectAll"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Select, {
        darkMode: darkMode,
        onChange: props.handleSessionTypeChange,
        value: props.sessionType,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
          disabled: true,
          selected: true,
          children: " Filter "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
          children: "Unanswered Questions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
          children: "All Questions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CategoryList, {
      children: masterCategory.subcategories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Category__WEBPACK_IMPORTED_MODULE_1__["default"], {
        darkMode: darkMode,
        category: category,
        handleSelection: handleSelection,
        workingPath: [],
        depth: 0
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        textAlign: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/User/Finals/Session",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StartButton, {
          onClick: beginSession,
          children: "Start Cooking"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, undefined);
};

_s(CategoryPage, "uOprF2PgIUlHVAwftCXVzbgl1iw=");

_c = CategoryPage;
/* harmony default export */ __webpack_exports__["default"] = (CategoryPage);
const Select = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].select`
    display: inline-block;
    border-radius: 20px;
    border: none;
    font-size: 10px;
    width: 100px;
    height: 15px;
    margin: 5px 10px;
    text-align: center;
    background-color: ${props => props.darkMode ? "#1B275E" : "#F6F5F0"};
    color: ${props => props.darkMode ? "white" : "black"};
`;
_c2 = Select;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button`
    display: inline-block;
    border-radius: 20px;
    border: none;
    font-size: 10px;
    width: 100px;
    height: 15px;
    margin: 5px 10px;
    text-align: center;
    background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#1B275E" : "#F6F5F0"};
    color: ${props => props.darkMode ? "white" : "black"};
    &:hover {
        background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#7735FD" : "#FBE9EE"};
    }
`;
_c3 = Button;
const CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
`;
_c4 = CategoryList;
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button`
    border-radius: 10px;
    border: none;
    font-size: 15px;
    width: 150px;
    height: 30px;
    background-color: #FAD000;
    color: black;
    margin-top: 30px;
`;
_c5 = StartButton;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "CategoryPage");
__webpack_require__.$Refresh$.register(_c2, "Select");
__webpack_require__.$Refresh$.register(_c3, "Button");
__webpack_require__.$Refresh$.register(_c4, "CategoryList");
__webpack_require__.$Refresh$.register(_c5, "StartButton");

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

/***/ }),

/***/ "./src/components/FinalsPage/FinalsRouter.tsx":
/*!****************************************************!*\
  !*** ./src/components/FinalsPage/FinalsRouter.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LearningPointsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LearningPointsPage */ "./src/components/FinalsPage/LearningPointsPage.tsx");
/* harmony import */ var _TextBookPage_TextBookPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TextBookPage/TextBookPage */ "./src/components/TextBookPage/TextBookPage.tsx");
/* harmony import */ var _FinalsSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FinalsSelector */ "./src/components/FinalsPage/FinalsSelector.tsx");
/* harmony import */ var _LastSessionRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LastSessionRouter */ "./src/components/FinalsPage/LastSessionRouter.tsx");
/* harmony import */ var _General_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../General/Container */ "./src/components/General/Container.tsx");
/* harmony import */ var _General_BackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../General/BackButton */ "./src/components/General/BackButton.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CategoryPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CategoryPage */ "./src/components/FinalsPage/CategoryPage.tsx");
/* harmony import */ var _QuestionPage_QuestionPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../QuestionPage/QuestionPage */ "./src/components/QuestionPage/QuestionPage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/FinalsPage/FinalsRouter.tsx",
    _s = __webpack_require__.$Refresh$.signature();















const FinalsRouter = props => {
  _s();

  const [availableQuestions, updateAvailableQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]);
  const [sessionType, updateSessionType] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("Filter");
  const activeSession = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useLocation"])().pathname === "/User/Finals/Session";

  const handleSessionTypeChange = e => {
    updateSessionType(e.target.value);
  };

  const finishSession = () => {
    const answeredQuestions = availableQuestions.filter(q => q.answered); // if all the fetched available questions are unanswered we must be reviewing questions, do not submit
    // we might need a mmore robust flag for this function

    if (answeredQuestions.length > 0) {
      window.analytics.track({
        userId: "",
        event: "Question session Finished"
      });
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(SERVER_URL + "/users/finishsession", {
        token,
        questions: answeredQuestions
      }).catch(console.log);
    }
  };

  const retriveQuestions = paths => {
    window.analytics.track({
      userId: "",
      event: "questions started"
    });
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(SERVER_URL + "/questions/newquestion", {
      token,
      paths: paths,
      repeatQuestions: sessionType === "All Questions"
    }).then(res => {
      // console.log("we got em", res.data)
      updateAvailableQuestions(res.data);
    }).catch(console.log);
  };

  if (!token) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
    to: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 30
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_General_Container__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    darkMode: darkMode,
    children: [// if we're in active session hide the navigation bar to preveng inapproporate navigation / erasure
    activeSession ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_General_BackButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        darkMode: darkMode,
        path: "/User",
        label: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        style: {
          height: "25px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_FinalsSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
        darkMode: darkMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }, undefined)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
        exact: true,
        path: "/User/Finals",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_CategoryPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
          token,
          SERVER_URL: SERVER_URL,
          darkMode: darkMode,
          retriveQuestions: retriveQuestions,
          handleSessionTypeChange: handleSessionTypeChange,
          sessionType: sessionType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
        path: "/User/Finals/Session",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_QuestionPage_QuestionPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
          SERVER_URL: SERVER_URL,
          token,
          darkMode: darkMode,
          availableQuestions: availableQuestions,
          updateAvailableQuestions: updateAvailableQuestions,
          finishSession: finishSession,
          reviewMode: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
        path: "/User/Finals/LastSession",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_LastSessionRouter__WEBPACK_IMPORTED_MODULE_4__["default"], {
          SERVER_URL: SERVER_URL,
          token,
          darkMode: darkMode,
          reviewMode: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
        path: "/User/Finals/LearningPoints",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_LearningPointsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
          SERVER_URL: SERVER_URL,
          token,
          darkMode: darkMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
        path: "/User/Finals/TextBook",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_TextBookPage_TextBookPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
          darkMode: darkMode,
          SERVER_URL: SERVER_URL,
          token
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, undefined);
};

_s(FinalsRouter, "Ocuy6pSAVfbQaQB2LLtCMzodVkM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useLocation"]];
});

_c = FinalsRouter;
/* harmony default export */ __webpack_exports__["default"] = (FinalsRouter);

var _c;

__webpack_require__.$Refresh$.register(_c, "FinalsRouter");

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

/***/ }),

/***/ "./src/components/FinalsPage/FinalsSelector.tsx":
/*!******************************************************!*\
  !*** ./src/components/FinalsPage/FinalsSelector.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions */ "./src/functions.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/FinalsPage/FinalsSelector.tsx",
    _s = __webpack_require__.$Refresh$.signature();







const FinalsSelector = props => {
  _s();

  const [width, _] = Object(_functions__WEBPACK_IMPORTED_MODULE_3__["useWindowSize"])();
  const [tabs, updateTabs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: "New Session",
    abbreviatedLabel: "New",
    path: "/User/Finals",
    selected: true
  }, {
    label: "Previous Sessions",
    abbreviatedLabel: "Prev",
    path: "/User/Finals/LastSession",
    selected: false
  }, {
    label: "Learning Points",
    abbreviatedLabel: "Learning Pts",
    path: "/User/Finals/LearningPoints",
    selected: false
  }, {
    label: "TextBook",
    abbreviatedLabel: "TextBook",
    path: "/User/Finals/TextBook",
    selected: false
  }]);
  const narrowWindow = width < 700;

  const handleTabSelection = idx => {
    updateTabs(tabs.map((tab, tidx) => {
      return { ...tab,
        selected: idx === tidx
      };
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: {
      textAlign: "center",
      borderBottom: "1px solid grey",
      marginBottom: "30px"
    },
    children: tabs.map((tab, idx) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: tab.path,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Button, {
          selected: tab.selected,
          darkMode: darkMode,
          onClick: () => handleTabSelection(idx),
          narrow: narrowWindow,
          children: narrowWindow ? tab.abbreviatedLabel : tab.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

_s(FinalsSelector, "6iiPXdV0myomzj3pvcF4uwd2qY0=", false, function () {
  return [_functions__WEBPACK_IMPORTED_MODULE_3__["useWindowSize"]];
});

_c = FinalsSelector;
/* harmony default export */ __webpack_exports__["default"] = (FinalsSelector);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    background-color: transparent;
    font-size: ${props => props.narrow ? "12px" : props.selected ? "20px" : "15px"};
    color: ${props => props.selected ? darkMode ? "white" : "black" : "grey"};
    margin-bottom: -1px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.selected ? "grey grey " + props.darkMode ? "#100A28" : "white") : "transparent"};
`;
_c2 = Button;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "FinalsSelector");
__webpack_require__.$Refresh$.register(_c2, "Button");

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

/***/ }),

/***/ "./src/components/FinalsPage/LastSessionRouter.tsx":
/*!*********************************************************!*\
  !*** ./src/components/FinalsPage/LastSessionRouter.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _QuestionPage_QuestionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../QuestionPage/QuestionPage */ "./src/components/QuestionPage/QuestionPage.tsx");
/* harmony import */ var _PreviousSessionsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviousSessionsPage */ "./src/components/FinalsPage/PreviousSessionsPage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/FinalsPage/LastSessionRouter.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const LastSessionRouter = props => {
  _s();

  const [previousSessions, updatePreviousSessions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [selectedSession, updateSelectedSession] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(SERVER_URL + "/users/previoussessions", {
      token
    }).then(res => {
      updatePreviousSessions(res.data);
    }).catch(err => console.log("woopsie! " + err));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/User/Finals/LastSession",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_PreviousSessionsPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        previousSessions: previousSessions,
        darkMode: darkMode,
        updateSelectedSession: updateSelectedSession,
        token,
        SERVER_URL: SERVER_URL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/User/Finals/LastSession/Session",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_QuestionPage_QuestionPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        token,
        SERVER_URL: SERVER_URL,
        availableQuestions: selectedSession,
        darkMode: darkMode,
        updateAvailableQuestions: updateSelectedSession,
        finishSession: () => {},
        reviewMode: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

_s(LastSessionRouter, "DnrnKiu0I2x2Rebk+ReyR8HoxjA=");

_c = LastSessionRouter;
/* harmony default export */ __webpack_exports__["default"] = (LastSessionRouter);

var _c;

__webpack_require__.$Refresh$.register(_c, "LastSessionRouter");

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

/***/ }),

/***/ "./src/components/FinalsPage/LearningPointsPage.tsx":
/*!**********************************************************!*\
  !*** ./src/components/FinalsPage/LearningPointsPage.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _General_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../General/Title */ "./src/components/General/Title.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/FinalsPage/LearningPointsPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();









const LearningPointsPage = props => {
  _s();

  const [learningPointCategories, updateLearningPointCategories] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(SERVER_URL + "/questions/learningpoints", {
      token
    }).then(res => {
      updateLearningPointCategories(res.data);
    });
  }, []);

  const renderLearningPoint = learningPoint => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(InfoDiv, {
        darkMode: darkMode,
        children: [learningPoint.learningPoint, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ScoreDiv, {
            darkMode: darkMode,
            children: ["Attempted: ", learningPoint.totalAttempts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ScoreDiv, {
            darkMode: darkMode,
            children: ["Correct: ", learningPoint.correctAttempts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined);
  };

  const renderLearingPointCategory = (category, idx) => {
    const toggleLearningPoints = () => {
      updateLearningPointCategories(learningPointCategories.map((c, i) => i === idx ? { ...c,
        selected: !c.selected
      } : c));
    };

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(OptionButton, {
        darkMode: darkMode,
        onClick: toggleLearningPoints,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          style: {
            display: "flex",
            justifyContent: "space-between"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            style: {
              textAlign: 'left'
            },
            children: category.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            children: [" ", category.selected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowUp"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 53
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowDown"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 69
            }, undefined), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Explanation, {
          darkMode: darkMode,
          expanded: category.selected,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
            style: {
              padding: 0,
              listStyleType: "none"
            },
            children: category.learningPoints.map(renderLearningPoint)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_General_Title__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      children: " Learning Points "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
      style: {
        padding: 0,
        margin: 0,
        listStyleType: "none"
      },
      children: learningPointCategories.map(renderLearingPointCategory)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(LearningPointsPage, "gmDXxMriUeJ53Qnhf/fxA8ofwY8=");

_c = LearningPointsPage;
/* harmony default export */ __webpack_exports__["default"] = (LearningPointsPage);
const OptionButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    display: block;
    max-width: 800px;
    border-radius: 10px;
    font-size: 15px;
    margin: 20px auto;
    border: none;
    padding: 8px 20px;
    font-family: Proxima;
    color: ${props => props.darkMode ? "white" : "black"};
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0"};
    &:hover {
        background-color: ${props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE"}; 
    }
`;
_c2 = OptionButton;
const Explanation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    background-color: ${props => props.darkMode ? "#0D163C" : "#E6E5E0"};
    border-radius: 10px;
    margin-top: ${props => props.expanded ? "10px" : "0"};
    padding: ${props => props.expanded ? "10px" : 0};
    font-size: 15px;
    max-height: ${props => props.expanded ? "300px" : "0"};
    overflow: ${props => props.expanded ? "scroll" : "hidden"};
    text-align: left;
`;
_c3 = Explanation;
const InfoDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0"};
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
`;
_c4 = InfoDiv;
const ScoreDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    background-color: ${props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE"}; 
    border-radius: 5px;
    font-size: 10px;
    display: inline-block;
    margin: 5px;
    padding: 5px;
`;
_c5 = ScoreDiv;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "LearningPointsPage");
__webpack_require__.$Refresh$.register(_c2, "OptionButton");
__webpack_require__.$Refresh$.register(_c3, "Explanation");
__webpack_require__.$Refresh$.register(_c4, "InfoDiv");
__webpack_require__.$Refresh$.register(_c5, "ScoreDiv");

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

/***/ }),

/***/ "./src/components/FinalsPage/PreviousSessionsPage.tsx":
/*!************************************************************!*\
  !*** ./src/components/FinalsPage/PreviousSessionsPage.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _General_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../General/Title */ "./src/components/General/Title.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/FinalsPage/PreviousSessionsPage.tsx";







const PreviousSessionsPage = props => {
  const createSessionArray = (q, idx) => {
    const correctlyAnsweredSectionCount = q.sections.reduce((acc, s) => acc + (s.correctOption === s.selectedOption ? 1 : 0), 0);
    const percentageCorrect = Math.round(100 * correctlyAnsweredSectionCount / q.sections.length);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(QuestionListItem, {
      darkMode: darkMode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Percentage, {
        darkMode: darkMode,
        children: [percentageCorrect, " %"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(QuestionTitle, {
        darkMode: darkMode,
        children: [" ", idx + 1, ". ", q.categoryPath[q.categoryPath.length - 1], " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Dosset, {
        children: q.sections.map((s, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Pill, {
          darkMode: darkMode,
          correct: s.correctOption === s.selectedOption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 49
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)]
    }, idx, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_animated_css__WEBPACK_IMPORTED_MODULE_3__["Animated"], {
    animationIn: "zoomIn",
    animationOut: "fadeOutDown",
    animationInDuration: 1000,
    animationOutDuration: 1000,
    isVisible: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_General_Title__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      children: "Previous Sessions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), props.previousSessions.length > 0 ? props.previousSessions.map(previousSession => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/User/Finals/LastSession/Session",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(QuestionList, {
        darkMode: darkMode,
        onClick: () => props.updateSelectedSession(previousSession),
        children: previousSession.map(createSessionArray)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }, undefined)) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_General_Title__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      style: {
        color: 'grey'
      },
      children: "Do Some Questions!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined);
};

_c = PreviousSessionsPage;
/* harmony default export */ __webpack_exports__["default"] = (PreviousSessionsPage);
const QuestionList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
    display: flex;
    align-items: center;
    overflow: scroll;
    background-color: ${props => props.darkMode ? "#1b275e" : "#f6f5f0"};
    border-radius: 20px;
    margin: 20px 0;
    padding: 10px;
`;
_c2 = QuestionList;
const QuestionListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: inline-block;
    width: 175px;
    min-width: 175px;
    background-color: ${props => props.darkMode ? "#10132C" : "#F6F0F0"};
    box-shadow: ${props => props.darkMode ? "2px 2px 2px #100A28" : "2px 2px 2px rgba(0, 0, 0, 0.25)"}; 
    text-align: center;
    border-radius: 20px;
    margin: 10px;
    padding: 10px 30px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
_c3 = QuestionListItem;
const QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    text-align: center;
    margin-top: 10px;
    color: ${props => props.darkMode ? "#ffffff" : "#100A28"};
    font: 15px Proxima;
`;
_c4 = QuestionTitle;
const Percentage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    text-align: center;
    margin-top: 20px;
    color: ${props => props.darkMode ? "#ffffff" : "#100A28"};
    font: 35px Champion;
`;
_c5 = Percentage;
const Dosset = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    white-space: wrap;
    margin: 10px auto 0 auto;
    text-align: center;
`;
_c6 = Dosset;
const Pill = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: inline-block;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    margin: 0px 2px;
    background-color: ${props => props.correct ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#A94D53" : "#C6777D"}
`;
_c7 = Pill;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "PreviousSessionsPage");
__webpack_require__.$Refresh$.register(_c2, "QuestionList");
__webpack_require__.$Refresh$.register(_c3, "QuestionListItem");
__webpack_require__.$Refresh$.register(_c4, "QuestionTitle");
__webpack_require__.$Refresh$.register(_c5, "Percentage");
__webpack_require__.$Refresh$.register(_c6, "Dosset");
__webpack_require__.$Refresh$.register(_c7, "Pill");

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

/***/ }),

/***/ "./src/components/General/BackButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/General/BackButton.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/General/BackButton.tsx";





const BackButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: props.path,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Button, {
      darkMode: darkMode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaArrowLeft"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), " ", props.label]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_c = BackButton;
/* harmony default export */ __webpack_exports__["default"] = (BackButton);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
    position: relative;
    top: 0;
    left: 0;
    background-color: transparent;
    color: ${props => props.darkMode ? "grey" : "black"};
    font-size: 12px;
    border: none;
`;
_c2 = Button;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "BackButton");
__webpack_require__.$Refresh$.register(_c2, "Button");

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

/***/ }),

/***/ "./src/components/General/Container.tsx":
/*!**********************************************!*\
  !*** ./src/components/General/Container.tsx ***!
  \**********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    max-width: 1200px;
    width: 80%;
    text-align: left;
    margin: 50px auto;
    padding: 30px 3%;
    background-color:  none;
    border-radius: 20px;
    min-width: 300px;
    background-color: ${props => props.darkMode ? "#100A28" : "#FFFFFF"};
    border: 2.5px solid ${props => props.darkMode ? "#3B2072" : "#FFF4F7"};
    box-shadow: ${props => props.darkMode ? "2px 2px 2px #100A28" : "2px 2px 2px rgba(0, 0, 0, 0.25)"};
`;

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

/***/ }),

/***/ "./src/components/General/Title.tsx":
/*!******************************************!*\
  !*** ./src/components/General/Title.tsx ***!
  \******************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    font: 40px Champion;
    text-align: center;
    padding: 20px;
`;

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

/***/ }),

/***/ "./src/components/HomePage/Dashboard.tsx":
/*!***********************************************!*\
  !*** ./src/components/HomePage/Dashboard.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginLogout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginLogout */ "./src/components/HomePage/LoginLogout.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/HomePage/Dashboard.tsx";




const Dashboard = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: {
      padding: "10% 20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        margin: "0 5%"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_LoginLogout__WEBPACK_IMPORTED_MODULE_1__["Login"], {
        SERVER_URL: SERVER_URL,
        setToken: props.setToken
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        margin: "0 5%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_animated_css__WEBPACK_IMPORTED_MODULE_0__["Animated"], {
        animationIn: "fadeInUp",
        animationOut: "fadeOutDown",
        animationInDuration: 800,
        animationOutDuration: 1000,
        isVisible: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          style: {
            font: "80px Champion",
            lineHeight: "80px",
            margin: "20px 0"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            style: {
              color: "#FAD000"
            },
            children: "Worlds First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          style: {
            font: "80px Champion",
            lineHeight: "80px",
            margin: "10px 0"
          },
          children: "Medical Bakery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_animated_css__WEBPACK_IMPORTED_MODULE_0__["Animated"], {
        animationIn: "fadeInUp",
        animationOut: "fadeOutDown",
        animationInDuration: 2000,
        animationOutDuration: 1000,
        isVisible: true,
        children: "The only resource you will ever knead!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

_c = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

var _c;

__webpack_require__.$Refresh$.register(_c, "Dashboard");

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

/***/ }),

/***/ "./src/components/HomePage/ECGHomePageDemo.tsx":
/*!*****************************************************!*\
  !*** ./src/components/HomePage/ECGHomePageDemo.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./src/types.tsx");
/* harmony import */ var _ECGPage_newECGtings_ECGSketch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ECGPage/newECGtings/ECGSketch */ "./src/components/ECGPage/newECGtings/ECGSketch.tsx");
/* harmony import */ var _ECGPage_ECGResources_ECGSketchThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ECGPage/ECGResources/ECGSketchThemes */ "./src/components/ECGPage/ECGResources/ECGSketchThemes.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ECGPage_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ECGPage/newECGtings/ECGGen2 */ "./src/components/ECGPage/newECGtings/ECGGen2.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/HomePage/ECGHomePageDemo.tsx",
    _s = __webpack_require__.$Refresh$.signature();










// to be fetched from the user
const topics = [{
  "name": "ACS",
  "selected": false,
  "attempts": 0,
  "correct": 0
}, {
  "name": "Rate",
  "selected": false,
  "attempts": 0,
  "correct": 0
}, {
  "name": "Rhythm",
  "selected": false,
  "attempts": 0,
  "correct": 0
}];

const ECGHomePageDemo = props => {
  _s();

  const [question, updateQuestion] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const refreshQuestion = () => updateQuestion(Object(_ECGPage_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_6__["generateECG"])(topics));

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Container, {
    className: "row",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "col-md-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          margin: "60px 10px 0 0",
          font: "70px Champion"
        },
        children: "ECG Trainer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
        children: "Pathological ECGs generated on request. Practice an unlimited number of questions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
        children: ["Have a go with this one! ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaArrowRight"], {
          size: "30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 45
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "col-md-8",
      style: {
        textAlign: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          font: "30px Champion",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px"
        },
        children: " Interpret the ECG! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(RefreshButton, {
        onClick: refreshQuestion,
        children: " Tap me to generate new ECG \uD83D\uDC40 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), question ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ECGPage_newECGtings_ECGSketch__WEBPACK_IMPORTED_MODULE_3__["default"], {
        reviewMode: false,
        question: question,
        theme: _ECGPage_ECGResources_ECGSketchThemes__WEBPACK_IMPORTED_MODULE_4__["themes"][0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 34
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            display: "inline",
            width: "max-content",
            margin: "10px 0",
            font: "20px Champion"
          },
          children: "DDX?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Select, {
          children: _types__WEBPACK_IMPORTED_MODULE_2__["ecgOptions"].ddx.map(title => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 59
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(TrapButton, {
          onClick: () => document.getElementById("loginboi").click(),
          children: " See if you got it right ... "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

_s(ECGHomePageDemo, "ei8HAATNfMUwEkgOZnZR6rM5l+g=");

_c = ECGHomePageDemo;
/* harmony default export */ __webpack_exports__["default"] = (ECGHomePageDemo);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(26, 106, 138, 0.336);
    margin: 20px 0;
    border-radius: 20px;
    width: 100%;
    padding: 10px;
`;
_c2 = Container;
const RefreshButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
    margin-bottom: 20px; 
    width: 275px;
    font: 15px sans-serif;
    border: none;
    border-radius: 10px;
    background: #FAD000;
    -webkit-animation: pulse 3s infinite;
`;
_c3 = RefreshButton;
const TrapButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
    display: inline-block;
    background-color: #FAD000;
    border-radius: 10px;
    border-style: none;
    width: 275px;
    margin: 10px 5px;
`;
_c4 = TrapButton;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].select`
    display: inline-block;
    max-width: 200px;
    margin: 10px 5px;
`;
_c5 = Select;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "ECGHomePageDemo");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "RefreshButton");
__webpack_require__.$Refresh$.register(_c4, "TrapButton");
__webpack_require__.$Refresh$.register(_c5, "Select");

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

/***/ }),

/***/ "./src/components/HomePage/FinalsHomePageDemo.tsx":
/*!********************************************************!*\
  !*** ./src/components/HomePage/FinalsHomePageDemo.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _QuestionPage_Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../QuestionPage/Question */ "./src/components/QuestionPage/Question.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _demoquestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demoquestion */ "./src/components/HomePage/demoquestion.tsx");
/* harmony import */ var _QuestionPage_SectionProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../QuestionPage/SectionProgress */ "./src/components/QuestionPage/SectionProgress.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/HomePage/FinalsHomePageDemo.tsx",
    _s = __webpack_require__.$Refresh$.signature();










const FinalsHomePageDemo = props => {
  _s();

  const [availableQuestions, updateAvailableQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([_demoquestion__WEBPACK_IMPORTED_MODULE_3__["default"]]);
  const [questionIdx, updateQuestionIdx] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const [sectionIdx, updateSectionIdx] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Container, {
    className: "row",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "col-md-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          margin: "60px 10px 0 0",
          font: "70px Champion"
        },
        children: "Question Bank"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
        children: "An extensive collection of practice questions, curated in sections that actually reflect clinical practice."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
        children: ["Get a feel for it ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaArrowRight"], {
          size: "30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "col-md-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          font: "30px Champion",
          textAlign: "center",
          marginBottom: "10px",
          marginTop: "20px"
        },
        children: " Answer the sections! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_QuestionPage_Question__WEBPACK_IMPORTED_MODULE_1__["default"], {
        currentQuestion: availableQuestions[questionIdx],
        sectionIdx: sectionIdx,
        updateSectionIdx: updateSectionIdx,
        updateQuestionIdx: updateQuestionIdx,
        availableQuestions: availableQuestions,
        updateAvailableQuestions: updateAvailableQuestions,
        questionIdx: 0,
        darkMode: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_QuestionPage_SectionProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
        updateSectionIdx: updateSectionIdx,
        canRetreatSection: sectionIdx > 0,
        canProgressSection: sectionIdx < availableQuestions[questionIdx].sections.length - 1,
        renderBackButton: false,
        darkMode: true,
        canSaveAndProgress: false,
        saveAndProgress: () => {}
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined), availableQuestions[questionIdx].sections.length === sectionIdx + 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
        className: "ecgdemo-refresh",
        onClick: () => document.getElementById("loginboi").click(),
        children: "Want some more? ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 27
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_s(FinalsHomePageDemo, "Zr8ZQ02NpWDczWUEp6wnRAuyTiY=");

_c = FinalsHomePageDemo;
/* harmony default export */ __webpack_exports__["default"] = (FinalsHomePageDemo);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(26, 106, 138, 0.336);
    margin: 20px 0;
    border-radius: 20px;
    width: 100%;
    padding: 10px;
`;
_c2 = Container;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "FinalsHomePageDemo");
__webpack_require__.$Refresh$.register(_c2, "Container");

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

/***/ }),

/***/ "./src/components/HomePage/HomePage.tsx":
/*!**********************************************!*\
  !*** ./src/components/HomePage/HomePage.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ "./src/components/HomePage/Dashboard.tsx");
/* harmony import */ var _ECGHomePageDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECGHomePageDemo */ "./src/components/HomePage/ECGHomePageDemo.tsx");
/* harmony import */ var _FinalsHomePageDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FinalsHomePageDemo */ "./src/components/HomePage/FinalsHomePageDemo.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/HomePage/HomePage.tsx";





const HomePage = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        padding: "2%",
        maxWidth: "1400px",
        margin: "auto"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"], {
        setDarkMode: darkMode,
        SERVER_URL: SERVER_URL,
        setToken: props.setToken
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {
      style: {
        marginBottom: "75px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        padding: "2%",
        maxWidth: "1400px",
        margin: "auto"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ECGHomePageDemo__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        padding: "2%",
        maxWidth: "1400px",
        margin: "auto"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FinalsHomePageDemo__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        height: "50px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

__webpack_require__.$Refresh$.register(_c, "HomePage");

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

/***/ }),

/***/ "./src/components/HomePage/LoginLogout.tsx":
/*!*************************************************!*\
  !*** ./src/components/HomePage/LoginLogout.tsx ***!
  \*************************************************/
/*! exports provided: Login, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions */ "./src/functions.tsx");
/* harmony import */ var _images_whitelogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/whitelogo.svg */ "./src/images/whitelogo.svg");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/HomePage/LoginLogout.tsx";







const clientID = "439563851182-mo2cj9djg7f0u19ctnjp1864tdaredkc.apps.googleusercontent.com";
const Login = props => {
  const onSuccess = res => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(SERVER_URL + "/users/googlelogin", {
      token: res.tokenId
    }).then(axres => {
      if (axres.data.success) {
        props.setToken(res.tokenId);
        Object(_functions__WEBPACK_IMPORTED_MODULE_2__["refreshTokenSetup"])(res, props.setToken);
        window.location.href = "/User";
      }
    });
  };

  const onFailure = res => {
    console.log("err: ", res);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLogin"], {
    clientId: clientID,
    buttonText: "LOGIN",
    onSuccess: onSuccess,
    onFailure: onFailure,
    isSignedIn: true,
    render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(LoginButton, {
      onClick: props.onClick,
      disabled: props.disabled,
      id: "loginboi",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
        src: _images_whitelogo_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
        height: "150px",
        className: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          fontSize: "30px",
          marginTop: "30px"
        },
        children: "LOGIN / SIGNUP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};
_c = Login;
const LoginButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button`
    display: block;
    height: 280px;
    width: 300px;
    margin: 10px auto;
    padding: 0;
    font-size: 16px;
    border: 2px solid #FAD000;
    border-radius: 10px;
    background-color: transparent;
    color: #FAD000;
    &:hover {
        background-color: #FAD000;
        color: black;
    }
`;
_c2 = LoginButton;
const Logout = props => {
  const onSuccess = () => {
    console.log("we logged out!");
    props.setToken("");
    window.location.href = '/';
    window.analytics.track({
      userId: clientID,
      event: "User Logged out"
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLogout"], {
    clientId: clientID,
    buttonText: "LOGOUT",
    onLogoutSuccess: onSuccess,
    render: prps => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(LogoutButton, {
      darkMode: darkMode,
      onClick: prps.onClick,
      disabled: prps.disabled,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSignOutAlt"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }, undefined), " \xA0 Logout \xA0"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, undefined);
};
_c3 = Logout;
const LogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button`
    display: block;
    border: 2px solid ${props => props.darkMode ? "#3B2072" : "rgba(171, 0, 250, 0.2)"};
    border-radius: 20px;
    background-color: ${props => props.darkMode ? "#100A28" : "#FFF4F7"};
    color: ${props => props.darkMode ? "white" : "black"};
    width: 40px;
    height: 40px;
    padding: 5px 12px;
    margin: 10px 0;
    overflow: hidden;
    white-space: nowrap;
    box-shadow: ${props => props.darkMode ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.7)"};
    &:hover {
        width: max-content;
    }
`;
_c4 = LogoutButton;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "Login");
__webpack_require__.$Refresh$.register(_c2, "LoginButton");
__webpack_require__.$Refresh$.register(_c3, "Logout");
__webpack_require__.$Refresh$.register(_c4, "LogoutButton");

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

/***/ }),

/***/ "./src/components/HomePage/demoquestion.tsx":
/*!**************************************************!*\
  !*** ./src/components/HomePage/demoquestion.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const example = {
  "_id": "61f016c5d0288b912f24f3bd",
  "categoryPath": ["Haematology"],
  "questionIdx": 5,
  "sections": [{
    "stem": "A 23-year-old asylum seeker from Yemen is admitted to the hospital complaining of fever, shortness of breath, a wheeze, and severe chest pain. He describes having repeated infections and states that his younger brother used to have episodes of extreme pain and sadly passed away due to meningitis.  On examination, he has a fever, respiratory rate of 28, bi-basal crackles throughout his lung fields, and a normal abdominal exam. A chest x-ray shows bilateral infiltrations.",
    "question": "What is the most likely diagnosis?",
    "options": ["Vaso-occlusive crisis", "Acute chest syndrome", "Sequestration crisis", "Haemolytic crisis", "Aplastic anaemia"],
    "explanations": ["An isolated vaso-occlusive crisis is more characterised by bone, back and abdominal pain, and often does not involve the chest.", "Correct. This occurs due to an inflammatory response to sickle cells occluding pulmonary vessels. The inflammation and occlusion lead to hypoxic vasoconstriction, hypoxia and further sickling. This is extremely difficult to distinguish from pneumonia.", "This is most commonly seen in children and not adults. Furthermore, we would expect a large spleen on palpation. ", "Marked features of anaemia and haemolysis (jaundice, dark urine) are not present in the history or examination.", "Aplastic anaemia often results following a viral infection, especially parvovirus B19. There is no history here of a “slapped cheek appearance” or coryza, which could hint towards a passing viral infection."],
    "correctOption": 1,
    "selectedOption": -1,
    "percentages": [0, 0, 0, 0, 0],
    "learningPointIdxs": [15]
  }, {
    "stem": "",
    "question": "His Hb is 93 (normal: 135-180g/L), oxygen saturation at 92%. His heart rate is 110, and his blood pressure is 95/65mmHg. What is his immediate management plan?",
    "options": ["IV fluids and oxygen", "Packed red cell transfusion, oxygen, broad-spectrum antibiotics, and analgesia", "Hydroxycarbamide", "Continuous positive airway pressure", "Bi-level positive airway pressure"],
    "explanations": ["The patient has acute chest syndrome and marked anaemia, thus, needs a red cell transfusion and oxygen. Since it is extremely difficult to distinguish between this and pneumonia, broad-spectrum antibiotics should also be prescribed. Analgesia is needed for the pain. IV fluid alone will not tackle all of the following features.", "Correct. The patient has acute chest syndrome and marked anaemia, thus, needs a red cell transfusion and oxygen. Since it is extremely difficult to distinguish between this and pneumonia, broad-spectrum antibiotics should also be prescribed. Analgesia is needed for the pain.", "Hydroxycarbamide forms part of the management for chronic sickle cell disease. It works by increasing the available levels of foetal haemoglobin (HbF) via the means of increased gamma chain production. The production of HbF leads to fewer painful episodes due to less sickling.", "CPAP Is not used in the treatment of acute chest syndrome. It may be used in heart failure or obstructive sleep apnoea. ", "Bi-PAP is not used in the treatment of acute chest syndrome. It may be used for non-invasive ventilation in patients with COPD."],
    "correctOption": 1,
    "selectedOption": -1,
    "percentages": [0, 0, 0, 0, 0],
    "learningPointIdxs": [19]
  }, {
    "stem": "",
    "question": "He wants a formal diagnosis of sickle cell anaemia. Which of the following investigations plays no role in confirming his diagnosis?",
    "options": ["Genetic testing", "Haemoglobin electrophoresis", "Blood film", "Haemoglobin solubility testing ", "Osmotic fragility testing"],
    "explanations": ["Genetic testing is one of the first-line investigations to confirm the diagnosis.", "Haemoglobin electrophoresis can be offered in the absence of genetic testing and will show a lack of HbA with excessive HbS.", "Blood film is useful in the diagnosis of sickle cell disease and may show sickle cells as well as features of hyposplenism. ", "Haemoglobin solubility testing is used in the diagnosis of sickle cell disease. When put in the reducing solution, the sample clumps up due to sickling.", "Correct. This is the investigation for hereditary spherocytosis."],
    "correctOption": 4,
    "selectedOption": -1,
    "percentages": [0, 0, 0, 0, 0],
    "learningPointIdxs": [18]
  }],
  "answered": false,
  "chat": [],
  "notes": "",
  "timeLastAttempted": 0,
  "timeLastUpdated": 1642636800000,
  "type": "active"
};
/* harmony default export */ __webpack_exports__["default"] = (example);

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

/***/ }),

/***/ "./src/components/QuestionPage/Chat.tsx":
/*!**********************************************!*\
  !*** ./src/components/QuestionPage/Chat.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions */ "./src/functions.tsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/Chat.tsx",
    _s = __webpack_require__.$Refresh$.signature();










const ChatModal = props => {
  _s();

  const [chat, updateChat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [email, updateEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [questionIdxToBeDeleted, updateIdxToBeDeleted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const [userMessage, updateUserMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [modalIsOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('#root');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_functions__WEBPACK_IMPORTED_MODULE_3__["getEmailFromToken"])(token).then(email => updateEmail(email));
  }, [props.questionIdx]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.questionIdx !== -1) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(SERVER_URL + "/questions/getchat", {
        token,
        questionIdx: props.questionIdx
      }).then(res => updateChat(res.data)).catch(console.log);
    }
  }, [props.questionIdx]);

  const handleDeleteRequest = idx => {
    setIsOpen(true);
    updateIdxToBeDeleted(idx);
  };

  const deleteSelectedQuestion = () => {
    if (questionIdxToBeDeleted === -1) return;
    const newChat = chat.filter((v, i) => questionIdxToBeDeleted !== i);
    updateChat(newChat);
    submitChat(newChat);
    updateIdxToBeDeleted(-1);
    setIsOpen(false);
  };

  const submitChat = chat => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(SERVER_URL + "/questions/updatechat", {
      token,
      questionIdx: props.questionIdx,
      chat: chat
    }).catch(console.log);
    updateUserMessage("");
  };

  const handleMessageEntry = e => {
    updateUserMessage(e.target.value);
  };

  const handleSubmitMessage = () => {
    const newChat = [{
      email,
      message: userMessage
    }].concat(chat);
    updateChat(newChat);
    submitChat(newChat);
    updateUserMessage("");
  };

  const renderMessage = (message, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: [email === message.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTrashAlt"], {
        color: "red",
        style: {
          marginRight: "10px"
        },
        onClick: () => handleDeleteRequest(idx)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
        style: {
          marginRight: "10px",
          color: "#9EA2B1"
        },
        children: [email === message.email ? "you" : "anon", ":"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
        style: {
          color: darkMode ? "white" : "black"
        },
        children: message.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Container, {
    darkMode: darkMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        marginBottom: "20px",
        textAlign: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(NewMessageInput, {
        darkMode: darkMode,
        value: userMessage,
        onChange: handleMessageEntry,
        placeholder: "What's on your mind..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(NewMessageSubmit, {
        darkMode: darkMode,
        onClick: handleSubmitMessage,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ConfirmModal, {
      isOpen: modalIsOpen,
      onRequestClose: () => setIsOpen(false),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          textAlign: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: {
            color: "white"
          },
          children: " Delete these messages? "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Button, {
          onClick: deleteSelectedQuestion,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Button, {
          onClick: () => setIsOpen(false),
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ChatBox, {
      darkMode: darkMode,
      children: chat.map(renderMessage)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }, undefined);
};

_s(ChatModal, "fUeO1QNV9uWw0NH5yYVoSFYOKyw=");

_c = ChatModal;
/* harmony default export */ __webpack_exports__["default"] = (ChatModal);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#9B8DD8"};
    opacity: 0.7;
    border-radius: 10px;
    border-top-left-radius: 0;
    font-family: Proxima;
    margin: 0 auto 30px auto;
    padding: 20px 10px;
    text-align: left;
    min-height: 275px;
`;
_c2 = Container;
const NewMessageInput = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].textarea`
    display: inline-block;
    padding-left: 10px;
    vertical-align: bottom;
    width: 70%;
    height: 25px;
    border-radius:  10px 0 0 10px;
    border: none;
    outline: none;
    background-color: ${props => props.darkMode ? "#10132C" : "#FFFFFF"};
    color: ${props => props.darkMode ? "white" : "black"}
`;
_c3 = NewMessageInput;
const NewMessageSubmit = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
    border-radius: 0 10px 10px 0;
    border-style: none;
    background-color: ${props => props.darkMode ? "#FAD000" : "#3B2072"};
    margin-top: -20px;
    width: 60px;
    height: 24px;
    font-size: 13px;
    color: black;
`;
_c4 = NewMessageSubmit;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-style: none;
    background-color: #3B2072;
    width: 100px;
    color: white;
    margin: 10px;
`;
_c5 = Button;
const ConfirmModal = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a)`
    background-color: rgb(27, 39, 94);
    margin: 100px auto;
    max-width: 500px;
    height: max-content;
    border-radius: 30px;
    padding: 20px;
    z-index: 1200;
`;
_c6 = ConfirmModal;
const ChatBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
    width: 100%;
    min-height: 200px;
    padding: 20px;
    height: max-content;
    border-radius: 10px;
    background-color: ${props => props.darkMode ? "#10132C" : "#FFFFFF"};
    color: ${props => props.darkMode ? "white" : "black"};
`;
_c7 = ChatBox;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "ChatModal");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "NewMessageInput");
__webpack_require__.$Refresh$.register(_c4, "NewMessageSubmit");
__webpack_require__.$Refresh$.register(_c5, "Button");
__webpack_require__.$Refresh$.register(_c6, "ConfirmModal");
__webpack_require__.$Refresh$.register(_c7, "ChatBox");

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

/***/ }),

/***/ "./src/components/QuestionPage/Notes.tsx":
/*!***********************************************!*\
  !*** ./src/components/QuestionPage/Notes.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/Notes.tsx",
    _s = __webpack_require__.$Refresh$.signature();






const Notes = props => {
  _s();

  const [notes, updateNotes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [editMode, updateEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // incase we're on the default question
    if (props.questionIdx !== -1) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(SERVER_URL + "/questions/getnotes", {
        token,
        questionIdx: props.questionIdx
      }).then(res => updateNotes(res.data));
    }
  }, [props.questionIdx]);

  const handleEdit = e => {
    updateNotes(e.target.value);
  };

  const submitNotes = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(SERVER_URL + "/questions/updatenotes", {
      token,
      questionIdx: props.questionIdx,
      notes: notes
    });
    updateEditMode(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Container, {
    darkMode: darkMode,
    children: [editMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Button, {
      onClick: submitNotes,
      children: " Save "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Button, {
      onClick: () => updateEditMode(true),
      className: "notesbutton",
      children: " Edit "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }, undefined), editMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(TextArea, {
      darkMode: darkMode,
      value: notes,
      onChange: handleEdit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(TextArea, {
      darkMode: darkMode,
      value: notes,
      readOnly: true,
      onClick: () => updateEditMode(true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 23
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined);
};

_s(Notes, "iJEvbtxQRHBotVe+/GGA2d7gVIo=");

_c = Notes;
/* harmony default export */ __webpack_exports__["default"] = (Notes);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#9B8DD8"};
    opacity: 0.7;
    margin: 0 auto 30px auto;
    text-align: left;
    border-radius: 10px;
    border-top-left-radius: 0;
    padding: 20px;
`;
_c2 = Container;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-style: none;
    background-color: #3B2072;
    width: 100px;
    color: white;
`;
_c3 = Button;
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea`
    width: 100%;
    min-height: 200px;
    padding: 20px;
    height: max-content;
    border-radius: 10px;
    border-top-left-radius: 0;
    border: none;
    background-color: ${props => props.darkMode ? "#10132C" : "#FFFFFF"};
    color: ${props => props.darkMode ? "white" : "black"};
`;
_c4 = TextArea;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "Notes");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Button");
__webpack_require__.$Refresh$.register(_c4, "TextArea");

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

/***/ }),

/***/ "./src/components/QuestionPage/NotesAndChat.tsx":
/*!******************************************************!*\
  !*** ./src/components/QuestionPage/NotesAndChat.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat */ "./src/components/QuestionPage/Chat.tsx");
/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notes */ "./src/components/QuestionPage/Notes.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/NotesAndChat.tsx",
    _s = __webpack_require__.$Refresh$.signature();







const NotesAndChat = props => {
  _s();

  const [notesVisible, updateNotesVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UtilityButton, {
      selected: notesVisible,
      darkMode: darkMode,
      onClick: () => updateNotesVisible(true),
      children: "Notes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UtilityButton, {
      selected: !notesVisible,
      darkMode: darkMode,
      onClick: () => updateNotesVisible(false),
      children: "Chat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), notesVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Notes__WEBPACK_IMPORTED_MODULE_2__["default"], {
      darkMode: darkMode,
      token,
      SERVER_URL: SERVER_URL,
      questionIdx: props.currentQuestion.questionIdx
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 26
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Chat__WEBPACK_IMPORTED_MODULE_1__["default"], {
      token,
      SERVER_URL: SERVER_URL,
      questionIdx: props.currentQuestion.questionIdx,
      darkMode: darkMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

_s(NotesAndChat, "0gFmAZ6UwAob4kLmSRl1mtB52Z0=");

_c = NotesAndChat;
/* harmony default export */ __webpack_exports__["default"] = (NotesAndChat);
const UtilityButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button`
    display: inline-block;
    opacity: ${props => props.selected ? "0.7" : "0.3"};
    border: none;
    font-size: 15px;
    max-width: 300px;
    min-width: 130px;
    color: ${props => props.selected || darkMode ? "white" : "black"};
    background-color: ${props => props.selected ? darkMode ? "rgb(27, 39, 94)" : "#9B8DD8" : darkMode ? "#10132C" : "#FFF4F7"};
    &:hover{
        background-color: ${props => props.darkMode ? "#3B2072;" : "#9B8DD8"};
    }
`;
_c2 = UtilityButton;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "NotesAndChat");
__webpack_require__.$Refresh$.register(_c2, "UtilityButton");

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

/***/ }),

/***/ "./src/components/QuestionPage/ProgressPie.tsx":
/*!*****************************************************!*\
  !*** ./src/components/QuestionPage/ProgressPie.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-p5 */ "./node_modules/react-p5/build/index.js");
/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_p5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/ProgressPie.tsx";




const ProgressPie = props => {
  const piePad = 20;
  const letterRadius = 13;
  const canvasRadius = props.pieRadius + piePad;
  const backgroundColor = darkMode ? [15, 10, 40] : [255, 255, 255];
  const wedgeColor = darkMode ? [59, 32, 114] : [246, 240, 240];
  const textColor = darkMode ? [255, 255, 255] : [5, 9, 24];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(2 * canvasRadius, 2 * canvasRadius).parent(canvasParentRef);
  };

  const draw = p5 => {
    // clear the display
    p5.background(backgroundColor);
    p5.stroke(backgroundColor); // draw the progress pie segments

    p5.strokeWeight(10);

    for (let segmentIdx = 0; segmentIdx < props.sectionCount; segmentIdx++) {
      const angle = 2 * p5.PI / props.sectionCount; // section letter

      if (props.sectionIdx === segmentIdx) {
        const textPos = p5.createVector(0, props.pieRadius + letterRadius).rotate(angle * segmentIdx - p5.PI + angle / 2).add(canvasRadius, canvasRadius);
        p5.fill(textColor);
        p5.textSize(15);
        p5.text(String.fromCharCode(props.sectionIdx + 97), textPos.x, textPos.y);
      }

      p5.fill(props.sectionIdx === segmentIdx ? [250, 208, 0] : wedgeColor);
      p5.arc(canvasRadius, canvasRadius, 2 * props.pieRadius, 2 * props.pieRadius, angle * segmentIdx - p5.PI / 2, angle * (1 + segmentIdx) - p5.PI / 2, p5.PIE);
    } // draw the central panel


    p5.strokeWeight(0);
    p5.fill(backgroundColor);
    p5.ellipse(canvasRadius, canvasRadius, 1.64 * props.pieRadius, 1.64 * props.pieRadius); // draw the question number

    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.fill(textColor);
    p5.textSize(50);
    p5.text("" + (props.questionIdx + 1), canvasRadius, canvasRadius);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_p5__WEBPACK_IMPORTED_MODULE_1___default.a, {
    setup: setup,
    draw: draw
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 12
  }, undefined);
};

_c = ProgressPie;
/* harmony default export */ __webpack_exports__["default"] = (ProgressPie);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProgressPie");

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

/***/ }),

/***/ "./src/components/QuestionPage/Question.tsx":
/*!**************************************************!*\
  !*** ./src/components/QuestionPage/Question.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionSectionSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionSectionSelector */ "./src/components/QuestionPage/QuestionSectionSelector.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/Question.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const Question = props => {
  _s();

  // keep track fo expanded explanations
  const [expanded, updateExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(resetExandedArray(props.currentQuestion.sections[props.sectionIdx])); // start at section 0 if question changes, important to avoid index overflow bugs

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.updateSectionIdx(0);
  }, [props.currentQuestion]); // update expanations to be displayed by default

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateExpanded(resetExandedArray(props.currentQuestion.sections[props.sectionIdx]));
  }, [props.sectionIdx, props.currentQuestion]); // updates questions with user selected answer, checks and set if all sections have been answered

  const selectAnswerOption = (sectionIdx, optionIdx) => {
    props.updateAvailableQuestions(props.availableQuestions.map((aq, idx) => {
      if (idx === props.questionIdx) {
        aq.sections[sectionIdx].selectedOption = optionIdx;
        aq.answered = aq.sections.reduce((flag, sec) => flag && sec.selectedOption !== -1, true);
      }

      return aq;
    })); // display the appropriate explanations

    updateExpanded(expanded.map((el, idx) => idx === optionIdx ? true : el));
  };

  const formatOption = (sectionIdx, optionIdx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(OptionButton, {
        darkMode: darkMode,
        onClick: () => selectAnswerOption(sectionIdx, optionIdx),
        children: props.currentQuestion.sections[sectionIdx].options[optionIdx]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined);
  };

  const formatSection = sectionIdx => {
    const sectionContent = props.currentQuestion.sections[sectionIdx];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        padding: "20px",
        textAlign: "left"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(sectionContent.stem)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: sectionContent.question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
        style: {
          padding: 0,
          listStyleType: "none"
        },
        children: sectionContent.options.map((_, optionIdx) => formatOption(sectionIdx, optionIdx))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined);
  };

  const renderAnsweredOptions = sectionContent => {
    return sectionContent.options.map((_, optionIdx) => {
      let backgroundColor;
      if (optionIdx === sectionContent.correctOption) backgroundColor = darkMode ? "#1C725C" : "#41BFA0";else if (optionIdx === sectionContent.selectedOption) backgroundColor = darkMode ? "#A94D53" : "#C6777D";

      const toggleExplanation = () => updateExpanded({ ...expanded,
        [optionIdx]: !expanded[optionIdx]
      });

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(OptionButton, {
          darkMode: darkMode,
          style: {
            backgroundColor
          },
          onClick: toggleExplanation,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            style: {
              display: "flex",
              justifyContent: "space-between"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              style: {
                textAlign: 'left'
              },
              children: sectionContent.options[optionIdx]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              children: [" ", expanded[optionIdx] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaArrowUp"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 59
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaArrowDown"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 75
              }, undefined), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Explanation, {
            darkMode: darkMode,
            expanded: expanded[optionIdx],
            children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(sectionContent.explanations[optionIdx])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined);
    });
  };

  const formatAnsweredSection = sectionContent => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        textAlign: "left",
        padding: "20px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(sectionContent.stem)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(sectionContent.question)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Button, {
        darkMode: darkMode,
        onClick: () => updateExpanded(expanded.map(_ => !expanded.every(v => v))),
        children: "Toggle All Explanations"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
        style: {
          padding: 0,
          listStyleType: "none"
        },
        children: renderAnsweredOptions(sectionContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_QuestionSectionSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
      sectionIdx: props.sectionIdx,
      updateSectionIdx: props.updateSectionIdx,
      currentQuestion: props.currentQuestion,
      darkMode: darkMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: props.currentQuestion.sections.length && props.currentQuestion.sections[props.sectionIdx].selectedOption === -1 ? formatSection(props.sectionIdx) : formatAnsweredSection(props.currentQuestion.sections[props.sectionIdx])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 9
  }, undefined);
};

_s(Question, "/dMJLNWIljFtaCwnHMchlJ3/tWI=");

_c = Question;
/* harmony default export */ __webpack_exports__["default"] = (Question);
const OptionButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    width: 100%;
    border-radius: 10px;
    font-size: 15px;
    margin: 8px auto;
    text-align: center;
    border: none;
    padding: 8px 20px;
    font-family: Proxima;
    color: ${props => props.darkMode ? "white" : "black"};
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0"};
    &:hover {
        background-color: ${props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE"}; 
    }
`;
_c2 = OptionButton;
const Explanation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    background-color: ${props => props.darkMode ? "#0D163C" : "#F6F5F0"};
    border-radius: 10px;
    margin-top: ${props => props.expanded ? "10px" : "0"};
    padding: ${props => props.expanded ? "20px" : 0};
    font-size: 15px;
    max-height: ${props => props.expanded ? "1000px" : "0"};
    overflow: hidden;
    text-align: left;
`;
_c3 = Explanation;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    display: block;
    border-radius: 20px;
    border: none;
    font-size: 10px;
    width: 120px;
    height: 15px;
    margin: 30px 0 0 0;
    text-align: center;
    background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#1B275E" : "#F6F5F0"};
    color: ${props => props.darkMode ? "white" : "black"};
    &:hover {
        background-color: ${props => props.selected ? darkMode ? "#1C725C" : "#41BFA0" : darkMode ? "#7735FD" : "#FBE9EE"};
    }
`;
_c4 = Button;

const resetExandedArray = section => {
  return Array(section.options.length).fill(false).map((_, idx) => {
    return idx === section.correctOption || idx === section.selectedOption; // rely on previous button click?
  });
};

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "Question");
__webpack_require__.$Refresh$.register(_c2, "OptionButton");
__webpack_require__.$Refresh$.register(_c3, "Explanation");
__webpack_require__.$Refresh$.register(_c4, "Button");

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

/***/ }),

/***/ "./src/components/QuestionPage/QuestionPage.tsx":
/*!******************************************************!*\
  !*** ./src/components/QuestionPage/QuestionPage.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _QuestionProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionProgress */ "./src/components/QuestionPage/QuestionProgress.tsx");
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question */ "./src/components/QuestionPage/Question.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./src/types.tsx");
/* harmony import */ var _SectionProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SectionProgress */ "./src/components/QuestionPage/SectionProgress.tsx");
/* harmony import */ var _NotesAndChat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotesAndChat */ "./src/components/QuestionPage/NotesAndChat.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/QuestionPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();











const QuestionPage = props => {
  _s();

  const [questionIdx, updateQuestionIdx] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const [sectionIdx, updateSectionIdx] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0); // switch to empty filler question if questionIdx out of bounds or no available questions

  const currentQuestion = questionIdx >= 0 && questionIdx < props.availableQuestions.length && props.availableQuestions.length > 0 && sectionIdx < props.availableQuestions[questionIdx].sections.length ? props.availableQuestions[questionIdx] : _types__WEBPACK_IMPORTED_MODULE_3__["NOMORE"]; // render nothing untill sectionIdx is valid

  if (sectionIdx >= currentQuestion.sections.length) {
    updateSectionIdx(0);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {}, void 0, false);
  }

  const canProgressQuestion = questionIdx < props.availableQuestions.length - 1;
  const canRetreatQuestion = questionIdx > 0;
  const canSaveAndProgress = sectionIdx === currentQuestion.sections.length - 1;
  const canProgressSection = currentQuestion.sections[sectionIdx].selectedOption !== -1 && sectionIdx < currentQuestion.sections.length - 1;
  const canRetreatSection = sectionIdx > 0;

  const saveAndProgress = () => {
    props.updateAvailableQuestions(props.availableQuestions.map((aq, idx) => {
      return idx === questionIdx ? { ...aq,
        Answered: true
      } : aq;
    })); // only advance question if there are questions to advance to 

    updateQuestionIdx(i => i + 1 === props.availableQuestions.length ? i : i + 1);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InnerDiv, {
    darkMode: darkMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_QuestionProgress__WEBPACK_IMPORTED_MODULE_0__["default"], {
      canProgressQuestion: canProgressQuestion,
      canRetreatQuestion: canRetreatQuestion,
      questionIdx: questionIdx,
      questionCount: props.availableQuestions.length,
      sectionIdx: sectionIdx,
      sectionCount: currentQuestion.sections.length,
      updateQuestionIdx: updateQuestionIdx,
      darkMode: darkMode,
      finishSession: props.finishSession,
      reviewMode: props.reviewMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Question__WEBPACK_IMPORTED_MODULE_1__["default"], {
      availableQuestions: props.availableQuestions,
      updateAvailableQuestions: props.updateAvailableQuestions,
      questionIdx: questionIdx,
      updateQuestionIdx: updateQuestionIdx,
      currentQuestion: currentQuestion,
      darkMode: darkMode,
      sectionIdx: sectionIdx,
      updateSectionIdx: updateSectionIdx
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_SectionProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      canProgressSection: canProgressSection,
      canRetreatSection: canRetreatSection,
      updateSectionIdx: updateSectionIdx,
      renderBackButton: false,
      darkMode: darkMode,
      saveAndProgress: saveAndProgress,
      canSaveAndProgress: canSaveAndProgress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_NotesAndChat__WEBPACK_IMPORTED_MODULE_5__["default"], {
      darkMode: darkMode,
      token,
      SERVER_URL: SERVER_URL,
      currentQuestion: currentQuestion
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, undefined);
};

_s(QuestionPage, "hiUYJLrR0H7+wtNykZVvEIXlE8U=");

_c = QuestionPage;
/* harmony default export */ __webpack_exports__["default"] = (QuestionPage);
const InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
    max-width: 800px;
    margin: auto;
    padding-top: 20px;
    border-radius: 20px;
    background-color: ${props => props.darkMode ? "#100A28" : "#FFFFFF"};
`;
_c2 = InnerDiv;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "QuestionPage");
__webpack_require__.$Refresh$.register(_c2, "InnerDiv");

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

/***/ }),

/***/ "./src/components/QuestionPage/QuestionProgress.tsx":
/*!**********************************************************!*\
  !*** ./src/components/QuestionPage/QuestionProgress.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _ProgressPie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressPie */ "./src/components/QuestionPage/ProgressPie.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions */ "./src/functions.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/QuestionProgress.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const QuestionProgress = props => {
  _s();

  const [width, height] = Object(_functions__WEBPACK_IMPORTED_MODULE_4__["useWindowSize"])();
  const narrowWindow = width < 800;

  const progress = () => props.updateQuestionIdx(i => props.canRetreatQuestion ? i - 1 : i);

  const retreat = () => props.updateQuestionIdx(i => props.canProgressQuestion ? i + 1 : i);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        display: narrowWindow ? "block" : "inline-block",
        textAlign: narrowWindow ? "center" : "left",
        position: 'relative',
        top: narrowWindow ? "0" : "75px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(QuestionSwitcher, {
        onClick: progress,
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowLeft"], {
          color: darkMode ? "white" : "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 59
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), props.questionIdx + 1, " / ", props.questionCount, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(QuestionSwitcher, {
        onClick: retreat,
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowRight"], {
          color: darkMode ? "white" : "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 58
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: props.reviewMode ? "/User/Finals/LastSession" : "/User/Finals",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(FinishButton, {
          darkMode: darkMode,
          onClick: props.finishSession,
          children: "Finish Session"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: narrowWindow ? {
        display: "block",
        textAlign: "center"
      } : {
        display: "inlilne-block",
        position: "relative",
        left: "50%",
        width: "max-content"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          marginLeft: narrowWindow ? "auto" : "-72px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ProgressPie__WEBPACK_IMPORTED_MODULE_0__["default"], {
          sectionCount: props.sectionCount,
          sectionIdx: props.sectionIdx,
          pieRadius: 50,
          darkMode: darkMode,
          questionIdx: props.questionIdx
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};

_s(QuestionProgress, "JSkVnn8OB/Vg/xXlIdwYFeoMO8c=", false, function () {
  return [_functions__WEBPACK_IMPORTED_MODULE_4__["useWindowSize"]];
});

_c = QuestionProgress;
/* harmony default export */ __webpack_exports__["default"] = (QuestionProgress);
const QuestionSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    color: white;
    border: none;
    background-color: transparent;
    font: bold 20px sans-serif;
`;
_c2 = QuestionSwitcher;
const FinishButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    background-color: ${props => props.darkMode ? "#0D163C" : "#FFF4F7"};
    color: ${props => props.darkMode ? "white" : "black"};
    border: none;
    border-radius: 5px;
    margin-left: 20px;
`;
_c3 = FinishButton;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "QuestionProgress");
__webpack_require__.$Refresh$.register(_c2, "QuestionSwitcher");
__webpack_require__.$Refresh$.register(_c3, "FinishButton");

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

/***/ }),

/***/ "./src/components/QuestionPage/QuestionSectionSelector.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/QuestionPage/QuestionSectionSelector.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/QuestionSectionSelector.tsx";




const QuestionSectionSelector = props => {
  const buttonWidthPercentage = 70 / props.currentQuestion.sections.length;
  const buttonSeparation = 15 / props.currentQuestion.sections.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Container, {
    darkMode: darkMode,
    children: Array(props.currentQuestion.sections.length).fill(0).map((_, idx) => {
      const allPriorSectionsAnswered = props.currentQuestion.sections.slice(0, idx).reduce((flag, section) => flag && section.selectedOption !== -1, true);
      const buttonFunc = allPriorSectionsAnswered ? () => props.updateSectionIdx(idx) : () => {};
      const buttonColor = idx === props.sectionIdx ? "#FAD000" : allPriorSectionsAnswered ? "white" : "grey";

      let buttonContents = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaMinus"], {
        color: "grey"
      }, "next", false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 42
      }, undefined);

      if (props.currentQuestion.sections[idx].selectedOption === props.currentQuestion.sections[idx].correctOption) buttonContents = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaCheck"], {
        color: "#1C725C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 42
      }, undefined);else if (props.currentQuestion.sections[idx].selectedOption !== -1) buttonContents = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaTimes"], {
        color: "#A94D53"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 42
      }, undefined);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Button, {
        onClick: buttonFunc,
        buttonWidthPercentage: buttonWidthPercentage,
        buttonSeparation: buttonSeparation,
        buttonColor: buttonColor,
        darkMode: darkMode,
        children: buttonContents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

_c = QuestionSectionSelector;
/* harmony default export */ __webpack_exports__["default"] = (QuestionSectionSelector);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${props => props.darkMode ? "transparent" : "white"};
`;
_c2 = Container;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    width: ${props => props.buttonWidthPercentage + "%"}; 
    margin: ${props => "10px " + props.buttonSeparation + "% 10px " + props.buttonSeparation + "%"}; 
    background-color: ${props => props.buttonColor};
    font-size: 12px;
    height: 25px;
    border-radius: 15px;
    padding: 0l;
    border: 1px solid #3F2091;
`;
_c3 = Button;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "QuestionSectionSelector");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Button");

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

/***/ }),

/***/ "./src/components/QuestionPage/SectionProgress.tsx":
/*!*********************************************************!*\
  !*** ./src/components/QuestionPage/SectionProgress.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/QuestionPage/SectionProgress.tsx";





const SectionProgress = props => {
  const forwardButtonFunc = props.canProgressSection ? () => props.updateSectionIdx(i => i + 1) : () => {};
  const backButtonFunc = props.canRetreatSection ? () => props.updateSectionIdx(i => i - 1) : () => {};
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: {
      marginBottom: "10px",
      padding: "20px"
    },
    children: [props.renderBackButton ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SectionSwitcher, {
      darkMode: darkMode,
      onClick: backButtonFunc,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaArrowLeft"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 29
      }, undefined), " Previous Section"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {}, void 0, false), props.canProgressSection ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SectionSwitcher, {
      darkMode: darkMode,
      onClick: forwardButtonFunc,
      children: ["Continue ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaArrowRight"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 38
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {}, void 0, false), props.canSaveAndProgress ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SaveAndProgressButton, {
      darkMode: true,
      onClick: props.saveAndProgress,
      children: ["Next Question ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaArrowRight"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 43
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        height: "50px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

_c = SectionProgress;
/* harmony default export */ __webpack_exports__["default"] = (SectionProgress);
const SectionSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    border-style: none;
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0"};
    color: ${props => props.darkMode ? "white" : "black"};
    border-radius: 20px;
    width: 200px;
    float: right;
    &:hover {
        background-color: ${props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE"}; 
    }
`;
_c2 = SectionSwitcher;
const SaveAndProgressButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    color: white;
    display: block;
    text-decoration: none;
    font-size: 18px;
    height: 30px;
    width:200px;
    border-radius: 10px;
    border-style: none;
    margin: 0px auto;
    background-color:  #7735FD;
    float: right;
`;
_c3 = SaveAndProgressButton;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "SectionProgress");
__webpack_require__.$Refresh$.register(_c2, "SectionSwitcher");
__webpack_require__.$Refresh$.register(_c3, "SaveAndProgressButton");

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

/***/ }),

/***/ "./src/components/SidebarNav/SidebarNav.tsx":
/*!**************************************************!*\
  !*** ./src/components/SidebarNav/SidebarNav.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_blacklogo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/blacklogo.svg */ "./src/images/blacklogo.svg");
/* harmony import */ var _images_whitelogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/whitelogo.svg */ "./src/images/whitelogo.svg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _HomePage_LoginLogout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HomePage/LoginLogout */ "./src/components/HomePage/LoginLogout.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions */ "./src/functions.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/SidebarNav/SidebarNav.tsx",
    _s = __webpack_require__.$Refresh$.signature();












const SidebarNav = props => {
  _s();

  const [masterUser, updateMasterUser] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [toggled, setToggled] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [width, _] = Object(_functions__WEBPACK_IMPORTED_MODULE_7__["useWindowSize"])();
  const narrowWindow = width < 500;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_functions__WEBPACK_IMPORTED_MODULE_7__["getEmailFromToken"])(token).then(email => updateMasterUser(email === "albertu98@googlemail.com"));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    style: {
      position: "absolute"
    },
    children: [narrowWindow && toggled ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Overlay, {
      onClick: () => setToggled(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {}, void 0, false), narrowWindow && !toggled ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Toggler, {
      darkMode: darkMode,
      toggled: toggled,
      onClick: () => setToggled(!toggled),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaEquals"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(Container, {
      toggled: toggled || !narrowWindow,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        src: darkMode || narrowWindow ? _images_whitelogo_svg__WEBPACK_IMPORTED_MODULE_3__["default"] : _images_blacklogo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
        height: "40px",
        style: {
          margin: "10px"
        },
        onClick: () => setToggled(!toggled)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/User",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(NavButton, {
          darkMode: darkMode,
          onClick: () => setToggled(false),
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaHome"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 101
          }, undefined), " \xA0 Home \xA0 "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(NavButton, {
        darkMode: darkMode,
        onClick: () => props.setDarkMode(!darkMode),
        children: [darkMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaSun"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 40
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaMoon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 52
        }, undefined), " \xA0 Theme \xA0"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/User/Finals",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(NavButton, {
          darkMode: darkMode,
          onClick: () => setToggled(false),
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaFlagCheckered"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 101
          }, undefined), " \xA0 Finals \xA0 "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/User/ECG",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(NavButton, {
          darkMode: darkMode,
          onClick: () => setToggled(false),
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaHeartbeat"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 101
          }, undefined), " \xA0 ECGs \xA0 "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined), // this is to avoid csv synchronisation issues when updating from dev vs production server
      masterUser && SERVER_URL === "http://localhost:3001" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/User/Dev",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(NavButton, {
          darkMode: darkMode,
          onClick: () => setToggled(false),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__["FaSkullCrossbones"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 39
          }, undefined), " \xA0 Development \xA0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 33
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_HomePage_LoginLogout__WEBPACK_IMPORTED_MODULE_5__["Logout"], {
        darkMode: darkMode,
        setToken: props.setToken
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

_s(SidebarNav, "sEXgCuYwI3d+n7pMACa4SNVX8tU=", false, function () {
  return [_functions__WEBPACK_IMPORTED_MODULE_7__["useWindowSize"]];
});

_c = SidebarNav;
/* harmony default export */ __webpack_exports__["default"] = (SidebarNav);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
    position: fixed;
    left: ${props => props.toggled ? "20px" : "-100px"};
    top: 10px;
    height: 100%;
    width: 50px;
	z-index: 1000;
    transition: left 0.5s;
`;
_c2 = Container;
const NavButton = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button`
    display: block;
    border: 2px solid ${props => props.darkMode ? "#3B2072" : "rgba(171, 0, 250, 0.2)"};
    border-radius: 20px;
    background-color: ${props => props.darkMode ? "#100A28" : "#FFF4F7"};
    color: ${props => props.darkMode ? "white" : "black"};
    width: 40px;
    height: 40px;
    padding: 5px 11px;
    margin: 10px 0;
    overflow: hidden;
    white-space: nowrap;
    box-shadow: ${props => props.darkMode ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.7)"};
    &:hover {
        width: max-content;
    }
`;
_c3 = NavButton;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 500;
    background-color: rgba(10, 10, 10, 0.7);
`;
_c4 = Overlay;
const Toggler = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button`
	position: absolute;
	top: 5px;
	left: 5px;
	color: ${props => props.darkMode ? "white" : "black"};
    border: none;
    text-align: center;
    z-index: 1000;
    background-color: transparent;
    transform: ${props => props.toggled ? "rotate(-90deg)" : "none"};
    transition: left 0.5s;
    transition: transform 0.5s;
`;
_c5 = Toggler;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "SidebarNav");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "NavButton");
__webpack_require__.$Refresh$.register(_c4, "Overlay");
__webpack_require__.$Refresh$.register(_c5, "Toggler");

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

/***/ }),

/***/ "./src/components/TextBookPage/TextBookPage.tsx":
/*!******************************************************!*\
  !*** ./src/components/TextBookPage/TextBookPage.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _TopicPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopicPage */ "./src/components/TextBookPage/TopicPage.tsx");
/* harmony import */ var _TopicSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopicSelector */ "./src/components/TextBookPage/TopicSelector.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/TextBookPage/TextBookPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const TextBookPage = props => {
  _s();

  const [topics, updateTopics] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const [currentTopic, updateCurrentTopic] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    _id: "",
    topicTitle: "",
    learningPointIdx: [],
    topicIdx: -1,
    categoryPath: [],
    sections: []
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(SERVER_URL + "/products/finals/textbook", {
      token
    }).then(res => updateTopics(res.data)).catch(console.log);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      exact: true,
      path: "/User/Finals/TextBook",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_TopicSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
        topics: topics,
        updateCurrentTopic: updateCurrentTopic,
        darkMode: darkMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/User/Finals/TextBook/Subject",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_TopicPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
        topic: currentTopic,
        darkMode: darkMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

_s(TextBookPage, "P2PrfDafmoGKzMCSB7Meg+KcErY=");

_c = TextBookPage;
/* harmony default export */ __webpack_exports__["default"] = (TextBookPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "TextBookPage");

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

/***/ }),

/***/ "./src/components/TextBookPage/TopicPage.tsx":
/*!***************************************************!*\
  !*** ./src/components/TextBookPage/TopicPage.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _General_BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../General/BackButton */ "./src/components/General/BackButton.tsx");
/* harmony import */ var _General_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../General/Title */ "./src/components/General/Title.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/TextBookPage/TopicPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();










const Section = props => {
  _s();

  const [contentExposed, updateContentExposed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(SectionDiv, {
    darkMode: darkMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Button, {
      darkMode: darkMode,
      onClick: () => updateContentExposed(!contentExposed),
      children: [props.section.sectionTitle, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          display: "inline",
          float: "right"
        },
        children: contentExposed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaArrowUp"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 40
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaArrowDown"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 56
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Explanation, {
      darkMode: darkMode,
      expanded: contentExposed,
      children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(props.section.content)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

_s(Section, "z52wdpQU/bISN0lFIyyOG1BzouA=");

_c = Section;

const TopicPage = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_General_BackButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      path: "/User/Finals/TextBook",
      label: "TextBook",
      darkMode: darkMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_General_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], {
      children: props.topic.topicTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), props.topic.sections.map(s => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Section, {
      section: s,
      darkMode: darkMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 45
    }, undefined))]
  }, void 0, true);
};

_c2 = TopicPage;
/* harmony default export */ __webpack_exports__["default"] = (TopicPage);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    width: 100%;
    border-style: none;
    border-radius: 10px;
    background-color: transparent;
    color: ${props => props.darkMode ? "white" : "black"};
    font-size: 30px;
    text-align: left;
    padding: 5px;
`;
_c3 = Button;
const SectionDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    padding: 20px;
    max-width: 700px;
    border-radius: 10px;
    margin: 0 auto 20px auto;
    color: ${props => props.darkMode ? "white" : "black"};
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0"};
    &:hover {
        background-color: ${props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE"}; 
    }
`;
_c4 = SectionDiv;
const Explanation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    color: ${props => props.darkMode ? "white" : "black"};
    background-color: ${props => props.darkMode ? "#0D163C" : "#E6E5E0"};
    border-radius: 10px;
    margin-top: ${props => props.expanded ? "10px" : "0"};
    padding: ${props => props.expanded ? "20px" : 0};
    font-size: 15px;
    max-height: ${props => props.expanded ? "500px" : "0"};
    overflow: scroll;
    text-align: left;
`;
_c5 = Explanation;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "Section");
__webpack_require__.$Refresh$.register(_c2, "TopicPage");
__webpack_require__.$Refresh$.register(_c3, "Button");
__webpack_require__.$Refresh$.register(_c4, "SectionDiv");
__webpack_require__.$Refresh$.register(_c5, "Explanation");

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

/***/ }),

/***/ "./src/components/TextBookPage/TopicSelector.tsx":
/*!*******************************************************!*\
  !*** ./src/components/TextBookPage/TopicSelector.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _General_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../General/Title */ "./src/components/General/Title.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/TextBookPage/TopicSelector.tsx";






const TopicSelector = props => {
  const renderSelector = topic => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/User/Finals/TextBook/Subject",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Button, {
        darkMode: darkMode,
        onClick: () => props.updateCurrentTopic(topic),
        children: topic.topicTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_General_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: "Choose Your Subject"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        textAlign: "center"
      },
      children: [" ", props.topics.map(renderSelector), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_c = TopicSelector;
/* harmony default export */ __webpack_exports__["default"] = (TopicSelector);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
    display: block;
    width: 100%;
    max-width: 500px;
    border-style: none;
    border-radius: 10px;
    text-align: left;
    padding: 5px;
    padding-left: 40px;
    margin: 10px auto;
    color: ${props => props.darkMode ? "white" : "black"};
    background-color: ${props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0"};
    &:hover {
        background-color: ${props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE"}; 
    }
`;
_c2 = Button;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "TopicSelector");
__webpack_require__.$Refresh$.register(_c2, "Button");

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

/***/ }),

/***/ "./src/components/UserPage/ContentCard.tsx":
/*!*************************************************!*\
  !*** ./src/components/UserPage/ContentCard.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/UserPage/ContentCard.tsx";






const ContentCard = props => {
  const track = () => window.analytics.track({
    userId: "",
    event: `${props.path} clicked`
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: {
      margin: "50px 20px 0 20px",
      width: "350px"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_animated_css__WEBPACK_IMPORTED_MODULE_1__["Animated"], {
      animationIn: "zoomIn",
      animationOut: "fadeOutDown",
      animationInDuration: 1000,
      animationOutDuration: 1000,
      isVisible: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
        to: props.available ? props.path : "/User",
        onClick: track,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ContentDiv, {
          darkMode: darkMode,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              font: "45px Champion"
            },
            children: props.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Blurb, {
            darkMode: darkMode,
            children: props.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: props.imgsrc,
            alt: "pancreas",
            height: "150px",
            width: "150px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StartButton, {
            available: props.available,
            children: props.available ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCheck"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 49
            }, undefined) : "Coming Soon!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

_c = ContentCard;
/* harmony default export */ __webpack_exports__["default"] = (ContentCard);
const ContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    background-color: ${props => props.darkMode ? "#100A28" : "#ffffff"};
    border: 2.5px solid ${props => props.darkMode ? "#3B2072" : "#FFF4F7"};
    box-shadow: ${props => props.darkMode ? "2px 2px 2px #100A28" : "2px 2px 2px rgba(0, 0, 0, 0.25)"}; 
    text-align: center;
    border-radius: 20px;
    margin: auto;
    padding: 25px 5%;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
_c2 = ContentDiv;
const Blurb = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    display: block;
    font-size: 18px;
    margin: 10px 10px 10px 10px;
    color: ${props => props.darkMode ? "#ffffff" : "#100A28"};
`;
_c3 = Blurb;
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    text-decoration: none;
    background-color: ${props => props.available ? "rgba(0, 255, 0, 0.5)" : "rgba(171, 0, 250, 0.5)"};
    color: ${props => props.available ? "black" : "white"};
    margin: 10px auto;
    padding: 5px 25px;
    border-radius: 20px;
    border: none;
    width: max-content;
`;
_c4 = StartButton;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "ContentCard");
__webpack_require__.$Refresh$.register(_c2, "ContentDiv");
__webpack_require__.$Refresh$.register(_c3, "Blurb");
__webpack_require__.$Refresh$.register(_c4, "StartButton");

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

/***/ }),

/***/ "./src/components/UserPage/ProductsPage.tsx":
/*!**************************************************!*\
  !*** ./src/components/UserPage/ProductsPage.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentCard */ "./src/components/UserPage/ContentCard.tsx");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products */ "./src/components/UserPage/products.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/UserPage/ProductsPage.tsx",
    _s = __webpack_require__.$Refresh$.signature();







const ProductsPage = props => {
  _s();

  const [purchasedProducts, updatePurchasedProducts] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // retrieve porducts that the user has purchased from the database

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(SERVER_URL + "/users/purchased", {
      token
    }).then(res => updatePurchasedProducts(res.data)).catch(console.log);
  }, []);

  const renderProducts = product => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ContentCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: product.name,
      available: purchasedProducts.includes(product.name),
      description: product.description,
      path: product.path,
      imgsrc: product.imgsrc,
      darkMode: darkMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    style: {
      padding: "0px 5%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    children: _products__WEBPACK_IMPORTED_MODULE_3__["products"].map(renderProducts)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

_s(ProductsPage, "stbuS5xxI7dVlqiAOAROq9XJm/Q=");

_c = ProductsPage;
/* harmony default export */ __webpack_exports__["default"] = (ProductsPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductsPage");

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

/***/ }),

/***/ "./src/components/UserPage/UserPage.tsx":
/*!**********************************************!*\
  !*** ./src/components/UserPage/UserPage.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _SidebarNav_SidebarNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SidebarNav/SidebarNav */ "./src/components/SidebarNav/SidebarNav.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ECGPage_ECGPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ECGPage/ECGPage */ "./src/components/ECGPage/ECGPage.tsx");
/* harmony import */ var _ProductsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductsPage */ "./src/components/UserPage/ProductsPage.tsx");
/* harmony import */ var _FinalsPage_FinalsRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FinalsPage/FinalsRouter */ "./src/components/FinalsPage/FinalsRouter.tsx");
/* harmony import */ var _DevPage_DevPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DevPage/DevPage */ "./src/components/DevPage/DevPage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/components/UserPage/UserPage.tsx";








const UserPage = props => {
  if (!token) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 30
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    style: {
      marginTop: 0,
      overflowX: "hidden",
      height: "100vh",
      paddingBottom: "50%"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_SidebarNav_SidebarNav__WEBPACK_IMPORTED_MODULE_0__["default"], {
      token,
      SERVER_URL: SERVER_URL,
      setToken: props.setToken,
      darkMode: darkMode,
      setDarkMode: props.setDarkMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/User",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ProductsPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          token,
          SERVER_URL: SERVER_URL,
          darkMode: darkMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/User/Finals",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_FinalsPage_FinalsRouter__WEBPACK_IMPORTED_MODULE_4__["default"], {
          token,
          SERVER_URL: SERVER_URL,
          darkMode: darkMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/User/ECG",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ECGPage_ECGPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
          token,
          SERVER_URL: SERVER_URL,
          darkMode: darkMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/User/Dev",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_DevPage_DevPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          token,
          SERVER_URL: SERVER_URL,
          darkMode: darkMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

_c = UserPage;
/* harmony default export */ __webpack_exports__["default"] = (UserPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "UserPage");

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

/***/ }),

/***/ "./src/components/UserPage/products.tsx":
/*!**********************************************!*\
  !*** ./src/components/UserPage/products.tsx ***!
  \**********************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony import */ var _images_ecg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/ecg.png */ "./src/images/ecg.png");
/* harmony import */ var _images_steth_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/steth.png */ "./src/images/steth.png");
/* harmony import */ var _images_cxr_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/cxr.png */ "./src/images/cxr.png");
/* harmony import */ var _images_cells_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/cells.png */ "./src/images/cells.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





//keeping available products here isntead of fetching them unneccessarily, we implement everything here anyway
const products = [{
  name: "Finals",
  description: "Everything you need for Finals!",
  path: "/User/Finals",
  imgsrc: _images_steth_png__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: "ECGs",
  description: "The magic behind the squiggles",
  path: "/User/ECG",
  imgsrc: _images_ecg_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  name: "CXRs",
  description: "All the shades of grey",
  path: "/User/MRCGP",
  imgsrc: _images_cxr_png__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: "FBCs",
  description: "No blood cells left uncounted",
  path: "/User/Early",
  imgsrc: _images_cells_png__WEBPACK_IMPORTED_MODULE_3__["default"]
}];

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

/***/ }),

/***/ "./src/fonts/Champion-HTF-Welterweight.otf":
/*!*************************************************!*\
  !*** ./src/fonts/Champion-HTF-Welterweight.otf ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Champion-HTF-Welterweight.3501a45c.otf");

/***/ }),

/***/ "./src/fonts/ProximaNova-Regular.otf":
/*!*******************************************!*\
  !*** ./src/fonts/ProximaNova-Regular.otf ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ProximaNova-Regular.ea03f826.otf");

/***/ }),

/***/ "./src/functions.tsx":
/*!***************************!*\
  !*** ./src/functions.tsx ***!
  \***************************/
/*! exports provided: updateCategory, falsifyCategorySelection, getAllPaths, getPaths, useToken, handleLogOut, refreshTokenSetup, getEmailFromToken, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "falsifyCategorySelection", function() { return falsifyCategorySelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPaths", function() { return getAllPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaths", function() { return getPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToken", function() { return useToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLogOut", function() { return handleLogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshTokenSetup", function() { return refreshTokenSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmailFromToken", function() { return getEmailFromToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-auth-library */ "./node_modules/google-auth-library/build/src/index.js");
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_auth_library__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();



const updateCategory = (root, path, value) => {
  if (path.length === 0) {
    return { ...root,
      selected: value,
      subcategories: root.subcategories.map(falsifyCategorySelection)
    };
  }

  const nextCategoryIdx = root.subcategories.findIndex(sc => sc.categoryTitle === path[0]);
  return { ...root,
    selected: false,
    subcategories: root.subcategories.map((sc, idx) => idx === nextCategoryIdx ? updateCategory(sc, path.slice(1), value) : sc)
  };
};
const falsifyCategorySelection = category => {
  return { ...category,
    selected: false,
    subcategories: category.subcategories.map(falsifyCategorySelection)
  };
};
const getAllPaths = root => {
  if (root.subcategories.length === 0) return [[root.categoryTitle]];
  return root.subcategories.reduce((categoryList, category) => {
    return categoryList.concat(getAllPaths(category).map(p => [root.categoryTitle].concat(p)));
  }, []);
};
const getPaths = root => {
  if (root.selected) return getAllPaths(root);
  if (root.subcategories.length === 0) return root.selected ? [[root.categoryTitle]] : [];
  return root.subcategories.reduce((categoryList, category) => {
    return categoryList.concat(getPaths(category).map(p => [root.categoryTitle].concat(p)));
  }, []);
};
const useToken = () => {
  _s();

  const getToken = () => {
    const token = sessionStorage.getItem('token');
    return token ? token : "";
  };

  const [token, setToken] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken
  };
}; // --------------------------------------------------------------------------------------

_s(useToken, "YxmPjHzwYO/ewBTUGNAd/YBNtug=");

const handleLogOut = setToken => {
  setToken("");
  window.location.href = '/';
};
const refreshTokenSetup = (res, setToken) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
const getEmailFromToken = async tokenId => {
  const client = new google_auth_library__WEBPACK_IMPORTED_MODULE_1__["OAuth2Client"](Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).GOOGlE_CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).GOOGlE_CLIENT_ID
  }).catch(console.log);
  if (!ticket) return "";
  const {
    email
  } = ticket.getPayload();
  return ticket.getPayload().email;
};
const useWindowSize = () => {
  _s2();

  const [size, setSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([0, 0]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

_s2(useWindowSize, "13XWg4Ot0MOczACYcn76+JLjv8w=");

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

/***/ }),

/***/ "./src/images/blacklogo.svg":
/*!**********************************!*\
  !*** ./src/images/blacklogo.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/blacklogo.a6454b5d.svg");

/***/ }),

/***/ "./src/images/cells.png":
/*!******************************!*\
  !*** ./src/images/cells.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cells.4d3c8fff.png");

/***/ }),

/***/ "./src/images/cxr.png":
/*!****************************!*\
  !*** ./src/images/cxr.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cxr.271a2b91.png");

/***/ }),

/***/ "./src/images/ecg.png":
/*!****************************!*\
  !*** ./src/images/ecg.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAExCAYAAAB/IRl4AAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABfKADAAQAAAABAAABMQAAAAAY2gNDAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAiuElEQVR4Ae2dW3IbR7KGuynKr9IOiImRI/xGzgqEeXPYnhDPCsRZwcGswDwrMLwC0ys4UozHMW8Dr2DItxNhOYbcgfRqUcTJbDYkAMSlu25dlw8RNoHuumR+Cf1dyKquriteEEiYwLNvJuNqXk3EhRcb3Lip59X5rz9PLzac4xAEiiNQF+cxDmdDQMT+XMT+270Ozatfbj+rTq9fTd/uLUsBCGRMAMHPOLg5u/b515OLeVW97OHj1e3jaozo9yBG0ewIHGTnEQ5lT+DzryZnPcVemRw/+r06zx4ODkJgBwFG+DvgcCo+AqPTydPD99W1WPbEyLq6+vObn6Yzo7pUgkDiBBjhJx7A0sw/vG0maM3EXmHdT/CWhg1/IdAQQPD5IqRFwF6wX3zx5WSUltNYCwE3BBB8NxxpJQCBP/5lcirdmI/uWxtvH1XaDi8IFEcAwS8u5Ok6fHDnTKjH6VLAcgiYE0DwzdlRMzABWZnjamQ+Dmw63UEgCgIIfhRhwIh9BGQp5omUsU7ntP08advb1y3nIZAVAQQ/q3Dm68y8rsaOvdMLCC8IFEUAwS8q3Ek7O3Zp/V1VIfgugdJWEgQQ/CTChJFCwKlAyx2HTtsjQhBIgQCCn0KUCrdR764VBEdOMdTVyGl7NAaBBAgg+AkEqXQT5e5aH6NxtxeQ0oOE/0kQQPCTCFPxRo59EGCljg+qtBkzAQQ/5uhgW0NAHmIy8oFiflBpqogXBIohgOAXE+p0HZ17EnzZSM1Hqihd0FiePQEEP/sQZ+BgXT334kXNCN8LVxqNlgCCH21oMEwJtCt0/MBghO+HK61GSwDBjzY0GKYEPK3QuYc7Z4TPt6wsAgh+WfFOztv6zs+EbQOClE5y3wcMtiOA4Nvxo7ZnArKSZuSxi2OPbdM0BKIjgOBHFxIMWiFAnn0FBx8gYEMAwbehR13/BDzn2Xncof8Q0kM8BBD8eGKBJZsI+FqS2fZ1e+g1ZbTJI45BYDACCP5g6OkYAhCAQFgCCH5Y3vTWg0CIvW68rgLq4StFIRCCAIIfgjJ9GBEIsdeN51VARn5TCQK+CCD4vsjSrj0BVujYM6QFCCwRQPCXYPA2MgLcGBVZQDAndQIIfuoRzNh+X9siryC7q8Yrn/kAgYwJIPgZBzd117xti5w6GOyHgCEBBN8QHNUCECClEwAyXZREAMEvKdrp+ep/rxsuKul9K7DYmACCb4yOipkQ8H9RyQQUbqRPAMFPP4ZZehDipqssweEUBHYQQPB3wOHUcARC3HQ1nHf0DIFhCCD4w3Cn1z0E5uTW9xDiNAT6E0Dw+zOjRgACsgb/JEA3TRfPvpmMQ/VFPxAYkgCCPyR9+oYABCAQkACCHxA2XXUnEOQu2+7mUBICWRBA8LMIY35OcJdtfjHFo+EJIPjDxwALIAABCAQhgOAHwUwnvQnU4SZtxbZxb/uoAIEECSD4CQatEJOfFOInbkIgGAEEPxhqOoIABCAwLAEEf1j+9L6BANsqbIDCIQg4IIDgO4BIE24JsK2CW560BoEFAQR/QYK/5RIIeFdvuZDxPAYCCH4MUcCGVQKhBXhePV01gE8QyJMAgp9nXNP2io3T0o4f1kdLAMGPNjQYBgEIQMAtAQTfLU9ac0EgdErHhc20AYEECCD4CQSpOBPJqRcXchwOQwDBD8OZXmImUFejmM3DNgi4IoDguyJJO+4IhBfgI3fG0xIE4iWA4Mcbm5ItQ4BLjj6+eyOA4HtDS8MQgAAE4iKA4McVj+KtGZ1OuAmq+G8BAHwRQPB9kaVdIwKHt1b74N8YdUolCBRCAMEvJNBFuDmvrovwEychYEgAwTcER7W8CHzx5WSUl0d4A4GHBBD8h0w4MiQBm7tsD6qZqem3h6zFN2VHvXQIIPjpxKoMS+02TpuVAQkvIWBGAME340YtCEAAAskRQPCTC1neBs/v2Js+7wjj3ZAEEPwh6dP3AwJ1ZbwskyWZD2hyAAKrBBD8VR58SpUASzJTjRx2BySA4AeETVcQgAAEhiSA4A9Jn74fEgi/U2ZjQ33HssyHweBIbgQQ/Nwimr4/Rjtlzqvq8s1P05mp+/MDBN+UHfXSIYDgpxMrLN1BoD6o3u44zSkIQEAIIPh8DSAAAQgUQgDBLyTQKbj5+VeTkxTsxEYIpEoAwU81chnaLXl0m73wZxkiwSUIOCWA4DvFSWMQgAAE4iWA4McbGyyDAAQg4JQAgu8UJ41ZEbDZGtmqYypDoAwCCH4ZcU7DS4utkW3W4KcBByshYE8AwbdnSAtxETDbRO2uGsflBtZAwD0BBN89U1ockgCbqA1Jn74jJ4DgRx6goswjh19UuHE2PAEEPzxzetxGYG64Dn9e/bKtSY5DAAKfCCD4n1jwDgIQgEDWBBD8rMOLcxCAAAQ+EUDwP7Hg3dAEauPHGw5tOf1DIAkCCH4SYSrGyCdGnh5UM6N6VIJAYQQQ/MICjrsQgEC5BBD8cmOP5xCAQGEEEPzCAh6ru198ORnFaht2QSAXAgh+LpFM3I/bQ/Nnys7r6nLhfl1X14v3vf7W1fNe5SkMgQQJIPgJBg2TVwnU80/PsxXxv149yycIQGBBAMFfkOAvBCAAgcwJIPiZBxj3IAABCCwIIPgLEvwdmsDY1IDDW9I4puyoVxYBBL+seGfp7f/9c3qdpWM4BQHHBBB8x0BpDgIQgECsBBD8WCODXRCAAAQcE0DwHQOlOTMCsrRyZFaTWhCAQFcCCH5XUpTzSmBuKvg8/MRrXGg8LwIIfl7xxBsIQAACWwkg+FvRcAICEIBAXgQQ/LziiTcQgAAEthJA8Lei4URQAqabl9Wf9tFRe+s785uwnn0zGQf1mc4gEJgAgh8YON05JrC0U6a2PD8wF3zHltEcBKIjgOBHFxIMggAEIOCHAILvhyutQgACEIiOAIIfXUjKM2h0Onlantd4DIHwBBD88MzpcY2A7HZ5snao88flp111rkRBCBRKAMEvNPC5uL38tKtcfMIPCPgigOD7Iku7EIAABCIjgOBHFhDMgQAEIOCLAILviyztdiYgN0uNOhemIAQgYEwAwTdGR0VXBORmqZFpW29+ms5M61IPAqURQPBLizj+QgACxRJA8IsNPY5DAAKlEUDwS4s4/kIAAsUSQPCLDX08jvN4w3higSV5E0Dw845vEt7F8nhDuWuXLR6S+MZgpCkBBN+UHPWiJGCzakd+aRhv8RAlDIyCwBoBBH8NCB8hAAEI5EoAwc81svgFAQhAYI0Agr8GhI8DEKjNb7wawFq6hECyBBD8ZEOXleFHRt4cVDOjelSCQKEEEPxCA4/bEIBAeQQQ/PJijscQgEChBBD8QgOP2xCAQHkEEPzyYh6Vx198ORlFZRDGQCBjAgh+xsFNwbXbQ6sVOrMUfMRGCMRCAMGPJRLYAQEIQMAzAQTfM2CahwAEIBALAQQ/lkhgBwQgAAHPBBB8z4BpfjcBdqjczYezEHBJAMF3SZO2ehOw2aFSJnwve3dIBQgUTADBLzj4qbt+/Wr6NnUfsB8CIQkg+CFp0xcEIACBAQkg+APCp2sIQAACIQkg+CFp01coAu9MOuLZuibUqJMSAQQ/pWjlaOtdNTZ062ZrvbnZZK7xs3W3GsIJCMRFAMGPKx5Y05XAvLruWpRyEIDAPQEEn28CBCAAgUIIIPiFBBo3IQABCCD4fAcgAAEIFEIAwS8k0NG6WVcnRrbVFTddGYGjUskEEPySox+H70+MzKjNVuIY9UUlCGRCAMHPJJC4AQEIQGAfAQR/HyHOQwACEMiEAIKfSSBxAwIQgMA+Agj+PkKc90ZgdDp56q1xGoYABB4QQPAfIOFAKAKHt4YrdMRAeXDKZSg76QcCuRBA8HOJZGF+yEZnLMssLOa4a08AwbdnSAsQgAAEkiCA4CcRJoyEAAQgYE8AwbdnSAsQgAAEkiCA4CcRpkyNnJtP2tZ35PAz/VbglkcCCL5HuDS9h0BdGS/L/PXnKat09uDlNATWCSD460T4DAEIQCBTAgh+poHFLQhAAALrBBD8dSJ8hgAEIJApAQQ/08Cm4Nb8zjyHv8u/eWV4F67p3vy7jOEcBCIigOBHFIzSTKkr41U6V7tY1QfGK3jM9ubfZQznIBARAQQ/omBgSkcCbKvQERTFILBKAMFf5cEnCEAAAtkSQPCzDS2OQQACEFglgOCv8uATBCAAgWwJIPjZhjYBx0xXxdTGk7IJQMFECPgjgOD7Y0vL+wmYrYrh4Sf7yVICAhsIIPgboHAIAhCAQI4EEPwco4pPEIAABDYQQPA3QOEQBCAAgRwJIPg5RjUBn0anE+OtkRNwDxMhECUBBD/KsORv1OGt8bYK1ZxJ2/y/IHjohQCC7wUrjfokULO1gk+8tJ0xAQQ/4+DiGgQgAIFlAgj+Mg3eQwACEMiYAIKfcXBxDQIQgMAyAQR/mQbvgxGo76pRsM7oCAIQaAgg+HwRBiEwPzAX/Dc/TWeDGE2nEEicAIKfeAAxHwIQgEBXAgh+V1KUgwAEIJA4AQQ/8QBiPgQgAIGuBBD8rqQoBwEIQCBxAgh+4gFM1vy7amxo+7t99WQF0PW+MtvOf/7V5GTbOY5DIHUCCH7qESzN/nl1uc9lWQF0va/MtvNSl03dtsHhePIEDpP3AAcgAAEIeCLw7JvJuJpXJ3VVnczn7VLiunredDevftG/86q6lJHz5aO7avZ//5xeN+ci/R+CH2lgMAsCEAhPQLftfvx7dSo7sp5K7yr2zWM4RdSrSlR/5dUKvxx+rudvH1XVs68nV/L24vZxdXH9avp2pXwEHxD8CIKACRCAwLAEvvhyMvrwqDqfv2/E3uxZy/cuHMuf7w7fV999/vXkx/ePq0lMwk8Of9jvWbm91+TKyw1+PJ6r0IswX8jo/D8ySn8pltmI/Ypj2p4I/7Wkhc5XTgz4gRH+gPAL71pHQr1f8o9o76Rt70apUByBxYj+9l7kffr/RNJC30qq51Se43D268/TQb+/jPB9hpq2nROoD6ro8qLOnaRBbwQ0R68jbhnRX7Yjem99rTV8LPMC/5Zlv2drx4N+RPCD4qYzCEBgKAK64kZSLJc64hYbnKVu+vgjov+DppD61HFZlpSOS5q0BQEIREdAR/Ui9Bci9C9iME5/WUiK56ms5DkLPaHLCD+GbwA2QAACXgj88S+TU504lcajEPslJ1+IXTO9GC0d8/4WwfeOmA7WCbB9wToRPrsmoEL6x68mU9lm43+l7UHSNx18Og4t+gh+h6hQxC0By+0LZm6tobXcCOiAQoW0rqv/TsC3oKKP4CfwjcBECECgGwFdBSMTozMpfdytRhSljh+/r6YhLEHwQ1CmDwhAwDsBXf2iq2Cko1hTOFsZ6ERuiNU7CP7WEHACAhBIgUCztv7rSeh19c7RNKLveZ1+8ssy9Y6528NqJJMzo70Pxp7LTTt1dSll3w59x5vzbwsNQqBAApqvl/1vZuJ6mFG97JApwnx5IFuDyN+x9Hsk/zl7Nev0v5pc+tKnpAS/uR36oBrfyValskPdiYj3c7k1utmfVEA1f/eSlyhpWVkHq0Wv5K3eiDFLYWvTvb6lU2Bsaurhrfle96Z9Ui9OAm2+XnPffsVeRF504uL9Z9Wr9XXzzfbJd9W5apErSqJPulxztN6Xi/ajF3wFOr+rTmXG/VTEvbmaqrY7eh2L/h9LsF4ub216+KF6Ffu+1o78T64Z4pJcyLwYLAO2ifzb/c5L422jojM/PvpQne/6zr35aTqT4mO1R/6ey38uLj5PDn+vXmm78p/TV5Q5fP2ZpmtoBeJbGX3/q11e1Yi9U+8fNnYsh77TnfOefTWZ6QjiYRGOQAACQxJoJzd9iv1rGfT94dd/TM92if0ygzf/mE5lc7SxHNP98O1f8otB9/yxb2i1hWhG+Drx0j544Fyu3EcOR/GrHnf9JMDFjudy0TmXQJ5LTu2ia1XKQQAC7gmoRsj6+gv5d/nCfetNizfya/+sHbX37kLz7mKj7tczk8o6eLR7yZ4/Muh85TKfP/gIX/PyOpoXSNeSu/pBCB3ZUXJe+0jtEuG/1tu0nbdOg1ER0Mn/qAzCmIZAK/Yz+eBF7OXxhd/L3jYnpmK/CJPm3aWdsXx2MtIX7Xmlvi/at/07mOCr0OtPM02ftCmbJ7bOeK5/pLdpa6pHbffcV9bNyy8mr/xs/tHuXemVdWTidG5J7O1HzQ9d1FH9n3/7eersyVSORf/o0e/N3MBDyw2OBBf8ZaGXn2YvDWwetoquDJK9tMnvm4dBRlMjo9rtQ6ON6lIpSQI6n6e//sV452IvaeMfXYzqN4FdEv2bTef7HNMBcbMaqE+lLWWDCb5epRcj+iSFfhXgE03zqD8uf26tdsEnCJRNQMVe/p3NhILrX//v5FfmX3VS1sfSx0XUtG3pR9PA7xbHjP/OKydaE0Twdba5ydGnOKLfESG9cOkEDaK/AxKnIGBAwKPYX4kIj0MtwtAJV0kTnhkgWK/iJLXjVfD1Z4hOdsrSym/FetdX6XUgQ33W3e40xXMylAH0C4GcCHgU+9c6oepy1UsX7r/9ffpK5gn+p0vZXWVcpHa8CL7m6UXoX+kaenHgaJcTmZzTlTy6bh/RzySguDEMAR0keknjiODKWvlTnymcXcRkIcG56OEvu8p0Oje321XTueCL0E90UlOMf9HJgXwKaV6fFTxd4ml4G7qMcK67NE+ZNAnIgOmsHSS6zAY0+fpGcAfGcnjXpHZs8/nHmiI3dcWZ4DejelmyKIZ8J/+5DJipb0PUeyIXO6frZodwItY+5YJ6Hatt2GVHQMVe4vuDXSsPaqvYB8vXP+h97YDetesknz+vJqZLw50I/sdRveHIbY1L6h+bJ9ik7gT2QyAUAU9iv5ic1WxDNK8mn19Vry0N0oHl1KQNq60V9CpzeyBPg5ctCEw6d1DnRtbSzua646VseyzbJF9uy9Fpfl2urk+lz7Fc9UdSZyzvjxzYsKmJY12yqcu+Np3kGAQgcE/Al9jr5Ow2LRiavdh21t5bYJMJeaF3/rcXkM4uGQu+dnZ714i9jdGdDV0qeCXvL/ruaLk0Mz9btKUXAdlq+Uxyw6dyzKn4ywXlpfzyudRNlRb98RcCEPhEwJPY60ocr+vrP3lg9k4vRKKfZ3rnvlkL97Wk/lSWhM/6XNh6C76uOdfnL8qWxS9tjO1ZV29/vpC90C+67l7Xpf32IjCRspP2y3cu710K/3fS7mzpYtPFrKzL6EVWLoa8CifQfA9qs7TENnTya//HVH5V68hcBoSa2nmxzZ8Ox49EE1W/zjuUbYr0yuFrkPRGIx29du3Aqpw+Xeag+i8ZJY90lt2l2K/bJaJ8of24WC+73LZMRDGJuwSkTastHen1dtarNIWjJNCKvcbSWXYgJbFfBEV/icj7d4vPRn/lHqc+E7idBV+CpLPoMzHq2MiwHpU0eJJn/9Obn6fjvjmqHt1sLKoXFu1bTl5tLND/4FGoJ9L3N40aEAhLwIfY6yAtlZH9Mm1NxYjW6Ajd6tXOo3Zqo5Pg6/bF7ZIpZ1fkLdZ9fPDAkGkQ7VuuvmOx8fUWO3sd1l9EbK3cCxmFMyTgQ+xFMP8awxp703BpZkHuPfjFtH5TT1ZH6oC8Sxs7BV/z9bodsN7S26Ux4zLqsGxRqnfC+Uzb9LFPr75qj/7a6FNvW1mZYHGy+dG29jkOgZgJ+BL7RjBjdryDbe0NWR1Kbi8iA3KdwH26vcT9ma2CrwHSPWJEiJ/va8Ti/E2To5fUjVylZxbteKuqPxUdif4TUjtVJRe+kbdg0XCUBDTH3KaDnWUIdGSfg9hrwJpBrv1eO0+67Ju/UfA1/dAG6MjbN0gclLTJSegcvYk/rkRfUzu6V4iJDbnUkQv8yNQXvc/CtG7XerL6bO8oqWtblKsqHXXq3efCArHf8YWQ7/ZUTt/sKLL3lGZi9unLA8HXXFC7PtRZgFYslfSNTopq3q3P+tGVNgb48P5xM7liP5Er+1oPYH4WXfb8vhjFSn7NnWQBKwInVOx1VZ+YcuzKnJxG9stMmu+2PE93+ZjR+z375q8Ivt4d2k7OGvW1p9I7Of83XXmjk6J7ykZ3WgMiN3udimHqh83ryGbzI5uOi6o7r94W5W9kziL2/QPSprVf96+5UmPnqsCPgt+Iva/19TKqF7E8kUnQ6YppiX3QXJukJM6sze65dta6PxqAQGACjOzNgItOTqSm1aBSU8fbVu0cyt1ecr6SlUGeXvf7UJ97aj14szrnIMtUv7dduSR5zf8I++D2B+jwnVzYn27rR3Pkwq6Yl+ZUJQ1xJv++xuL0UTGOO3Q01zTOJkQ6qJTvzFQE+dtN57se00yN6MsP6+U/jvDXTzj4fLPI1TtoK6omPnzW3MpsNcESlUNujXmy654Dixz5lVsz/bamq9x0SbP8w/2XiP1L6e3Ib495tl6S2C8i2N5X4OX77kXw5R918zT4FHP1C+i7/jqbYNnVScLnDu6auQ63HiSUk9ef0zLC+rfnJc1u+UbYWoli/zEMtf0duB/bWnrjWvCbp8voMsaeKyqWTErjrU6wzOfV92lYG9ZKHdF2uQkkrFVhemvF/ocwveXbiw4ac1lnbxIlX/riUvA1hRPN02VMIPet06Z2rCZY+vaZSvnHv3sY5UfuPGLvJkCN2PMsicpH6tiN4MsqHL2JKtcUzravsf6KcbJqZ1sHCR+XlMbpRvPrPG9s0py9xyXNG1HmeBCx/xTVVl+cruywFnxNa+ja+txTOJ/CsPquvVP49epRPgmBF1vSOkY34Uia6DJmqiL2FzHbl4JtiP3DKKm+uEwdWwm+Tqr89vPU6RXoocvxH3GxdjZ+L/tbKGuxz/rX2lyjPoj3Rqr2RjqjC9lmbws8KlmCFLc4DhEpl6kdU8HXydk/lTypshzodofP8+VjvG8InOXOofkV42BP89w57fHv6vazLSnAPRVLOK3ZE9FbTZFazxeaCP5icjbqn9ihvwjNXcQySgndb+T9HWtuO3IbrcxrHzHnZ98pK8uSqXylz54oNSXcNUo6Pyqib51N6Sv4GpziJme7BqXd19r6Kty1vxTK6UPiF3b2eRTbok7MfxndW0cHse+BUDMqmkbvUeVB0T6CT3Ae4Fs9QGpnlYd+km0U9Kdo85ItYEftW5M/M5NKvevU3XfLZHTfm+5yBfRkmUbH97ai303w75dd8rOrQ1BI7TyAdLRrq4UHpV0dOGi25TVprXt6RvbIMemAOhVib/ElaOZO5QmB0kTvbMJewa/ljreSl12axKWdgOodDJO+Uqgjz1c4S8HOPja2FzH2x+kDTQXqfjPFE3L2/cCtl9Y7cSW9PlKecq6z1hy2Fdbbu/8s+5fIUqnp5pMc3UZAv8yyVE9TGeNtZZI7Pm9SHS8M7b5fk39rWDvCarYXMR1Iydr96whdc2+S7oNUV5cqUu4bL7fF9qJ5LgTO28URJ/ueKCffO14Q2E9AJ1x1S+f9JbeW+Jv8o39quu2r3Ovwh3aOZGsHyyeatfGGW8xKWm7nvwtrFpIi1V/Ny/byHgIhCOxN6YQwgj7iJ9CK7ZWFpVZLyvqIvYWNnarKhe/jRHSnCuuFDprttdeP8hkC3gkg+N4R59OBLAmzSe8dVXfZpLjOLKJ6RWrDgh5VrQgg+Fb4yqr8/rPqlXjceYLoAZ26ev7gWGIH2nsJjLdRsLxoJkYLc2MjgODHFpGI7dFJIkluq+iHfplfZBxbapnOedcsqXNsE81BoCsBBL8rKco1BAbZFXIe1U6ZZ6ZfhYEulqbmUi9DAgh+hkH16VKbf77x2Uesbdumc2SFks0cSKxYsCshAgh+QsGKyNQihevDQTW2iMGNpHMuLepTFQLWBBB8a4TlNSB3+F0E9bo22Avf4qHn23b4lHTWqanf8hCLV6Z1qQcBVwQQfFckC2qnnbz9MZjLcpdm775M6rSdyN2KT7f0Z3qncSX/0C62tMlhCAQjgOAHQ51XR4NM3g6I0HIDONI5A8aOrj8RQPA/seBdDwLFTd5+qMY98KwUldU5s5UDfIDAQAQQ/IHAZ9LtNIQfslHZdYh+dvWxvK//rnKbzt0dkL/fxIVj4Qkg+OGZZ9NjO3nr/aYoyalfDwmtXY5pvBXyb3+fMmE7ZADp+yMBBP8jCt70JTDgnbd9TbUqb7kc87VV51SGgEMCCL5DmCU29ehD/js/2izHlO/ErMTvBT7HSQDBjzMuyVjVbFss+7v7NDiC3SXHpv7JPv6kc0zhUc85AQTfOdLyGpw/ymvLABnRf1yH396E1f05t6vhv4lpH/9V0/hUIgEEv8SoO/a5nZSMan+d20ODm7VaLrKF8ckCkYj/ePG+71+WY/YlRnnfBBB834QLaV9E8tyLq4bpovZ5ny5MGps2wnJMU3LU80UAwfdFtrB2233eoxrlOwrB2LSdD4+YsDVlRz0/BBB8P1zLbLV2v1+M3PB0PRRMy/z9lcNfGUMhoN/MCCD4mQV0SHckbz6V/p3eiCU59OuhfLLJ38vumLOh7KZfCGwjgOBvI8Px3gSaEW3teMWOxTbHvR14WGH88FDHI6RzOoKiWEgCCH5I2gX01Y7y3eXyLbY5doB7bNoG+XtTctTzSQDB90m3wLab7RYcrtiRjdPehsY4v6uekr8PTZ3+QhBA8ENQLqyPdsXOlQu3rR4LaLikU9bPn5C/dxE92oiNAIIfW0RysaeuJtauGAq2db/3DYyN2yF/b4yOin4JIPh++Rbbuu5/IytVvrcCcDDoSpexqe3k703JUc83AQTfN+GC2//wWXP3rXFq5/DW/br+TuGom60VTPfPYf19J8gUGoIAgj8E9UL6bCdwz8Td3mvzJY/+44Abj5mKfcX6+0K+3Im6ieAnGrhUzNZJV9lnZyz29hH9q/ePHcwBDAGJ/P0Q1OmzIwEEvyMoipkTUNGXfeF1B8ou6Z0reXTi2MW2BENsy0D+3vx7Qk3/BA79d0EPEKiqNj1zIuvbz2TJo67gOV7jojdrTd/8YzpdO278sdmWYW5c3aQi+XsTatQJRgDBD4aajpRAu0b/Qt8/+2Yy1r+6d72LEb22NeSL/P2Q9Om7CwEEvwslynghEMGjC936Rf7eLU9ac06AHL5zpDRYKgHy96VGPh2/Efx0YoWlcRMgfx93fLBOCCD4fA1yJjAL5Rz5+1Ck6ceGAIJvQ4+6EFgQIH+/IMHfiAkg+BEHB9PSIfDb36ev0rEWS0slgOCXGnn8dkdg2F093flBS9kTQPCzD3G5Dsrma9dBvB92V88gLtJJHgQQ/DziiBcbCATcfG22oXsOQSA6Agh+dCHBoMQIvMvuBrLEAoC53Qkg+N1ZURICmwjMNh3kGARiJIDgxxgVbHJJoMsOncb9ydbPrM4xpkfF0AQQ/NDE6S8sgXn11meHj+4GfQyjT9doO0MCCH6GQcWlYASuAk4MB3OKjvIlgODnG1s8EwKyHf6lLxBsp+CLLO36IoDg+yJLu1EQqA/8pXTkH89FFE5iBAQ6EkDwO4KiGATWCNzooxvXjvERAlETQPCjDg/GOSAwc9DGgyYkncPqnAdUOBA7AQQ/9ghhX5QESOdEGRaM2kMAwd8DiNNpE9Dn5XrwgHSOB6g06Z8Agu+fMT0MSMDHw9FJ5wwYULq2IoDgW+GjchIEHG9f/PiumibhN0ZCYI0Agr8GhI/5Eahrp9skv+Zmq/y+I6V4hOCXEumC/XR681XN6L7gr1LyriP4yYcQB/YRkA3OZvvKdDovqSG2Qu5EikKREkDwIw0MZrkj0N4gdWPd4kF1bt0GDUBgQAII/oDw6TocAQcra14zug8XL3ryQwDB98OVViMjYLmy5ub2cXUWmUuYA4HeBP4faHJ5wulCvfgAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/images/steth.png":
/*!******************************!*\
  !*** ./src/images/steth.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/steth.60c65ec7.png");

/***/ }),

/***/ "./src/images/whitelogo.svg":
/*!**********************************!*\
  !*** ./src/images/whitelogo.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/whitelogo.5edce527.svg");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/albert/projects/med-bakery-react/client/src/index.tsx";






react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 5
}, undefined), document.getElementById('root'));

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

/***/ }),

/***/ "./src/types.tsx":
/*!***********************!*\
  !*** ./src/types.tsx ***!
  \***********************/
/*! exports provided: NOMORE, ecgOptions, normalECGParameters, normalPhases, defaultECGQuestion, defaultTopics, emptySection, emptyQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOMORE", function() { return NOMORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecgOptions", function() { return ecgOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalECGParameters", function() { return normalECGParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalPhases", function() { return normalPhases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultECGQuestion", function() { return defaultECGQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTopics", function() { return defaultTopics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptySection", function() { return emptySection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyQuestion", function() { return emptyQuestion; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// the null answered question as a signal to the server
const NOMORE = {
  sections: [{
    stem: "No More Questions",
    question: "",
    explanations: [],
    options: [],
    correctOption: 1,
    selectedOption: -1,
    percentages: [0, 0, 0, 0, 0],
    learningPointIdxs: [0]
  }],
  categoryPath: [],
  _id: "",
  answered: false,
  questionIdx: -1,
  chat: [],
  notes: "",
  timeLastAttempted: 0,
  timeLastUpdated: 0,
  type: "active"
};
const ecgOptions = {
  rate: ["", "Normal", "Brady", "Tachy"],
  rhythm: ["", "Regular", "Paced", "Regularly Irregular", "Irregularly Irregular"],
  axis: ["", "Normal", "LAD", "RAD"],
  ddx: ["", "Normal", "Atrial Fibrillation", "Sinus Tachycardia", "Sinus Bradycardia", "Inferior STEMI", "Lateral STEMI", "Anterior STEMI", "Septal STEMI", "Mobitz II second degree heart block", "Ventricular Fibrillation", "Supraventricular tachycardia", "Pericarditis"]
};
const normalECGParameters = {
  bpm: 80,
  rhythm: 'r',
  stelevation: "none",
  precordialPhase: 0,
  eithovenPhase: 50,
  block: "none",
  waves: {
    p: {
      offset: 50,
      radius: 40,
      mag: 10
    },
    pr: {
      offset: 0,
      radius: 1,
      mag: 0
    },
    r: {
      offset: 0,
      radius: 7,
      mag: 30
    },
    st: {
      offset: 0,
      radius: 0,
      mag: 0
    },
    t: {
      offset: 0,
      radius: 80,
      mag: 15
    }
  }
};
const normalPhases = [[0, 240, 20, 80], [60, 300, 40, 100], [120, 90, 60, 120], [60, 60, 60, 60]];
const defaultECGQuestion = {
  topicName: "Normal",
  answered: false,
  ecgParameters: normalECGParameters,
  explanation: "nonrender",
  sections: [{
    sectionTitle: "Rate?",
    options: ecgOptions.rate,
    correct: "",
    "selected": ""
  }, {
    sectionTitle: "Rhythm?",
    options: ecgOptions.rhythm,
    correct: "",
    "selected": ""
  }, {
    sectionTitle: "Axis?",
    options: ecgOptions.axis,
    correct: "",
    "selected": ""
  }, {
    sectionTitle: "DDX?",
    options: ecgOptions.ddx,
    correct: "",
    "selected": ""
  }]
}; // export const normalPhases = {
//     lead1: 0, lead2: 60, lead3: 120,
//     avr: 240, avl: 300, avf: 90,
//     v1: 20, v2: 40, v3: 60, 
//     v4: 80, v5: 100, v6: 120
// }

const defaultTopics = [{
  "name": "Rate",
  "selected": false,
  "attempts": 0,
  "correct": 0
}, {
  "name": "Arrhythmias",
  "selected": false,
  "attempts": 0,
  "correct": 0
}, {
  "name": "ACS",
  "selected": false,
  "attempts": 0,
  "correct": 0
}];
const potetnialtopics = [{
  name: "Rate",
  selected: false
}, {
  name: "Arrhythmias",
  selected: false
}, {
  name: "Heart Block",
  selected: false
}, {
  name: "ACS",
  selected: false
}, {
  name: "Eponymous",
  selected: false
}, {
  name: "Pericarditis",
  selected: false
}, {
  name: "Heart Failure",
  selected: false
}, {
  name: "Chronic Changes",
  selected: false
}, {
  name: "Pacing",
  selected: false
}];
const emptySection = {
  stem: "",
  question: "",
  explanations: [],
  options: [],
  correctOption: 1,
  selectedOption: -1,
  percentages: [0, 0, 0, 0, 0]
};
const emptyQuestion = {
  sections: [],
  categoryPath: [],
  _id: "",
  answered: false,
  questionIdx: -1,
  chat: [],
  notes: "",
  timeLastAttempted: 0,
  timeLastUpdated: 0,
  type: "active"
};

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

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/albert/projects/med-bakery-react/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/albert/projects/med-bakery-react/client/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/albert/projects/med-bakery-react/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/albert/projects/med-bakery-react/client/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map