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