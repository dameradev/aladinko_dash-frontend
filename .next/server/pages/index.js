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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// CONCATENATED MODULE: ./components/Products.js






const ALL_PRODUCTS_QUERY = external_graphql_tag_default.a`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allCarpets(first: $first, skip: $skip) {
      id
      name
      address
      phoneNumber
      message
      city
    }
  }
`;
const ProductsListStyles = external_styled_components_default.a.div.withConfig({
  displayName: "Products__ProductsListStyles",
  componentId: "sc-1uv5x8m-0"
})(["display:flex;flex-direction:column;.single-carpet{padding:2rem;box-shadow:0px 4px 6px #00000029;margin:2rem 0;font-weight:100;.pointer{cursor:pointer;}}p{margin:2.5rem 0;text-transform:capitalize;border-bottom:1px solid #000;display:flex;justify-content:space-between;span{font-weight:800;margin-right:4rem;&:nth-of-type(2){font-weight:400;margin-right:0;text-align:right;}}}"]);
function Products({
  page
}) {
  const {
    data,
    error,
    loading
  } = Object(client_["useQuery"])(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * config["a" /* perPage */] - config["a" /* perPage */],
      first: config["a" /* perPage */]
    }
  });

  const onAddressClick = address => {
    window.open(`${'//' + 'google.com/search?q='}${address}`, '_blank');
  };

  console.log(data);
  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Error: ", error.message]
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProductsListStyles, {
      children: data === null || data === void 0 ? void 0 : data.allCarpets.map(carpet => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "single-carpet",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Ime:"
          }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: carpet.name
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Adresa: "
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: "pointer",
            onClick: () => onAddressClick(`${carpet.address}, ${carpet.city.toLowerCase()}`),
            children: [carpet.address, ", ", carpet.city.toLowerCase()]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Tel broj: "
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "pointer",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              href: `tel:+386${carpet.phoneNumber}`,
              children: ["+386 ", carpet.phoneNumber]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Poraka: "
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: carpet.message
          })]
        })]
      }, carpet.id))
    })
  });
}
// CONCATENATED MODULE: ./pages/index.js




const index = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Products, {})
});

/* harmony default export */ var pages = __webpack_exports__["default"] = (index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/admin/api`;
const prodEndpoint = `https://aladinko-dash.herokuapp.com/admin/api`;
const perPage = 2;

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });