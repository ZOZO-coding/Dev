class Hamster {
    constructor(name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');
    }
    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    // getters
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getWeight() {
        return this.weight;
    }
    // methods
    greet() {
        console.log(`Hello, ${this.name}`);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const timmy = new Person("Timmy");

for (let i = 0; i < 5; i++) {
    timmy.ageUp();
}

for (let i = 0; i < 5; i++) {
    timmy.eat();
}

for (let i = 0; i < 5; i++) {
    timmy.exercise();
}

for (let i = 0; i < 9; i++) {
    timmy.ageUp();
}

const gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);

for (let i = 0; i < 15; i++) {
    timmy.ageUp();
}

timmy.eat();
timmy.eat();

timmy.exercise();
timmy.exercise();

// Chef Make Dinners

class Dinner {
    constructor(type) {
        this.type = type;
    }
    get getType() {
        return this.type;
    }
}

class Chef {
    constructor(name) {
        this.name = name;
    }

    makeDinner(appetizers, entrees, desserts) {
        return `Here is your dinner menu, prepared by Chef ${this.name}: appetizer menu: ${appetizers}, entree menu: ${entrees}, dessert menu: ${desserts}. Please enjoy!`
    }
}

const appetizer1 = new Dinner("half dozen of oysters");
const appetizer2 = new Dinner("charcoaled octopus");
const appetizer3 = new Dinner("chef special uni spoon");
const appetizers = [appetizer1.type, appetizer2.type, appetizer3.type];
const entree1 = new Dinner("surf and turf");
const entree2 = new Dinner("pan-seared sea bass");
const entree3 = new Dinner("shrimp fried rice");
const entrees = [entree1.type, entree2.type, entree3.type];
const dessert1 = new Dinner("chocolate mousse");
const dessert2 = new Dinner("cheesecake");
const dessert3 = new Dinner("vanilla icecream");
const desserts = [dessert1.type, dessert2.type, dessert3.type];
const gordon = new Chef("Gordon Ramsay");
console.log(gordon.makeDinner(appetizers, entrees, desserts));