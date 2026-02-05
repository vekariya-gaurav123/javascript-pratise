// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
// let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]
// access
// array_name[position / index]
//arr[0]

// modify
// array_name[position] = new value
//arr[0] = 10;
//arr[1] = 20;
//arr[2] = 30;
//arr[3] = 40;

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort

// push --> enter new value into array -- place it into last
//let a = [1, 2, 3, 4, 5];
// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho  to te method
// kevai
//a.push(700);
// use case -- enter new products into existing products list
//let product=["moblie","TV","Washing Machine"]
//product.push("LED");

// pop --> remove last value into array
//let b = [10, 20, 30, 40];
//b.pop();

// use case -- remove last product you add into your list
//product.pop("Washing Machine");

//shift -- remove first value into Array
/*let c = [30, 40, 50, 60];
c.shift();

//use case -- remove old product automatic after sometimes
let products = ["Mobile", "Laptop", "Tablet", "Smart Watch"];
products.shift()

//unshift -- add value into array -- first
let d = [52, 35, 65, 85];
d.unshift(20);

//use case -- add a value into top of that data you receive
let messages1 = ["Hello", "How are you?", "Good morning"];
messages1.unshift("New message received");
console.log(messages1);


// splice - remove value into array -- specific position and specific number of values
// into () - first index (position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
// e.splice(3, 0, 50, 100)
// use case -- select msg and remove multiple msg at on click
let messages = ["Hi", "Hello", "Meeting", "Project Update"];
messages.splice(3, 1); // removes "Project Update"
messages.splice(1, 1); // removes "Hello"

// slice - copy values from array -- specific position and specific number of values
// new variable - array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
// let new_f = f.slice(1, 3);
// use case -- copy specific data and save it into new variable
let marks = [90, 85, 78, 88, 92];
let theoryMarks = marks.slice(1, 4);

console.log(theoryMarks); // [85, 78, 88]
console.log(marks);       // original array unchanged
// generate a report based on date and generate a file or save the file into your local
// machine
// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the value that
// you can into

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();
// use case -- show latest update first into your frontend
let updates = [
  "Login successful",
  "Profile updated",
  "Password changed",
  "New message received"
];
updates.reverse();
console.log(updates);
// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();
// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function (a, b) {
//     return a - b; // ascending order
// });

// use case -- sort product price low to high
let prices = [1999, 499, 9999, 2999, 1499];
prices.sort((a, b) => a - b);
console.log(prices);*/

// For Each Loop
// for Each -- Array ni darek value mate loop chalse
/*let i = [10, 35, 40, 68];

i.forEach((val) => {
  let new_val = val + 10;
  console.log(new_val);
});
[5, 58, 42, "Hello"].forEach(val => {
  let new_arr = val + 2;
  console.log(new_arr);
});*/
// .map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array -- only for understanding
/*let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
  if (val > 20) {
    return val;
  }
});
// use case -- data ma thi specific data new array ma store karva hoy
// ex. product ma thi specific category na product new array ma store  karva hoy
// if you want to show only electronics product on your homepage
let marks = [10, 5, 20, 25, 15]
let final_marks = marks.map((val) => {
  if(val == 5) {
    return val + 4;
  }
  return val;
});

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price) => {
  if (price > 30000) return true;
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value na array ma add nahi kare
// use case -- data ma thi specific data new array ma add thase and biji value ne array ma add nahi kare
// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. product ma thi specific price na product new array ma store karva hoy
// if you want to show only expensive product on your homepage
// if you want to filter product based on price
let product_type = ["Moblie", "Tablet", "Laptop", "Mouse", "Keyboard"];
let filter_product_type = product_type.filter((type) => {
  if (type === "Tablet" || type === "Moblie") return
  true;
});

// reduce
// reduce tyare j use karvu ke jyare ek single value calculate karvi hoy from array
let total_price = [10, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
  return accumulator + val;
}, 0); // initial value of accumulator
// 0 + 10 => 10
// 10 + 68 => 78
// 78 + 45 => 123
console.log("Final Price :", final_price)
// accumulator --> je value function ma return thase te accumulator ma store thase --> accumulator name change kari sako chho
// val --> array ni darak value
// use case --  data ma thi ek single value calculate karvi hoy
//ex.product ma thi total price calculate karvi hoy

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tab", "Desktop", "Smart Watch"];

let find_product = product.find((item) => {
  console.log("can't find product"); // not working why??

  if (item === "Tablet") {
    return true;
  } else if (item === "Desktop") {
    return true;
  } else {
    return "Not Found";
  }
});

// use case -- data ma thi ek value find karvi hoy
// based on condition
// ex. product ma thi specific product find karvo
// hoy based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// check the list of visitors

let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];

// find --> you are looking for the first person
// named "Sara" in the list and stop searching(Pehli var j male, bas e j and Anagal check j na kare)
let person = person.find((name) => name === "Sara");
console.log(person);

//filter ---> you want to find all visitors named "Sara" in the list (all data check kare and list na end sudhi check kare)
let AllSara = people.filter((name) => name === "Sara");
console.log(AllSara);

//example 2: Book bus for travel
// some
// check kare chhe ke array ma koi pan ek item
// condition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value
// its return true or false
// find() return value of array

// give ans in true and false
let marks1 = [10, 20, 35, 80];
let any = marks1.some((val) => {
  if (val > 85) return 12;
  // if (val < 85) return "need improvement";
});
// use case -- check if some product are out of stock in your cart
// every
// check kare chhe ke array ma baddha j items
// condition satisfy kare chhe ke nahi
// true -- badha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 40, 50];
let num = def.every(function (val) {
  return val < 40;
});

// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"];
// methods --> condition --> output
// .some() --> item === "Moblie" --> true
// .find() --> item === "Moblie" --> "Moblie"
// .filter() --> item === "Moblie" --> ["Moblie", "Moblie"]
// .every() --> item === "Moblie" --> false*/

//// Destructuring operator -- give value to variable
// (ex. we don't use every time arr1[1], just save it
// into variable let [, k] = arr1)
/*let arr4 = [1, 2, 3, 4, 5];
let [ , , k] = arr4; // --> destructuring
// let [j, , k] = arr; 
console.log(k);
let user_data = ["text", "text@gmail.com", "Male", "Surat"]*/

// spread operator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; // -  just give reference not copy value
// (when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... ---> rest ---> into function
// ... ---> spread ---> into Array and Object







