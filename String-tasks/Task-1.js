// Task-1:
// Count how many times a string has the letter a

const sentence ="Amanda always asks Anna about amazing art and architecture at the annual art fair.";

let count=0;

for(let i =0; i<sentence.length; i++){
  if(sentence[i]==='a' || sentence[i]==='A'){
    count++;
  }
}

console.log('The letter "a" appears:', count, 'times');

// Another Way

const sentenceLowerCase =sentence.toLowerCase();
const length=sentenceLowerCase.split('a').length;
console.log('The letter "a" appears:', length-1, 'times');


