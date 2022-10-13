
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    // return Math.floor(Math.random() * 100 % (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            specialAttackEnable: true,
            currentRound: 0,
            winner: null,
            logs: [],
        };
    },
    computed: {
        isGameOver() {
            console.log('we are in the COMPUTED isGameOver');
            return this.monsterHealth === 0 || this.playerHealth === 0;
        },
        monsterBarStyle() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyle() {
            return {width: this.playerHealth + '%'};
        },
        specialAttackEnabled() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },
        isGameOver() {
            // this.log('we are in the WATCH isGameOver');
        }
    },
    methods: {
        surrender() {
            this.log('Player surrender');
            this.winner = 'monster'
        },
        log(actionBy, actionType, actionValue) {
            this.logs.unshift({actionBy, actionType, actionValue});
        },
        startNewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.specialAttackEnable = true;
            this.currentRound = 0;
            this.winner = null;
            this.logs = [];
        },
        healPlayer() {
            this.currentRound++;
            const healedValue = getRandomValue(8, 20);
            this.playerHealth += healedValue;
            this.playerHealth = (this.playerHealth > 100) ? 100 : this.playerHealth;
            this.log('player', 'heal', healedValue);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.log('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackMonster() {
            this.currentRound++;
            if (this.monsterHealth > 0) {
                const attackValue = getRandomValue(5, 12);
                this.monsterHealth -= attackValue;
                this.monsterHealth = this.monsterHealth < 0 ?  0 : this.monsterHealth;
                this.log('player', 'attack', attackValue);
                this.attackPlayer();
            }
        },
        attackPlayer() {
            if (this.playerHealth > 0) {
                const attackValue = getRandomValue(8, 15);
                this.playerHealth -= attackValue;
                this.log('monster', 'attack', attackValue);
                this.playerHealth = this.playerHealth < 0 ?  0 : this.playerHealth;
            }
        },
    },
});

app.mount('#game');
