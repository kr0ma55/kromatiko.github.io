(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n>\n<nav>\n  <ul>\n    <li><a routerLink=\"/first-component\" routerLinkActive=\"active\">First Component</a></li>\n    <li><a routerLink=\"/second-component\" routerLinkActive=\"active\">Second Component</a></li>\n  </ul>\n</nav> -->\n<app-custom-header></app-custom-header>\n\n\n\n\n<!-- <app-receiver-component></app-receiver-component>\n<app-sender-component></app-sender-component>\n -->\n <app-custom-footer></app-custom-footer>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid chat-container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-6 col-12 my-2\" >\n        <textarea id=\"w3review\" name=\"w3review\" rows=\"4\" cols=\"50\">\n            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.\n            </textarea>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-footer/custom-footer.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-footer/custom-footer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n      <div class=\"row tex-center\">\n        <div class=\"col-md-12 col-sm-12 col-12 h-100\">\n          Marco Rainone &reg; \n        </div>\n  \n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-header/custom-header.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-header/custom-header.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container-fluid\">\n      <div class=\"row tex-left\">\n        <div class=\"col-md-3 col-sm-3 col-10 p-0 first\">\n          <img src=\"../assets/icons/exobird.svg\" class=\"bird-icon\" alt=\"Kiwi standing on oval\">\n        </div>\n        <div class=\"col-md-9 col-sm-9 d-none d-sm-block second\">\n          <div class=\"row text-center\">\n            <div class=\"col\" *ngFor=\"let item of linkList\">\n              <span> <a (click)=\"goTo(item)\">{{item}}</a></span>\n             \n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-2 d-sm-none d-md-none  d-flex justify-content-center align-self-center third text-center\">\n          <app-mobile-menu></app-mobile-menu>\n        </div>\n      </div>\n    </div>\n  </header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-notices/custom-notices.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-notices/custom-notices.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid card-container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-xs-6 col-12 my-2\" *ngFor=\"let item of cardList\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <a href=\"#\" class=\"card-link\">Card link</a>\n            <a href=\"#\" class=\"card-link\">Another link</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mobile-menu/mobile-menu.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mobile-menu/mobile-menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"bi bi-list mobile-menu-icon btn\" (click)=\"showDropDown()\"></i>\n\n\n<div class=\"container drop-container\" *ngIf=\"showDropDownFlag\">\n    <div class=\"row menu-link \">\n       \n        <div class=\"col-12 align-self-center p-0 my-2 mobile-link\">\n            <a #ciao class=\"btn\"> LINK 1</a>\n        </div>\n        <div class=\"col-12 align-self-center p-0 my-2 mobile-link\">\n            <a class=\"btn\"> LINK 1</a>\n        </div>\n        <div class=\"col-12 align-self-center p-0 my-2 mobile-link\"> \n            <a class=\"btn\"> LINK 1</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receiver-component/receiver-component.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receiver-component/receiver-component.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scaffholder\">\n    <div class=\"d-flex p-2 main-container\">\n        <div class=\"d-flex flex-row\">\n\n            <button *ngFor=\"let item of selected\" type=\"button\" class=\"btn btn-primary position-relative mine\"\n                (click)=\"removeSelectedCard(item)\">\n                {{item}}\n                <span\n                    class=\"position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle\">\n                    <span class=\"visually-hidden\">X</span>\n                </span>\n            </button>\n\n        </div>\n\n\n        <div [formGroup]=\"form\" style=\"width: 100%!important;\">\n            <input formControlName=\"search\" type=\"text\" placeholder=\"search\">\n           \n            <div class=\"container drop-container\" *ngIf=\"lista.length > 0\">\n                <ul>\n                    <li *ngFor=\"let el of lista\">\n\n                        <span (click)=\"selectItem(el)\">\n                            {{el}}\n                            \n                        </span>\n                    </li>\n                </ul>\n            </div>\n\n\n        </div>\n\n    </div>\n</div>\n<div class=\"ps-2 bg-success\" *ngIf=\"lista.length == 0 && form.controls.search.value.length > 2\">no resul FOUND</div>\n\n\n\n<!-- <div class=\"d-flex p-2\"> <input placeholder=\"search\"></div>\n<div class=\"d-flex p-2\">\n    <span>\n        <div [formGroup]=\"form\">\n            <input formControlName=\"search\" type=\"text\" placeholder=\"search\">\n        </div>\n    </span>\n\n</div> -->\n\n\n<!-- <div class=\"row\">\n    <div class=\"col\">\n        <button *ngFor=\"let item of selected\" type=\"button\" class=\"btn btn-primary position-relative mine\"\n            (click)=\"removeSelectedCard(item)\">\n            {{item}}\n            <span\n                class=\"position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle\">\n                <span class=\"visually-hidden\">X</span>\n            </span>\n        </button>\n    </div>\n    <div class=\"col\">\n        <div [formGroup]=\"form\">\n            <input formControlName=\"search\" type=\"text\" placeholder=\"search\">\n\n            <div class=\"container drop-container\" *ngIf=\"lista.length > 0\">\n                <ul>\n                    <li *ngFor=\"let el of lista\">\n\n                        <button type=\"button\" class=\"btn btn-primary position-relative\" (click)=\"selectItem(el)\">\n                            {{el}}\n                            <span\n                                class=\"position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle\">\n                                <span class=\"visually-hidden\">New alerts</span>\n                            </span>\n                        </button>\n                    </li>\n                </ul>\n            </div>\n\n\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _custom_notices_custom_notices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-notices/custom-notices.component */ "./src/app/custom-notices/custom-notices.component.ts");
/* harmony import */ var _receiver_component_receiver_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receiver-component/receiver-component.component */ "./src/app/receiver-component/receiver-component.component.ts");






const routes = [
    { path: '', redirectTo: 'custom-notices', pathMatch: 'full' },
    { path: 'custom-notices', component: _custom_notices_custom_notices_component__WEBPACK_IMPORTED_MODULE_4__["CustomNoticesComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"] },
    { path: 'contacts', component: _receiver_component_receiver_component_component__WEBPACK_IMPORTED_MODULE_5__["ReceiverComponentComponent"] },
    { path: 'bio', component: _receiver_component_receiver_component_component__WEBPACK_IMPORTED_MODULE_5__["ReceiverComponentComponent"] },
    { path: 'snatch', component: _receiver_component_receiver_component_component__WEBPACK_IMPORTED_MODULE_5__["ReceiverComponentComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .first{\n    border:1px solid red\n}\n\n.second{\n    border:1px solid green\n}\n\n.third{\n    border:1px solid blue\n\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYXJjby5yYWlub25lXFxEZXNrdG9wXFx4RG90WmVyb1xcWERvdFplcm8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7R0FBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5maXJzdHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkXHJcbn1cclxuXHJcbi5zZWNvbmR7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyZWVuXHJcbn1cclxuXHJcbi50aGlyZHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmx1ZVxyXG5cclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'XDotZero';
        this.cardList = [1, 2, 3, 4, 5, 6, 7];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _receiver_component_receiver_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receiver-component/receiver-component.component */ "./src/app/receiver-component/receiver-component.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _test_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-service.service */ "./src/app/test-service.service.ts");
/* harmony import */ var _core_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptor.service */ "./src/app/core/interceptor.service.ts");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "./src/app/mobile-menu/mobile-menu.component.ts");
/* harmony import */ var _custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-header/custom-header.component */ "./src/app/custom-header/custom-header.component.ts");
/* harmony import */ var _custom_footer_custom_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-footer/custom-footer.component */ "./src/app/custom-footer/custom-footer.component.ts");
/* harmony import */ var _custom_notices_custom_notices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom-notices/custom-notices.component */ "./src/app/custom-notices/custom-notices.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _receiver_component_receiver_component_component__WEBPACK_IMPORTED_MODULE_5__["ReceiverComponentComponent"],
            _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_10__["MobileMenuComponent"],
            _custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_11__["CustomHeaderComponent"],
            _custom_footer_custom_footer_component__WEBPACK_IMPORTED_MODULE_12__["CustomFooterComponent"],
            _custom_notices_custom_notices_component__WEBPACK_IMPORTED_MODULE_13__["CustomNoticesComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [_test_service_service__WEBPACK_IMPORTED_MODULE_8__["TestService"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["Interceptor"],
                multi: true,
            },
            { provide: 'Window', useFactory: () => window }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-container {\n  margin-top: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcVXNlcnNcXG1hcmNvLnJhaW5vbmVcXERlc2t0b3BcXHhEb3RaZXJvXFxYRG90WmVyby9zcmNcXGFwcFxcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbn0iLCIuY2hhdC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatComponent = class ChatComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/core/interceptor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/interceptor.service.ts ***!
  \*********************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
class Interceptor {
    intercept(req, next) {
        console.log(req);
        return next.handle(req);
    }
}


/***/ }),

/***/ "./src/app/custom-footer/custom-footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/custom-footer/custom-footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1mb290ZXIvY3VzdG9tLWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/custom-footer/custom-footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-footer/custom-footer.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFooterComponent", function() { return CustomFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomFooterComponent = class CustomFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-footer',
        template: __webpack_require__(/*! raw-loader!./custom-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-footer/custom-footer.component.html"),
        styles: [__webpack_require__(/*! ./custom-footer.component.scss */ "./src/app/custom-footer/custom-footer.component.scss")]
    })
], CustomFooterComponent);



/***/ }),

/***/ "./src/app/custom-header/custom-header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/custom-header/custom-header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .second .row {\n  border: 13px saddlebrown solid;\n  border-radius: 10px;\n  background-color: white;\n}\n\nheader .second .col:first-child {\n  background-color: #9a8aab;\n}\n\nheader .second .col:nth-child(2) {\n  background-color: #edb6dc;\n}\n\nheader .second .col:nth-child(4) {\n  background-color: #fff093;\n}\n\nheader .second .col:hover {\n  background-color: white;\n}\n\nheader .second a:nth-child(2):hover {\n  background-color: #edb6dc;\n}\n\nheader .second a:nth-child(3):hover {\n  background-color: #84d3db;\n}\n\nheader .second a:nth-child(4):hover {\n  background-color: #fff093;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  font-family: Chalkduster, fantasy;\n  font-size: 20px;\n  color: saddlebrown;\n  background: #d04379;\n  background: linear-gradient(90deg, #d04379 0%, #f19e0e 45%);\n}\n\nheader .bird-icon {\n  width: 90px;\n  transform: scaleX(-1);\n}\n\nheader .mobile-menu-icon {\n  font-size: 50px;\n}\n\nheader a:hover {\n  cursor: pointer;\n  background-color: teal;\n  border: solid 1px teal;\n  border-radius: 32px;\n}\n\nheader .first {\n  /*  border: 1px solid red; */\n  border-right: none;\n  /* background-color:  white; */\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\nheader .second {\n  /* border: 1px solid red; */\n  border-left: none;\n  /* background-color: white ; */\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\nheader .third {\n  /*  border: 1px solid red; */\n  border-left: none;\n  /*  background-color: blue ; */\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWhlYWRlci9DOlxcVXNlcnNcXG1hcmNvLnJhaW5vbmVcXERlc2t0b3BcXHhEb3RaZXJvXFxYRG90WmVyby9zcmNcXGFwcFxcY3VzdG9tLWhlYWRlclxcY3VzdG9tLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VzdG9tLWhlYWRlci9jdXN0b20taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURLQTtFQUNJLHlCQUFBO0FDRko7O0FEU0E7RUFFSSx1QkFBQTtBQ1BKOztBRFdBO0VBQ0kseUJBQUE7QUNSSjs7QURXQTtFQUNJLHlCQUFBO0FDUko7O0FEV0E7RUFDSSx5QkFBQTtBQ1JKOztBRGFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSwyREFBQTtBQ1hKOztBRGNBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDWEo7O0FEYUE7RUFDSSxlQUFBO0FDVko7O0FEWUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDVEo7O0FEV0E7RUFDRyw0QkFBQTtFQUNDLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDUko7O0FEWUE7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDVEo7O0FEYUE7RUFDRyw0QkFBQTtFQUNDLGlCQUFBO0VBQ0QsOEJBQUE7RUFDQyxnQ0FBQTtFQUNBLDZCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20taGVhZGVyL2N1c3RvbS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgLnNlY29uZCAucm93e1xyXG4gICAgYm9yZGVyOiAxM3B4IHNhZGRsZWJyb3duIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oZWFkZXIgLnNlY29uZCAuY29sOmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YThhYWI7XHJcblxyXG59XHJcbmhlYWRlciAuc2Vjb25kIC5jb2w6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGI2ZGM7XHJcblxyXG59XHJcbmhlYWRlciAuc2Vjb25kIC5jb2w6bnRoLWNoaWxkKDMpIHtcclxuXHJcbn1cclxuaGVhZGVyIC5zZWNvbmQgLmNvbDpudGgtY2hpbGQoNCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjA5MztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmhlYWRlciAuc2Vjb25kIC5jb2w6aG92ZXJ7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgXHJcblxyXG59XHJcbmhlYWRlciAuc2Vjb25kIGE6bnRoLWNoaWxkKDIpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkYjZkYztcclxuXHJcbn1cclxuaGVhZGVyIC5zZWNvbmQgYTpudGgtY2hpbGQoMyk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRkM2RiO1xyXG5cclxufVxyXG5oZWFkZXIgLnNlY29uZCBhOm50aC1jaGlsZCg0KTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwOTM7XHJcblxyXG59XHJcblxyXG5cclxuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgZm9udC1mYW1pbHk6IENoYWxrZHVzdGVyLCBmYW50YXN5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHNhZGRsZWJyb3duO1xyXG4gICAgYmFja2dyb3VuZDogaHNsYSgzMzcsIDYwJSwgNTQlLCAxKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGhzbGEoMzM3LCA2MCUsIDU0JSwgMSkgMCUsIGhzbGEoMzgsIDg5JSwgNTAlLCAxKSA0NSUpO1xyXG4gICAgXHJcbn1cclxuaGVhZGVyIC5iaXJkLWljb257XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5oZWFkZXIgLm1vYmlsZS1tZW51LWljb257XHJcbiAgICBmb250LXNpemU6NTBweDtcclxufVxyXG5oZWFkZXIgYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB0ZWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcclxufVxyXG5oZWFkZXIgLmZpcnN0e1xyXG4gICAvKiAgYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlOyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG5oZWFkZXIgLnNlY29uZHtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICAgIGJvcmRlci1sZWZ0Om5vbmU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSA7ICovXHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaGVhZGVyIC50aGlyZHtcclxuICAgLyogIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICAgIGJvcmRlci1sZWZ0Om5vbmU7XHJcbiAgIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlIDsgKi9cclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcblxyXG59IiwiaGVhZGVyIC5zZWNvbmQgLnJvdyB7XG4gIGJvcmRlcjogMTNweCBzYWRkbGVicm93biBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmhlYWRlciAuc2Vjb25kIC5jb2w6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE4YWFiO1xufVxuXG5oZWFkZXIgLnNlY29uZCAuY29sOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGI2ZGM7XG59XG5cbmhlYWRlciAuc2Vjb25kIC5jb2w6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjA5Mztcbn1cblxuaGVhZGVyIC5zZWNvbmQgLmNvbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIgLnNlY29uZCBhOm50aC1jaGlsZCgyKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGI2ZGM7XG59XG5cbmhlYWRlciAuc2Vjb25kIGE6bnRoLWNoaWxkKDMpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ZDNkYjtcbn1cblxuaGVhZGVyIC5zZWNvbmQgYTpudGgtY2hpbGQoNCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMDkzO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBDaGFsa2R1c3RlciwgZmFudGFzeTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogc2FkZGxlYnJvd247XG4gIGJhY2tncm91bmQ6ICNkMDQzNzk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2QwNDM3OSAwJSwgI2YxOWUwZSA0NSUpO1xufVxuXG5oZWFkZXIgLmJpcmQtaWNvbiB7XG4gIHdpZHRoOiA5MHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbmhlYWRlciAubW9iaWxlLW1lbnUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaGVhZGVyIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIGJvcmRlcjogc29saWQgMXB4IHRlYWw7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG59XG5cbmhlYWRlciAuZmlyc3Qge1xuICAvKiAgYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZTsgKi9cbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuaGVhZGVyIC5zZWNvbmQge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSA7ICovXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuaGVhZGVyIC50aGlyZCB7XG4gIC8qICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICAvKiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSA7ICovXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/custom-header/custom-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-header/custom-header.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHeaderComponent", function() { return CustomHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_3__);




let CustomHeaderComponent = class CustomHeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.linkList = this.router.config.map(el => el.path).filter(el => el !== '');
        this.router.events.pipe(Object(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_3__["filter"])(ev => ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"])).subscribe((val) => {
            this.filterLinkListByActualRoute(val.url);
        });
    }
    goTo(route) {
        this.router.navigate([route]);
    }
    filterLinkListByActualRoute(actualRoute) {
        console.log("actualRoute", actualRoute);
        console.log("pre", this.linkList);
        this.linkList = this.router.config.map(el => el.path).filter(el => {
            if (el !== '')
                return el !== actualRoute.replace("/", '').trim();
        });
        console.log("post", this.linkList);
    }
};
CustomHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CustomHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-header',
        template: __webpack_require__(/*! raw-loader!./custom-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-header/custom-header.component.html"),
        styles: [__webpack_require__(/*! ./custom-header.component.scss */ "./src/app/custom-header/custom-header.component.scss")]
    })
], CustomHeaderComponent);



/***/ }),

/***/ "./src/app/custom-notices/custom-notices.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/custom-notices/custom-notices.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  margin-top: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLW5vdGljZXMvQzpcXFVzZXJzXFxtYXJjby5yYWlub25lXFxEZXNrdG9wXFx4RG90WmVyb1xcWERvdFplcm8vc3JjXFxhcHBcXGN1c3RvbS1ub3RpY2VzXFxjdXN0b20tbm90aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VzdG9tLW5vdGljZXMvY3VzdG9tLW5vdGljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLW5vdGljZXMvY3VzdG9tLW5vdGljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG59IiwiLmNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/custom-notices/custom-notices.component.ts":
/*!************************************************************!*\
  !*** ./src/app/custom-notices/custom-notices.component.ts ***!
  \************************************************************/
/*! exports provided: CustomNoticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNoticesComponent", function() { return CustomNoticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomNoticesComponent = class CustomNoticesComponent {
    constructor() {
        this.cardList = [1, 2, 3, 4, 5, 6, 7];
    }
    ngOnInit() {
    }
};
CustomNoticesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-notices',
        template: __webpack_require__(/*! raw-loader!./custom-notices.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-notices/custom-notices.component.html"),
        styles: [__webpack_require__(/*! ./custom-notices.component.scss */ "./src/app/custom-notices/custom-notices.component.scss")]
    })
], CustomNoticesComponent);



/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.scss":
/*!********************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-container {\n  position: absolute;\n  top: 100%;\n  left: 0%;\n  background-color: white;\n  height: 20vh;\n  border: 2px saddlebrown solid;\n  color: #edb6dc;\n  background: linear-gradient(90deg, #8bc9d5 0%, #ff146e 100%);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.menu-link .mobile-link {\n  /*  background: hsla(337, 60%, 54%, 1);\n\n   background: linear-gradient(90deg, hsla(337, 60%, 54%, 1) 0%, hsla(38, 89%, 50%, 1) 45%); */\n  color: #fff093;\n  border-radius: 15px;\n  background: linear-gradient(90deg, #74cfe2 0%, #ff4d91 100%);\n}\n\n.menu-link a {\n  color: #fff093;\n  font-size: 20px;\n}\n\n.mobile-link:hover {\n  box-shadow: 1px 5px 20px 8px teal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLW1lbnUvQzpcXFVzZXJzXFxtYXJjby5yYWlub25lXFxEZXNrdG9wXFx4RG90WmVyb1xcWERvdFplcm8vc3JjXFxhcHBcXG1vYmlsZS1tZW51XFxtb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFFQSwrQkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FES0E7RUFDRzs7OEZBQUE7RUFHQyxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNGSjs7QURJQTtFQUNJLGlDQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBib3JkZXI6IDJweCBzYWRkbGVicm93biBzb2xpZDtcclxuICAgIGNvbG9yOiAjZWRiNmRjO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDkwZGVnLCBoc2xhKDE5MCwgNDclLCA2OSUsIDEpIDAlLCBoc2xhKDMzNywgMTAwJSwgNTQlLCAxKSAxMDAlKTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4ubWVudS1saW5rIC5tb2JpbGUtbGluayB7XHJcbiAgICBcclxufVxyXG4ubWVudS1saW5rIC5tb2JpbGUtbGlua3tcclxuICAgLyogIGJhY2tncm91bmQ6IGhzbGEoMzM3LCA2MCUsIDU0JSwgMSk7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBoc2xhKDMzNywgNjAlLCA1NCUsIDEpIDAlLCBoc2xhKDM4LCA4OSUsIDUwJSwgMSkgNDUlKTsgKi9cclxuICAgIGNvbG9yOiNmZmYwOTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG45MGRlZywgaHNsYSgxOTAsIDY1JSwgNjclLCAxKSAwJSwgaHNsYSgzMzcsIDEwMCUsIDY1JSwgMSkgMTAwJSk7XHJcbn1cclxuLm1lbnUtbGluayBhe1xyXG4gICAgY29sb3I6I2ZmZjA5MztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubW9iaWxlLWxpbms6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggNXB4IDIwcHggOHB4IHRlYWw7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiAgICAiLCIuZHJvcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDIwdmg7XG4gIGJvcmRlcjogMnB4IHNhZGRsZWJyb3duIHNvbGlkO1xuICBjb2xvcjogI2VkYjZkYztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOGJjOWQ1IDAlLCAjZmYxNDZlIDEwMCUpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLm1lbnUtbGluayAubW9iaWxlLWxpbmsge1xuICAvKiAgYmFja2dyb3VuZDogaHNsYSgzMzcsIDYwJSwgNTQlLCAxKTtcblxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBoc2xhKDMzNywgNjAlLCA1NCUsIDEpIDAlLCBoc2xhKDM4LCA4OSUsIDUwJSwgMSkgNDUlKTsgKi9cbiAgY29sb3I6ICNmZmYwOTM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc0Y2ZlMiAwJSwgI2ZmNGQ5MSAxMDAlKTtcbn1cblxuLm1lbnUtbGluayBhIHtcbiAgY29sb3I6ICNmZmYwOTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1vYmlsZS1saW5rOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAyMHB4IDhweCB0ZWFsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.ts ***!
  \******************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let MobileMenuComponent = class MobileMenuComponent {
    constructor() {
        this.showDropDownFlag = false;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5);
        this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(20);
    }
    ngAfterViewChecked() {
        if (this.showDropDownFlag) {
            this.mouseover$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.ciao.nativeElement, 'mouseover');
            this.mouseout$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.ciao.nativeElement, 'mouseout');
            const tempo = this.mouseover$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(arg => {
                tempo2.unsubscribe();
                console.log('SOPRA');
            });
            const tempo2 = this.mouseout$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(arg => {
                console.log('NON SOPRA');
                tempo.unsubscribe();
            });
            /*  const subscribe = this.interval.subscribe(val => {
               this.ciao.nativeElement.style.transform = "rotate(" + val + "deg)"
         
             }); */
        }
    }
    ngOnInit() {
        /* console.log(this.ciao) */
    }
    ngAfterViewInit() {
        /*   this.mouseover$ = fromEvent( this.ciao.nativeElement, 'click');
          this.mouseover$
            .subscribe(arg => console.log(arg)); */
        /*  console.log(this.ciao) */
    }
    showDropDown() {
        this.showDropDownFlag = !this.showDropDownFlag;
    }
    bounce($event) {
        const subscribe = this.interval.subscribe(val => {
            this.ciao.nativeElement.style.transform = "rotate(" + val + "deg)";
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ciao', { static: false })
], MobileMenuComponent.prototype, "ciao", void 0);
MobileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobile-menu',
        template: __webpack_require__(/*! raw-loader!./mobile-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/mobile-menu/mobile-menu.component.html"),
        styles: [__webpack_require__(/*! ./mobile-menu.component.scss */ "./src/app/mobile-menu/mobile-menu.component.scss")]
    })
], MobileMenuComponent);



/***/ }),

/***/ "./src/app/receiver-component/receiver-component.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/receiver-component/receiver-component.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  border: 2px solid lightgrey;\n}\n\n.box {\n  width: 150px;\n  height: 150px;\n  font-size: 20px;\n  line-height: 150px;\n}\n\n.giallo {\n  background-color: yellow;\n  position: relative;\n  top: 20px;\n  left: 5px;\n}\n\n.arancione {\n  background-color: orange;\n  position: relative;\n  top: 10%;\n}\n\n.rosso {\n  background-color: red;\n  position: relative;\n}\n\nul {\n  list-style-type: none;\n}\n\n.mine {\n  height: 50px;\n}\n\ninput {\n  border: none;\n  width: 100% !important;\n  line-height: 45px;\n}\n\ntextarea:focus, input:focus {\n  outline: none;\n}\n\n.main-container {\n  width: 600px;\n}\n\n.drop-container {\n  position: relative;\n  background-color: white;\n}\n\n.scaffholder {\n  border: 2px;\n  border-style: solid;\n  /* position: absolute; */\n  height: 68px;\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZXItY29tcG9uZW50L0M6XFxVc2Vyc1xcbWFyY28ucmFpbm9uZVxcRGVza3RvcFxceERvdFplcm9cXFhEb3RaZXJvL3NyY1xcYXBwXFxyZWNlaXZlci1jb21wb25lbnRcXHJlY2VpdmVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVjZWl2ZXItY29tcG9uZW50L3JlY2VpdmVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLDJCQUFBO0FDREo7O0FES0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDRko7O0FES0U7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1FO0VBQ0UscUJBQUE7QUNISjs7QURLRTtFQUNFLFlBQUE7QUNGSjs7QURJRTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDRE47O0FESUU7RUFDRSxhQUFBO0FDREo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtFQUVBLHVCQUFBO0FDRko7O0FESUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXZlci1jb21wb25lbnQvcmVjZWl2ZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXIge1xyXG4gXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICAuZ2lhbGxvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYXJhbmNpb25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDoxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3NzbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlIDpub25lO1xyXG4gIH1cclxuICAubWluZXtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiBcclxuXHJcbn1cclxuLmRyb3AtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2NhZmZob2xkZXJ7XHJcbiAgICBib3JkZXI6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5O1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbn1cblxuLmdpYWxsbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuLmFyYW5jaW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbn1cblxuLnJvc3NvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubWluZSB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5kcm9wLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zY2FmZmhvbGRlciB7XG4gIGJvcmRlcjogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIGhlaWdodDogNjhweDtcbiAgd2lkdGg6IDYwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/receiver-component/receiver-component.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/receiver-component/receiver-component.component.ts ***!
  \********************************************************************/
/*! exports provided: ReceiverComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiverComponentComponent", function() { return ReceiverComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _test_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test-service.service */ "./src/app/test-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ReceiverComponentComponent = class ReceiverComponentComponent {
    constructor(testService) {
        this.testService = testService;
        this.listaOrigin = ["mela", "pera", "banana", "caffè", "perverso", "pervertito"];
        this.listaCommutabile = ["mela", "pera", "banana", "caffè", "perverso", "pervertito"];
        this.lista = [];
        this.selected = [];
        this.currentSelected = '';
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.form.get('search').valueChanges
            .subscribe((val) => {
            const search = val.trim();
            if (search.length == 0) {
                this.lista = [];
            }
            if (search.length > 2) {
                console.log('Search Term => ', search);
                this.lista = [...this.listaOrigin];
                if (this.selected.length > 0) {
                    for (let el of this.selected) {
                        let index2 = this.lista.indexOf(el);
                        this.lista.splice(index2, 1);
                    }
                }
                this.lista = this.lista.filter(el => { return el.indexOf(search) > -1; });
                console.log('Search lista => ', this.lista);
                console.log('Search listaOrigin => ', this.lista);
            }
        });
    }
    /* showConfig() {
      this.testService.getInfoProjectStats().pipe(
  
        filter(value => value.BimProjectCount > 5),
        tap(el => console.log("PRE TAPPED EL :", el)),
        map(el => {
          return {
            BimProjectCount: el.BimProjectCount * 2,
            NoBimProjectCount: el.NoBimProjectCount * 2
          }
        }),
        tap(el => console.log(" POST TAPPED EL :", el))
  
  
      ).subscribe(result => { console.log("RESULT:", result) })
  
    } */
    selectItem($event) {
        this.selected.push($event);
        this.selected = [...this.selected];
        this.form.controls["search"].reset('');
        this.lista = [];
    }
    removeSelectedCard(search_term) {
        var index = this.selected.indexOf(search_term); // <-- Not supported in <IE9
        if (index !== -1) {
            this.selected.splice(index, 1);
            this.form.controls["search"].reset('');
        }
        console.log(this.selected);
    }
};
ReceiverComponentComponent.ctorParameters = () => [
    { type: _test_service_service__WEBPACK_IMPORTED_MODULE_2__["TestService"] }
];
ReceiverComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receiver-component',
        template: __webpack_require__(/*! raw-loader!./receiver-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/receiver-component/receiver-component.component.html"),
        styles: [__webpack_require__(/*! ./receiver-component.component.scss */ "./src/app/receiver-component/receiver-component.component.scss")]
    })
], ReceiverComponentComponent);



/***/ }),

/***/ "./src/app/test-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/test-service.service.ts ***!
  \*****************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/esm2015/index.js");





let TestService = class TestService {
    constructor(http) {
        this.http = http;
    }
    /* getConfig() {
    
      return this.http.get<any>("https://ecp-test.enel.com/iup-ms/v1/bim/bimprojectstats").pipe(
       map((res: Response) => {
         console.log(res);
            return res;
        }),
        
          catchError(this.handleError)
      );
    }
    
    getConfig2() {
      return this.http.get<Stat>("https://ecp-test.enel.com/iup-ms/v1/bim/bimprojectstats")
    }
    
    private handleError(error: HttpErrorResponse) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }
    
    getTypedPagedMilstones() {
      return this.http.get("https://ecp-test.enel.com/iup-ms/v1/bim/bimprojectstats").pipe(
        map((res: Response) => {
          let obj = <Stat>res.json();
          this.pageResponse.total = res.json().Total;
      }),
      catchError(this.handleError)
      
      );
    } */
    getInfoProjectStats() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([{ BimProjectCount: 10,
                NoBimProjectCount: 10 },
            { BimProjectCount: 22,
                NoBimProjectCount: 22 }]);
    }
    postInfo(stat) {
        let jsonStat = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["classToPlain"])(stat);
        console.log('jsonStat' + jsonStat);
    }
};
TestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TestService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marco.rainone\Desktop\xDotZero\XDotZero\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map