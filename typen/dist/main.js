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

module.exports = ".el-header {\n    padding: 0 !important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div el-container direction=\"vertical\" class=\"demo-box\" style=\"height: 100%;\">\n  <div el-header height=\"40px\" style=\"background: #B3C0D1\">\n    <typen-header></typen-header>\n  </div>\n  <div el-container>\n    <div el-aside width=\"250px\" style=\"background: #D3DCE6\">\n      <app-sidepanel></app-sidepanel>\n    </div>\n    <div el-container direction=\"vertical\">\n      <div el-main style=\"background: #E9EEF3\">\n        <app-typeboard></app-typeboard>\n      </div>\n      <div height=\"40px\" el-footer style=\"background: #B3C0D1\">\n      </div>\n    </div>\n  </div>\n</div>\n"

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
    }
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
/* harmony import */ var element_angular_release_element_angular_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! element-angular/release/element-angular.module */ "./node_modules/element-angular/release/element-angular.module.js");
/* harmony import */ var _typen_header_typen_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typen-header/typen-header.component */ "./src/app/typen-header/typen-header.component.ts");
/* harmony import */ var _sidepanel_sidepanel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidepanel/sidepanel.component */ "./src/app/sidepanel/sidepanel.component.ts");
/* harmony import */ var _typeboard_typeboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typeboard/typeboard.component */ "./src/app/typeboard/typeboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _typen_header_typen_header_component__WEBPACK_IMPORTED_MODULE_5__["TypenHeaderComponent"],
                _sidepanel_sidepanel_component__WEBPACK_IMPORTED_MODULE_6__["SidepanelComponent"],
                _typeboard_typeboard_component__WEBPACK_IMPORTED_MODULE_7__["TypeboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                element_angular_release_element_angular_module__WEBPACK_IMPORTED_MODULE_4__["ElModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/assistent.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/assistent.service.ts ***!
  \***********************************************/
/*! exports provided: AssistentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistentService", function() { return AssistentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssistentService = /** @class */ (function () {
    function AssistentService() {
        this.database = '/home/nealian/Workspace/electron/typen/data/data.db';
        this.dbOpened = false;
        this.img_empty_base64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSgBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIADQA2QMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APqmgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPzW+LH/JU/GX/Yavf/AEe9AH6U0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB+a3xY/wCSp+Mv+w1e/wDo96AP0poAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD81vix/yVPxl/wBhq9/9HvQB+lNABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfmt8WP+Sp+Mv+w1e/8Ao96AP0poAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD81vix/yVPxl/2Gr3/0e9AH6U0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB+a3xY/5Kn4y/wCw1e/+j3oA9/8A+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgD5r8Wav8A8JB4q1nWfI+z/wBo3s155O/f5fmOX27sDOM4zgZ9KAP/2Q==';
        this.img_base64 = this.img_empty_base64;
        this.code = '';
        this.db = this.database = new SQLite3.Database(this.database, function (err) {
            if (!err) {
                this.dbOpened = true;
            }
            else {
                console.log(err);
            }
        });
    }
    AssistentService.prototype.setcharacter = function (c, refresh) {
        var _this = this;
        this.db.all('select * from data where character = ?', [c], function (err, rows) {
            if (!err) {
                if (rows.length == 1) {
                    _this.code = rows[0].code;
                    _this.img_base64 = rows[0].img;
                }
                else {
                    _this.code = '';
                    _this.img_base64 = _this.img_empty_base64;
                }
                if (refresh) {
                    refresh();
                }
            }
            else {
                console.log(err);
            }
        });
        console.log(this.code);
    };
    AssistentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AssistentService);
    return AssistentService;
}());



/***/ }),

/***/ "./src/app/services/refresher.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/refresher.service.ts ***!
  \***********************************************/
/*! exports provided: RefresherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherService", function() { return RefresherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RefresherService = /** @class */ (function () {
    function RefresherService() {
        this.changeDetectors = [];
    }
    RefresherService.prototype.add = function (detector) {
        this.changeDetectors.push(detector);
    };
    RefresherService.prototype.refresh = function () {
        this.changeDetectors.forEach(function (element) {
            element.detectChanges();
        });
    };
    RefresherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RefresherService);
    return RefresherService;
}());



/***/ }),

/***/ "./src/app/services/typen.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/typen.service.ts ***!
  \*******************************************/
