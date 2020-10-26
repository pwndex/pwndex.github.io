"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.__forceSmoothScrollPolyfill__ = true;
particlesJS.load('particles-js', 'assets/js/particles.json'); // Fixed Navigation On Scroll

window.onscroll = function () {
  var headerMenu = document.querySelector('.header__nav');

  if (window.pageYOffset > 10) {
    headerMenu.classList.add('header__fixed');
  } else {
    headerMenu.classList.remove('header__fixed');
  }
}; // Navigation Toggle Button Animation


var navToggleButton = document.querySelector('#nav-toggle-button');
var navToggleContainer = document.querySelector('#nav-mobile-container');
var mobileLinks = document.querySelectorAll('a[data-link*="mobile"]');
var desktopLinks = document.querySelectorAll('a[data-link*="desktop"]');
var bodyTag = document.querySelector('body');
navToggleButton.addEventListener('click', function () {
  bodyTag.classList.toggle('body-fixed');
  navToggleButton.classList.toggle('button-active');
  navToggleContainer.classList.toggle('container-disabled');

  var _iterator = _createForOfIteratorHelper(mobileLinks),
      _step;

  try {
    var _loop = function _loop() {
      var link = _step.value;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var linkID = link.getAttribute('href');
        bodyTag.classList.remove('body-fixed');
        navToggleButton.classList.remove('button-active');
        navToggleContainer.classList.add('container-disabled');
        document.querySelector('' + linkID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

var _iterator2 = _createForOfIteratorHelper(desktopLinks),
    _step2;

try {
  var _loop2 = function _loop2() {
    var link = _step2.value;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var linkID = link.getAttribute('href');
      document.querySelector('' + linkID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop2();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}