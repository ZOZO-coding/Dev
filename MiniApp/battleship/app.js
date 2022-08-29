import { PlayerShip, EnemyShip } from "./classes.js";

// create objects of you and enemy
const yourShip = new PlayerShip('zoey');
const enemy1 = new EnemyShip('enemy no.1');

// create elements
const playerAttackBtn = document.getElementById('player-attack');
const playerRetreat = document.getElementById('player-retreat');
const enemyAttackBtn = document.getElementById('enemy-attack');

const playerHull = document.getElementById('player-hull');
const playerFirePower = document.getElementById('player-firepower');
const playerAccuracy = document.getElementById('player-accuracy');

const enemyHull = document.getElementById('enemy-hull');
const enemyFirePower = document.getElementById('enemy-firepower');
const enemyAccuracy = document.getElementById('enemy-accuracy');

// create html elements for displaying status of player and enemy
console.log(yourShip);
playerHull.append(`${yourShip.hull}`);
playerFirePower.append(`${yourShip.firepower}`);
playerAccuracy.append(`${yourShip.accuracy}`);

enemyHull.append(`Enemy Hull: ${enemy1.hull}`);
enemyFirePower.append(`Enemy FirePower: ${enemy1.firepower}`);
enemyAccuracy.append(`Enemy Accuracy: ${enemy1.accuracy}`);


// player actions

playerAttackBtn.addEventListener('click', playerAttack);

function playerAttack() {
    yourShip.attack(enemy1);
    enemyHull.innerText = '';
    enemyHull.append(`Enemy Hull: ${enemy1.hull}`);
    if (enemy1.isDead) {
        alert('enemy is destroyed!')
    }
}

playerRetreat.addEventListener('click', () => yourShip.retreat());


// enemy actions
enemyAttackBtn.addEventListener('click', enemyAttack);

function enemyAttack() {
    enemy1.attack(yourShip);
    playerHull.innerText = '';
    playerHull.append(`Your Hull: ${yourShip.hull}`);
    if (yourShip.isDead) {
        alert('you got destroyed by an enemy ship')
    }
}