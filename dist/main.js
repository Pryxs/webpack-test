/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-test/./src/style.scss?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.js */ \"./src/core/core.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/components/input.js\");\n\r\n\r\n\r\nconst Form = () => {\r\n    const form = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({tag: 'form',});\r\n\r\n    const button = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({\r\n        tag: 'input',\r\n        attr: [{\r\n            key: 'type',\r\n            value: 'submit',\r\n        }]\r\n    });\r\n\r\n    form.append(\r\n        (0,_input__WEBPACK_IMPORTED_MODULE_1__.Input)({name: 'surname', min: 2, max: 25, placeholder: 'Alice'}),\r\n        (0,_input__WEBPACK_IMPORTED_MODULE_1__.Input)({name: 'name', min: 2, max: 25, placeholder: 'Bob'}),\r\n        (0,_input__WEBPACK_IMPORTED_MODULE_1__.Input)({name: 'nickname', min: 5, max: 19, placeholder: 'Alibobo'}),\r\n        (0,_input__WEBPACK_IMPORTED_MODULE_1__.Input)({name: 'email', min: 3, placeholder: 'alibobo@gmail.com', rule : /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/}),\r\n        (0,_input__WEBPACK_IMPORTED_MODULE_1__.Input)({name: 'password', min: 8, max: 30, type: 'password'}),\r\n        (0,_input__WEBPACK_IMPORTED_MODULE_1__.Input)({name: 'confirm', min: 8, max: 30, type: 'password', autocomplete: true}),\r\n        button,\r\n        image\r\n    );\r\n\r\n    form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const inputs = form.querySelectorAll('input[type=text], input[type=password]');\r\n        const errors = form.querySelectorAll('.error:not(.-global)');\r\n\r\n        if([...inputs].filter(e => !e.value).length) {\r\n            const errorElement = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({\r\n                tag: 'span',\r\n                text: '/ ! \\\\ Empty fields',\r\n                attr: [{\r\n                    key: 'class',\r\n                    value: 'error -global',\r\n                }]\r\n            })\r\n    \r\n            form.append(errorElement)\r\n            return;\r\n        }\r\n\r\n        if(!errors.length) form.submit();\r\n    });\r\n\r\n    return form;\r\n}\n\n//# sourceURL=webpack://webpack-test/./src/components/form.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.js */ \"./src/core/core.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/components/input.js\");\n/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/background.jpg */ \"./src/assets/background.jpg\");\n\r\n\r\n\r\n\r\n\r\nconst Header = () => {\r\n    const header = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({tag: 'header'});\r\n\r\n    header.innerHTML = `\r\n        <div class=\"content-wrapper\">\r\n            <h1>Le coeur de Iop</h1>\r\n            <nav>\r\n                <ul>\r\n                    <li><a href=\"\">l'Histoire</a></li>\r\n                    <li><a href=\"\">Les sorts</a></li>\r\n                    <li><a href=\"\">Cours personanlisé</a></li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n    `\r\n\r\n    const image = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({\r\n        tag: 'img',\r\n        attr: [{\r\n            key: 'src',\r\n            value: _assets_background_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n        }]\r\n    });\r\n\r\n    header.appendChild(image)\r\n\r\n    return header;\r\n}\n\n//# sourceURL=webpack://webpack-test/./src/components/header.js?");

/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: () => (/* binding */ Input)\n/* harmony export */ });\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.js */ \"./src/core/core.js\");\n\r\n\r\nconst Input = ({name, placeholder, type, rule, min, max, autocomplete}) => {\r\n    const inputContainer = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({\r\n        tag: 'div',\r\n        attr: [{\r\n            key: 'class',\r\n            value: 'input-container',\r\n        }]\r\n    });\r\n    const label = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({\r\n        tag: 'label',\r\n        text: name.charAt(0).toUpperCase() + name.slice(1),\r\n        attr: [{\r\n            key: 'for',\r\n            value: name,\r\n        }]\r\n    });\r\n    const input = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({\r\n        tag: 'input',\r\n        attr: [{\r\n            key: 'placeholder',\r\n            value: placeholder ?? '',\r\n        },{\r\n            key: 'type',\r\n            value: type ?? 'text',\r\n        }, {\r\n            key: 'name',\r\n            value: name,\r\n        }, {\r\n            key: 'autocomplete',\r\n            value: autocomplete,\r\n        },\r\n    ]\r\n    })\r\n\r\n    inputContainer.append(label, input)\r\n\r\n    input.addEventListener('input', (event) => {\r\n        const errors = [];\r\n        const { value } = event.target;\r\n\r\n        if(rule && value && !rule.test(value)) errors.push('matching rule failed')\r\n        if(max && value &&  value.length > max) errors.push('Max character allowed : ' + max)\r\n        if(min && value && value.length < min) errors.push('Min character allowed : ' + min)\r\n\r\n        ;(0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.unmountElement)(inputContainer.querySelectorAll('.error'));\r\n\r\n        const errorsElement = errors.map(error => {\r\n            const element = (0,_core_core_js__WEBPACK_IMPORTED_MODULE_0__.mountElement)({\r\n                tag: 'span',\r\n                text: error,\r\n                attr: [{\r\n                    key: 'class',\r\n                    value: 'error',\r\n                }]\r\n            })\r\n\r\n            return element\r\n        })\r\n        \r\n        inputContainer.append(...errorsElement)\r\n    })\r\n\r\n    return inputContainer;\r\n}\n\n//# sourceURL=webpack://webpack-test/./src/components/input.js?");

/***/ }),

/***/ "./src/core/core.js":
/*!**************************!*\
  !*** ./src/core/core.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountElement: () => (/* binding */ mountElement),\n/* harmony export */   unmountElement: () => (/* binding */ unmountElement)\n/* harmony export */ });\nconst mountElement = ({tag, text, attr}) => {\r\n    const element = document.createElement(tag)\r\n\r\n    if(text) element.innerHTML = text;\r\n\r\n    if(attr) {\r\n        attr.forEach(attribute => {\r\n            const {key, value} = attribute;\r\n            element.setAttribute(key, value)\r\n        });\r\n    }\r\n\r\n    return element;\r\n}\r\n\r\nconst unmountElement = (elements) => {\r\n    for (const elem of elements) {\r\n        elem.remove();\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-test/./src/core/core.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ \"./src/components/form.js\");\n\r\n\r\n\r\n\r\nconst app = document.querySelector('#app');\r\n\r\napp.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\r\n// app.appendChild(Form());\r\n\r\n\r\nconsole.log(app)\r\n\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d4859314eb212ec1db8.jpg\";\n\n//# sourceURL=webpack://webpack-test/./src/assets/background.jpg?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;