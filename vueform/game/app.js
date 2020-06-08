new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        attack () {
            var playerAttack = this.randomAttack(1, 5);
            var monsterAttack = this.randomAttack(1, 5);

            this.showAttack(playerAttack, 'player', true);
            this.showAttack(monsterAttack, 'monster', false);

            this.monsterHealth -= playerAttack;
            this.playerHealth -= monsterAttack;

            this.checkWinner();
        },
        specialAttack () {
            var playerAttack = this.randomAttack(10, 20);
            var monsterAttack = this.randomAttack(10, 20);

            this.showAttack(playerAttack, 'player', true);
            this.showAttack(monsterAttack, 'monster', false);

            this.monsterHealth -= playerAttack;
            this.playerHealth -= monsterAttack;

            this.checkWinner();
        },
        start () {
            this.gameIsRunning = true;
            this.turns = [];
            this.monsterHealth = 100;
            this.playerHealth = 100;
        },
        heal () {
            this.playerHealth += 20;

            var heal = Math.floor(Math.random() * (20 - 10)) + 10;
            this.showHeal(heal);

            this.playerHealth += heal;
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }

            var monsterAttack = this.randomAttack(10, 20);
            this.showAttack(monsterAttack, 'monster', false);
            this.playerHealth -= monsterAttack;
        },
        giveUp () {
            this.gameIsRunning = false;
        },
        randomAttack (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        checkWinner () {
            if ( this.monsterHealth <= 0) {
                alert('You win');
                this.gameIsRunning = false;
                this.monsterHealth = 0;
            }
            if ( this.playerHealth <= 0) {
                alert('You Lose');
                this.gameIsRunning = false;
                this.playerHealth = 0;
            }
        },
        showAttack(attack, name, isPlayer) {
            this.turns.unshift({
                isPlayer: isPlayer,
                text: name + ' hits ' + (name == 'player' ? 'monster' : 'player')  + ' for ' + attack
            });
        },
        showHeal(value) {
            this.turns.unshift({
                heal: true,
                isPlayer: true,
                text: 'player heals by ' + value
            });
        }
    }
});