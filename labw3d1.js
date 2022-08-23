// A. Q + A

/* How do we assign a value to a variable?

A: we use the "=" to do assignment, for example:
let a = 3; we assign value 3 to a constant "a" we just declared
*/

/* How do we change the value of a variable?

A: we still use "=" to reassign values, for example, from the above example, if we do the following line: a = 4; we are changing the value of a to 4.
 */

/* How do we assign an existing variable to a new variable?

A: same concept as assignment, we can assign a variable to another variable, if we do the following lines:
let b = 10; // we just declared a variable "b" with value of 10;
b = a; // we reassign the value of b to another variable a, which is 4 from the above question. So now b will be 4 instead of 10;
*/

/* Remind me, what are declare, assign, and define?

A: decalare is when we are "making" new things, such as a variable.
   assign is when we are trying to "give" our variable a value.
   define is when we are "making" new functions, classes.
*/

/* What is pseudocoding and why should you do it?

A: pseudocoding is before you write your actual code, you need an outline of how to write your code, pseudocoding is the combination of plain language and some code styles, basically it helps you to write code more efficient and align your mind. A common style of a pseudocode is like:

for (iterate through the array) {
    if the number is bigger than 5 {
        log that number
    }
}

*/

/* What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

I would put 70% of time to think through how to solve a problem, with some ideas, and then into pseudocode, after I have the outline, I can start writing code more efficiently.
*/

// B. Strings
let firstVariable = "Hello World";

firstVariable = 5;

let secondVariable = firstVariable;

secondVariable = 10;

// the value of firstVariable is 5

let yourName = "Yu Zuo";
let greet = `Hello, my name is ${yourName}`


// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// D. The farm
let animal = "cow"
animal = "chicken"
if (animal === 'cow') {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow");
}

// E. Driver's Ed
const age = 18;
if (age >= 16) console.log("Here are the keys!");
else console.log("Sorry, you're too young");

// Loops
// A. The basics

// let i = 0;
// while (i <= 10) console.log(i);

// i = 10;
// while (i <= 400) console.log(i);

// i = 12;
// while (i <= 4000) {
//     console.log(i);
//     i += 3;
// }

// B. Get even
let j = 1;
while (j <= 100) {
    if (j % 2 === 0) {
        console.log(`${j} <-- is an even number`);
    }
    j++;
}

// C. Give me Five
let k = 0;
while (k <= 100) {
    if (k % 5 === 0 && k !== -0) {
        console.log(`I found a ${k}. High five!`);
    }
    if (k % 3 === 0 && k !== -0) {
        if (k % 5 === 0) {
            console.log(`I found a ${k}. High five!`);
        }
        console.log(`I found a ${k}. Three is a crowd`);
    }
    k++;
}

// D. Savings account
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
    bank_account += i;
}
console.log(bank_account);
bank_account = 0;
for (let i = 1; i <= 100; i++) {
    bank_account += i * 2;
}
console.log(bank_account);

/// Arrays & Control flow

/* A. Talk about it:
What are the things in an array called?
elements
Do Arrays guarantee those things will be in order?
not if you sort it if that's what you asked, but they do have index to locate each location
What real-life thing could you model with an array?
a waiting list
*/

// B. Easy Does it & C. Accessing elements
const easy = ["", "", ""];
const randomThings = [1, 10, "Hello", true]
randomThings[0]; // access the 1st element
randomThings[2] = "World"; // change "Hello"
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2]; // access the 3rd element
ourClass[4] = "Octocat";
ourClass.push("Cloud City"); // add new element\
console.log(ourClass);

// E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "This would be my string");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(myArray); // This would mutate (means change) the original array

// F. Biggie Smalls
const num = 8;
if (num < 100) console.log("little number");
else console.log("big number");

// G. Monkey in the Middle
if (num < 5) console.log("little number");
else if (num > 10) console.log("big number");
else console.log("monkey");

// H. What's in your closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  
  // 1.
  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

  // 2.
  kristynsCloset.splice(6, 0, "raybans");

  // 3.
  kristynsCloset[5] = "stained knit hat";

  // 4.
  const shirt = thomsCloset[0][0];

  // 5.
  const pants = thomsCloset[1][1];

  // 6.
  const accessory = thomsCloset[2][2];

  //7.
  console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${accessory}!`);

// Functions

// B. printCool
const printCool = (name) => console.log(`${name.toUpperCase()} is cool`);

// C. calculateCube
const calculateCube = (num) => console.log(Math.pow(num, 3));

// D. isVowel
const isVowel = (char) => ["a", "e", "i", "o", "u"].includes(char) ? true : false;
console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("k"));

// E. getTwoLengths
const getTwoLengths = (str1, str2) => {
    const res = [];
    res.push(str1.length, str2.length);
    return res;
}
console.log(getTwoLengths("haha", "lol"));

// F. getMultipleLengths
const getMultipleLengths = (arr) => {
    const res = [];
    for (let str of arr) res.push(str.length);
    return res;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
const maxOfThree = (num1, num2, num3) => {
    let max = num1;
    const nums = [num1, num2, num3];
    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
const printLongestWord = (arr) => {
    let longest = arr[0];
    for (let str of arr) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects
// A. Make a user object
const user = {
    name: "Yu Zuo",
    email: "test@gmail.com",
    age: 100,
    purchased: []
}

// B. Update the user
user.email = "newemail@gmail.com";
user.age++;

// C. Adding keys and values
user.location = "Boston";

// D. Shopaholic!
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

// E. Object-with-object
user.friend = {
    name: "Thanos",
    age: 1000,
    location: "Titan",
    purchased: []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

// F. loops
for (let item of user.purchased) console.log(item);

for (let item of user.friend.purchased) console.log(item);

// G. Functions can operate on objects
const updateUser = () => {
    user.age++;
    user.name.toUpperCase();
}

const oldAndLoud = (person) => {
    person.age++;
    person.name.toUpperCase();
}

oldAndLoud(user);
console.log(user);

// Cat Combinator
const cat1 = {
    name: "Garfield",
    breed: "British Shorthair",
    age: 10
}
console.log(cat1.age);
console.log(cat1.breed);

const cat2 = {
    name: "Fiddo",
    breed: "Domestic Shorthair",
    age: 5
}

const combineCats = (mama, papa) => {
    const newCat = {};
    newCat.name = mama.name + papa.name;
    newCat.age = 1;
    newCat.breed = `${mama.breed}-${papa.breed}`
    return newCat;
}
console.log(combineCats(cat1, cat2));

const doubleCombine = combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2));

console.log(combineCats(doubleCombine, doubleCombine));