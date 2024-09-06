// Task-3:
// Write a function to count the number of vowels in a string.

function vowelsInAaString(str){
  const newString = str.toLowerCase();
  console.log(newString)
let count =0;
  for(const string of newString){
    if(
      string==='a' ||
      string==='e' ||
      string==='i' ||
      string==='o' ||
      string==='u'){


        count++;
      }
  }
return count;
}

const str = "Hello WoRld";
console.log('The number of vowels in a string :',vowelsInAaString(str));