/*! exports provided: TypenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypenService", function() { return TypenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _typeboard_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeboard/cell */ "./src/app/typeboard/cell.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypenService = /** @class */ (function () {
    function TypenService() {
        this.curRowIndex = 0;
        this.curColIndex = 0;
        this.stIng = false;
        this.stPaused = true;
        this.rsSpeed = 0;
        this.rsTime = 0;
        this.rsHits = 0;
        this.rsLen = 0;
        this.rsBack = 0;
        this.rsAccuracy = 0;
        this.totalKeyHit = 0;
        this.backSpaceKeyHit = 0;
        this.totalCharacter = 0;
        this.curColIndex = 0;
        this.curRowIndex = 0;
        this.inputHistory = [];
        this.inputText = '';
        this.stIng = false;
        this.stPaused = true;
    }
    // text为当前行输入的字符串
    TypenService.prototype.onType = function (text) {
        this.totalCharacter = this.curRowIndex * 12 + text.length;
        this.inputText = text;
        var cells = this.curCells();
        // 删除时字符c的状态要撤消，为了不用判断哪些是删除的字符，
        // 而每行的字符也不多，索引将所有字符状态都撤消，之后再重新设置状态
        cells.forEach(function (c) {
            c.unMark();
        });
        // 对所有输入的字符设置状态
        text.split('').forEach(function (e, i) {
            if (i < cells.length) {
                if (e == cells[i].character) {
                    cells[i].markRight();
                }
                else {
                    cells[i].markMistake();
                }
            }
        });
        if (text.length >= cells.length) {
            this.inputHistory.push(text.substring(0, cells.length)); // 将该行的输入保存
            this.nextLine(text);
        }
        this.curColIndex = this.inputText.length; // curColIndex始终为下一个要输入的字符在该行的索引
        console.log(this.curColIndex);
    };
    ;
    TypenService.prototype.calculate = function () {
        this.rsTime += 0.5;
        this.rsSpeed = this.totalCharacter / this.rsTime;
        this.rsHits = this.totalKeyHit / this.rsTime;
        this.rsLen = this.totalKeyHit / this.totalCharacter;
    };
    TypenService.prototype.start = function () {
        this.onStart();
        this.stPaused = false;
        var startTime = Date.parse(new Date().toDateString());
        setInterval(this.calculate(), 500); // 每500毫秒进行一次计算
    };
    TypenService.prototype.setText = function (text) {
        this.text = text;
        this.textArray = this.toTextArray(this.text, 32);
        this.stIng = true;
    };
    TypenService.prototype.nextLine = function (text) {
        // 有可能一个词语跨越2行，所以输入这个词时，该词的剩余部分要放到下一行的输入中
        this.inputText = text.substring(this.curCells().length);
        this.curRowIndex++;
    };
    TypenService.prototype.curCells = function () {
        return this.textArray[this.curRowIndex];
    };
    TypenService.prototype.curCharacter = function () {
        return this.textArray[this.curRowIndex][this.curColIndex].character;
    };
    // 将字符串每delta个分为一组
    TypenService.prototype.toTextArray = function (text, delta) {
        // 处理特殊字符，换行、多余的空格等等
        var textArray = [];
        // 相当于range(start=0, end=text.length, step=delta)
        Array.from({ length: (text.length) / delta + 1 }, function (v, k) { return (k * delta); }).forEach(function (e) {
            var temp = [];
            text.slice(e, e + delta).split('').forEach(function (c) {
                temp.push(new _typeboard_cell__WEBPACK_IMPORTED_MODULE_1__["Cell"](c));
            });
            console.log(temp.length);
            textArray.push(temp);
        });
        return textArray;
    };
    TypenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TypenService);
    return TypenService;
}());



/***/ }),

/***/ "./src/app/sidepanel/sidepanel.component.css":
/*!***************************************************!*\
  !*** ./src/app/sidepanel/sidepanel.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n    width: 50px;\n    text-align: right;\n}"

/***/ }),

