//Variables
const startButton = $('#btn__reset');
const overlay = $('#overlay');

//Dynamically Add Div for Game Hint to DOM
const hint = document.createElement('div');
$(hint).addClass('hint');
$('#qwerty').append(hint);


//Array of Phrases for the Game
const array = [
                ['Resistance is Futile','Slogan of the Borg'],
                ['Beverly Crusher','Doctor on Star Trek Next Generation'],
                ['USS Voyager','Ship of Captain Janeway'],
                ['Benjamin Sisko','Emissary to the Prophets on Deep Space 9'],
                ['Lenoard Nimoy','Actor who played Spock'],
              ];


//Creates an Array of Phrase Obects from array
let phrasesObjectArray;

function createPhrasesObjectArray() {
  phrasesObjectArray = [];
  for (let i=0; i< array.length; i++){
      const phrase = new Phrase(array[i][0], array[i][1]);
     phrasesObjectArray.push(phrase);
  }
}


//Creates new Game Object with Phrases Object Array
createPhrasesObjectArray();
const game = new Game(phrasesObjectArray);


//Start Button Event Listener that calls startGame Funtcion on new Game Object
startButton.on('click', ()=>{
  overlay.slideUp(800);
  game.startGame();
});
