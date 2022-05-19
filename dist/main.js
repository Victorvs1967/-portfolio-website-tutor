/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "/Volumes/Macintosh HD/Developer/!portfolio-website-tutor/src/index.js":
/*!*****************************************************************************!*\
  !*** /Volumes/Macintosh HD/Developer/!portfolio-website-tutor/src/index.js ***!
  \*****************************************************************************/
/***/ (() => {

eval("// animate pages and controls\nconst pageTransition = () => {\n  // button click to active class\n  [ ...document.querySelectorAll('.control') ].forEach(control => {\n    control.addEventListener('click', () => {\n      // remove active-btn class from all controlls\n      document.querySelectorAll('.active-btn').forEach(ctrl => {\n        ctrl.classList.remove('active-btn');\n      });\n      // add active class to selected\n      control.classList.add('active-btn');\n      document.querySelector('.active').classList.remove('active');\n      document.getElementById(control.dataset.id).classList.add('active');\n    });\n  });\n\n  // toggle theme\n  document.querySelector('.theme-btn').addEventListener('click', () => {\n    document.body.classList.toggle('light-mode');\n  });\n};\n// call main function\npageTransition();\n\n\n//# sourceURL=webpack:///portfolio-website-tutor/src/index.js?/Volumes/Macintosh_HD/Developer/");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["/Volumes/Macintosh HD/Developer/!portfolio-website-tutor/src/index.js"]();
/******/ 	
/******/ })()
;