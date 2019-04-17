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
  *Add Event Listener added to Keyboard
  */
  keyboardInput(){
    $('#qwerty').on('click', (e)=> {
      let guess = e.target.innerText;
      if (this.activePhrase.checkLetter(guess) === true){
        this.activePhrase.showMatchedLetter(guess);
      }
      else {
        this.removeLife();
      }
    });
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
    this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    this.handleInteraction();
  }

  /**
  *Changes Counter Icon to represent a loss of life
  */
  removeLife(){
    this.missed +=1;
  }

  /**
  *Checks to see if Phrase is Completely revealed
  */
  checkForWin(){
    // if (all letters shown){
    //   return true;
    // }
  }

  /**
  *If Phrase is Guessed or Lives are depleted end game
  */
  gameOver(){
    if (this.missed === 5){
      overlay.removeClass('start');
      overlay.removeClass('win');
      overlay.addClass('lose');
      overlay.slideDown(800);
    }
    if (checkforWin() === true){
      overlay.removeClass('start');
      overlay.removeClass('lose');
      overlay.addClass('win');
      overlay.slideDown(800);
    }
  }

  /**
  *Calls interactive functions
  */
  handleInteraction(){
    this.keyboardInput();
  }

}
