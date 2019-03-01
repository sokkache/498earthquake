/**
 * CSE 154 | Autumn 2018
 * Original Author: Melissa Hovik 2018
 * A program to implement the Skittles Game where a user
 * can try to guess how many Skittles of a certain color are in a jar,
 * and can see results of incorrect/correct guesses. When they guess correctly,
 * they can see how long they took to win.
 */
(function() {
  "use strict";

  const MAX_SKITTLES = 154;
  const COLORS = ["red", "green", "blue", "purple", "gray", "mediumaquamarine",
                  "pikachuyellow", "blanchedalmond", "tomato"];
  const DELAY_LENGTH = 5000;

  let timer = null;
  let seconds = 0;

  window.addEventListener("load", initialize);

  /**
   * Sets up the response functionality for the New Game, Start, and
   * Guess buttons.
   */
  function initialize() {
    $("new-game").addEventListener("click", showStartOptions);
    $("start").addEventListener("click", startGame);
    $("guess").addEventListener("click", makeGuess);
  }

  /**
   * Switches from game view to show start options and the Start button
   * to allow a user to start a new game.
   */
  function showStartOptions() {
    setupView();
    clearJar();
    // reset guess count to 0 for later games
    $("guess-count").innerText = 0;
    // clear input box
    qs("input").value = "";
    $("results").innerText = "";
  }

  /**
   * Starts the game, switching the game view and populating the Skittles
   * jar.
   */
  function startGame() {
    gameView();
    fillJar();
  }

  /**
   * Selects a random color for the current game and fills jar 
   * with Skittles.
   */
  function fillJar() {
    // randomly select the game color 
    let gameColor = getRandomColor();
    $("color").innerText = gameColor + " ";
    $("color").className = gameColor;

    let skittleCount = Math.ceil(Math.random() * MAX_SKITTLES);
    for (let i = 0; i < skittleCount; i++) {
      addSkittle();
    }
    // timer to keep track of how long it takes a user to guess correctly 
    timer = setInterval(function() {
      seconds++;
    }, 1000);
  }

  /**
   * Removes all Skittles from the Jar.
   */
  function clearJar() {
    let skittles = qsa(".skittle");
    for (let i = 0; i < skittles.length; i++) {
      skittles[i].remove();
    }
  }

  /**
   * Returns a random color from COLORS based on the bounds of the
   * number of colors currently selected by the user.
   * @returns {string} - random color name
   */
  function getRandomColor() {
    let colorCount = qs("input[name='color-count']:checked").value;
    return COLORS[parseInt(Math.random() * colorCount)];
  }

  /**
   * Adds a Skittle elemet with a random color (based on number of colors
   * considered in current game) and adds it to the Jar.
   */
  function addSkittle() {
    let skittle = document.createElement("div");
    skittle.classList.add("skittle");
    let randomColor = getRandomColor();
    skittle.classList.add(randomColor);
    $("jar").appendChild(skittle);
  }

  /**
   * Ends the game, display a result message with the number seconds
   * passed in the game session and clearing the game timer.
   */
  function endGame() {
    $("results").innerText = "You guessed correct in " + seconds + " seconds!";
    clearInterval(timer);
    timer = null;
    seconds = 0;
    qs("#game-ui input").value = "";
    $("color").innerText = "";
    // Show the New Game button for the user to see color options again before
    // starting new game
    $("new-game").classList.remove("hidden");
  }

  /**
   * Displays a temporary message in the results area and 
   * clears the results area after DELAY_LENGTH ms if guessValue matches
   * the current value of the input box after the DELAY_LENGTH has elapsed.
   * @param guessValue {Number} - value to check for possible updates in input box
   * @param resultMsg {String} - message to display for DELAY_LENGTH ms
   */
  function showTempMessage(guessValue, resultMsg) {
    $("results").innerText = resultMsg;
    setTimeout(function() {
      // only clear text if another guess hasn't been made since this delay
      // was started
      if (guessValue === parseInt(qs("#game-ui input").value)) {
        $("results").innerText = "";
      }
    }, DELAY_LENGTH);
  }

  /**
   * Processes a guessed Skittle count from the user. If input is negative,
   * diplays a temporary message saying so. Otherwise if the guess
   * was incorrect, displays a temporary message saying whether the guess
   * was high/low. Otherwise the user wins and a result message is shown
   * with how long it took them to guess correctly and the New Game button
   * is displayed.
   */
  function makeGuess() {
    let guessValue = parseInt(qs("#game-ui input").value);
    if (guessValue) {
      if (guessValue < 0) {
        showTempMessage(guessValue, "You must enter a non-zero guess!");
      } else {
        let correctCount = qsa(".skittle." + $("color").className).length;
        if (guessValue === correctCount) {
          endGame();
        } else {
          let resultMsg = "Not quite! (hint: your guess is a bit ";
          if (guessValue <= correctCount) {
            resultMsg += "low)";
          } else {
            resultMsg += "high)";
          }
          showTempMessage(guessValue, resultMsg);
          $("guess-count").innerText = parseInt($("guess-count").innerText) + 1;
        }
      }
    }
  }

  /**
   * Hides Game Setup with color count options/new game button and shows Game UI.
   */
  function gameView() {
    $("game-ui").classList.remove("hidden");
    $("game-setup").classList.add("hidden");
    $("start").classList.remove("hidden");
  }

  /**
   * Hides Game UI and shows Game Setup with color count options/start button.
   */
  function setupView() {
    $("game-ui").classList.add("hidden");
    $("game-setup").classList.remove("hidden");
    $("new-game").classList.add("hidden");
    $("start").classList.remove("hidden");
  }

  /* ------------------------------ Helper Functions ------------------------------ */
  function $(id) {
    return document.getElementById(id);
  }
  
  function qs(query) {
    return document.querySelector(query);
  }
  
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();