/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	module.exports = 'ngLocale';


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	angular.module("ngLocale", [], ["$provide", function($provide) {
	var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
	function getDecimals(n) {
	  n = n + '';
	  var i = n.indexOf('.');
	  return (i == -1) ? 0 : n.length - i - 1;
	}

	function getVF(n, opt_precision) {
	  var v = opt_precision;

	  if (undefined === v) {
	    v = Math.min(getDecimals(n), 3);
	  }

	  var base = Math.pow(10, v);
	  var f = ((n * base) | 0) % base;
	  return {v: v, f: f};
	}

	$provide.value("$locale", {
	  "DATETIME_FORMATS": {
	    "AMPMS": [
	      "AM",
	      "PM"
	    ],
	    "DAY": [
	      "Sunday",
	      "Monday",
	      "Tuesday",
	      "Wednesday",
	      "Thursday",
	      "Friday",
	      "Saturday"
	    ],
	    "ERANAMES": [
	      "Before Christ",
	      "Anno Domini"
	    ],
	    "ERAS": [
	      "BC",
	      "AD"
	    ],
	    "FIRSTDAYOFWEEK": 6,
	    "MONTH": [
	      "January",
	      "February",
	      "March",
	      "April",
	      "May",
	      "June",
	      "July",
	      "August",
	      "September",
	      "October",
	      "November",
	      "December"
	    ],
	    "SHORTDAY": [
	      "Sun",
	      "Mon",
	      "Tue",
	      "Wed",
	      "Thu",
	      "Fri",
	      "Sat"
	    ],
	    "SHORTMONTH": [
	      "Jan",
	      "Feb",
	      "Mar",
	      "Apr",
	      "May",
	      "Jun",
	      "Jul",
	      "Aug",
	      "Sep",
	      "Oct",
	      "Nov",
	      "Dec"
	    ],
	    "STANDALONEMONTH": [
	      "January",
	      "February",
	      "March",
	      "April",
	      "May",
	      "June",
	      "July",
	      "August",
	      "September",
	      "October",
	      "November",
	      "December"
	    ],
	    "WEEKENDRANGE": [
	      5,
	      6
	    ],
	    "fullDate": "EEEE, MMMM d, y",
	    "longDate": "MMMM d, y",
	    "medium": "MMM d, y h:mm:ss a",
	    "mediumDate": "MMM d, y",
	    "mediumTime": "h:mm:ss a",
	    "short": "M/d/yy h:mm a",
	    "shortDate": "M/d/yy",
	    "shortTime": "h:mm a"
	  },
	  "NUMBER_FORMATS": {
	    "CURRENCY_SYM": "$",
	    "DECIMAL_SEP": ".",
	    "GROUP_SEP": ",",
	    "PATTERNS": [
	      {
	        "gSize": 3,
	        "lgSize": 3,
	        "maxFrac": 3,
	        "minFrac": 0,
	        "minInt": 1,
	        "negPre": "-",
	        "negSuf": "",
	        "posPre": "",
	        "posSuf": ""
	      },
	      {
	        "gSize": 3,
	        "lgSize": 3,
	        "maxFrac": 2,
	        "minFrac": 2,
	        "minInt": 1,
	        "negPre": "-\u00a4",
	        "negSuf": "",
	        "posPre": "\u00a4",
	        "posSuf": ""
	      }
	    ]
	  },
	  "id": "en-us",
	  "localeID": "en_US",
	  "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
	});
	}]);


/***/ }
/******/ ]);