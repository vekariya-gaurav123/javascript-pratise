<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Cannot access 'nm' before initialization </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2 </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Inside: 20
                    Outside: 10</p>
<p>Why :let has block scope.
The a inside the block is different from the a outside the block. </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: Assignment to constant variable.</p>
<p>Why :const does not allow reassignment of the variable,
but object properties can be modified. </p>
</div>

// Day 2 Pratise
<h3>Example 1 :</h3>
<p>true + false </p>
<p>ans or error: 1</p>
<p>why : true → 1
false → 0
1 + 0 = 1
JavaScript converts booleans to numbers when using + with numbers. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>ans or error: 1</p>
<p>why :
null → 0 (in numeric operations)
0 + 1 = 1
Important: null becomes 0 only in math, not in strings or comparisons. </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>ans or error: '1212'</p>
<p>why : + with a string = string concatenation
Number 12 → "12"
"12" + "12" = "1212"
Rule: If one side is a string, + joins strings.</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>ans or error: false</p>
<p>why : undefined is falsy
!undefined → true
!!undefined → false
Double !! is a classic trick to convert any value to a boolean.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>ans or error: 11</p>
<p>why : does NOT support strings
JS forces "12" → 12
12 - 1 = 11
Only + does string concatenation.
Other operators (- * /) force numbers. </p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>ans or error: 'hello5'</p>
<p>why :- + sees a string → does concatenation
No numeric conversion happens </p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>ans or error: undefined
null</p>
<p>why :undefined	--> Variable declared but not assigned
null -->  Intentionally empty value </p>
</div>

JavaScript Operators – Quick Notes
Arithmetic Operators

Used for calculations.
+ add / concatenate
- subtract
* multiply
/ divide
% remainder
** power

Example:
5 + 5 = 10, "5" + 5 = "55", 2 ** 3 = 8

Comparison Operators
Return true / false.
== value check
=== value + type check
!= not equal
!== strict not equal
> < >= <=

Example:
12 == "12" → true
12 === "12" → false

Assignment Operators
Assign and update values.
=
+=, -=, *=, /=, %=

Example:
a += 2 → add 2 to a

Logical Operators
Used with conditions.
&& AND || OR ! NOT

Example:
true && false → false

Unary Operators
Work on single value.
+ convert to number
! negate
typeof check type
++, -- increment / decrement

Example:
+"5" → 5, typeof "hi" → string

Ternary Operator
Short if–else.
condition ? trueValue : falseValue

Example:
age >= 18 ? "Adult" : "Minor"

Important Notes
typeof null → object
typeof NaN → number
Use typeof for primitive
Use instanceof for reference types

Date: 23/1/2026 Pratise
Example:1
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
} else {
  console.log("One or both are not greater than 5");
}
output:
Both are greater than 5
why: Because both x > 5 and y > 5 are true, the && condition passes.

Example:2
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access Denied");
}

output:
Access granted
why: Because at least one value is true, the || operator allows access.

Example:3
let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}
output:
Pleasant day
why: Because !(true) becomes false, the else block runs.

Example:4
let a = 0;

if (a) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
Output:
Falsy value
why: Because 0 is a falsy value in JavaScript.

Example:5
let score = 78;

let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" : "D";

console.log("Grade:", grade);

Output:
Grade: C
why: Because 78 satisfies score >= 70, grade becomes "C".

Example:6
let points = 120;

let status =
  points >= 100 ? "Gold" :
  points >= 50 ? "Silver" : "Bronze";

console.log("Status:", status);
Output:
Status: Gold
why:Because points >= 100 is true, status is "Gold".

Example:7
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
Output:
access: Deny
why: Because && needs both values true and hasToken is false.

Example:8
let a = 5;
a++;
console.log(a);
Output:
6
why: Because a++ increases the value after execution.

Example:9
let a = 8;
++a;
console.log(a);
Output:
9
why: Because ++a increases the value before execution.

Example:10
let b = 4;
let c = b++;
console.log(b, c);
Output:
5 4
why: Because b++ assigns the old value to c before incrementing b.

Example:11
let b = 4;
let c = ++b;
console.log(b, c);
Output:
5 5
why: Because ++b increments first and then assigns the value.

