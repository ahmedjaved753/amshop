(this["webpackJsonpamshop"] = this["webpackJsonpamshop"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slider_title {\n  font-size: 5vw;\n  color: tomato;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 2vw; }\n\n.card-wrapper {\n  position: relative;\n  width: 100%;\n  padding: 0 10px;\n  box-sizing: border-box; }\n  .card-wrapper:active, .card-wrapper:hover, .card-wrapper:focus {\n    outline: none;\n    border: none; }\n\n.card {\n  width: 100%;\n  height: 450px;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative; }\n  .card .card-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    background-color: #000;\n    transition: .5s; }\n    .card .card-image img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n  .card:hover img {\n    opacity: .4;\n    transition: .5s; }\n  .card:hover .card-image {\n    transform: translateY(-100px);\n    transition: all .9s; }\n\n.social-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  display: flex; }\n  .social-icons li {\n    list-style: none; }\n    .social-icons li a {\n      position: relative;\n      display: block;\n      width: 50px;\n      height: 50px;\n      line-height: 50px;\n      text-align: center;\n      background: #fff;\n      font-size: 23px;\n      color: #333;\n      font-weight: bold;\n      margin: 0 6px;\n      transition: .4s;\n      transform: translateY(200px);\n      opacity: 0; }\n\n.card:hover .social-icons li a {\n  transform: translateY(0px);\n  opacity: 1; }\n\n.social-icons li a:hover {\n  background: #000;\n  transition: .2s; }\n  .social-icons li a:hover .fa {\n    color: #fff; }\n\n.social-icons li a .fa {\n  transition: .8s; }\n  .social-icons li a .fa:hover {\n    transform: rotateY(360deg);\n    color: #fff; }\n\n.card:hover li:nth-child(1) a {\n  transition-delay: .1s; }\n\n.card:hover li:nth-child(2) a {\n  transition-delay: .2s; }\n\n.card:hover li:nth-child(3) a {\n  transition-delay: .3s; }\n\n.card:hover li:nth-child(4) a {\n  transition-delay: .4s; }\n\n.details {\n  position: absolute;\n  bottom: 400px;\n  left: 0;\n  background: #fff;\n  width: 100%;\n  height: 120px;\n  z-index: 1;\n  padding: 10px;\n  transition: .6s; }\n  .details h2 {\n    margin: 30px 0;\n    padding: 0;\n    text-align: center; }\n    .details h2 .job-title {\n      font-size: 16px;\n      line-height: 2;\n      color: #333;\n      font-weight: 300;\n      display: block; }\n\n.card:hover .details {\n  bottom: 0; }\n\n.carousel .slick-dots {\n  bottom: -2.5vw; }\n  .carousel .slick-dots li button {\n    width: 20px;\n    height: 20px;\n    border: 1px solid #fff;\n    border-radius: 20px; }\n    .carousel .slick-dots li button:before {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 10px;\n      height: 10px;\n      border-radius: 10px;\n      content: \"\";\n      text-align: center;\n      opacity: .5;\n      color: #000;\n      background-color: #fff;\n      transform: translate(-50%, -50%);\n      transition: all .3s ease-in-out; }\n  .carousel .slick-dots li.slick-active button, .carousel .slick-dots li:hover button {\n    border-color: tomato; }\n    .carousel .slick-dots li.slick-active button:before, .carousel .slick-dots li:hover button:before {\n      background-color: tomato;\n      opacity: 1; }\n\n.carousel .slick-prev, .carousel .slick-next {\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.carousel .slick-prev:hover, .carousel .slick-prev:focus, .carousel .slick-next:hover, .carousel .slick-next:focus {\n  color: #fff;\n  outline: none;\n  background: #fff; }\n\n.carousel .slick-prev:before, .carousel .slick-next:before {\n  color: #000;\n  font-family: \"Raleway\", sans-serif; }\n\n.carousel .slick-next {\n  right: -55px; }\n\n.carousel .slick-prev {\n  left: -55px; }\n", "",{"version":3,"sources":["webpack://src/App.scss"],"names":[],"mappings":"AAKA;EACI,cAAa;EACb,aAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,kBAAiB,EAAA;;AAErB;EACI,kBAAiB;EACjB,WAAU;EACV,eAAc;EACd,sBAAsB,EAAA;EAJ1B;IAMQ,aAAY;IACZ,YAAW,EAAA;;AAInB;EACI,WAAU;EACV,aAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,eAAc;EACd,kBAAkB,EAAA;EANtB;IAQQ,kBAAkB;IAClB,MAAK;IACL,OAAM;IACN,WAAU;IACV,YAAW;IACX,UAAS;IACT,sBAAsB;IACtB,eAAc,EAAA;IAftB;MAiBY,WAAU;MACV,YAAW;MACX,iBAAiB,EAAA;EAnB7B;IAwBY,WAAU;IACV,eAAc,EAAA;EAzB1B;IA4BY,6BAA4B;IAC5B,mBAAkB,EAAA;;AAK9B;EACI,kBAAkB;EAClB,QAAO;EACP,SAAQ;EACR,gCAAgC;EAChC,UAAS;EACT,aAAY,EAAA;EANhB;IAQQ,gBAAgB,EAAA;IARxB;MAUY,kBAAiB;MACjB,cAAa;MACb,WAAU;MACV,YAAW;MACX,iBAAiB;MACjB,kBAAkB;MAClB,gBAAe;MACf,eAAc;MACd,WAAU;MACV,iBAAiB;MACjB,aAAY;MACZ,eAAc;MACd,4BAA2B;MAC3B,UAAS,EAAA;;AAKrB;EAEQ,0BAAyB;EACzB,UAAS,EAAA;;AAGjB;EACI,gBAAgB;EAChB,eAAe,EAAA;EAFnB;IAIQ,WAAU,EAAA;;AAGlB;EACG,eAAc,EAAA;EADjB;IAGO,0BAAyB;IACzB,WAAU,EAAA;;AAIjB;EACI,qBAAqB,EAAA;;AAEzB;EACI,qBAAqB,EAAA;;AAEzB;EACI,qBAAqB,EAAA;;AAEzB;EACI,qBAAqB,EAAA;;AAEzB;EACI,kBAAiB;EACjB,aAAY;EACZ,OAAM;EACN,gBAAe;EACf,WAAU;EACV,aAAY;EACZ,UAAS;EACT,aAAY;EACZ,eAAc,EAAA;EATlB;IAWQ,cAAa;IACb,UAAS;IACT,kBAAkB,EAAA;IAb1B;MAeY,eAAc;MACd,cAAc;MACd,WAAU;MACV,gBAAe;MACf,cAAa,EAAA;;AAKzB;EAEQ,SAAQ,EAAA;;AAIhB;EAEQ,cAAa,EAAA;EAFrB;IAKgB,WAAU;IACV,YAAW;IACX,sBAAqB;IACrB,mBAAmB,EAAA;IARnC;MAUoB,kBAAiB;MACjB,QAAO;MACP,SAAQ;MACR,WAAU;MACV,YAAW;MACX,mBAAmB;MACnB,WAAU;MACV,kBAAkB;MAClB,WAAU;MACV,WAAU;MACV,sBAAqB;MACrB,gCAA+B;MAC/B,+BAA8B,EAAA;EAtBlD;IA4BoB,oBAAoB,EAAA;IA5BxC;MA8BwB,wBAAuB;MACvB,UAAS,EAAA;;AA/BjC;EAuCQ,WAAU;EACV,YAAW;EACX,sBAAqB,EAAA;;AAzC7B;EA4CQ,WAAU;EACV,aAAY;EACZ,gBAAe,EAAA;;AA9CvB;EAiDQ,WAAU;EACV,kCArMqB,EAAA;;AAmJ7B;EAqDQ,YAAW,EAAA;;AArDnB;EAwDQ,WAAU,EAAA","sourcesContent":["\n$Raleway:'Raleway',sans-serif;\n\n\n\n.slider_title{\n    font-size:5vw;\n    color:tomato;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom:2vw;\n}\n.card-wrapper{\n    position:relative;\n    width:100%;\n    padding:0 10px;\n    box-sizing: border-box;\n    &:active,&:hover,&:focus{\n        outline:none;\n        border:none;\n    }\n}//card-wrapper\n\n.card{\n    width:100%;\n    height:450px;\n    border-radius: 16px;\n    overflow: hidden;\n    cursor:pointer;\n    position: relative;\n    .card-image{\n        position: absolute;\n        top:0;\n        left:0;\n        width:100%;\n        height:100%;\n        z-index:2;\n        background-color: #000;\n        transition:.5s;\n        img{\n            width:100%;\n            height:100%;\n            object-fit: cover;\n        }\n    }//card-image\n    &:hover{\n        img{\n            opacity:.4;\n            transition:.5s;\n        }\n        .card-image{\n            transform:translateY(-100px);\n            transition:all .9s;\n        }\n    }\n}//card\n\n.social-icons{\n    position: absolute;;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    z-index:3;\n    display:flex;\n    li{\n        list-style: none;\n        a{\n            position:relative;\n            display:block;\n            width:50px;\n            height:50px;\n            line-height: 50px;\n            text-align: center;\n            background:#fff;\n            font-size:23px;\n            color:#333;\n            font-weight: bold;\n            margin:0 6px;\n            transition:.4s;\n            transform:translateY(200px);\n            opacity:0;\n        }\n    }\n}//social-icons\n\n.card:hover{\n    .social-icons li a{\n        transform:translateY(0px);\n        opacity:1;\n    }\n}\n.social-icons li a:hover{\n    background: #000;\n    transition: .2s;\n    .fa{\n        color:#fff;\n    }\n}\n.social-icons li a .fa{\n   transition:.8s;\n   &:hover{\n       transform:rotateY(360deg);\n       color:#fff;\n   }\n}\n\n.card:hover li:nth-child(1) a{\n    transition-delay: .1s;\n}\n.card:hover li:nth-child(2) a{\n    transition-delay: .2s;\n}\n.card:hover li:nth-child(3) a{\n    transition-delay: .3s;\n}\n.card:hover li:nth-child(4) a{\n    transition-delay: .4s;\n}\n.details{\n    position:absolute;\n    bottom:400px;\n    left:0;\n    background:#fff;\n    width:100%;\n    height:120px;\n    z-index:1;\n    padding:10px;\n    transition:.6s;\n    h2{\n        margin:30px 0;\n        padding:0;\n        text-align: center;\n        .job-title{\n            font-size:16px;\n            line-height: 2;\n            color:#333;\n            font-weight:300;\n            display:block;\n        }\n    }\n}\n\n.card:hover{\n    .details{\n        bottom:0;\n    }\n}\n\n.carousel{\n    .slick-dots{\n        bottom:-2.5vw;\n        li{\n            button{\n                width:20px;\n                height:20px;\n                border:1px solid #fff;\n                border-radius: 20px;\n                &:before{\n                    position:absolute;\n                    top:50%;\n                    left:50%;\n                    width:10px;\n                    height:10px;\n                    border-radius: 10px;\n                    content:\"\";\n                    text-align: center;\n                    opacity:.5;\n                    color:#000;\n                    background-color:#fff;\n                    transform:translate(-50%, -50%);\n                    transition:all .3s ease-in-out;\n                }\n            }\n            &.slick-active,\n            &:hover{\n                button{\n                    border-color: tomato;\n                    &:before{\n                        background-color:tomato;\n                        opacity:1;\n                    }\n                }\n            }\n        }\n    }\n\n    .slick-prev, .slick-next{\n        width:50px;\n        height:50px;\n        background-color:#fff;\n    }\n    .slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{\n        color:#fff;\n        outline:none;\n        background:#fff;\n    }\n    .slick-prev:before,.slick-next:before{\n        color:#000;\n        font-family: $Raleway;\n    }\n    .slick-next{\n        right:-55px;\n    }\n    .slick-prev{\n        left:-55px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n  {/*slider css is here */}\n   \n\n  .slider_title {\n    font-size: 5vw;\n    color: tomato;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 2vw;\n  }\n  \n  .card-wrapper {\n    position: relative;\n    width: 100%;\n    padding: 0 10px;\n    box-sizing: border-box;\n  }\n  \n  .card-wrapper:active, .card-wrapper:hover, .card-wrapper:focus {\n    outline: none;\n    border: none;\n  }\n  \n  .card {\n    width: 100%;\n    height: 450px;\n    border-radius: 16px;\n    overflow: hidden;\n    cursor: pointer;\n    position: relative;\n  }\n  \n  .card .card-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    background-color: #000;\n    transition: .5s;\n  }\n  \n  .card .card-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .card:hover img {\n    opacity: .4;\n    transition: .5s;\n  }\n  \n  .card:hover .card-image {\n    transform: translateY(-100px);\n    transition: all .9s;\n  }\n  \n  .social-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n    display: flex;\n  }\n  \n  .social-icons li {\n    list-style: none;\n  }\n  \n  .social-icons li a {\n    position: relative;\n    display: block;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    background: #fff;\n    font-size: 23px;\n    color: #333;\n    font-weight: bold;\n    margin: 0 6px;\n    transition: .4s;\n    transform: translateY(200px);\n    opacity: 0;\n  }\n  \n  .card:hover .social-icons li a {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  \n  .social-icons li a:hover {\n    background: #000;\n    transition: .2s;\n  }\n  \n  .social-icons li a:hover .fa {\n    color: #fff;\n  }\n  \n  .social-icons li a .fa {\n    transition: .8s;\n  }\n  \n  .social-icons li a .fa:hover {\n    transform: rotateY(360deg);\n    color: #fff;\n  }\n  \n  .card:hover li:nth-child(1) a {\n    transition-delay: .1s;\n  }\n  \n  .card:hover li:nth-child(2) a {\n    transition-delay: .2s;\n  }\n  \n  .card:hover li:nth-child(3) a {\n    transition-delay: .3s;\n  }\n  \n  .card:hover li:nth-child(4) a {\n    transition-delay: .4s;\n  }\n  \n  .details {\n    position: absolute;\n    bottom: 400px;\n    left: 0;\n    background: #fff;\n    width: 100%;\n    height: 120px;\n    z-index: 1;\n    padding: 10px;\n    transition: .6s;\n  }\n  \n  .details h2 {\n    margin: 30px 0;\n    padding: 0;\n    text-align: center;\n  }\n  \n  .details h2 .job-title {\n    font-size: 16px;\n    line-height: 2;\n    color: #333;\n    font-weight: 300;\n    display: block;\n  }\n  \n  .card:hover .details {\n    bottom: 0;\n  }\n  \n  .carousel .slick-dots {\n    bottom: -2.5vw;\n  }\n  \n  .carousel .slick-dots li button {\n    width: 20px;\n    height: 20px;\n    border: 1px solid #fff;\n    border-radius: 20px;\n  }\n  \n  .carousel .slick-dots li button:before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    content: \"\";\n    text-align: center;\n    opacity: .5;\n    color: #000;\n    background-color: #fff;\n    transform: translate(-50%, -50%);\n    transition: all .3s ease-in-out;\n  }\n  \n  .carousel .slick-dots li.slick-active button, .carousel .slick-dots li:hover button {\n    border-color: tomato;\n  }\n  \n  .carousel .slick-dots li.slick-active button:before, .carousel .slick-dots li:hover button:before {\n    background-color: tomato;\n    opacity: 1;\n  }\n  \n  .carousel .slick-prev, .carousel .slick-next {\n    width: 50px;\n    height: 50px;\n    background-color: #fff;\n  }\n  \n  .carousel .slick-prev:hover, .carousel .slick-prev:focus, .carousel .slick-next:hover, .carousel .slick-next:focus {\n    color: #fff;\n    outline: none;\n    background: #fff;\n  }\n  \n  .carousel .slick-prev:before, .carousel .slick-next:before {\n    color: #000;\n    font-family: \"Raleway\", sans-serif;\n  }\n  \n  .carousel .slick-next {\n    right: -55px;\n  }\n  \n  .carousel .slick-prev {\n    left: -55px;\n  }", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":";EACE,CAAC,sBAAsB,CAAC;;;EAGxB;IACE,cAAc;IACd,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,eAAe;IAEP,sBAAsB;EAChC;;EAEA;IACE,aAAa;IACb,YAAY;EACd;;EAEA;IACE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;IACV,sBAAsB;IAEtB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,YAAY;IAET,iBAAiB;EACtB;;EAEA;IACE,WAAW;IAEX,eAAe;EACjB;;EAEA;IAEU,6BAA6B;IAErC,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IAED,gCAAgC;IACxC,UAAU;IAGV,aAAa;EACf;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,aAAa;IAEb,eAAe;IAEP,4BAA4B;IACpC,UAAU;EACZ;;EAEA;IAEU,0BAA0B;IAClC,UAAU;EACZ;;EAEA;IACE,gBAAgB;IAEhB,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;IAEE,eAAe;EACjB;;EAEA;IAEU,0BAA0B;IAClC,WAAW;EACb;;EAEA;IAEU,qBAAqB;EAC/B;;EAEA;IAEU,qBAAqB;EAC/B;;EAEA;IAEU,qBAAqB;EAC/B;;EAEA;IAEU,qBAAqB;EAC/B;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,OAAO;IACP,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,UAAU;IACV,aAAa;IAEb,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,UAAU;IACV,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,sBAAsB;IAEd,gCAAgC;IAExC,+BAA+B;EACjC;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,wBAAwB;IACxB,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,kCAAkC;EACpC;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb","sourcesContent":["\n  {/*slider css is here */}\n   \n\n  .slider_title {\n    font-size: 5vw;\n    color: tomato;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 2vw;\n  }\n  \n  .card-wrapper {\n    position: relative;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  \n  .card-wrapper:active, .card-wrapper:hover, .card-wrapper:focus {\n    outline: none;\n    border: none;\n  }\n  \n  .card {\n    width: 100%;\n    height: 450px;\n    border-radius: 16px;\n    overflow: hidden;\n    cursor: pointer;\n    position: relative;\n  }\n  \n  .card .card-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    background-color: #000;\n    -webkit-transition: .5s;\n    transition: .5s;\n  }\n  \n  .card .card-image img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n  \n  .card:hover img {\n    opacity: .4;\n    -webkit-transition: .5s;\n    transition: .5s;\n  }\n  \n  .card:hover .card-image {\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n    -webkit-transition: all .9s;\n    transition: all .9s;\n  }\n  \n  .social-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 3;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  \n  .social-icons li {\n    list-style: none;\n  }\n  \n  .social-icons li a {\n    position: relative;\n    display: block;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    background: #fff;\n    font-size: 23px;\n    color: #333;\n    font-weight: bold;\n    margin: 0 6px;\n    -webkit-transition: .4s;\n    transition: .4s;\n    -webkit-transform: translateY(200px);\n            transform: translateY(200px);\n    opacity: 0;\n  }\n  \n  .card:hover .social-icons li a {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n  \n  .social-icons li a:hover {\n    background: #000;\n    -webkit-transition: .2s;\n    transition: .2s;\n  }\n  \n  .social-icons li a:hover .fa {\n    color: #fff;\n  }\n  \n  .social-icons li a .fa {\n    -webkit-transition: .8s;\n    transition: .8s;\n  }\n  \n  .social-icons li a .fa:hover {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n    color: #fff;\n  }\n  \n  .card:hover li:nth-child(1) a {\n    -webkit-transition-delay: .1s;\n            transition-delay: .1s;\n  }\n  \n  .card:hover li:nth-child(2) a {\n    -webkit-transition-delay: .2s;\n            transition-delay: .2s;\n  }\n  \n  .card:hover li:nth-child(3) a {\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n  }\n  \n  .card:hover li:nth-child(4) a {\n    -webkit-transition-delay: .4s;\n            transition-delay: .4s;\n  }\n  \n  .details {\n    position: absolute;\n    bottom: 400px;\n    left: 0;\n    background: #fff;\n    width: 100%;\n    height: 120px;\n    z-index: 1;\n    padding: 10px;\n    -webkit-transition: .6s;\n    transition: .6s;\n  }\n  \n  .details h2 {\n    margin: 30px 0;\n    padding: 0;\n    text-align: center;\n  }\n  \n  .details h2 .job-title {\n    font-size: 16px;\n    line-height: 2;\n    color: #333;\n    font-weight: 300;\n    display: block;\n  }\n  \n  .card:hover .details {\n    bottom: 0;\n  }\n  \n  .carousel .slick-dots {\n    bottom: -2.5vw;\n  }\n  \n  .carousel .slick-dots li button {\n    width: 20px;\n    height: 20px;\n    border: 1px solid #fff;\n    border-radius: 20px;\n  }\n  \n  .carousel .slick-dots li button:before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    content: \"\";\n    text-align: center;\n    opacity: .5;\n    color: #000;\n    background-color: #fff;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -webkit-transition: all .3s ease-in-out;\n    transition: all .3s ease-in-out;\n  }\n  \n  .carousel .slick-dots li.slick-active button, .carousel .slick-dots li:hover button {\n    border-color: tomato;\n  }\n  \n  .carousel .slick-dots li.slick-active button:before, .carousel .slick-dots li:hover button:before {\n    background-color: tomato;\n    opacity: 1;\n  }\n  \n  .carousel .slick-prev, .carousel .slick-next {\n    width: 50px;\n    height: 50px;\n    background-color: #fff;\n  }\n  \n  .carousel .slick-prev:hover, .carousel .slick-prev:focus, .carousel .slick-next:hover, .carousel .slick-next:focus {\n    color: #fff;\n    outline: none;\n    background: #fff;\n  }\n  \n  .carousel .slick-prev:before, .carousel .slick-next:before {\n    color: #000;\n    font-family: \"Raleway\", sans-serif;\n  }\n  \n  .carousel .slick-next {\n    right: -55px;\n  }\n  \n  .carousel .slick-prev {\n    left: -55px;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Checkout.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Checkout.css ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".checkout_add{\n    width: 100%;\n    margin-bottom: 10px;\nmax-height: 200px;\n\n}\n.checkout{\n   display: flex;\n   width: 100%;\n   margin-bottom: 10px;\n   background-color: white;\n}\n.checkout_title{\n    margin-right: 10px;\n    padding: 10px;\n    border-bottom: 1px solid lightgray;\n}\n", "",{"version":3,"sources":["webpack://src/Checkout.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,mBAAmB;AACvB,iBAAiB;;AAEjB;AACA;GACG,aAAa;GACb,WAAW;GACX,mBAAmB;GACnB,uBAAuB;AAC1B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;AACtC","sourcesContent":[".checkout_add{\n    width: 100%;\n    margin-bottom: 10px;\nmax-height: 200px;\n\n}\n.checkout{\n   display: flex;\n   width: 100%;\n   margin-bottom: 10px;\n   background-color: white;\n}\n.checkout_title{\n    margin-right: 10px;\n    padding: 10px;\n    border-bottom: 1px solid lightgray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CheckoutProduct.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/CheckoutProduct.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".checkoutProduct {\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.checkoutProduct__info {\n    padding-left: 20px\n}\n\n.checkoutProduct__info > button {\n    background: #f0c14b;\n    border: 1px solid;\n    margin-top: 10px;\n    border-color: #a88734 #9c7e31 #846a29;\n    color: #111;\n}\n\n.checkoutProduct__image {\n    object-fit: contain;\n    width: 180px;\n    height: 180px;\n  }\n\n.checkoutProduct__rating {\n    display: flex;\n  }\n\n.checkoutProduct__title {\n    font-size: 17px;\n    font-weight: 800;\n}", "",{"version":3,"sources":["webpack://src/CheckoutProduct.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI;AACJ;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;EACf;;AAEF;IACI,aAAa;EACf;;AAEF;IACI,eAAe;IACf,gBAAgB;AACpB","sourcesContent":[".checkoutProduct {\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.checkoutProduct__info {\n    padding-left: 20px\n}\n\n.checkoutProduct__info > button {\n    background: #f0c14b;\n    border: 1px solid;\n    margin-top: 10px;\n    border-color: #a88734 #9c7e31 #846a29;\n    color: #111;\n}\n\n.checkoutProduct__image {\n    object-fit: contain;\n    width: 180px;\n    height: 180px;\n  }\n\n.checkoutProduct__rating {\n    display: flex;\n  }\n\n.checkoutProduct__title {\n    font-size: 17px;\n    font-weight: 800;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Header.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Header.css ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header{\n    background-color:#001f3f;\n    display: flex;\n    align-items: center;\n    position: sticky;\n    z-index: 100;\n    top:0;\n    \n   \n}\n.header_logo{\n    width: 100px;\n    object-fit:contain ;\nmargin-left: 20px;\nmargin-right: 20px;\n    margin-top: 18px;\n  \n  \n}\n.header_searchIcon{\n    padding:5px;\n    height: 22px !important;\n    background-color:green;\n}\n.header_search{\n    display: flex;\n    flex: 1 1;\n   \n    \n}\n.header_searchInput{\n    height: 12px;\n    padding: 10px;\n    border: none;\n    width: 100%;\n \n}\n.header_nav{\n    display: flex;\n    justify-content:space-evenly ;\n \n}\n.header_link{\n    color:white;\n    text-decoration: none;\n}\n.header_option{\n    display: flex;\nflex-direction: column;\nmargin-left: 10px;\nmargin-right: 10px;\n}\n.header_optionOne{\n    font-size: 10px;\n\n}\n.header_optionTwo{\n    font-size: 13px;\n    font-weight: 800;}\n.header_optionBasket{\n    display: flex;\n    align-items: center;\n}\n.header_basketCount{\n    margin-left: 10px;\n    margin-right: 10px;\n}", "",{"version":3,"sources":["webpack://src/Header.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,KAAK;;;AAGT;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB,iBAAiB;AACjB,kBAAkB;IACd,gBAAgB;;;AAGpB;AACA;IACI,WAAW;IACX,uBAAuB;IACvB,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,SAAO;;;AAGX;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,WAAW;;AAEf;AACA;IACI,aAAa;IACb,6BAA6B;;AAEjC;AACA;IACI,WAAW;IACX,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB,sBAAsB;AACtB,iBAAiB;AACjB,kBAAkB;AAClB;AACA;IACI,eAAe;;AAEnB;AACA;IACI,eAAe;IACf,gBAAgB,CAAC;AACrB;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[".header{\n    background-color:#001f3f;\n    display: flex;\n    align-items: center;\n    position: sticky;\n    z-index: 100;\n    top:0;\n    \n   \n}\n.header_logo{\n    width: 100px;\n    object-fit:contain ;\nmargin-left: 20px;\nmargin-right: 20px;\n    margin-top: 18px;\n  \n  \n}\n.header_searchIcon{\n    padding:5px;\n    height: 22px !important;\n    background-color:green;\n}\n.header_search{\n    display: flex;\n    flex: 1;\n   \n    \n}\n.header_searchInput{\n    height: 12px;\n    padding: 10px;\n    border: none;\n    width: 100%;\n \n}\n.header_nav{\n    display: flex;\n    justify-content:space-evenly ;\n \n}\n.header_link{\n    color:white;\n    text-decoration: none;\n}\n.header_option{\n    display: flex;\nflex-direction: column;\nmargin-left: 10px;\nmargin-right: 10px;\n}\n.header_optionOne{\n    font-size: 10px;\n\n}\n.header_optionTwo{\n    font-size: 13px;\n    font-weight: 800;}\n.header_optionBasket{\n    display: flex;\n    align-items: center;\n}\n.header_basketCount{\n    margin-left: 10px;\n    margin-right: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Home.css ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home_image{\n \n  z-index: -1;\n  width: 100%;\n  height: auto;\n\n\n  \n \n\n  /**mask-image: linear-gradient(to bottom,rgba(0,0,0,1),rgb(0,0,0,0));*/\n  \n}\n.home{\n \n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n}\n.home_row{\n  display: flex;\n  z-index: 1;\n  margin-right: 5px;\n  margin-left: 5px;\n\n\n}\n\n\n", "",{"version":3,"sources":["webpack://src/Home.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;EACX,WAAW;EACX,YAAY;;;;;;EAMZ,sEAAsE;;AAExE;AACA;;EAEE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,gBAAgB;;;AAGlB","sourcesContent":[".home_image{\n \n  z-index: -1;\n  width: 100%;\n  height: auto;\n\n\n  \n \n\n  /**mask-image: linear-gradient(to bottom,rgba(0,0,0,1),rgb(0,0,0,0));*/\n  \n}\n.home{\n \n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n}\n.home_row{\n  display: flex;\n  z-index: 1;\n  margin-right: 5px;\n  margin-left: 5px;\n\n\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Login.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Login.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login {\n    background-color: white;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.login__logo {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    object-fit: contain;\n    width: 100px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n.login__container {\n    width: 300px;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    border: 1px solid lightgray;\n    padding: 20px;\n}\n\n.login__container > h1 {\n    font-weight: 500;\n    margin-bottom: 20px;\n  }\n\n.login__container > form > h5 {\n    margin-bottom: 5px;\n}\n\n.login__container > form > input {\n    height: 30px;\n    margin-bottom: 10px;\n    background-color: white;\n    width: 98%;\n  }\n\n.login__container > p {\n    margin-top: 15px;\n    font-size: 12px;\n}\n\n.login__signInButton {\n    background: green;\n    border-radius: 2px;\n    width: 100%;\n    height: 30px;\n    border: 1px solid;\n    margin-top: 10px;\n    border-color: #a88734 #9c7e31 #846a29;\n  }\n\n  .login__registerButton {\n    border-radius: 2px;\n    width: 100%;\n    height: 30px;\n    border: 1px solid;\n    margin-top: 10px;\n    border-color: darkgray;\n  }", "",{"version":3,"sources":["webpack://src/Login.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;EACnB;;AAEF;IACI,YAAY;IACZ,wBAAmB;IAAnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;EACrB;;AAEF;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;EACZ;;AAEF;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,qCAAqC;EACvC;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;EACxB","sourcesContent":[".login {\n    background-color: white;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.login__logo {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    object-fit: contain;\n    width: 100px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n.login__container {\n    width: 300px;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    border: 1px solid lightgray;\n    padding: 20px;\n}\n\n.login__container > h1 {\n    font-weight: 500;\n    margin-bottom: 20px;\n  }\n\n.login__container > form > h5 {\n    margin-bottom: 5px;\n}\n\n.login__container > form > input {\n    height: 30px;\n    margin-bottom: 10px;\n    background-color: white;\n    width: 98%;\n  }\n\n.login__container > p {\n    margin-top: 15px;\n    font-size: 12px;\n}\n\n.login__signInButton {\n    background: green;\n    border-radius: 2px;\n    width: 100%;\n    height: 30px;\n    border: 1px solid;\n    margin-top: 10px;\n    border-color: #a88734 #9c7e31 #846a29;\n  }\n\n  .login__registerButton {\n    border-radius: 2px;\n    width: 100%;\n    height: 30px;\n    border: 1px solid;\n    margin-top: 10px;\n    border-color: darkgray;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Product.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Product.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    z-index: 1;\n    align-items: center;\n    justify-content: flex-end;\n    margin: 10px;\n    padding: 20px;\n    width: 100%;\n    max-height: 400px;\n    min-width: 100px;\n}\n.product>img{\n    max-height: 200px;\n    width: 100%;\n    object-fit: contain;\n    margin-bottom: 15px;\n\n\n}\n.product_info{\n    height: 100px;\n    margin-bottom: 15px;\n \n}\n.product_price{\n    margin-top: 5px;\n}\n.product>button{\n    background-color: #f0c14b;\n    border: 1px solid;\n    margin-top: 10px;\n   border-color: #a88734 #9c7e31 #846a29;\n   color: #111;\n}\n.product_rating{\n  display: flex;  \n}", "",{"version":3,"sources":["webpack://src/Product.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,UAAU;IACV,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,mBAAmB;IACnB,mBAAmB;;;AAGvB;AACA;IACI,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;GACjB,qCAAqC;GACrC,WAAW;AACd;AACA;EACE,aAAa;AACf","sourcesContent":[".product{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    z-index: 1;\n    align-items: center;\n    justify-content: flex-end;\n    margin: 10px;\n    padding: 20px;\n    width: 100%;\n    max-height: 400px;\n    min-width: 100px;\n}\n.product>img{\n    max-height: 200px;\n    width: 100%;\n    object-fit: contain;\n    margin-bottom: 15px;\n\n\n}\n.product_info{\n    height: 100px;\n    margin-bottom: 15px;\n \n}\n.product_price{\n    margin-top: 5px;\n}\n.product>button{\n    background-color: #f0c14b;\n    border: 1px solid;\n    margin-top: 10px;\n   border-color: #a88734 #9c7e31 #846a29;\n   color: #111;\n}\n.product_rating{\n  display: flex;  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Subtotal.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Subtotal.css ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".subtotal{\n    display: flex;\n    flex-direction: column;\n  justify-content: space-between;\n  width: 300px;\n  height: 100px;\n  padding: 20px;\n  background-color: #f3f3f3;\n  border: 1px solid #dddddd;\n  border-radius: 3px;\n\n}\n.subtotal_gift{\n   display: flex; \n   align-items: center;\n}\n.subtotal_gift>input{\n    margin-right: 5px;\n}\n.subtotal>button{\n    background: #f0c14b;\n    border-radius: 2px;\n    width: 100%;\n    height: 30px;\n    border: 1px solid;\n  margin-top: 10px;\n  border-color: #a88734 #9c7e31 #846a29;\n  color:#111;\n}", "",{"version":3,"sources":["webpack://src/Subtotal.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;EACxB,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;;AAEpB;AACA;GACG,aAAa;GACb,mBAAmB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB,gBAAgB;EAChB,qCAAqC;EACrC,UAAU;AACZ","sourcesContent":[".subtotal{\n    display: flex;\n    flex-direction: column;\n  justify-content: space-between;\n  width: 300px;\n  height: 100px;\n  padding: 20px;\n  background-color: #f3f3f3;\n  border: 1px solid #dddddd;\n  border-radius: 3px;\n\n}\n.subtotal_gift{\n   display: flex; \n   align-items: center;\n}\n.subtotal_gift>input{\n    margin-right: 5px;\n}\n.subtotal>button{\n    background: #f0c14b;\n    border-radius: 2px;\n    width: 100%;\n    height: 30px;\n    border: 1px solid;\n  margin-top: 10px;\n  border-color: #a88734 #9c7e31 #846a29;\n  color:#111;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n}\n\nbody {\n  background-color: rgb(234, 237, 237);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;AAEA;EACE,oCAAoC;EACpC,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["* {\n  margin: 0;\n}\n\nbody {\n  background-color: rgb(234, 237, 237);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Checkout */ "./src/Checkout.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Login */ "./src/Login.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Slider */ "./src/Slider.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/App.js";










function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "app",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 2
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mt-5 carousel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 2
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/checkout",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Checkout__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 2
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

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

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Checkout.css":
/*!**************************!*\
  !*** ./src/Checkout.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Checkout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Checkout.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Checkout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Checkout.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Checkout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Checkout.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Checkout.js":
/*!*************************!*\
  !*** ./src/Checkout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkout.css */ "./src/Checkout.css");
/* harmony import */ var _Checkout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Checkout_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Subtotal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subtotal */ "./src/Subtotal.js");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateProvider */ "./src/StateProvider.js");
/* harmony import */ var _CheckoutProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckoutProduct */ "./src/CheckoutProduct.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/Checkout.js",
    _s = __webpack_require__.$Refresh$.signature();






