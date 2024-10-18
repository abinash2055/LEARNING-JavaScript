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
countVowels("LG, SamSung, Nokia, Redmi, MI, iPhone");


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
}
ArrowVowel("Phone, Mobile, Television, Refrigerator, Laptop, Computer, Speaker" );  





























