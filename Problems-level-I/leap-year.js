/**
 * simple logic : 
 * year will be a leap year iif the year is divisible by 4
 * 
 */ 

function isLeapYear(year){
    if(year%4=== 0){
        return true;
    }else {
        return false;
    }
}

const isLipi = isLeapYear(2043);
console.log(isLipi);

/**
 * 1. those year that is not divisble by 100, if the year is divisble by 4 : 
 * then it will be a leap year
 * 
 * 2.  if the year is divisible by 400, then it is a leap year
 * 
 * 3. easle it is not a leap year
 * 
 * 
 */ 

function isLeapYear2(year){
    if(year % 100 !==0 & year % 4 ===0){
        return true;
    }

    else if(year % 100 ===0 && year%400 ===0){
        return true;
    }else {
        return false;
    }

    
}

console.log(isLeapYear2(21000));
console.log(isLeapYear2(2400));
console.log(isLeapYear2(2052));
