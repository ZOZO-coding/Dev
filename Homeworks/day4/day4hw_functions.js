/* 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.*/
function maxOfTwoNumbersthat(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}
const num1 = 1;
const num2 = 30;
console.log(
  `given 2 numbers: ${num1} and ${num2}, the larger number is ${maxOfTwoNumbersthat(num1, num2)}`
);

/* 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.*/
const maxOfThreethat = (num1, num2, num3) => {
    let max = num1;
    const arr = [num1, num2, num3];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const a = 35;
const b = 45;
const c = 54;
console.log(`given 3 numbers: 35, 45, 54, the largest is ${maxOfThreethat(a, b, c)}`);

/* 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.*/
function isCharAVowelthat(char) {
    const vowel = ["a", "e", "i", "o", "u"];
    return char in vowel ? true : false;
}
console.log(`is k a vowel? ${isCharAVowelthat('k')}`);

/* 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.*/
const sumArraythat = (arr) => {
    return arr.reduce((prev, curr) => prev + curr);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`the sum of the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${sumArraythat(arr)}`);

/* 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.*/
function multiplyArraythat(arr) {
    let res = 1;
    for (let el of arr) {
        res *= el;
    }
    return res;
}
console.log(`the product of all the elements in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${multiplyArraythat(arr)}`);

/* 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.*/
const numArgsthat = (...args) => {
    let counter = args.length;
    return counter;
}
console.log(`the number of arguments passed in to numArgsthat(1, 2, 3, 4, 5) is ${numArgsthat(1, 2, 3, 4, 5)}`);

/* 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".*/
function reverseStringthat(str) {
    return str.split("").reverse().join("");
}
console.log(`the reverse string of "Jordan" is ${reverseStringthat("Jordan")}`);

/* 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.*/
const longestStringInArraythat = (arr) => {
    let longest = 0;
    for (let str of arr) {
        if (str.length > longest) {
            longest = str.length;
        }
    }
    return longest;
}
const names = ['Jordan', 'Yu', 'Andrew', 'Mariessa'];
console.log(`the longest length of all strings in a given array ['Jordan', 'Yu', 'Andrew', 'Mariessa'] is ${longestStringInArraythat(names)}`)

/* 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].*/
function stringsLongerThanthat(arr, num) {
    return arr.filter(word => word.length > num);
}
console.log(`in the given array ['Jordan', 'Yu', 'Andrew', 'Mariessa'], the names that are longer than 5 characters are ${stringsLongerThanthat(names, 5)}`);