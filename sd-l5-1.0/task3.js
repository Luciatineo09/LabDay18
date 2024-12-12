export function ageCalculator(year, month, day) {
    let today = new Date();
    let birthday = new Date(year, month, day);
    
    return today.getFullYear() - birthday.getFullYear();
}

console.log(ageCalculator('2002','2','09'));