/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/


// subtask-1 solution

console.log('odd numbers from 61 to 100 : ');

let i=61;
while(i<=100){

  if(i%2===1){
    console.log(i);
  }

  i++;
}


// subtask-2 solution
console.log('even numbers from 78 to 98 :');

i=78;
while(i<=98){
  if(i%2===0){
    console.log(i);
  }
  i++;

}