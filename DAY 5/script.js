// 1................Functions   ---> block of blocks that perform a specific task, can be invoked ( call ) whenever needed

/* Examples
a.         console.log('Hello from Function');
b.         "abc".toUpperCase();
c.         [1, 2, 3].push(4);
*/

// Function Definition without parameter
function myFunction() {
  console.log("Welcome to my first function learning");
  console.log("This is without Parameter function");
}
myFunction(); // Function Call, we can call many times also.

function yourFunction(msg) {
  // msg --> parameter
  // parameter --> input
  console.log(msg);
}
// In function call parameter becomes argument
yourFunction("This is parameter input function"); // argument

// Function to find sum of 2 numbers
function sum(a, b) {
  s = a + b; // local variables --> function block scope
  console.log("Before return"); // it prints
  return s;
  console.log("Before return"); // it doesn't prints
}
let val = sum(42, 73); // we can provide any value
console.log(val);

// 2.......................Arrow Function

const arrowSum = (a, b) => {
  console.log(a + b); // also we can we return process
};
arrowSum(41, 21);

const arrowMul = (a, b) => {
  console.log(a * b);
};
arrowMul(12, 14);

const printHello = () => {
  console.log("Hello Coders");
};

// Practice Question --- 1
/* 
Create a function by function keyword that takes a string as an argument & returns the number of vowel in the string
 */

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "A" ||
      char === "e" ||
      char === "E" ||
      char === "i" ||
      char === "I" ||
      char === "o" ||
      char === "O" ||
      char === "u" ||
      char === "U"
    ) {
      count++;
    }
  }
  console.log("For Normal Function");
  console.log(count);
}
countVowels("LG, SamSung, Nokia, RealMe, MI, iPhone, Sony");

// Practice Question --- 2
/* 
Create a farrow function to perform the same tak of Practice Question --- 1
 */

const ArrowVowel = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "A" ||
      char === "e" ||
      char === "E" ||
      char === "i" ||
      char === "I" ||
      char === "o" ||
      char === "O" ||
      char === "u" ||
      char === "U"
    ) {
      count++;
    }
  }
  console.log("For Arrow Function");
  console.log(count);
};
ArrowVowel(
  "Phone, Mobile, Television, Refrigerator, Laptop, Computer, Speaker"
);

// forEach Loop in Array ---> Methods

let arr = [1, 2, 3, 4, 5, 6];

// values ---> address at each index.
// normal function way
arr.forEach(function printVal(values) {
  console.log("Values printed = ", values);
});

// arrow function way
arr.forEach((values) => {
  console.log("Values printed by arrow => ", values);
});

let arr1 = ["Pune", "Delhi", "Mumbai", "Goa"];
arr1.forEach((values) => {
  console.log("Values printed by arrow => ", values);
});
arr1.forEach((values) => {
  console.log(values.toUpperCase());
});
// to print index also
arr1.forEach((values, index) => {
  console.log(values.toUpperCase(), index);
});
// to print array also not used for string
arr1.forEach((values, index, arr1) => {
  console.log(values, index, arr1);
});

// Practice Question --- 3
/* 
For a given array of numbers, print the square of each value using forEach loop array = [45, 67, 34, 98, 23, 56]
 */

let num = [23, 34, 45, 56, 67, 98];

let calcSquare = (num) => {
  console.log(num * num);
};
num.forEach(calcSquare);

// Map Methods
// find cube of arrays
let m = [1, 2, 3, 4, 5];

let newArr = m.map((values) => {
  return values * values * values;
});
console.log(newArr);

// Filter Methods

let fil = [1, 2, 3, 4, 5, 6, 7, 8];

// even numbers
let evenFil = fil.filter((ans) => {
  return ans % 2 === 0;
});
console.log(evenFil);

// odd numbers
let oddFil = fil.filter((ans) => {
  return ans % 2 !== 0;
});
console.log(oddFil);

// Reduce Methods  ---> returns only single value from many inputs
// sum of array
let sum1 = [2, 1, 6, 4, 6, 5];

const output = sum1.reduce((previous, currentValue) => {
  return previous + currentValue;
});
console.log("Sum of array is = ", output);

// largest element from array
const largest = sum1.reduce((previous, currentValue) => {
  return previous > currentValue ? previous : currentValue;
});
console.log("largest element is = ", largest);

// smallest element from array
const smallest = sum1.reduce((previous, currentValue) => {
  return previous < currentValue ? previous : currentValue;
});
console.log("smallest element is = ", smallest);

// Practice Question --- 4
/* 
We are given array of marks of students [97, 64, 32, 49, 98, 86, 96]. Filter out marks of students that scored 90+.
 */

let marks = [97, 64, 32, 49, 98, 86, 96];

let more = marks.filter((val) => {
  return val > 90;
});
console.log(more);


// Practice Question --- 5
/* 
Take a number n as input from user. Create a array of number from 1 to n.
Use the reduce method to calculate sum and product of all numbers in the array.
 */

let n = prompt("Enter a number to create an Array:");
let array = [];

for(let i = 1; i <= n; i++ ) {
  array[ i - 1 ] = i;
}
console.log(array);

let sumPractice = array.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
})
console.log(sumPractice);

let factorial = array.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
})
console.log(factorial);






