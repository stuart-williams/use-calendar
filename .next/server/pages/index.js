module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/date-fns */ \"@date-io/date-fns\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/addDays */ \"date-fns/addDays\");\n/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_addDays__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/addMonths */ \"date-fns/addMonths\");\n/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/format */ \"date-fns/format\");\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/isSameDay */ \"date-fns/isSameDay\");\n/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/isValid */ \"date-fns/isValid\");\n/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_isValid__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var date_fns_locale_en_GB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale/en-GB */ \"date-fns/locale/en-GB\");\n/* harmony import */ var date_fns_locale_en_GB__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en_GB__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale/en-US */ \"date-fns/locale/en-US\");\n/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/locale/es */ \"date-fns/locale/es\");\n/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_es__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var src_use_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/use-calendar */ \"./src/use-calendar.ts\");\n\nvar _jsxFileName = \"/Users/Stuart/workspace/use-calendar/pages/index.tsx\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst locales = {\n  \"en-GB\": date_fns_locale_en_GB__WEBPACK_IMPORTED_MODULE_9___default.a,\n  \"en-US\": date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_10___default.a,\n  es: (date_fns_locale_es__WEBPACK_IMPORTED_MODULE_11___default())\n};\nconst events = [{\n  title: \"Today\",\n  start: new Date()\n}, {\n  title: \"Today\",\n  start: new Date()\n}, {\n  title: \"Tomorrow\",\n  start: date_fns_addDays__WEBPACK_IMPORTED_MODULE_4___default()(new Date(), 1)\n}];\n\nconst Calendar = ({\n  d\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__[\"useRouter\"])();\n  const defaultDate = new Date(d);\n  const locale = locales[router.locale];\n  const dateUtils = new _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3___default.a({\n    locale\n  });\n  const calendar = Object(src_use_calendar__WEBPACK_IMPORTED_MODULE_14__[\"default\"])({\n    dateUtils,\n    defaultDate\n  });\n\n  const handlePrevClick = () => {\n    const d = date_fns_format__WEBPACK_IMPORTED_MODULE_6___default()(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_5___default()(calendar.date, -1), \"yyyy-MM\");\n    router.replace(`?d=${d}`, undefined, {\n      shallow: true\n    });\n    calendar.navigatePrev();\n  };\n\n  const handleNextClick = () => {\n    const d = date_fns_format__WEBPACK_IMPORTED_MODULE_6___default()(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_5___default()(calendar.date, 1), \"yyyy-MM\");\n    router.replace(`?d=${d}`, undefined, {\n      shallow: true\n    });\n    calendar.navigateNext();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    maxW: \"lg\",\n    py: 8,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      bg: \"white\",\n      overflow: \"hidden\",\n      borderRadius: \"lg\",\n      borderWidth: \"1px\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        py: 4,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n          \"aria-label\": \"Prev\",\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__[\"ChevronLeftIcon\"], {\n            boxSize: 8\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 19\n          }, undefined),\n          onClick: handlePrevClick\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n          width: \"200px\",\n          fontWeight: \"bold\",\n          textAlign: \"center\",\n          textTransform: \"uppercase\",\n          children: calendar.month.monthAndYear\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n          \"aria-label\": \"Next\",\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__[\"ChevronRightIcon\"], {\n            boxSize: 8\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 19\n          }, undefined),\n          onClick: handleNextClick\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n        columns: 7,\n        children: [calendar.weekdays.map(({\n          weekdayShort\n        }, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          justifyContent: \"center\",\n          p: 2,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n            fontSize: \"sm\",\n            fontWeight: \"bold\",\n            textTransform: \"uppercase\",\n            children: weekdayShort\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, undefined)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, undefined)), calendar.days.map((day, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          p: 1,\n          minHeight: \"100px\",\n          flexDirection: \"column\",\n          bg: day.isOutsideMonth ? \"gray.50\" : \"white\",\n          borderColor: \"gray.200\",\n          borderTopWidth: \"1px\",\n          borderRightWidth: (i + 1) % 7 === 0 ? \"0px\" : \"1px\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n            flex: 1,\n            width: \"100%\",\n            fontSize: \"sm\",\n            textAlign: \"right\",\n            fontWeight: day.isToday ? \"bold\" : \"normal\",\n            children: day.dayOfMonth\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 15\n          }, undefined), events.filter(ev => date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_7___default()(ev.start, day.date)).map(ev => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              size: \"xs\",\n              colorScheme: \"blue\",\n              isFullWidth: true,\n              children: ev.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 21\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 19\n          }, undefined))]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 13\n        }, undefined))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  const date = new Date(String(context.query.d));\n  return {\n    props: {\n      d: date_fns_format__WEBPACK_IMPORTED_MODULE_6___default()(date_fns_isValid__WEBPACK_IMPORTED_MODULE_8___default()(date) ? date : new Date(), \"yyyy-MM\")\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJsb2NhbGVzIiwiZW5HQiIsImVuVVMiLCJlcyIsImV2ZW50cyIsInRpdGxlIiwic3RhcnQiLCJEYXRlIiwiYWRkRGF5cyIsIkNhbGVuZGFyIiwiZCIsInJvdXRlciIsInVzZVJvdXRlciIsImRlZmF1bHREYXRlIiwibG9jYWxlIiwiZGF0ZVV0aWxzIiwiRGF0ZUZuc0FkYXB0ZXIiLCJjYWxlbmRhciIsInVzZUNhbGVuZGFyIiwiaGFuZGxlUHJldkNsaWNrIiwiZm9ybWF0IiwiYWRkTW9udGhzIiwiZGF0ZSIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwibmF2aWdhdGVQcmV2IiwiaGFuZGxlTmV4dENsaWNrIiwibmF2aWdhdGVOZXh0IiwibW9udGgiLCJtb250aEFuZFllYXIiLCJ3ZWVrZGF5cyIsIm1hcCIsIndlZWtkYXlTaG9ydCIsImkiLCJkYXlzIiwiZGF5IiwiaXNPdXRzaWRlTW9udGgiLCJpc1RvZGF5IiwiZGF5T2ZNb250aCIsImZpbHRlciIsImV2IiwiaXNTYW1lRGF5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIlN0cmluZyIsInF1ZXJ5IiwicHJvcHMiLCJpc1ZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHO0FBQ2QsV0FBU0MsNERBREs7QUFFZCxXQUFTQyw2REFGSztBQUdkQyxrRUFBRUE7QUFIWSxDQUFoQjtBQU1BLE1BQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLE9BQUssRUFBRSxPQURUO0FBRUVDLE9BQUssRUFBRSxJQUFJQyxJQUFKO0FBRlQsQ0FEYSxFQUtiO0FBQ0VGLE9BQUssRUFBRSxPQURUO0FBRUVDLE9BQUss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QUFXOEIsR0FBRyxDQUFDZCxJQUFmLENBRDFCLEVBRUVVLEdBRkYsQ0FFT1MsRUFBRCxpQkFDSCxxRUFBQyxvREFBRDtBQUFBLG1DQUNFLHFFQUFDLHVEQUFEO0FBQVEsa0JBQUksRUFBQyxJQUFiO0FBQWtCLHlCQUFXLEVBQUMsTUFBOUI7QUFBcUMseUJBQVcsTUFBaEQ7QUFBQSx3QkFDR0EsRUFBRSxDQUFDcEM7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISCxDQW5CSDtBQUFBLFdBQ082QixDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsQ0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtFRCxDQXJGRDs7QUF1Rk8sTUFBTVMsa0JBQXNDLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUN2RSxRQUFNdEIsSUFBSSxHQUFHLElBQUlmLElBQUosQ0FBU3NDLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDRSxLQUFSLENBQWNwQyxDQUFmLENBQWYsQ0FBYjtBQUVBLFNBQU87QUFDTHFDLFNBQUssRUFBRTtBQUNMckMsT0FBQyxFQUFFVSxzREFBTSxDQUFDNEIsdURBQU8sQ0FBQzFCLElBQUQsQ0FBUCxHQUFnQkEsSUFBaEIsR0FBdUIsSUFBSWYsSUFBSixFQUF4QixFQUFvQyxTQUFwQztBQURKO0FBREYsR0FBUDtBQUtELENBUk07QUFVUUUsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgSWNvbkJ1dHRvbixcbiAgU2ltcGxlR3JpZCxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBEYXRlRm5zQWRhcHRlciBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcbmltcG9ydCBhZGREYXlzIGZyb20gXCJkYXRlLWZucy9hZGREYXlzXCI7XG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCJkYXRlLWZucy9hZGRNb250aHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiZGF0ZS1mbnMvaXNTYW1lRGF5XCI7XG5pbXBvcnQgaXNWYWxpZCBmcm9tIFwiZGF0ZS1mbnMvaXNWYWxpZFwiO1xuaW1wb3J0IGVuR0IgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1HQlwiO1xuaW1wb3J0IGVuVVMgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiO1xuaW1wb3J0IGVzIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZXNcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQ2FsZW5kYXIgZnJvbSBcInNyYy91c2UtY2FsZW5kYXJcIjtcblxuY29uc3QgbG9jYWxlcyA9IHtcbiAgXCJlbi1HQlwiOiBlbkdCLFxuICBcImVuLVVTXCI6IGVuVVMsXG4gIGVzLFxufTtcblxuY29uc3QgZXZlbnRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiVG9kYXlcIixcbiAgICBzdGFydDogbmV3IERhdGUoKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRvZGF5XCIsXG4gICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUb21vcnJvd1wiLFxuICAgIHN0YXJ0OiBhZGREYXlzKG5ldyBEYXRlKCksIDEpLFxuICB9LFxuXTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZDogc3RyaW5nO1xufVxuXG5jb25zdCBDYWxlbmRhcjogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgZCB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkZWZhdWx0RGF0ZSA9IG5ldyBEYXRlKGQpO1xuICBjb25zdCBsb2NhbGUgPSBsb2NhbGVzW3JvdXRlci5sb2NhbGVdO1xuICBjb25zdCBkYXRlVXRpbHMgPSBuZXcgRGF0ZUZuc0FkYXB0ZXIoeyBsb2NhbGUgfSk7XG4gIGNvbnN0IGNhbGVuZGFyID0gdXNlQ2FsZW5kYXIoeyBkYXRlVXRpbHMsIGRlZmF1bHREYXRlIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVByZXZDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gZm9ybWF0KGFkZE1vbnRocyhjYWxlbmRhci5kYXRlLCAtMSksIFwieXl5eS1NTVwiKTtcbiAgICByb3V0ZXIucmVwbGFjZShgP2Q9JHtkfWAsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xuICAgIGNhbGVuZGFyLm5hdmlnYXRlUHJldigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gZm9ybWF0KGFkZE1vbnRocyhjYWxlbmRhci5kYXRlLCAxKSwgXCJ5eXl5LU1NXCIpO1xuICAgIHJvdXRlci5yZXBsYWNlKGA/ZD0ke2R9YCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XG4gICAgY2FsZW5kYXIubmF2aWdhdGVOZXh0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFc9XCJsZ1wiIHB5PXs4fT5cbiAgICAgIDxCb3ggYmc9XCJ3aGl0ZVwiIG92ZXJmbG93PVwiaGlkZGVuXCIgYm9yZGVyUmFkaXVzPVwibGdcIiBib3JkZXJXaWR0aD1cIjFweFwiPlxuICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBweT17NH0+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2XCJcbiAgICAgICAgICAgIGljb249ezxDaGV2cm9uTGVmdEljb24gYm94U2l6ZT17OH0gLz59XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2Q2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhbGVuZGFyLm1vbnRoLm1vbnRoQW5kWWVhcn1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0XCJcbiAgICAgICAgICAgIGljb249ezxDaGV2cm9uUmlnaHRJY29uIGJveFNpemU9ezh9IC8+fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17N30+XG4gICAgICAgICAge2NhbGVuZGFyLndlZWtkYXlzLm1hcCgoeyB3ZWVrZGF5U2hvcnQgfSwgaSkgPT4gKFxuICAgICAgICAgICAgPEZsZXgga2V5PXtpfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHA9ezJ9PlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgZm9udFdlaWdodD1cImJvbGRcIiB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAge3dlZWtkYXlTaG9ydH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtjYWxlbmRhci5kYXlzLm1hcCgoZGF5LCBpKSA9PiAoXG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHA9ezF9XG4gICAgICAgICAgICAgIG1pbkhlaWdodD1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIGJnPXtkYXkuaXNPdXRzaWRlTW9udGggPyBcImdyYXkuNTBcIiA6IFwid2hpdGVcIn1cbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5LjIwMFwiXG4gICAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoPVwiMXB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aD17KGkgKyAxKSAlIDcgPT09IDAgPyBcIjBweFwiIDogXCIxcHhcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e2RheS5pc1RvZGF5ID8gXCJib2xkXCIgOiBcIm5vcm1hbFwifVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RheS5kYXlPZk1vbnRofVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIHtldmVudHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChldikgPT4gaXNTYW1lRGF5KGV2LnN0YXJ0LCBkYXkuZGF0ZSkpXG4gICAgICAgICAgICAgICAgLm1hcCgoZXYpID0+IChcbiAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInhzXCIgY29sb3JTY2hlbWU9XCJibHVlXCIgaXNGdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgICAgICAge2V2LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShTdHJpbmcoY29udGV4dC5xdWVyeS5kKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZDogZm9ybWF0KGlzVmFsaWQoZGF0ZSkgPyBkYXRlIDogbmV3IERhdGUoKSwgXCJ5eXl5LU1NXCIpLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/use-calendar.ts":
/*!*****************************!*\
  !*** ./src/use-calendar.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useCalendar = ({\n  dateUtils,\n  defaultDate\n}) => {\n  const utilsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(dateUtils);\n  const {\n    0: date,\n    1: setDate\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultDate || dateUtils.date());\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => {\n    const utils = utilsRef.current;\n    const first = utils.startOfWeek(utils.startOfMonth(date));\n    const last = utils.endOfWeek(utils.endOfMonth(date));\n    const days = [];\n    let curr = first;\n\n    while (utils.isBefore(curr, last)) {\n      days.push({\n        date: curr,\n        dayOfMonth: utils.format(curr, \"dayOfMonth\"),\n        isOutsideMonth: !utils.isSameMonth(date, curr),\n        isToday: utils.isSameDay(curr, utils.date())\n      });\n      curr = utils.addDays(curr, 1);\n    }\n\n    return {\n      date,\n      month: {\n        month: utils.format(date, \"month\"),\n        monthAndYear: utils.format(date, \"monthAndYear\")\n      },\n      weekdays: utils.getWeekArray(date)[0].map(date => ({\n        weekday: utils.format(date, \"weekday\"),\n        weekdayShort: utils.format(date, \"weekdayShort\")\n      })),\n      days,\n      navigatePrev: () => setDate(utils.addMonths(date, -1)),\n      navigateNext: () => setDate(utils.addMonths(date, 1))\n    };\n  }, [date]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCalendar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXNlLWNhbGVuZGFyLnRzPzY5ZTAiXSwibmFtZXMiOlsidXNlQ2FsZW5kYXIiLCJkYXRlVXRpbHMiLCJkZWZhdWx0RGF0ZSIsInV0aWxzUmVmIiwidXNlUmVmIiwiZGF0ZSIsInNldERhdGUiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1dGlscyIsImN1cnJlbnQiLCJmaXJzdCIsInN0YXJ0T2ZXZWVrIiwic3RhcnRPZk1vbnRoIiwibGFzdCIsImVuZE9mV2VlayIsImVuZE9mTW9udGgiLCJkYXlzIiwiY3VyciIsImlzQmVmb3JlIiwicHVzaCIsImRheU9mTW9udGgiLCJmb3JtYXQiLCJpc091dHNpZGVNb250aCIsImlzU2FtZU1vbnRoIiwiaXNUb2RheSIsImlzU2FtZURheSIsImFkZERheXMiLCJtb250aCIsIm1vbnRoQW5kWWVhciIsIndlZWtkYXlzIiwiZ2V0V2Vla0FycmF5IiwibWFwIiwid2Vla2RheSIsIndlZWtkYXlTaG9ydCIsIm5hdmlnYXRlUHJldiIsImFkZE1vbnRocyIsIm5hdmlnYXRlTmV4dCJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBaUNBLE1BQU1BLFdBQVcsR0FBRyxDQUFrQjtBQUNwQ0MsV0FEb0M7QUFFcENDO0FBRm9DLENBQWxCLEtBRzJCO0FBQzdDLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQ0gsU0FBRCxDQUF2QjtBQUNBLFFBQU07QUFBQSxPQUFDSSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQ0wsV0FBVyxJQUFJRCxTQUFTLENBQUNJLElBQVYsRUFBaEIsQ0FBaEM7QUFFQSxTQUFPRyxxREFBTyxDQUFDLE1BQU07QUFDbkIsVUFBTUMsS0FBSyxHQUFHTixRQUFRLENBQUNPLE9BQXZCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFdBQU4sQ0FBa0JILEtBQUssQ0FBQ0ksWUFBTixDQUFtQlIsSUFBbkIsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1TLElBQUksR0FBR0wsS0FBSyxDQUFDTSxTQUFOLENBQWdCTixLQUFLLENBQUNPLFVBQU4sQ0FBaUJYLElBQWpCLENBQWhCLENBQWI7QUFDQSxVQUFNWSxJQUFrQixHQUFHLEVBQTNCO0FBRUEsUUFBSUMsSUFBSSxHQUFHUCxLQUFYOztBQUNBLFdBQU9GLEtBQUssQ0FBQ1UsUUFBTixDQUFlRCxJQUFmLEVBQXFCSixJQUFyQixDQUFQLEVBQW1DO0FBQ2pDRyxVQUFJLENBQUNHLElBQUwsQ0FBVTtBQUNSZixZQUFJLEVBQUVhLElBREU7QUFFUkcsa0JBQVUsRUFBRVosS0FBSyxDQUFDYSxNQUFOLENBQWFKLElBQWIsRUFBbUIsWUFBbkIsQ0FGSjtBQUdSSyxzQkFBYyxFQUFFLENBQUNkLEtBQUssQ0FBQ2UsV0FBTixDQUFrQm5CLElBQWxCLEVBQXdCYSxJQUF4QixDQUhUO0FBSVJPLGVBQU8sRUFBRWhCLEtBQUssQ0FBQ2lCLFNBQU4sQ0FBZ0JSLElBQWhCLEVBQXNCVCxLQUFLLENBQUNKLElBQU4sRUFBdEI7QUFKRCxPQUFWO0FBTUFhLFVBQUksR0FBR1QsS0FBSyxDQUFDa0IsT0FBTixDQUFjVCxJQUFkLEVBQW9CLENBQXBCLENBQVA7QUFDRDs7QUFFRCxXQUFPO0FBQ0xiLFVBREs7QUFFTHVCLFdBQUssRUFBRTtBQUNMQSxhQUFLLEVBQUVuQixLQUFLLENBQUNhLE1BQU4sQ0FBYWpCLElBQWIsRUFBbUIsT0FBbkIsQ0FERjtBQUVMd0Isb0JBQVksRUFBRXBCLEtBQUssQ0FBQ2EsTUFBTixDQUFhakIsSUFBYixFQUFtQixjQUFuQjtBQUZULE9BRkY7QUFNTHlCLGNBQVEsRUFBRXJCLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUIxQixJQUFuQixFQUF5QixDQUF6QixFQUE0QjJCLEdBQTVCLENBQWlDM0IsSUFBRCxLQUFXO0FBQ25ENEIsZUFBTyxFQUFFeEIsS0FBSyxDQUFDYSxNQUFOLENBQWFqQixJQUFiLEVBQW1CLFNBQW5CLENBRDBDO0FBRW5ENkIsb0JBQVksRUFBRXpCLEtBQUssQ0FBQ2EsTUFBTixDQUFhakIsSUFBYixFQUFtQixjQUFuQjtBQUZxQyxPQUFYLENBQWhDLENBTkw7QUFVTFksVUFWSztBQVdMa0Isa0JBQVksRUFBRSxNQUFNN0IsT0FBTyxDQUFDRyxLQUFLLENBQUMyQixTQUFOLENBQWdCL0IsSUFBaEIsRUFBc0IsQ0FBQyxDQUF2QixDQUFELENBWHRCO0FBWUxnQyxrQkFBWSxFQUFFLE1BQU0vQixPQUFPLENBQUNHLEtBQUssQ0FBQzJCLFNBQU4sQ0FBZ0IvQixJQUFoQixFQUFzQixDQUF0QixDQUFEO0FBWnRCLEtBQVA7QUFjRCxHQS9CYSxFQStCWCxDQUFDQSxJQUFELENBL0JXLENBQWQ7QUFnQ0QsQ0F2Q0Q7O0FBeUNlTCwwRUFBZiIsImZpbGUiOiIuL3NyYy91c2UtY2FsZW5kYXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVXRpbHMgfSBmcm9tIFwiQGRhdGUtaW8vY29yZS9JVXRpbHNcIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNb250aCB7XG4gIG1vbnRoOiBzdHJpbmc7XG4gIG1vbnRoQW5kWWVhcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtkYXkge1xuICB3ZWVrZGF5OiBzdHJpbmc7XG4gIHdlZWtkYXlTaG9ydDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheTxURGF0ZT4ge1xuICBkYXRlOiBURGF0ZTtcbiAgZGF5T2ZNb250aDogc3RyaW5nO1xuICBpc091dHNpZGVNb250aDogYm9vbGVhbjtcbiAgaXNUb2RheTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhcjxURGF0ZT4ge1xuICByZWFkb25seSBkYXRlOiBURGF0ZTtcbiAgcmVhZG9ubHkgbW9udGg6IE1vbnRoO1xuICByZWFkb25seSB3ZWVrZGF5czogV2Vla2RheVtdO1xuICByZWFkb25seSBkYXlzOiBEYXk8VERhdGU+W107XG4gIHJlYWRvbmx5IG5hdmlnYXRlUHJldjogKCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgbmF2aWdhdGVOZXh0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyT3B0aW9uczxURGF0ZT4ge1xuICBkYXRlVXRpbHM6IElVdGlsczxURGF0ZT47XG4gIGRlZmF1bHREYXRlPzogVERhdGU7XG59XG5cbmNvbnN0IHVzZUNhbGVuZGFyID0gPFREYXRlID0gdW5rbm93bj4oe1xuICBkYXRlVXRpbHMsXG4gIGRlZmF1bHREYXRlLFxufTogQ2FsZW5kYXJPcHRpb25zPFREYXRlPik6IENhbGVuZGFyPFREYXRlPiA9PiB7XG4gIGNvbnN0IHV0aWxzUmVmID0gdXNlUmVmKGRhdGVVdGlscyk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKGRlZmF1bHREYXRlIHx8IGRhdGVVdGlscy5kYXRlKCkpO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB1dGlscyA9IHV0aWxzUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgZmlyc3QgPSB1dGlscy5zdGFydE9mV2Vlayh1dGlscy5zdGFydE9mTW9udGgoZGF0ZSkpO1xuICAgIGNvbnN0IGxhc3QgPSB1dGlscy5lbmRPZldlZWsodXRpbHMuZW5kT2ZNb250aChkYXRlKSk7XG4gICAgY29uc3QgZGF5czogRGF5PFREYXRlPltdID0gW107XG5cbiAgICBsZXQgY3VyciA9IGZpcnN0O1xuICAgIHdoaWxlICh1dGlscy5pc0JlZm9yZShjdXJyLCBsYXN0KSkge1xuICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgZGF0ZTogY3VycixcbiAgICAgICAgZGF5T2ZNb250aDogdXRpbHMuZm9ybWF0KGN1cnIsIFwiZGF5T2ZNb250aFwiKSxcbiAgICAgICAgaXNPdXRzaWRlTW9udGg6ICF1dGlscy5pc1NhbWVNb250aChkYXRlLCBjdXJyKSxcbiAgICAgICAgaXNUb2RheTogdXRpbHMuaXNTYW1lRGF5KGN1cnIsIHV0aWxzLmRhdGUoKSksXG4gICAgICB9KTtcbiAgICAgIGN1cnIgPSB1dGlscy5hZGREYXlzKGN1cnIsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlLFxuICAgICAgbW9udGg6IHtcbiAgICAgICAgbW9udGg6IHV0aWxzLmZvcm1hdChkYXRlLCBcIm1vbnRoXCIpLFxuICAgICAgICBtb250aEFuZFllYXI6IHV0aWxzLmZvcm1hdChkYXRlLCBcIm1vbnRoQW5kWWVhclwiKSxcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5czogdXRpbHMuZ2V0V2Vla0FycmF5KGRhdGUpWzBdLm1hcCgoZGF0ZSkgPT4gKHtcbiAgICAgICAgd2Vla2RheTogdXRpbHMuZm9ybWF0KGRhdGUsIFwid2Vla2RheVwiKSxcbiAgICAgICAgd2Vla2RheVNob3J0OiB1dGlscy5mb3JtYXQoZGF0ZSwgXCJ3ZWVrZGF5U2hvcnRcIiksXG4gICAgICB9KSksXG4gICAgICBkYXlzLFxuICAgICAgbmF2aWdhdGVQcmV2OiAoKSA9PiBzZXREYXRlKHV0aWxzLmFkZE1vbnRocyhkYXRlLCAtMSkpLFxuICAgICAgbmF2aWdhdGVOZXh0OiAoKSA9PiBzZXREYXRlKHV0aWxzLmFkZE1vbnRocyhkYXRlLCAxKSksXG4gICAgfTtcbiAgfSwgW2RhdGVdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNhbGVuZGFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/use-calendar.ts\n");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCI/ZjI5YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL2ljb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/icons\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "@date-io/date-fns":
/*!************************************!*\
  !*** external "@date-io/date-fns" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@date-io/date-fns\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZGF0ZS1pby9kYXRlLWZuc1wiP2RlYzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGRhdGUtaW8vZGF0ZS1mbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZGF0ZS1pby9kYXRlLWZuc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@date-io/date-fns\n");

/***/ }),

