// Task-4:
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

const str = "Example text with X and x";
const charToCheck = 'x'; 


const exists = str.toLowerCase().includes(charToCheck.toLowerCase());

if (exists) {
 
  const replacedStr = str.replace(new RegExp(charToCheck, 'gi'), 'replacement'); // 'gi' for case-insensitive
  console.log('Updated string:', replacedStr);
} else {
  console.log('Character not found in the string');
}
