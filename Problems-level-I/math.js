/*
Math.min(45, 1, 65, 99, 126):

Returns the smallest value from the provided numbers.
Output: 1.
Math.max(45, 1, 65, 99, 126, 929):

Returns the largest value from the provided numbers.
Output: 929.
Math.PI:

Returns the value of PI (π), a constant in mathematics.
Output: 3.141592653589793.
Math.abs(-88):

Returns the absolute value of -88, removing the negative sign.
Output: 88.
Math.abs(100 - 88):

Subtracts 88 from 100, giving 12, and returns the absolute value of the result (which is already positive).
Output: 12.
Math.round(4.8):

Rounds 4.8 to the nearest integer.
Output: 5.
Math.round(2.86):

Rounds 2.86 to the nearest integer.
Output: 3.
Math.floor(2.26):

Rounds 2.26 down to the nearest integer.
Output: 2.
Math.floor(2.99999999999):

Rounds 2.99999999999 down to the nearest integer.
Output: 2.
Math.ceil(2.009):

Rounds 2.009 up to the nearest integer.
Output: 3.
Math.random():

Returns a random floating-point number between 0 and 1 (excluding 1).
Output: Random number (e.g., 0.236).
Math.random() * 10:

Returns a random floating-point number between 0 and 10.
Output: Random number (e.g., 4.75).
Math.round(Math.random() * 10):

Generates a random number between 0 and 10, and rounds it to the nearest integer.
Output: Random integer (e.g., 7).
*/ 
const min= Math.min(45,1,65,99,126);
console.log(min);

const max = Math.max(45,1,65,99,126,929);
console.log(max);

console.log(Math.PI);
console.log(Math.abs(-88));
console.log(Math.abs(100-88));

console.log(Math.round(4.8));
console.log(Math.round(2.86));


console.log(Math.floor(2.26));
console.log(Math.floor(2.99999999999));
console.log(Math.ceil(2.009));


console.log(Math.random())
console.log(Math.random()*10)
const rand = Math.round(Math.random()*10);
console.log(rand);

