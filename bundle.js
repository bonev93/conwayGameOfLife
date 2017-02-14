/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Life = __webpack_require__(1);
(function(){
    class LifeView {
        constructor(table, size) {
            this.grid = table;
            this.size = size;
            this.createGrid();
        }
        createGrid() {
            this.checkboxes =[];
            this.grid.empty();
            let fragment = $(document.createDocumentFragment());
            for (let i = 0; i < this.size; i++) {
                this.checkboxes[i]=[];
                let row = $('<tr>');
                for (let j = 0; j < this.size; j++) {
                    let cell = $('<td>');
                    let checkbox = $('<input>');
                    checkbox.attr('type', 'checkbox');
                    this.checkboxes[i][j]=checkbox;
                    cell.append(checkbox);
                    row.append(cell);
                }
                fragment.append(row);
            }
            this.grid.append(fragment);
        }

        get boardArray(){
            return this.checkboxes.map((row)=>row.map((cell)=>+cell.checked))
        }

        play(){
            this.game = new Life(this.boardArray())
        }
    }
    let game = new LifeView($("#grid"), 12);
})()


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function cloneArray(arr){
    return arr.slice().map((row)=>row.slice());
}

module.exports.Life = class Life
     {
         constructor (seed){
              this.seed = seed;
              this.height = seed.length;
              this.width = seed[0].length;
              this.prevBoard = [];
              this.board = cloneArray(seed);
         }

         next(){
              this.prevBoard = cloneArray(this.board);
              for(let i=0; i<this.height ;i++){
                   for(let j=0;j<this.width;j++){
                        let neighbors = this.aliveNeighbours(this.prevBoard,i,j);
                        let alive = !!this.board[i][j];
                        if(alive){
                             if(neighbors<2 || neighbors >3){
                                  this.board[i][j] = 0;
                             }
                        }
                        else{
                             if(neighbors == 3){
                                  this.board[i][j] = 1;
                             }
                        }
                   }
              }
         }

         aliveNeighbours(array,x,y){
               let sum = 0;
               let prevRow = array[x-1] || [];
               let nextRow = array[x+1] || [];
               let neighbors = [
                   prevRow[y-1],prevRow[y],prevRow[y+1],
                   array[x][y-1],array[x][y+1],
                   nextRow[y-1],nextRow[y],nextRow[y+1]
               ].forEach((a)=>sum+=+!!a);

               return sum;
         }

         toString(){
               return this.board.map((row)=>row.join(' ')).join("\n");
         }

     }




/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map