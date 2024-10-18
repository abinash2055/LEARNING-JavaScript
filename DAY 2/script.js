// 1............................Arithmetic Operator

let a = 12;
let b = 5;

console.log("a = ", a); // value of a = 12
console.log("b = ", b); // value of b = 5

console.log("a + b = ", a + b); // addition of two numbers = 17
console.log("a - b = ", a - b); // subtraction of two numbers = 7
console.log("a * b = ", a * b); // multiplication of two numbers = 60
console.log("a / b = ", a / b); // division of two numbers = 2.4

console.log("b + a = ", b + a); // addition of two numbers = 17
console.log("b - a = ", b - a); // subtraction of two numbers = -7
console.log("b * a = ", b * a); // multiplication of two numbers = 60
console.log("b / a = ", b / a); // division of two numbers = 0.41666667

// Modulus Operator => value of remainder after division = 2
console.log("a % b = ", a % b);

// exponential Operator => value of power of a number ( a^b) = 248832
console.log("a ** b = ", a ** b);

// Modulus Operator => value of remainder after division = 5
console.log("b % a = ", b % a);

// exponential Operator => value of power of a number (b^a) = 5
console.log("b ** a = ", b % a);

let c = 12;

c++; // Unary Operator => incremental => a++ means ( c + 1 ) = 13
console.log("c = ", c); // print value then increases its value

++c; // Unary Operator => incremental => a++ means ( c + 1 ) = 14
console.log("c = ", c); // increase value then print

c--; // Unary Operator => Decremental => --a means ( c - 1 ) ==> 13 - 1 = 13
console.log("c = ", c); // print then decrease its value

--c; // Unary Operator => Decremental => --a means ( c - 1 ) ==> 13 - 1 = 12
console.log("c = ", c); // decrease then print value

let d = 5;

d++; // Unary Operator => incremental => a++ means ( d + 1 ) = 6
console.log("d = ", d); // print then increase its value

++d; // Unary Operator => incremental => a++ means ( d + 1 ) = 7
console.log("d = ", d); // increase then print it value

d--; // Unary Operator => Decremental => --a means ( d - 1 ) = 6
console.log("d = ", d); // print then decrease its value

--d; // Unary Operator => Decremental => --a means ( d - 1 ) = 5
console.log("d = ", d); // decrease then print its value

// 2............................Assignment Operator
let p = 12;

p += 4; // p = p + 4
console.log("p = ", p); // p = 12 + 4 = 16

p -= 4; // p = p - 4
console.log("p = ", p); // p = 12 - 4 = 8

p *= 4; // p = p * 4
console.log("p = ", p); // p = 12 * 4 = 48

p /= 4; // p = p / 4
console.log("p = ", p); // p = 12 / 4 = 3

p %= 4; // p = p % 4
console.log("p = ", p); // p = 12 % 4 = 0

p = 12 ** 4; // p = p ** 4
console.log("p = ", p); // p = 12 ** 4 = 20736

let q = 7;

q += 4; // q = q + 4
console.log("q = ", q); // q = 7 + 4 = 11

q -= 4; // q = q - 4
console.log("q = ", q); // q = 7 - 4 = 3

q *= 4; // q = q * 4
console.log("q = ", q); // q = 7 * 4 = 28

q /= 4; // q = q / 4
console.log("q = ", q); // q = 7 / 4 = 1.75

q %= 4; // q = q % 4
console.log("q = ", q); // q = 7 % 4 = 4

q = 12 ** 4; // q = q ** 4
console.log("q = ", q); // q = 7 ** 4 = 2401

// 3............................Comparison Operator

let m = 5;
let w = 5;
let n = 2;
let l = "2"; // string converted to number only if no alphabet is present.

console.log("m == n", m == n); // return boolean value ==> false
console.log("m == n", m == w); // return boolean value ==> true
console.log("m == n", m == l); // return boolean value ==> true
console.log("m === n", m === l); // return boolean value ==> false also check datatype.
console.log("m !== n", m !== l); // return boolean value ==> true also check datatype.
console.log("m != n", m != n); // return boolean value ==> true
console.log("m > n", m > n); // return boolean value ==> true
console.log("m > w", m > w); // return boolean value ==> false
console.log("m < n", m < n); // return boolean value ==> false
console.log("m <= n", m <= n); // return boolean value ==> false
console.log("m >= n", m > n); // return boolean value ==> true
console.log("m >= w", m > w); // return boolean value ==> true

// 4............................Logical Operator

// For AND values
let x = 6;
let y = 5;

let condition_1 = x > y; // return boolean value as true
let condition_2 = x === 6; // return boolean value as true
let condition_3 = x < y; // return boolean value as false
let condition_4 = x === 5; // return boolean value as false
let condition_5 = y === 5; // return boolean value as true

console.log("condition_1 && condition_2 = ", condition_1 && condition_2); // result true
console.log("condition_1 && condition_3 = ", condition_1 && condition_3); // result false
console.log("condition_1 && condition_4 = ", condition_1 && condition_4); // result false
console.log("condition_1 && condition_5 = ", condition_1 && condition_5); // result true
console.log("condition_2 && condition_3 = ", condition_2 && condition_3); // result false
console.log("condition_2 && condition_4 = ", condition_2 && condition_4); // result false
console.log("condition_2 && condition_5 = ", condition_2 && condition_5); // result true
console.log("condition_3 && condition_4 = ", condition_3 && condition_4); // result false
console.log("condition_3 && condition_5 = ", condition_3 && condition_5); // result false
console.log("condition_4 && condition_5 = ", condition_4 && condition_5); // result false

// 4_1.......................For OR values
let z = 6;
let v = 5;

