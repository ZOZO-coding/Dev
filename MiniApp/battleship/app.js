import { PlayerShip, EnemyShip } from "./classes.js";
import {enemy2, enemy3, enemy4, enemy5, enemy6} from "./enemyship.js";
// create which turn indicator:
let yourTurn;


// create objects of you and enemy
const yourShip = new PlayerShip('zoey');
const enemy1 = new EnemyShip('enemy no.1');
const enemies = [enemy2, enemy3, enemy4, enemy5, enemy6];

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

const enemyTerritory = document.querySelector('.enemy-ships');

for (let i = 0; i < enemies.length; i++) {
    const enemyContainer = document.createElement('div');
    const enemyName = document.createElement('h2');
    enemyName.innerText = `Enemy ${i}`;
    const enemyBtn = document.createElement('button');
    enemyBtn.innerText = 'attack';
    const statusReport = document.createElement('h4')
    statusReport.innerText = 'Status Report';
    const enemyHull = document.createElement('div')
    enemyHull.innerText = 'Enemy Hull: ' +  enemies[i].hull;
    const enemyFirePower = document.createElement('div')
    enemyFirePower.innerText = 'Enemy FirePower: ' +  enemies[i].firepower;
    const enemyAccuracy = document.createElement('div')
    enemyAccuracy.innerText = 'Enemy Accuracy: ' +  enemies[i].accuracy;
    
    enemyTerritory.appendChild(enemyContainer).appendChild(enemyName).appendChild(statusReport).appendChild(enemyHull).appendChild(enemyFirePower).appendChild(enemyAccuracy).append(enemyBtn);
}

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
        
    }
}

function swapTurns() {
    yourTurn = !yourTurn;
}

function ceaseFireBtn(btn) {
    btn.setAttribute("disabled", "");
}

function openFireBtn(btn) {
    btn.removeAttribute("disabled");
}