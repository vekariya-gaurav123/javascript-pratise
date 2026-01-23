// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// If (condition) {} --> condition true hoy to {} code run
/*if(12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run

if (!12) { //12 --> true, !12 --> false
    console.log("number")
}

if(!0) {
    console.log("number");
}

// if-else Statement
if(12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run
else{
    console.log(false); // if if statement condition is false than run this code
}

if (!12) { //12 --> true, !12 --> false
    console.log("number")
} else {
    console.log("Not a Number");
}

if(!0) {
    console.log("number");
} else{
    console.log("Not A Number");
}

if(20 < 15) {
    console.log(true);
}
else {
    console.log(false);
}
*/

/*
let loggedin = false;
let admin = false;
if(loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}

let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}


let age = Number(prompt("Enter your age:"));


if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Switch case Statement
switch ("BOGO") // value --> Case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% off on First Order");
        break;
    case "BOGO":
        console.log("Buy one get one");
        break;
    case "BlackFriday":
        console.log("It's Black Friday Sale - get at Rs. 50");
        break;
    default:
     console.log("Offer Not Valid");
}*/

//Early Return Pattern
function score(value) {
    if(value > 90) {
        return "Value is more than 90";
    } else if (value < 80){
        return "Value is less than 80";
    } else if (value < 70) {
        return "Value is less than 70";
    } else if (value < 60) {
        return "Value is less than 60";
    } else {
        return "Value is less than 60";
    }
}
score(100);
// console.log(score(100))

function score1(value) {
    if(value > 90) return "Value is more than 90";
    else if (value < 80) return "Value is less than 80";
    else if (value < 70) return "Value is less than 70";
    else if (value < 60) return "Value is less than 60";
    else return "Value is less than 60";
}
