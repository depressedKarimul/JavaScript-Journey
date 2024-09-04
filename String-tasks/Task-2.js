// Task-2:
// Count how many times a string has the letter a or A

const str = "Amazing aardvarks always appreciate apples and avocados, admiring astonishing autumnal adventures.";

let count=0;
for(let i =0; i<str.length; i++){
  if(str[i]==='a' || str[i]==='A' ){

    count++;
  }
}

console.log('There are',count,'times a string has the letter a or A');
