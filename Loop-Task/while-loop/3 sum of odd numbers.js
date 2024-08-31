

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


// Subtask-1 solution

console.log(' odd numbers from 81 to 131 :');

let sum1=0;

let i =81; 
while(i<=131){
  if(i%2===1){
    console.log(i);
    sum1+=i;
  }
  i++;
}
console.log('sum of all the odd numbers from 81 to 131 : ',sum1);




// Subtask-2 solution

console.log('even numbers from 206 to 311 :');

let sum2=0;

 i =206; 
while(i<=311){
  if(i%2===0){
    console.log(i);
    sum2+=i;
  }
  i++;
}
console.log('sum of all the even numbers from 206 to 311 : ',sum1);