// Example 1: Print number from 1 to 10 using a for loop.
console.log("--- Example 1 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Example 2: Print number from 10 to 1 using while loop.
console.log("\n--- Example 2 ---");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Example 3: Print even numbers from 1 to 20 using for loop.
console.log("\n--- Example 3 ---");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Example 4: Print odd numbers from 1 to 15 using while loop.
console.log("\n--- Example 4 ---");
let k = 1;
while (k <= 15) {
    if (k % 2 !== 0) {
        console.log(k);
    }
    k++;
}

// Example 5: Print the multiplication table of 5.
console.log("\n--- Example 5 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Example 6: Find the sum of numbers from 1 to 100 using a loop.
console.log("\n--- Example 6 ---");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Sum:", sum);

// Example 7: Print all numbers between 1 to 50 that are divisible by 3.
console.log("\n--- Example 7 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Example 8: Ask the user for a number and print whether each number from 1 to that number is even or odd.
console.log("\n--- Example 8 ---");
// Note: prompt only works in browser environments. 
// If running in Node.js, this part will be skipped or cause an error if uncommented without a polyfill.
if (typeof prompt !== 'undefined') {
    let num = prompt("give a number");
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i, " is even");
        } else {
            console.log(i, " is odd");
        }
    }
} else {
    console.log("Skipping Example 8 (browser only feature: prompt)");
}

// Example 9: Count how many numbers between 1 to 100 are divisible by 3 or 5.
console.log("\n--- Example 9 ---");
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
        count++;
    }
}
console.log("Total count:", count);

// Example 10: Stop at First Multiple of 7
console.log("\n--- Example 10 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
}

// Example 11: Skip Multiples of 3
console.log("\n--- Example 11 ---");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// Example 12: Print First 5 Odd Numbers
console.log("\n--- Example 12 ---");
let oddCount = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        oddCount++;
        console.log(i);
    }
    // Prints only 5 odd numbers then stops
    if (oddCount === 5) {
        break;
    }
}