Example:12
let m = 10;
console.log(m--);
console.log(m);
Output:
10
9
why :Because m-- prints first and decrements afterward.

Example:13
let n = 5;
let result = n++ + ++n;
console.log(result);
Output:
12
Why: Because n++ returns 5 and ++n returns 7, making the sum 12.

Example:14
let likes = 100;

function likePost(){
  result ++likes;
}

console.log(likePost());
console.log(likes);
Error: result ++likes is invalid syntax.
why :Because result ++likes is invalid JavaScript syntax.

Example:15
let count = 5;

if (count-- === 5) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
Output:
Matched
why:Because comparison happens before count-- decrements the value.

//PRATISE 2
Example:1
<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<div>
Output:
Two
Three
Why: Because there is no break, execution falls through to the next case.

Example:2
<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<div>
console.log(getGrade(85));
Output:
A
Why: Because 85 lies between 80–89, the grade returned is "A".

Example:3
<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<div>
Output:case 1
rock vs scissors → rock
why:Because rock breaks scissors
Output: case2
paper vs rock → paper
why:Because paper covers rock.
Output:case3
scissors vs paper → scissors
why:Because scissors cut paper.

//pratise
/*# JavaScript Function Examples – Answers, Outputs & Explanations

---

## Example 1: Function Declaration vs Function Expression (Hoisting)

**Answer:**

* **Function Declaration** is fully hoisted.
* **Function Expression** is not fully hoisted.
**Output:**
No direct output (concept-based question)

**Why:**
Function declarations are stored completely in memory during the hoisting phase, while function expressions only hoist the variable name (initialized as `undefined`).

---
## Example 2: Hoisting in Action
```js
greet();
function greet(){
  console.log("Hello!");
}
```**Output:**
```
Hello!
```
**Answer:** ✅ No Error

**Why:**
`greet` is a function declaration, so it is hoisted entirely and can be called before its definition.

---
## Example 3: Convert Normal Function to Arrow Function
```js
function add(a, b){
  return a + b;
}
```
**Answer:**

```js
const add = (a, b) => a + b;
```
**Output:**
```
add(2,3) → 5
```
**Why:**
Arrow functions provide shorter syntax and implicit return for single expressions.
## Example 4: Parameters vs Arguments

```js
function welcome(name){
  console.log("Welcome " + name);
}
welcome("user");
```
**Output:**

```
Welcome user
```
**Answer:**

* **Parameter:** `name`
* **Argument:** `"user"`

**Why:**
Parameters are variables in function definitions, arguments are actual values passed to them.

---

## Example 5: Number of Parameters and Arguments

```js
function temp(a, b, c){
  console.log(a, b, c);
}
temp(1, 2);
```

**Output:**

```
1 2 undefined
```

**Answer:**

* Parameters: `3`
* Arguments: `2`

**Why:**
Missing arguments default to `undefined`. JavaScript does not throw an error.

---

## Example 6: Default Parameters

```js
function temp_user(name = "Guest"){
  console.log("Hello " + name);
}
temp_user();
```

**Output:**

```
Hello Guest
```

**Answer:** ✅ No Error

**Why:**
Default parameter value is used when no argument is provided.

---
## Example 7: Rest Operator (`...`)

```js
function number(...numbers){
  console.log(numbers);
}
number(1, 2, 3, 4, 5);
```

**Output:**

```
[1, 2, 3, 4, 5]
```

**Answer:** ✅ No Error

**Why:**
The rest operator gathers all passed arguments into an array.

---

## Example 8: Rest Parameters – Total Calculation

### ❌ First Function

```js
for(let i = 0; i <= scores.length; i++){
  total += scores[i];
}
```

**Output:**

```
NaN
```
**Why:**
The loop runs one extra time and adds `undefined`, causing `NaN`.

---
### ✅ Second Function

```js
scores.forEach(function(val){
  total += val;
});
```
**Output:**

```
150
```

**Why:**
`forEach` iterates only over valid array elements.

---

## Example 9: Early Return Fix

```js
function checkAge(age){
  if(age < 18){
    console.log("Too Young");
    return;
  }
  console.log("Access Granted");
}
```

**Output:**

```
checkAge(16) → Too Young
checkAge(21) → Access Granted
```

**Why:**
Early return simplifies logic and improves readability.

---

## Example 10: Return Value

```js
function f(){ return; }
```

**Output:**

```
undefined
```

**Answer:** `undefined`

**Why:**
A `return` without a value automatically returns `undefined`.

---

## Example 11: Functions as First-Class Citizens

**Answer:**
Functions are treated like any other variable.

**Output:**
No direct output (concept-based)

**Why:**
In JavaScript, functions can be stored in variables, passed as arguments, returned from other functions, and stored in data structures.

---

## Example 12: Assign Function to Variable

```js
let a = function(){
  console.log("Hello");
}
a();
```

**Output:**

```
Hello
```

**Answer:** ✅ Valid

**Why:**
Functions can be assigned to variables and invoked using the variable name.

---

## Example 13: Passing Function into Another Function

```js
function abcd(val){
  val();
}

abcd(function(){
  console.log("Hello");
});
```

**Output:**

```
Hello
```

**Answer:** ✅ Valid

**Why:**
A function is passed as an argument and executed inside another function. This is possible because functions are first-class citizens.

---

## Example 14: Higher-Order Function

**Answer:**
A higher-order function is a function that either:

* Takes another function as an argument, or
* Returns a function

**Output:**
No direct output (concept-based)

**Why:**
This allows abstraction, reusability, and functional programming patterns.

---

## Example 16: Pure or Impure Function

```js
let total = 5;
function num(num){
  total += num;
}
num(3);
```

**Output:**

```
No direct output
```

**Answer:** ❌ Impure Function

**Why:**
The function modifies an external variable (`total`). Its output depends on external state.

---

## Example 17: Convert to Pure Function

```js
function num(total, value){
  return total + value;
}
num(5, 3);
```

**Output:**

```
8
```

**Answer:** ✅ Pure Function

**Why:**
It does not modify external data and always returns the same output for the same input.

---

## Example 18: Closure

**Answer:**
A closure is created when a function remembers variables from its outer scope even after the outer function has finished executing.

**Example:**

```js
function outer(){
  let x = 10;
  return function(){
    console.log(x);
  }
}
```

**Why:**
The inner function retains access to `x` through closure.

---

## Example 19: Closure Output

```js
function outer(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
```

**Output:**

```
1
2
```

**Answer:** ✅ No Error

**Why:**
The `count` variable is preserved in closure and updated on each function call.

## Example 20: IIFE Conversion

```js
(function init(){
  console.log("Initialized");
})();
```

**Output:**

```
Initialized
```

**Why:**
IIFE executes immediately and avoids polluting the global scope.

---

## Example 21: Use of IIFE

```js
let fun = (function(){
  let score = 0;
  return{
    getScore: function(){
      console.log(score);
    },
    setScore: function(val){
      score = val;
    }
  }
})();
```

**Output:**

```
fun.getScore(); → 0
fun.setScore(10);
fun.getScore(); → 10
```

**Answer:**
Encapsulation and data privacy.

**Why:**
IIFE creates a private scope where variables cannot be accessed directly.

---

## Example 22: Function Expression Hoisting

```js
temp_var();
var temp_var = function(){
  console.log("Hello");
}
```

**Output:**

```
TypeError: temp_var is not a function
```

**Why:**
Only the variable is hoisted, not the function assignment.

---

## Example 23: Function Declaration Hoisting

```js
temp_var();
function temp_var(){
  console.log("Hello");
}
```

**Output:**

```
Hello
```

**Why:**
Function declarations are fully hoisted.

---

 **Complete Single File with Answers, Outputs & Explanations**
*/

