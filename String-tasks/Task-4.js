// Task-4:
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


let str = "Example text with some X and x characters.";


if (str.includes('x') || str.includes('X')) {
  console.log("The string contains 'x' or 'X'.");
  
 
  let newStr = str.replace(/x/g, '*').replace(/X/g, '*');
  
  console.log("Modified string:", newStr);
} else {
  console.log("The string does not contain 'x' or 'X'.");
}
