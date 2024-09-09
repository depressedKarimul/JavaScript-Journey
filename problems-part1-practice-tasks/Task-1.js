// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.


function CelsiusToFahrenheit(celsius){

const fahrenheit = (1.8*celsius)+32;

return fahrenheit;

}

const celsius =CelsiusToFahrenheit(50);
console.log('Fahrenheit : ',celsius)
