// operators
// Arithmetic, comparison, logical, assignment, unary, ternary
// Arithmetic
// +, -, /, *, **, %
// + --> Add and concatenation
// ex. 1+2 --> 3
// "user" + "name" --> concat
// 5 + "5" --> 5, 5 +5 --> 10
// -
// ex. 2 -1 -->1
// /, *
// ex. 240/2, 25*2 --> 120, 50
// %(modulus) (sheshfal) (reminder)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** (square)(exposination)
// ex. 2**3 --> 8 
 
// Comparison (ans: true, false)
// ==
// ex. 12 == 13 ==> false, 12 == "12" ==> true (don't check type, only check value, not strict comparison)
// ===
// ex. 12 === "12" ==> false (check type and values, strict comparison)
// !- 
// ex. 12 != 13 ==> false (reverse of ==, not strict comparison)
// !==
// ex. 12! == "12" ==> (reverse of ===)
// >=
// ex. 22 >=22 ==> true
// <=
// ex. 13 <= 13
//<
// ex. 12 < 113, 12 < 9 ,22 < 22
// >
// ex. 12 > 113, 12 > 9, 13 > 13

//assignment
// =
// give a value, value assignement operator
// ex. let a = 12;
// +=
// ex. a += 3; ==> 15 (add value into old value and save it into a) 
// -=
//ex. a -= 4; ==> 11 (substract value into old value and save it into a)
// *=
// ex. a *=2; ==> 22
// /=
// ex. a/= 2; ==> 11
// %=
// ex. a %= 2; ==> 1 (give reminer)

// logical
// && (And)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false 12<10 && 14 < 15 --> false
// true && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true
// false || true --> true
// true || false --> true
// false || false --> false

// ! (NOT)
// ex. !true --> false
// !false --> true
// !12 --> false --> !!12 -->true
// unary operator
// + - ! typeof ++ --
// +
// convert string to number 
// ex. + "5" --> 5
// +"Name" --> NaN
// "5" + 5 -->55
// +"5" + 5 --> 10
// -
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a++ + a ==> 25
// ++a --> 13 // pre ex. a++ + a ==> 26
// --
// ex. let a = 3;
// a--
// a++

//Ternary
// ? :
// condition ? true thase to  print thase : false thase to print thase
// let a = 12>13 ? console.log("true"): console.log("false")

// typeof null --> object
// typeof [] --> object, let a =[]; a instaceof Array --> true
// instaceof --> check type of reference data type // don't use typeof for
// reference data type
// typeof NaN --> number
// typeof --> premetive data type mate use karvo
// instanceof --> reference data type mate use karvo

