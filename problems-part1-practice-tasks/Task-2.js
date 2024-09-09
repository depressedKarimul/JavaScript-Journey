// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function countOccurrences(findNumber){
  const arr =[5,6,11,12,98, 5];
let count =0;
  for(let i =0;i<arr.length; i++){
    if(arr[i]===findNumber){
      count++;
    }
  }
return count;
}

console.log('find: 5 || output:',countOccurrences(5));
console.log('find: 25 || output:',countOccurrences(25));