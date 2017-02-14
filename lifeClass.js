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


