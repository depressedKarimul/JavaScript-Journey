// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr){
  const size =arr.length;
  console.log('The size of array : ',size);

  let sum =0;
  for(const number of arr){

    sum = sum+number;
  }
  
  return sum/size;


}

const array = [1,2,3,4,5,6,7,8,9,10];
 const avg = make_avg(array);

 console.log('Average of those values : ',avg);