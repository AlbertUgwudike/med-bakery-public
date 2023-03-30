webpackHotUpdate("main",{

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
/* harmony import */ var _General_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../General/Container */ "./src/components/General/Container.tsx");
/* harmony import */ var _ECGAnsweredOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ECGAnsweredOptions */ "./src/components/ECGPage/ECGAnsweredOptions.tsx");
/* harmony import */ var _ECGOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ECGOptions */ "./src/components/ECGPage/ECGOptions.tsx");
/* harmony import */ var _ECGQuestionProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ECGQuestionProgress */ "./src/components/ECGPage/ECGQuestionProgress.tsx");
/* harmony import */ var _newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newECGtings/ECGGen2 */ "./src/components/ECGPage/newECGtings/ECGGen2.tsx");
/* harmony import */ var _newECGtings_ECGSketch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newECGtings/ECGSketch */ "./src/components/ECGPage/newECGtings/ECGSketch.tsx");
/* harmony import */ var _newECGtings_ECGSketchThemes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newECGtings/ECGSketchThemes */ "./src/components/ECGPage/newECGtings/ECGSketchThemes.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
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
    updateQuestions([Object(_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_7__["generateECG"])(props.topics)]);
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
    } : q).concat([Object(_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_7__["generateECG"])(props.topics)]));
  };

  const refreshQuestion = () => {
    updateQuestions(questions.map((q, i) => i === questions.length - 1 ? Object(_newECGtings_ECGGen2__WEBPACK_IMPORTED_MODULE_7__["generateECG"])(props.topics) : q));
  };

  if (questions.length === 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {}, void 0, false); // can only submit if last question and all fields answered

  const submitPermitted = questionIdx === questions.length - 1 && questions[questions.length - 1].sections.reduce((flag, section) => flag && section.selected !== "unselected", true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_General_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    darkMode: darkMode,
    style: {
      textAlign: "center"
    },
    children: [questionIdx === questions.length - 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(BakeButton, {
      darkMode: darkMode,
      onClick: refreshQuestion,
      children: "Bake new ECG"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        textAlign: "center",
        display: "block",
        overflow: "auto"
      },
      id: "ecgsketch",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_newECGtings_ECGSketch__WEBPACK_IMPORTED_MODULE_8__["default"], {
        theme: _newECGtings_ECGSketchThemes__WEBPACK_IMPORTED_MODULE_9__["themes"][darkTheme ? 0 : 1],
        question: questions[questionIdx],
        reviewMode: questionIdx < questions.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        maxWidth: 1000,
        height: "25px",
        margin: "auto",
        textAlign: "left"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(ReveiwButton, {
        darkMode: darkMode,
        onClick: () => updateDarkTheme(!darkTheme),
        children: "Toggle Theme"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined), questions.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/User/ECG",
        style: {
          float: "right"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(ReveiwButton, {
          darkMode: darkMode,
          onClick: props.finishEcgSession,
          children: "Finish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 33
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(ReveiwButton, {
        darkMode: darkMode,
        children: "Finish"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ECGQuestionProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        questionIdx: questionIdx,
        updateQuestionIdx: updateQuestionIdx,
        questions: questions,
        darkMode: darkMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 18
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        font: "30px Champion"
      },
      children: "Interpret It!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "800px",
        border: "2px solid magenta",
        margin: "auto"
      },
      children: questions[questionIdx].sections.map(section => {
        return questions[questionIdx].answered ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ECGAnsweredOptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
          section: section,
          darkMode: darkMode,
          handleOptionChange: handleOptionChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ECGOptions__WEBPACK_IMPORTED_MODULE_5__["default"], {
          section: section,
          darkMode: darkMode,
          handleOptionChange: handleOptionChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 27
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, undefined), submitPermitted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SubmitButton, {
      submitPermitted: submitPermitted,
      onClick: submitPermitted ? submitAnswers : () => {},
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, undefined);
};

_s(ECGSession, "cAU6khXrRCHDCd4EKkuQESz7ylM=");

_c = ECGSession;
/* harmony default export */ __webpack_exports__["default"] = (ECGSession); // const Container = styled.div<{ darkMode: boolean }>`
//     margin: 50px auto;
//     max-width: 1200px;
//     border-radius: 20px;
//     padding: 0 20px 20px 20px;
//     text-align: center;
// `

const BakeButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    display: inline-block;
    border-style: none;
    border-radius: 10px;
    margin: 0 10px 10px 10px;
    width: 200px;
    background-color: ${props => props.darkMode ? "rgba(64, 75, 224, 0.459)" : "#FFC9C9"};
    color: ${props => props.darkMode ? "white" : "black"};
`;
_c2 = BakeButton;
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
_c3 = ReveiwButton;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    width: 200px;
    margin: 40px auto 0 auto;
    font: bold 20px sans-serif;
    border-radius: 20px;
    border-style: none;
    background-color: ${props => props.submitPermitted ? "#FAD000" : "grey"};
`;
_c4 = SubmitButton;
const NextButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
    width: 200px;
    margin: 40px auto 0 auto;
    font: bold 20px sans-serif;
    border-radius: 20px;
    border-style: none;
    background-color: ${props => props.active ? "#FAD000" : "grey"};
`;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "ECGSession");
__webpack_require__.$Refresh$.register(_c2, "BakeButton");
__webpack_require__.$Refresh$.register(_c3, "ReveiwButton");
__webpack_require__.$Refresh$.register(_c4, "SubmitButton");

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
//# sourceMappingURL=main.6d913eb0828ffb08a9d1.hot-update.js.map