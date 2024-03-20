let amigo = {
    nome: 'Gerson',
    sexo: 'M',
    peso: 69,
    engordar(p=0){
        if (amigo.nome === 'Gerson') {
            console.log('Peso aumentou!')
            this.peso += p
        } else {
            console.log('Peso diminuiu!')
            this.peso -= p*p
        }
    }
}

console.log(amigo)
console.log(amigo.nome)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}kg.`)

amigo.nome = 'Bento'
amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}kg.`)