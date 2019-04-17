class Phrase {
  constructor(_phrase, hint){
    this._phrase = _phrase;
    this.hint = hint;
    this.miss = null;
  }

  /**
  *Adds Phrase to to DOM
  */
  addPhraseToDisplay(){
    for (let i=0; i< this._phrase.length; i++){
      let letter = this._phrase[i].toUpperCase();
      if (letter === " ") {
          $('#phrase ul').append(`<li class="space"></li>`);
      } else {
          $('#phrase ul').append(`<li class="letter">${letter}</li>`);
      }
   }
    $('.hint').html(`<p>Hint: ${this.hint}</p>`);
  }

  /**
  *Checks to See if Selected Letter is a Match
  */

  checkLetter(guess){
    this.miss = 0;
    for (let i=0; i< this._phrase.length; i++){
      let letter = this._phrase[i].toLowerCase();
      if (guess === letter){
        return true;
      }
      else {
        this.miss += 1;
        if(this.miss === this._phrase.length){
          return false;
        }
      }
    }
   }

  /**
  *Reveals Matched Letter
  */
  showMatchedLetter(letter){
      console.log(letter);
  }


}