function Checkout() {
  _s();

  const [{
    basket,
    user
  }, dispatch] = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "checkout",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      classNmae: "checkout_left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "checkout_add",
        src: "https://mindstack.in/blog/wp-content/uploads/2018/01/ecommerce-banner.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "checkout_title",
          children: "Your shoping Basket "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 5
        }, this), basket.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CheckoutProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          rating: item.rating
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 1
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "checkout_right",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Subtotal__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_s(Checkout, "VJ4eM+tywhhXHCcF3a9QLS/sKa8=", false, function () {
  return [_StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"]];
});

_c = Checkout;

var _c;

__webpack_require__.$Refresh$.register(_c, "Checkout");

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

/***/ }),

/***/ "./src/CheckoutProduct.css":
/*!*********************************!*\
  !*** ./src/CheckoutProduct.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./CheckoutProduct.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CheckoutProduct.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./CheckoutProduct.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CheckoutProduct.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./CheckoutProduct.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CheckoutProduct.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/CheckoutProduct.js":
/*!********************************!*\
  !*** ./src/CheckoutProduct.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckoutProduct_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutProduct.css */ "./src/CheckoutProduct.css");
/* harmony import */ var _CheckoutProduct_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CheckoutProduct_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StateProvider */ "./src/StateProvider.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/CheckoutProduct.js",
    _s = __webpack_require__.$Refresh$.signature();





