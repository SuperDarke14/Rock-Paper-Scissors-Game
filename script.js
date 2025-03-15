//Print RPS for title ONLY ONCE
console.log(`Welcome to Rock Paper Scissors with a\n
	statistically perfect opponent`
);
function rockPaperScissors(){
	//New variable to store user input
	const user_input = prompt(`Do you choose rock, paper, or scissors?`);
	//User input into variable

	console.log(user_input);

	//Determine randomly computer's chocie
	const compChoice = computerChoice();
	console.log(compChoice);
	//Compare User's choice with computer's choice and determine winner
	
	determineWinner(user_input, compChoice);
}
function computerChoice(){
	//pick number 1 to 3
	const choiceIndex = (Math.floor(Math.random() * 3)-1); //why is there no easy way to generate an int :/ 
	//goofy minus one because of array indexing from 0
	//initialize array of [rock, paper, scissors]
	const rpsArray = ['rock', 'paper', 'scissors'];
	//return number's index's string
	return rpsArray[choiceIndex];
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
				break;
			case 'scissors':
				console.log('You win!');
				break;
		}
	} else if (temp === 'paper') {
		switch (compChoice) {
			case 'rock':
				console.log('You win!');
				break;
			case 'paper':
				console.log('tie');
				break;
			case 'scissors':
				console.log('You lose');
				break;
		}
	} else if (temp === 'scissors') {
		switch (compChoice) {
			case 'rock':
				console.log('You lose!');
				break;
			case 'paper':
				console.log('You win!');
				break;
			case 'scissors':
				console.log('You tie!');
				break;
		}
	} else { console.log('invalid input') };
}

