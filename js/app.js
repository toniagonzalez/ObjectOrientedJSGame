//Variables
const startButton = $('#btn__reset');
const overlay = $('#overlay');


//Dynamically Add Div for Game Hint to DOM
const hint = document.createElement('div');
$(hint).addClass('hint');
$('#qwerty').append(hint);

//Array of Phrases for the Game
let phrasesObjectArray = [
                new Phrase('Resistance is Futile','Slogan of the Borg'),
                new Phrase('Beverly Crusher','Doctor on Star Trek Next Generation'),
                new Phrase('USS Voyager','Ship of Captain Janeway'),
                new Phrase('Benjamin Sisko','Emissary to the Prophets on Deep Space 9'),
                new Phrase('Lenoard Nimoy','Actor who played Spock'),
              ];

//Creates new Game Object with Phrases Object Array
const game = new Game(phrasesObjectArray);


//Start Button Event Listener that calls startGame Funtcion on new Game Object
startButton.on('click', ()=>{
  overlay.slideUp(800);
  game.startGame();
});


//Onscreen Qwerty Event Listener
$('#qwerty').on('click', 'button.key', (e)=> {
  let guess = e.target.innerText;
  $(e.target).addClass('chosen').prop('disabled', true);
  game.handleInteraction(guess);
});

//Function to Disable key value to be called in Keyboard Listener
function disable(){
 document.onkeydown = function (e){
  return false;
 }
}


//Keyboard Event Listener
$(window).on('keydown', (e)=>{
  let guess = e.key;
  for (let i = 0; i< $('button.key').length; i++){
      if (guess === $('button.key')[i].innerText) {
        if ($('button.key')[i].classList.value !== 'key chosen'){
          $('button.key')[i].classList.add('chosen');
          disable();
          game.handleInteraction(guess);
        }
      }
  }

});
