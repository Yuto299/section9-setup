/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food-app/food.ts":
/*!******************************!*\
  !*** ./src/food-app/food.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Food: () => (/* binding */ Food)
/* harmony export */ });
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ "./src/food-app/score.ts");

class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this)); //bindでこのようその中のthisということを指す
    }
    clickEventHandler() {
        this.element.classList.toggle('food--active');
        const score = _score__WEBPACK_IMPORTED_MODULE_0__.Score.getInstance();
        score.render();
    }
}


/***/ }),

/***/ "./src/food-app/foods.ts":
/*!*******************************!*\
  !*** ./src/food-app/foods.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Foods: () => (/* binding */ Foods)
/* harmony export */ });
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ "./src/food-app/food.ts");

class Foods {
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach((element) => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach((element) => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    constructor() {
        this.elements = document.querySelectorAll('.food');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach((element) => {
            new _food__WEBPACK_IMPORTED_MODULE_0__.Food(element);
        });
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}


/***/ }),

/***/ "./src/food-app/score.ts":
/*!*******************************!*\
  !*** ./src/food-app/score.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Score: () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foods */ "./src/food-app/foods.ts");

class Score {
    get totalScore() {
        const foods = _foods__WEBPACK_IMPORTED_MODULE_0__.Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    constructor() { }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/food-app/main.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foods */ "./src/food-app/foods.ts");
 //jsファイルにする
_foods__WEBPACK_IMPORTED_MODULE_0__.Foods.getInstance();
//オブジェクト指向は変更のしやすさが売り

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUN6QjtBQUNQO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUFLO0FBQzNCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1g4QjtBQUN2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQUk7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2dDO0FBQ3pCO0FBQ1A7QUFDQSxzQkFBc0IseUNBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQyxDQUFDO0FBQ2pDLHlDQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWN0aW9uOS1zZXR1cC8uL3NyYy9mb29kLWFwcC9mb29kLnRzIiwid2VicGFjazovL3NlY3Rpb245LXNldHVwLy4vc3JjL2Zvb2QtYXBwL2Zvb2RzLnRzIiwid2VicGFjazovL3NlY3Rpb245LXNldHVwLy4vc3JjL2Zvb2QtYXBwL3Njb3JlLnRzIiwid2VicGFjazovL3NlY3Rpb245LXNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlY3Rpb245LXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZWN0aW9uOS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NlY3Rpb245LXNldHVwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2VjdGlvbjktc2V0dXAvLi9zcmMvZm9vZC1hcHAvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY29yZSB9IGZyb20gJy4vc2NvcmUnO1xuZXhwb3J0IGNsYXNzIEZvb2Qge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKSk7IC8vYmluZOOBp+OBk+OBruOCiOOBhuOBneOBruS4reOBrnRoaXPjgajjgYTjgYbjgZPjgajjgpLmjIfjgZlcbiAgICB9XG4gICAgY2xpY2tFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdmb29kLS1hY3RpdmUnKTtcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBTY29yZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBzY29yZS5yZW5kZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kIH0gZnJvbSAnLi9mb29kJztcbmV4cG9ydCBjbGFzcyBGb29kcyB7XG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9vZC0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlRWxlbWVudHNTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb2RTY29yZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2RfX3Njb3JlJyk7XG4gICAgICAgICAgICBpZiAoZm9vZFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZS5wdXNoKE51bWJlcihmb29kU2NvcmUudGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb29kJyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBuZXcgRm9vZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFGb29kcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgRm9vZHMuaW5zdGFuY2UgPSBuZXcgRm9vZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRm9vZHMuaW5zdGFuY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRm9vZHMgfSBmcm9tICcuL2Zvb2RzJztcbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7XG4gICAgICAgIGNvbnN0IGZvb2RzID0gRm9vZHMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGZvb2RzLmFjdGl2ZUVsZW1lbnRzU2NvcmUucmVkdWNlKCh0b3RhbCwgc2NvcmUpID0+IHRvdGFsICsgc2NvcmUsIDApO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9fbnVtYmVyJykudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghU2NvcmUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFNjb3JlLmluc3RhbmNlID0gbmV3IFNjb3JlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNjb3JlLmluc3RhbmNlO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRm9vZHMgfSBmcm9tICcuL2Zvb2RzJzsgLy9qc+ODleOCoeOCpOODq+OBq+OBmeOCi1xuRm9vZHMuZ2V0SW5zdGFuY2UoKTtcbi8v44Kq44OW44K444Kn44Kv44OI5oyH5ZCR44Gv5aSJ5pu044Gu44GX44KE44GZ44GV44GM5aOy44KKXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=