function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton
}) {
  _s();

  const [{
    basket
  }, dispatch] = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"])();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "checkoutProduct",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "checkoutProduct__image",
      src: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "checkoutProduct__info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "checkoutProduct__title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "checkoutProduct__price",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          children: "$"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "checkoutProduct__rating",
        children: Array(rating).fill().map((_, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\uD83C\uDF1F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), !hideButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: removeFromBasket,
        children: "Remove from Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(CheckoutProduct, "dXW/EfqdTkBP7gkGEBtDKVxYOys=", false, function () {
  return [_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"]];
});

_c = CheckoutProduct;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutProduct);

var _c;

__webpack_require__.$Refresh$.register(_c, "CheckoutProduct");

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

/***/ }),

/***/ "./src/Header.css":
/*!************************!*\
  !*** ./src/Header.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Header.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Header.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Header.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ "./src/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StateProvider */ "./src/StateProvider.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/Header.js",
    _s = __webpack_require__.$Refresh$.signature();








function Header() {
  _s();

  const [{
    basket,
    user
  }, dispatch] = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_6__["useStateValue"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "header_logo",
        src: "image/Logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 27
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header_search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "header_searchInput",
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "header_searchIcon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header_nav",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/login",
        className: "header_link",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header_option",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "header_optionOne",
            children: "Hello"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 4
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "header_optionTwo",
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 4
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/house",
        className: "header_link",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header_option",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "header_optionOne",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 4
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "header_optionTwo",
            children: "& Car rental"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 4
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/",
        className: "header_link",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header_option",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "header_optionOne",
            children: "Your"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 4
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "header_optionTwo",
            children: "amshop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 4
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 4
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/checkout",
        className: "header_link",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header_optionBasket",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["ShoppingBasket"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 1
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "header_optionTwo  header_basketCount",
            children: basket === null || basket === void 0 ? void 0 : basket.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 1
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_s(Header, "VJ4eM+tywhhXHCcF3a9QLS/sKa8=", false, function () {
  return [_StateProvider__WEBPACK_IMPORTED_MODULE_6__["useStateValue"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

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

/***/ }),

/***/ "./src/Home.css":
/*!**********************!*\
  !*** ./src/Home.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ "./src/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ "./src/Product.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/Home.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "home",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "home_container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345",
          title: "Women's Crew Neck Pullover Sweater",
          price: 200,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/81Ea3fwJbiL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456",
          title: "Women's Kellen Sweater",
          price: 125,
          rating: 4,
          image: "https://m.media-amazon.com/images/I/71z1hZH2QbL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345",
          title: "Women's Crew Neck Pullover Sweater",
          price: 200,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/81Ea3fwJbiL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456",
          title: "Women's Kellen Sweater",
          price: 125,
          rating: 4,
          image: "https://m.media-amazon.com/images/I/71z1hZH2QbL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 18
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234534",
          title: "Women\u2019s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants",
          price: 20,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234534",
          title: "Women\u2019s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants",
          price: 20,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234534",
          title: "Women\u2019s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants",
          price: 20,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234534",
          title: "Women\u2019s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants",
          price: 20,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 18
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "home_row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "1234567",
          title: "ASUS Laptop L210 Ultra thin",
          price: 364,
          rating: 3,
          image: "https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "12345678",
          title: "Apple watch series 3",
          price: 169.99,
          rating: 5,
          image: "https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "123456789",
          title: "Women Padded Sport Bra Fitness",
          price: 65,
          rating: 3,
          image: "https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

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

/***/ }),

/***/ "./src/Login.css":
/*!***********************!*\
  !*** ./src/Login.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Login.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Login.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Login.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Login.js":
/*!**********************!*\
  !*** ./src/Login.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.css */ "./src/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase */ "./src/firebase.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/Login.js",
    _s = __webpack_require__.$Refresh$.signature();






function Login() {
  _s();

  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "login",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "login__logo",
        src: "logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Sign-in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "E-mail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: email,
          onChange: e => setEmail(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          value: password,
          onChange: e => setPassword(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "login__signInButton",
          children: "Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "By signing-in you agree to the amshop Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "login__registerButton",
        children: "Create your amshop Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(Login, "TSZhDBNy8CmbxXgprY/vvMmTG1Q=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

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

/***/ }),

/***/ "./src/Product.css":
/*!*************************!*\
  !*** ./src/Product.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Product.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Product.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Product.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Product.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Product.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Product.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Product.js":
/*!************************!*\
  !*** ./src/Product.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.css */ "./src/Product.css");
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Product_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StateProvider */ "./src/StateProvider.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/Product.js",
    _s = __webpack_require__.$Refresh$.signature();





function Product({
  id,
  title,
  image,
  price,
  rating
}) {
  _s();

  const [{
    basket
  }, dispatch] = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"])();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "product",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product_info"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "product_price",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
        children: "CFA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product_rating",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "\u2B50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: addToBasket,
      children: "Add to Basket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

_s(Product, "dXW/EfqdTkBP7gkGEBtDKVxYOys=", false, function () {
  return [_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"]];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

__webpack_require__.$Refresh$.register(_c, "Product");

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

/***/ }),

/***/ "./src/Slider.js":
/*!***********************!*\
  !*** ./src/Slider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/Slider.js";





function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, { ...settings,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/8.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "social-icons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-dribbble"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "details",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Women's Kellen Sweater ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "job-title",
              children: "CFA125"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 52
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/15.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "social-icons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-dribbble"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "details",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Women Padded Sport Bra Fitness", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "job-title",
              children: "UI CFA125"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 59
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/7.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "social-icons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-dribbble"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "details",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Women's Kellen Sweater", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "job-title",
              children: "CFA125"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 51
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/16.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "social-icons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-dribbble"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "details",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Women Padded Sport Bra Fitness", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "job-title",
              children: "CFA125"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 59
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_c = ImageSlider;
/* harmony default export */ __webpack_exports__["default"] = (ImageSlider);

var _c;

__webpack_require__.$Refresh$.register(_c, "ImageSlider");

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

/***/ }),

/***/ "./src/StateProvider.js":
/*!******************************!*\
  !*** ./src/StateProvider.js ***!
  \******************************/
/*! exports provided: StateContext, StateProvider, useStateValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateProvider", function() { return StateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateValue", function() { return useStateValue; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/StateProvider.js",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();

 // Prepares the dataLayer

const StateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(); // Wrap our app and provide the Data layer

const StateProvider = ({
  reducer,
  initialState,
  children
}) => {
  _s();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StateContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
}; // Pull information from the data layer

_s(StateProvider, "skVOqNGrFQuDFh+lpttAJ2AZFeA=");

_c = StateProvider;
const useStateValue = () => {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StateContext);
};

_s2(useStateValue, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

__webpack_require__.$Refresh$.register(_c, "StateProvider");

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

/***/ }),

