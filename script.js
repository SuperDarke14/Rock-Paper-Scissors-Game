//Print RPS for title ONLY ONCE
console.log(`Welcome to Rock Paper Scissors with a\n
statistically perfect opponent`);
var playerScore = 0;
var compScore = 0;
const choiceArea = document.querySelector('#choiceArea');
const resultsArea = document.querySelector('#resultsArea');
const winnerArea = document.querySelector('#winnerArea');

let updateItem = function (item, newContent) {
	item.textContent = newContent;
}

function startRound(){
	//New variable to store user input
	const user_input = getUserInput();
	//User input into variable

	updateItem(choiceArea, `User input is ${user_input}`);
	if (user_input) {
		//Determine randomly computer's chocie
		const compChoice = getComputerChoice();
		updateItem(choiceArea, `Computer Choice: ${compChoice}`);
		//Compare User's choice with computer's choice and determine winner
		
		determineWinner(user_input, compChoice);
	}
}
function getUserInput() {
	const temp = prompt(`Do you choose rock, paper, or scissors?`);
	if (['rock','paper', 'scissors'].includes(temp.trim().toLowerCase())) {
		return temp.trim().toLowerCase();
	} else {updateItem(choiceArea, 'Invalid input!')};
		
}
function getComputerChoice(){
	//pick number 1 to 3
	const choiceIndex = Math.floor(Math.random() * 3); //why is there no easy way to generate an int :/ 
	//initialize array of [rock, paper, scissors]
	const rpsArray = ['rock', 'paper', 'scissors'];
	//return number's index's string
	return rpsArray[choiceIndex];
	//note: to do this without arrays, take choice index and
	//do an if-else tree: if ci == 1 return rock, 0 return paper, 2 return scissors;
}

function determineWinner(user_input, compChoice) {
	const temp = user_input.toLowerCase(); //error handling
	if (temp === 'rock') {
		switch (compChoice) {
			case 'rock':
				updateItem(resultsArea, 'tie');
				break;
			case 'paper':
				updateItem(resultsArea, 'You lose!');
				compScore++;
				break;
			case 'scissors':
				updateItem(resultsArea, 'You win!');
				playerScore++;
				break;
		}
	} else if (temp === 'paper') {
		switch (compChoice) {
			case 'rock':
				updateItem(resultsArea, 'You win!');
				playerScore++;
				break;
			case 'paper':
				updateItem(resultsArea, 'tie');
				break;
			case 'scissors':
				updateItem(resultsArea, 'You lose');
				compScore++;
				break;
		}
	} else if (temp === 'scissors') {
		switch (compChoice) {
			case 'rock':
				updateItem(resultsArea, 'You lose!');
				compScore++;
				break;
			case 'paper':
				updateItem(resultsArea, 'You win!');
				playerScore++;
				break;
			case 'scissors':
				updateItem(resultsArea, 'You tie!');
				break;
		}
	} else { console.log('invalid input') };
	scorePrint();
}
function scorePrint() {
	if (playerScore < 5 && compScore < 5) {
		updateItem(winnerArea, `Player Score: ${playerScore}, Computer Score ${compScore}`);
		
	};
	if (playerScore === 5) {
			updateItem(winnerArea, 'Player won the game!');
		} else if (compScore === 5) {
			updateItem(winnerArea, 'Computer has won the game.');
		};
}

let buttonList = document.querySelectorAll("button");
for (let i = 0; i < buttonList.length; i++) {
	buttonList[i].addEventListener('click', startRound);

	console.log(buttonList[i]);
};
