// DOM ---> accessing HTML by JavaScript

// console.log() ---> it just prints the values..
// console.dir()  ---> prints object ---> prints their properties and methods..

/*
                The tree like structure  (Hierarchy)
window --> document --> HTML  ( Here windows, document is called node or object)
    HTML contains             ( Here windows, document is called node or object)
        a. Head
        b. Body

a. Head contains              ( Here Head is called node or object)
    1. Meta
    2. Meta
    3. title
    4. Link
    5. Script --->  this script also written in Head Portion

b. Body Contains              ( Here Body is called node or object)
    1. Div
    2. Script --->  this script also written in Head Portion

    1. Div contains           ( Here Div is called node or object)
        i. Img Tag
        ii. h Tag       h --> Header
        iii. p Tag      p --> Paragraph
        iv. div Tag     and many more..
*/

console.log("Hello Every-One");
alert("Hello Coders");

// to print window
console.log(window);
window.console.log("Hello from Window");

console.dir(window)            // properties and methods

// both line 40 and 43 prints same result
console.dir(window.document)    // properties and methods
console.log(window.document)    // prints HTML structure

console.dir(document)       // properties and methods
console.log(document)       // prints HTML structure

console.dir(document.body)  // properties and methods
console.log(document.body)  // prints HTML structure

console.log(document.body.childNodes)
console.log(document.body.childNodes[1])

///...................DOM MANIPULATION
let button = document.getElementById("myId")
console.dir(button);

let header = document.getElementsByClassName("myClass");
console.dir(header);
console.log(header)

let Paragraph = document.getElementsByTagName("p")
console.dir(Paragraph);

// for 1st element of paragraph
let element1 = document.querySelector("p")  // for 1st element of para
console.dir(element1);

// for all element of paragraph
let all1 = document.querySelectorAll('p');
console.dir(all1);

// for 1st element of class name
let element2 = document.querySelector(".myClass")
console.dir(element2);

// for all element of class name
let all2 = document.querySelectorAll('.myClass');
console.dir(all2);

// for 1st element of id name
let element3 = document.querySelector("#myId")
console.dir(element3);
// for all element of id name is not created

///...................DOM MANIPULATION PROPERTIES................
// a. tagName :: return tag for element nodes
console.log(element3.tagName)  //prints Id
console.log(element2.tagName)  //prints Class
console.log(element1.tagName)  //prints paragraph

// b. innerText :: return the text content of the element and all its children
let div = document.querySelectorAll("div");
console.dir(div);
let text = div.innerText;
console.dir(text);

// c. innerHTML :: returns the plain text or HTML content in the element
let area = div.innerHTML;
console.dir(area);

// d. textContent :: returns textual content even for hidden elements.
let inner = div.innerText = "query";
console.dir(inner)

// Practice Question --- 1
// Create H2 heading element with Text - "Hello JavaScript", Append "from Coding student towards Coding School" to this text using JS
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Coding student towards Coding School";

// Practice Question --- 2
// Create 3 div with common class name - "box". Access them & add some unique text to each of them

let dis = document.querySelectorAll(".box");
let idx = 1;

for (dis of dis) {
  console.log(dis.innerText);
  dis.innerText = `New unique value ${idx}`;
  idx++;
}


