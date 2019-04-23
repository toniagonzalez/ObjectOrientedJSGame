class Game {
  constructor(phrasesObjectArray){
    this.missed = 0;
    this.phrases = phrasesObjectArray;
    this.activePhrase = null;
  }

  /**
  *Calculate Random Index Number
  */
  randomIndex(){
    return Math.floor(Math.random() * (5));
  }

  /**
  *Using this.randomIndex a phrase is selected from this.phrases and set to this.activePhrase
  */
  getRandomPhrase(){
   return this.activePhrase = this.phrases[this.randomIndex()];
  }

  /**
  *Hides overlay and gets random phrase and adds to board
  */
  startGame(){
    $('#game-over-message').text('');
    this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
  *Changes Counter Icon to represent a loss of life
  */
  removeLife(){
    this.missed +=1;
    $('#scoreboard ol').children().remove();
    for (let i=0; i< this.missed; i++){
      $('#scoreboard ol').append('<li class="tries"><img src="images/combadgeBlack.png" alt="Black Combadge Icon" height="75" width="50"></li>');
    }
    for(let i=0; i< 5 - this.missed; i++){
      $('#scoreboard ol').append('<li class="tries"><img src="images/combadge.png" alt="Combadge Icon" height="75" width="50"></li>');
    }
  }

  /**
  *Checks to see if Phrase is Completely revealed
  */
  checkForWin(){
    if (this.missed === 5){
      this.gameOver('lose');
    }
    else if ($('li.letter.show').length === $('li.letter').length){
      this.gameOver('win');
    }
  }

  /**
  *Enables Keyboard for game reset
  */
  enable(){
   document.onkeydown = function(e){
     return true;
   }
  }


  /**
  *If Phrase is Guessed or Lives are depleted end game
  */
  gameOver(result){
    if (result === 'lose'){
      overlay.removeClass('start');
      overlay.removeClass('win');
      overlay.addClass('lose');
      overlay.slideDown(800);
      this.missed = 0;
      this.activePhrase.match = 0;
      $('#game-over-message').text('MAYBE NEXT TIME!');
      $('#btn__reset').text('Play Again');
    }
    if (result === 'win'){
      overlay.removeClass('start');
      overlay.removeClass('lose');
      overlay.addClass('win');
      overlay.slideDown(800);
      this.missed = 0;
      this.activePhrase.match = 0;
      $('#game-over-message').text('YOU WON!');
      $('#btn__reset').text('Play Again');
    }

    //Reset keyboard
    for (let i=0; i< $('#qwerty .keyrow button').length; i++){
      $('#qwerty .keyrow button').removeClass('chosen').prop('disabled', false);
      this.enable();
    }



    //Clear combadges and reset tries
    $('#scoreboard ol').children().remove();
    for(let i=0; i< 5; i++){
      $('#scoreboard ol').append('<li class="tries"><img src="images/combadge.png" alt="Combadge Icon" height="75" width="50"></li>');
    }
    //Clear Puzzle
    $('#phrase ul').children().remove();
  }


  /**
  *Calls interactive functions: checkLetter, showMatchedLetter, removeLife and check for win) -checkForWin(which calls gameOver)
  */
  handleInteraction(guess){
    this.activePhrase.checkLetter(guess);
    if (this.activePhrase.checkLetter(guess) === true){
      this.activePhrase.showMatchedLetter(guess);
      this.checkForWin();
    }
    else {
      this.removeLife();
      this.checkForWin();
    }
  }


}
