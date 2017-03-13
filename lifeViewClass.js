var Life = require('./lifeClass.js').Life;

(function(){
    class LifeView {
        constructor(table, size) {
            this.grid = table;
            this.size = size;
            this.started = false;
            this.autoplay = false;
            this.attachEvents();
            this.createGrid();
        }

        attachEvents(){
            let that = this;
            $("#play").click(function () {
                that.play();
            })
            $("#next").click(function () {
                that.next();
            })
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

        boardArray(){
            return this.checkboxes.map((row)=>row.map((cell)=>+cell.is(":checked")))
        }

        play(){
            this.game = new Life(this.boardArray());
            this.started = true;
        }
        next () {
        let that = this;

        if (!this.started || this.game) {
            this.play();
        }

        this.game.next();

        let board = this.game.board;

        for (let i=0; i<this.size; i++) {
            for (let j=0; j<this.size; j++) {
                this.checkboxes[i][j].checked = !!board[i][j];
            }
        }
    }
    }
    let game = new LifeView($("#grid"), 12);
})()
