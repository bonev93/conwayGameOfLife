var Life = require('./lifeClass.js');
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
