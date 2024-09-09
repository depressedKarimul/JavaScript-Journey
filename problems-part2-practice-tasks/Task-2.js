// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function friendWithTheSmallestName(names){
let smallestName = names[0];
for(const name of names){
  if(smallestName.length>name.length){
    smallestName=name;
  }
}
return smallestName;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const smallestName = friendWithTheSmallestName(heights2);

console.log('friend with the smallest name : ',smallestName)
