let game = {
    score: 0,
    currentGame: [],
    playerMove: [],
    choices: ["button1","button2","button3","button4"],
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMove = [];
    showScore();
    addTurn();
}

function showScore(){
    document.getElementById("score").innerText = game.score
}

function addTurn(){
    game.playerMove = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4 ))]);
    
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(function () {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}


function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns};