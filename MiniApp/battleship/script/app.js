import { PlayerShip } from "./classes.js";
import { enemy0, enemy1, enemy2, enemy3, enemy4 } from "./enemyship.js";

// create objects of you and enemy
const yourShip = new PlayerShip('zoey');
// const enemy1 = new EnemyShip('enemy no.1');
const enemies = [enemy0, enemy1, enemy2, enemy3, enemy4];

// create & get player elements
const playerAttackBtn = document.getElementById('player-attack');
const playerRetreat = document.getElementById('player-retreat');

const playerHull = document.getElementById('player-hull');
const playerFirePower = document.getElementById('player-firepower');
const playerAccuracy = document.getElementById('player-accuracy');

// create some indicators:
let myTurn;
let remainingEnemy = 5;

// sound
const blaster = document.createElement("AUDIO");
blaster.setAttribute("src", "../sound/blaster.mp3");
const fighterSound = document.createElement("AUDIO");
fighterSound.setAttribute("src", "../sound/tie-fighter-fire-1.mp3");
const explosionSound = document.createElement("AUDIO");
explosionSound.setAttribute("src", "../sound/TIE fighter explode.mp3");
const start = document.querySelector('[data-button]');
const darthVaderMusic = document.createElement("AUDIO");
darthVaderMusic.setAttribute("src", "../sound/imperial_march.mp3");

// explosion
const explode = document.createElement("img");
explode.setAttribute("src", "https://i.gifer.com/WzMJ.gif");

// winning  & losing message
const winningMessage = document.createElement("div");
winningMessage.classList.add("winningMessage");
winningMessage.innerText = "Congratulations, you are now officialy lord of the space";
const losingMessage = document.createElement("div");
losingMessage.innerText = "You died, please try again."

// create enemy section
const enemyTerritory = document.querySelector('.enemy-ships');

for (let i = 0; i < enemies.length; i++) {
    const enemyContainer = document.createElement('div');
    enemyContainer.classList.add(`enemy${i}`);
    const enemyFigure = document.createElement('img');
    enemyFigure.setAttribute("src", "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png?region=0%2C71%2C812%2C457");
    enemyFigure.setAttribute("class", `enemy-figure${i}`);
    const enemyName = document.createElement('h2');
    enemyName.innerText = `Enemy ${i}`;
    const enemyBtn = document.createElement('button');
    enemyBtn.classList.add(`enemy-attack-btn${i}`);
    enemyBtn.innerText = 'attack';
    const statusReport = document.createElement('h4')
    statusReport.innerText = 'Status Report';
    const enemyHull = document.createElement('div')
    enemyHull.classList.add(`enemy-hull${i}`);
    enemyHull.innerText = 'Enemy Hull: ' + enemies[i].hull;
    const enemyFirePower = document.createElement('div')
    enemyFirePower.innerText = 'Enemy FirePower: ' + enemies[i].firepower;
    const enemyAccuracy = document.createElement('div')
    enemyAccuracy.innerText = 'Enemy Accuracy: ' + enemies[i].accuracy;

    enemyTerritory.appendChild(enemyContainer).appendChild(enemyName);
    enemyName.append(enemyFigure);
    enemyName.append(statusReport);
    enemyName.append(enemyHull);
    enemyName.append(enemyFirePower);
    enemyName.append(enemyAccuracy);
    enemyName.append(enemyBtn);
}

const enemyAttackBtns = document.querySelectorAll('button.enemy-attack-btn0, button.enemy-attack-btn1, button.enemy-attack-btn2, button.enemy-attack-btn3, button.enemy-attack-btn4')

// create html elements for displaying status of player and enemy
playerHull.append(`${yourShip.hull}`);
playerFirePower.append(`${yourShip.firepower}`);
playerAccuracy.append(`${yourShip.accuracy}`);


start.addEventListener('click', startGame);

function startGame() {
    myTurn = true;
    location.reload()
}

// Main game logic

// player actions

playerAttackBtn.addEventListener('click', playerAttack);

function playerAttack() {
    let enemyNum = prompt(`which enemy do you want to attack? (0 - 4)`);
    let curEnemy = enemies[enemyNum];
    let curEnemyHull = document.querySelector(`.enemy-hull${enemyNum}`);

    myTurn ? openFireBtn(playerAttackBtn) : ceaseFireBtn(playerAttackBtn);    

    yourShip.attack(curEnemy);
    blaster.play();

    swapTurns();
    curEnemyHull.innerText = '';
    curEnemyHull.innerText = `Enemy Hull: ${curEnemy.hull}`;
    if (curEnemy.isDead) {
        // explosion gif here
        document.querySelector(`.enemy-figure${enemyNum}`).src = "https://i.gifer.com/WzMJ.gif";

        // alert('enemy is destroyed!')
        remainingEnemy--;
        explosionSound.play();
        // delete that enemy
        setTimeout(() => deleteEnemy(enemyNum), 2000)
    }
    if (remainingEnemy === 0) {
        enemyTerritory.append(winningMessage);
        darthVaderMusic.play();
    }
}

playerRetreat.addEventListener('click', () => yourShip.retreat());


// enemy actions

for (let i = 0; i < enemyAttackBtns.length; i++) {
    const currBtn = document.querySelector(`.enemy-attack-btn${i}`);
    currBtn.addEventListener('click', enemyAttack);
}

const enemyAttackBtn0 = document.querySelector(`.enemy-attack-btn0`);
const enemyAttackBtn1 = document.querySelector(`.enemy-attack-btn1`);
const enemyAttackBtn2 = document.querySelector(`.enemy-attack-btn2`);
const enemyAttackBtn3 = document.querySelector(`.enemy-attack-btn3`);
const enemyAttackBtn4 = document.querySelector(`.enemy-attack-btn4`);

function enemyAttack(e) {
    if (e.target.classList == 'enemy-attack-btn0') {
        enemyAttackHelper(enemy0);
    }
    if (e.target.classList == 'enemy-attack-btn1') {
        enemyAttackHelper(enemy1);
    }
    if (e.target.classList == 'enemy-attack-btn2') {
        enemyAttackHelper(enemy2);
    }
    if (e.target.classList == 'enemy-attack-btn3') {
        enemyAttackHelper(enemy3);
    }
    if (e.target.classList == 'enemy-attack-btn4') {
        enemyAttackHelper(enemy4);
    }
}

function enemyAttackHelper(enemy) {  
    enemy.attack(yourShip);
    swapTurns();
    openFireBtn(playerAttackBtn);

    fighterSound.play();
    playerHull.innerText = '';
    playerHull.innerText = `Your Hull: ${yourShip.hull}`;
    if (yourShip.isDead) {
        alert('you got destroyed, please restart the game!')
    }
}

// utility functions

function swapTurns() {
    myTurn = !myTurn;
}

function ceaseFireBtn(btn) {
    btn.setAttribute("disabled", "");
}

function openFireBtn(btn) {
    btn.removeAttribute("disabled");
}

function deleteEnemy(enemyNum) {
    let enemeyToBeDeletedByClass = document.querySelector(`.enemy${enemyNum}`);
    enemeyToBeDeletedByClass.style.display = "none";
}