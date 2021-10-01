(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-multilingual/messages */ "../lib/messages/index.js");
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.css */ "./components/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\next-multilingual\\example\\components\\Footer.tsx";
const _messages = {
  "babelified": true,
  "keyValueObjectCollection": {
    "en-us": {
      "footerMessage": "© Footer"
    },
    "fr-ca": {
      "footerMessage": "© Pied de page"
    }
  },
  "sourceFilePath": "C:\\Projects\\next-multilingual\\example\\components\\Footer.tsx"
};


const _useMessagesFunction = next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0__.useMessages.bind(_messages);



function Footer() {
  const messages = _useMessagesFunction();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
    className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),
    children: messages.format('footerMessage')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/LanguagePicker.tsx":
/*!***************************************!*\
  !*** ./components/LanguagePicker.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguagePicker)
/* harmony export */ });
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-multilingual */ "../lib/index.js");
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_multilingual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_multilingual_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-multilingual/link */ "../lib/link/ssr.js");
/* harmony import */ var next_multilingual_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LanguagePicker_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LanguagePicker.module.css */ "./components/LanguagePicker.module.css");
/* harmony import */ var _LanguagePicker_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LanguagePicker_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _localeStrings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localeStrings.json */ "./components/localeStrings.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Projects\\next-multilingual\\example\\components\\LanguagePicker.tsx";



 // Locales are not localized which is why it uses a JSON file.



function LanguagePicker() {
  const {
    pathname,
    locale,
    locales,
    defaultLocale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const actualLocale = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getActualLocale)(locale, defaultLocale, locales);
  const actualLocales = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getActualLocales)(locales, defaultLocale);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_LanguagePicker_module_css__WEBPACK_IMPORTED_MODULE_5___default().languagePicker),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      children: [_localeStrings_json__WEBPACK_IMPORTED_MODULE_3__[(0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.normalizeLocale)(actualLocale)], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: actualLocales.filter(locale => locale !== actualLocale).map(locale => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_multilingual_link__WEBPACK_IMPORTED_MODULE_2__.MulLink, {
          href: pathname,
          locale: locale,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            onClick: () => {
              (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.setCookieLocale)(locale);
            },
            children: _localeStrings_json__WEBPACK_IMPORTED_MODULE_3__[(0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.normalizeLocale)(locale)]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)
        }, locale, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./layout/Layout.tsx":
/*!***************************!*\
  !*** ./layout/Layout.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_multilingual_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-multilingual/head */ "../lib/head/index.js");
/* harmony import */ var next_multilingual_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LanguagePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/LanguagePicker */ "./components/LanguagePicker.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout.module.css */ "./layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_multilingual_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-multilingual/link */ "../lib/link/ssr.js");
/* harmony import */ var next_multilingual_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-multilingual/messages */ "../lib/messages/index.js");
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Projects\\next-multilingual\\example\\layout\\Layout.tsx";
const _messages = {
  "babelified": true,
  "keyValueObjectCollection": {
    "en-us": {
      "header": "English header",
      "home": "Home",
      "aboutUs": "About Us",
      "contactUs": "Contact Us"
    },
    "fr-ca": {
      "header": "En-tête françaises",
      "home": "Accueil",
      "aboutUs": "À propos de nous",
      "contactUs": "Nous joindre"
    }
  },
  "sourceFilePath": "C:\\Projects\\next-multilingual\\example\\layout\\Layout.tsx"
};









const _useMessagesFunction = next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4__.useMessages.bind(_messages);

/**
 * Component used for the general layout of a page.
 *
 * @param title - The title of the page.
 */
function Layout({
  title,
  children
}) {
  const messages = _useMessagesFunction();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_multilingual_head__WEBPACK_IMPORTED_MODULE_0__.MulHead, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("header", {
      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          href: "/",
          children: messages.format('header')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_LanguagePicker__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_multilingual_link__WEBPACK_IMPORTED_MODULE_3__.MulLink, {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            children: messages.format('home')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_multilingual_link__WEBPACK_IMPORTED_MODULE_3__.MulLink, {
          href: "/about-us",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            children: messages.format('aboutUs')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_multilingual_link__WEBPACK_IMPORTED_MODULE_3__.MulLink, {
          href: "/contact-us",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            children: messages.format('contactUs')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./messages/Fruits.ts":
/*!****************************!*\
  !*** ./messages/Fruits.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFruitsMessages": () => (/* binding */ useFruitsMessages)
/* harmony export */ });
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-multilingual/messages */ "../lib/messages/index.js");
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0__);
const _messages = {
  "babelified": true,
  "keyValueObjectCollection": {
    "en-us": {
      "banana": "Banana",
      "apple": "Apple",
      "strawberry": "Strawberry",
      "grape": "Grape",
      "orange": "Orange",
      "watermelon": "Watermelon",
      "blueberry": "Blueberry",
      "lemon": "Lemon"
    },
    "fr-ca": {
      "banana": "Banane",
      "apple": "Pomme",
      "strawberry": "Fraise",
      "grape": "Raisin",
      "orange": "Orange",
      "watermelon": "Melon d'eau",
      "blueberry": "Bleuet",
      "lemon": "Citron"
    }
  },
  "sourceFilePath": "C:\\Projects\\next-multilingual\\example\\messages\\Fruits.ts"
};


const _useMessagesFunction = next_multilingual_messages__WEBPACK_IMPORTED_MODULE_0__.useMessages.bind(_messages);

const useFruitsMessages = _useMessagesFunction;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-multilingual */ "../lib/index.js");
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_multilingual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layout */ "./layout/Layout.tsx");
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-multilingual/messages */ "../lib/messages/index.js");
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _messages_Fruits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages/Fruits */ "./messages/Fruits.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Projects\\next-multilingual\\example\\pages\\index.tsx";
const _messages = {
  "babelified": true,
  "keyValueObjectCollection": {
    "en-us": {
      "pageTitle": "Homepage",
      "headline": "Welcome to the homepage",
      "subHeader": "Internationalization (i18n) details",
      "columnInformation": "Information",
      "columnNextJs": "Next.js",
      "columnActual": "Actual",
      "rowDefaultLocale": "Default Locale",
      "rowConfiguredLocales": "Configured Locales",
      "sharedHeader": "Example of shared messages",
      "sharedList": "Simple (text) list using shared messages: ",
      "sharedDropDown": "Shared messages as a dropdown: ",
      "mfHeader": "Example using the ICU MessageFormat syntax",
      "mfUsing": "Using the following message:",
      "mfPlural": "{count, plural, =0 {No candy left.} one {Got # candy left.} other {Got # candies left.}}",
      "mfAddCandy": "Add 1 candy",
      "mfRemoveCandy": "Remove 1 candy"
    },
    "fr-ca": {
      "pageTitle": "Page d'accueil",
      "headline": "Bienvenu à la page d'accueil",
      "subHeader": "Détails de l'internationalization (i18n)",
      "columnInformation": "Information",
      "columnNextJs": "Next.js",
      "columnActual": "Réel",
      "rowDefaultLocale": "Locale par défaut",
      "rowConfiguredLocales": "Locales configurée",
      "sharedHeader": "Exemple de messages partagés",
      "sharedList": "List simple (texte) utilisant des messages partagés : ",
      "sharedDropDown": "Messages partagé en tant que menu déroulant: ",
      "mfHeader": "Exemple utilisant la syntaxe ICU MessageFormat",
      "mfUsing": "Utilisant le message suivant :",
      "mfPlural": "{count, plural, =0 {Il ne reste aucun bonbon.} one {Il reste # bonbon.} other {Il reste # bonbons.}}",
      "mfAddCandy": "Ajouter 1 bonbon",
      "mfRemoveCandy": "Enlever 1 bonbon"
    }
  },
  "sourceFilePath": "C:\\Projects\\next-multilingual\\example\\pages\\index.tsx"
};






const _useMessagesFunction = next_multilingual_messages__WEBPACK_IMPORTED_MODULE_4__.useMessages.bind(_messages);





function IndexPage({
  resolvedLocale
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    locales,
    defaultLocale
  } = router; // Overwrite the locale with the resolved locale.

  router.locale = resolvedLocale;
  (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.setCookieLocale)(router.locale); // Load the messages in the correct locale.

  const messages = _useMessagesFunction();

  const fruitsMessages = (0,_messages_Fruits__WEBPACK_IMPORTED_MODULE_5__.useFruitsMessages)(); // Counter used for ICU MessageFormat example.

  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: messages.format('pageTitle'),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().headline),
      children: messages.format('headline')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().subHeader),
        children: messages.format('subHeader')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().table),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              children: messages.format('columnInformation')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              children: messages.format('columnNextJs')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
              children: messages.format('columnActual')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: messages.format('rowDefaultLocale')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.normalizeLocale)(defaultLocale)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.normalizeLocale)((0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getActualDefaultLocale)(locales, defaultLocale))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: messages.format('rowConfiguredLocales')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: locales.map(locale => (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.normalizeLocale)(locale)).join(', ')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
              children: (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getActualLocales)(locales, defaultLocale).map(locale => (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.normalizeLocale)(locale)).join(', ')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: messages.format('sharedHeader')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [messages.format('sharedList'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
            children: fruitsMessages.getAll().map(message => message.format()).join(', ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [messages.format('sharedDropDown'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            children: fruitsMessages.getAll().map(message => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: message.format()
            }, message.format(), false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: messages.format('mfHeader')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("fieldset", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().mfExample),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("legend", {
            children: messages.format('mfUsing')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), messages.format('mfPlural')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: messages.format('mfPlural', {
            count
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          onClick: () => setCount(count + 1),
          title: messages.format('mfAddCandy'),
          children: "\u2795\uD83C\uDF6D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          onClick: () => {
            if (count > 0) setCount(count - 1);
          },
          title: messages.format('mfRemoveCandy'),
          children: "\u2796\uD83C\uDF6D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(nextPageContext) {
  const {
    req,
    locale,
    locales,
    defaultLocale
  } = nextPageContext;
  const actualLocales = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getActualLocales)(locales, defaultLocale);
  const actualDefaultLocale = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getActualDefaultLocale)(locales, defaultLocale);
  const cookieLocale = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getCookieLocale)(nextPageContext, actualLocales);
  let resolvedLocale = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getActualLocale)(locale, defaultLocale, locales); // When Next.js tries to use the default locale, try to find a better one.

  if (locale === defaultLocale) {
    resolvedLocale = cookieLocale ? cookieLocale : (0,next_multilingual__WEBPACK_IMPORTED_MODULE_0__.getPreferredLocale)(req.headers['accept-language'], actualLocales, actualDefaultLocale).toLowerCase();
  }

  return {
    props: {
      resolvedLocale
    }
  };
}

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "../node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "../node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/normalize-trailing-slash.js":
/*!********************************************************************!*\
  !*** ../node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "../node_modules/next/dist/client/request-idle-callback.js":
/*!*****************************************************************!*\
  !*** ../node_modules/next/dist/client/request-idle-callback.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../node_modules/next/dist/client/route-loader.js":
/*!********************************************************!*\
  !*** ../node_modules/next/dist/client/route-loader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "../node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/use-intersection.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/client/use-intersection.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/shared/lib/router/router.js":
/*!*************************************************************!*\
  !*** ../node_modules/next/dist/shared/lib/router/router.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "../node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "../node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./utils/resolve-rewrites"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__(/*! ../i18n/detect-domain-locale */ "../i18n/detect-domain-locale").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath).normalizeLocalePath(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  } else {}
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && locale !== defaultLocale && !pathLower.startsWith('/' + localeLower + '/') && pathLower !== '/' + localeLower ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower) ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1) : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !true);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils).formatWithValidation(parsedAs);
        url = addBasePath((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var ref; // if the locale isn't configured hard navigate to show 404 page

        if (!((ref = this.locales) === null || ref === void 0 ? void 0 : ref.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils).formatWithValidation(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if ( true && as.startsWith('/')) {
        const rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(cleanedAs, this.locale)), pages, rewrites, query1, p => resolveDynamicRoute(p, pages), this.locales);
        resolvedAs = rewritesResult.asPath;

        if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
          // if this directly matches a page we need to update the href to
          // allow the correct page chunk to be loaded
          pathname1 = rewritesResult.resolvedHref;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      } else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname2 = (0, _normalizeLocalePath).normalizeLocalePath(pathname2, this.locales).pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
        let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
        const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils).formatWithValidation(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if ( true && asPath.startsWith('/')) {
      let rewrites;
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
      const rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, p => resolveDynamicRoute(p, pages), this.locales);
      resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

      if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
        // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        pathname2 = rewritesResult.resolvedHref;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    } else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "../node_modules/next/dist/build/output/log.js":
/*!*****************************************************!*\
  !*** ../node_modules/next/dist/build/output/log.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.wait = wait;
exports.error = error;
exports.warn = warn;
exports.ready = ready;
exports.info = info;
exports.event = event;
exports.prefixes = void 0;
var _chalk = _interopRequireDefault(__webpack_require__(/*! chalk */ "../node_modules/next/node_modules/chalk/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const prefixes = {
    wait: _chalk.default.cyan('wait') + '  -',
    error: _chalk.default.red('error') + ' -',
    warn: _chalk.default.yellow('warn') + '  -',
    ready: _chalk.default.green('ready') + ' -',
    info: _chalk.default.cyan('info') + '  -',
    event: _chalk.default.magenta('event') + ' -'
};
exports.prefixes = prefixes;
function wait(...message) {
    console.log(prefixes.wait, ...message);
}
function error(...message) {
    console.error(prefixes.error, ...message);
}
function warn(...message) {
    console.warn(prefixes.warn, ...message);
}
function ready(...message) {
    console.log(prefixes.ready, ...message);
}
function info(...message) {
    console.log(prefixes.info, ...message);
}
function event(...message) {
    console.log(prefixes.event, ...message);
}

//# sourceMappingURL=log.js.map

/***/ }),

/***/ "./components/Footer.module.css":
/*!**************************************!*\
  !*** ./components/Footer.module.css ***!
  \**************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__1_BW4"
};


/***/ }),

/***/ "./components/LanguagePicker.module.css":
/*!**********************************************!*\
  !*** ./components/LanguagePicker.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"languagePicker": "LanguagePicker_languagePicker__1aPxG"
};


/***/ }),

/***/ "./layout/Layout.module.css":
/*!**********************************!*\
  !*** ./layout/Layout.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Layout_header__2M2F8",
	"main": "Layout_main__3H6h1",
	"nav": "Layout_nav__1Z6dh"
};


/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"headline": "index_headline__3riKc",
	"subHeader": "index_subHeader__19fkP",
	"table": "index_table__1rrQU",
	"mfExample": "index_mfExample__3OJ8p"
};


/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/ansi-styles/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/next/node_modules/ansi-styles/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);

const colorConvert = __webpack_require__(/*! color-convert */ "../node_modules/next/node_modules/color-convert/index.js");

const wrapAnsi16 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => function () {
	const rgb = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39],

			// Bright color
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Fix humans
	styles.color.grey = styles.color.gray;

	for (const groupName of Object.keys(styles)) {
		const group = styles[groupName];

		for (const styleName of Object.keys(group)) {
			const style = group[styleName];

			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});

		Object.defineProperty(styles, 'codes', {
			value: codes,
			enumerable: false
		});
	}

	const ansi2ansi = n => n;
	const rgb2rgb = (r, g, b) => [r, g, b];

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 0)
	};
	styles.color.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 0)
	};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 10)
	};
	styles.bgColor.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 10)
	};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	for (let key of Object.keys(colorConvert)) {
		if (typeof colorConvert[key] !== 'object') {
			continue;
		}

		const suite = colorConvert[key];

		if (key === 'ansi16') {
			key = 'ansi';
		}

		if ('ansi16' in suite) {
			styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
			styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
		}

		if ('ansi256' in suite) {
			styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
			styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
		}

		if ('rgb' in suite) {
			styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
			styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
		}
	}

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});


/***/ }),

/***/ "../node_modules/next/node_modules/chalk/index.js":
/*!********************************************************!*\
  !*** ../node_modules/next/node_modules/chalk/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const escapeStringRegexp = __webpack_require__(/*! escape-string-regexp */ "escape-string-regexp");
const ansiStyles = __webpack_require__(/*! ansi-styles */ "../node_modules/next/node_modules/ansi-styles/index.js");
const stdoutColor = __webpack_require__(/*! supports-color */ "../node_modules/next/node_modules/supports-color/index.js").stdout;

const template = __webpack_require__(/*! ./templates.js */ "../node_modules/next/node_modules/chalk/templates.js");

const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];

// `color-convert` models to exclude from the Chalk API due to conflicts and such
const skipModels = new Set(['gray']);

const styles = Object.create(null);

function applyOptions(obj, options) {
	options = options || {};

	// Detect level if not set manually
	const scLevel = stdoutColor ? stdoutColor.level : 0;
	obj.level = options.level === undefined ? scLevel : options.level;
	obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
	// We check for this.template here since calling `chalk.constructor()`
	// by itself will have a `this` of a previously constructed chalk object
	if (!this || !(this instanceof Chalk) || this.template) {
		const chalk = {};
		applyOptions(chalk, options);

		chalk.template = function () {
			const args = [].slice.call(arguments);
			return chalkTag.apply(null, [chalk.template].concat(args));
		};

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = Chalk;

		return chalk.template;
	}

	applyOptions(this, options);
}

// Use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001B[94m';
}

for (const key of Object.keys(ansiStyles)) {
	ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

	styles[key] = {
		get() {
			const codes = ansiStyles[key];
			return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
		}
	};
}

styles.visible = {
	get() {
		return build.call(this, this._styles || [], true, 'visible');
	}
};

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
for (const model of Object.keys(ansiStyles.color.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	styles[model] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.color.close,
					closeRe: ansiStyles.color.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.bgColor.close,
					closeRe: ansiStyles.bgColor.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, styles);

function build(_styles, _empty, key) {
	const builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder._empty = _empty;

	const self = this;

	Object.defineProperty(builder, 'level', {
		enumerable: true,
		get() {
			return self.level;
		},
		set(level) {
			self.level = level;
		}
	});

	Object.defineProperty(builder, 'enabled', {
		enumerable: true,
		get() {
			return self.enabled;
		},
		set(enabled) {
			self.enabled = enabled;
		}
	});

	// See below for fix regarding invisible grey/dim combination on Windows
	builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';

	// `__proto__` is used because we must return a function, but there is
	// no way to create a function with a different prototype
	builder.__proto__ = proto; // eslint-disable-line no-proto

	return builder;
}

function applyStyle() {
	// Support varags, but simply cast to string in case there's only one arg
	const args = arguments;
	const argsLen = args.length;
	let str = String(arguments[0]);

	if (argsLen === 0) {
		return '';
	}

	if (argsLen > 1) {
		// Don't slice `arguments`, it prevents V8 optimizations
		for (let a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || this.level <= 0 || !str) {
		return this._empty ? '' : str;
	}

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	const originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && this.hasGrey) {
		ansiStyles.dim.open = '';
	}

	for (const code of this._styles.slice().reverse()) {
		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;

		// Close the styling before a linebreak and reopen
		// after next line to fix a bleed issue on macOS
		// https://github.com/chalk/chalk/pull/92
		str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
	}

	// Reset the original `dim` if we changed it to work around the Windows dimmed gray issue
	ansiStyles.dim.open = originalDim;

	return str;
}

function chalkTag(chalk, strings) {
	if (!Array.isArray(strings)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return [].slice.call(arguments, 1).join(' ');
	}

	const args = [].slice.call(arguments, 2);
	const parts = [strings.raw[0]];

	for (let i = 1; i < strings.length; i++) {
		parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
		parts.push(String(strings.raw[i]));
	}

	return template(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);

module.exports = Chalk(); // eslint-disable-line new-cap
module.exports.supportsColor = stdoutColor;
module.exports.default = module.exports; // For TypeScript


/***/ }),

/***/ "../node_modules/next/node_modules/chalk/templates.js":
/*!************************************************************!*\
  !*** ../node_modules/next/node_modules/chalk/templates.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}

	return current;
}

module.exports = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}

	return chunks.join('');
};


/***/ }),

/***/ "../node_modules/next/node_modules/color-convert/conversions.js":
/*!**********************************************************************!*\
  !*** ../node_modules/next/node_modules/color-convert/conversions.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "../node_modules/next/node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "../node_modules/next/node_modules/color-convert/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/next/node_modules/color-convert/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var conversions = __webpack_require__(/*! ./conversions */ "../node_modules/next/node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "../node_modules/next/node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "../node_modules/next/node_modules/color-convert/route.js":
/*!****************************************************************!*\
  !*** ../node_modules/next/node_modules/color-convert/route.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var conversions = __webpack_require__(/*! ./conversions */ "../node_modules/next/node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "../node_modules/next/node_modules/color-name/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/next/node_modules/color-name/index.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "../node_modules/next/node_modules/has-flag/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/has-flag/index.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/next/node_modules/supports-color/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/next/node_modules/supports-color/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(/*! os */ "os");
const hasFlag = __webpack_require__(/*! has-flag */ "../node_modules/next/node_modules/has-flag/index.js");

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),

/***/ "escape-string-regexp":
/*!***************************************!*\
  !*** external "escape-string-regexp" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("escape-string-regexp");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "intl-messageformat":
/*!*************************************!*\
  !*** external "intl-messageformat" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("intl-messageformat");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/detect-domain-locale":
/*!********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/detect-domain-locale.js" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "resolve-accept-language":
/*!******************************************!*\
  !*** external "resolve-accept-language" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("resolve-accept-language");

/***/ }),

/***/ "../lib/head/index.js":
/*!****************************!*\
  !*** ../lib/head/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MulHead = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const head_1 = __importDefault(__webpack_require__(/*! next/head */ "next/head"));
const use_alternate_links_1 = __webpack_require__(/*! ../hooks/use-alternate-links */ "../lib/hooks/use-alternate-links.js");
const use_canonical_link_1 = __webpack_require__(/*! ../hooks/use-canonical-link */ "../lib/hooks/use-canonical-link.js");
/**
 * MulHead is a wrapper around Next.js' `Head` that provides alternate links with localized URLs and a canonical link.
 *
 * @returns The Next.js `Head` component, including alternative links for SEO.
 */
