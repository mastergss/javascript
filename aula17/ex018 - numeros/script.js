let num = document.querySelector('#txtnum')
let lista = document.querySelector('#listanum')
let res = document.querySelector('#res')
let add_val = []

function adicionar() {
    let valor = Number(num.value)
    if (num.value === '' || num.value < 1 || num.value > 100 || num_lista(valor)) {
        alert(`Valor ${num.value} inválido ou já adicionado na lista!`)
    } else {
        if (res.textContent.includes('Resposta')) {
            res.innerHTML = ''
        } if (lista.textContent.includes('Adicione')) {
            lista.innerText = ''
        }
        add_lista(valor)
    }
}

function num_lista(valor) {
    let pos = add_val.indexOf(valor)
    if (pos === -1) {
        return false
    } else {
        return true
    }
}

function add_lista(valor) {
    let optnum = document.createElement('option')
    optnum.innerText = `valor ${valor} foi adicionado`
    lista.appendChild(optnum)
    add_val.push(valor)
}

function finalizar() {
    if (add_val.length === 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        add_val.sort(comparar_valores)
        let somar = somar_valores(add_val)
        let media = media_valores(somar)
        res.innerHTML = `Ao todo, temos ${add_val.length} números cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${add_val[add_val.length - 1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${add_val[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${somar}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
    console.log(res.textContent.length)
}

//utilizada para ordenar array com função de comparação
function comparar_valores(a, b) {
    return a - b
}

function somar_valores() {
    let som = 0
    for (let pos = 0; pos < add_val.length; pos++) {
        som += add_val[pos]
    }
    return som
}

function media_valores(somar) {
    let med = somar / add_val.length
    return med
}