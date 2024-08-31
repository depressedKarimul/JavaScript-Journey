/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/



let height =1.651;
let weight = 70;


let Calculate_BMI=weight/((height*height));
console.log('BMI:',Calculate_BMI);


  if(Calculate_BMI<18.5){
      console.log('you are underweight');
    }else if(Calculate_BMI>=18.5 && Calculate_BMI<=24.9){
      console.log('you are normal')
    }else if(Calculate_BMI>=25 && Calculate_BMI<=29.9){
      console.log('you are overweight');
    }else{
      console.log('Please enter your height and weight as accurately as possible')
    }
