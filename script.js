//Print RPS for title ONLY ONCE
console.log(`Welcome to Rock Paper Scissors with a\n
statistically perfect opponent`);
var playerScore = 0;
var compScore = 0;


function startRound(){
	//New variable to store user input
	const user_input = getUserInput();
	//User input into variable

	console.log(`User input is ${user_input}`);
	if (user_input) {
		//Determine randomly computer's chocie
		const compChoice = getComputerChoice();
		console.log(`Computer Choice: ${compChoice}`);
		//Compare User's choice with computer's choice and determine winner
		
		determineWinner(user_input, compChoice);
	}
}
function getUserInput() {
	const temp = prompt(`Do you choose rock, paper, or scissors?`);
	if (['rock','paper', 'scissors'].includes(temp.trim().toLowerCase())) {
		return temp.trim().toLowerCase();
	} else {console.log('Invalid input!')};
		
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
				console.log('tie');
				break;
			case 'paper':
				console.log('You lose!');
				compScore++;
				break;
			case 'scissors':
				console.log('You win!');
				playerScore++;
				break;
		}
	} else if (temp === 'paper') {
		switch (compChoice) {
			case 'rock':
				console.log('You win!');
				playerScore++;
				break;
			case 'paper':
				console.log('tie');
				break;
			case 'scissors':
				console.log('You lose');
				compScore++;
				break;
		}
	} else if (temp === 'scissors') {
		switch (compChoice) {
			case 'rock':
				console.log('You lose!');
				compScore++;
				break;
			case 'paper':
				console.log('You win!');
				playerScore++;
				break;
			case 'scissors':
				console.log('You tie!');
				break;
		}
	} else { console.log('invalid input') };
}
function playGame() {
	while (playerScore < 5 && compScore < 5) {
		startRound();
		console.log(`Player Score: ${playerScore}, Computer Score ${compScore}`);
		
	};
	if (playerScore === 5) {
			console.log('Player won the game!');
		} else if (compScore === 5) {
			console.log('Computer has won the game.');
		};
}

let buttonList = document.querySelectorAll("button");
for (let i = 0; i < buttonList.length; i++) {
	buttonList[i].addEventListener('click', startRound);

	console.log(buttonList[i]);
};
