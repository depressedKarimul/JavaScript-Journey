

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/



// Task-1
let sum1=0;
console.log('odd numbers from 91 to 129 :');
for(let i=91; i<=129; i++){
  if(i%2===1){
    console.log(i);
    sum1+=i;
  }
}
console.log('sum of all the odd numbers from 91 to 129 : ',sum1);