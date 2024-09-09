// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer



function findLongestWord(str) {

  let words = str.split(' ');
  let longestWord = '';

 
  for (let word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }

  return longestWord;
}


let input = "I am learning Programming to become a programmer";
console.log(findLongestWord(input)); // Output: Programming
