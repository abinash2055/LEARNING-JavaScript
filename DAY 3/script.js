// 1................Loops

// 1_1. Never do any infinite series Loop

// Printing manually 
console.log("Hello Coder from KTM");
console.log("Hello Coder from KTM");
console.log("Hello Coder from KTM");
console.log("Hello Coder from KTM");
console.log("Hello Coder from KTM");

// 1_2. Using For Loop
for (let i = 1; i <= 10; i++ ) {
    console.log("Hello Coder from KTM");
}

// 1_2.1 Using For loop
for (let i = 1; i <= 5; i++ ) {
    console.log("i = ", i);
}

// 1_2.2 For loop to calculate sum of 1 to n numbers
let sum = 0;
let n = 14;

for (let i = 0; i <= n; i++) {
    sum = sum + i;
}
console.log("Sum of 1 to n = ", sum);


// 1_3. Using While Loop
// variable initialization do before loop starting 
// check condition then print values

// printing i from 1 to 5
let i = 1;
while ( i <= 5 ) {
    console.log("i = ", i);
    i++;
} 

// Printing Text for 5 times 
let m = 1;
while (m <= 5) {
  console.log("Hello Coders");
  m++;
} 


// 1_4. Using Do While Loop
// print at-least one time values is run and then check condition

let r = 1;
do {
    console.log("r = ", r);
    r++;
} while ( r <= 5 );

let q = 20;
do {
  console.log("q = ", q);
  r++;
} while (q <= 14);

// 1_5 Using For-Of Loop
// helps loop in string and arrays => iteration -> characters

let str = "Coders";
let length = 0;  // initialization for string length
for(let val of str ) {  
    console.log("string Characters are = ",val);
    length++;
}
console.log("String is = ", str);
console.log("Total Size of string is = ", length);  // printing total size = 6

// 1_5 Using For-In Loop
// helps loop in objects 

let student = {
    name: "Coder from KTM",
    age: 34,
    gpa: 7.8,
    isPass: true,
}

for ( let key in student) {
    console.log("key =", key, "and values = ", student[key])
}

// Practice Question --- 1
// Print all even and odd number from 0 to 100


// For even number separately
for (let u = 0; u <= 100; u++ ) {
    if ( u % 2 === 0 ) {  
    console.log("even numbers are = ", u);
    } 
}

// for odd numbers separately
for (let v = 0; v <= 100; v++) {
  if (v % 2 !== 0) {
    console.log("odd numbers are = ", v);
  }
}

// for even and odd numbers in 1 code
for (let y = 0; y <=100; y++ ) {
    if ( y % 2 === 0 ) {
        console.log("even numbers are = ", y); 
    } else {
        console.log("odd numbers are = ", y);
    }
}



// Practice Question --- 2
// Create a game where you start with any random game number. 
/* Ask the user to keep guessing the game number until user enter correct value. */

let gameNum = 25; // suppose
let userNum = prompt("Guess the game Number");

while ( userNum != gameNum ) {
    userNum = prompt("Wrong number. Guess Again")
}

console.log("Congratulation!! you entered the right number, Got it.")




// 2................Strings

let str1 = "Hello Coders";
console.log("Length = ", str1);
let str2 = 'Hello EveryOne';
console.log("Length = ", str1);

// 2_1.....to calculate length of string
str1.length
console.log("Length = ", str1.length);
str2.length
console.log("Length = ", str2.length);

// 2_2.......to find particular indices of a string
// For string 1
str1[0];
console.log("index = ", str1[0]);
str1[1];
console.log("index = ", str1[1]);
str1[2];
console.log("index = ", str1[2]);
str1[3];
console.log("index = ", str1[3]);
str1[4];
console.log("index = ", str1[4]);
str1[5];
console.log("index = ", str1[5]);
str1[6];
console.log("index = ", str1[6]);
str1[7];
console.log("index = ", str1[7]);
str1[8];
console.log("index = ", str1[8]);
str1[9];
console.log("index = ", str1[9]);
str1[10];
console.log("index = ", str1[10]);
str1[11];
console.log("index = ", str1[11]);
str1[12];
console.log("index = ", str1[12]);