/***/ "./src/app/sidepanel/sidepanel.component.html":
/*!****************************************************!*\
  !*** ./src/app/sidepanel/sidepanel.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin-top: 50px; width: 250px;\">\n  <div style=\"width: 217px; margin: auto;\">\n    <table style=\"text-align: left\">\n      <tr>\n        <td colspan=\"2\">\n          <img width=\"217px\" height=\"52px\" [src]=\"assistentService.img_base64\" alt=\"\">\n        </td>\n      </tr>\n      <tr>\n        <td style=\"width: 50%\">\n          <span>&nbsp;&nbsp;五笔编码：</span>\n        </td>\n        <td style=\"width: 50%\">\n          <strong style=\"font-size: 18px;\">{{assistentService.code}}</strong>\n        </td>\n      </tr>\n\n    </table>\n  </div>\n  <div style=\"width: 200px; margin: auto; margin-top: 50px;\">\n    <table style=\"text-align: left\">\n      <tr>\n        <td>总共用时：\n        </td>\n        <td class=\"data\">\n          {{typenService.rsTime}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n          平均速度：\n        </td>\n        <td class=\"data\">\n          {{typenService.rsSpeed}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n          平均击键：\n        </td>\n        <td class=\"data\">\n          {{typenService.rsHits}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n          平均码长：\n        </td>\n        <td class=\"data\">\n          {{typenService.rsLen}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n          退格次数：\n        </td>\n        <td class=\"data\">\n          {{typenService.rsBack}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n          正&nbsp;&nbsp;确&nbsp;&nbsp;率：\n        </td>\n        <td class=\"data\">\n          {{typenService.rsAccuracy}}\n        </td>\n      </tr>\n    </table>\n  </div>\n\n  <div style=\"margin-top: 30px;width:250px\">\n    <el-button-group>\n      <el-button type=\"primary\" round=\"true\" size=\"small\" [elDisabled]=\"!typenService.stIng\" (click)=\"restart()\">重来(F5)</el-button>\n      <el-button type=\"danger\" round=\"true\" size=\"small\" [elDisabled]=\"!typenService.stIng\" (click)=\"pause()\">\n        {{!typenService.stPaused ? '暂停(F6)': '开始(F6)'}}\n      </el-button>\n      <el-button type=\"primary\" round=\"true\" size=\"small\" [elDisabled]=\"!typenService.stIng\" (click)=\"terminate()\">结束(F7)</el-button>\n    </el-button-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sidepanel/sidepanel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sidepanel/sidepanel.component.ts ***!
  \**************************************************/
/*! exports provided: SidepanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidepanelComponent", function() { return SidepanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_assistent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/assistent.service */ "./src/app/services/assistent.service.ts");
/* harmony import */ var _services_refresher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/refresher.service */ "./src/app/services/refresher.service.ts");
/* harmony import */ var _services_typen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/typen.service */ "./src/app/services/typen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SidepanelComponent = /** @class */ (function () {
    function SidepanelComponent(assistentService, cd, refreshService, typenService) {
        this.assistentService = assistentService;
        this.typenService = typenService;
        refreshService.add(cd);
    }
    SidepanelComponent.prototype.ngOnInit = function () {
    };
    SidepanelComponent.prototype.restart = function () {
    };
    SidepanelComponent.prototype.pause = function () {
        if (this.typenService.stPaused) {
            this.typenService.start();
        }
    };
    SidepanelComponent.prototype.terminate = function () {
    };
    SidepanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidepanel',
            template: __webpack_require__(/*! ./sidepanel.component.html */ "./src/app/sidepanel/sidepanel.component.html"),
            styles: [__webpack_require__(/*! ./sidepanel.component.css */ "./src/app/sidepanel/sidepanel.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])),
        __metadata("design:paramtypes", [_services_assistent_service__WEBPACK_IMPORTED_MODULE_1__["AssistentService"], Object, _services_refresher_service__WEBPACK_IMPORTED_MODULE_2__["RefresherService"], _services_typen_service__WEBPACK_IMPORTED_MODULE_3__["TypenService"]])
    ], SidepanelComponent);
    return SidepanelComponent;
}());



/***/ }),

/***/ "./src/app/typeboard/cell.ts":
/*!***********************************!*\
  !*** ./src/app/typeboard/cell.ts ***!
  \***********************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(character) {
        this.character = character;
        this.styleClass = 'span-black';
    }
    Cell.prototype.markRight = function () {
        this.styleClass = 'span-green';
    };
    Cell.prototype.markMistake = function () {
        this.styleClass = 'span-red';
    };
    Cell.prototype.unMark = function () {
        this.styleClass = 'span-black';
    };
    return Cell;
}());



/***/ }),

/***/ "./src/app/typeboard/typeboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/typeboard/typeboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".span-red {\n    color: red;\n}\n.span-black {\n    color: black;\n}\n.span-green {\n    color: green;\n}\n"

/***/ }),

/***/ "./src/app/typeboard/typeboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/typeboard/typeboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 800px;margin: auto\" style=\"font-size: 24px;font-family: 'Ubuntu Mono'\">\n  <div *ngFor=\"let text of typenService.textArray; let i = index\" style=\"margin-bottom: 10px;font-size: 24px;background: #f9f6f2;padding: 5px 10px;position: relative;border-radius: 5px;\">\n    <div style=\"background: #f9f6f2;border: 1px solid #f9f6f2;\">\n      <span *ngFor=\"let c of text\" [class]=\"c.styleClass\">{{c.character}}</span>\n      <input id=\"{{'input-'+typenService.curRowIndex}}\" *ngIf=\"typenService.curRowIndex == i\" type=\"text\" [ngModel]=\"typenService.inputText\"\n        (ngModelChange)=\"onType($event)\" (keyup)=\"onKey($event)\" style=\"height:30px; font-size: 24px;font-family: 'Ubuntu Mono'; width: 780px\"\n        autofocus='autofocus' [disabled]=\"!typenService.stIng || typenService.stPaused\">\n      <input *ngIf=\"typenService.curRowIndex != i\" type=\"text\" [ngModel]=\"typenService.inputHistory[i]\" disabled=\"true\"\n        style=\"height:30px; font-size: 24px;font-family: 'Ubuntu Mono'; width: 780px\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/typeboard/typeboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/typeboard/typeboard.component.ts ***!
  \**************************************************/
