let randomChoice = Math.floor(Math.random() * 9);

console.log(randomChoice);

let wins = 0;
let losses = 0;
let guess = 4;

let h2PlayerChoices = document.querySelector('.playerChoice');
let h2Wins = document.querySelector('.wins');
let h2Losses = document.querySelector('.losses');
let h2Guess = document.querySelector('.guess');
let btn = document.querySelector('.btn');

window.addEventListener('keyup', (e) => {
  if (isFinite(e.key)) {
    h2PlayerChoices.innerHTML += ` ${e.key}`;
  } else {
    alert('write a number');
  }

  compare(e.key, randomChoice);
});

function compare(a, b) {
  if (a == b) {
    alert('you win');
    wins += 1;
    h2Wins.innerHTML = `Wins ${wins}`;
    reload();
  } else {
    guess -= 1;
    h2Guess.innerHTML = `Guess Left ${guess}`;

    if (guess == 0) {
      alert('you losses');
      losses += 1;
      h2Losses.innerHTML = `Losses ${losses}`;
      reload();
    }
  }
}

function reload() {
  randomChoice = Math.floor(Math.random() * 9);
  console.log(randomChoice);
  guess = 4;
  h2PlayerChoices.innerHTML = `Your guesses so far `;
}

btn.addEventListener('click', reloadPage);

function reloadPage() {
  location.reload();
}
