const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const words = ["Javascript", "HTML", "CSS"];
const play = document.getElementById("play");
play.addEventListener("click", init);

function init() {
    let lives = 5;
    let randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("randomWord").innerHTML = randomWord
}

function guess(element) {
    for (let i = 0; i < randomWord.lenght; i++) {
        if (i == element) {

        } else {
            lives -= 1;
        };
    };
}