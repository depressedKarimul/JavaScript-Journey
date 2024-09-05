// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}


function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);

    const inchRemaining = inch %12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch'

    return result;
}
const shuvoHeight = inchToFeet2(75);
console.log(shuvoHeight);




function mileToKilometer(mile){
    const kilo = mile * 1.60934;

    return kilo;
}
console.log('Miles to kilometer : ',mileToKilometer(30));


function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

console.log('Kilo Meter To Miles :',kiloMeterToMiles(54));