/*! exports provided: TypeboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeboardComponent", function() { return TypeboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_typen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/typen.service */ "./src/app/services/typen.service.ts");
/* harmony import */ var _services_refresher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/refresher.service */ "./src/app/services/refresher.service.ts");
/* harmony import */ var _services_assistent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/assistent.service */ "./src/app/services/assistent.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TypeboardComponent = /** @class */ (function () {
    function TypeboardComponent(typenService, cd, refreshService, assistentService) {
        var _this = this;
        refreshService.add(cd);
        this.refreshService = refreshService;
        this.assistentService = assistentService;
        this.typenService = typenService;
        this.typenService.onStart = function () {
            _this.assistentService.setcharacter(_this.typenService.curCharacter(), function () { return _this.refreshService.refresh(); });
            _this.refreshService.refresh();
            document.getElementById('input-' + _this.typenService.curRowIndex).focus();
        };
    }
    // 输入时触发
    TypeboardComponent.prototype.onType = function (text) {
        var _this = this;
        this.typenService.onType(text);
        console.log(this.typenService.curColIndex);
        this.assistentService.setcharacter(this.typenService.curCharacter(), function () { return _this.refreshService.refresh(); });
        this.refreshService.refresh(); // 刷新显示
        document.getElementById('input-' + this.typenService.curRowIndex).focus();
    };
    TypeboardComponent.prototype.ngOnInit = function () {
    };
    TypeboardComponent.prototype.onKey = function (event) {
        this.typenService.totalKeyHit++;
        if (event.code == 'Backspace') {
            this.typenService.backSpaceKeyHit++;
        }
    };
    TypeboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typeboard',
            template: __webpack_require__(/*! ./typeboard.component.html */ "./src/app/typeboard/typeboard.component.html"),
            styles: [__webpack_require__(/*! ./typeboard.component.css */ "./src/app/typeboard/typeboard.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])),
        __metadata("design:paramtypes", [_services_typen_service__WEBPACK_IMPORTED_MODULE_1__["TypenService"], Object, _services_refresher_service__WEBPACK_IMPORTED_MODULE_2__["RefresherService"], _services_assistent_service__WEBPACK_IMPORTED_MODULE_3__["AssistentService"]])
    ], TypeboardComponent);
    return TypeboardComponent;
}());



/***/ }),

/***/ "./src/app/typen-header/typen-header.component.css":
/*!*********************************************************!*\
  !*** ./src/app/typen-header/typen-header.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typen-header/typen-header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/typen-header/typen-header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<el-button (click)=\"openText()\">打开</el-button>\n\n"

/***/ }),

/***/ "./src/app/typen-header/typen-header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/typen-header/typen-header.component.ts ***!
  \********************************************************/
/*! exports provided: TypenHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypenHeaderComponent", function() { return TypenHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_typen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/typen.service */ "./src/app/services/typen.service.ts");
/* harmony import */ var _services_refresher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/refresher.service */ "./src/app/services/refresher.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TypenHeaderComponent = /** @class */ (function () {
    function TypenHeaderComponent(cd, service, refreshService) {
        this.typenService = service;
        refreshService.add(cd);
        this.refreshService = refreshService;
    }
    TypenHeaderComponent.prototype.ngOnInit = function () {
    };
    TypenHeaderComponent.prototype.openText = function () {
        var _this = this;
        dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'Text', extensions: ['txt'] }
            ]
        }, function (filePaths) {
            _this.typenService.setText(fs.readFileSync(filePaths[0], 'utf-8'));
            _this.refreshService.refresh();
        });
    };
    TypenHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typen-header',
            styles: [__webpack_require__(/*! ./typen-header.component.css */ "./src/app/typen-header/typen-header.component.css")],
            template: __webpack_require__(/*! ./typen-header.component.html */ "./src/app/typen-header/typen-header.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])),
        __metadata("design:paramtypes", [Object, _services_typen_service__WEBPACK_IMPORTED_MODULE_1__["TypenService"], _services_refresher_service__WEBPACK_IMPORTED_MODULE_2__["RefresherService"]])
    ], TypenHeaderComponent);
    return TypenHeaderComponent;
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

module.exports = __webpack_require__(/*! /home/nealian/Workspace/electron/typen/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map