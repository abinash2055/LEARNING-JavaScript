// 1................Arrays ---> collection of items
// strings are immutable but arrays are mutable.

let marks = [ 97, 82, 75, 64, 57, 41, 36 ]
console.log(marks);
console.log(marks.length);  // length is property
console.log(typeof marks);  // shows object not array


// changes array[0] from 97 to 98
marks[0] = 98   // only possible in numbers
console.log(marks[0]);


// indices are in linear values
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);



// 2......................Loops in Arrays

let heroes = [ "Iron Man", "Super Man", "Bat Man", "Avengers", "Hulk", "Thor", "Spider Man", "Ant Man" ];
console.log(heroes);


// 2_1...........For Loop  ---> needed total length

for ( let i = 0; i < heroes.length; i++ ) {
    console.log(heroes[i]);
}

// 2_1_1.....For Loop in For of Loop

for ( let hero of heroes ) {
    console.log(hero);
}


let cities = [ "Tokyo", "Beijing", "HongKong", "Amazon", "ThaiLand", "Mumbai", "Goa", "California", "Los Angeles", "Los Vegas" ]

for (let city of cities) {
  console.log(city);
  console.log(city.toUpperCase());
  console.log(city.toLocaleLowerCase());
}


// Practice Question -- 1
/*  For given array with students marks as [85, 97, 44, 37, 76, 60].
Find average marks of the entire class  */

let mark = [ 85, 97, 44, 37, 76, 60 ];
console.log(mark);

let sum = 0;

for ( let val of mark ) {
    sum += val;      // sum = sum + val;
}  
console.log("Sum of Array = ", sum);

let avg = sum / mark.length;
console.log(`Average value of Array is = ${avg}`)


// Practice Question -- 2
/*  For given array with 5 items as [250, 645, 300, 900, 50].
All items have offer of 10% OFF on them.
Change the array to store final price after applying discount offer of 10%  */


// using For of method
let items = [250, 645, 300, 900, 50];
console.log(items);

let idx = 0;
for ( let val of items ) {
    console.log(`The value at index ${idx} = ${val}`)
    let offer = val / 10;
    items[idx] = items[idx] - offer;
    console.log(`Values after offer in each items = ${items[idx]}`)
    idx++;
}

// using For loop
let item = [250, 645, 300, 900, 50];
console.log(item);

for ( let i = 0; i < item.length; i++) {
    let offer = item[i] / 10;
    item[i] -= offer;     // item[i] = items[i] - offer;
}
console.log(`Price after offer in each item = ${item}`)





// 3......................Methods in Arrays

//3_1.....................Push in Array  ---> add to end

let veggies = ["Cauliflower", "Potato", "Ladyfinger", "Beans", "Tomato", "Green Leafy Vegetables"];
console.log(veggies);

veggies.push("Mushroom", "Onion");
console.log(veggies);  // add Mushroom and onion at last of array


//3_2..................Pop in Array  ---> delete from end and return

let fruitItems = ['Apple', 'Watermelon', 'Banana', 'Dragon Fruit', 'Litchi', 'Papaya', 'Pomegranate', "Mango", "Orange", "Grapes", "Strawberry", "Pineapple"]
console.log(fruitItems);  // print array

let deleteVal = fruitItems.pop();
console.log(deleteVal);   // print Pineapple
console.log(fruitItems);  // print array except pineapple

let deleteValue = fruitItems.pop();
console.log(deleteValue);  // print Strawberry
console.log(fruitItems);   // print array except Strawberry



// 3_3................toString in Array  ---> converts array to string

let foodItems = ['Chips', 'Lays', 'Cheese balls', 'Biscuits', 'Peanuts', 'Burgers', 'Sandwich']
console.log(foodItems);            // print arrays
console.log(foodItems.toString()); // print arrays into string

let bonus = [58, 75, 87, 69, 17];
console.log(bonus);
let str = bonus.toString();
console.log(str);



// 3-4........concat()  ---> joins multiple array

let marvel1 = ['thor', 'spider man', 'iron man'];
console.log(marvel1);

let marvel2 = ['superman', 'batman', 'ant man'];
console.log(marvel2);

let indian = ['sakti man', 'krishna', 'Ram'];
console.log(indian);

let marvelM = marvel1.concat(marvel2);
console.log(marvelM);

let marvelN = marvel2.concat(marvel1);
console.log(marvelN);

