// Exercise I: find the sum
const num1 = 5;
const num2 = 4;
const sum = num1 + num2;
const expected = 9;
console.log("expected: " + expected, "output: " + sum);

const num3 = 1;
const num4 = num1 * num2;
const sum2 = sum + num3 * num4;
const expected2 = 29;
console.log("expected: " + expected2, "output: " + sum2);

// Excise II: find the average
const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;
const f = 6;
const g = 7;
const h = 8;
const i = 9;
const j = 10;
const avg1 = (a + b + c + d + e) / 5;
const avg2 = (f + g + h + i + j) / 5;
const avg = (avg1 + avg2) / 2;
console.log(`Average of first 5 variables, expected 3, output is ${avg1}`);
console.log(`Average of first 5 variables, expected 8, output is ${avg2}`);
console.log(`Average of all 10 variables, expected 5.5, output is ${avg}`);

// Excise III
// find the average of (4, 10, 22, -30, 55)
const arr1 = [4, 10, 22, -30, 55];
const sumArr1 = arr1.reduce((prev, current) => prev + current);
const lenArr1 = arr1.length;
const avgArr1 = sumArr1 / lenArr1;

// find the average of ( 68, 7, -22, 9, 100);
const arr2 = [68, 7, -22, 9, 100];
const sumArr2 = arr2.reduce((prev, current) => prev + current);
const lenArr2 = arr2.length;
const avgArr2 = sumArr2 / lenArr2;

// find the average of the above;
const avgArr = (avgArr1 + avgArr2) / 2;
// Print in console
console.log(`The average of (4, 10, 22, -30, 55) is expected to be 12.2, and our output is: ${avgArr1}`);
console.log(`The average of (68, 7, -22, 9, 100) is expected to be 32.4, and our output is: ${avgArr2}`);
console.log(`The average of (4, 10, 22, -30, 55, 68, 7, -22, 9, 100) is expected to be 22.3, and our output is: ${avgArr}`);
