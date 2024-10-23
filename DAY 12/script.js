// callback hell then promise chain then async await
// high priority is async await then promise chain then callback hell

// synchronous means code runs --> particular sequence of instruction in program  and each instruction waits --> previous value to complete execution

// --> Asynchronous
console.log("one");
console.log("two");
console.log("three");

// Asynchronous -->
// some synchronous, imp. instruction get blocked due to previous instruction --> which causes a delay in UI so Asynchronous code execution allow to execute next6 instruction immediately and doesn't block the flow

// wait for 2sec  --> Asynchronous
function hello() {
  console.log("Hello");
}
setTimeout(hello, 2000); // (functionName, time_in_ms ) || 1sec = 1000ms

// wait for 3sec  --> Asynchronous
setTimeout(() => {
  console.log("hello Arrow");
}, 3000);

// doesn't wait any time  --> Synchronous
console.log("four");
console.log("five");
console.log("six");

// CallBack --> function passed as an argument to other function
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(2, 4, (a, b) => {
  console.log(a + b);
});

// callback Hell --> nested callback stacked below one other forming pyramid structure (Pyramid of Doom)

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//delay of 2sec in each data turn by turn  --> callback Hell
getData(1, () => {
  console.log("getting data2..............");
  getData(3, () => {
    console.log("getting data3..............");
    getData(5, () => {
      console.log("getting data4.............");
      getData(7);
    });
  });
});

// same above process by promise chain
// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })

// to solve confused callback hell we use Promises
// Promises --> eventual completion of task --> it is object

let promise = new Promise((resolve, reject) => {
  console.log("I am Promise");
  reject("some error occurred");
});

function getData1(DataId, getNextData1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", DataId);
      if (getNextData1) {
        getNextData1();
      }
    }, 4000);
  });
}

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a latest Promise", res);
    resolve("Promise created and shown");
  });
};

let promise1 = getPromise();
promise1.then((res) => {
  console.log("Promise has Fulfilled", err);
});

promise1.catch((err) => {
  console.log("Promised is rejected ");
});

// Promise Chain
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1 is printed");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2 is printed");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("fetching data2");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});

// Async-Await
// Async ---> always return a promise
// Await ---> pauses execution of its surrounding async function until promise is settled.

async function hello1() {
  console.log("hello from all");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
}

async function getAllData() {
    console.log("Getting Data1  !!!!!!!!!");
  getData(1);
  console.log("Getting Data2  !!!!!!!!!");
  getData(2);
  console.log("Getting Data3  !!!!!!!!!");
  getData(3);
}


// IIFE ----> Immediately Invoked Function Expression
// function that called immediately as soon as it defined

(async function getAllData() {
  console.log("Getting Data1  !!!!!!!!!");
  getData(1);
  console.log("Getting Data2  !!!!!!!!!");
  getData(2);
  console.log("Getting Data3  !!!!!!!!!");
  getData(3);
})();



