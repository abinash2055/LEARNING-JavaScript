// ..........Events  .....................

let btn1 = document.querySelector("#btn1");

// btn1.onClick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };

let div1 = document.querySelector("div");
div1.onmouseover = () => {
  console.log("You are clicked twice inside div");
};

// ..........Events Object .....................

btn1.onClick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};



// ..........Events Listener .....................

// node.addEventListener( event, callback)

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked -- handler 1  wah!!");
})

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked -- handler 2  wah!!");
})

// line no. 49 is done such that handler 3 function has same function to remove also.
// handler3 is same for both addEventListener and removeEventListener

const handler3 = () => {
  console.log("Button 1 was clicked -- handler 3  wah!!");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked -- handler 4  wah!!");
})

btn1.addEventListener("click", (evt) => {
    console.log("Button 1 was clicked -- handler  wah!!")
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
})

// node.removeEventListener( event, callback)  ---> the callback reference should be same to remove.

btn1.removeEventListener("click", handler3)


// Practice Question --- 1
// Create a toggle button that should changes the screen to dark-mode when click & light-mode when clicked again

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.add("dark"); // Add the dark class
    body.classList.remove("light"); // Remove the light class
  } else {
    currentMode = "light";
    body.classList.add("light"); // Add the light class
    body.classList.remove("dark"); // Remove the dark class
  }

  console.log(currentMode);
});


