export function rubricPassFail(punctuation) {
    let resul
    if (punctuation < 0 || punctuation >11) {
        resul = "Calificación invalida"
    }
    else if (punctuation >5){
        resul = "¡Pass!"
    }
    else {
        resul = "Fail"
    }
    return resul
}
console.log(rubricPassFail(process.argv[3]));