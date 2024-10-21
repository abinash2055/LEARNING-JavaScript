// // DOM Manipulation 
// // 1......................Attributes
// // 1_1....................getAttributes

let div = document.querySelector("div");
console.log(div);   // print div attributes

let id = div.getAttribute("id");
console.log(id);  // print id attributes


let name = div.getAttribute("name");
console.log(name);  // print name attributes


let para = document.querySelector("p");
console.log(para.getAttribute("class"));   // print class of p tag




// // 1_2.........................setAttributes
// print p tag class name to next name for class attributes

console.log(newPara.setAttribute("class", "newClass"));  

let name1 = div.setAttribute("name", "newName");
console.log(name1);  // print name attributes

let id1 = div.setAttribute("id", "newId");
console.log(id1);  // print id attributes

let para1 = div.setAttribute("class", "newClass");
console.log(id1);  // print id attributes



// 1_3..........node-Style Attributes

let div2 = document.querySelector("div");

div2.style.backgroundColor = "green";
div2.style.backgroundColor = "purple";
div2.style.fontSize = "26px";
div2.innerText = "This is a Div Tag Naw(Latest)";


// 1_4.....................Insert Element
let newBtn = document.createElement("button")
newBtn.innerText = "Click Me"
console.log(newBtn)

// 1_4_1...........node append(el)  --> adds at end of node (inside)
let div2 = document.querySelector("div");
div2.append(newBtn)

// 1_4_2...........node prepend(el) --> adds at start of node (inside)
div2.prepend(newBtn);

// 1_4_3...........node before(el)  --> adds before node(outside)
div2.before(newBtn);

// 1_4_4...........node after(el)   --> adds after the node (outside)
div2.after(newBtn);

let p = document.querySelector("p");
p.after(newBtn);


let newHeading = document.createElement("h2");
newHeading.innerHTML = "<i>Hi, I am new Coder here</i>"

document.querySelector("body").prepend(newHeading);


// 1_5.......................Delete Element

// node.remove()  --> removes the node
let para2 = document.querySelector ("p");
para2.remove();


// Practice Question --- 1
// Create a new button element. Give it a text "click me", bg-color "red" and text-color "white".. Insert the button as the first element inside the body tag

let newBtn1 = document.createElement("button");
newBtn1.innerText = "click me"

newBtn1.style.color = "white";
newBtn1.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn1);


// Practice Question --- 2
// Create a <p> tag in html, give it a class & some styling. now create a new class in CSS and try to append this class to <p> element
// notice, how overwrite the class name when adding new one, So, solve this problem using classList

let para3 = document.querySelector("p");
para3.classList.add("class", "newClass")

