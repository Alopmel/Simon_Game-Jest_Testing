/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");

 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
 });
 
 describe("game object contains correct keys", () => {
     test("score key exists", () => {
         expect("score" in game).toBe(true);
     });
     test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMove key exists", () => {
        expect("playerMove" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1","button2","button3","button4"]);
    });
 });

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMove = [1,2,3,4]
        game.currentGame = [1,2,3,4]
        showScore();
        newGame();
    });
    test("Should set the score to zero", () =>{
        expect(game.score).toEqual(0);
    })
    test("Should set the playerMove to zero", () =>{
        expect(game.playerMove).toEqual([]);
    })
    test("Should set the currentGame to zero", () =>{
        expect(game.currentGame).toEqual([]);
    })
    test("Should display 0 for the element with id score", () =>{
        expect(document.getElementById("score").innerText).toEqual(0);
    })
});