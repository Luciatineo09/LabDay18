export function rubricPerfect(punctuation) {

    if (punctuation == 11){
    return "Perfect"
    } else if (punctuation >= 9){
        return "excellent"
    }
    else if (punctuation >=5){
        return "¡Pass!"
    }
    else {
        return "Fail"
    }
}
console.log(rubricPerfect(process.argv[3]));