function MulHead({ children }) {
    /**
     * Next.js' `<Head>` does not allow components, so we are using hooks. Details here:
     *
     * @see https://github.com/vercel/next.js/issues/17721 (closed issue)
     * @see https://nextjs.org/docs/api-reference/next/head (Next.js documentation)
     *
     * | title, meta or any other elements (e.g. script) need to be contained as direct children of the Head
     * | element, or wrapped into maximum one level of <React.Fragment> or arrays—otherwise the tags won't
     * | be correctly picked up on client-side navigation.
     *
     */
    const alternateLinks = (0, use_alternate_links_1.useAlternateLinks)();
    const canonicalLink = (0, use_canonical_link_1.useCanonicalLink)();
    return ((0, jsx_runtime_1.jsxs)(head_1.default, { children: [(0, jsx_runtime_1.jsx)("link", { rel: "canonical", href: canonicalLink.href }, canonicalLink.key), alternateLinks.map(({ href, hrefLang, key }) => {
                return (0, jsx_runtime_1.jsx)("link", { rel: "alternate", href: href, hrefLang: hrefLang }, key);
            }), children] }, void 0));
}
exports.MulHead = MulHead;


/***/ }),

/***/ "../lib/helpers/get-localized-url-path.js":
/*!************************************************!*\
  !*** ../lib/helpers/get-localized-url-path.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLocalizedUrlPath = void 0;
const normalize_url_path_1 = __webpack_require__(/*! ./normalize-url-path */ "../lib/helpers/normalize-url-path.js");
/**
 * Get the localized URL path (without the locale prefix) from a standard non-localized Next.js URL path.
 *
 * Using the `Rewrite` objects, the `destination` is the standard Next.js "localized" URL (e.g. `/fr-ca/contact-us`) and
 * the `source` is the real localized URL (e.g. `/fr-ca/nous-joindre`).
 *
 * @param rewrites - An array of Next.js rewrite objects.
 * @param locale - The locale of the localized URL.
 * @param urlPath - A standard non-localized Next.js URL path without the locale prefix (e.g. `/contact-us`).
 *
 * @returns The localized URL.
 */
function getLocalizedUrlPath(rewrites, locale, urlPath) {
    const normalizedUrlPath = (0, normalize_url_path_1.normalizeUrlPath)(urlPath);
    const destinationUrlPath = `/${locale}${normalizedUrlPath}`;
    const rewrite = rewrites.find((rewrite) => rewrite.locale === false && rewrite.destination === destinationUrlPath);
    return rewrite ? rewrite.source : destinationUrlPath; // Fallback with the original URL path when not found.
}
exports.getLocalizedUrlPath = getLocalizedUrlPath;


/***/ }),

/***/ "../lib/helpers/get-origin.js":
/*!************************************!*\
  !*** ../lib/helpers/get-origin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOrigin = void 0;
/**
 * Get the current environment's URL origin (protocol + domain).
 *
 * @returns The normalized (lowercase, without a trailing slash) URL origin used to generate fully-qualified URLs.
 */
function getOrigin() {
    const origin = "http://localhost:3000";
    if (!origin) {
        throw new Error('Please add NEXT_PUBLIC_ORIGIN in your current environment variable with a fully-qualified URL (protocol + domain)');
    }
    try {
        // Only valid URLs can create a URL object without throwing errors.
        const originUrl = new URL(origin);
        // Make sure that the configured URL has a valid protocol.
        if (!['http', 'https'].includes(originUrl.protocol.slice(0, -1))) {
            throw new Error();
        }
        // Make sure that the configured URL does not include a path (Next.js' `basePath` should be used instead).
        if (originUrl.pathname !== '/') {
            throw new Error();
        }
    }
    catch (error) {
        throw new Error('Please make sure that your NEXT_PUBLIC_ORIGIN environment variable is a fully-qualified URL (e.g. https://example.com) without any path');
    }
    return (origin.endsWith('/') ? origin.slice(0, 1) : origin).toLowerCase();
}
exports.getOrigin = getOrigin;


/***/ }),

/***/ "../lib/helpers/get-rewrites.js":
/*!**************************************!*\
  !*** ../lib/helpers/get-rewrites.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRewrites = void 0;
const path_1 = __webpack_require__(/*! path */ "path");
const fs_1 = __webpack_require__(/*! fs */ "fs");
/** Local rewrite cache to avoid non-required file system operations. */
let rewritesCache;
/**
 * Get the Next.js `Rewrite` objects directly from the build manifest.
 *
 * On the client side it's possible to use `getClientBuildManifest` but for server side rendering, this function is required.
 *
 * @returns An array of `Rewrite` objects.
 */
function getRewrites() {
    if (rewritesCache)
        return rewritesCache;
    // Try to get the content of the routes-manifest (.next/routes-manifest.json) first - this is only available on builds.
    const routesManifestPath = (0, path_1.resolve)('.next', 'routes-manifest.json');
    if ((0, fs_1.existsSync)(routesManifestPath)) {
        const routesManifest = JSON.parse((0, fs_1.readFileSync)(routesManifestPath, 'utf8'));
        const rewrites = routesManifest.rewrites.map((rewrite) => {
            return {
                source: rewrite.source,
                destination: rewrite.destination,
                locale: rewrite.locale,
            };
        });
        // Save to the cache.
        rewritesCache = rewrites;
        return rewritesCache;
    }
    // If the server routes-manifest is not available, then get can get the rewrites from the client build manifest.
    const buildManifestPath = (0, path_1.resolve)('.next', 'build-manifest.json');
    const buildManifestContent = (0, fs_1.readFileSync)(buildManifestPath, 'utf8');
    // Get the content of the client build-manifest (e.g. .next/static/development/_buildManifest.json).
    const clientBuildManifestPath = JSON.parse(buildManifestContent).lowPriorityFiles.find((filePaths) => filePaths.includes('_buildManifest.js'));
    const clientBuildManifestContent = (0, fs_1.readFileSync)((0, path_1.resolve)('.next', clientBuildManifestPath), 'utf8');
    // Transform the client build-manifest file content back into a usable object.
    const clientBuildManifest = {};
    new Function('self', clientBuildManifestContent)(clientBuildManifest);
    // Save to the cache.
    rewritesCache = clientBuildManifest.__BUILD_MANIFEST.__rewrites.afterFiles;
    return rewritesCache;
}
exports.getRewrites = getRewrites;


/***/ }),

/***/ "../lib/helpers/normalize-url-path.js":
/*!********************************************!*\
  !*** ../lib/helpers/normalize-url-path.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeUrlPath = void 0;
/**
 * Normalize a URL.
 *
 * A normalized URL should: always start with a slash, never end with a slash and never contain double slashes.
 *
 * @param urlPath - The URl to normalize.
 *
 * @returns A normalized URL.
 */
function normalizeUrlPath(urlPath) {
    // Remove double slashes just in case.
    let normalizedUrlPath = urlPath.replace(/\/\//g, '/');
    // Make sure the base path starts with a slash.
    normalizedUrlPath = normalizedUrlPath.startsWith('/')
        ? normalizedUrlPath
        : `/${normalizedUrlPath}`;
    // Make sure the base path does not end with a slash.
    normalizedUrlPath = normalizedUrlPath.endsWith('/')
        ? normalizedUrlPath.slice(0, -1)
        : normalizedUrlPath;
    return normalizedUrlPath;
}
exports.normalizeUrlPath = normalizeUrlPath;


/***/ }),

/***/ "../lib/hooks/use-alternate-links.js":
/*!*******************************************!*\
  !*** ../lib/hooks/use-alternate-links.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAlternateLinks = void 0;
const router_1 = __webpack_require__(/*! next/router */ "next/router");
const normalize_url_path_1 = __webpack_require__(/*! ../helpers/normalize-url-path */ "../lib/helpers/normalize-url-path.js");
const get_origin_1 = __webpack_require__(/*! ../helpers/get-origin */ "../lib/helpers/get-origin.js");
const get_localized_url_path_1 = __webpack_require__(/*! ../helpers/get-localized-url-path */ "../lib/helpers/get-localized-url-path.js");
const use_rewrites_1 = __webpack_require__(/*! ./use-rewrites */ "../lib/hooks/use-rewrites.js");
const __1 = __webpack_require__(/*! .. */ "../lib/index.js");
/**
 * A hook to get the alternate links of your current page.
 *
 * Alternative links provide information to search engines that a given page is available in other languages. URL queries will
 * be added to alternate links regardless if they are valid or not, but they will be removed from canonical links to avoid
 * content duplication issues.
 *
 * @returns An array of alternate links objects for the current page.
 */
function useAlternateLinks() {
    const { basePath, asPath, defaultLocale, locales, route } = (0, router_1.useRouter)();
    const rewrites = (0, use_rewrites_1.useRewrites)();
    const origin = (0, get_origin_1.getOrigin)();
    const [urlPath, asPathQuery] = asPath.split('?');
    const urlSearchParamsString = new URLSearchParams(asPathQuery).toString();
    const urlQuery = urlSearchParamsString ? `?${urlSearchParamsString}` : '';
    const normalizedBasePath = (0, normalize_url_path_1.normalizeUrlPath)(basePath);
    const alternateLinks = (0, __1.getActualLocales)(locales, defaultLocale).map((locale) => {
        const localizedUrlPath = (0, get_localized_url_path_1.getLocalizedUrlPath)(rewrites, locale, urlPath);
        const href = `${origin}${normalizedBasePath}${localizedUrlPath}${urlQuery}`;
        const hrefLang = (0, __1.normalizeLocale)(locale);
        const key = `alternate-link-${hrefLang}`;
        return {
            href,
            hrefLang,
            key,
        };
    });
    /**
     * `x-default` is meant to be used for pages that have "dynamic" locales. The only valid use case for most websites is
     * the home page where the language detection can happen. After this initial locale resolution, all other URLs should use
     * prefixes and the `x-default` link should not be required.
     */
    if (route === '/') {
        const href = `${origin}${normalizedBasePath}${urlQuery}`;
        const hrefLang = 'x-default';
        const key = `alternate-link-${hrefLang}`;
        alternateLinks.push({
            href,
            hrefLang,
            key,
        });
    }
    return alternateLinks;
}
exports.useAlternateLinks = useAlternateLinks;


/***/ }),

/***/ "../lib/hooks/use-canonical-link.js":
/*!******************************************!*\
  !*** ../lib/hooks/use-canonical-link.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCanonicalLink = void 0;
const router_1 = __webpack_require__(/*! next/router */ "next/router");
const normalize_url_path_1 = __webpack_require__(/*! ../helpers/normalize-url-path */ "../lib/helpers/normalize-url-path.js");
const get_origin_1 = __webpack_require__(/*! ../helpers/get-origin */ "../lib/helpers/get-origin.js");
const __1 = __webpack_require__(/*! .. */ "../lib/index.js");
const get_localized_url_path_1 = __webpack_require__(/*! ../helpers/get-localized-url-path */ "../lib/helpers/get-localized-url-path.js");
const use_rewrites_1 = __webpack_require__(/*! ./use-rewrites */ "../lib/hooks/use-rewrites.js");
/**
 * A hook to get the canonical link of your current page.
 *
 * A canonical link tell the search engines which page to index to avoid "page collisions". This is especially important
 * with Next.js as URLs casing is not always sensitive which could cause problems when indexing. URL queries are ignore by
 * design to avoid duplicate content penalties with search engines.
 *
 * @returns A canonical link object for the current page.
 */
function useCanonicalLink() {
    const { basePath, pathname, defaultLocale, locale, locales, route } = (0, router_1.useRouter)();
    const rewrites = (0, use_rewrites_1.useRewrites)();
    const origin = (0, get_origin_1.getOrigin)();
    const normalizedBasePath = (0, normalize_url_path_1.normalizeUrlPath)(basePath);
    const actualLocale = (0, __1.getActualLocale)(locale, defaultLocale, locales);
    const key = 'canonical-link';
    if (route === '/') {
        const localePrefix = (0, normalize_url_path_1.normalizeUrlPath)(actualLocale.toLowerCase());
        const href = `${origin}${normalizedBasePath}${localePrefix}`;
        return {
            href,
            key,
        };
    }
    else {
        const localizedUrlPath = (0, get_localized_url_path_1.getLocalizedUrlPath)(rewrites, actualLocale, pathname);
        const href = `${origin}${normalizedBasePath}${localizedUrlPath}`;
        return {
            href,
            key,
        };
    }
}
exports.useCanonicalLink = useCanonicalLink;


/***/ }),

/***/ "../lib/hooks/use-rewrites.js":
/*!************************************!*\
  !*** ../lib/hooks/use-rewrites.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRewrites = void 0;
const route_loader_1 = __webpack_require__(/*! next/dist/client/route-loader */ "../node_modules/next/dist/client/route-loader.js");
const react_1 = __webpack_require__(/*! react */ "react");
/**
 * Hook to get the localized URL from a standard non-localized Next.js URL.
 *
 * @param locale - The locale of the localized URL.
 * @param urlPath - The non-localized URL path (e.g. `/contact-us`).
 *
 * @returns The localized URL.
 */
function useRewrites() {
    const [rewrites, setRewrites] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, route_loader_1.getClientBuildManifest)()
            .then((clientBuildManifest) => {
            // Next.js needs to add types https://github.com/vercel/next.js/blob/d130f63c416b21adc67dc3c755ad6e1a707e2cc8/packages/next/build/webpack/plugins/build-manifest-plugin.ts#L41
            setRewrites(clientBuildManifest.__rewrites.afterFiles);
        })
            .catch(console.error);
    }, []);
    return rewrites;
}
exports.useRewrites = useRewrites;


/***/ }),

/***/ "../lib/index.js":
/*!***********************!*\
  !*** ../lib/index.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCookieLocale = exports.setCookieLocale = exports.getPreferredLocale = exports.normalizeLocale = exports.isLocale = exports.getActualDefaultLocale = exports.getActualLocales = exports.getActualLocale = exports.log = void 0;
const resolve_accept_language_1 = __importDefault(__webpack_require__(/*! resolve-accept-language */ "resolve-accept-language"));
const nookies_1 = __importDefault(__webpack_require__(/*! nookies */ "nookies"));
const nextLog = __importStar(__webpack_require__(/*! next/dist/build/output/log */ "../node_modules/next/dist/build/output/log.js"));
/**
 * Wrapper in front of Next.js' log to only show messages in non-production environments.
 *
 * To avoid exposing sensitive data (e.g. server paths) to the clients, we only display logs in non-production environments.
 */
class log {
    /**
     * Log a warning message in the console(s) to non-production environments.
     *
     * @param message - The warning message to log.
     */
    static warn(message) {
        if (true) {
            nextLog.warn(message);
        }
    }
}
exports.log = log;
/**
 * Get the actual locale based on the current locale from Next.js.
 *
 * To get a dynamic locale resolution on `/` without redirection, we need to add a "multilingual" locale as the
 * default locale so that we can identify when the homepage is requested without a locale. With this setup it
 * also means that we can no longer easily know what is the current locale. This function is meant to return the
 * actual current of locale by replacing the "multilingual" default locale by the actual default locale.
 *
 * @param locale - The current locale from Next.js.
 * @param defaultLocale - The configured i18n default locale from Next.js.
 * @param locales - The configured i18n locales from Next.js.
 *
 * @returns The list of actual locales.
 */
function getActualLocale(locale, defaultLocale, locales) {
    const actualDefaultLocale = getActualDefaultLocale(locales, defaultLocale);
    return locale === defaultLocale ? actualDefaultLocale : locale;
}
exports.getActualLocale = getActualLocale;
/**
 * Get the actual locales based on the Next.js i18n locale configuration.
 *
 * To get a dynamic locale resolution on `/` without redirection, we need to add a "multilingual" locale as the
 * default locale so that we can identify when the homepage is requested without a locale. With this setup it
 * also means that we can no longer use `locales`. This function is meant to return the actual list of locale
 * by removing the "multilingual" default locale.
 *
 * @param locales - The configured i18n locales from Next.js.
 * @param defaultLocale - The configured i18n default locale from Next.js.
 *
 * @returns The list of actual locales.
 */
function getActualLocales(locales, defaultLocale) {
    return locales.filter((locale) => locale !== defaultLocale);
}
exports.getActualLocales = getActualLocales;
/**
 * Get the actual default locale based on the Next.js i18n locale configuration.
 *
 * To get a dynamic locale resolution on `/` without redirection, we need to add a "multilingual" locale as the
 * default locale so that we can identify when the homepage is requested without a locale. With this setup it
 * also means that we can no longer use `defaultLocale`. This function is meant to return the actual default
 * locale (excluding the "multilingual" default locale). By convention (and for simplicity), the first
 * `actualLocales` will be used as the actual default locale.
 *
 * @param locales - The configured i18n locales from Next.js.
 * @param defaultLocale - The configured i18n default locale from Next.js.
 *
 * @returns The actual default locale.
 */
function getActualDefaultLocale(locales, defaultLocale) {
    return getActualLocales(locales, defaultLocale).shift();
}
exports.getActualDefaultLocale = getActualDefaultLocale;
/**
 * Is a given string a locale identifier following the `language`-`country` format?
 *
 * @param locale - A locale identifier.
 * @param checkNormalizedCase - Test is the provided locale follows the ISO 3166 case convention (language code lowercase, country code uppercase).
 *
 * @returns `true` if the string is a locale identifier following the `language`-`country`, otherwise `false`.
 */
function isLocale(locale, checkNormalizedCase = false) {
    const regexp = new RegExp(/^[a-z]{2}-[A-Z]{2}$/, !checkNormalizedCase ? 'i' : '');
    return regexp.test(locale);
}
exports.isLocale = isLocale;
/**
 * Get a normalized locale identifier.
 *
 * `next-multilingual` only uses locale identifiers following the `language`-`country` format. Locale identifiers
 * are case insensitive and can be lowercase, however it is recommended by ISO 3166 convention that language codes
 * are lowercase and country codes are uppercase.
 *
 * @param locale - A locale identifier.
 *
 * @returns The normalized locale identifier following the ISO 3166 convention.
 */
function normalizeLocale(locale) {
    if (!isLocale(locale)) {
        return locale;
    }
    const [languageCode, countryCode] = locale.split('-');
    return `${languageCode.toLowerCase()}-${countryCode.toUpperCase()}`;
}
exports.normalizeLocale = normalizeLocale;
/**
 * Resolve the preferred locale from an HTTP `Accept-Language` header.
 *
 * @param acceptLanguageHeader - The value of an HTTP request `Accept-Language` header.
 * @param actualLocales - The list of actual locales used by `next-multilingual`.
 * @param actualDefaultLocale - The actual default locale used by `next-multilingual`.
 *
 * @returns The preferred locale identifier.
 */
function getPreferredLocale(acceptLanguageHeader, actualLocales, actualDefaultLocale) {
    return (0, resolve_accept_language_1.default)(acceptLanguageHeader, actualLocales, actualDefaultLocale);
}
exports.getPreferredLocale = getPreferredLocale;
// The name of the cookie used to store the user locale, can be overwritten in an `.env` file.
const LOCALE_COOKIE_NAME = process.env.NEXT_PUBLIC_LOCALE_COOKIE_NAME
    ? process.env.NEXT_PUBLIC_LOCALE_COOKIE_NAME
    : 'L';
// The lifetime of the cookie used to store the user locale, can be overwritten in an `.env` file.
const LOCALE_COOKIE_LIFETIME = process.env.NEXT_PUBLIC_LOCALE_COOKIE_LIFETIME
    ? process.env.NEXT_PUBLIC_LOCALE_COOKIE_LIFETIME
    : 60 * 60 * 24 * 365 * 10;
/**
 * Save the current user's locale to the locale cookie.
 *
 * @param locale - A locale identifier.
 */
function setCookieLocale(locale) {
    nookies_1.default.set(null, LOCALE_COOKIE_NAME, locale, {
        maxAge: LOCALE_COOKIE_LIFETIME,
        path: '/',
    });
}
exports.setCookieLocale = setCookieLocale;
/**
 * Get the locale that was saved to the locale cookie.
 *
 * @param nextPageContext - The Next.js page context.
 * @param actualLocales - The list of actual locales used by `next-multilingual`.
 *
 * @returns The locale that was saved to the locale cookie.
 */
function getCookieLocale(nextPageContext, actualLocales) {
    const cookies = nookies_1.default.get(nextPageContext);
    if (!Object.keys(cookies).includes(LOCALE_COOKIE_NAME)) {
        return undefined;
    }
    const cookieLocale = cookies[LOCALE_COOKIE_NAME];
    if (!actualLocales.includes(cookieLocale)) {
        // Delete the cookie if the value is invalid (e.g. been tampered with).
        nookies_1.default.destroy(nextPageContext, LOCALE_COOKIE_NAME);
        return undefined;
    }
    return cookieLocale;
}
exports.getCookieLocale = getCookieLocale;


/***/ }),

/***/ "../lib/link/ssr.js":
/*!**************************!*\
  !*** ../lib/link/ssr.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MulLink = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
const link_1 = __importDefault(__webpack_require__(/*! next/link */ "../node_modules/next/link.js"));
const router_1 = __webpack_require__(/*! next/router */ "next/router");
const get_localized_url_path_1 = __webpack_require__(/*! ../helpers/get-localized-url-path */ "../lib/helpers/get-localized-url-path.js");
const get_rewrites_1 = __webpack_require__(/*! ../helpers/get-rewrites */ "../lib/helpers/get-rewrites.js");
// Throw a clear error is this is included by mistake on the client side.
if (typeof window !== 'undefined') {
    throw new Error('please use the `next-multilingual/link` on the client side, not `next-multilingual/link-ssr`');
}
/**
 * MulLink is a wrapper around Next.js' `Link` that provides localized URLs.
 *
 * This is meant to be used on the server only. Using it on the client side will result in compilation errors.
 *
 * @param href - A non-localized Next.js `href` without a locale prefix (e.g. `/contact-us`)
 * @param locale - The locale to grab the correct localized path.
 * @param props - Any property available on the `LinkProps` (properties of the Next.js' `Link` component).
 *
 * @returns The Next.js `Link` component with the correct localized URLs.
 */
function MulLink(_a) {
    var { href, locale } = _a, props = __rest(_a, ["href", "locale"]);
    const router = (0, router_1.useRouter)();
    locale = locale ? locale : router.locale;
    const localizedUrl = (0, get_localized_url_path_1.getLocalizedUrlPath)((0, get_rewrites_1.getRewrites)(), locale, href);
    return (0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: localizedUrl, locale: locale }, props), void 0);
}
exports.MulLink = MulLink;


/***/ }),

