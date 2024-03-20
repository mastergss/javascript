function parimp(n) {
    if (n % 2 === 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
// assim não terá nenhum efeito
parimp(2)

// chamada
let res = parimp(2)
console.log(res)
// ou
console.log(parimp(223))
