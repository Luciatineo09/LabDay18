export function rubricExcellent(punctuation) {
    if (punctuation >= 9){
        return "excellent"
    }
    else if (punctuation >=5){
        return "¡Pass!"
    }
    else{
        return "Fail"
    }
}
console.log(rubricExcellent(process.argv[3]));