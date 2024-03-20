let formNum = document.getElementById('formNum')
let selNum = document.getElementById('selNum')
let res = document.getElementById('res')
let listVal = []

function adicionar () {
    let numAdd = Number(formNum.value)
    if (inNumber(numAdd) && inList(numAdd, listVal)) {
        listVal.push(numAdd)
        inserirValor(numAdd)
    } else {
        window.alert('[ERRO]: Valor inválido ou já adicionado na lista!')
    }
    formNum.value = ''
    formNum.focus()
    res.innerHTML = ''
}
// verifica se o numero do formulario está entre 1 e 100
function inNumber(num) {
    if (num >= 1 && num <= 100) {
        return true
    } else {
        return false
    }
}
// verifica se o número adicionado está na lista
function inList(num, val) {
    if (val.indexOf(Number(num)) === -1) {
        return true
    } else {
        return false
    }
}
// inserir valor na lista
function inserirValor(num) {
    let item = document.createElement('option')
    item.innerText = `Valor ${num} adicionado.`
    selNum.appendChild(item)
}

function finalizar () {
    if (listVal.length === 0) {
        alert('Antes de Finalizar, você deve adicionar valores!')
    } else {
        let total = listVal.length
        let maior = listVal[0]
        let menor = listVal[0]
        let somar = 0
        // laço para verificar valores maior, menor e somar
        for (let pos in listVal) {
            somar += listVal[pos]
            if (listVal[pos] > maior) {
                maior = listVal[pos]
            }
            if (listVal[pos] < menor) {
                menor = listVal[pos]
            }
        }
        let media = somar / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somar}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é de ${media}.`
    }
}

// function menor(listVal) {
//     let pos = 0
//     return listVal[pos]
// }

// function valMaior(val) {
//     let pos = listVal.length
//     return val[pos-1]
// }

// function somar(listVal) {
//     let som = 0
//     for (let pos in listVal) {
//         som += listVal[pos]
//     }
//     return som
// }

// function calcMedia(listVal) {
//     let qtdNum = listVal.length 
//     return somar(listVal) / qtdNum

// function adicionar() {
//     if (formNum.value.length === 0 || formNum.value < 1 || formNum.value > 100) {
//         alert('[ERRO]: Valor Inválido ou já adicionado na lista!')
//     } else {
//         let num = Number(formNum.value)
//         res.innerHTML = ''
//         inserirValor(num)
//     }
// }

// function inserirValor(num) {
//     if (listVal.indexOf(num) === -1) {
//         let insNum = document.createElement('option')
//         insNum.innerText = `Valor ${num} adicionado.`
//         selNum.appendChild(insNum)
//         listVal.push(num)
//         //console.log(listVal)
//     } else {
//         alert(`O valor ${num} já foi adicionado a lista!`)
//     }   
// }
//}