/***/ "date-fns/addDays":
/*!***********************************!*\
  !*** external "date-fns/addDays" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/addDays\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9hZGREYXlzXCI/ZTg0NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJkYXRlLWZucy9hZGREYXlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvYWRkRGF5c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/addDays\n");

/***/ }),

/***/ "date-fns/addMonths":
/*!*************************************!*\
  !*** external "date-fns/addMonths" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/addMonths\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9hZGRNb250aHNcIj83M2ExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2FkZE1vbnRocy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2FkZE1vbnRoc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/addMonths\n");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/format\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9mb3JtYXRcIj8wY2E0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2Zvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2Zvcm1hdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/format\n");

/***/ }),

/***/ "date-fns/isSameDay":
/*!*************************************!*\
  !*** external "date-fns/isSameDay" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/isSameDay\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9pc1NhbWVEYXlcIj9iMzgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2lzU2FtZURheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2lzU2FtZURheVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/isSameDay\n");

/***/ }),

/***/ "date-fns/isValid":
/*!***********************************!*\
  !*** external "date-fns/isValid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/isValid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9pc1ZhbGlkXCI/YmI0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJkYXRlLWZucy9pc1ZhbGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvaXNWYWxpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/isValid\n");

/***/ }),

/***/ "date-fns/locale/en-GB":
/*!****************************************!*\
  !*** external "date-fns/locale/en-GB" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale/en-GB\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGUvZW4tR0JcIj8wZGM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2xvY2FsZS9lbi1HQi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZS9lbi1HQlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/locale/en-GB\n");

/***/ }),

/***/ "date-fns/locale/en-US":
/*!****************************************!*\
  !*** external "date-fns/locale/en-US" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale/en-US\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIj83NGRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2xvY2FsZS9lbi1VUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/locale/en-US\n");

/***/ }),

/***/ "date-fns/locale/es":
/*!*************************************!*\
  !*** external "date-fns/locale/es" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale/es\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGUvZXNcIj84NzI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2xvY2FsZS9lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZS9lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/locale/es\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });