webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_company_list_company_list_component__ = __webpack_require__("../../../../../src/app/company/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_edit_company_edit_component__ = __webpack_require__("../../../../../src/app/company/company-edit/company-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contact/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_edit_contact_edit_component__ = __webpack_require__("../../../../../src/app/contact/contact-edit/contact-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'company-list', component: __WEBPACK_IMPORTED_MODULE_2__company_company_list_company_list_component__["a" /* CompanyListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'company-edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__company_company_edit_company_edit_component__["a" /* CompanyEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact-list', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_list_contact_list_component__["a" /* ContactListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact-edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_edit_contact_edit_component__["a" /* ContactEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__["a" /* AuthGuard */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-buttons {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <div fxLayoutAlign=\"space-between center\" class=\"nav-buttons\">\n    <button md-button [routerLink]=\"['/home']\">AngularFire</button>\n    <div *ngIf=\"!(authService.user$ | async)?.uid\">\n      <button md-button (click)=\"authService.login()\">Login</button>\n\n    </div>\n\n    <div *ngIf=\"(authService.user$ | async)?.uid\">\n      <button md-button [routerLink]=\"['/company-list']\">Companies</button>\n      <button md-button [routerLink]=\"['/contact-list']\">Contacts</button>\n      <button md-button (click)=\"authService.logout()\">Logout</button>\n\n\n    </div>\n  </div>\n</md-toolbar>\n\n\n<div>\n  <div fxFlexOffset.gt-sm=\"15%\" fxFlex.gt-sm=\"70%\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        // af.object('connected').valueChanges().subscribe((data) => {
        //   console.log(data);
        // })
        this.authService = authService;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_storage__ = __webpack_require__("../../../../firebase/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__company_company_edit_company_edit_component__ = __webpack_require__("../../../../../src/app/company/company-edit/company-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__company_company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__company_company_list_company_list_component__ = __webpack_require__("../../../../../src/app/company/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_contact_service__ = __webpack_require__("../../../../../src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_edit_contact_edit_component__ = __webpack_require__("../../../../../src/app/contact/contact-edit/contact-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contact/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // global firebase storage javascript





















// Initialize Firebase
var firabaseConfig = {
    apiKey: 'AIzaSyCR52-p95gf2tH9H6z4MJtBmxuO8Ad3HJ0',
    authDomain: 'angularcrm-f5b82.firebaseapp.com',
    databaseURL: 'https://angularcrm-f5b82.firebaseio.com',
    projectId: 'angularcrm-f5b82',
    storageBucket: 'angularcrm-f5b82.appspot.com',
    messagingSenderId: '379020019999'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__company_company_edit_company_edit_component__["a" /* CompanyEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__company_company_list_company_list_component__["a" /* CompanyListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__contact_contact_edit_contact_edit_component__["a" /* ContactEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__contact_contact_list_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firabaseConfig),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_17__contact_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_20__auth_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.user$
            .map(function (user) {
            if (user && user.uid)
                return true;
            else
                _this.router.navigate(['/home']);
            return false;
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.user$ = this.afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (_) { return _this.router.navigate(['company-list']); })
            .catch(function (error) { return console.log('auth error', error); });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/home']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-edit/company-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-edit/company-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Company Edit</h1>\n<md-card *ngIf=\"company$ | async as company\">\n  <md-input-container>\n    <input type=\"text\" mdInput [(ngModel)]=\"company.name\">\n  </md-input-container>\n\n  <md-card-actions align=\"right\">\n    <button md-button (click)=\"saveCompany(company)\">Save</button>\n    <!-- <button md-button (click)=\"editCompany(company)\">Edit</button> -->\n    <button md-button (click)=\"removeCompany(company)\">Remove</button>\n    \n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/company/company-edit/company-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyEditComponent = (function () {
    function CompanyEditComponent(router, activatedRoute, companyService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.companyService = companyService;
        this.company$ = this.companyService.company$;
    }
    CompanyEditComponent.prototype.ngOnInit = function () {
        this.companyKey = this.activatedRoute.snapshot.params['id'];
        this.isNewCompany = this.companyKey === 'new';
        //eğer companyKey new değilse ilgili id e bağlı ürünü getir new ise FirebaseObjectObservable türünde boş bir company nesnesi yarat
        !this.isNewCompany ? this.getCompany() : this.company$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of({});
        // if (!this.isNewCompany) {
        //   this.getCompany();
        // }
    };
    CompanyEditComponent.prototype.getCompany = function () {
        this.company$ = this.companyService.getCompany(this.companyKey);
    };
    CompanyEditComponent.prototype.saveCompany = function (company) {
        var _this = this;
        var save = this.isNewCompany
            ? this.companyService.saveCompany(company)
            : this.companyService.editCompany(company);
        save.then(function (_) { return _this.router.navigate(['company-list']); });
    };
    // editCompany(company) {
    //   this.companyService.editCompany(company);
    // }
    CompanyEditComponent.prototype.removeCompany = function (company) {
        var _this = this;
        this.companyService.removeCompany(company)
            .then(function (_) { return _this.router.navigate(['company-list']); });
    };
    return CompanyEditComponent;
}());
CompanyEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-company-edit',
        template: __webpack_require__("../../../../../src/app/company/company-edit/company-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-edit/company-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]) === "function" && _c || Object])
], CompanyEditComponent);

var _a, _b, _c;
//# sourceMappingURL=company-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company-list/company-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button[md-fab] {\r\n    position: fixed;\r\n    bottom: 25px;\r\n    right: 25px;\r\n}\r\n\r\nmd-card {\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Companies</h1>\n<md-card *ngFor=\"let company of companies$ | async\" fxLayoutAlign=\"space-between center\">\n  <span>{{company.name}}</span>\n  <button md-button [routerLink]=\"['/company-edit',company.$key]\">Edit</button>\n</md-card>\n\n<button md-fab [routerLink]=\"['/company-edit/new']\"><md-icon>add</md-icon></button>\n"

/***/ }),

/***/ "../../../../../src/app/company/company-list/company-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyListComponent = (function () {
    function CompanyListComponent(companyService) {
        this.companyService = companyService;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompanyListComponent.prototype.getCompanies = function () {
        this.companies$ = this.companyService.getCompanies();
    };
    return CompanyListComponent;
}());
CompanyListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-company-list',
        template: __webpack_require__("../../../../../src/app/company/company-list/company-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company-list/company-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]) === "function" && _a || Object])
], CompanyListComponent);

var _a;
//# sourceMappingURL=company-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyService = (function () {
    function CompanyService(db) {
        this.db = db;
        this.company$ = this.db.object('company');
        this.companies$ = this.db.list('companies');
    }
    CompanyService.prototype.getCompanies = function () {
        return this.companies$
            .catch(this.errorHandler);
    };
    CompanyService.prototype.getCompany = function (companyKey) {
        return this.db.object("companies/" + companyKey)
            .catch(this.errorHandler);
    };
    CompanyService.prototype.saveCompany = function (company) {
        return this.companies$.push(company)
            .then(function (_) { return console.log("success"); })
            .catch(function (error) { return console.log(error); });
        //obje üzerinde kullanımı
        // this.company$.set({ name: company.name })
        //promise
        //   // this.company$.set(company)
        //   .then(_ => console.log('Success'))
        //   .catch(error => console.log(error));
        //observable
        // Observable.from(this.company$.set({ name: company.name }))
        //   .catch(error => Observable.throw(error));
    };
    CompanyService.prototype.editCompany = function (company) {
        return this.companies$.update(company.$key, company)
            .then(function (_) { return console.log('Success'); })
            .catch(function (error) { return console.log(error); });
    };
    CompanyService.prototype.removeCompany = function (company) {
        // return koymak. kullanmak istediğim yer için then ile durum yönetebilmemi sağlar. işlem başarılıysa ilgili yerlerde yönlendireceğim.
        return this.companies$.remove(company.$key)
            .then(function (_) { return console.log('Success'); })
            .catch(function (error) { return console.log(error); });
        // tüm objeyi siler
        //   this.company$.remove()
        //     .then(_ => console.log('Success'))
        //     .catch(error => console.log(error))
    };
    CompanyService.prototype.errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact-edit/contact-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact-edit/contact-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Contact Edit</h1>\n<md-card>\n  <div>\n    <img *ngIf=\"contact.imageUrl\" [src]=\"contact.imageUrl\" alt=\"contact image profile\">\n    <input type=\"file\" *ngIf=\"!isNewContact\" (change)=\"uploadFile($event)\">\n  </div>\n  <md-input-container>\n    <input type=\"text\" mdInput [(ngModel)]=\"contact.name\">\n  </md-input-container>\n\n  <div *ngIf=\"!isNewContact\">\n    <md-select placeholder=\"company\" [(ngModel)]=\"selectedCompany\">\n      <md-option *ngFor=\"let company of companies$ | async\" [value]=\"company\">{{company.name}}</md-option>\n    </md-select>\n    <button md-raised-button (click)=\"addCompany()\">Add Company</button>\n    <md-list>\n      <md-list-item *ngFor=\"let company of contactCompanies\">{{company.name}}</md-list-item>\n    </md-list>\n  </div>\n\n  <md-card-actions align=\"right\">\n    <button md-button (click)=\"saveContact(contact)\">Save</button>\n    <!-- <button md-button (click)=\"editContact(contact)\">Edit</button> -->\n    <button md-button (click)=\"removeContact(contact)\">Remove</button>\n\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/contact/contact-edit/contact-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("../../../../../src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactEditComponent = (function () {
    function ContactEditComponent(router, activatedRoute, contactService, companyService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contactService = contactService;
        this.companyService = companyService;
        this.contact = { name: '' };
        this.contactCompanies = [];
    }
    ContactEditComponent.prototype.ngOnInit = function () {
        this.companies$ = this.companyService.getCompanies();
        this.contactKey = this.activatedRoute.snapshot.params['id'];
        this.isNewContact = this.contactKey === 'new';
        // !this.isNewContact ? this.getContact() : this.contact$ = Observable.of({}) as FirebaseObjectObservable<Contact>
        if (!this.isNewContact) {
            this.getContact();
        }
        ;
    };
    ContactEditComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        var storageRef = __WEBPACK_IMPORTED_MODULE_0_firebase_app__["storage"]().ref("contacts/" + (this.contactKey + file.name));
        storageRef.put(file)
            .then(function (uploadTask) { return _this.contact.imageUrl = uploadTask.downloadURL; });
    };
    ContactEditComponent.prototype.addCompany = function () {
        this.contact.contactCompanies[this.selectedCompany.$key] = { name: this.selectedCompany.name };
        this.setContactCompanies();
    };
    ContactEditComponent.prototype.getContact = function () {
        var _this = this;
        this.contactService.getContact(this.contactKey)
            .subscribe(function (contact) {
            _this.contact = contact;
            _this.setContactCompanies();
        });
    };
    ContactEditComponent.prototype.setContactCompanies = function () {
        var _this = this;
        if (this.contact.contactCompanies == null) {
            this.contact.contactCompanies = {};
        }
        ;
        this.contactCompanies = Object.keys(this.contact.contactCompanies).map(function (key) { return _this.contact.contactCompanies[key]; });
    };
    ContactEditComponent.prototype.saveContact = function (contact) {
        var _this = this;
        var save = this.isNewContact
            ? this.contactService.saveContact(contact)
            : this.contactService.editContact(contact);
        save.then(function (_) { return _this.router.navigate(['contact-list']); });
    };
    ContactEditComponent.prototype.removeContact = function (contact) {
        var _this = this;
        this.contactService.removeContact(contact)
            .then(function (_) { return _this.router.navigate(['contact-list']); });
    };
    return ContactEditComponent;
}());
ContactEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-contact-edit',
        template: __webpack_require__("../../../../../src/app/contact/contact-edit/contact-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact-edit/contact-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */]) === "function" && _d || Object])
], ContactEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact-list/contact-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button[md-fab] {\r\n    position: fixed;\r\n    bottom: 25px;\r\n    right: 25px;\r\n}\r\n\r\nmd-card {\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayoutAlign=\"space-between center\">\n  <h1>Contacts</h1>\n  <md-select placeholder=\"company\" (change)=\"contactService.subject$.next($event.value)\">\n    <md-option [value]=\"undefined\">All</md-option>\n    <md-option *ngFor=\"let company of companies$ | async\" [value]=\"company.$key\">{{company.name}}</md-option>\n  </md-select>\n</div>\n<md-card *ngFor=\"let contact of contacts$ | async\" fxLayoutAlign=\"space-between center\">\n  <span>{{contact.name}}</span>\n  <button md-button [routerLink]=\"['/contact-edit', contact.$key]\">Edit</button>\n</md-card>\n<button md-fab [routerLink]=\"['/contact-edit/new']\">\n  <md-icon>add</md-icon>\n</button>"

/***/ }),

/***/ "../../../../../src/app/contact/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("../../../../../src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactListComponent = (function () {
    function ContactListComponent(companyService, contactService) {
        this.companyService = companyService;
        this.contactService = contactService;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.companies$ = this.companyService.getCompanies();
        this.getContacts();
    };
    ContactListComponent.prototype.getContacts = function () {
        this.contacts$ = this.contactService.getContacts();
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__("../../../../../src/app/contact/contact-list/contact-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact-list/contact-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__company_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__company_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]) === "function" && _b || Object])
], ContactListComponent);

var _a, _b;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactService = (function () {
    function ContactService(db) {
        this.db = db;
        this.subject$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.contact$ = this.db.object('contact');
        this.contacts$ = this.db.list('contacts');
    }
    ContactService.prototype.getContacts = function () {
        var _this = this;
        return this.subject$
            .switchMap(function (companyKey) { return companyKey === undefined
            ? _this.contacts$
            : _this.db.list("companyContacts/" + companyKey); })
            .catch(this.errorHandler);
        // return this.db.list(`contacts`, {
        //   query: {
        //     orderByChild: 'companyKey',
        //     equalTo: companyKey
        //   }
        // })
        //   .catch(this.errorHandler);
    };
    ContactService.prototype.getContact = function (contactKey) {
        return this.db.object("contacts/" + contactKey)
            .catch(this.errorHandler);
    };
    // obs$: Observable<Observable[]>;
    ContactService.prototype.companyContactsJoin = function (companyKey) {
        var _this = this;
        return this.db.list("companyContacts/" + companyKey)
            .map(function (contactKeys) { return contactKeys
            .map(function (contact) { return _this.db.object("contacts/" + contact.$key); }); })
            .switchMap(function (contactObsArray) { return contactObsArray.length >= 1
            ? __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(contactObsArray)
            : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); })
            .catch(this.errorHandler);
    };
    ContactService.prototype.saveContact = function (contact) {
        return this.contacts$.push(contact)
            .then(function (_) { return console.log('success'); })
            .catch(function (error) { return console.log(error); });
    };
    ContactService.prototype.editContact = function (contact) {
        var updateContact = {};
        updateContact["contacts/" + contact.$key] = contact;
        Object.keys(contact.contactCompanies).forEach(function (companyKey) {
            updateContact["companyContacts/" + companyKey + "/" + contact.$key] = { name: contact.name };
        });
        return this.db.object('/').update(updateContact)
            .then(function (_) { return console.log('success'); })
            .catch(function (error) { return console.log(error); });
    };
    ContactService.prototype.removeContact = function (contact) {
        var removeContact = {};
        removeContact["contacts/" + contact.$key] = null;
        Object.keys(contact.contactCompanies).forEach(function (companyKey) {
            removeContact["companyContacts/" + companyKey + "/" + contact.$key] = null;
        });
        return this.db.object('/').update(removeContact)
            .then(function (_) { return console.log('success'); })
            .catch(function (error) { return console.log(error); });
    };
    ContactService.prototype.errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message);
    };
    return ContactService;
}());
ContactService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map