let cond_1 = z > v; // return boolean value true
let cond_2 = z === 6; // return boolean value true
let cond_3 = z < v; // return boolean value false
let cond_4 = z === 5; // return boolean value false
let cond_5 = v === 5; // return boolean value true

console.log("condition_1 || condition_2 = ", cond_1 || cond_2); // result true
console.log("condition_1 || condition_3 = ", cond_1 || cond_3); // result true
console.log("condition_1 || condition_4 = ", cond_1 || cond_4); // result true
console.log("condition_1 || condition_5 = ", cond_1 || cond_5); // result true
console.log("condition_2 || condition_3 = ", cond_2 || cond_3); // result true
console.log("condition_2 || condition_4 = ", cond_2 || cond_4); // result true
console.log("condition_2 || condition_5 = ", cond_2 || cond_5); // result true
console.log("condition_3 || condition_4 = ", cond_3 || cond_4); // result false
console.log("condition_3 || condition_5 = ", cond_3 || cond_5); // result true
console.log("condition_4 || condition_5 = ", cond_4 || cond_5); // result true

// 4_2.......................For NOT values
let f = 6;
let g = 5;

console.log("f not g", f === g); // true
console.log("f not g", f !== g); // false
console.log("f not g", f < g); // false
console.log("f not g", f > g); // false
console.log("f not g", f <= g); // false
console.log("f not g", f >= g); // false
console.log("f not g", !(f < g)); // true
console.log("f not g", !(f > g)); // false
console.log("f not g", !(f <= g)); // true
console.log("f not g", !(f >= g)); // false

// CONDITIONAL STATEMENT
// 1...........................IF STATEMENT

let age = 23;

if (age >= 18) {
  console.log("You are eligible to vote");
}

if (age < 18) {
  console.log("You are not eligible to vote");
}

let mode = "Dark";
let color;

if (mode === "light") {
  color = "White";
}

if (mode === "Dark") {
  color = "Black";
}
console.log("Color is ", color);

// 2...........................IF ELSE STATEMENT
// 2_1...................for color of text

let bg_color;

if (mode === "Dark") {
  bg_color = "White";
} else {
  bg_color = "Black";
}
console.log("Background Color is ", bg_color);

// 2_2...................for color of background

let age_1 = 14;

if (age_1 >= 18) {
  console.log("Voting is possible");
} else {
  console.log("Voting is not possible");
}

// 2_3...................for color of text

let num = 125;
if (num % 2 === 0) {
  console.log("Number is divisible by 2 and value is even = ", num);
} else {
  console.log("Number is not divisible by 2 and value is odd = ", num);
}

// 3...........................ELSE IF STATEMENT

let age_2 = 75;

if (age_2 < 18) {
  console.log("You are Junior citizen of our Country");
} else if (age_2 > 60) {
  console.log("You are Senior citizen of our Country");
} else {
  console.log("You are Youth of our Country");
}

// 4...........................TERNARY OPERATOR
let age_3 = 14;

age_3 >= 18 ? console.log("adult") : console.log("not adult");
console.log("the person is ", age_3, "years old");

let result = 23;
result < 18
  ? console.log("result is not adult")
  : console.log("result is adult");

// 5...........................SWITCH STATEMENT
// For Days of a week
Sunday = 1;
Monday = 2;
Tuesday = 3;
Wednesday = 4;
Thursday = 5;
Friday = 6;
Saturday = 7;

switch (new Date().getDay()) {
  case 1:
    day = "Sunday";
    break;

  case 2:
    day = "Monday";
    break;

  case 3:
    day = "Tuesday";
    break;

  case 4:
    day = "Wednesday";
    break;

  case 5:
    day = "Thursday";
    break;

  case 6:
    day = "Friday";
    break;

  case 7:
    day = "Saturday";
    break;

  default:
    day = "No such Days. Please! choose number from 1 to 7..";
}

console.log("Today the day is", day);

// Practice question 1
/* Get user to i/p a number prompt("Enter a number:"). check if number is divisible  
    by 1,2,3,4,5,6,7,8,9 or not.
*/

// alert means popup in the page
// prompt means popup in the page along it we can sent some message

// Solution opf Practice question 1
let number = prompt("Enter a number:");

if (number % 2 === 0) {
  console.log(number, "is multiple of 2");
} else if (number % 3 === 0) {
  console.log(number, "is multiple of 3");
} else if (number % 4 === 0) {
  console.log(number, "is multiple of 4");
} else if (number % 5 === 0) {
  console.log(number, "is multiple of 5");
} else if (number % 6 === 0) {
  console.log(number, "is multiple of 6");
} else if (number % 7 === 0) {
  console.log(number, "is multiple of 7");
} else if (number % 8 === 0) {
  console.log(number, "is multiple of 8");
} else if (number % 9 === 0) {
  console.log(number, "is multiple of 9");
} else 
  console.log(number, "is not valid");

// Practice question 2
/* Get a code which can give grades to student according to their scores;
80 - 100, A
70 - 79, B
60 - 69, C
50 - 59, D
0 - 49, F
*/
// Solution opf Practice question 2

let score = prompt("Enter a number between 1 to 100 : ")
let grade;

if ( score >= 90 && score <= 100 ) {
    grade = A;
    
} else if ( score >= 70 && score <= 89 ) {
    grade = B;
    
} else if ( score >= 60 && score <= 69 ) {
    grade = C;
    
} else if ( score >= 50 && score <= 59 ) {
    grade = D;
    
} else if ( score >= 0 && score <= 49 ) {
    grade = F;
    
} else {
  console.log("Enter a valid number");
}
console.log("According to your marks obtained, Your grade is = ",grade);
