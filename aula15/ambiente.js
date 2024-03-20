let num = [5, 9, 3, 4, 0]

console.log(`O valor na primeira posição do vetor é ${num[0]}`)
console.log(`Este é o nosso vetor ${num}`)
console.log(`tamanho do vetor ${num.length} posições`)

num[5] = 6 //insere valor na posição 5 para isso devemos saber o tamanho do vetor
console.log(`novo valor no array ${num}`)

num[num.length - 1] = 99 //outra forma de inserir valor na última posição do array

num.push(8) //insere valor automaticamente na última posição do vetor
console.log(`novo valor no vetor ${num}`)

num.sort() //organiza vetor em ordem crescente
console.log(`Array em ordem crescente ${num}`)
console.log(`O valor na última posição do vetor é ${num[num.length - 1]}`)

let pos = num.indexOf(8)
if (pos === -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor foi encontrado na posição ${pos}`)
}