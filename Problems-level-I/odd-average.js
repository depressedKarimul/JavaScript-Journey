/*
function takes an array as parameter
give me the average of theodd numers in the array
*/ 
/*
1. put odd numbers in a array
*/ 
function oddAverage(numbers){
  const odds = [];
for(const number of numbers){
  if(number%2===1){
   odds.push(number);
  }
}
// odds is thearray that contains only the odd numbers
// console.log(odds);
let sum =0;
for(const number of odds){
 sum = sum+number;
}
const count = odds.length;

console.log(sum,count);

const avg  = sum/ count;

return avg;
}


const numbers =[42, 13, 58, 65, 81,7];
const avg = oddAverage(numbers);

console.log('average of theodd number is : ',avg)