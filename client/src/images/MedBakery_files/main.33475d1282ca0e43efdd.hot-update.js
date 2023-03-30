webpackHotUpdate("main",{

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
            color: idx === selectedPOI ? "green" : "purple"
          },
          onClick: () => updateSelectedPOI(idx)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            width: "500px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            left: 250,
            top: 310,
            color: "white"
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

/***/ })

})
//# sourceMappingURL=main.33475d1282ca0e43efdd.hot-update.js.map