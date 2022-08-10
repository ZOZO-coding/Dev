// Write a program that prints the numbers from 1 to 100 and for multiples of '3' 
// print "Fizz" instead of the number and for the multiples of '5' print "Buzz". 
// If can be multiplied by 3&5 console log 'FizzBuzz'

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz");
    }
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// log even numbers in 0-10
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0 && i !== 0) console.log(i);
}

// log score evaluation phrase:
const score = 45;

if (score >= 80) {
  console.log("You did a good job")
} else if (score >= 70) {
  console.log("keep trying")
} else if (score >= 60) {
  console.log("ehhhh")
} else if (score >= 55) {
  console.log("not too good")
} else if (score < 55) {
  console.log("you'll get em next time")
}