Exerice(Date:04-02-2026)
Example:1(push)
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
console.log(tasks);
Output: ['Wake up', 'Brush teeth', 'Buy milk']
why :push() adds an element at the end.

Example : 2 (pop)
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
console.log(notifications);
Output: ['Email', 'Message']
Why:pop() removes the last element.

Example:3 (shift)
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
console.log(customers);
Output:['Customer2', 'Customer3']
Why:shift() removes the first element.

Example:4 (unshift)
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
console.log(playlist);
Output:['Song A', 'Song B', 'Song C']
why:unshift() adds element at the beginning.

Example:5 (splice)
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
console.log(students);
Output: ['Mike', 'John', 'Sara', 'Emma', 'Sophia']
why:splice() removes and inserts at same index.

Example:6(splice)
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
console.log(menu);
Output:['Burger', 'Salad']
why:Removes 2 items starting from index 1.

Example:7(slice)
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let weekend = days.slice(5);
console.log(weekend);
Output:['Saturday', 'Sunday']
why:slice() copies elements into new array.

Example:8(reverse)
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log(levels);
Output:['Hard', 'Medium', 'Easy']
why:reverse() reverses array order.

Example:9(sort)
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log(scores);
Output:[12, 34, 45, 78, 89]
why:Compare function sorts numbers correctly.

