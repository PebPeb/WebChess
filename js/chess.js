
class gameBoard
{
    constructor() {
        this.board = new Array(8).fill(new Array(8).fill(null));
        console.log(this.board);
    }

    draw() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        console.log("Test");
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




