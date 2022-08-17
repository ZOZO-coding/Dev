class Pirate {
    constructor(name, temper, isOneEyed) {
        this.name = name;
        this.temper = temper;
        this.isOneEyed = isOneEyed;
    }

    introduction() {
        console.log(`My name is ${this.name}, I'm very ${this.temper}, am I one eyed? ${this.isOneEyed}`);
    }

    attack(weapon) {
        console.log(`${this.name} is attacking you with ${weapon}`);
    }

    promotion(title) {
        console.log(`${this.name} just got promoted as the ${title}`);
    }
}

const seadog = new Pirate("Seadog", "charming", true);
const vexTotem = new Pirate("Vex Totem", "ferocios", true);
const silverTongue = new Pirate("Silver Tongue", "excitable", false);

const dreadful = new Pirate("Dreadful", "matured", false);
const hook = new Pirate("Hook", "delightful", true);
const redbeard = new Pirate("Redbeard", "spirited", true);

const royalFortune = [seadog, vexTotem, silverTongue];
const theFlyingDragon = [dreadful, hook, redbeard];

royalFortune.forEach(pirate => pirate.introduction());
theFlyingDragon.forEach(pirate => pirate.introduction());