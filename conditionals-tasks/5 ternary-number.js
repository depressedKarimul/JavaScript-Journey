/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

//using if-else. 
let num1=17;
let num2=28;

let result;

if(num1>num2){
  console.log('Result : ',result=2*num1);
}else{
  console.log('Result : ',result=num1+num2);
  
}

// using ternary operator

(num1>num2)? console.log('Result : ',result=2*num1) :  console.log('Result : ',result=num1+num2);