Example:10(sort number)
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log(prices);
Output: [49, 149, 199, 299, 999]
why:Numeric ascending sort

Example:11(slice vs. splice)
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let newProducts = products.slice(0, 3);
console.log(newProducts);
console.log(products);
Output:['Laptop', 'Phone', 'Tablet']
['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard']
why :slice() does not change original array.

Example:12(splice complex)
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
console.log(colors);
Output:['Red', 'Green', 'Purple', 'Orange', 'Yellow']
why:Replaces one element with two new ones.

Example:13(reverse + push)
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log(steps);
Output:['Step 3', 'Step 2', 'Step 1', 'Final Step']
why:Reverse first, then add at end.

Example:14(sort string)
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);
Output:['alice', 'Bob', 'charlie', 'David']
why:Case-insensitive alphabetical sorting.

Example:15(combination question)
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
console.log(movies);
Output:['Gladiator', 'Inception', 'Titanic']
why:Add → remove first → sort alphabetically

Example:16(splice return value)
let nums1 = [1, 2, 3, 4];
let removed = nums1.splice(1, 2);
console.log(removed);
console.log(nums1);
Output:[2, 3]
[1, 4]
why:splice() returns removed elements.

Example:17(slice immutability)
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log(result);
console.log(nums2);
Output:[20, 30]
[10, 20, 30, 40]
why:Original array remains unchanged.

Example:19(reverse mutation)
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
console.log(reversedLetters);
console.log(letters);
Output:['c', 'b', 'a']
['c', 'b', 'a']
why: reverse() mutates original array.

Example:21(splice edge case)
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
console.log(arr);
Output:['x', 'new', 'y', 'z']
why:deleteCount 0 only inserts.

Example:23(slice negetive index)
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log(sliced);
Output:[300, 400]
why:Negative index counts from end.

Example:24(splice vs. slice)
a) splice() → when original array must change
b) slice()  → when original array must stay same
Why: splice mutates, slice does not.

Example:25(chained methods)
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log(arr2);
Output:[2, 3, 1]
why:First element moved to end.


# JavaScript Interview Questions – Answers

---

## 🟢 BEGINNER LEVEL (1–20)

### Q1. Variables

`var` → Function scoped, can be re-declared and updated.
`let` → Block scoped, can be updated but not re-declared in same scope.
`const` → Block scoped, cannot be updated or re-declared.

---

### Q2. Data Types

Primitive data types:

* string
* number
* boolean
* undefined
* null
* bigint
* symbol

---

### Q3. Type Checking

Using `typeof` operator.

```js
console.log(typeof 5); // "number"
```

---

### Q4. Operators

`==` → Compares values only (type coercion happens).
`===` → Compares value and type (strict equality).

---

### Q5. Arithmetic Operators

```js
let x = 10;
console.log(x + 5 * 2);
```

Output:

```
20
```

---

### Q6. String Concatenation

```js
console.log('5' + 2);
```

Output:

```
"52"
```

---

### Q7. Boolean Logic

```js
console.log(true && false);
```

Output:

```
false
```

---

### Q8. Functions

A function is a reusable block of code used to perform a specific task.

---

### Q9. Function Call

```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```

Output:

```
5
```

---

### Q10. Arrays

```js
const arr = [1, 2, 3];
```

---

### Q11. Array Access

```js
const arr = [10, 20, 30];
console.log(arr[1]);
```

Output:

```
20
```

---

### Q12. Objects

An object is a collection of key-value pairs.

---

### Q13. Object Access

