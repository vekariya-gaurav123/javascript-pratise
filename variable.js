// variable -- temp data store(ex. Flipkart or Amazon that
//save your data for Buying purpose )

//var, let and const -- line by lien comparison
// var (ES5)
/*var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
// var 123 = "number"
b = 24;
// let
// let temp = "abc"
// const
const temp_const = "Hello World !!";

// declaration and initialization
var d;
var temp_id = 12;
// var add value into window
// var is function scoped
// var can be redeclared and reassigned
var name = "user name";
let name1 = "user name";

// Reassignment, redeclaration
var temp = 12;
temp = "number"; // Reassignment 
var temp = "text"; // redeclaration
// let temp_a = 24;
// var temp_a = 34; // you can't redeclar let variable
const temp_b = "name";
// temp_b = "username" // you can't reassign const variable 

// scope (global, Block, functional)
var e = 23; // global scope
console.log("Global Scope " + e);
{
 var e = 25; // block scope
 console.log("block Scope " + e);  
}
function abc() {
    var e = 30; // functional scope
    console.log("functional scope " + e);
}
abc();
console.log("Outside" + e);


let f = 23; // global scope
console.log("Global Scope let variable" + f);
{
 let f = 25; // block scope
 console.log("block Scope let variable" + f);  
}
function abc() {
    let f = 30; // functional scope
    console.log("functional scope let variable" + f);
}
abc();
console.log("Outside let variable" + f);


//Temporal Dead Zone (TDZ)
console.log(h);
var h = 24;

// console.log(g);
console.log(j);
let j = 12;

//Hoisting Impact
// Hoisting --> when your create a variable into js that break
// into two part first is declare part that go to up and there
// initialization part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you 
// undefined;
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give you
// error;
// Hoisting Impact on var, let, const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/


 // Example 1
//console.log(nm);
//let nm = "name";

// Example 2
//console.log(b);
//var b = "username";

// Example 3
//var x = 1;
//{
  //  var x = 2;
//}
//console.log(x);

//Example 4
/*let a = 10;
{
    let a = 20;
    console.log("Inside:", a);
}
console.log("Outside:", a); */

//Example 5
/*const person = { name: "demo" };

person.name = "user"; // ✅
person = {};          // ❌
*/


