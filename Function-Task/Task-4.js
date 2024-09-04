// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){
console.log(binaryNumber);
let count =0;
for(let i =0; i<binary.length; i++){
  if(binary[i]==='0'){
    count++;
  }

}
return count;
}
const binaryNumber ='10101010101010101';
const total_zeros = count_zero(binaryNumber);

console.log('total',total_zeros,'0’s are there in that string');