// let num = []
let num = [5, 8, 4]
console.log(`O vetor num é ${num}`)

num[3] = 6
console.log(`Adicionando valores ao vetor ${num}`)
num.push(7)
console.log(`Adicionando valores ao vetor ${num}`)

console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(`O vetor ordenado é ${num}`)

// buscar valores no vetor
let pos = num.indexOf(8)
if (pos === -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}