```js
const user = { name: 'A', age: 20 };
console.log(user.age);
```

Output:

```
20
```

---

### Q14. Control Flow

An `if` statement executes code when a condition is true.

---

### Q15. Condition Check

```js
let x = 5;
if (x > 3) console.log('Yes');
```

Output:

```
Yes
```

---

### Q16. Loops

A loop repeats a block of code until a condition is met.

---

### Q17. for Loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

Output:

```
0
1
2
```

---

### Q18. while Loop

Use a `while` loop when the number of iterations is unknown and depends on a condition.

---

### Q19. Increment Operator

```js
let a = 5;
a++;
console.log(a);
```

Output:

```
6
```

---

### Q20. Comments

Single-line:

```js
// comment
```

Multi-line:

```js
/* comment */
```

---

## 🟡 INTERMEDIATE LEVEL (21–35)

### Q21. Scope

Block scope means variables declared with `let` and `const` exist only inside `{}`.

---

### Q22. Hoisting

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.

---

### Q23. Undefined vs Null

`undefined` → Variable declared but not assigned.
`null` → Intentional absence of value.

---

### Q24. Truthy & Falsy

Falsy values:

* false
* 0
* -0
* 0n
* ""
* null
* undefined
* NaN

---

### Q25. Functions vs Arrow Functions

Arrow functions:

* Shorter syntax
* No own `this`
* Cannot be used as constructors

---

### Q26. Parameters vs Arguments

Parameters → Variables in function definition.
Arguments → Values passed during function call.

---

### Q27. Return Keyword

If a function does not return anything, it returns `undefined`.

---

### Q28. Array Methods

`push()` → Adds element to end.
`pop()` → Removes element from end.

---

### Q29. Loop vs Array Methods

Use loops when you need complex control flow or break/continue.

---

### Q30. Object Iteration

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

### Q31. Break & Continue

`break` → Stops loop completely.
`continue` → Skips current iteration.

---

### Q32. Comparison Operators

```js
console.log(0 == false);
console.log(0 === false);
```

Output:

```
true
false
```

---

### Q33. Ternary Operator

```js
status = age >= 18 ? 'adult' : status;
```

---

### Q34. Array Destructuring

Extracting values from arrays into variables.

```js
const [a, b] = [1, 2];
```

---

### Q35. Spread Operator

Expands elements of an array.

```js
const newArr = [...arr];
```

---

## 🔵 ADVANCED LEVEL (36–50)

### Q36. Closures

A closure is when a function remembers variables from its outer scope.

```js
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
```

---

### Q37. Execution Context

The environment in which JavaScript code is evaluated and executed.

---

### Q38. Call Stack

A stack data structure that tracks function calls.

---

### Q39. Pass by Value vs Reference

Primitives → Pass by value.
Objects/Arrays → Pass by reference.

---

### Q40. Shallow vs Deep Copy

Shallow copy → Copies first level only.
Deep copy → Copies all nested levels.

---

### Q41. Higher-Order Functions

A function that takes another function as argument or returns one.

---

### Q42. Callback Functions

A function passed into another function to be executed later.

---

### Q43. Immutability

Prevents unexpected side effects and makes debugging easier.

---

### Q44. Event Loop

Handles asynchronous operations by moving callbacks from queue to call stack when it is empty.

---

### Q45. Synchronous vs Asynchronous

Synchronous → Executes line by line.
Asynchronous → Executes without blocking.

---

### Q46. forEach vs map

`forEach()` → Executes function, returns undefined.
`map()` → Returns new transformed array.

---

### Q47. == Interview Trap ⭐

```js
console.log([] == []);
```

Output:

```
false
```

(Because they are different references.)

---

### Q48. typeof Interview Trap ⭐

```js
console.log(typeof null);
```

Output:

```
"object"
```

---

### Q49. NaN Check

```js
Number.isNaN(value);
```

---

### Q50. FINAL INTERVIEW QUESTION ⭐⭐⭐

1. Global Execution Context is created.
2. Memory phase (variables/functions stored).
3. Code execution phase (line by line).
4. Functions create new execution contexts.
5. Call stack manages execution order.
6. Event loop handles asynchronous callbacks.

---

# ✅ End of File
