// Task -3
// Check whether a string contains all the vowels a, e, i, o, u


const str = "Education";

const lowerStr = str.toLowerCase();

let aCount = 0;
let eCount = 0;
let iCount = 0;
let oCount = 0;
let uCount = 0;

for (let i = 0; i < lowerStr.length; i++) {
  if (lowerStr[i] === 'a') {
    aCount++;
  }
  if (lowerStr[i] === 'e') {
    eCount++;
  }
  if (lowerStr[i] === 'i') {
    iCount++;
  }
  if (lowerStr[i] === 'o') {
    oCount++;
  }
  if (lowerStr[i] === 'u') {
    uCount++;
  }
}

if (aCount > 0 && eCount > 0 && iCount > 0 && oCount > 0 && uCount > 0) {
  console.log('string contains all the vowels');
} else {
  console.log('Not');
}