/***/ "./src/Subtotal.css":
/*!**************************!*\
  !*** ./src/Subtotal.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Subtotal.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Subtotal.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Subtotal.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Subtotal.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./Subtotal.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Subtotal.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Subtotal.js":
/*!*************************!*\
  !*** ./src/Subtotal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Subtotal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subtotal.css */ "./src/Subtotal.css");
/* harmony import */ var _Subtotal_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Subtotal_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-format */ "./node_modules/react-currency-format/lib/currency-format.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateProvider */ "./src/StateProvider.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/reducer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/Subtotal.js",
    _s = __webpack_require__.$Refresh$.signature();








function Subtotal() {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  const [{
    basket
  }, dispatch] = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "subtotal",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_currency_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
      renderText: value => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Subtotal (", basket.length, " items): ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 49
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          className: "subtotal__gift",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this), " This order contains a gift"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)]
      }, void 0, true),
      decimalScale: 2,
      value: Object(_reducer__WEBPACK_IMPORTED_MODULE_5__["getBasketTotal"])(basket) // Part of the homework
      ,
      displayType: "text",
      thousandSeparator: true,
      prefix: "$"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Proceed to Checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Subtotal, "0ujPTSwp1bpzQdmdldKpuNZUBBI=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"], _StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"]];
});

