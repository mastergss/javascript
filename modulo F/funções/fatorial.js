// fatorial de 5! = 5 * 4 * 3 * 2 * 1 = 120
function fatorial(num) {
    let fat = 1
    for (let c = num; c > 1; c --) {
        fat *= c
    }
    return fat
}

console.log(`O fatorial do número 5 é ${fatorial(5)}.`)