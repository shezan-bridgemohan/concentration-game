(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shezan1\OneDrive - Discovery\Desktop\assessments\concentration-game\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "fwWq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'concentration-game';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tool-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_1__["ToolBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "fwWq");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__["ToolBarComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "fwWq":
/*!************************************************!*\
  !*** ./src/app/tool-bar/tool-bar.component.ts ***!
  \************************************************/
/*! exports provided: ToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponent", function() { return ToolBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ToolBarComponent {
    constructor() { }
    resetPlayers() {
        localStorage.removeItem("player1");
        localStorage.removeItem("player2");
    }
    ngOnInit() {
    }
}
ToolBarComponent.ɵfac = function ToolBarComponent_Factory(t) { return new (t || ToolBarComponent)(); };
ToolBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolBarComponent, selectors: [["app-tool-bar"]], decls: 6, vars: 0, consts: [["color", "primary", 1, "d-flex", "justify-content-between", 2, "background-color", "rgba(255, 255, 255, 0.35)"], [2, "font-size", "1.5em"], ["type", "submit", "routerLink", "/", 1, "btn", "btn-danger", "btn-lg", 3, "click"]], template: function ToolBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Memory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolBarComponent_Template_button_click_4_listener() { return ctx.resetPlayers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Exit Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sLWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "jBAD":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function GameComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It's your turn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_18_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const shuffledCard_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cardClick(shuffledCard_r3.id, shuffledCard_r3.value, shuffledCard_r3.color); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shuffledCard_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", shuffledCard_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", shuffledCard_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It's your turn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GameComponent {
    constructor() {
        //========================== Variables
        this.player1Name = localStorage.getItem("player1");
        this.player2Name = localStorage.getItem("player2");
        this.player1Score = 0;
        this.player2Score = 0;
        this.numberOfCards = 54;
        this.clickCount = 0;
        this.player1Turn = true;
        this.winnerMessage = '';
        this.SelectedCard1 = {
            id: '',
            value: '',
            color: ''
        };
        this.SelectedCard2 = {
            id: '',
            value: '',
            color: ''
        };
        //========================== Cards JSON object
        this.playingCards = [
            {
                suite: "clubs",
                value: "A",
                color: "black",
                id: "Clubs Ace",
                img: "./assets/img/cards/clubs-A.png"
            },
            {
                suite: "clubs",
                value: "2",
                color: "black",
                id: "Clubs 2",
                img: "./assets/img/cards/clubs-2.png"
            },
            {
                suite: "clubs",
                value: "3",
                color: "black",
                id: "Clubs 3",
                img: "./assets/img/cards/clubs-3.png"
            },
            {
                suite: "clubs",
                value: "4",
                color: "black",
                id: "Clubs 4",
                img: "./assets/img/cards/clubs-4.png"
            },
            {
                suite: "clubs",
                value: "5",
                color: "black",
                id: "Clubs 5",
                img: "./assets/img/cards/clubs-5.png"
            },
            {
                suite: "clubs",
                value: "6",
                color: "black",
                id: "Clubs 6",
                img: "./assets/img/cards/clubs-6.png"
            },
            {
                suite: "clubs",
                value: "7",
                color: "black",
                id: "Clubs 7",
                img: "./assets/img/cards/clubs-7.png"
            },
            {
                suite: "clubs",
                value: "8",
                color: "black",
                id: "Clubs 8",
                img: "./assets/img/cards/clubs-8.png"
            },
            {
                suite: "clubs",
                value: "9",
                color: "black",
                id: "Clubs 9",
                img: "./assets/img/cards/clubs-9.png"
            },
            {
                suite: "clubs",
                value: "10",
                color: "black",
                id: "Clubs 10",
                img: "./assets/img/cards/clubs-10.png"
            },
            {
                suite: "clubs",
                value: "J",
                color: "black",
                id: "Clubs Jack",
                img: "./assets/img/cards/clubs-J.png"
            },
            {
                suite: "clubs",
                value: "Q",
                color: "black",
                id: "Clubs Queen",
                img: "./assets/img/cards/clubs-Q.png"
            },
            {
                suite: "clubs",
                value: "K",
                color: "black",
                id: "Clubs King",
                img: "./assets/img/cards/clubs-K.png"
            },
            {
                suite: "diamonds",
                value: "A",
                color: "red",
                id: "Diamonds Ace",
                img: "./assets/img/cards/diamonds-A.png"
            },
            {
                suite: "diamonds",
                value: "2",
                color: "red",
                id: "Diamonds 2",
                img: "./assets/img/cards/diamonds-2.png"
            },
            {
                suite: "diamonds",
                value: "3",
                color: "red",
                id: "Diamonds 3",
                img: "./assets/img/cards/diamonds-3.png"
            },
            {
                suite: "diamonds",
                value: "4",
                color: "red",
                id: "Diamonds 4",
                img: "./assets/img/cards/diamonds-4.png"
            },
            {
                suite: "diamonds",
                value: "5",
                color: "red",
                id: "Diamonds 5",
                img: "./assets/img/cards/diamonds-5.png"
            },
            {
                suite: "diamonds",
                value: "6",
                color: "red",
                id: "Diamonds 6",
                img: "./assets/img/cards/diamonds-6.png"
            },
            {
                suite: "diamonds",
                value: "7",
                color: "red",
                id: "Diamonds 7",
                img: "./assets/img/cards/diamonds-7.png"
            },
            {
                suite: "diamonds",
                value: "8",
                color: "red",
                id: "Diamonds 8",
                img: "./assets/img/cards/diamonds-8.png"
            },
            {
                suite: "diamonds",
                value: "9",
                color: "red",
                id: "Diamonds 9",
                img: "./assets/img/cards/diamonds-9.png"
            },
            {
                suite: "diamonds",
                value: "10",
                color: "red",
                id: "Diamonds 10",
                img: "./assets/img/cards/diamonds-10.png"
            },
            {
                suite: "diamonds",
                value: "J",
                color: "red",
                id: "Diamonds Jack",
                img: "./assets/img/cards/diamonds-J.png"
            },
            {
                suite: "diamonds",
                value: "Q",
                color: "red",
                id: "Diamonds Queen",
                img: "./assets/img/cards/diamonds-Q.png"
            },
            {
                suite: "diamonds",
                value: "K",
                color: "red",
                id: "Diamonds King",
                img: "./assets/img/cards/diamonds-K.png"
            },
            {
                suite: "hearts",
                value: "A",
                color: "red",
                id: "Hearts Ace",
                img: "./assets/img/cards/hearts-A.png"
            },
            {
                suite: "hearts",
                value: "2",
                color: "red",
                id: "Hearts 2",
                img: "./assets/img/cards/hearts-2.png"
            },
            {
                suite: "hearts",
                value: "3",
                color: "red",
                id: "Hearts 3",
                img: "./assets/img/cards/hearts-3.png"
            },
            {
                suite: "hearts",
                value: "4",
                color: "red",
                id: "Hearts 4",
                img: "./assets/img/cards/hearts-4.png"
            },
            {
                suite: "hearts",
                value: "5",
                color: "red",
                id: "Hearts 5",
                img: "./assets/img/cards/hearts-5.png"
            },
            {
                suite: "hearts",
                value: "6",
                color: "red",
                id: "Hearts 6",
                img: "./assets/img/cards/hearts-6.png"
            },
            {
                suite: "hearts",
                value: "7",
                color: "red",
                id: "Hearts 7",
                img: "./assets/img/cards/hearts-7.png"
            },
            {
                suite: "hearts",
                value: "8",
                color: "red",
                id: "Hearts 8",
                img: "./assets/img/cards/hearts-8.png"
            },
            {
                suite: "hearts",
                value: "9",
                color: "red",
                id: "Hearts 9",
                img: "./assets/img/cards/hearts-9.png"
            },
            {
                suite: "hearts",
                value: "10",
                color: "red",
                id: "Hearts 10",
                img: "./assets/img/cards/hearts-10.png"
            },
            {
                suite: "hearts",
                value: "J",
                color: "red",
                id: "Hearts Jack",
                img: "./assets/img/cards/hearts-J.png"
            },
            {
                suite: "hearts",
                value: "Q",
                color: "red",
                id: "Hearts Queen",
                img: "./assets/img/cards/hearts-Q.png"
            },
            {
                suite: "hearts",
                value: "K",
                color: "red",
                id: "Hearts King",
                img: "./assets/img/cards/hearts-K.png"
            },
            {
                suite: "spades",
                value: "A",
                color: "black",
                id: "Spades Ace",
                img: "./assets/img/cards/spades-A.png"
            },
            {
                suite: "spades",
                value: "2",
                color: "black",
                id: "Spades 2",
                img: "./assets/img/cards/spades-2.png"
            },
            {
                suite: "spades",
                value: "3",
                color: "black",
                id: "Spades 3",
                img: "./assets/img/cards/spades-3.png"
            },
            {
                suite: "spades",
                value: "4",
                color: "black",
                id: "Spades 4",
                img: "./assets/img/cards/spades-4.png"
            },
            {
                suite: "spades",
                value: "5",
                color: "black",
                id: "Spades 5",
                img: "./assets/img/cards/spades-5.png"
            },
            {
                suite: "spades",
                value: "6",
                color: "black",
                id: "Spades 6",
                img: "./assets/img/cards/spades-6.png"
            },
            {
                suite: "spades",
                value: "7",
                color: "black",
                id: "Spades 7",
                img: "./assets/img/cards/spades-7.png"
            },
            {
                suite: "spades",
                value: "8",
                color: "black",
                id: "Spades 8",
                img: "./assets/img/cards/spades-8.png"
            },
            {
                suite: "spades",
                value: "9",
                color: "black",
                id: "Spades 9",
                img: "./assets/img/cards/spades-9.png"
            },
            {
                suite: "spades",
                value: "10",
                color: "black",
                id: "Spades 10",
                img: "./assets/img/cards/spades-10.png"
            },
            {
                suite: "spades",
                value: "J",
                color: "black",
                id: "Spades Jack",
                img: "./assets/img/cards/spades-J.png"
            },
            {
                suite: "spades",
                value: "Q",
                color: "black",
                id: "Spades Queen",
                img: "./assets/img/cards/spades-Q.png"
            },
            {
                suite: "spades",
                value: "K",
                color: "black",
                id: "Spades King",
                img: "./assets/img/cards/spades-K.png"
            },
            {
                suite: "red",
                value: "joker",
                color: "joker",
                id: "red-joker",
                img: "./assets/img/cards/joker-red.png"
            },
            {
                suite: "black",
                value: "joker",
                color: "joker",
                id: "black-joker",
                img: "./assets/img/cards/joker-black.png"
            }
        ];
        this.shuffledCards = this.shuffle(this.playingCards);
    }
    //========================== Functions
    flipCards() {
        this.shuffledCards.forEach((element) => {
            document.getElementById(element.id).classList.add('card-img-back'); //Flip unmatched cards
        });
    }
    removeCards() {
        document.getElementById(this.SelectedCard1.id).remove(); //Remove matched card 1 from board
        document.getElementById(this.SelectedCard2.id).remove(); //Remove matched card 2 from board
    }
    reset() {
        this.clickCount = 0;
        this.SelectedCard1.id = '';
        this.SelectedCard1.value = '';
        this.SelectedCard1.color = '';
        this.SelectedCard2.id = '';
        this.SelectedCard2.value = '';
        this.SelectedCard2.color = '';
        this.flipCards();
    }
    incrementScore(player1Turn) {
        //=====Increment Player 1 Score
        if (this.player1Turn == true) {
            this.player1Score += 10;
        }
        //=====Increment Player 2 Score
        else if (this.player1Turn == false) {
            this.player2Score += 10;
        }
    }
    winner() {
        if (this.numberOfCards < 2) {
            // if (this.numberOfCards < 50) {
            if (this.player1Score > this.player2Score) {
                this.winnerMessage = "The winner is Player 1 !";
                document.getElementById('p1-card').classList.remove('opaque');
                document.getElementById('p1-card').classList.add('bg-green');
                document.getElementById('p2-card').classList.add('bg-red');
            }
            else if (this.player2Score > this.player1Score) {
                this.winnerMessage = "The winner is Player 2 !";
                document.getElementById('p2-card').classList.remove('opaque');
                document.getElementById('p2-card').classList.add('bg-green');
                document.getElementById('p1-card').classList.add('bg-red');
            }
            else if (this.player1Score == this.player2Score) {
                this.winnerMessage = "The game ends in a tie !";
            }
            this.sound('winner');
            this.player1Turn = null; //Switch Players turn
            alert(this.winnerMessage);
        }
    }
    sound(state) {
        state = document.getElementById(state + "-sound");
        if (state != null) {
            state.play();
        }
    }
    matchedCards() {
        this.sound('success');
        alert("You've matched 2 cards! " + this.SelectedCard1.id + " & " + this.SelectedCard2.id);
        this.incrementScore(this.player1Turn);
        this.removeCards();
        this.numberOfCards -= 2;
    }
    unmatchedCards() {
        document.getElementById(this.SelectedCard1.id).style.pointerEvents = 'auto';
    }
    //========================== Shuffle card order
    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }
    //========================== Card click function
    cardClick(id, value, color) {
        document.getElementById(id).classList.add('flip-horizontal-bottom');
        setTimeout(() => { document.getElementById(id).classList.remove('card-img-back'); }, 200);
        //============================= Start Click = 0
        if (this.clickCount < 1) {
            this.SelectedCard1.id = id;
            this.SelectedCard1.value = value;
            this.SelectedCard1.color = color;
            this.clickCount = 1;
            document.getElementById(this.SelectedCard1.id).style.pointerEvents = 'none';
        }
        //============================= End Click = 1
        //============================= Start Click = 1
        else if (this.clickCount = 2) {
            this.SelectedCard2.id = id;
            this.SelectedCard2.value = value;
            this.SelectedCard2.color = color;
            this.player1Turn = !this.player1Turn; //Switch Players turn
            // this.clickCount = 2; //============================= Click = 2
            //============================= Card matching logic
            if (this.SelectedCard1.value == this.SelectedCard2.value && this.SelectedCard1.color == this.SelectedCard2.color && this.SelectedCard1.id != this.SelectedCard2.id) {
                this.matchedCards();
            }
            //============================= Card not matching logic
            else if (this.SelectedCard1.value != this.SelectedCard2.value || this.SelectedCard1.color != this.SelectedCard2.color) {
                this.unmatchedCards();
            }
            this.winner();
            this.reset(); // Reset selected cards
        }
    }
    ngOnInit() {
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 28, vars: 9, consts: [["id", "success-sound"], ["src", "./assets/sounds/mario-money-sound.mp3", "type", "audio/mpeg"], ["id", "winner-sound"], ["src", "./assets/sounds/winner.mp3", "type", "audio/mpeg"], [1, "container-fluid", "pt-sm-2", "pt-lg-5"], [1, "row", "h-100"], [1, "col-sm-6", "col-lg-2", "order-sm-2", "order-lg-1", "d-flex", "align-items-center"], ["id", "p1-card", 1, "card", "player-card", "opaque", 3, "ngClass"], ["src", "./assets/img/player-1.png", 1, "img-fluid", "rotate-left"], ["class", "btn btn-success btn-block", 4, "ngIf"], [1, "col-sm-12", "col-lg-8", "order-sm-1", "order-lg-2", "pb-sm-2", "text-center"], [1, "card", "game-board", "opaque"], ["id", "card-container", 1, "card-container"], [4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-lg-2", "order-sm-3", "order-lg-3"], ["id", "p2-card", 1, "card", "player-card", "opaque", 3, "ngClass"], ["src", "./assets/img/player-2.png", 1, "img-fluid", "rotate-right"], [1, "btn", "btn-success", "btn-block"], [1, "card-img", "card-img-back", 3, "id", "src", "click"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "audio", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GameComponent_button_14_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GameComponent_div_18_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GameComponent_button_27_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.player1Turn ? "" : "opacity-33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player1Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.player1Score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.player1Turn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shuffledCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.player1Turn ? "" : "opacity-33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player2Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.player2Score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.player1Turn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIn0= */", ".card-container[_ngcontent-%COMP%]   .card-img-back[_ngcontent-%COMP%] {\n        content: url('./assets/img/card-back.png');\n    }"] });


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LandingPageComponent {
    constructor() {
        this.player1Name = '';
        this.player2Name = '';
    }
    getPlayerNames() {
        // Store
        localStorage.setItem("player1", this.player1Name);
        localStorage.setItem("player2", this.player2Name);
        // Retrieve
        alert("Welcome " + localStorage.getItem("player1") + " & " + localStorage.getItem("player2"));
    }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 20, vars: 3, consts: [[1, "container"], [1, "row", "text-center"], [1, "col-md-12"], [2, "color", "white"], [1, "row", "text-center", "py-5"], [1, "col-md-6"], ["src", "./assets/img/player-1.png", 1, "rotate-left", 2, "height", "200px", "width", "auto"], [1, "form-group", "pt-5"], ["type", "text", "id", "player-1", "placeholder", "Name of Player 1", "name", "player1Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["src", "./assets/img/player-2.png", 1, "rotate-right", 2, "height", "200px", "width", "auto"], ["type", "text", "id", "player-2", "placeholder", "Name of Player 2", "name", "player2Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "routerLink", "/play", 1, "btn", "btn-success", "btn-lg", 3, "disabled", "click"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you ready to play?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.player1Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingPageComponent_Template_input_ngModelChange_15_listener($event) { return ctx.player2Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_18_listener() { return ctx.getPlayerNames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Let's Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.player1Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.player2Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.player1Name == "" || ctx.player2Name == "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { AppComponent } from './app.component';




const routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'play', component: _game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map