/*
Create objects of myself and enemy

*/

export class PlayerShip {
    constructor(name) {
        this.name = name;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
        this.isDead = false;
    }

    attack(enemy) {
        let hitChance = Math.random(); // generate a number of 0 -1 not including 1
        if (hitChance <= this.accuracy) {
            enemy.hull -= this.firepower;
            console.log(`you hit ${enemy.name}, enemy lost ${this.firepower} hull, now enmey has ${enemy.hull} hull`);
            if (enemy.hull <= 0) {
                enemy.isDead = true;
                console.log('you destroyed an enemy');
            }
        } else {
            console.log(`you missed your target!`);
        }
    }

    retreat() {
        alert('you retreated, game over!')
    }
}

export class EnemyShip {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.random() * 0.2 + 0.6).toFixed(3);
        this.isDead = false;
    }

    attack(player) {
        let hitChance = Math.random(); // generate a number of 0 -1 not including 1
        if (hitChance <= this.accuracy) {
            player.hull -= this.firepower;
            console.log(`you hit ${player.name}, player lost ${this.firepower} hull, now player has ${player.hull} hull`);
            if (player.hull <= 0) {
                player.isDead = true;
                console.log('you got destroyed!');
            }
        } else {
            console.log(`you missed your target!`);
        }
    }
}