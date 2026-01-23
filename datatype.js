// two types of data types:
// 1. primitive data types
// copy --> real value
/*let a = 5;
let b = a;

//2. non-primitive data types(refrence data types) [], (), {}
// copy --> give refrence of parent 
let temp_d = [1, 2, 3];
let temp_e = temp_d;

//types : array[], object{}, function()


// primitive data types
//types : string, number, boolean, null, undefined, symbol, bigint
// string:
// ''- single quotes
// ""- double quotes
// ``- backticks
let d = "name"; // double quotes
d = "username";
d = `firstname`;

// number:
let e = 12;
e = 12.25;
e = -25;

// boolean:
let f = true;
f = false;

// null:
// you give a value
let g = null;

// undefined:
// you don't give a value, by default value is undefined
let h; // undefined

// symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1 == u2
let obj = { uid: 1,name: "test",email: "test@example.com"};
let u3 = "uid";
let u4 = Symbol("uid");
//obj[u3] = "001";

//bigint:
//check range of number number.max_safe_integer
let number = 9007199254740991;
number = number + 6;
let num2 = 9007199254740991n;
num2 = num2 + 4n;

// non-primitive data types
//types : array[], object{}, function()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = { name: "test", age: 9, phone_number: 558998554 };
let profiles = [
    { name: "test1", age: 10, phone_number: 558998551 },
    { name: "test2", age: 20, phone_number: 558998552 },
    { name: "test3", age: 30, phone_number: 558998553 },
];
function name(params) {}

// dynamic typing
let u_name = "username"; // string
u_name = 123; // number
u_name = {}; // object
// javascript --> typescript(ts)

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1",1 === "1"
//why typeof NaN --> number
// NaN is failed number operations that why that type is number
// ex. "hello" - 5 --> NaN

//type coretion
// "5" + 1 --> value add and coreation(mix)
// "5" - 1

//truthy and falsy values
// 0, false, "", null, undefined, NaN, document.all --> false
// ex. !!0 -- check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true

// examples:1
true + false 

// examples:2
null + 1 

// examples:3
"12" + 12 

// examples:4
!! undefined

// examples:5
"12" - 1 

// examples:6
// why typeof NaN --> number 
// NaN is a failed number oprations that why that type is number
 "hello" + 5 --> NaN

 // examples:7
//  Undefined vs Null 
let x;
console.log(x);
let y = null;
console.log(y);
*/