let marvelQ = marvel2.concat(marvel1, indian);
console.log(marvelQ);


// 3_5........unshift()  ---> add to start in array  

let company = ['LG', 'Samsung', 'Nokia', 'Dell', 'iPad']
console.log(company);

company.unshift('HP');
console.log(company);


// 3_6........shift()    ---> delete from start

let value = company.shift("HP");
console.log(value);
company.unshift("HP");


// 3_7........slice()    ---> return a piece of array
// slice(starting_index, ending_index)

let powerPerson = ["Iron Man", "Super Man", "Bat Man", "Avengers","Hulk", "Thor", "Spider Man", "Ant Man" ];
console.log(powerPerson);

console.log(powerPerson.slice());                        
console.log(powerPerson.slice(0));                        
console.log(powerPerson.slice(0, 7));  // here 2 and 6 are array index and last index is not included in output                        
console.log(powerPerson.slice(0, 6));                        
console.log(powerPerson.slice(0, 5));                        
console.log(powerPerson.slice(0, 4));                        
console.log(powerPerson.slice(0, 3));                        
console.log(powerPerson.slice(0, 2));                        
console.log(powerPerson.slice(0, 1)); 
                       
console.log(powerPerson.slice(1));                        
console.log(powerPerson.slice(1, 7));                        
console.log(powerPerson.slice(1, 6));                        
console.log(powerPerson.slice(1, 5));                        
console.log(powerPerson.slice(1, 4));                        
console.log(powerPerson.slice(1, 3));                        
console.log(powerPerson.slice(1, 2)); 

console.log(powerPerson.slice(2));                        
console.log(powerPerson.slice(2, 7));                        
console.log(powerPerson.slice(2, 6));                        
console.log(powerPerson.slice(2, 5));                        
console.log(powerPerson.slice(2, 4));                        
console.log(powerPerson.slice(2, 3));  

console.log(powerPerson.slice(3));                        
console.log(powerPerson.slice(3, 7));                        
console.log(powerPerson.slice(3, 6));                        
console.log(powerPerson.slice(3, 4));  

console.log(powerPerson.slice(4));                        
console.log(powerPerson.slice(4, 7));                        
console.log(powerPerson.slice(4, 6));                        
console.log(powerPerson.slice(4, 5)); 

console.log(powerPerson.slice(5));                        
console.log(powerPerson.slice(5, 7));                        
console.log(powerPerson.slice(5, 6));  

console.log(powerPerson.slice(6));                        
console.log(powerPerson.slice(6, 7));                        



// 3_8........splice()    ---> change original array (add, remove, replace)
// splice(start_index, deleteCount, newElementAdd)

let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(arr);

let arr1 = arr.splice( 2, 2, 101, 102); 
console.log(arr1);  // prints [ 2, 3 ]
console.log(arr);  // prints [ 0, 1, 101, 102, 4, 5, 6, 7, 8, 9 ]

// to add Element

let arr2 = arr.splice(2, 0, 101)
console.log(arr2); // prints []
console.log(arr); // [ 0, 1, 101, 101, 102, 4, 5, 6, 7, 8, 9 ]


// Delete Elements

let arr3 = arr.splice( 3 ,1 )
console.log(arr3);  // prints [ 101 ]
console.log(arr);   // prints [ 0, 1, 101, 102, 4, 5, 6, 7, 8, 9 ]

// Replace Element

let arr4 = arr.splice(4, 1, 104 );
console.log(arr4);  // prints [ 4 ]
console.log(arr);   // prints [ 0, 1, 101, 102, 104, 5, 6, 7, 8, 9 ]




// Practice Question -- 3
/* Create an array to store companies  --> [ 'Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']
a.  Remove first company from array
b.  Remove Uber and Add Ola in its place
c.  Add Amazon at the end 
*/


let companies = [ "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix" ];
console.log(companies);

// no. a solution
let solution1 = companies.shift();
console.log(solution1);  // prints Bloomberg
console.log(companies);  // prints [ "Microsoft", "Uber", "Google", "IBM", "Netflix" ]

// no. b solution
let solution2 = companies.splice(1, 1, "Ola");
console.log(solution2);   // prints [ 'Uber' ]
console.log(companies);   // prints [ "Microsoft", "Ola", "Google", "IBM", "Netflix" ]

// no. c solution
let solution3 = companies.push("Amazon")
console.log(solution3);  // adds Amazon at last of array --> companies
console.log(companies);  // prints [ "Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon" ]


