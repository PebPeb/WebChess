
class chessBoard
{
	constructor(){
		self.canvas = document.getElementById('gameCanvas');
		self.canvas.addEventListener("mousedown", (event) => this.onMouseDown(event, this))
		self.canvas.addEventListener("mouseup", (event) => this.onMouseUp(event, this))
		 

		self.ctx = self.canvas.getContext('2d');
		
		self.boardSize = 8;
		
		self.gameBoard = new Array(self.boardSize);
		for (var i = 0; i < self.boardSize; i++)
			self.gameBoard[i] = new Array(self.boardSize).fill(null)
		
	}	
	
	testBoard() {
		self.gameBoard[0][0] = new Rook();
		self.gameBoard[1][0] = new Knight();
		self.gameBoard[2][0] = new Bishop();
		self.gameBoard[3][0] = new Queen();
		self.gameBoard[4][0] = new King();
		self.gameBoard[5][0] = new Bishop();
		self.gameBoard[6][0] = new Knight();
		self.gameBoard[7][0] = new Rook();
		for (var i = 0; i < self.boardSize; i++)
			self.gameBoard[i][1] = new Pawn();	
		console.log(self.gameBoard);
		
	}
	
	
	drawBoard(){
		for (let i = 0; i < self.boardSize; i++)
			for (let j = 0; j < self.boardSize; j++) {
				if ((i+j)%2)
					self.ctx.fillStyle = '#f2e2c4';
				else
					self.ctx.fillStyle = '#71ab7d';
				self.ctx.fillRect(i*100, j*100, 100, 100);	
			}
		for (let i = 0; i < self.boardSize; i++)
			for (let j = 0; j < self.boardSize; j++) {
				if (self.gameBoard[i][j] != null) {
					self.ctx.font = "70px Arial"
					self.ctx.fillStyle = "#FFFFFF"
					self.ctx.fi
					self.ctx.fillText(self.gameBoard[i][j].draw(), i*100 + 25, j*100 + 75)
					
				}
			}
	}
	
	onMouseDown(event, chessboard) {
		let offset = self.canvas.getBoundingClientRect()
		self.posX = event.clientX - offset.x
		self.posY = event.clientY - offset.y
		
		self.gridX = Math.floor(self.posX / 100)
		self.gridY = Math.floor(self.posY / 100)
		
		chessboard.currentPiece = self.gameBoard[self.gridX][self.gridY]
	}
	
	onMouseUp(event, chessboard) {
		let offset = self.canvas.getBoundingClientRect()
		self.posX = event.clientX - offset.x
		self.posY = event.clientY - offset.y
		
		let X = Math.floor(self.posX / 100)
		let Y = Math.floor(self.posY / 100)
		
		self.gameBoard[self.gridX][self.gridY] = null
		self.gameBoard[X][Y] = chessboard.currentPiece
		self.gridX = X
		self.gridY = Y
		chessboard.drawBoard()
	}
}

class chessPiece
{
	constructor() {
		self.name = ""
	}
	
}

class Pawn extends chessPiece
{
	constructor(){
		super()
	}
	
	draw(){
		return "P";
	}
	
}

class Bishop extends chessPiece
{
	constructor(){
		self.name = "Bishop"
		super()

	}
		
	draw(){
		return "B";
	}
}

class Knight extends chessPiece
{
	constructor(){
		super()
	}
	
	
	draw(){
		return "n";
	}
}

class Rook extends chessPiece
{
	constructor(){
		super()
	}
		
	draw(){
		return "R";
	}
	
}

class Queen extends chessPiece
{
	constructor(){
		super()
	}
		
	draw(){
		return "Q";
	}
}

class King extends chessPiece
{
	constructor(){
		super()
	}
		
	draw(){
		return "K";
	}
}