// For string 2
str2[0];
console.log("index = ", str2[0]);
str2[1];
console.log("index = ", str2[1]);
str2[2];
console.log("index = ", str2[2]);
str2[3];
console.log("index = ", str2[3]);
str2[4];
console.log("index = ", str2[4]);
str2[5];
console.log("index = ", str2[5]);
str2[6];
console.log("index = ", str2[6]);
str2[7];
console.log("index = ", str2[7]);
str2[8];
console.log("index = ", str2[8]);
str2[9];
console.log("index = ", str2[9]);
str2[10];
console.log("index = ", str2[10]);
str2[11];
console.log("index = ", str2[11]);
str2[12];
console.log("index = ", str2[12]);
str2[13];
console.log("index = ", str2[13]);

// 2_3....................Template Literals
let SpecialString = `This is a special string ${1 +2 + 3}`; // used back tick in objects

console.log("Special sentence = ", SpecialString);
console.log("Special sentence = ", typeof SpecialString);

let obj = {
    items: "pen",
    price: 10,
    place: "KTM",
}
console.log("The cost of", obj.items, "is", obj.price, "rupees and located at", obj.place)

// using template literals... ---> string interpolation 
let output = `the cost of ${obj.items} is ${obj.price} rupees and located at ${obj.place}`
console.log(output);

// printing string in different lines ---> escape characters
console.log("Hello Single Line"); // print in same line
console.log("Hello\nNext Line");  // print in next line
console.log("Hello\tNext Line");  // print in tab{space} line


// 2_4........................string methods{functions}
// JS are im-mutable

let st = "Hello Coding Guys";
console.log("NormalCase = ", st);

let upperCaseText = st.toUpperCase();
console.log("UpperCase = ", upperCaseText);

let lowerCaseText = st.toLowerCase();
console.log("LowerCase = ", lowerCaseText);

// str.trim ---> removes white-spaces ---> starting and ending points

let tr = "   Hello Coders   Guys   "
console.log("Texts becomes normal = ", tr);  // prints ---> (Hello Coders   Guys)



// str.slice(starting index,ending index)   // returns parts of strings 

let numbers = '0123456789';
console.log(numbers.slice(1,5)) // 5th index is not included
console.log(numbers.slice(1)) // 1st index to last numbers
console.log(numbers.slice()) // provides all numbers

let char = 'Pneumonia';
console.log(numbers.slice(1, 7));  // 7th index is not included
console.log(numbers.slice(2));  // 2nd index to last characters
console.log(numbers.slice());  // provides all characters


// str1.concat(str2)  ---> join str2 with str1
let old_str = "add other strings ";
let new_str = "added new strings";
let newest = old_str.concat(new_str);
let other_method = old_str + new_str;  // other method to concat

console.log(newest);
console.log(other_method);


// str.replace(searchVal, newVal)
let rep = "Yellow"
console.log(rep.replace("Y", "H"))  // changes Yellow to Hellow

// changes only 1 w to f --> other remains as it is.
let repl = "Yellowww";
console.log(repl.replace("w", "f")) 

// to replace all char we use replaceAll method
console.log(repl.replaceAll("w", "f"));  


//str.charAt(indexValue)

let L = "JS is coding language"
console.log(L.charAt(0)) // print --> J
console.log(L.charAt(1)) // print --> S

console.log(L.charAt(2)) // print --> (space)

console.log(L.charAt(3)) // print --> i
console.log(L.charAt(4)) // print --> s

console.log(L.charAt(5)) // print --> (space)

console.log(L.charAt(6)) // print --> c
console.log(L.charAt(7)) // print --> o
console.log(L.charAt(8)) // print --> d
console.log(L.charAt(9)) // print --> i
console.log(L.charAt(10)) // print --> i
console.log(L.charAt(11)) // print --> n
console.log(L.charAt(12)) // print --> g

console.log(L.charAt(13)) // print --> (space)

console.log(L.charAt(14)) // print --> l
console.log(L.charAt(15)) // print --> a
console.log(L.charAt(16)) // print --> n
console.log(L.charAt(17)) // print --> g
console.log(L.charAt(18)) // print --> u
console.log(L.charAt(19)) // print --> a
console.log(L.charAt(20)) // print --> g
console.log(L.charAt(21)) // print --> e




// String Practice Question 

/* Prompt the user to enter full name. Generate a username for them based on input. Start username with "@", followed by their fullname and ending with their full name length.
  Eg : -> users name = "Fleaky", username should be "@fleaky6"
*/

let fullName = prompt("Enter your Full Name with Spaces in small characters");

let username = "@" + fullName + fullName.length;
console.log(username)