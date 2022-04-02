// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1700;
var strikes = 0;
let timer = null;
var remainingTime = 20;
var reset = false; 

function getSecretPattern() {
  return Math.floor(Math.random() * 6 + 1); //add 1 to ensure the range is from 1 to 6
}

function startGame() {
  //initialize game variables
  pattern = []; // reset so array doesn't get longer then 5 if we restart game
for (var i =0; i < 8; i ++) {
  pattern.push(getSecretPattern());
}
  console.log('pattern: ' + pattern);
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  reset=true;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  strikes = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 40;
  }
  remainingTime = 20;
  reset = false;

  clearInterval(timer);
  timer = setInterval(countDown, 1000);
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations! You won!");
}

function countDown() {
    // Update the count down every 1 second
    document.getElementById("clock").innerHTML = "Countdown: " + remainingTime + " s";
    remainingTime -= 1; 
    if (remainingTime < 0 || reset) {
      if(!reset) {
        stopGame(); 
        alert("Time is up. You lost.");
      }
      resetTimer();
      clearInterval(timer);
    }
}

function resetTimer(){
  remainingTime = 20;
  document.getElementById("clock").innerHTML = "Countdown: 0 s";
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      //correct guess
      if (progress == pattern.length - 1) {
        //is it the last guess?
        winGame();
      } else {
        //correct pattern, game continues
        progress = progress + 1;
        playClueSequence();
      }
    } else {
      //checking the next guess
      guessCounter = guessCounter + 1;
    }
  } else {
    // incorrect guess
    strikes++
    if (strikes<3){
      alert("Incorrect Guess! Attempts left:" + (3-strikes));
    }
    else{
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 535,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
