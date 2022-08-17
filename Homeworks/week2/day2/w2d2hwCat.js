// create a Cat class
class Cat{
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    // specify 3 methods
    introduction() {
        return `${this.name} is a ${this.age}-year-old ${this.breed}.`
    }

    yawn() {
        return `${this.name} is yawning, Purrrr~`
    }

    feed(food) {
        return `You fed ${this.name} with ${food}`
    }

    boring() {
        return `${this.name} is boring, please pet him/her!`
    }
}

const santai = new Cat("Santai", "British Shorthair", 4);
const lily = new Cat("Lily", "Domestic", 4);

console.log(santai.introduction());
console.log(lily.introduction());

console.log(santai.yawn());
console.log(santai.feed("cat food"));
console.log(santai.boring());

console.log(lily.yawn());
console.log(lily.feed("cat food"));
console.log(lily.boring());

