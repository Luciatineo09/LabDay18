export function costCalculator(cost) {
    const fee = 3; 
    const interestFee = cost * 0.01;
    const monthlypayments = cost + interestFee + fee; 
    return monthlypayments;
}
console.log(costCalculator(process.argv[3]));