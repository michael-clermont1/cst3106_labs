let YatzyGame = (function() {
    let entity = {
        "currentPlayer": "",
        "currentRound": 0,
        "totalScore": 0,
        "maxRound": 13,
        "gameOver": false
    };

    entity.startGame = function() {
        this.currentPlayer = "one";
        this.currentRound = "1";
        this.gameOver = false;
        Dice.showDie("die01", Dice.roll());
        Dice.showDie("die02", Dice.roll());
        Dice.showDie("die03", Dice.roll());
        Dice.showDie("die04", Dice.roll());
        Dice.showDie("die05", Dice.roll());
    }

    entity.endTurn = function() {
        if (this.currentPlayer === "one") {
            this.currentPlayer = "two";
        } else {
            this.currentPlayer = "one";
        }
    }

    entity.endGame = function() {
        this.gameOver = true;
    }
});