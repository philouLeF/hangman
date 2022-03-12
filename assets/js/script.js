/* const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const words = ["Javascript", "HTML", "CSS"];
const play = document.getElementById("play");
play.addEventListener("click", init);

function guess(element) {
    for (let i = 0; i < randomWord.lenght; i++) {
        if (randomWord[i] == element) {
            function addLetter() {
                findElementById("hidden").innertext[i] = element
            }
        } else {
            lives -= 1;
        };
    };
}

function init() {
    let lives = 5;
    let randomWord = words[Math.floor(Math.random() * words.length)];
    while(i < randomWord.length) {
        document.getElementById("hidden").innerHTML +='_';
        i++
    }
}/ */

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const words = ["Javascript", "HTML", "CSS"];
let lives = 5;
let randomWord = "";


play.addEventListener("click", init);

function init(){
    randomWord = words[Math.floor(Math.random() * words.length)];
    lives = 5;
    let i = 0;
    while (i < randomWord.length) {
        document.getElementById("hidden").innerHTML += "_"
    }
}

function guess(){
    for(let i = 0; i < randomWord; i++){
        if (userGuess = randomWord[i]){
            addLetter(userGuess)
        } else if(userGuess != randomWord[i] && lives > 0) {
            loseLive()
        } else {
            alert("You lose :(") // à afficher dans un p html plus tard
        }
    }
}

function addLetter() {
    for (let i = 0; i < randomWord; i++) {
        if (userGuess == randomWord[i]);
    }
}