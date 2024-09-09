function calculateMoney(ticketSale){
  if (ticketSale < 0 || typeof ticketSale === 'string') {
    return "Invalid Number";
  }
  
  const ticketPrice = 120;
  const securityPayment =500;
  const staffPymnet = 50;

  const calculateProfitAmount = (ticketSale*ticketPrice) - (securityPayment + (staffPymnet*8));

  return calculateProfitAmount;
}

console.log(calculateMoney(10)); 
