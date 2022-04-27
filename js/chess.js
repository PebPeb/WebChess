
class gameBoard
{
    constructor() {
        self.boardSize = 8;
        self.boardScale = 80;
        self.board = new Array(self.boardSize).fill(new Array(self.boardSize).fill(null));

        this.addEvents();
        console.log(self.board);
    }

    draw() {
        self.canvas = document.getElementById('gameCanvas');
        self.ctx = self.canvas.getContext('2d');

        for(let i = 0; i < self.boardSize; i++)
            for(let j = 0; j < self.boardSize; j++) {
                if ((i+j)%2)
                    self.ctx.fillStyle = "red";
                else
                    self.ctx.fillStyle = "black";
                self.ctx.fillRect(i*self.boardScale, j*self.boardScale, self.boardScale, self.boardScale);
            }
        console.log("Test");
    }

    printMousePos(event){
        console.log(event.clientX);
        console.log(event.clientY);
    }

    addEvents() {
        document.addEventListener("click", this.printMousePos);
    }

}

class chessPiece
{
    constructor(){}
}

class pawn extends chessPiece{
    constructor() {
        super();
        console.log("Pawn");
    }
}
class rook extends chessPiece{
    constructor() {
        super();
        console.log("Rook");
    }
}
class bishop extends chessPiece{
    constructor() {
        super();
        console.log("Bishop");
    }
}
class queen extends chessPiece{
    constructor() {
        super();
        console.log("Queen");
    }
}
class king extends chessPiece{
    constructor() {
        super();
        console.log("King");
    }
}




