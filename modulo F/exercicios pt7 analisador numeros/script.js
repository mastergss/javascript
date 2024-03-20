let num = window.document.querySelector('input#formNum')
let lst = window.document.querySelector('select#seleNum')
let res = window.document.querySelector('div#res')
let val = []

function btnAdicionar() {
    let numero = Number(num.value)
    if (rangeNums(numero) && listVal(numero, val)) {
        val.push(numero)
        let item = window.document.createElement('option')
        item.innerHTML = `Valor ${numero} adicionado.`
        lst.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já adiciona na lista!')
    }
    num.value = ''
    num.focus()
}

function rangeNums(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function listVal (n, l) {
    if (l.indexOf(n) === -1) {
        return true
    } else {
        return false
    }
}

function btnFinalizar() {
    if (val.length === 0) {
        window.alert('Antes de finalizar, você deve add um número!')
    } else {
        res.innerHTML = ''
        let total = val.length
        let maior = val[0]
        let menor = val[0]
        let somar = 0.00
        for (let pos in val) {
            somar += val[pos]
            if (val[pos] > maior) {
                maior = val[pos]
            }
            if (val[pos] < menor) {
                menor = val[pos]
            }
        }
        let media = somar / total
        res.innerHTML += `<p>Ao todo, temos ${total} números.</p>`
        res.innerHTML += `<p>O maior número informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado é ${menor}.</p>`
        res.innerHTML += `<p>Somando os números, temos ${somar}.</p>`
        res.innerHTML += `<p>A média entre os números é ${media}</p>`
    }
    num.focus()
}