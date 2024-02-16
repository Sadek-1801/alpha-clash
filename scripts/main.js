document.addEventListener("keyup", function (e) {
  const pressedKey = e.key;
  const givenAlpha = document.getElementById("randomAlpha").innerText;
  if (pressedKey.toLowerCase() === givenAlpha.toLowerCase()) {
    const getScore = document.getElementById("score");
    const parseScore = parseInt(getScore.innerText);
    const updateScore = parseScore + 1;
    getScore.innerText = updateScore;
    bgColorRemove(givenAlpha.toLowerCase());
    playGame();
  } else {
    const getLife = document.getElementById('life');
    const parseLife = parseInt(getLife.innerText);
    const updateLife = parseLife - 1;
    getLife.innerText = updateLife;
    if (updateLife === 0){
        gameOver()
    }
  }
});

function playGame() {
  // set random alpha will show in display
  const alphabet = randomAlphabet();
  const currentAlpha = document.getElementById("randomAlpha");
  currentAlpha.innerText = alphabet;
  // set bg color on keyboard
  bgColor(alphabet);
}

function play() {
  hideSection("home");
  showSection("play-ground");
  resetGame();
  playGame();
}
function gameOver(){
    hideSection("play-ground");
    showSection("results")
    const currentScore = document.getElementById('score').innerText;
    const finalScore = document.getElementById('finalScore');
    finalScore.innerText = currentScore;
    const givenAlpha = document.getElementById("randomAlpha").innerText;
    bgColorRemove(givenAlpha.toLowerCase())
}
