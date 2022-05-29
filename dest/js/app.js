/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ }),

/***/ "./src/js/macros/hamburgerMenu.js":
/*!****************************************!*\
  !*** ./src/js/macros/hamburgerMenu.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var HamburgerMenu = function () {
  var init = function init() {
    var btn = document.querySelector("[hamburger-js]"),
        btnClose = document.querySelector('.menu__close'),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]");
    /**
     * @description
     */

    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;
      elem.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");
      hideScrollContainer.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
      });
    });
    btnClose.addEventListener('click', function (ev) {
      btn.classList.remove("is-active");
      mobileContainer.classList.remove("is-open");
      mobileContainer.classList.add("is-animated");
      hideScrollContainer.forEach(function (val, idx) {
        val.classList.remove("is-hideScroll");
      });
      setTimeout(function () {
        return mobileContainer.classList.remove("is-animated");
      }, 300);
    }, false);
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenu);

/***/ }),

/***/ "./src/js/macros/headerFixed.js":
/*!**************************************!*\
  !*** ./src/js/macros/headerFixed.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var HeaderFixed = function () {
  var init = function init() {
    var countScroll = $(window).scrollTop(),
        headerElement = $('.header');

    if (countScroll > 10) {
      headerElement.addClass("is-fixed");
    } else {
      headerElement.removeClass("is-fixed");
    }
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HeaderFixed);

/***/ }),

/***/ "./src/js/macros/menuToggle.js":
/*!*************************************!*\
  !*** ./src/js/macros/menuToggle.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var MenuToggle = function () {
  var init = function init() {
    $('.menu__btn').hover(function (ev) {
      var el = $(ev.currentTarget),
          elID = el.attr('data-id');

      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        el.addClass('is-hover');
        $('.menu__content').hide();
        $('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
      }
    }, function (ev) {});
    $('.menu__link-wrapper').hover(function (ev) {}, function (ev) {
      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        $('.menu__content').hide();
      }
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MenuToggle);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
/* harmony import */ var _macros_headerFixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macros/headerFixed */ "./src/js/macros/headerFixed.js");
/* harmony import */ var _macros_hamburgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macros/hamburgerMenu */ "./src/js/macros/hamburgerMenu.js");
/* harmony import */ var _macros_menuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macros/menuToggle */ "./src/js/macros/menuToggle.js");



 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  _macros_headerFixed__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _macros_hamburgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _macros_menuToggle__WEBPACK_IMPORTED_MODULE_3__["default"].init();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {
  _macros_headerFixed__WEBPACK_IMPORTED_MODULE_1__["default"].init();
}, false);
}();
/******/ })()
;