_c = Subtotal;
/* harmony default export */ __webpack_exports__["default"] = (Subtotal);

var _c;

__webpack_require__.$Refresh$.register(_c, "Subtotal");

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

/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/*! exports provided: db, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const firebaseConfig = {
  apiKey: "AIzaSyAqQA8TOBVDfBtXBbiaJUF_Ck1HuYccUBE",
  authDomain: "amshop-45ab3.firebaseapp.com",
  projectId: "amshop-45ab3",
  storageBucket: "amshop-45ab3.appspot.com",
  messagingSenderId: "770996932180",
  appId: "1:770996932180:web:b2b6dde93d7fe8242027c1",
  measurementId: "G-6QQBFV73TN"
};
const firebaseApp = firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth();


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

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducer */ "./src/reducer.js");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StateProvider */ "./src/StateProvider.js");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/Z006DJC/Desktop/amshop/src/index.js";










react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StateProvider__WEBPACK_IMPORTED_MODULE_8__["StateProvider"], {
    initialState: _reducer__WEBPACK_IMPORTED_MODULE_7__["initialState"],
    reducer: _reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined), document.getElementById("root"));
Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_2__["default"])();

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

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! exports provided: initialState, getBasketTotal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasketTotal", function() { return getBasketTotal; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const initialState = {
  basket: [],
  user: null
}; // Selector

const getBasketTotal = basket => basket === null || basket === void 0 ? void 0 : basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state,
        basket: [...state.basket, action.item]
      };

    case 'EMPTY_BASKET':
      return { ...state,
        basket: []
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);
      }

      return { ...state,
        basket: newBasket
      };

    case "SET_USER":
      return { ...state,
        user: action.user
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

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

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Z006DJC/Desktop/amshop/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/Z006DJC/Desktop/amshop/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/Z006DJC/Desktop/amshop/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Z006DJC/Desktop/amshop/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map