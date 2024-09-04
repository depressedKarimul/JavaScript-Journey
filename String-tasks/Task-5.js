// Task-5
// Capitalize Every first Letter of each word in a String


let str = "capitalize every first letter of each word in a string";


let capitalizedStr = str.replace(/\b\w/g, char => char.toUpperCase());

console.log(capitalizedStr);