/***/ "../lib/messages/index.js":
/*!********************************!*\
  !*** ../lib/messages/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMessages = exports.Messages = exports.Message = exports.getSourceFilePath = exports.getMessagesFilePath = exports.urlSegmentKeyId = exports.keySegmentRegExp = void 0;
const router_1 = __webpack_require__(/*! next/router */ "next/router");
const path_1 = __webpack_require__(/*! path */ "path");
const __1 = __webpack_require__(/*! .. */ "../lib/index.js");
const __2 = __webpack_require__(/*! .. */ "../lib/index.js");
const intl_messageformat_1 = __importDefault(__webpack_require__(/*! intl-messageformat */ "intl-messageformat"));
/** This is the regular expression to validate message key segments. */
exports.keySegmentRegExp = /^[a-z\d]{3,50}$/i;
/** This is the key identifier used to localize URL segments. */
exports.urlSegmentKeyId = 'pageTitle';
/**
 * Get the localized messages file path.
 *
 * @param sourceFilePath - The path of the source file that is calling `useMessages()`.
 * @param locale - The locale of the message file.
 * @returns
 */
function getMessagesFilePath(sourceFilePath, locale) {
    const { dir: directoryPath, name: filename } = (0, path_1.parse)(sourceFilePath);
    return (0, path_1.resolve)(directoryPath, `${filename}.${(0, __1.normalizeLocale)(locale)}.properties`);
}
exports.getMessagesFilePath = getMessagesFilePath;
/**
 * Get the path of the source file that is calling `useMessages()`.
 *
 * @param messageFilePath - The file path of one of the messages files (any locale).
 * @param sourceFileExtension  - The extension of the source file.
 *
 * @returns The path of the source file that is calling `useMessages()`.
 */
function getSourceFilePath(messageFilePath, sourceFileExtension) {
    const messagesFile = (0, path_1.parse)(messageFilePath);
    const sourceFilename = messagesFile.name.split('.').slice(0, -1).join('.');
    return (0, path_1.resolve)(messagesFile.dir, `${sourceFilename}${sourceFileExtension}`);
}
exports.getSourceFilePath = getSourceFilePath;
/**
 * Object used to format individual localized messages of a local scope.
 */
class Message {
    /**
     * Create an object used to format localized messages of a local scope.
     *
     * @param parent - The parent messages object.
     * @param key - The key of the message.
     * @param message - The localized message.
     */
    constructor(parent, key, message) {
        this.parent = parent;
        this.key = key;
        this.message = message;
    }
    /**
     * Format a message identified by a key in a local scope.
     *
     * @param key - The local scope key identifying the message.
     * @param values - The values (e.g. placeholders) used to format the message, if any.
     *
     * @returns The formatted message as a string.
     */
    format(values) {
        if (values) {
            this.intlMessageFormat = this.intlMessageFormat
                ? this.intlMessageFormat
                : new intl_messageformat_1.default(this.message, this.parent.locale);
            return String(this.intlMessageFormat.format(values));
        }
        return this.message;
    }
}
exports.Message = Message;
/**
 * Object used to format localized messages of a local scope.
 */
class Messages {
    /**
     * Create an object used to format localized messages of a local scope.
     *
     * @param keyValueObject - The "key/value" object coming directly from a `.properties` file.
     * @param locale - The current locale from Next.js.
     * @param sourceFilePath - The file path of the source file associated with the messages.
     * @param messagesFilePath - The file path of the messages.
     */
    constructor(keyValueObject, locale, sourceFilePath, messagesFilePath) {
        /** Localized messages of a local scope. */
        this.messages = [];
        if (keyValueObject) {
            Object.keys(keyValueObject).forEach((key) => {
                this.messages.push(new Message(this, key, keyValueObject[key]));
            });
        }
        this.locale = (0, __1.normalizeLocale)(locale);
        this.sourceFilePath = sourceFilePath;
        this.messagesFilePath = messagesFilePath;
    }
    /**
     * Format a message identified by a key in a local scope.
     *
     * @param key - The local scope key identifying the message.
     * @param values - The values (e.g. placeholders) used to format the message, if any.
     *
     * @returns The formatted message as a string.
     */
    format(key, values) {
        if (!this.messages.length) {
            // No need to log the error since it was caught when calling `useMessage()`.
            return '';
        }
        const message = this.messages.find((message) => message.key === key);
        if (message === undefined) {
            __2.log.warn(`unable to format key with identifier \`${key}\` in \`${this.sourceFilePath}\` because it was not found in messages file \`${this.messagesFilePath}\``);
            return '';
        }
        return message.format(values);
    }
    /**
     * Get all messages contained in a given local scope.
     *
     * @returns All messages contained in a given local scope.
     */
    getAll() {
        return this.messages;
    }
}
exports.Messages = Messages;
/**
 * Hook to get the localized messages specific to a Next.js context.
 *
 * @returns An object containing the messages of the local scope.
 */
function useMessages() {
    if (!this || !this.babelified) {
        throw new Error("useMessages() requires the 'next-multilingual/messages/babel-plugin' Babel plugin");
    }
    const { locale } = (0, router_1.useRouter)();
    const babelifiedMessages = this;
    const sourceFilePath = babelifiedMessages.sourceFilePath;
    const parsedSourceFile = (0, path_1.parse)(sourceFilePath);
    const sourceFileDirectoryPath = parsedSourceFile.dir;
    const messagesFilename = `${parsedSourceFile.name}.${(0, __1.normalizeLocale)(locale)}.properties`;
    const messagesFilePath = (0, path_1.resolve)(sourceFileDirectoryPath, messagesFilename);
    if (!babelifiedMessages.keyValueObjectCollection[locale]) {
        __2.log.warn(`unable to use \`useMessages()\` in \`${babelifiedMessages.sourceFilePath}\` because no messagess could be found at \`${messagesFilePath}\``);
    }
    return new Messages(babelifiedMessages.keyValueObjectCollection[locale], locale, sourceFilePath, messagesFilePath);
}
exports.useMessages = useMessages;


/***/ }),

