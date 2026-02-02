// loops -- repeating code blocks
// 1 1 1 1 1 1 
// 1 2 3 4 5 6 

// for loop
// why use for-loop? when you know how many times you want to repeat a block of code
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex. 1 => 50 => increment by 1)
// (start; end; change)

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

for(let k = 9; k >= -1; k++) {
    console.log(k);
}

for(let j = 1; j <= 10; j++) {
    // document.writeIn("Hello");
    console.log("Hello"); 
}

for (let i = 1; i <= 3; i++) {
    console.log("Welcome");
}

// while loop -- do while loop
// kaya thi javanu chhe --> kaya rokavanu chhe --> kevi rite javanu chhe
// while (ex. 1 --> Hello World -> stop when condition false)
// start
// while(end){
// code 
// change
// }
let d = 1;
while (d <= 10) {
  console.log("While Loop : ", d);
    d++;
}

// make it true loops
// let k = 20;
// while (k == 20) {
//     console.log(k);
//     break;
// }

// let a = 60;
// while (a <= 79){
//   console.log(a);
//     a++;
// }

// let c = 15;
// while (c <= 20){
//   console.log(c);
//     c++;
// }

//let d = "Hello";
//let count = 0;

//while (count < 5) {
  //console.log(d);
 // count++;
// }


// let f = 50;
// while (f >= 40){
//   console.log(f);
//     f--; 
// }

// let q = 60;
// while (q <= 50){
//   console.log(q);
//     q--;
// }// make it true loops
// let k = 50;
// while (k = 20) {
//     console.log(k);
//     k++
// }

// let a = 60;
// while (k <= 20){
//   console.log(a);
//     a++;
// }

// let c = 30;
// while (c <= 20){
//   console.log(c);
//     a++;
// }

// let d = "Hello";
// while (d >= 20){
//   console.log(d);
//     d++;
// }

// let f = 50;
// while (f <= 60){
//   console.log(f);
//     f--;
// }

// let q = 50;
// while (q <= 60){
//   console.log(q);
//     --q;
// }

// do while loop
// do {} while {end};
// start
// do{
// code
// change}
// while(end);
let j = 12; // start
do {
    console.log("do while loop:",j); // code
    j++; // change (condition)
} while (j < 20); // while check after executing code block {end}

// // break
for (let k = 1; k <= 201; k++) {
    console.log("Loop with break",k);
    if(k == "30") {
        break;
    }
}

// // continue
for (let a = 1; a <= 10; a++) {
    if(a === 5) {
        continue;
    }
    console.log(a);
}

// pratise for do while loop
let i = 15; //start
do {
    console.log("do while loop:",i); // code
    i++;
} while (i < 30);

// pratise for break loop statement
for (let i = 1; i<= 201; i++) {
    console.logI("Loop with break",i);
    if(i == "45") {
        break;
    }
}

// pratise for continue statement
for (let k = 1; k <= 10; k++) {
    if(k === 5) {
        continue;
    }
    console.log(k);
}