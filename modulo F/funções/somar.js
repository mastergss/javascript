function somar(n1, n2) {
    return n1 + n2
}

console.log(`A soma entre os números é ${somar(2, 3)}`)

// caso não seja passado todos os parâmetros
function somar2(n1=0, n2=0) {
    return n1 + n2
}
console.log(`A soma entre os números é ${somar2(2)}`)