/***/ "./components/localeStrings.json":
/*!***************************************!*\
  !*** ./components/localeStrings.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"en-US":"English (United States)","fr-CA":"Français (Canada)"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTyxRQUFRO0FBQ2hDLGlCQUFpQixPQUFPLFFBQVE7QUFDaEMsa0JBQWtCLE9BQU8sT0FBTztBQUNoQyxrQkFBa0IsT0FBTyxPQUFPO0FBQ2hDLGlCQUFpQixRQUFRLE9BQU87QUFDaEMsaUJBQWlCLFFBQVEsT0FBTztBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7O0FBRXZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsRUFBRSxVQUFVLEVBQUU7QUFDN0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixhQUFhLGFBQWE7QUFDMUM7QUFDQSxnQkFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkphO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsSUFBSSxVQUFVLG9CQUFvQixpREFBaUQsc0JBQXNCO0FBQzVLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0IsR0FBRyxpQ0FBaUM7QUFDMUY7QUFDQTtBQUNBLDZEQUE2RCxrQ0FBa0MsOENBQThDLGlCQUFpQjtBQUM5SjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4vY29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi9jb21wb25lbnRzL0xhbmd1YWdlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4vbGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uL21lc3NhZ2VzL0ZydWl0cy50cyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9vdXRwdXQvbG9nLmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi9jb21wb25lbnRzL0xhbmd1YWdlUGlja2VyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvYW5zaS1zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY2hhbGsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY2hhbGsvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJlc2NhcGUtc3RyaW5nLXJlZ2V4cFwiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qc1wiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvZXh0ZXJuYWwgXCJyZXNvbHZlLWFjY2VwdC1sYW5ndWFnZVwiIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbGliL2hlYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9saWIvaGVscGVycy9nZXQtbG9jYWxpemVkLXVybC1wYXRoLmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbGliL2hlbHBlcnMvZ2V0LW9yaWdpbi5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL2xpYi9oZWxwZXJzL2dldC1yZXdyaXRlcy5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL2xpYi9oZWxwZXJzL25vcm1hbGl6ZS11cmwtcGF0aC5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL2xpYi9ob29rcy91c2UtYWx0ZXJuYXRlLWxpbmtzLmpzIiwid2VicGFjazovL25leHQtbXVsdGlsaW5ndWFsLWV4YW1wbGUvLi4vbGliL2hvb2tzL3VzZS1jYW5vbmljYWwtbGluay5qcyIsIndlYnBhY2s6Ly9uZXh0LW11bHRpbGluZ3VhbC1leGFtcGxlLy4uL2xpYi9ob29rcy91c2UtcmV3cml0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9saWIvbGluay9zc3IuanMiLCJ3ZWJwYWNrOi8vbmV4dC1tdWx0aWxpbmd1YWwtZXhhbXBsZS8uLi9saWIvbWVzc2FnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU1lc3NhZ2VzIH0gZnJvbSAnbmV4dC1tdWx0aWxpbmd1YWwvbWVzc2FnZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgbWVzc2FnZXMgPSB1c2VNZXNzYWdlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgIHttZXNzYWdlcy5mb3JtYXQoJ2Zvb3Rlck1lc3NhZ2UnKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBub3JtYWxpemVMb2NhbGUsXHJcbiAgZ2V0QWN0dWFsTG9jYWxlcyxcclxuICBnZXRBY3R1YWxMb2NhbGUsXHJcbiAgc2V0Q29va2llTG9jYWxlXHJcbn0gZnJvbSAnbmV4dC1tdWx0aWxpbmd1YWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNdWxMaW5rIH0gZnJvbSAnbmV4dC1tdWx0aWxpbmd1YWwvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYW5ndWFnZVBpY2tlci5tb2R1bGUuY3NzJztcclxuXHJcbi8vIExvY2FsZXMgYXJlIG5vdCBsb2NhbGl6ZWQgd2hpY2ggaXMgd2h5IGl0IHVzZXMgYSBKU09OIGZpbGUuXHJcbmltcG9ydCBsb2NhbGVTdHJpbmdzIGZyb20gJy4vbG9jYWxlU3RyaW5ncy5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmd1YWdlUGlja2VyKCk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSwgbG9jYWxlLCBsb2NhbGVzLCBkZWZhdWx0TG9jYWxlIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhY3R1YWxMb2NhbGUgPSBnZXRBY3R1YWxMb2NhbGUobG9jYWxlLCBkZWZhdWx0TG9jYWxlLCBsb2NhbGVzKTtcclxuICBjb25zdCBhY3R1YWxMb2NhbGVzID0gZ2V0QWN0dWFsTG9jYWxlcyhsb2NhbGVzLCBkZWZhdWx0TG9jYWxlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ3VhZ2VQaWNrZXJ9PlxyXG4gICAgICA8YnV0dG9uPlxyXG4gICAgICAgIHtsb2NhbGVTdHJpbmdzW25vcm1hbGl6ZUxvY2FsZShhY3R1YWxMb2NhbGUpXX1cclxuICAgICAgICA8aT48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthY3R1YWxMb2NhbGVzXHJcbiAgICAgICAgICAuZmlsdGVyKChsb2NhbGUpID0+IGxvY2FsZSAhPT0gYWN0dWFsTG9jYWxlKVxyXG4gICAgICAgICAgLm1hcCgobG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE11bExpbmsga2V5PXtsb2NhbGV9IGhyZWY9e3BhdGhuYW1lfSBsb2NhbGU9e2xvY2FsZX0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llTG9jYWxlKGxvY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2NhbGVTdHJpbmdzW25vcm1hbGl6ZUxvY2FsZShsb2NhbGUpXX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L011bExpbms+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IE11bEhlYWQgfSBmcm9tICduZXh0LW11bHRpbGluZ3VhbC9oZWFkJztcclxuaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExhbmd1YWdlUGlja2VyIGZyb20gJ0AvY29tcG9uZW50cy9MYW5ndWFnZVBpY2tlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IE11bExpbmsgfSBmcm9tICduZXh0LW11bHRpbGluZ3VhbC9saW5rJztcclxuaW1wb3J0IHsgdXNlTWVzc2FnZXMgfSBmcm9tICduZXh0LW11bHRpbGluZ3VhbC9tZXNzYWdlcyc7XHJcblxyXG50eXBlIExheW91dFByb3BzID0ge1xyXG4gIC8qKiBUaGUgdGl0bGUgb2YgdGhlIHBhZ2UuICovXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB1c2VkIGZvciB0aGUgZ2VuZXJhbCBsYXlvdXQgb2YgYSBwYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIHBhZ2UuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyB0aXRsZSwgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IG1lc3NhZ2VzID0gdXNlTWVzc2FnZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE11bEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIlxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgIDwvTXVsSGVhZD5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPnttZXNzYWdlcy5mb3JtYXQoJ2hlYWRlcicpfTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGFuZ3VhZ2VQaWNrZXIgLz5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICA8TXVsTGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT57bWVzc2FnZXMuZm9ybWF0KCdob21lJyl9PC9hPlxyXG4gICAgICAgICAgPC9NdWxMaW5rPlxyXG4gICAgICAgICAgPE11bExpbmsgaHJlZj1cIi9hYm91dC11c1wiPlxyXG4gICAgICAgICAgICA8YT57bWVzc2FnZXMuZm9ybWF0KCdhYm91dFVzJyl9PC9hPlxyXG4gICAgICAgICAgPC9NdWxMaW5rPlxyXG4gICAgICAgICAgPE11bExpbmsgaHJlZj1cIi9jb250YWN0LXVzXCI+XHJcbiAgICAgICAgICAgIDxhPnttZXNzYWdlcy5mb3JtYXQoJ2NvbnRhY3RVcycpfTwvYT5cclxuICAgICAgICAgIDwvTXVsTGluaz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTWVzc2FnZXMgfSBmcm9tICduZXh0LW11bHRpbGluZ3VhbC9tZXNzYWdlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRnJ1aXRzTWVzc2FnZXMgPSB1c2VNZXNzYWdlcztcclxuIiwiaW1wb3J0IHtcclxuICBnZXRBY3R1YWxMb2NhbGVzLFxyXG4gIGdldEFjdHVhbERlZmF1bHRMb2NhbGUsXHJcbiAgbm9ybWFsaXplTG9jYWxlLFxyXG4gIGdldEFjdHVhbExvY2FsZSxcclxuICBnZXRQcmVmZXJyZWRMb2NhbGUsXHJcbiAgZ2V0Q29va2llTG9jYWxlXHJcbn0gZnJvbSAnbmV4dC1tdWx0aWxpbmd1YWwnO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9sYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VNZXNzYWdlcyB9IGZyb20gJ25leHQtbXVsdGlsaW5ndWFsL21lc3NhZ2VzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBSZXNvbHZlZExvY2FsZVNlcnZlclNpZGVQcm9wcywgc2V0Q29va2llTG9jYWxlIH0gZnJvbSAnbmV4dC1tdWx0aWxpbmd1YWwnO1xyXG5pbXBvcnQgeyB1c2VGcnVpdHNNZXNzYWdlcyB9IGZyb20gJy4uL21lc3NhZ2VzL0ZydWl0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoeyByZXNvbHZlZExvY2FsZSB9OiBSZXNvbHZlZExvY2FsZVNlcnZlclNpZGVQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2NhbGVzLCBkZWZhdWx0TG9jYWxlIH0gPSByb3V0ZXI7XHJcblxyXG4gIC8vIE92ZXJ3cml0ZSB0aGUgbG9jYWxlIHdpdGggdGhlIHJlc29sdmVkIGxvY2FsZS5cclxuICByb3V0ZXIubG9jYWxlID0gcmVzb2x2ZWRMb2NhbGU7XHJcbiAgc2V0Q29va2llTG9jYWxlKHJvdXRlci5sb2NhbGUpO1xyXG5cclxuICAvLyBMb2FkIHRoZSBtZXNzYWdlcyBpbiB0aGUgY29ycmVjdCBsb2NhbGUuXHJcbiAgY29uc3QgbWVzc2FnZXMgPSB1c2VNZXNzYWdlcygpO1xyXG4gIGNvbnN0IGZydWl0c01lc3NhZ2VzID0gdXNlRnJ1aXRzTWVzc2FnZXMoKTtcclxuXHJcbiAgLy8gQ291bnRlciB1c2VkIGZvciBJQ1UgTWVzc2FnZUZvcm1hdCBleGFtcGxlLlxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXttZXNzYWdlcy5mb3JtYXQoJ3BhZ2VUaXRsZScpfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRsaW5lfT57bWVzc2FnZXMuZm9ybWF0KCdoZWFkbGluZScpfTwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YkhlYWRlcn0+e21lc3NhZ2VzLmZvcm1hdCgnc3ViSGVhZGVyJyl9PC9oMj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPnttZXNzYWdlcy5mb3JtYXQoJ2NvbHVtbkluZm9ybWF0aW9uJyl9PC90aD5cclxuICAgICAgICAgICAgICA8dGg+e21lc3NhZ2VzLmZvcm1hdCgnY29sdW1uTmV4dEpzJyl9PC90aD5cclxuICAgICAgICAgICAgICA8dGg+e21lc3NhZ2VzLmZvcm1hdCgnY29sdW1uQWN0dWFsJyl9PC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+e21lc3NhZ2VzLmZvcm1hdCgncm93RGVmYXVsdExvY2FsZScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntub3JtYWxpemVMb2NhbGUoZGVmYXVsdExvY2FsZSl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e25vcm1hbGl6ZUxvY2FsZShnZXRBY3R1YWxEZWZhdWx0TG9jYWxlKGxvY2FsZXMsIGRlZmF1bHRMb2NhbGUpKX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPnttZXNzYWdlcy5mb3JtYXQoJ3Jvd0NvbmZpZ3VyZWRMb2NhbGVzJyl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2xvY2FsZXMubWFwKChsb2NhbGUpID0+IG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUpKS5qb2luKCcsICcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAge2dldEFjdHVhbExvY2FsZXMobG9jYWxlcywgZGVmYXVsdExvY2FsZSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgobG9jYWxlKSA9PiBub3JtYWxpemVMb2NhbGUobG9jYWxlKSlcclxuICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPnttZXNzYWdlcy5mb3JtYXQoJ3NoYXJlZEhlYWRlcicpfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bWVzc2FnZXMuZm9ybWF0KCdzaGFyZWRMaXN0Jyl9XHJcbiAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgIHtmcnVpdHNNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgLmdldEFsbCgpXHJcbiAgICAgICAgICAgICAgICAubWFwKChtZXNzYWdlKSA9PiBtZXNzYWdlLmZvcm1hdCgpKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9XHJcbiAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge21lc3NhZ2VzLmZvcm1hdCgnc2hhcmVkRHJvcERvd24nKX1cclxuICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICB7ZnJ1aXRzTWVzc2FnZXMuZ2V0QWxsKCkubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bWVzc2FnZS5mb3JtYXQoKX0+e21lc3NhZ2UuZm9ybWF0KCl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj57bWVzc2FnZXMuZm9ybWF0KCdtZkhlYWRlcicpfTwvaDI+XHJcbiAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXtzdHlsZXMubWZFeGFtcGxlfT5cclxuICAgICAgICAgICAgPGxlZ2VuZD57bWVzc2FnZXMuZm9ybWF0KCdtZlVzaW5nJyl9PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgIHttZXNzYWdlcy5mb3JtYXQoJ21mUGx1cmFsJyl9XHJcbiAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgPHA+e21lc3NhZ2VzLmZvcm1hdCgnbWZQbHVyYWwnLCB7IGNvdW50IH0pfTwvcD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0gdGl0bGU9e21lc3NhZ2VzLmZvcm1hdCgnbWZBZGRDYW5keScpfT5cclxuICAgICAgICAgICAg4p6V8J+NrVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoY291bnQgPiAwKSBzZXRDb3VudChjb3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0aXRsZT17bWVzc2FnZXMuZm9ybWF0KCdtZlJlbW92ZUNhbmR5Jyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOKelvCfja1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoXHJcbiAgbmV4dFBhZ2VDb250ZXh0OiBOZXh0UGFnZUNvbnRleHRcclxuKTogUHJvbWlzZTx7IHByb3BzOiBSZXNvbHZlZExvY2FsZVNlcnZlclNpZGVQcm9wcyB9PiB7XHJcbiAgY29uc3QgeyByZXEsIGxvY2FsZSwgbG9jYWxlcywgZGVmYXVsdExvY2FsZSB9ID0gbmV4dFBhZ2VDb250ZXh0O1xyXG5cclxuICBjb25zdCBhY3R1YWxMb2NhbGVzID0gZ2V0QWN0dWFsTG9jYWxlcyhsb2NhbGVzLCBkZWZhdWx0TG9jYWxlKTtcclxuICBjb25zdCBhY3R1YWxEZWZhdWx0TG9jYWxlID0gZ2V0QWN0dWFsRGVmYXVsdExvY2FsZShsb2NhbGVzLCBkZWZhdWx0TG9jYWxlKTtcclxuICBjb25zdCBjb29raWVMb2NhbGUgPSBnZXRDb29raWVMb2NhbGUobmV4dFBhZ2VDb250ZXh0LCBhY3R1YWxMb2NhbGVzKTtcclxuICBsZXQgcmVzb2x2ZWRMb2NhbGUgPSBnZXRBY3R1YWxMb2NhbGUobG9jYWxlLCBkZWZhdWx0TG9jYWxlLCBsb2NhbGVzKTtcclxuXHJcbiAgLy8gV2hlbiBOZXh0LmpzIHRyaWVzIHRvIHVzZSB0aGUgZGVmYXVsdCBsb2NhbGUsIHRyeSB0byBmaW5kIGEgYmV0dGVyIG9uZS5cclxuICBpZiAobG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSB7XHJcbiAgICByZXNvbHZlZExvY2FsZSA9IGNvb2tpZUxvY2FsZVxyXG4gICAgICA/IGNvb2tpZUxvY2FsZVxyXG4gICAgICA6IGdldFByZWZlcnJlZExvY2FsZShcclxuICAgICAgICAgIHJlcS5oZWFkZXJzWydhY2NlcHQtbGFuZ3VhZ2UnXSxcclxuICAgICAgICAgIGFjdHVhbExvY2FsZXMsXHJcbiAgICAgICAgICBhY3R1YWxEZWZhdWx0TG9jYWxlXHJcbiAgICAgICAgKS50b0xvd2VyQ2FzZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlc29sdmVkTG9jYWxlXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2FpdCA9IHdhaXQ7XG5leHBvcnRzLmVycm9yID0gZXJyb3I7XG5leHBvcnRzLndhcm4gPSB3YXJuO1xuZXhwb3J0cy5yZWFkeSA9IHJlYWR5O1xuZXhwb3J0cy5pbmZvID0gaW5mbztcbmV4cG9ydHMuZXZlbnQgPSBldmVudDtcbmV4cG9ydHMucHJlZml4ZXMgPSB2b2lkIDA7XG52YXIgX2NoYWxrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2hhbGtcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZml4ZXMgPSB7XG4gICAgd2FpdDogX2NoYWxrLmRlZmF1bHQuY3lhbignd2FpdCcpICsgJyAgLScsXG4gICAgZXJyb3I6IF9jaGFsay5kZWZhdWx0LnJlZCgnZXJyb3InKSArICcgLScsXG4gICAgd2FybjogX2NoYWxrLmRlZmF1bHQueWVsbG93KCd3YXJuJykgKyAnICAtJyxcbiAgICByZWFkeTogX2NoYWxrLmRlZmF1bHQuZ3JlZW4oJ3JlYWR5JykgKyAnIC0nLFxuICAgIGluZm86IF9jaGFsay5kZWZhdWx0LmN5YW4oJ2luZm8nKSArICcgIC0nLFxuICAgIGV2ZW50OiBfY2hhbGsuZGVmYXVsdC5tYWdlbnRhKCdldmVudCcpICsgJyAtJ1xufTtcbmV4cG9ydHMucHJlZml4ZXMgPSBwcmVmaXhlcztcbmZ1bmN0aW9uIHdhaXQoLi4ubWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKHByZWZpeGVzLndhaXQsIC4uLm1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gZXJyb3IoLi4ubWVzc2FnZSkge1xuICAgIGNvbnNvbGUuZXJyb3IocHJlZml4ZXMuZXJyb3IsIC4uLm1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gd2FybiguLi5tZXNzYWdlKSB7XG4gICAgY29uc29sZS53YXJuKHByZWZpeGVzLndhcm4sIC4uLm1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gcmVhZHkoLi4ubWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKHByZWZpeGVzLnJlYWR5LCAuLi5tZXNzYWdlKTtcbn1cbmZ1bmN0aW9uIGluZm8oLi4ubWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKHByZWZpeGVzLmluZm8sIC4uLm1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gZXZlbnQoLi4ubWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKHByZWZpeGVzLmV2ZW50LCAuLi5tZXNzYWdlKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nLmpzLm1hcCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzFfQlc0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYW5ndWFnZVBpY2tlclwiOiBcIkxhbmd1YWdlUGlja2VyX2xhbmd1YWdlUGlja2VyX18xYVB4R1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiTGF5b3V0X2hlYWRlcl9fMk0yRjhcIixcblx0XCJtYWluXCI6IFwiTGF5b3V0X21haW5fXzNINmgxXCIsXG5cdFwibmF2XCI6IFwiTGF5b3V0X25hdl9fMVo2ZGhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRsaW5lXCI6IFwiaW5kZXhfaGVhZGxpbmVfXzNyaUtjXCIsXG5cdFwic3ViSGVhZGVyXCI6IFwiaW5kZXhfc3ViSGVhZGVyX18xOWZrUFwiLFxuXHRcInRhYmxlXCI6IFwiaW5kZXhfdGFibGVfXzFyclFVXCIsXG5cdFwibWZFeGFtcGxlXCI6IFwiaW5kZXhfbWZFeGFtcGxlX18zT0o4cFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgY29sb3JDb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXG5jb25zdCB3cmFwQW5zaTE2ID0gKGZuLCBvZmZzZXQpID0+IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29kZSA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7Y29kZSArIG9mZnNldH1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMjU2ID0gKGZuLCBvZmZzZXQpID0+IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29kZSA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzU7JHtjb2RlfW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kxNm0gPSAoZm4sIG9mZnNldCkgPT4gZnVuY3Rpb24gKCkge1xuXHRjb25zdCByZ2IgPSBmbi5hcHBseShjb2xvckNvbnZlcnQsIGFyZ3VtZW50cyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTsyOyR7cmdiWzBdfTske3JnYlsxXX07JHtyZ2JbMl19bWA7XG59O1xuXG5mdW5jdGlvbiBhc3NlbWJsZVN0eWxlcygpIHtcblx0Y29uc3QgY29kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRtb2RpZmllcjoge1xuXHRcdFx0cmVzZXQ6IFswLCAwXSxcblx0XHRcdC8vIDIxIGlzbid0IHdpZGVseSBzdXBwb3J0ZWQgYW5kIDIyIGRvZXMgdGhlIHNhbWUgdGhpbmdcblx0XHRcdGJvbGQ6IFsxLCAyMl0sXG5cdFx0XHRkaW06IFsyLCAyMl0sXG5cdFx0XHRpdGFsaWM6IFszLCAyM10sXG5cdFx0XHR1bmRlcmxpbmU6IFs0LCAyNF0sXG5cdFx0XHRpbnZlcnNlOiBbNywgMjddLFxuXHRcdFx0aGlkZGVuOiBbOCwgMjhdLFxuXHRcdFx0c3RyaWtldGhyb3VnaDogWzksIDI5XVxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdGJsYWNrOiBbMzAsIDM5XSxcblx0XHRcdHJlZDogWzMxLCAzOV0sXG5cdFx0XHRncmVlbjogWzMyLCAzOV0sXG5cdFx0XHR5ZWxsb3c6IFszMywgMzldLFxuXHRcdFx0Ymx1ZTogWzM0LCAzOV0sXG5cdFx0XHRtYWdlbnRhOiBbMzUsIDM5XSxcblx0XHRcdGN5YW46IFszNiwgMzldLFxuXHRcdFx0d2hpdGU6IFszNywgMzldLFxuXHRcdFx0Z3JheTogWzkwLCAzOV0sXG5cblx0XHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdFx0cmVkQnJpZ2h0OiBbOTEsIDM5XSxcblx0XHRcdGdyZWVuQnJpZ2h0OiBbOTIsIDM5XSxcblx0XHRcdHllbGxvd0JyaWdodDogWzkzLCAzOV0sXG5cdFx0XHRibHVlQnJpZ2h0OiBbOTQsIDM5XSxcblx0XHRcdG1hZ2VudGFCcmlnaHQ6IFs5NSwgMzldLFxuXHRcdFx0Y3lhbkJyaWdodDogWzk2LCAzOV0sXG5cdFx0XHR3aGl0ZUJyaWdodDogWzk3LCAzOV1cblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdGJnQmxhY2s6IFs0MCwgNDldLFxuXHRcdFx0YmdSZWQ6IFs0MSwgNDldLFxuXHRcdFx0YmdHcmVlbjogWzQyLCA0OV0sXG5cdFx0XHRiZ1llbGxvdzogWzQzLCA0OV0sXG5cdFx0XHRiZ0JsdWU6IFs0NCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhOiBbNDUsIDQ5XSxcblx0XHRcdGJnQ3lhbjogWzQ2LCA0OV0sXG5cdFx0XHRiZ1doaXRlOiBbNDcsIDQ5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRiZ0JsYWNrQnJpZ2h0OiBbMTAwLCA0OV0sXG5cdFx0XHRiZ1JlZEJyaWdodDogWzEwMSwgNDldLFxuXHRcdFx0YmdHcmVlbkJyaWdodDogWzEwMiwgNDldLFxuXHRcdFx0YmdZZWxsb3dCcmlnaHQ6IFsxMDMsIDQ5XSxcblx0XHRcdGJnQmx1ZUJyaWdodDogWzEwNCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhQnJpZ2h0OiBbMTA1LCA0OV0sXG5cdFx0XHRiZ0N5YW5CcmlnaHQ6IFsxMDYsIDQ5XSxcblx0XHRcdGJnV2hpdGVCcmlnaHQ6IFsxMDcsIDQ5XVxuXHRcdH1cblx0fTtcblxuXHQvLyBGaXggaHVtYW5zXG5cdHN0eWxlcy5jb2xvci5ncmV5ID0gc3R5bGVzLmNvbG9yLmdyYXk7XG5cblx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgT2JqZWN0LmtleXMoc3R5bGVzKSkge1xuXHRcdGNvbnN0IGdyb3VwID0gc3R5bGVzW2dyb3VwTmFtZV07XG5cblx0XHRmb3IgKGNvbnN0IHN0eWxlTmFtZSBvZiBPYmplY3Qua2V5cyhncm91cCkpIHtcblx0XHRcdGNvbnN0IHN0eWxlID0gZ3JvdXBbc3R5bGVOYW1lXTtcblxuXHRcdFx0c3R5bGVzW3N0eWxlTmFtZV0gPSB7XG5cdFx0XHRcdG9wZW46IGBcXHUwMDFCWyR7c3R5bGVbMF19bWAsXG5cdFx0XHRcdGNsb3NlOiBgXFx1MDAxQlske3N0eWxlWzFdfW1gXG5cdFx0XHR9O1xuXG5cdFx0XHRncm91cFtzdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cblx0XHRcdGNvZGVzLnNldChzdHlsZVswXSwgc3R5bGVbMV0pO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsIGdyb3VwTmFtZSwge1xuXHRcdFx0dmFsdWU6IGdyb3VwLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0XHR9KTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsICdjb2RlcycsIHtcblx0XHRcdHZhbHVlOiBjb2Rlcyxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBhbnNpMmFuc2kgPSBuID0+IG47XG5cdGNvbnN0IHJnYjJyZ2IgPSAociwgZywgYikgPT4gW3IsIGcsIGJdO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzdHlsZXMuY29sb3IuYW5zaSA9IHtcblx0XHRhbnNpOiB3cmFwQW5zaTE2KGFuc2kyYW5zaSwgMClcblx0fTtcblx0c3R5bGVzLmNvbG9yLmFuc2kyNTYgPSB7XG5cdFx0YW5zaTI1Njogd3JhcEFuc2kyNTYoYW5zaTJhbnNpLCAwKVxuXHR9O1xuXHRzdHlsZXMuY29sb3IuYW5zaTE2bSA9IHtcblx0XHRyZ2I6IHdyYXBBbnNpMTZtKHJnYjJyZ2IsIDApXG5cdH07XG5cblx0c3R5bGVzLmJnQ29sb3IuYW5zaSA9IHtcblx0XHRhbnNpOiB3cmFwQW5zaTE2KGFuc2kyYW5zaSwgMTApXG5cdH07XG5cdHN0eWxlcy5iZ0NvbG9yLmFuc2kyNTYgPSB7XG5cdFx0YW5zaTI1Njogd3JhcEFuc2kyNTYoYW5zaTJhbnNpLCAxMClcblx0fTtcblx0c3R5bGVzLmJnQ29sb3IuYW5zaTE2bSA9IHtcblx0XHRyZ2I6IHdyYXBBbnNpMTZtKHJnYjJyZ2IsIDEwKVxuXHR9O1xuXG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjb2xvckNvbnZlcnQpKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvckNvbnZlcnRba2V5XSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1aXRlID0gY29sb3JDb252ZXJ0W2tleV07XG5cblx0XHRpZiAoa2V5ID09PSAnYW5zaTE2Jykge1xuXHRcdFx0a2V5ID0gJ2Fuc2knO1xuXHRcdH1cblxuXHRcdGlmICgnYW5zaTE2JyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2lba2V5XSA9IHdyYXBBbnNpMTYoc3VpdGUuYW5zaTE2LCAwKTtcblx0XHRcdHN0eWxlcy5iZ0NvbG9yLmFuc2lba2V5XSA9IHdyYXBBbnNpMTYoc3VpdGUuYW5zaTE2LCAxMCk7XG5cdFx0fVxuXG5cdFx0aWYgKCdhbnNpMjU2JyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2kyNTZba2V5XSA9IHdyYXBBbnNpMjU2KHN1aXRlLmFuc2kyNTYsIDApO1xuXHRcdFx0c3R5bGVzLmJnQ29sb3IuYW5zaTI1NltrZXldID0gd3JhcEFuc2kyNTYoc3VpdGUuYW5zaTI1NiwgMTApO1xuXHRcdH1cblxuXHRcdGlmICgncmdiJyBpbiBzdWl0ZSkge1xuXHRcdFx0c3R5bGVzLmNvbG9yLmFuc2kxNm1ba2V5XSA9IHdyYXBBbnNpMTZtKHN1aXRlLnJnYiwgMCk7XG5cdFx0XHRzdHlsZXMuYmdDb2xvci5hbnNpMTZtW2tleV0gPSB3cmFwQW5zaTE2bShzdWl0ZS5yZ2IsIDEwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG4vLyBNYWtlIHRoZSBleHBvcnQgaW1tdXRhYmxlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Z2V0OiBhc3NlbWJsZVN0eWxlc1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBlc2NhcGVTdHJpbmdSZWdleHAgPSByZXF1aXJlKCdlc2NhcGUtc3RyaW5nLXJlZ2V4cCcpO1xuY29uc3QgYW5zaVN0eWxlcyA9IHJlcXVpcmUoJ2Fuc2ktc3R5bGVzJyk7XG5jb25zdCBzdGRvdXRDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJykuc3Rkb3V0O1xuXG5jb25zdCB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzLmpzJyk7XG5cbmNvbnN0IGlzU2ltcGxlV2luZG93c1Rlcm0gPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInICYmICEocHJvY2Vzcy5lbnYuVEVSTSB8fCAnJykudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCd4dGVybScpO1xuXG4vLyBgc3VwcG9ydHNDb2xvci5sZXZlbGAg4oaSIGBhbnNpU3R5bGVzLmNvbG9yW25hbWVdYCBtYXBwaW5nXG5jb25zdCBsZXZlbE1hcHBpbmcgPSBbJ2Fuc2knLCAnYW5zaScsICdhbnNpMjU2JywgJ2Fuc2kxNm0nXTtcblxuLy8gYGNvbG9yLWNvbnZlcnRgIG1vZGVscyB0byBleGNsdWRlIGZyb20gdGhlIENoYWxrIEFQSSBkdWUgdG8gY29uZmxpY3RzIGFuZCBzdWNoXG5jb25zdCBza2lwTW9kZWxzID0gbmV3IFNldChbJ2dyYXknXSk7XG5cbmNvbnN0IHN0eWxlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIGFwcGx5T3B0aW9ucyhvYmosIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0Ly8gRGV0ZWN0IGxldmVsIGlmIG5vdCBzZXQgbWFudWFsbHlcblx0Y29uc3Qgc2NMZXZlbCA9IHN0ZG91dENvbG9yID8gc3Rkb3V0Q29sb3IubGV2ZWwgOiAwO1xuXHRvYmoubGV2ZWwgPSBvcHRpb25zLmxldmVsID09PSB1bmRlZmluZWQgPyBzY0xldmVsIDogb3B0aW9ucy5sZXZlbDtcblx0b2JqLmVuYWJsZWQgPSAnZW5hYmxlZCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuZW5hYmxlZCA6IG9iai5sZXZlbCA+IDA7XG59XG5cbmZ1bmN0aW9uIENoYWxrKG9wdGlvbnMpIHtcblx0Ly8gV2UgY2hlY2sgZm9yIHRoaXMudGVtcGxhdGUgaGVyZSBzaW5jZSBjYWxsaW5nIGBjaGFsay5jb25zdHJ1Y3RvcigpYFxuXHQvLyBieSBpdHNlbGYgd2lsbCBoYXZlIGEgYHRoaXNgIG9mIGEgcHJldmlvdXNseSBjb25zdHJ1Y3RlZCBjaGFsayBvYmplY3Rcblx0aWYgKCF0aGlzIHx8ICEodGhpcyBpbnN0YW5jZW9mIENoYWxrKSB8fCB0aGlzLnRlbXBsYXRlKSB7XG5cdFx0Y29uc3QgY2hhbGsgPSB7fTtcblx0XHRhcHBseU9wdGlvbnMoY2hhbGssIG9wdGlvbnMpO1xuXG5cdFx0Y2hhbGsudGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIGNoYWxrVGFnLmFwcGx5KG51bGwsIFtjaGFsay50ZW1wbGF0ZV0uY29uY2F0KGFyZ3MpKTtcblx0XHR9O1xuXG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLCBDaGFsay5wcm90b3R5cGUpO1xuXHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFsay50ZW1wbGF0ZSwgY2hhbGspO1xuXG5cdFx0Y2hhbGsudGVtcGxhdGUuY29uc3RydWN0b3IgPSBDaGFsaztcblxuXHRcdHJldHVybiBjaGFsay50ZW1wbGF0ZTtcblx0fVxuXG5cdGFwcGx5T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbn1cblxuLy8gVXNlIGJyaWdodCBibHVlIG9uIFdpbmRvd3MgYXMgdGhlIG5vcm1hbCBibHVlIGNvbG9yIGlzIGlsbGVnaWJsZVxuaWYgKGlzU2ltcGxlV2luZG93c1Rlcm0pIHtcblx0YW5zaVN0eWxlcy5ibHVlLm9wZW4gPSAnXFx1MDAxQls5NG0nO1xufVxuXG5mb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhbnNpU3R5bGVzKSkge1xuXHRhbnNpU3R5bGVzW2tleV0uY2xvc2VSZSA9IG5ldyBSZWdFeHAoZXNjYXBlU3RyaW5nUmVnZXhwKGFuc2lTdHlsZXNba2V5XS5jbG9zZSksICdnJyk7XG5cblx0c3R5bGVzW2tleV0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3QgY29kZXMgPSBhbnNpU3R5bGVzW2tleV07XG5cdFx0XHRyZXR1cm4gYnVpbGQuY2FsbCh0aGlzLCB0aGlzLl9zdHlsZXMgPyB0aGlzLl9zdHlsZXMuY29uY2F0KGNvZGVzKSA6IFtjb2Rlc10sIHRoaXMuX2VtcHR5LCBrZXkpO1xuXHRcdH1cblx0fTtcbn1cblxuc3R5bGVzLnZpc2libGUgPSB7XG5cdGdldCgpIHtcblx0XHRyZXR1cm4gYnVpbGQuY2FsbCh0aGlzLCB0aGlzLl9zdHlsZXMgfHwgW10sIHRydWUsICd2aXNpYmxlJyk7XG5cdH1cbn07XG5cbmFuc2lTdHlsZXMuY29sb3IuY2xvc2VSZSA9IG5ldyBSZWdFeHAoZXNjYXBlU3RyaW5nUmVnZXhwKGFuc2lTdHlsZXMuY29sb3IuY2xvc2UpLCAnZycpO1xuZm9yIChjb25zdCBtb2RlbCBvZiBPYmplY3Qua2V5cyhhbnNpU3R5bGVzLmNvbG9yLmFuc2kpKSB7XG5cdGlmIChza2lwTW9kZWxzLmhhcyhtb2RlbCkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdHN0eWxlc1ttb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3QgbGV2ZWwgPSB0aGlzLmxldmVsO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3Qgb3BlbiA9IGFuc2lTdHlsZXMuY29sb3JbbGV2ZWxNYXBwaW5nW2xldmVsXV1bbW9kZWxdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdGNvbnN0IGNvZGVzID0ge1xuXHRcdFx0XHRcdG9wZW4sXG5cdFx0XHRcdFx0Y2xvc2U6IGFuc2lTdHlsZXMuY29sb3IuY2xvc2UsXG5cdFx0XHRcdFx0Y2xvc2VSZTogYW5zaVN0eWxlcy5jb2xvci5jbG9zZVJlXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiBidWlsZC5jYWxsKHRoaXMsIHRoaXMuX3N0eWxlcyA/IHRoaXMuX3N0eWxlcy5jb25jYXQoY29kZXMpIDogW2NvZGVzXSwgdGhpcy5fZW1wdHksIG1vZGVsKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5hbnNpU3R5bGVzLmJnQ29sb3IuY2xvc2VSZSA9IG5ldyBSZWdFeHAoZXNjYXBlU3RyaW5nUmVnZXhwKGFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZSksICdnJyk7XG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMuYmdDb2xvci5hbnNpKSkge1xuXHRpZiAoc2tpcE1vZGVscy5oYXMobW9kZWwpKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRjb25zdCBiZ01vZGVsID0gJ2JnJyArIG1vZGVsWzBdLnRvVXBwZXJDYXNlKCkgKyBtb2RlbC5zbGljZSgxKTtcblx0c3R5bGVzW2JnTW9kZWxdID0ge1xuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IGxldmVsID0gdGhpcy5sZXZlbDtcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvbnN0IG9wZW4gPSBhbnNpU3R5bGVzLmJnQ29sb3JbbGV2ZWxNYXBwaW5nW2xldmVsXV1bbW9kZWxdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdGNvbnN0IGNvZGVzID0ge1xuXHRcdFx0XHRcdG9wZW4sXG5cdFx0XHRcdFx0Y2xvc2U6IGFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZSxcblx0XHRcdFx0XHRjbG9zZVJlOiBhbnNpU3R5bGVzLmJnQ29sb3IuY2xvc2VSZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXR1cm4gYnVpbGQuY2FsbCh0aGlzLCB0aGlzLl9zdHlsZXMgPyB0aGlzLl9zdHlsZXMuY29uY2F0KGNvZGVzKSA6IFtjb2Rlc10sIHRoaXMuX2VtcHR5LCBtb2RlbCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgcHJvdG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcygoKSA9PiB7fSwgc3R5bGVzKTtcblxuZnVuY3Rpb24gYnVpbGQoX3N0eWxlcywgX2VtcHR5LCBrZXkpIHtcblx0Y29uc3QgYnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gYXBwbHlTdHlsZS5hcHBseShidWlsZGVyLCBhcmd1bWVudHMpO1xuXHR9O1xuXG5cdGJ1aWxkZXIuX3N0eWxlcyA9IF9zdHlsZXM7XG5cdGJ1aWxkZXIuX2VtcHR5ID0gX2VtcHR5O1xuXG5cdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShidWlsZGVyLCAnbGV2ZWwnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5sZXZlbDtcblx0XHR9LFxuXHRcdHNldChsZXZlbCkge1xuXHRcdFx0c2VsZi5sZXZlbCA9IGxldmVsO1xuXHRcdH1cblx0fSk7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGJ1aWxkZXIsICdlbmFibGVkJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuZW5hYmxlZDtcblx0XHR9LFxuXHRcdHNldChlbmFibGVkKSB7XG5cdFx0XHRzZWxmLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gU2VlIGJlbG93IGZvciBmaXggcmVnYXJkaW5nIGludmlzaWJsZSBncmV5L2RpbSBjb21iaW5hdGlvbiBvbiBXaW5kb3dzXG5cdGJ1aWxkZXIuaGFzR3JleSA9IHRoaXMuaGFzR3JleSB8fCBrZXkgPT09ICdncmF5JyB8fCBrZXkgPT09ICdncmV5JztcblxuXHQvLyBgX19wcm90b19fYCBpcyB1c2VkIGJlY2F1c2Ugd2UgbXVzdCByZXR1cm4gYSBmdW5jdGlvbiwgYnV0IHRoZXJlIGlzXG5cdC8vIG5vIHdheSB0byBjcmVhdGUgYSBmdW5jdGlvbiB3aXRoIGEgZGlmZmVyZW50IHByb3RvdHlwZVxuXHRidWlsZGVyLl9fcHJvdG9fXyA9IHByb3RvOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cblx0cmV0dXJuIGJ1aWxkZXI7XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoKSB7XG5cdC8vIFN1cHBvcnQgdmFyYWdzLCBidXQgc2ltcGx5IGNhc3QgdG8gc3RyaW5nIGluIGNhc2UgdGhlcmUncyBvbmx5IG9uZSBhcmdcblx0Y29uc3QgYXJncyA9IGFyZ3VtZW50cztcblx0Y29uc3QgYXJnc0xlbiA9IGFyZ3MubGVuZ3RoO1xuXHRsZXQgc3RyID0gU3RyaW5nKGFyZ3VtZW50c1swXSk7XG5cblx0aWYgKGFyZ3NMZW4gPT09IDApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoYXJnc0xlbiA+IDEpIHtcblx0XHQvLyBEb24ndCBzbGljZSBgYXJndW1lbnRzYCwgaXQgcHJldmVudHMgVjggb3B0aW1pemF0aW9uc1xuXHRcdGZvciAobGV0IGEgPSAxOyBhIDwgYXJnc0xlbjsgYSsrKSB7XG5cdFx0XHRzdHIgKz0gJyAnICsgYXJnc1thXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIXRoaXMuZW5hYmxlZCB8fCB0aGlzLmxldmVsIDw9IDAgfHwgIXN0cikge1xuXHRcdHJldHVybiB0aGlzLl9lbXB0eSA/ICcnIDogc3RyO1xuXHR9XG5cblx0Ly8gVHVybnMgb3V0IHRoYXQgb24gV2luZG93cyBkaW1tZWQgZ3JheSB0ZXh0IGJlY29tZXMgaW52aXNpYmxlIGluIGNtZC5leGUsXG5cdC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvY2hhbGsvaXNzdWVzLzU4XG5cdC8vIElmIHdlJ3JlIG9uIFdpbmRvd3MgYW5kIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGdyYXkgY29sb3IsIHRlbXBvcmFyaWx5IG1ha2UgJ2RpbScgYSBub29wLlxuXHRjb25zdCBvcmlnaW5hbERpbSA9IGFuc2lTdHlsZXMuZGltLm9wZW47XG5cdGlmIChpc1NpbXBsZVdpbmRvd3NUZXJtICYmIHRoaXMuaGFzR3JleSkge1xuXHRcdGFuc2lTdHlsZXMuZGltLm9wZW4gPSAnJztcblx0fVxuXG5cdGZvciAoY29uc3QgY29kZSBvZiB0aGlzLl9zdHlsZXMuc2xpY2UoKS5yZXZlcnNlKCkpIHtcblx0XHQvLyBSZXBsYWNlIGFueSBpbnN0YW5jZXMgYWxyZWFkeSBwcmVzZW50IHdpdGggYSByZS1vcGVuaW5nIGNvZGVcblx0XHQvLyBvdGhlcndpc2Ugb25seSB0aGUgcGFydCBvZiB0aGUgc3RyaW5nIHVudGlsIHNhaWQgY2xvc2luZyBjb2RlXG5cdFx0Ly8gd2lsbCBiZSBjb2xvcmVkLCBhbmQgdGhlIHJlc3Qgd2lsbCBzaW1wbHkgYmUgJ3BsYWluJy5cblx0XHRzdHIgPSBjb2RlLm9wZW4gKyBzdHIucmVwbGFjZShjb2RlLmNsb3NlUmUsIGNvZGUub3BlbikgKyBjb2RlLmNsb3NlO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIHN0eWxpbmcgYmVmb3JlIGEgbGluZWJyZWFrIGFuZCByZW9wZW5cblx0XHQvLyBhZnRlciBuZXh0IGxpbmUgdG8gZml4IGEgYmxlZWQgaXNzdWUgb24gbWFjT1Ncblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2hhbGsvY2hhbGsvcHVsbC85MlxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHI/XFxuL2csIGAke2NvZGUuY2xvc2V9JCYke2NvZGUub3Blbn1gKTtcblx0fVxuXG5cdC8vIFJlc2V0IHRoZSBvcmlnaW5hbCBgZGltYCBpZiB3ZSBjaGFuZ2VkIGl0IHRvIHdvcmsgYXJvdW5kIHRoZSBXaW5kb3dzIGRpbW1lZCBncmF5IGlzc3VlXG5cdGFuc2lTdHlsZXMuZGltLm9wZW4gPSBvcmlnaW5hbERpbTtcblxuXHRyZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiBjaGFsa1RhZyhjaGFsaywgc3RyaW5ncykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoc3RyaW5ncykpIHtcblx0XHQvLyBJZiBjaGFsaygpIHdhcyBjYWxsZWQgYnkgaXRzZWxmIG9yIHdpdGggYSBzdHJpbmcsXG5cdFx0Ly8gcmV0dXJuIHRoZSBzdHJpbmcgaXRzZWxmIGFzIGEgc3RyaW5nLlxuXHRcdHJldHVybiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuam9pbignICcpO1xuXHR9XG5cblx0Y29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcblx0Y29uc3QgcGFydHMgPSBbc3RyaW5ncy5yYXdbMF1dO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgc3RyaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdHBhcnRzLnB1c2goU3RyaW5nKGFyZ3NbaSAtIDFdKS5yZXBsYWNlKC9be31cXFxcXS9nLCAnXFxcXCQmJykpO1xuXHRcdHBhcnRzLnB1c2goU3RyaW5nKHN0cmluZ3MucmF3W2ldKSk7XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGUoY2hhbGssIHBhcnRzLmpvaW4oJycpKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2hhbGsucHJvdG90eXBlLCBzdHlsZXMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoYWxrKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxubW9kdWxlLmV4cG9ydHMuc3VwcG9ydHNDb2xvciA9IHN0ZG91dENvbG9yO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzOyAvLyBGb3IgVHlwZVNjcmlwdFxuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgVEVNUExBVEVfUkVHRVggPSAvKD86XFxcXCh1W2EtZlxcZF17NH18eFthLWZcXGRdezJ9fC4pKXwoPzpcXHsofik/KFxcdysoPzpcXChbXildKlxcKSk/KD86XFwuXFx3Kyg/OlxcKFteKV0qXFwpKT8pKikoPzpbIFxcdF18KD89XFxyP1xcbikpKXwoXFx9KXwoKD86LnxbXFxyXFxuXFxmXSkrPykvZ2k7XG5jb25zdCBTVFlMRV9SRUdFWCA9IC8oPzpefFxcLikoXFx3KykoPzpcXCgoW14pXSopXFwpKT8vZztcbmNvbnN0IFNUUklOR19SRUdFWCA9IC9eKFsnXCJdKSgoPzpcXFxcLnwoPyFcXDEpW15cXFxcXSkqKVxcMSQvO1xuY29uc3QgRVNDQVBFX1JFR0VYID0gL1xcXFwodVthLWZcXGRdezR9fHhbYS1mXFxkXXsyfXwuKXwoW15cXFxcXSkvZ2k7XG5cbmNvbnN0IEVTQ0FQRVMgPSBuZXcgTWFwKFtcblx0WyduJywgJ1xcbiddLFxuXHRbJ3InLCAnXFxyJ10sXG5cdFsndCcsICdcXHQnXSxcblx0WydiJywgJ1xcYiddLFxuXHRbJ2YnLCAnXFxmJ10sXG5cdFsndicsICdcXHYnXSxcblx0WycwJywgJ1xcMCddLFxuXHRbJ1xcXFwnLCAnXFxcXCddLFxuXHRbJ2UnLCAnXFx1MDAxQiddLFxuXHRbJ2EnLCAnXFx1MDAwNyddXG5dKTtcblxuZnVuY3Rpb24gdW5lc2NhcGUoYykge1xuXHRpZiAoKGNbMF0gPT09ICd1JyAmJiBjLmxlbmd0aCA9PT0gNSkgfHwgKGNbMF0gPT09ICd4JyAmJiBjLmxlbmd0aCA9PT0gMykpIHtcblx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjLnNsaWNlKDEpLCAxNikpO1xuXHR9XG5cblx0cmV0dXJuIEVTQ0FQRVMuZ2V0KGMpIHx8IGM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKG5hbWUsIGFyZ3MpIHtcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRjb25zdCBjaHVua3MgPSBhcmdzLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqL2cpO1xuXHRsZXQgbWF0Y2hlcztcblxuXHRmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuXHRcdGlmICghaXNOYU4oY2h1bmspKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goTnVtYmVyKGNodW5rKSk7XG5cdFx0fSBlbHNlIGlmICgobWF0Y2hlcyA9IGNodW5rLm1hdGNoKFNUUklOR19SRUdFWCkpKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2gobWF0Y2hlc1syXS5yZXBsYWNlKEVTQ0FQRV9SRUdFWCwgKG0sIGVzY2FwZSwgY2hyKSA9PiBlc2NhcGUgPyB1bmVzY2FwZShlc2NhcGUpIDogY2hyKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBDaGFsayB0ZW1wbGF0ZSBzdHlsZSBhcmd1bWVudDogJHtjaHVua30gKGluIHN0eWxlICcke25hbWV9JylgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZShzdHlsZSkge1xuXHRTVFlMRV9SRUdFWC5sYXN0SW5kZXggPSAwO1xuXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0bGV0IG1hdGNoZXM7XG5cblx0d2hpbGUgKChtYXRjaGVzID0gU1RZTEVfUkVHRVguZXhlYyhzdHlsZSkpICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgbmFtZSA9IG1hdGNoZXNbMV07XG5cblx0XHRpZiAobWF0Y2hlc1syXSkge1xuXHRcdFx0Y29uc3QgYXJncyA9IHBhcnNlQXJndW1lbnRzKG5hbWUsIG1hdGNoZXNbMl0pO1xuXHRcdFx0cmVzdWx0cy5wdXNoKFtuYW1lXS5jb25jYXQoYXJncykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKSB7XG5cdGNvbnN0IGVuYWJsZWQgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGxheWVyIG9mIHN0eWxlcykge1xuXHRcdGZvciAoY29uc3Qgc3R5bGUgb2YgbGF5ZXIuc3R5bGVzKSB7XG5cdFx0XHRlbmFibGVkW3N0eWxlWzBdXSA9IGxheWVyLmludmVyc2UgPyBudWxsIDogc3R5bGUuc2xpY2UoMSk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGN1cnJlbnQgPSBjaGFsaztcblx0Zm9yIChjb25zdCBzdHlsZU5hbWUgb2YgT2JqZWN0LmtleXMoZW5hYmxlZCkpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShlbmFibGVkW3N0eWxlTmFtZV0pKSB7XG5cdFx0XHRpZiAoIShzdHlsZU5hbWUgaW4gY3VycmVudCkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIENoYWxrIHN0eWxlOiAke3N0eWxlTmFtZX1gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGVuYWJsZWRbc3R5bGVOYW1lXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50W3N0eWxlTmFtZV0uYXBwbHkoY3VycmVudCwgZW5hYmxlZFtzdHlsZU5hbWVdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50W3N0eWxlTmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gKGNoYWxrLCB0bXApID0+IHtcblx0Y29uc3Qgc3R5bGVzID0gW107XG5cdGNvbnN0IGNodW5rcyA9IFtdO1xuXHRsZXQgY2h1bmsgPSBbXTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuXHR0bXAucmVwbGFjZShURU1QTEFURV9SRUdFWCwgKG0sIGVzY2FwZUNoYXIsIGludmVyc2UsIHN0eWxlLCBjbG9zZSwgY2hyKSA9PiB7XG5cdFx0aWYgKGVzY2FwZUNoYXIpIHtcblx0XHRcdGNodW5rLnB1c2godW5lc2NhcGUoZXNjYXBlQ2hhcikpO1xuXHRcdH0gZWxzZSBpZiAoc3R5bGUpIHtcblx0XHRcdGNvbnN0IHN0ciA9IGNodW5rLmpvaW4oJycpO1xuXHRcdFx0Y2h1bmsgPSBbXTtcblx0XHRcdGNodW5rcy5wdXNoKHN0eWxlcy5sZW5ndGggPT09IDAgPyBzdHIgOiBidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpKHN0cikpO1xuXHRcdFx0c3R5bGVzLnB1c2goe2ludmVyc2UsIHN0eWxlczogcGFyc2VTdHlsZShzdHlsZSl9KTtcblx0XHR9IGVsc2UgaWYgKGNsb3NlKSB7XG5cdFx0XHRpZiAoc3R5bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGV4dHJhbmVvdXMgfSBpbiBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNodW5rcy5wdXNoKGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykoY2h1bmsuam9pbignJykpKTtcblx0XHRcdGNodW5rID0gW107XG5cdFx0XHRzdHlsZXMucG9wKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNodW5rLnB1c2goY2hyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNodW5rcy5wdXNoKGNodW5rLmpvaW4oJycpKTtcblxuXHRpZiAoc3R5bGVzLmxlbmd0aCA+IDApIHtcblx0XHRjb25zdCBlcnJNc2cgPSBgQ2hhbGsgdGVtcGxhdGUgbGl0ZXJhbCBpcyBtaXNzaW5nICR7c3R5bGVzLmxlbmd0aH0gY2xvc2luZyBicmFja2V0JHtzdHlsZXMubGVuZ3RoID09PSAxID8gJycgOiAncyd9IChcXGB9XFxgKWA7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG5cdH1cblxuXHRyZXR1cm4gY2h1bmtzLmpvaW4oJycpO1xufTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2KSA9PiB7XG5cdGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblx0Y29uc3QgcHJlZml4ID0gZmxhZy5zdGFydHNXaXRoKCctJykgPyAnJyA6IChmbGFnLmxlbmd0aCA9PT0gMSA/ICctJyA6ICctLScpO1xuXHRjb25zdCBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnY7XG5cbmxldCBmb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSkge1xuXHRmb3JjZUNvbG9yID0gZmFsc2U7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHxcblx0aGFzRmxhZygnY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9dHJ1ZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG5cdGZvcmNlQ29sb3IgPSB0cnVlO1xufVxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG5cdGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwIHx8IHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApICE9PSAwO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuXHRpZiAobGV2ZWwgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxldmVsLFxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxuXHRcdGhhczI1NjogbGV2ZWwgPj0gMixcblx0XHRoYXMxNm06IGxldmVsID49IDNcblx0fTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihzdHJlYW0pIHtcblx0aWYgKGZvcmNlQ29sb3IgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1mdWxsJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoc3RyZWFtICYmICFzdHJlYW0uaXNUVFkgJiYgZm9yY2VDb2xvciAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgbWluID0gZm9yY2VDb2xvciA/IDEgOiAwO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0Ly8gTm9kZS5qcyA3LjUuMCBpcyB0aGUgZmlyc3QgdmVyc2lvbiBvZiBOb2RlLmpzIHRvIGluY2x1ZGUgYSBwYXRjaCB0b1xuXHRcdC8vIGxpYnV2IHRoYXQgZW5hYmxlcyAyNTYgY29sb3Igb3V0cHV0IG9uIFdpbmRvd3MuIEFueXRoaW5nIGVhcmxpZXIgYW5kIGl0XG5cdFx0Ly8gd29uJ3Qgd29yay4gSG93ZXZlciwgaGVyZSB3ZSB0YXJnZXQgTm9kZS5qcyA4IGF0IG1pbmltdW0gYXMgaXQgaXMgYW4gTFRTXG5cdFx0Ly8gcmVsZWFzZSwgYW5kIE5vZGUuanMgNyBpcyBub3QuIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3Ncblx0XHQvLyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy4gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZVxuXHRcdC8vIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cblx0XHRjb25zdCBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcblx0XHRpZiAoXG5cdFx0XHROdW1iZXIocHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJylbMF0pID49IDggJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4NlxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NJJyBpbiBlbnYpIHtcblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuXHRcdHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0Y2FzZSAnQXBwbGVfVGVybWluYWwnOlxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH1cblxuXHRpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSk7XG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG5cdHN0ZG91dDogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3Rkb3V0KSxcblx0c3RkZXJyOiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRlcnIpXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXNjYXBlLXN0cmluZy1yZWdleHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzb2x2ZS1hY2NlcHQtbGFuZ3VhZ2VcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NdWxIZWFkID0gdm9pZCAwO1xyXG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xyXG5jb25zdCBoZWFkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5leHQvaGVhZFwiKSk7XHJcbmNvbnN0IHVzZV9hbHRlcm5hdGVfbGlua3NfMSA9IHJlcXVpcmUoXCIuLi9ob29rcy91c2UtYWx0ZXJuYXRlLWxpbmtzXCIpO1xyXG5jb25zdCB1c2VfY2Fub25pY2FsX2xpbmtfMSA9IHJlcXVpcmUoXCIuLi9ob29rcy91c2UtY2Fub25pY2FsLWxpbmtcIik7XHJcbi8qKlxyXG4gKiBNdWxIZWFkIGlzIGEgd3JhcHBlciBhcm91bmQgTmV4dC5qcycgYEhlYWRgIHRoYXQgcHJvdmlkZXMgYWx0ZXJuYXRlIGxpbmtzIHdpdGggbG9jYWxpemVkIFVSTHMgYW5kIGEgY2Fub25pY2FsIGxpbmsuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBOZXh0LmpzIGBIZWFkYCBjb21wb25lbnQsIGluY2x1ZGluZyBhbHRlcm5hdGl2ZSBsaW5rcyBmb3IgU0VPLlxyXG4gKi9cclxuZnVuY3Rpb24gTXVsSGVhZCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIC8qKlxyXG4gICAgICogTmV4dC5qcycgYDxIZWFkPmAgZG9lcyBub3QgYWxsb3cgY29tcG9uZW50cywgc28gd2UgYXJlIHVzaW5nIGhvb2tzLiBEZXRhaWxzIGhlcmU6XHJcbiAgICAgKlxyXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvaXNzdWVzLzE3NzIxIChjbG9zZWQgaXNzdWUpXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yZWZlcmVuY2UvbmV4dC9oZWFkIChOZXh0LmpzIGRvY3VtZW50YXRpb24pXHJcbiAgICAgKlxyXG4gICAgICogfCB0aXRsZSwgbWV0YSBvciBhbnkgb3RoZXIgZWxlbWVudHMgKGUuZy4gc2NyaXB0KSBuZWVkIHRvIGJlIGNvbnRhaW5lZCBhcyBkaXJlY3QgY2hpbGRyZW4gb2YgdGhlIEhlYWRcclxuICAgICAqIHwgZWxlbWVudCwgb3Igd3JhcHBlZCBpbnRvIG1heGltdW0gb25lIGxldmVsIG9mIDxSZWFjdC5GcmFnbWVudD4gb3IgYXJyYXlz4oCUb3RoZXJ3aXNlIHRoZSB0YWdzIHdvbid0XHJcbiAgICAgKiB8IGJlIGNvcnJlY3RseSBwaWNrZWQgdXAgb24gY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGFsdGVybmF0ZUxpbmtzID0gKDAsIHVzZV9hbHRlcm5hdGVfbGlua3NfMS51c2VBbHRlcm5hdGVMaW5rcykoKTtcclxuICAgIGNvbnN0IGNhbm9uaWNhbExpbmsgPSAoMCwgdXNlX2Nhbm9uaWNhbF9saW5rXzEudXNlQ2Fub25pY2FsTGluaykoKTtcclxuICAgIHJldHVybiAoKDAsIGpzeF9ydW50aW1lXzEuanN4cykoaGVhZF8xLmRlZmF1bHQsIHsgY2hpbGRyZW46IFsoMCwganN4X3J1bnRpbWVfMS5qc3gpKFwibGlua1wiLCB7IHJlbDogXCJjYW5vbmljYWxcIiwgaHJlZjogY2Fub25pY2FsTGluay5ocmVmIH0sIGNhbm9uaWNhbExpbmsua2V5KSwgYWx0ZXJuYXRlTGlua3MubWFwKCh7IGhyZWYsIGhyZWZMYW5nLCBrZXkgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBqc3hfcnVudGltZV8xLmpzeCkoXCJsaW5rXCIsIHsgcmVsOiBcImFsdGVybmF0ZVwiLCBocmVmOiBocmVmLCBocmVmTGFuZzogaHJlZkxhbmcgfSwga2V5KTtcclxuICAgICAgICAgICAgfSksIGNoaWxkcmVuXSB9LCB2b2lkIDApKTtcclxufVxyXG5leHBvcnRzLk11bEhlYWQgPSBNdWxIZWFkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldExvY2FsaXplZFVybFBhdGggPSB2b2lkIDA7XHJcbmNvbnN0IG5vcm1hbGl6ZV91cmxfcGF0aF8xID0gcmVxdWlyZShcIi4vbm9ybWFsaXplLXVybC1wYXRoXCIpO1xyXG4vKipcclxuICogR2V0IHRoZSBsb2NhbGl6ZWQgVVJMIHBhdGggKHdpdGhvdXQgdGhlIGxvY2FsZSBwcmVmaXgpIGZyb20gYSBzdGFuZGFyZCBub24tbG9jYWxpemVkIE5leHQuanMgVVJMIHBhdGguXHJcbiAqXHJcbiAqIFVzaW5nIHRoZSBgUmV3cml0ZWAgb2JqZWN0cywgdGhlIGBkZXN0aW5hdGlvbmAgaXMgdGhlIHN0YW5kYXJkIE5leHQuanMgXCJsb2NhbGl6ZWRcIiBVUkwgKGUuZy4gYC9mci1jYS9jb250YWN0LXVzYCkgYW5kXHJcbiAqIHRoZSBgc291cmNlYCBpcyB0aGUgcmVhbCBsb2NhbGl6ZWQgVVJMIChlLmcuIGAvZnItY2Evbm91cy1qb2luZHJlYCkuXHJcbiAqXHJcbiAqIEBwYXJhbSByZXdyaXRlcyAtIEFuIGFycmF5IG9mIE5leHQuanMgcmV3cml0ZSBvYmplY3RzLlxyXG4gKiBAcGFyYW0gbG9jYWxlIC0gVGhlIGxvY2FsZSBvZiB0aGUgbG9jYWxpemVkIFVSTC5cclxuICogQHBhcmFtIHVybFBhdGggLSBBIHN0YW5kYXJkIG5vbi1sb2NhbGl6ZWQgTmV4dC5qcyBVUkwgcGF0aCB3aXRob3V0IHRoZSBsb2NhbGUgcHJlZml4IChlLmcuIGAvY29udGFjdC11c2ApLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxpemVkIFVSTC5cclxuICovXHJcbmZ1bmN0aW9uIGdldExvY2FsaXplZFVybFBhdGgocmV3cml0ZXMsIGxvY2FsZSwgdXJsUGF0aCkge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFVybFBhdGggPSAoMCwgbm9ybWFsaXplX3VybF9wYXRoXzEubm9ybWFsaXplVXJsUGF0aCkodXJsUGF0aCk7XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvblVybFBhdGggPSBgLyR7bG9jYWxlfSR7bm9ybWFsaXplZFVybFBhdGh9YDtcclxuICAgIGNvbnN0IHJld3JpdGUgPSByZXdyaXRlcy5maW5kKChyZXdyaXRlKSA9PiByZXdyaXRlLmxvY2FsZSA9PT0gZmFsc2UgJiYgcmV3cml0ZS5kZXN0aW5hdGlvbiA9PT0gZGVzdGluYXRpb25VcmxQYXRoKTtcclxuICAgIHJldHVybiByZXdyaXRlID8gcmV3cml0ZS5zb3VyY2UgOiBkZXN0aW5hdGlvblVybFBhdGg7IC8vIEZhbGxiYWNrIHdpdGggdGhlIG9yaWdpbmFsIFVSTCBwYXRoIHdoZW4gbm90IGZvdW5kLlxyXG59XHJcbmV4cG9ydHMuZ2V0TG9jYWxpemVkVXJsUGF0aCA9IGdldExvY2FsaXplZFVybFBhdGg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0T3JpZ2luID0gdm9pZCAwO1xyXG4vKipcclxuICogR2V0IHRoZSBjdXJyZW50IGVudmlyb25tZW50J3MgVVJMIG9yaWdpbiAocHJvdG9jb2wgKyBkb21haW4pLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCAobG93ZXJjYXNlLCB3aXRob3V0IGEgdHJhaWxpbmcgc2xhc2gpIFVSTCBvcmlnaW4gdXNlZCB0byBnZW5lcmF0ZSBmdWxseS1xdWFsaWZpZWQgVVJMcy5cclxuICovXHJcbmZ1bmN0aW9uIGdldE9yaWdpbigpIHtcclxuICAgIGNvbnN0IG9yaWdpbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SSUdJTjtcclxuICAgIGlmICghb3JpZ2luKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIE5FWFRfUFVCTElDX09SSUdJTiBpbiB5b3VyIGN1cnJlbnQgZW52aXJvbm1lbnQgdmFyaWFibGUgd2l0aCBhIGZ1bGx5LXF1YWxpZmllZCBVUkwgKHByb3RvY29sICsgZG9tYWluKScpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBPbmx5IHZhbGlkIFVSTHMgY2FuIGNyZWF0ZSBhIFVSTCBvYmplY3Qgd2l0aG91dCB0aHJvd2luZyBlcnJvcnMuXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luVXJsID0gbmV3IFVSTChvcmlnaW4pO1xyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBjb25maWd1cmVkIFVSTCBoYXMgYSB2YWxpZCBwcm90b2NvbC5cclxuICAgICAgICBpZiAoIVsnaHR0cCcsICdodHRwcyddLmluY2x1ZGVzKG9yaWdpblVybC5wcm90b2NvbC5zbGljZSgwLCAtMSkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgY29uZmlndXJlZCBVUkwgZG9lcyBub3QgaW5jbHVkZSBhIHBhdGggKE5leHQuanMnIGBiYXNlUGF0aGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCkuXHJcbiAgICAgICAgaWYgKG9yaWdpblVybC5wYXRobmFtZSAhPT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgTkVYVF9QVUJMSUNfT1JJR0lOIGVudmlyb25tZW50IHZhcmlhYmxlIGlzIGEgZnVsbHktcXVhbGlmaWVkIFVSTCAoZS5nLiBodHRwczovL2V4YW1wbGUuY29tKSB3aXRob3V0IGFueSBwYXRoJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKG9yaWdpbi5lbmRzV2l0aCgnLycpID8gb3JpZ2luLnNsaWNlKDAsIDEpIDogb3JpZ2luKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbmV4cG9ydHMuZ2V0T3JpZ2luID0gZ2V0T3JpZ2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldFJld3JpdGVzID0gdm9pZCAwO1xyXG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgZnNfMSA9IHJlcXVpcmUoXCJmc1wiKTtcclxuLyoqIExvY2FsIHJld3JpdGUgY2FjaGUgdG8gYXZvaWQgbm9uLXJlcXVpcmVkIGZpbGUgc3lzdGVtIG9wZXJhdGlvbnMuICovXHJcbmxldCByZXdyaXRlc0NhY2hlO1xyXG4vKipcclxuICogR2V0IHRoZSBOZXh0LmpzIGBSZXdyaXRlYCBvYmplY3RzIGRpcmVjdGx5IGZyb20gdGhlIGJ1aWxkIG1hbmlmZXN0LlxyXG4gKlxyXG4gKiBPbiB0aGUgY2xpZW50IHNpZGUgaXQncyBwb3NzaWJsZSB0byB1c2UgYGdldENsaWVudEJ1aWxkTWFuaWZlc3RgIGJ1dCBmb3Igc2VydmVyIHNpZGUgcmVuZGVyaW5nLCB0aGlzIGZ1bmN0aW9uIGlzIHJlcXVpcmVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBgUmV3cml0ZWAgb2JqZWN0cy5cclxuICovXHJcbmZ1bmN0aW9uIGdldFJld3JpdGVzKCkge1xyXG4gICAgaWYgKHJld3JpdGVzQ2FjaGUpXHJcbiAgICAgICAgcmV0dXJuIHJld3JpdGVzQ2FjaGU7XHJcbiAgICAvLyBUcnkgdG8gZ2V0IHRoZSBjb250ZW50IG9mIHRoZSByb3V0ZXMtbWFuaWZlc3QgKC5uZXh0L3JvdXRlcy1tYW5pZmVzdC5qc29uKSBmaXJzdCAtIHRoaXMgaXMgb25seSBhdmFpbGFibGUgb24gYnVpbGRzLlxyXG4gICAgY29uc3Qgcm91dGVzTWFuaWZlc3RQYXRoID0gKDAsIHBhdGhfMS5yZXNvbHZlKSgnLm5leHQnLCAncm91dGVzLW1hbmlmZXN0Lmpzb24nKTtcclxuICAgIGlmICgoMCwgZnNfMS5leGlzdHNTeW5jKShyb3V0ZXNNYW5pZmVzdFBhdGgpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVzTWFuaWZlc3QgPSBKU09OLnBhcnNlKCgwLCBmc18xLnJlYWRGaWxlU3luYykocm91dGVzTWFuaWZlc3RQYXRoLCAndXRmOCcpKTtcclxuICAgICAgICBjb25zdCByZXdyaXRlcyA9IHJvdXRlc01hbmlmZXN0LnJld3JpdGVzLm1hcCgocmV3cml0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiByZXdyaXRlLnNvdXJjZSxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiByZXdyaXRlLmRlc3RpbmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiByZXdyaXRlLmxvY2FsZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBTYXZlIHRvIHRoZSBjYWNoZS5cclxuICAgICAgICByZXdyaXRlc0NhY2hlID0gcmV3cml0ZXM7XHJcbiAgICAgICAgcmV0dXJuIHJld3JpdGVzQ2FjaGU7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgc2VydmVyIHJvdXRlcy1tYW5pZmVzdCBpcyBub3QgYXZhaWxhYmxlLCB0aGVuIGdldCBjYW4gZ2V0IHRoZSByZXdyaXRlcyBmcm9tIHRoZSBjbGllbnQgYnVpbGQgbWFuaWZlc3QuXHJcbiAgICBjb25zdCBidWlsZE1hbmlmZXN0UGF0aCA9ICgwLCBwYXRoXzEucmVzb2x2ZSkoJy5uZXh0JywgJ2J1aWxkLW1hbmlmZXN0Lmpzb24nKTtcclxuICAgIGNvbnN0IGJ1aWxkTWFuaWZlc3RDb250ZW50ID0gKDAsIGZzXzEucmVhZEZpbGVTeW5jKShidWlsZE1hbmlmZXN0UGF0aCwgJ3V0ZjgnKTtcclxuICAgIC8vIEdldCB0aGUgY29udGVudCBvZiB0aGUgY2xpZW50IGJ1aWxkLW1hbmlmZXN0IChlLmcuIC5uZXh0L3N0YXRpYy9kZXZlbG9wbWVudC9fYnVpbGRNYW5pZmVzdC5qc29uKS5cclxuICAgIGNvbnN0IGNsaWVudEJ1aWxkTWFuaWZlc3RQYXRoID0gSlNPTi5wYXJzZShidWlsZE1hbmlmZXN0Q29udGVudCkubG93UHJpb3JpdHlGaWxlcy5maW5kKChmaWxlUGF0aHMpID0+IGZpbGVQYXRocy5pbmNsdWRlcygnX2J1aWxkTWFuaWZlc3QuanMnKSk7XHJcbiAgICBjb25zdCBjbGllbnRCdWlsZE1hbmlmZXN0Q29udGVudCA9ICgwLCBmc18xLnJlYWRGaWxlU3luYykoKDAsIHBhdGhfMS5yZXNvbHZlKSgnLm5leHQnLCBjbGllbnRCdWlsZE1hbmlmZXN0UGF0aCksICd1dGY4Jyk7XHJcbiAgICAvLyBUcmFuc2Zvcm0gdGhlIGNsaWVudCBidWlsZC1tYW5pZmVzdCBmaWxlIGNvbnRlbnQgYmFjayBpbnRvIGEgdXNhYmxlIG9iamVjdC5cclxuICAgIGNvbnN0IGNsaWVudEJ1aWxkTWFuaWZlc3QgPSB7fTtcclxuICAgIG5ldyBGdW5jdGlvbignc2VsZicsIGNsaWVudEJ1aWxkTWFuaWZlc3RDb250ZW50KShjbGllbnRCdWlsZE1hbmlmZXN0KTtcclxuICAgIC8vIFNhdmUgdG8gdGhlIGNhY2hlLlxyXG4gICAgcmV3cml0ZXNDYWNoZSA9IGNsaWVudEJ1aWxkTWFuaWZlc3QuX19CVUlMRF9NQU5JRkVTVC5fX3Jld3JpdGVzLmFmdGVyRmlsZXM7XHJcbiAgICByZXR1cm4gcmV3cml0ZXNDYWNoZTtcclxufVxyXG5leHBvcnRzLmdldFJld3JpdGVzID0gZ2V0UmV3cml0ZXM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubm9ybWFsaXplVXJsUGF0aCA9IHZvaWQgMDtcclxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIFVSTC5cclxuICpcclxuICogQSBub3JtYWxpemVkIFVSTCBzaG91bGQ6IGFsd2F5cyBzdGFydCB3aXRoIGEgc2xhc2gsIG5ldmVyIGVuZCB3aXRoIGEgc2xhc2ggYW5kIG5ldmVyIGNvbnRhaW4gZG91YmxlIHNsYXNoZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB1cmxQYXRoIC0gVGhlIFVSbCB0byBub3JtYWxpemUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIEEgbm9ybWFsaXplZCBVUkwuXHJcbiAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVVcmxQYXRoKHVybFBhdGgpIHtcclxuICAgIC8vIFJlbW92ZSBkb3VibGUgc2xhc2hlcyBqdXN0IGluIGNhc2UuXHJcbiAgICBsZXQgbm9ybWFsaXplZFVybFBhdGggPSB1cmxQYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBiYXNlIHBhdGggc3RhcnRzIHdpdGggYSBzbGFzaC5cclxuICAgIG5vcm1hbGl6ZWRVcmxQYXRoID0gbm9ybWFsaXplZFVybFBhdGguc3RhcnRzV2l0aCgnLycpXHJcbiAgICAgICAgPyBub3JtYWxpemVkVXJsUGF0aFxyXG4gICAgICAgIDogYC8ke25vcm1hbGl6ZWRVcmxQYXRofWA7XHJcbiAgICAvLyBNYWtlIHN1cmUgdGhlIGJhc2UgcGF0aCBkb2VzIG5vdCBlbmQgd2l0aCBhIHNsYXNoLlxyXG4gICAgbm9ybWFsaXplZFVybFBhdGggPSBub3JtYWxpemVkVXJsUGF0aC5lbmRzV2l0aCgnLycpXHJcbiAgICAgICAgPyBub3JtYWxpemVkVXJsUGF0aC5zbGljZSgwLCAtMSlcclxuICAgICAgICA6IG5vcm1hbGl6ZWRVcmxQYXRoO1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRVcmxQYXRoO1xyXG59XHJcbmV4cG9ydHMubm9ybWFsaXplVXJsUGF0aCA9IG5vcm1hbGl6ZVVybFBhdGg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudXNlQWx0ZXJuYXRlTGlua3MgPSB2b2lkIDA7XHJcbmNvbnN0IHJvdXRlcl8xID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpO1xyXG5jb25zdCBub3JtYWxpemVfdXJsX3BhdGhfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL25vcm1hbGl6ZS11cmwtcGF0aFwiKTtcclxuY29uc3QgZ2V0X29yaWdpbl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvZ2V0LW9yaWdpblwiKTtcclxuY29uc3QgZ2V0X2xvY2FsaXplZF91cmxfcGF0aF8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvZ2V0LWxvY2FsaXplZC11cmwtcGF0aFwiKTtcclxuY29uc3QgdXNlX3Jld3JpdGVzXzEgPSByZXF1aXJlKFwiLi91c2UtcmV3cml0ZXNcIik7XHJcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcclxuLyoqXHJcbiAqIEEgaG9vayB0byBnZXQgdGhlIGFsdGVybmF0ZSBsaW5rcyBvZiB5b3VyIGN1cnJlbnQgcGFnZS5cclxuICpcclxuICogQWx0ZXJuYXRpdmUgbGlua3MgcHJvdmlkZSBpbmZvcm1hdGlvbiB0byBzZWFyY2ggZW5naW5lcyB0aGF0IGEgZ2l2ZW4gcGFnZSBpcyBhdmFpbGFibGUgaW4gb3RoZXIgbGFuZ3VhZ2VzLiBVUkwgcXVlcmllcyB3aWxsXHJcbiAqIGJlIGFkZGVkIHRvIGFsdGVybmF0ZSBsaW5rcyByZWdhcmRsZXNzIGlmIHRoZXkgYXJlIHZhbGlkIG9yIG5vdCwgYnV0IHRoZXkgd2lsbCBiZSByZW1vdmVkIGZyb20gY2Fub25pY2FsIGxpbmtzIHRvIGF2b2lkXHJcbiAqIGNvbnRlbnQgZHVwbGljYXRpb24gaXNzdWVzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhbHRlcm5hdGUgbGlua3Mgb2JqZWN0cyBmb3IgdGhlIGN1cnJlbnQgcGFnZS5cclxuICovXHJcbmZ1bmN0aW9uIHVzZUFsdGVybmF0ZUxpbmtzKCkge1xyXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgYXNQYXRoLCBkZWZhdWx0TG9jYWxlLCBsb2NhbGVzLCByb3V0ZSB9ID0gKDAsIHJvdXRlcl8xLnVzZVJvdXRlcikoKTtcclxuICAgIGNvbnN0IHJld3JpdGVzID0gKDAsIHVzZV9yZXdyaXRlc18xLnVzZVJld3JpdGVzKSgpO1xyXG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIGdldF9vcmlnaW5fMS5nZXRPcmlnaW4pKCk7XHJcbiAgICBjb25zdCBbdXJsUGF0aCwgYXNQYXRoUXVlcnldID0gYXNQYXRoLnNwbGl0KCc/Jyk7XHJcbiAgICBjb25zdCB1cmxTZWFyY2hQYXJhbXNTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGFzUGF0aFF1ZXJ5KS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgdXJsUXVlcnkgPSB1cmxTZWFyY2hQYXJhbXNTdHJpbmcgPyBgPyR7dXJsU2VhcmNoUGFyYW1zU3RyaW5nfWAgOiAnJztcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRCYXNlUGF0aCA9ICgwLCBub3JtYWxpemVfdXJsX3BhdGhfMS5ub3JtYWxpemVVcmxQYXRoKShiYXNlUGF0aCk7XHJcbiAgICBjb25zdCBhbHRlcm5hdGVMaW5rcyA9ICgwLCBfXzEuZ2V0QWN0dWFsTG9jYWxlcykobG9jYWxlcywgZGVmYXVsdExvY2FsZSkubWFwKChsb2NhbGUpID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbGl6ZWRVcmxQYXRoID0gKDAsIGdldF9sb2NhbGl6ZWRfdXJsX3BhdGhfMS5nZXRMb2NhbGl6ZWRVcmxQYXRoKShyZXdyaXRlcywgbG9jYWxlLCB1cmxQYXRoKTtcclxuICAgICAgICBjb25zdCBocmVmID0gYCR7b3JpZ2lufSR7bm9ybWFsaXplZEJhc2VQYXRofSR7bG9jYWxpemVkVXJsUGF0aH0ke3VybFF1ZXJ5fWA7XHJcbiAgICAgICAgY29uc3QgaHJlZkxhbmcgPSAoMCwgX18xLm5vcm1hbGl6ZUxvY2FsZSkobG9jYWxlKTtcclxuICAgICAgICBjb25zdCBrZXkgPSBgYWx0ZXJuYXRlLWxpbmstJHtocmVmTGFuZ31gO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhyZWYsXHJcbiAgICAgICAgICAgIGhyZWZMYW5nLFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBgeC1kZWZhdWx0YCBpcyBtZWFudCB0byBiZSB1c2VkIGZvciBwYWdlcyB0aGF0IGhhdmUgXCJkeW5hbWljXCIgbG9jYWxlcy4gVGhlIG9ubHkgdmFsaWQgdXNlIGNhc2UgZm9yIG1vc3Qgd2Vic2l0ZXMgaXNcclxuICAgICAqIHRoZSBob21lIHBhZ2Ugd2hlcmUgdGhlIGxhbmd1YWdlIGRldGVjdGlvbiBjYW4gaGFwcGVuLiBBZnRlciB0aGlzIGluaXRpYWwgbG9jYWxlIHJlc29sdXRpb24sIGFsbCBvdGhlciBVUkxzIHNob3VsZCB1c2VcclxuICAgICAqIHByZWZpeGVzIGFuZCB0aGUgYHgtZGVmYXVsdGAgbGluayBzaG91bGQgbm90IGJlIHJlcXVpcmVkLlxyXG4gICAgICovXHJcbiAgICBpZiAocm91dGUgPT09ICcvJykge1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBgJHtvcmlnaW59JHtub3JtYWxpemVkQmFzZVBhdGh9JHt1cmxRdWVyeX1gO1xyXG4gICAgICAgIGNvbnN0IGhyZWZMYW5nID0gJ3gtZGVmYXVsdCc7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYGFsdGVybmF0ZS1saW5rLSR7aHJlZkxhbmd9YDtcclxuICAgICAgICBhbHRlcm5hdGVMaW5rcy5wdXNoKHtcclxuICAgICAgICAgICAgaHJlZixcclxuICAgICAgICAgICAgaHJlZkxhbmcsXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbHRlcm5hdGVMaW5rcztcclxufVxyXG5leHBvcnRzLnVzZUFsdGVybmF0ZUxpbmtzID0gdXNlQWx0ZXJuYXRlTGlua3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudXNlQ2Fub25pY2FsTGluayA9IHZvaWQgMDtcclxuY29uc3Qgcm91dGVyXzEgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7XHJcbmNvbnN0IG5vcm1hbGl6ZV91cmxfcGF0aF8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvbm9ybWFsaXplLXVybC1wYXRoXCIpO1xyXG5jb25zdCBnZXRfb3JpZ2luXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9nZXQtb3JpZ2luXCIpO1xyXG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbmNvbnN0IGdldF9sb2NhbGl6ZWRfdXJsX3BhdGhfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2dldC1sb2NhbGl6ZWQtdXJsLXBhdGhcIik7XHJcbmNvbnN0IHVzZV9yZXdyaXRlc18xID0gcmVxdWlyZShcIi4vdXNlLXJld3JpdGVzXCIpO1xyXG4vKipcclxuICogQSBob29rIHRvIGdldCB0aGUgY2Fub25pY2FsIGxpbmsgb2YgeW91ciBjdXJyZW50IHBhZ2UuXHJcbiAqXHJcbiAqIEEgY2Fub25pY2FsIGxpbmsgdGVsbCB0aGUgc2VhcmNoIGVuZ2luZXMgd2hpY2ggcGFnZSB0byBpbmRleCB0byBhdm9pZCBcInBhZ2UgY29sbGlzaW9uc1wiLiBUaGlzIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50XHJcbiAqIHdpdGggTmV4dC5qcyBhcyBVUkxzIGNhc2luZyBpcyBub3QgYWx3YXlzIHNlbnNpdGl2ZSB3aGljaCBjb3VsZCBjYXVzZSBwcm9ibGVtcyB3aGVuIGluZGV4aW5nLiBVUkwgcXVlcmllcyBhcmUgaWdub3JlIGJ5XHJcbiAqIGRlc2lnbiB0byBhdm9pZCBkdXBsaWNhdGUgY29udGVudCBwZW5hbHRpZXMgd2l0aCBzZWFyY2ggZW5naW5lcy5cclxuICpcclxuICogQHJldHVybnMgQSBjYW5vbmljYWwgbGluayBvYmplY3QgZm9yIHRoZSBjdXJyZW50IHBhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VDYW5vbmljYWxMaW5rKCkge1xyXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgcGF0aG5hbWUsIGRlZmF1bHRMb2NhbGUsIGxvY2FsZSwgbG9jYWxlcywgcm91dGUgfSA9ICgwLCByb3V0ZXJfMS51c2VSb3V0ZXIpKCk7XHJcbiAgICBjb25zdCByZXdyaXRlcyA9ICgwLCB1c2VfcmV3cml0ZXNfMS51c2VSZXdyaXRlcykoKTtcclxuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBnZXRfb3JpZ2luXzEuZ2V0T3JpZ2luKSgpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZEJhc2VQYXRoID0gKDAsIG5vcm1hbGl6ZV91cmxfcGF0aF8xLm5vcm1hbGl6ZVVybFBhdGgpKGJhc2VQYXRoKTtcclxuICAgIGNvbnN0IGFjdHVhbExvY2FsZSA9ICgwLCBfXzEuZ2V0QWN0dWFsTG9jYWxlKShsb2NhbGUsIGRlZmF1bHRMb2NhbGUsIGxvY2FsZXMpO1xyXG4gICAgY29uc3Qga2V5ID0gJ2Nhbm9uaWNhbC1saW5rJztcclxuICAgIGlmIChyb3V0ZSA9PT0gJy8nKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlUHJlZml4ID0gKDAsIG5vcm1hbGl6ZV91cmxfcGF0aF8xLm5vcm1hbGl6ZVVybFBhdGgpKGFjdHVhbExvY2FsZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBocmVmID0gYCR7b3JpZ2lufSR7bm9ybWFsaXplZEJhc2VQYXRofSR7bG9jYWxlUHJlZml4fWA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaHJlZixcclxuICAgICAgICAgICAga2V5LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBsb2NhbGl6ZWRVcmxQYXRoID0gKDAsIGdldF9sb2NhbGl6ZWRfdXJsX3BhdGhfMS5nZXRMb2NhbGl6ZWRVcmxQYXRoKShyZXdyaXRlcywgYWN0dWFsTG9jYWxlLCBwYXRobmFtZSk7XHJcbiAgICAgICAgY29uc3QgaHJlZiA9IGAke29yaWdpbn0ke25vcm1hbGl6ZWRCYXNlUGF0aH0ke2xvY2FsaXplZFVybFBhdGh9YDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBocmVmLFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnVzZUNhbm9uaWNhbExpbmsgPSB1c2VDYW5vbmljYWxMaW5rO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnVzZVJld3JpdGVzID0gdm9pZCAwO1xyXG5jb25zdCByb3V0ZV9sb2FkZXJfMSA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcclxuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuLyoqXHJcbiAqIEhvb2sgdG8gZ2V0IHRoZSBsb2NhbGl6ZWQgVVJMIGZyb20gYSBzdGFuZGFyZCBub24tbG9jYWxpemVkIE5leHQuanMgVVJMLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIC0gVGhlIGxvY2FsZSBvZiB0aGUgbG9jYWxpemVkIFVSTC5cclxuICogQHBhcmFtIHVybFBhdGggLSBUaGUgbm9uLWxvY2FsaXplZCBVUkwgcGF0aCAoZS5nLiBgL2NvbnRhY3QtdXNgKS5cclxuICpcclxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBVUkwuXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VSZXdyaXRlcygpIHtcclxuICAgIGNvbnN0IFtyZXdyaXRlcywgc2V0UmV3cml0ZXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcclxuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xyXG4gICAgICAgICgwLCByb3V0ZV9sb2FkZXJfMS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpXHJcbiAgICAgICAgICAgIC50aGVuKChjbGllbnRCdWlsZE1hbmlmZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5leHQuanMgbmVlZHMgdG8gYWRkIHR5cGVzIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9ibG9iL2QxMzBmNjNjNDE2YjIxYWRjNjdkYzNjNzU1YWQ2ZTFhNzA3ZTJjYzgvcGFja2FnZXMvbmV4dC9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luLnRzI0w0MVxyXG4gICAgICAgICAgICBzZXRSZXdyaXRlcyhjbGllbnRCdWlsZE1hbmlmZXN0Ll9fcmV3cml0ZXMuYWZ0ZXJGaWxlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHJld3JpdGVzO1xyXG59XHJcbmV4cG9ydHMudXNlUmV3cml0ZXMgPSB1c2VSZXdyaXRlcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0Q29va2llTG9jYWxlID0gZXhwb3J0cy5zZXRDb29raWVMb2NhbGUgPSBleHBvcnRzLmdldFByZWZlcnJlZExvY2FsZSA9IGV4cG9ydHMubm9ybWFsaXplTG9jYWxlID0gZXhwb3J0cy5pc0xvY2FsZSA9IGV4cG9ydHMuZ2V0QWN0dWFsRGVmYXVsdExvY2FsZSA9IGV4cG9ydHMuZ2V0QWN0dWFsTG9jYWxlcyA9IGV4cG9ydHMuZ2V0QWN0dWFsTG9jYWxlID0gZXhwb3J0cy5sb2cgPSB2b2lkIDA7XHJcbmNvbnN0IHJlc29sdmVfYWNjZXB0X2xhbmd1YWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlc29sdmUtYWNjZXB0LWxhbmd1YWdlXCIpKTtcclxuY29uc3Qgbm9va2llc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJub29raWVzXCIpKTtcclxuY29uc3QgbmV4dExvZyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL291dHB1dC9sb2dcIikpO1xyXG4vKipcclxuICogV3JhcHBlciBpbiBmcm9udCBvZiBOZXh0LmpzJyBsb2cgdG8gb25seSBzaG93IG1lc3NhZ2VzIGluIG5vbi1wcm9kdWN0aW9uIGVudmlyb25tZW50cy5cclxuICpcclxuICogVG8gYXZvaWQgZXhwb3Npbmcgc2Vuc2l0aXZlIGRhdGEgKGUuZy4gc2VydmVyIHBhdGhzKSB0byB0aGUgY2xpZW50cywgd2Ugb25seSBkaXNwbGF5IGxvZ3MgaW4gbm9uLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzLlxyXG4gKi9cclxuY2xhc3MgbG9nIHtcclxuICAgIC8qKlxyXG4gICAgICogTG9nIGEgd2FybmluZyBtZXNzYWdlIGluIHRoZSBjb25zb2xlKHMpIHRvIG5vbi1wcm9kdWN0aW9uIGVudmlyb25tZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSB3YXJuaW5nIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgd2FybihtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgbmV4dExvZy53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmxvZyA9IGxvZztcclxuLyoqXHJcbiAqIEdldCB0aGUgYWN0dWFsIGxvY2FsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhbGUgZnJvbSBOZXh0LmpzLlxyXG4gKlxyXG4gKiBUbyBnZXQgYSBkeW5hbWljIGxvY2FsZSByZXNvbHV0aW9uIG9uIGAvYCB3aXRob3V0IHJlZGlyZWN0aW9uLCB3ZSBuZWVkIHRvIGFkZCBhIFwibXVsdGlsaW5ndWFsXCIgbG9jYWxlIGFzIHRoZVxyXG4gKiBkZWZhdWx0IGxvY2FsZSBzbyB0aGF0IHdlIGNhbiBpZGVudGlmeSB3aGVuIHRoZSBob21lcGFnZSBpcyByZXF1ZXN0ZWQgd2l0aG91dCBhIGxvY2FsZS4gV2l0aCB0aGlzIHNldHVwIGl0XHJcbiAqIGFsc28gbWVhbnMgdGhhdCB3ZSBjYW4gbm8gbG9uZ2VyIGVhc2lseSBrbm93IHdoYXQgaXMgdGhlIGN1cnJlbnQgbG9jYWxlLiBUaGlzIGZ1bmN0aW9uIGlzIG1lYW50IHRvIHJldHVybiB0aGVcclxuICogYWN0dWFsIGN1cnJlbnQgb2YgbG9jYWxlIGJ5IHJlcGxhY2luZyB0aGUgXCJtdWx0aWxpbmd1YWxcIiBkZWZhdWx0IGxvY2FsZSBieSB0aGUgYWN0dWFsIGRlZmF1bHQgbG9jYWxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIC0gVGhlIGN1cnJlbnQgbG9jYWxlIGZyb20gTmV4dC5qcy5cclxuICogQHBhcmFtIGRlZmF1bHRMb2NhbGUgLSBUaGUgY29uZmlndXJlZCBpMThuIGRlZmF1bHQgbG9jYWxlIGZyb20gTmV4dC5qcy5cclxuICogQHBhcmFtIGxvY2FsZXMgLSBUaGUgY29uZmlndXJlZCBpMThuIGxvY2FsZXMgZnJvbSBOZXh0LmpzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgbGlzdCBvZiBhY3R1YWwgbG9jYWxlcy5cclxuICovXHJcbmZ1bmN0aW9uIGdldEFjdHVhbExvY2FsZShsb2NhbGUsIGRlZmF1bHRMb2NhbGUsIGxvY2FsZXMpIHtcclxuICAgIGNvbnN0IGFjdHVhbERlZmF1bHRMb2NhbGUgPSBnZXRBY3R1YWxEZWZhdWx0TG9jYWxlKGxvY2FsZXMsIGRlZmF1bHRMb2NhbGUpO1xyXG4gICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZSA/IGFjdHVhbERlZmF1bHRMb2NhbGUgOiBsb2NhbGU7XHJcbn1cclxuZXhwb3J0cy5nZXRBY3R1YWxMb2NhbGUgPSBnZXRBY3R1YWxMb2NhbGU7XHJcbi8qKlxyXG4gKiBHZXQgdGhlIGFjdHVhbCBsb2NhbGVzIGJhc2VkIG9uIHRoZSBOZXh0LmpzIGkxOG4gbG9jYWxlIGNvbmZpZ3VyYXRpb24uXHJcbiAqXHJcbiAqIFRvIGdldCBhIGR5bmFtaWMgbG9jYWxlIHJlc29sdXRpb24gb24gYC9gIHdpdGhvdXQgcmVkaXJlY3Rpb24sIHdlIG5lZWQgdG8gYWRkIGEgXCJtdWx0aWxpbmd1YWxcIiBsb2NhbGUgYXMgdGhlXHJcbiAqIGRlZmF1bHQgbG9jYWxlIHNvIHRoYXQgd2UgY2FuIGlkZW50aWZ5IHdoZW4gdGhlIGhvbWVwYWdlIGlzIHJlcXVlc3RlZCB3aXRob3V0IGEgbG9jYWxlLiBXaXRoIHRoaXMgc2V0dXAgaXRcclxuICogYWxzbyBtZWFucyB0aGF0IHdlIGNhbiBubyBsb25nZXIgdXNlIGBsb2NhbGVzYC4gVGhpcyBmdW5jdGlvbiBpcyBtZWFudCB0byByZXR1cm4gdGhlIGFjdHVhbCBsaXN0IG9mIGxvY2FsZVxyXG4gKiBieSByZW1vdmluZyB0aGUgXCJtdWx0aWxpbmd1YWxcIiBkZWZhdWx0IGxvY2FsZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZXMgLSBUaGUgY29uZmlndXJlZCBpMThuIGxvY2FsZXMgZnJvbSBOZXh0LmpzLlxyXG4gKiBAcGFyYW0gZGVmYXVsdExvY2FsZSAtIFRoZSBjb25maWd1cmVkIGkxOG4gZGVmYXVsdCBsb2NhbGUgZnJvbSBOZXh0LmpzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgbGlzdCBvZiBhY3R1YWwgbG9jYWxlcy5cclxuICovXHJcbmZ1bmN0aW9uIGdldEFjdHVhbExvY2FsZXMobG9jYWxlcywgZGVmYXVsdExvY2FsZSkge1xyXG4gICAgcmV0dXJuIGxvY2FsZXMuZmlsdGVyKChsb2NhbGUpID0+IGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSk7XHJcbn1cclxuZXhwb3J0cy5nZXRBY3R1YWxMb2NhbGVzID0gZ2V0QWN0dWFsTG9jYWxlcztcclxuLyoqXHJcbiAqIEdldCB0aGUgYWN0dWFsIGRlZmF1bHQgbG9jYWxlIGJhc2VkIG9uIHRoZSBOZXh0LmpzIGkxOG4gbG9jYWxlIGNvbmZpZ3VyYXRpb24uXHJcbiAqXHJcbiAqIFRvIGdldCBhIGR5bmFtaWMgbG9jYWxlIHJlc29sdXRpb24gb24gYC9gIHdpdGhvdXQgcmVkaXJlY3Rpb24sIHdlIG5lZWQgdG8gYWRkIGEgXCJtdWx0aWxpbmd1YWxcIiBsb2NhbGUgYXMgdGhlXHJcbiAqIGRlZmF1bHQgbG9jYWxlIHNvIHRoYXQgd2UgY2FuIGlkZW50aWZ5IHdoZW4gdGhlIGhvbWVwYWdlIGlzIHJlcXVlc3RlZCB3aXRob3V0IGEgbG9jYWxlLiBXaXRoIHRoaXMgc2V0dXAgaXRcclxuICogYWxzbyBtZWFucyB0aGF0IHdlIGNhbiBubyBsb25nZXIgdXNlIGBkZWZhdWx0TG9jYWxlYC4gVGhpcyBmdW5jdGlvbiBpcyBtZWFudCB0byByZXR1cm4gdGhlIGFjdHVhbCBkZWZhdWx0XHJcbiAqIGxvY2FsZSAoZXhjbHVkaW5nIHRoZSBcIm11bHRpbGluZ3VhbFwiIGRlZmF1bHQgbG9jYWxlKS4gQnkgY29udmVudGlvbiAoYW5kIGZvciBzaW1wbGljaXR5KSwgdGhlIGZpcnN0XHJcbiAqIGBhY3R1YWxMb2NhbGVzYCB3aWxsIGJlIHVzZWQgYXMgdGhlIGFjdHVhbCBkZWZhdWx0IGxvY2FsZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZXMgLSBUaGUgY29uZmlndXJlZCBpMThuIGxvY2FsZXMgZnJvbSBOZXh0LmpzLlxyXG4gKiBAcGFyYW0gZGVmYXVsdExvY2FsZSAtIFRoZSBjb25maWd1cmVkIGkxOG4gZGVmYXVsdCBsb2NhbGUgZnJvbSBOZXh0LmpzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgYWN0dWFsIGRlZmF1bHQgbG9jYWxlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QWN0dWFsRGVmYXVsdExvY2FsZShsb2NhbGVzLCBkZWZhdWx0TG9jYWxlKSB7XHJcbiAgICByZXR1cm4gZ2V0QWN0dWFsTG9jYWxlcyhsb2NhbGVzLCBkZWZhdWx0TG9jYWxlKS5zaGlmdCgpO1xyXG59XHJcbmV4cG9ydHMuZ2V0QWN0dWFsRGVmYXVsdExvY2FsZSA9IGdldEFjdHVhbERlZmF1bHRMb2NhbGU7XHJcbi8qKlxyXG4gKiBJcyBhIGdpdmVuIHN0cmluZyBhIGxvY2FsZSBpZGVudGlmaWVyIGZvbGxvd2luZyB0aGUgYGxhbmd1YWdlYC1gY291bnRyeWAgZm9ybWF0P1xyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIC0gQSBsb2NhbGUgaWRlbnRpZmllci5cclxuICogQHBhcmFtIGNoZWNrTm9ybWFsaXplZENhc2UgLSBUZXN0IGlzIHRoZSBwcm92aWRlZCBsb2NhbGUgZm9sbG93cyB0aGUgSVNPIDMxNjYgY2FzZSBjb252ZW50aW9uIChsYW5ndWFnZSBjb2RlIGxvd2VyY2FzZSwgY291bnRyeSBjb2RlIHVwcGVyY2FzZSkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIGEgbG9jYWxlIGlkZW50aWZpZXIgZm9sbG93aW5nIHRoZSBgbGFuZ3VhZ2VgLWBjb3VudHJ5YCwgb3RoZXJ3aXNlIGBmYWxzZWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0xvY2FsZShsb2NhbGUsIGNoZWNrTm9ybWFsaXplZENhc2UgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXpdezJ9LVtBLVpdezJ9JC8sICFjaGVja05vcm1hbGl6ZWRDYXNlID8gJ2knIDogJycpO1xyXG4gICAgcmV0dXJuIHJlZ2V4cC50ZXN0KGxvY2FsZSk7XHJcbn1cclxuZXhwb3J0cy5pc0xvY2FsZSA9IGlzTG9jYWxlO1xyXG4vKipcclxuICogR2V0IGEgbm9ybWFsaXplZCBsb2NhbGUgaWRlbnRpZmllci5cclxuICpcclxuICogYG5leHQtbXVsdGlsaW5ndWFsYCBvbmx5IHVzZXMgbG9jYWxlIGlkZW50aWZpZXJzIGZvbGxvd2luZyB0aGUgYGxhbmd1YWdlYC1gY291bnRyeWAgZm9ybWF0LiBMb2NhbGUgaWRlbnRpZmllcnNcclxuICogYXJlIGNhc2UgaW5zZW5zaXRpdmUgYW5kIGNhbiBiZSBsb3dlcmNhc2UsIGhvd2V2ZXIgaXQgaXMgcmVjb21tZW5kZWQgYnkgSVNPIDMxNjYgY29udmVudGlvbiB0aGF0IGxhbmd1YWdlIGNvZGVzXHJcbiAqIGFyZSBsb3dlcmNhc2UgYW5kIGNvdW50cnkgY29kZXMgYXJlIHVwcGVyY2FzZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSAtIEEgbG9jYWxlIGlkZW50aWZpZXIuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIGxvY2FsZSBpZGVudGlmaWVyIGZvbGxvd2luZyB0aGUgSVNPIDMxNjYgY29udmVudGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUpIHtcclxuICAgIGlmICghaXNMb2NhbGUobG9jYWxlKSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbbGFuZ3VhZ2VDb2RlLCBjb3VudHJ5Q29kZV0gPSBsb2NhbGUuc3BsaXQoJy0nKTtcclxuICAgIHJldHVybiBgJHtsYW5ndWFnZUNvZGUudG9Mb3dlckNhc2UoKX0tJHtjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpfWA7XHJcbn1cclxuZXhwb3J0cy5ub3JtYWxpemVMb2NhbGUgPSBub3JtYWxpemVMb2NhbGU7XHJcbi8qKlxyXG4gKiBSZXNvbHZlIHRoZSBwcmVmZXJyZWQgbG9jYWxlIGZyb20gYW4gSFRUUCBgQWNjZXB0LUxhbmd1YWdlYCBoZWFkZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBhY2NlcHRMYW5ndWFnZUhlYWRlciAtIFRoZSB2YWx1ZSBvZiBhbiBIVFRQIHJlcXVlc3QgYEFjY2VwdC1MYW5ndWFnZWAgaGVhZGVyLlxyXG4gKiBAcGFyYW0gYWN0dWFsTG9jYWxlcyAtIFRoZSBsaXN0IG9mIGFjdHVhbCBsb2NhbGVzIHVzZWQgYnkgYG5leHQtbXVsdGlsaW5ndWFsYC5cclxuICogQHBhcmFtIGFjdHVhbERlZmF1bHRMb2NhbGUgLSBUaGUgYWN0dWFsIGRlZmF1bHQgbG9jYWxlIHVzZWQgYnkgYG5leHQtbXVsdGlsaW5ndWFsYC5cclxuICpcclxuICogQHJldHVybnMgVGhlIHByZWZlcnJlZCBsb2NhbGUgaWRlbnRpZmllci5cclxuICovXHJcbmZ1bmN0aW9uIGdldFByZWZlcnJlZExvY2FsZShhY2NlcHRMYW5ndWFnZUhlYWRlciwgYWN0dWFsTG9jYWxlcywgYWN0dWFsRGVmYXVsdExvY2FsZSkge1xyXG4gICAgcmV0dXJuICgwLCByZXNvbHZlX2FjY2VwdF9sYW5ndWFnZV8xLmRlZmF1bHQpKGFjY2VwdExhbmd1YWdlSGVhZGVyLCBhY3R1YWxMb2NhbGVzLCBhY3R1YWxEZWZhdWx0TG9jYWxlKTtcclxufVxyXG5leHBvcnRzLmdldFByZWZlcnJlZExvY2FsZSA9IGdldFByZWZlcnJlZExvY2FsZTtcclxuLy8gVGhlIG5hbWUgb2YgdGhlIGNvb2tpZSB1c2VkIHRvIHN0b3JlIHRoZSB1c2VyIGxvY2FsZSwgY2FuIGJlIG92ZXJ3cml0dGVuIGluIGFuIGAuZW52YCBmaWxlLlxyXG5jb25zdCBMT0NBTEVfQ09PS0lFX05BTUUgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTEVfQ09PS0lFX05BTUVcclxuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxFX0NPT0tJRV9OQU1FXHJcbiAgICA6ICdMJztcclxuLy8gVGhlIGxpZmV0aW1lIG9mIHRoZSBjb29raWUgdXNlZCB0byBzdG9yZSB0aGUgdXNlciBsb2NhbGUsIGNhbiBiZSBvdmVyd3JpdHRlbiBpbiBhbiBgLmVudmAgZmlsZS5cclxuY29uc3QgTE9DQUxFX0NPT0tJRV9MSUZFVElNRSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPQ0FMRV9DT09LSUVfTElGRVRJTUVcclxuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxFX0NPT0tJRV9MSUZFVElNRVxyXG4gICAgOiA2MCAqIDYwICogMjQgKiAzNjUgKiAxMDtcclxuLyoqXHJcbiAqIFNhdmUgdGhlIGN1cnJlbnQgdXNlcidzIGxvY2FsZSB0byB0aGUgbG9jYWxlIGNvb2tpZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSAtIEEgbG9jYWxlIGlkZW50aWZpZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRDb29raWVMb2NhbGUobG9jYWxlKSB7XHJcbiAgICBub29raWVzXzEuZGVmYXVsdC5zZXQobnVsbCwgTE9DQUxFX0NPT0tJRV9OQU1FLCBsb2NhbGUsIHtcclxuICAgICAgICBtYXhBZ2U6IExPQ0FMRV9DT09LSUVfTElGRVRJTUUsXHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zZXRDb29raWVMb2NhbGUgPSBzZXRDb29raWVMb2NhbGU7XHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxvY2FsZSB0aGF0IHdhcyBzYXZlZCB0byB0aGUgbG9jYWxlIGNvb2tpZS5cclxuICpcclxuICogQHBhcmFtIG5leHRQYWdlQ29udGV4dCAtIFRoZSBOZXh0LmpzIHBhZ2UgY29udGV4dC5cclxuICogQHBhcmFtIGFjdHVhbExvY2FsZXMgLSBUaGUgbGlzdCBvZiBhY3R1YWwgbG9jYWxlcyB1c2VkIGJ5IGBuZXh0LW11bHRpbGluZ3VhbGAuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGUgdGhhdCB3YXMgc2F2ZWQgdG8gdGhlIGxvY2FsZSBjb29raWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDb29raWVMb2NhbGUobmV4dFBhZ2VDb250ZXh0LCBhY3R1YWxMb2NhbGVzKSB7XHJcbiAgICBjb25zdCBjb29raWVzID0gbm9va2llc18xLmRlZmF1bHQuZ2V0KG5leHRQYWdlQ29udGV4dCk7XHJcbiAgICBpZiAoIU9iamVjdC5rZXlzKGNvb2tpZXMpLmluY2x1ZGVzKExPQ0FMRV9DT09LSUVfTkFNRSkpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29va2llTG9jYWxlID0gY29va2llc1tMT0NBTEVfQ09PS0lFX05BTUVdO1xyXG4gICAgaWYgKCFhY3R1YWxMb2NhbGVzLmluY2x1ZGVzKGNvb2tpZUxvY2FsZSkpIHtcclxuICAgICAgICAvLyBEZWxldGUgdGhlIGNvb2tpZSBpZiB0aGUgdmFsdWUgaXMgaW52YWxpZCAoZS5nLiBiZWVuIHRhbXBlcmVkIHdpdGgpLlxyXG4gICAgICAgIG5vb2tpZXNfMS5kZWZhdWx0LmRlc3Ryb3kobmV4dFBhZ2VDb250ZXh0LCBMT0NBTEVfQ09PS0lFX05BTUUpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29va2llTG9jYWxlO1xyXG59XHJcbmV4cG9ydHMuZ2V0Q29va2llTG9jYWxlID0gZ2V0Q29va2llTG9jYWxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NdWxMaW5rID0gdm9pZCAwO1xyXG5jb25zdCBqc3hfcnVudGltZV8xID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xyXG5jb25zdCBsaW5rXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5leHQvbGlua1wiKSk7XHJcbmNvbnN0IHJvdXRlcl8xID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpO1xyXG5jb25zdCBnZXRfbG9jYWxpemVkX3VybF9wYXRoXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9nZXQtbG9jYWxpemVkLXVybC1wYXRoXCIpO1xyXG5jb25zdCBnZXRfcmV3cml0ZXNfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2dldC1yZXdyaXRlc1wiKTtcclxuLy8gVGhyb3cgYSBjbGVhciBlcnJvciBpcyB0aGlzIGlzIGluY2x1ZGVkIGJ5IG1pc3Rha2Ugb24gdGhlIGNsaWVudCBzaWRlLlxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigncGxlYXNlIHVzZSB0aGUgYG5leHQtbXVsdGlsaW5ndWFsL2xpbmtgIG9uIHRoZSBjbGllbnQgc2lkZSwgbm90IGBuZXh0LW11bHRpbGluZ3VhbC9saW5rLXNzcmAnKTtcclxufVxyXG4vKipcclxuICogTXVsTGluayBpcyBhIHdyYXBwZXIgYXJvdW5kIE5leHQuanMnIGBMaW5rYCB0aGF0IHByb3ZpZGVzIGxvY2FsaXplZCBVUkxzLlxyXG4gKlxyXG4gKiBUaGlzIGlzIG1lYW50IHRvIGJlIHVzZWQgb24gdGhlIHNlcnZlciBvbmx5LiBVc2luZyBpdCBvbiB0aGUgY2xpZW50IHNpZGUgd2lsbCByZXN1bHQgaW4gY29tcGlsYXRpb24gZXJyb3JzLlxyXG4gKlxyXG4gKiBAcGFyYW0gaHJlZiAtIEEgbm9uLWxvY2FsaXplZCBOZXh0LmpzIGBocmVmYCB3aXRob3V0IGEgbG9jYWxlIHByZWZpeCAoZS5nLiBgL2NvbnRhY3QtdXNgKVxyXG4gKiBAcGFyYW0gbG9jYWxlIC0gVGhlIGxvY2FsZSB0byBncmFiIHRoZSBjb3JyZWN0IGxvY2FsaXplZCBwYXRoLlxyXG4gKiBAcGFyYW0gcHJvcHMgLSBBbnkgcHJvcGVydHkgYXZhaWxhYmxlIG9uIHRoZSBgTGlua1Byb3BzYCAocHJvcGVydGllcyBvZiB0aGUgTmV4dC5qcycgYExpbmtgIGNvbXBvbmVudCkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBOZXh0LmpzIGBMaW5rYCBjb21wb25lbnQgd2l0aCB0aGUgY29ycmVjdCBsb2NhbGl6ZWQgVVJMcy5cclxuICovXHJcbmZ1bmN0aW9uIE11bExpbmsoX2EpIHtcclxuICAgIHZhciB7IGhyZWYsIGxvY2FsZSB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJocmVmXCIsIFwibG9jYWxlXCJdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9ICgwLCByb3V0ZXJfMS51c2VSb3V0ZXIpKCk7XHJcbiAgICBsb2NhbGUgPSBsb2NhbGUgPyBsb2NhbGUgOiByb3V0ZXIubG9jYWxlO1xyXG4gICAgY29uc3QgbG9jYWxpemVkVXJsID0gKDAsIGdldF9sb2NhbGl6ZWRfdXJsX3BhdGhfMS5nZXRMb2NhbGl6ZWRVcmxQYXRoKSgoMCwgZ2V0X3Jld3JpdGVzXzEuZ2V0UmV3cml0ZXMpKCksIGxvY2FsZSwgaHJlZik7XHJcbiAgICByZXR1cm4gKDAsIGpzeF9ydW50aW1lXzEuanN4KShsaW5rXzEuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IGxvY2FsaXplZFVybCwgbG9jYWxlOiBsb2NhbGUgfSwgcHJvcHMpLCB2b2lkIDApO1xyXG59XHJcbmV4cG9ydHMuTXVsTGluayA9IE11bExpbms7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudXNlTWVzc2FnZXMgPSBleHBvcnRzLk1lc3NhZ2VzID0gZXhwb3J0cy5NZXNzYWdlID0gZXhwb3J0cy5nZXRTb3VyY2VGaWxlUGF0aCA9IGV4cG9ydHMuZ2V0TWVzc2FnZXNGaWxlUGF0aCA9IGV4cG9ydHMudXJsU2VnbWVudEtleUlkID0gZXhwb3J0cy5rZXlTZWdtZW50UmVnRXhwID0gdm9pZCAwO1xyXG5jb25zdCByb3V0ZXJfMSA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTtcclxuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcclxuY29uc3QgX18yID0gcmVxdWlyZShcIi4uXCIpO1xyXG5jb25zdCBpbnRsX21lc3NhZ2Vmb3JtYXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0XCIpKTtcclxuLyoqIFRoaXMgaXMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB2YWxpZGF0ZSBtZXNzYWdlIGtleSBzZWdtZW50cy4gKi9cclxuZXhwb3J0cy5rZXlTZWdtZW50UmVnRXhwID0gL15bYS16XFxkXXszLDUwfSQvaTtcclxuLyoqIFRoaXMgaXMgdGhlIGtleSBpZGVudGlmaWVyIHVzZWQgdG8gbG9jYWxpemUgVVJMIHNlZ21lbnRzLiAqL1xyXG5leHBvcnRzLnVybFNlZ21lbnRLZXlJZCA9ICdwYWdlVGl0bGUnO1xyXG4vKipcclxuICogR2V0IHRoZSBsb2NhbGl6ZWQgbWVzc2FnZXMgZmlsZSBwYXRoLlxyXG4gKlxyXG4gKiBAcGFyYW0gc291cmNlRmlsZVBhdGggLSBUaGUgcGF0aCBvZiB0aGUgc291cmNlIGZpbGUgdGhhdCBpcyBjYWxsaW5nIGB1c2VNZXNzYWdlcygpYC5cclxuICogQHBhcmFtIGxvY2FsZSAtIFRoZSBsb2NhbGUgb2YgdGhlIG1lc3NhZ2UgZmlsZS5cclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldE1lc3NhZ2VzRmlsZVBhdGgoc291cmNlRmlsZVBhdGgsIGxvY2FsZSkge1xyXG4gICAgY29uc3QgeyBkaXI6IGRpcmVjdG9yeVBhdGgsIG5hbWU6IGZpbGVuYW1lIH0gPSAoMCwgcGF0aF8xLnBhcnNlKShzb3VyY2VGaWxlUGF0aCk7XHJcbiAgICByZXR1cm4gKDAsIHBhdGhfMS5yZXNvbHZlKShkaXJlY3RvcnlQYXRoLCBgJHtmaWxlbmFtZX0uJHsoMCwgX18xLm5vcm1hbGl6ZUxvY2FsZSkobG9jYWxlKX0ucHJvcGVydGllc2ApO1xyXG59XHJcbmV4cG9ydHMuZ2V0TWVzc2FnZXNGaWxlUGF0aCA9IGdldE1lc3NhZ2VzRmlsZVBhdGg7XHJcbi8qKlxyXG4gKiBHZXQgdGhlIHBhdGggb2YgdGhlIHNvdXJjZSBmaWxlIHRoYXQgaXMgY2FsbGluZyBgdXNlTWVzc2FnZXMoKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdlRmlsZVBhdGggLSBUaGUgZmlsZSBwYXRoIG9mIG9uZSBvZiB0aGUgbWVzc2FnZXMgZmlsZXMgKGFueSBsb2NhbGUpLlxyXG4gKiBAcGFyYW0gc291cmNlRmlsZUV4dGVuc2lvbiAgLSBUaGUgZXh0ZW5zaW9uIG9mIHRoZSBzb3VyY2UgZmlsZS5cclxuICpcclxuICogQHJldHVybnMgVGhlIHBhdGggb2YgdGhlIHNvdXJjZSBmaWxlIHRoYXQgaXMgY2FsbGluZyBgdXNlTWVzc2FnZXMoKWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTb3VyY2VGaWxlUGF0aChtZXNzYWdlRmlsZVBhdGgsIHNvdXJjZUZpbGVFeHRlbnNpb24pIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VzRmlsZSA9ICgwLCBwYXRoXzEucGFyc2UpKG1lc3NhZ2VGaWxlUGF0aCk7XHJcbiAgICBjb25zdCBzb3VyY2VGaWxlbmFtZSA9IG1lc3NhZ2VzRmlsZS5uYW1lLnNwbGl0KCcuJykuc2xpY2UoMCwgLTEpLmpvaW4oJy4nKTtcclxuICAgIHJldHVybiAoMCwgcGF0aF8xLnJlc29sdmUpKG1lc3NhZ2VzRmlsZS5kaXIsIGAke3NvdXJjZUZpbGVuYW1lfSR7c291cmNlRmlsZUV4dGVuc2lvbn1gKTtcclxufVxyXG5leHBvcnRzLmdldFNvdXJjZUZpbGVQYXRoID0gZ2V0U291cmNlRmlsZVBhdGg7XHJcbi8qKlxyXG4gKiBPYmplY3QgdXNlZCB0byBmb3JtYXQgaW5kaXZpZHVhbCBsb2NhbGl6ZWQgbWVzc2FnZXMgb2YgYSBsb2NhbCBzY29wZS5cclxuICovXHJcbmNsYXNzIE1lc3NhZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gb2JqZWN0IHVzZWQgdG8gZm9ybWF0IGxvY2FsaXplZCBtZXNzYWdlcyBvZiBhIGxvY2FsIHNjb3BlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBUaGUgcGFyZW50IG1lc3NhZ2VzIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5IG9mIHRoZSBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbG9jYWxpemVkIG1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwga2V5LCBtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IGEgbWVzc2FnZSBpZGVudGlmaWVkIGJ5IGEga2V5IGluIGEgbG9jYWwgc2NvcGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSBsb2NhbCBzY29wZSBrZXkgaWRlbnRpZnlpbmcgdGhlIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVzIC0gVGhlIHZhbHVlcyAoZS5nLiBwbGFjZWhvbGRlcnMpIHVzZWQgdG8gZm9ybWF0IHRoZSBtZXNzYWdlLCBpZiBhbnkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBtZXNzYWdlIGFzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQodmFsdWVzKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLmludGxNZXNzYWdlRm9ybWF0ID0gdGhpcy5pbnRsTWVzc2FnZUZvcm1hdFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLmludGxNZXNzYWdlRm9ybWF0XHJcbiAgICAgICAgICAgICAgICA6IG5ldyBpbnRsX21lc3NhZ2Vmb3JtYXRfMS5kZWZhdWx0KHRoaXMubWVzc2FnZSwgdGhpcy5wYXJlbnQubG9jYWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLmludGxNZXNzYWdlRm9ybWF0LmZvcm1hdCh2YWx1ZXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1lc3NhZ2UgPSBNZXNzYWdlO1xyXG4vKipcclxuICogT2JqZWN0IHVzZWQgdG8gZm9ybWF0IGxvY2FsaXplZCBtZXNzYWdlcyBvZiBhIGxvY2FsIHNjb3BlLlxyXG4gKi9cclxuY2xhc3MgTWVzc2FnZXMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gb2JqZWN0IHVzZWQgdG8gZm9ybWF0IGxvY2FsaXplZCBtZXNzYWdlcyBvZiBhIGxvY2FsIHNjb3BlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlWYWx1ZU9iamVjdCAtIFRoZSBcImtleS92YWx1ZVwiIG9iamVjdCBjb21pbmcgZGlyZWN0bHkgZnJvbSBhIGAucHJvcGVydGllc2AgZmlsZS5cclxuICAgICAqIEBwYXJhbSBsb2NhbGUgLSBUaGUgY3VycmVudCBsb2NhbGUgZnJvbSBOZXh0LmpzLlxyXG4gICAgICogQHBhcmFtIHNvdXJjZUZpbGVQYXRoIC0gVGhlIGZpbGUgcGF0aCBvZiB0aGUgc291cmNlIGZpbGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBtZXNzYWdlcy5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlc0ZpbGVQYXRoIC0gVGhlIGZpbGUgcGF0aCBvZiB0aGUgbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleVZhbHVlT2JqZWN0LCBsb2NhbGUsIHNvdXJjZUZpbGVQYXRoLCBtZXNzYWdlc0ZpbGVQYXRoKSB7XHJcbiAgICAgICAgLyoqIExvY2FsaXplZCBtZXNzYWdlcyBvZiBhIGxvY2FsIHNjb3BlLiAqL1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBpZiAoa2V5VmFsdWVPYmplY3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoa2V5VmFsdWVPYmplY3QpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBNZXNzYWdlKHRoaXMsIGtleSwga2V5VmFsdWVPYmplY3Rba2V5XSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSAoMCwgX18xLm5vcm1hbGl6ZUxvY2FsZSkobG9jYWxlKTtcclxuICAgICAgICB0aGlzLnNvdXJjZUZpbGVQYXRoID0gc291cmNlRmlsZVBhdGg7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlc0ZpbGVQYXRoID0gbWVzc2FnZXNGaWxlUGF0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IGEgbWVzc2FnZSBpZGVudGlmaWVkIGJ5IGEga2V5IGluIGEgbG9jYWwgc2NvcGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleSAtIFRoZSBsb2NhbCBzY29wZSBrZXkgaWRlbnRpZnlpbmcgdGhlIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVzIC0gVGhlIHZhbHVlcyAoZS5nLiBwbGFjZWhvbGRlcnMpIHVzZWQgdG8gZm9ybWF0IHRoZSBtZXNzYWdlLCBpZiBhbnkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBtZXNzYWdlIGFzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoa2V5LCB2YWx1ZXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gbG9nIHRoZSBlcnJvciBzaW5jZSBpdCB3YXMgY2F1Z2h0IHdoZW4gY2FsbGluZyBgdXNlTWVzc2FnZSgpYC5cclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5tZXNzYWdlcy5maW5kKChtZXNzYWdlKSA9PiBtZXNzYWdlLmtleSA9PT0ga2V5KTtcclxuICAgICAgICBpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF9fMi5sb2cud2FybihgdW5hYmxlIHRvIGZvcm1hdCBrZXkgd2l0aCBpZGVudGlmaWVyIFxcYCR7a2V5fVxcYCBpbiBcXGAke3RoaXMuc291cmNlRmlsZVBhdGh9XFxgIGJlY2F1c2UgaXQgd2FzIG5vdCBmb3VuZCBpbiBtZXNzYWdlcyBmaWxlIFxcYCR7dGhpcy5tZXNzYWdlc0ZpbGVQYXRofVxcYGApO1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmZvcm1hdCh2YWx1ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIG1lc3NhZ2VzIGNvbnRhaW5lZCBpbiBhIGdpdmVuIGxvY2FsIHNjb3BlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEFsbCBtZXNzYWdlcyBjb250YWluZWQgaW4gYSBnaXZlbiBsb2NhbCBzY29wZS5cclxuICAgICAqL1xyXG4gICAgZ2V0QWxsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWVzc2FnZXMgPSBNZXNzYWdlcztcclxuLyoqXHJcbiAqIEhvb2sgdG8gZ2V0IHRoZSBsb2NhbGl6ZWQgbWVzc2FnZXMgc3BlY2lmaWMgdG8gYSBOZXh0LmpzIGNvbnRleHQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtZXNzYWdlcyBvZiB0aGUgbG9jYWwgc2NvcGUuXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VNZXNzYWdlcygpIHtcclxuICAgIGlmICghdGhpcyB8fCAhdGhpcy5iYWJlbGlmaWVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlTWVzc2FnZXMoKSByZXF1aXJlcyB0aGUgJ25leHQtbXVsdGlsaW5ndWFsL21lc3NhZ2VzL2JhYmVsLXBsdWdpbicgQmFiZWwgcGx1Z2luXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBsb2NhbGUgfSA9ICgwLCByb3V0ZXJfMS51c2VSb3V0ZXIpKCk7XHJcbiAgICBjb25zdCBiYWJlbGlmaWVkTWVzc2FnZXMgPSB0aGlzO1xyXG4gICAgY29uc3Qgc291cmNlRmlsZVBhdGggPSBiYWJlbGlmaWVkTWVzc2FnZXMuc291cmNlRmlsZVBhdGg7XHJcbiAgICBjb25zdCBwYXJzZWRTb3VyY2VGaWxlID0gKDAsIHBhdGhfMS5wYXJzZSkoc291cmNlRmlsZVBhdGgpO1xyXG4gICAgY29uc3Qgc291cmNlRmlsZURpcmVjdG9yeVBhdGggPSBwYXJzZWRTb3VyY2VGaWxlLmRpcjtcclxuICAgIGNvbnN0IG1lc3NhZ2VzRmlsZW5hbWUgPSBgJHtwYXJzZWRTb3VyY2VGaWxlLm5hbWV9LiR7KDAsIF9fMS5ub3JtYWxpemVMb2NhbGUpKGxvY2FsZSl9LnByb3BlcnRpZXNgO1xyXG4gICAgY29uc3QgbWVzc2FnZXNGaWxlUGF0aCA9ICgwLCBwYXRoXzEucmVzb2x2ZSkoc291cmNlRmlsZURpcmVjdG9yeVBhdGgsIG1lc3NhZ2VzRmlsZW5hbWUpO1xyXG4gICAgaWYgKCFiYWJlbGlmaWVkTWVzc2FnZXMua2V5VmFsdWVPYmplY3RDb2xsZWN0aW9uW2xvY2FsZV0pIHtcclxuICAgICAgICBfXzIubG9nLndhcm4oYHVuYWJsZSB0byB1c2UgXFxgdXNlTWVzc2FnZXMoKVxcYCBpbiBcXGAke2JhYmVsaWZpZWRNZXNzYWdlcy5zb3VyY2VGaWxlUGF0aH1cXGAgYmVjYXVzZSBubyBtZXNzYWdlc3MgY291bGQgYmUgZm91bmQgYXQgXFxgJHttZXNzYWdlc0ZpbGVQYXRofVxcYGApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBNZXNzYWdlcyhiYWJlbGlmaWVkTWVzc2FnZXMua2V5VmFsdWVPYmplY3RDb2xsZWN0aW9uW2xvY2FsZV0sIGxvY2FsZSwgc291cmNlRmlsZVBhdGgsIG1lc3NhZ2VzRmlsZVBhdGgpO1xyXG59XHJcbmV4cG9ydHMudXNlTWVzc2FnZXMgPSB1c2VNZXNzYWdlcztcclxuIl0sIm5hbWVzIjpbInVzZU1lc3NhZ2VzIiwic3R5bGVzIiwiRm9vdGVyIiwibWVzc2FnZXMiLCJmb290ZXIiLCJmb3JtYXQiLCJub3JtYWxpemVMb2NhbGUiLCJnZXRBY3R1YWxMb2NhbGVzIiwiZ2V0QWN0dWFsTG9jYWxlIiwic2V0Q29va2llTG9jYWxlIiwidXNlUm91dGVyIiwiTXVsTGluayIsImxvY2FsZVN0cmluZ3MiLCJMYW5ndWFnZVBpY2tlciIsInBhdGhuYW1lIiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJhY3R1YWxMb2NhbGUiLCJhY3R1YWxMb2NhbGVzIiwibGFuZ3VhZ2VQaWNrZXIiLCJmaWx0ZXIiLCJtYXAiLCJNdWxIZWFkIiwiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsImhlYWRlciIsIm5hdiIsIm1haW4iLCJ1c2VGcnVpdHNNZXNzYWdlcyIsImdldEFjdHVhbERlZmF1bHRMb2NhbGUiLCJnZXRQcmVmZXJyZWRMb2NhbGUiLCJnZXRDb29raWVMb2NhbGUiLCJ1c2VTdGF0ZSIsIkluZGV4UGFnZSIsInJlc29sdmVkTG9jYWxlIiwicm91dGVyIiwiZnJ1aXRzTWVzc2FnZXMiLCJjb3VudCIsInNldENvdW50IiwiaGVhZGxpbmUiLCJzdWJIZWFkZXIiLCJ0YWJsZSIsImpvaW4iLCJnZXRBbGwiLCJtZXNzYWdlIiwibWZFeGFtcGxlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwibmV4dFBhZ2VDb250ZXh0IiwicmVxIiwiYWN0dWFsRGVmYXVsdExvY2FsZSIsImNvb2tpZUxvY2FsZSIsImhlYWRlcnMiLCJ0b0xvd2VyQ2FzZSIsInByb3BzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhMb3dlciIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=