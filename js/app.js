// generate a word bank to pick random word from 
const wordBank = 
['dog', 'cat', 'lion', 'bear', 'wolf', 'rabbit', 'dolphin',
 'shark', 'tiger', 'penguin', 'rhino', 'hedgehog', 'hamster',
 'hippopotamus', 'monkey', 'warthog', 'wallaby', 'kangaroo', 
 'gorilla', 'wolverine', 'woodpecker', 'mammoth', 'elephant',
 'crocodile', 'dragonfly', 'gecko']

let secretWord, maxGuesses, guessesMade, keyboardButtons, countdown, correctLetters
secretWord = ''
maxGuesses = 6
guessesMade = 2
keyboardButtons = 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
'x', 'y', 'z']
countdown = 0
correctLetters = []


// generate random word
const generateRandomWord = () => {
	secretWord = wordBank[Math.floor(Math.random() * wordBank.length)]
	console.log(secretWord)
}
generateRandomWord()

// generate a way for the user to pick a letter - DONE
// set an event listener on the button so when clicked, you get the letter on the button - DONE
const generateKeyboard = () => {
	for (let i = 0; i < keyboardButtons.length; i++) {
		//create a button every loop
		let button = document.createElement('BUTTON')
		//set the text as the current element
		button.innerHTML = keyboardButtons[i]
		//give a class of the below to each button
		button.className = 'btn m-1'
		//give each button an id of the current element (so letter 'a' will have an id of 'a')
		button.setAttribute('id', keyboardButtons[i])
		// change background of each button to olive
		button.style.background = 'olive'
		// give each button a border of the below
		button.style.border = '1px solid black'
		// append each button to the element with the id of buttons
		document.getElementById('keyboard').appendChild(button)
		// on click, return the letter on the button
		button.addEventListener('click', () => {
			return keyboardButtons[i] 
		})
	}
}

// generate a countdown timer - 30 seconds - DONE
	//when the timer gets to 0 turn is over
	let runningTimer = () => {
		countdown = 30
		// use the setInterval method
		setInterval(function() {
			// decrement the countdown variable
			countdown--
			// if countdown is greater than or equal to 0
			if (countdown > 0) {
				// set counterId equal to the element with an id of 'time', in this case this its a span tag with the id 'time'
				counterId = document.getElementById('time')
				// set the html of counterId to equal the above variable, countdown
				counterId.innerHTML = countdown
			} else if (countdown === 0) {
				document.getElementById('underscores').innerHTML = 'TIME RAN OUT, YOU LOSE!'
		}
	}, 1000)
}

// generateUnderscores to replace word with underscores on user interface
let generateUnderscores = () => {
	for(let i = 0; i < secretWord.length; i++) {
		correctLetters[i] = "_"
	}
	document.getElementById('underscores').innerHTML = correctLetters.join(" ")
}

generateUnderscores()

// update the hangman image 
const updateHangingImg = () => {
	document.getElementById('hangman').src = './images/' + guessesMade + '.jpg'
}

//show guesses on page 
const showUserGuesses = () => {
	let showGuesses = document.getElementById('guesses')
	showGuesses.innerHTML = "Guesses Made: " + guessesMade + " of " + maxGuesses + "!"
}


// check if user lost game
const userLostGame = () => {
	if (guessesMade === maxGuesses){
		document.getElementById('underscores').innerHTML = "YOU'VE RUN OUT OF GUESSES, YOU LOSE!"
	}
}

// reset the game 
const startNewGame = () => {
	guessesMade = 0
	document.getElementById('hangman').src = './images/0.jpg'
	generateRandomWord()
	showUserGuesses()
	generateKeyboard()
}

generateRandomWord()
generateKeyboard()
generateUnderscores()
showUserGuesses()
userLostGame()
updateHangingImg()
runningTimer()











/*

*/


// Check to see if the letter the user picks is in the random word
	// if the letter is in the random word, do something
	// if the letter isn't in the random word, do something else

// keep track of the letters the player guessed
	// push to a lettersguessed array

// check to see if the user guessed the correct word
	// if so, do something
	//update player score
	// reset timer
	// generate new word

// check to see if the user lost the game or ran out of allowed mistakes
	// if so, do something
	// reset the game
	// generate new word






























/*

// 


playerOneScore = 0
playerTwoScore = 0
let updatePlayer1 = document.getElementById('score1')
let updatePlayer2 = document.getElementById('score2')


const getUserGuess = (letterPicked) => {
	guessedLetter.indexOf(letterPicked) === -1 ? guessedLetter.push(letterPicked) : null
}


// generate underscores to show how many letters are in the word


const generateUnderscores = () => {
	// split the random word into an array
	answerArray = secretWord.split('')
	// check to see if any of the letters (elements) in the answerArray are in the guessed letters array above. 
	// join either the element or underscore on an empty string to get rid of the commas
	userLetter = answerArray.map(element => (guessedLetter.indexOf(element) >= 0 ? element : " _ ")).join("")
		document.getElementById('underscores').innerHTML = userLetter
	
}
generateUnderscores()


const checkGuess = (letterSelected) => {
	if (answer.includes(letterSelected) === true) {

	} else if (answer.includes(letterSelected) === false) {

	}

	
	
}







			<div class="instructionParas">
				<p class="instructions">The objective of the game is to guess as many words as you can, within the allotted time. For each word, you will be given 45 seconds to guess. If you can successfully guess the word, you score a point and move on to the next word.</p>
				<br>
				<p class="instructions">You will be given one free hint per word, to help you guess. If you can't make a guess before the time runs out, you lose your turn and it's player 2's turn.</p>
				<br>
				<p class="instructions">If you make 6 wrong guesses on the same word, completing the hanging body, you lose your turn and it's player 2's turn.</p>
				<br>
				<p class="instructions">THE PLAYER WITH THE MOST COMPLETED WORDS IN THE ROUND WINS!</p>
			</div>
*/