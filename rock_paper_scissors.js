const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Error!');
  }
}

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() * 3)
  switch (randNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, the AI won!';
    }
    else {
      return 'You beat the AI!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, the AI won!';
    }
    else {
      return 'You beat the AI!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
      return 'Sorry, the AI won!';
    }
  else {
    return 'You beat the AI!';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('Paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The AI threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame()
