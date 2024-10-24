// Fetch API --> provides interface for fetching resources.
// uses request and response object --> fetch method is used to fetch a data
// API ---> full form is Application Programming Interface

// AJAX ---> Asynchronous JS and XML ---> old version in XMl file format

// JSON ---> JS Object Notation --> new version in JSON file format

// json() ---> method() that returns second promise to resolve the result parsing the response body text as JSON.
// (I/P is JSON and O/P is JS object)
//---> JSON to JS object conversion

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("Getting data of URL........");
  let response = await fetch(URL); // GET request
  console.log(response); // JSON Format
  console.log(response.status);
};
console.log(getFacts());

// using Json
const getFacts1 = async () => {
  console.log("Getting data of URL........");
  let response = await fetch(URL); // GET request
  console.log(response); // JSON Format
  let data = await response.json();
  console.log(data);
  console.log(data[0]);
  console.log(data[0].text);
};
console.log(getFacts1());

// adding innerHTML also in normal way
const getFacts2 = async () => {
  console.log("Getting data of URL........");
  let response = await fetch(URL); // GET request
  console.log(response); // JSON Format
  let data = await response.json();
  console.log(data);
  console.log(data[0]);
  console.log(data[0].text);
  factPara.innerText = data;
  factPara.innerText = data[0];
  factPara.innerText = data[0].text;

  factPara.innerText = data[1];
  factPara.innerText = data[1].text;
};
btn.addEventListener("click", getFacts2);
