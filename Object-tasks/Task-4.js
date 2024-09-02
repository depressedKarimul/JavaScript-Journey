// Question-->
// Count the number of properties.

// let student = {
//   name: 'Ariana Grande',
//   age: 21,
//   city: 'Gaibandha',
//   isStudent: true
// };


// solution-->

let student= {
  name : 'Ariana Grande',
  age : 21,
  city : 'Gaibandha',
  isStudent : true
};

const key = Object.keys(student);
console.log(key);
let count =0
for(const prop of key){
count++;
}
console.log('the number of properties : ', count);

// Another Way

let totalCount = key.length;
console.log('the number of properties : ', totalCount);


