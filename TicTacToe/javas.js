const X_Class = 'x'
const O_Class = 'o'
const WinningCombinations = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const restartButton = document.getElementById('restartButton')
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
let O_Turn


startGame()
restartButton.addEventListener('click',startGame)

function startGame(){
		O_Turn = false
		cellElements.forEach(cell=>{
		cell.classList.remove(X_Class)
		cell.classList.remove(O_Class)
		cell.removeEventListener('click', handleClick)
		cell.addEventListener('click', handleClick, {once:true})
	})	
	setBoardHoverClass()
	winningMessageElement.classList.remove('show')
}

function handleClick(event){
	const cell = event.target
	const currentClass = O_Turn ? O_Class : X_Class
	placemark(cell, currentClass)

	if(CheckWin(currentClass)){
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()	
	}
}

function endGame(draw){
	if(draw){
		winningMessageTextElement.innerText = "Game Drawn! Play Again?"
	}else{
		winningMessageTextElement.innerText = `${O_Turn ? "Player 2 " : "Player 1 "} is the Winner!`
	}
	winningMessageElement.classList.add('show')
}

function isDraw(){
	return [...cellElements].every(cell => {
		return cell.classList.contains(X_Class) || cell.classList.contains(O_Class)
	})
}

function placemark(cell, currentClass){
	cell.classList.add(currentClass)
}

function swapTurns(){
	O_Turn = !O_Turn
}

function setBoardHoverClass(){
	board.classList.remove(X_Class)
	board.classList.remove(O_Class)
	if(O_Turn){
		board.classList.add(O_Class)
	}else{
		board.classList.add(X_Class)
	}
}

function CheckWin(currentClass){
	return WinningCombinations.some(Combination =>{
		return Combination.every(index =>{
			return cellElements[index].classList.contains(currentClass)
		})
	})
}