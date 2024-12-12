export function costCalculator(mothlypayment) {
    let cost = 3 + (mothlypayment * 1.01);
    return cost;
}

console.log(costCalculator(process.argv[3]));