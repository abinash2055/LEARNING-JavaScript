// let var const difference

console.log("let const var difference");

// var and let both are used as similar to declare a variable but they have some differences
// var can be redeclared but not possible in let and const

const hero = "Abinash"; // const cannot be redeclared and fixed allover the code
console.log(hero);

// var a = 67;
// var b = "Abinash";
// var c = null
// var d = undefined
// var e = true
// var f = false
// var g = [1, 2, 3, 4, 5]
// var h = { name: "Abinash", age: 21 }

{
  var b = "this";
  console.log(b); // it changes above value of b to this and prints twice of this
  // as is because of block scope which is limited within {} brackets only then above value of b
}

let a = 67;
let b = "Abinash";
let c = null;
let d = undefined;
let e = true;
let f = false;
let g = [1, 2, 3, 4, 5];
let h = { name: "Abinash", age: 21 };

{
  let b = "this";
  console.log(b); // It only change the local scope of b and again prints Abinash from above let value stored in b
  // as first block statement then above value of b executes
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h)
