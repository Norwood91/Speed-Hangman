//*******************************************************************************************************

const wordBank = 
['dog', 'cat', 'lion', 'bear', 'wolf', 'rabbit', 'dolphin',
 'shark', 'tiger', 'penguin', 'rhino', 'hedgehog', 'hamster',
 'hippopotamus', 'monkey', 'warthog', 'wallaby', 'kangaroo', 
 'gorilla', 'wolverine', 'woodpecker', 'mammoth', 'elephant',
 'crocodile', 'dragonfly', 'gecko']

//*******************************************************************************************************

let secretWord, maxGuesses, guessesMade, userGuessedArray, userWord, intervalTimer, clockCounter
secretWord = ''
maxGuesses = 6
guessesMade = 0
userGuessedArray = []
userWord = null
intervalTimer = null
clockCounter = 30

//*******************************************************************************************************

let hangmanImg, underscores, keyboard, userWrongGuesses, runningClock, playerHeaders, resetButton, startButton, instructions

hangmanImg = document.getElementById('hangman')
underscores = document.getElementById('underscores')
keyboard = document.getElementById('keyboard')
userWrongGuesses = document.getElementById('guesses')
runningClock = document.getElementById('time')
playerHeaders = document.getElementById('playerHeadings')
resetButton = document.getElementById('resetGame')
startButton = document.getElementById('startGame')
instructions = document.getElementById('instructionParas')

//*******************************************************************************************************
const startThirtySecondTimer = () => {
	intervalTimer = setInterval(thirtySecondTimer, 1000)

}

const stopCountdown = () => {
	clearInterval(intervalTimer)
}

const thirtySecondTimer = () => {
	clockCounter--
	if(clockCounter > 0) {
		runningClock.innerHTML = clockCounter
	} else if (clockCounter === 0) {
		underscores.innerHTML = 'TIME RAN OUT, YOU LOSE'
		hideKeyBoard()
		hideTimer()
	}	
}

//*******************************************************************************************************

const generateRandomWord = () => {
  secretWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(secretWord)
}

//*******************************************************************************************************

const generateKeyboardButtons = () => {

 	let keyboardButtons = 
  	'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
  	`<button class="btn btn-lg m-1 keyboardButtons" id='` + letter + `'onClick="handleUserGuess
  	('` + letter + `')" style="background: olive">` + letter + `</button>`).join('');

	keyboard.innerHTML = keyboardButtons;
}

//*******************************************************************************************************

const handleUserGuess = (userLetter) => {
	//if the letter the user picked isn't in the userGuessedArray
	// then push the letter to the array OR if it is present, then do nothing
  userGuessedArray.includes(userLetter) !== true ? userGuessedArray.push(userLetter) : null;
  // disable the button (letter) that the user picks after either pushing to the 
  // UGArray or after doing nothing, so they know not to use that letter again
  document.getElementById(userLetter).setAttribute('disabled', true);
  // if the letter the user picked is present inside of the secret word
  if (secretWord.includes(userLetter) === true) {
    userGuessedWord();
    checkIfUserWonGame();
    // else if the letter the user picked isn't in the secret word
  } else if (secretWord.includes(userLetter) !== true) {
    guessesMade++;
    userGuesses()
    checkIfUserLostGame();
    updateHangmanPicture();
  }
}

//*******************************************************************************************************

const updateHangmanPicture = () => {
  hangmanImg.src = './images/' + guessesMade + '.jpg';
}

//*******************************************************************************************************

const checkIfUserWonGame = () => {
  if (userWord === secretWord) {
    underscores.innerHTML = "YOUR GUESS WAS CORRECT YOU WON THE GAME!";
    hideKeyBoard()
    stopCountdown()
  }
}

//*******************************************************************************************************


const checkIfUserLostGame = () => {
  if (guessesMade === maxGuesses) {
    underscores.innerHTML = "YOU RAN OUT OF GUESSES YOU LOSE!";
    hideKeyBoard()
    stopCountdown()
  }
}

//*******************************************************************************************************

const userGuessedWord = () => {
	// split the secret word into an array, iterate over the elements in the array using map, then check to see if the letter the user chose is present inside of the secret word, if it is then show the letter, if it isn't then show the underscore
  userWord = secretWord.split('').map(letter => (userGuessedArray.includes(letter) === true ? letter : " _ ")).join('');

  underscores.innerHTML = userWord;
}

//*******************************************************************************************************

const userGuesses = () => {
	userWrongGuesses.innerHTML = "Guesses Made: " + guessesMade + " of " + maxGuesses + "!"
}

//*******************************************************************************************************


const hidePlayerHeadings = () => {
	playerHeaders.style.display = 'none'
}

const showPlayerHeadings = () => {
	playerHeaders.style.display = 'flex'
}

const hideKeyBoard = () => {
	keyboard.style.display = 'none'
}
const showKeyBoard = () => {
	keyboard.style.display = 'block'
}
const hideHangmanPic = () => {
	hangmanImg.style.display = 'none'
}

const showHangmanPic = () => {
	hangmanImg.style.display = 'block'
}

const hideUserGuesses = () => {
	userWrongGuesses.style.display = 'none'
}

const showUserGuesses = () => {
	userWrongGuesses.style.display = 'block'
}

const hideTimer = () => {
	runningClock.style.display = 'none'
}

const showTimer = () => {
	runningClock.style.display = 'flex'
}

const hideResetButton = () => {
	resetButton.style.display = 'none'
}

const showResetButton = () => {
	resetButton.style.display = 'block'
}

const hideInstructions = () => {
	instructions.style.display = 'none'
}

const showInstructions = () => {
	instructions.style.display = 'block'
}

//*******************************************************************************************************

const unhideGame = () => {
	hideInstructions()
	showPlayerHeadings()
	showTimer()
	showHangmanPic()
	showUserGuesses()
	showResetButton()
	startGame()
}

//*******************************************************************************************************

const startGame = () => {
	startThirtySecondTimer()
	generateRandomWord()
	generateKeyboardButtons()
	userGuessedWord()
	userGuesses()
}

//*******************************************************************************************************

const resetGame = () => {	
	guessesMade = 0
	userGuessedArray = []
	hangmanImg.src = './images/0.jpg';
	clockCounter = 30
	startGame()
	showKeyBoard()
}

showInstructions()
hidePlayerHeadings()
hideResetButton()
hideHangmanPic()
hideUserGuesses()

