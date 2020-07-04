let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber]
}

function convertToWord(letter) {
	if( letter === "r") return "Rock" ;
	if( letter === "p") return "Paper" ;
	return "Scissors";
}

function win(user, computer) {
	userScore++;
	userScore_span.innerHTML = userScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();	
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} You win !`;
	document.getElementById(user).classList.add("green-glow")
	setTimeout(() => document.getElementById(user).classList.remove("green-glow"), 1000);
}

function lose(user, computer) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();	
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses ${convertToWord(computer)}${smallCompWord} You lost !`;
	document.getElementById(user).classList.add("red-glow")
	setTimeout(() => document.getElementById(user).classList.remove("red-glow"), 1000);
}

function draw(user, computer) {
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();	
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} draws ${convertToWord(computer)}${smallCompWord} Draw !`;
	document.getElementById(user).classList.add("gray-glow")
	setTimeout(() => document.getElementById(user).classList.remove("gray-glow"), 1000);
}


function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r"));

	paper_div.addEventListener('click', () => game("p"));

	scissors_div.addEventListener('click', () => game("s"));
}

main();