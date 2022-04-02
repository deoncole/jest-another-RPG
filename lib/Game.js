const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game (){
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function () {
    //push the new enemy into the array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];
    //use the inquirer prompt to ask the user their name
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "What's your name?"
        })
        //destructure the name from the prompt object
        .then (({name})=> {
            this.player = new Player(name);

            //test the object creation
            // console.log(this.currentEnemy, this.player);

            // starting a new round
            this.startNewBattle();
        })
};

module.exports = Game;