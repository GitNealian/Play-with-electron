(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\n  background: red\n}\n\n.blue {\n  background: blue\n}\n\n.white {\n  background: white\n}\n\n.black {\n  background: black\n}\n\n.yellow {\n  background: yellow\n}\n\n.purple {\n  background: purple\n}\n\n.pink {\n  background: pink\n}\n\n.green {\n  background: green\n}\n\n.orange {\n  background: orange\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div el-container direction=\"vertical\" class=\"demo-box\">\n  <div el-header height=\"50px\" style=\"background:#c0c7c2;\">\n    <div style=\"margin-top: 2px;float: left;\">\n      <el-select [(model)]=\"value\" placeholder=\"请选择规模\">\n        <el-option *ngFor=\"let item of [{value: '1',label: '20*20' },\n                { value: '2', label: '40*40' },\n                { value: '3', label: '60*60' },\n                { value: '4', label: '80*80' }]\"\n          [label]=\"item.label\" [value]=\"item.value\">\n        </el-option>\n      </el-select>\n      <el-button style=\"margin-left: 20px;font-size: 18px\" type=\"primary\" (click)=\"start()\">开始</el-button>\n    </div>\n  </div>\n  <div el-main style=\"margin-top: 50px;\">\n    <div style=\"float: left;\">\n      <ng-container *ngFor=\"let row of cells\">\n        <ng-container *ngFor=\"let col of row\">\n          <div style=\"width: 10px;height: 10px;float: left;\" [class]=\"colors[col]\"></div>\n        </ng-container>\n        <div style=\"clear: both;\"></div>\n      </ng-container>\n    </div>\n    <div style=\"float: left;margin-left: 50px;\">\n      <ng-container *ngFor=\"let row of cells; let i = index\">\n        <ng-container *ngFor=\"let col of row; let j = index\">\n          <div style=\"width: 10px;height: 10px;float: left;\" [class]=\"colorStyleClass(i, j)\" (click)=\"invalid(i, j)\"></div>\n        </ng-container>\n        <div style=\"clear: both;\"></div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"box-card\">\n    <el-dialog [title]=\"'ACCOMPLISHMENT!'\" [visible]=\"dialogVisable\" [center]=\"true\" [show-close]=\"false\">\n      <span>{{dialogMsg}}</span>\n      <br>\n      <el-button style=\"float: right;\" (click)=\"closeDialog()\">确认</el-button>\n    </el-dialog>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.value = '1';
        this.title = 'game-diff';
        this.colors = ['red', 'blue', 'white', 'black', 'yellow', 'purple', 'pink', 'green', 'orange'];
        this.found = 0;
        this.dialogVisable = false;
    }
    // 改成二维数组的访问可能会快一些
    AppComponent.prototype.colorStyleClass = function (i, j) {
        var _this = this;
        var color = this.colors[this.cells[i][j]];
        this.fakeCells.forEach(function (v, index) {
            if (v[0] == i && v[1] == j) {
                color = _this.colors[_this.fakeColors[index]];
            }
        });
        return color;
    };
    AppComponent.prototype.invalid = function (i, j) {
        var _this = this;
        this.fakeCells.forEach(function (v, index) {
            if (v[0] == i && v[1] == j) {
                if (_this.fakeColors[index] != _this.cells[i][j]) {
                    _this.found++;
                    _this.fakeColors[index] = _this.cells[i][j];
                }
            }
        });
        if (this.found == 5) {
            var endTime = new Date().getTime();
            this.showDialogWithMsg('All fake cells found in \n' + ((endTime - this.startTime) / 1000).toString() + 's!!!');
        }
    };
    AppComponent.prototype.start = function () {
        this.found = 0;
        var size = Number(this.value) * 20;
        ipcRenderer.send('window-size-change', size);
        this.cells = new Array(size);
        var i = 0;
        while (i < size) {
            var j = 0;
            var ct = new Array(size);
            while (j < size) {
                ct[j] = (Math.floor((Math.random() * 9)));
                j++;
            }
            this.cells[i] = ct;
            i++;
        }
        this.fakeColors = new Array(5);
        this.fakeCells = new Array(5);
        for (var l in [0, 1, 2, 3, 4]) {
            var x = Math.floor(Math.random() * size);
            var y = Math.floor(Math.random() * size);
            var c = 0;
            do {
                c = Math.floor(Math.random() * 9);
            } while (this.cells[x][y] == c);
            this.fakeCells[l] = [x, y];
            this.fakeColors[l] = c;
        }
        this.startTime = new Date().getTime();
    };
    AppComponent.prototype.showDialogWithMsg = function (msg) {
        this.dialogMsg = msg;
        this.dialogVisable = true;
    };
    AppComponent.prototype.closeDialog = function () {
        this.dialogVisable = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var element_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! element-angular */ "./node_modules/element-angular/release/element-angular.module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import module

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                element_angular__WEBPACK_IMPORTED_MODULE_4__["ElModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nealian/Workspace/electron/game-diff/angular/game-diff/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map