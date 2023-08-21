'use strict';

// document.querySelector('.message').textContent = 'YAY Corrent Number !';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//trying to build game logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let currentScore = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = '🥱 NO NUMBER ';
  }

  //correct guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😎 Corrent !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //guess is greater than secret number
  else if (guess > secretNumber) {
    if (currentScore > 0) {
      currentScore--;
      document.querySelector('.message').textContent = 'Too High 😔 !!';
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost !';
    }
  }
  //guess is less than secret number
  else {
    if (currentScore > 0) {
      currentScore--;
      document.querySelector('.message').textContent = 'Too Low 😔 !!';
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost !';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
