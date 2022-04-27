"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hello)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction hello(req, res) {\n    const { email , menssage  } = req.body;\n    console.log(req.method, req.url);\n    console.log(email, menssage);\n    var transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        service: \"gmail\",\n        auth: {\n            user: \"catabaque@gmail.com\",\n            pass: \"cata130206\"\n        }\n    });\n    var mailOptions = {\n        from: \"catabaque@gmail.com\",\n        to: email,\n        subject: \"Entrevista laboral\",\n        text: menssage\n    };\n    transporter.sendMail(mailOptions, function(error, info) {\n        if (error) {\n            res.status(500).json(error.message);\n        } else {\n            res.status(200).jsonp(req.body);\n            console.log(\"Email enviado\");\n        }\n    });\n    res.json(\"done\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ3BCLFNBQVNDLEtBQUssQ0FBQ0MsR0FBRyxFQUFHQyxHQUFHLEVBQUU7SUFDckMsTUFBTSxFQUFFQyxLQUFLLEdBQUdDLFFBQVEsR0FBRSxHQUFHSCxHQUFHLENBQUNJLElBQUk7SUFDckNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixHQUFHLENBQUNPLE1BQU0sRUFBR1AsR0FBRyxDQUFDUSxHQUFHLENBQUM7SUFDakNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLEVBQUdDLFFBQVEsQ0FBQztJQUM3QixJQUFJTSxXQUFXLEdBQUdYLGlFQUEwQixDQUFDO1FBQ3pDYSxPQUFPLEVBQUUsT0FBTztRQUNoQkMsSUFBSSxFQUFFO1lBQ0pDLElBQUksRUFBRSxxQkFBcUI7WUFDM0JDLElBQUksRUFBRSxZQUFZO1NBQ25CO0tBQ0YsQ0FBQztJQUNKLElBQUlDLFdBQVcsR0FBRztRQUNkQyxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxFQUFFLEVBQUVmLEtBQUs7UUFDVGdCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0JDLElBQUksRUFBRWhCLFFBQVE7S0FDZjtJQUNETSxXQUFXLENBQUNXLFFBQVEsQ0FBQ0wsV0FBVyxFQUFFLFNBQVVNLEtBQUssRUFBRUMsSUFBSSxFQUFFO1FBQ3ZELElBQUlELEtBQUssRUFBRTtZQUNUcEIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQ0ksT0FBTyxDQUFDLENBQUM7U0FDckMsTUFBTTtZQUNMeEIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxLQUFLLENBQUMxQixHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO1lBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM5QjtLQUNGLENBQUM7SUFDSkwsR0FBRyxDQUFDdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztDQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtc2ltcGxlLXBvcnRmb2xpby8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOT0RFTUFJTEVSIGZyb20gXCJub2RlbWFpbGVyXCIgXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbGxvKHJlcSAsIHJlcykgeyBcclxuICAgIGNvbnN0IHsgZW1haWwgLCBtZW5zc2FnZSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnNvbGUubG9nKHJlcS5tZXRob2QgLCByZXEudXJsKVxyXG4gICAgY29uc29sZS5sb2coZW1haWwgLCBtZW5zc2FnZSkgXHJcbiAgICB2YXIgdHJhbnNwb3J0ZXIgPSBOT0RFTUFJTEVSLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgc2VydmljZTogXCJnbWFpbFwiLFxyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgIHVzZXI6IFwiY2F0YWJhcXVlQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgcGFzczogXCJjYXRhMTMwMjA2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB2YXIgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZnJvbTogXCJjYXRhYmFxdWVAZ21haWwuY29tXCIsXHJcbiAgICAgICAgdG86IGVtYWlsLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiRW50cmV2aXN0YSBsYWJvcmFsXCIsXHJcbiAgICAgICAgdGV4dDogbWVuc3NhZ2UsXHJcbiAgICAgIH07XHJcbiAgICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCBmdW5jdGlvbiAoZXJyb3IsIGluZm8pIHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbnAocmVxLmJvZHkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBlbnZpYWRvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIHJlcy5qc29uKFwiZG9uZVwiKVxyXG59Il0sIm5hbWVzIjpbIk5PREVNQUlMRVIiLCJoZWxsbyIsInJlcSIsInJlcyIsImVtYWlsIiwibWVuc3NhZ2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInVybCIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJzZW5kTWFpbCIsImVycm9yIiwiaW5mbyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwianNvbnAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();