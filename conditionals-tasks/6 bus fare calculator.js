/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age=61;
let isStudent =true;
const originalTicketPrice =800;
let discountPrice;

if(age < 10){
  console.log('free');
}else if(age>=60){
  console.log('gets a 15% Discount');
   discountPrice = originalTicketPrice*(1-0.15/100);
  console.log('Discount ticktet price : ',discountPrice.toFixed(2));
}else if(isStudent){
  console.log('get a 50% discount');
  discountPrice = originalTicketPrice*(1-0.50/100);
  console.log('Discount ticktet price : ',discountPrice.toFixed(2));
}else {
  console.log('Regular ticket fare 800 tk');
}

