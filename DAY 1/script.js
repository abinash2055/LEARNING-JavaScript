// THIS IS SINGLE LINE COMMENTS

/*  THIS IS MULTI LINE COMMENTS
    THIS 1ST LINE IN MULTI LINE COMMENTS
    THIS 2ND LINE IN MULTI LINE COMMENTS
    THIS 3RD LINE IN MULTI LINE COMMENTS
    THIS 4TH LINE IN MULTI LINE COMMENTS

*/


// 1.............To alert in Browser
alert("Starting JS Good");

// 2.............To print in console from HTML
console.log("Thanks for starting JavaScript") 
console.log("TMy name is ANP") 
console.log("Just started learning JS")  

// 3.............variable declaration
fullName = "Tony Stack";
age = 34;
radius = 14;
price = 365.65
x = null;        // it means no value (absence)
y = undefined;  // it means no specific address presence in variable
isFollow = true;  // boolean value
var FullName = "Tony Stack Son"; 
var totalPrice = 1014;
const game = "WWE and WWF"
let t = BigInt("12312");
let s = Symbol("Hello Coder");

console.log(age);
console.log(radius);
console.log(fullName);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(FullName);
console.log(totalPrice);
console.log(t);
console.log(s);


// 4.............variable declaration by block
{
    let a =5;
    console.log(a);
}

{
    let a = 13;
    console.log(a);
}

// 5.............object declaration
const student = {
    fullName : "Coder Gang",
    age : 34,
    cgpa : 8.94,
    isPass : true
};
console.log(student);
console.log(typeof student);
console.log(student.fullName);
console.log(student.age);
console.log(student.cgpa);
console.log(student.isPass);
console.log(typeof student.fullName);
console.log(typeof student.age);
console.log(typeof student.cgpa);
console.log(typeof student.isPass);

// to increase value of age by plus 1
student["age"] = student["age"] + 1; 
console.log(student["age"]);

// Two ways to print particular value 
console.log(student["cgpa"]);
console.log(student.cgpa);

// 6.............Practice1
const product = {
    title : "Ball Pen",
    rating : 3.5,
    offer : 4,
    price : 980,
    discount : 40,
};

console.log(product);
console.log(product.title);
console.log(product.rating);
console.log(product.offer);
console.log(product.price);
console.log(typeof product.discount);
console.log(typeof product.discount);
console.log(typeof product.discount);
console.log(typeof product.discount);
console.log(typeof product.discount);
console.log(typeof product.discount);

// 7.............Practice2
const profile = {
    userName : "@abinash",
    isFollow : true,
    post : 147,
    followers : 980,
    following : 40,
};

console.log(profie);
console.log(typeof profie);
console.log(profie.userName);
console.log(profie.isFollow);
console.log(profie.post);
console.log(profie.followers);
console.log(profie.following);
console.log(typeof profie.userName);
console.log(typeof profie.isFollow);
console.log(typeof profie.post);
console.log(typeof profie.followers);
console.log(typeof profie.following);