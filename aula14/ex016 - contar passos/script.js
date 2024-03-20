var campoInicio = document.querySelector("#campoInicio")
var campoFim = document.querySelector("#campoFim")
var campoPasso = document.querySelector("#campoPasso")
var campoRes = document.querySelector("#res")
var btnContar = document.querySelector("#btnContar")

btnContar.addEventListener("click", contar)

function contar() {
    /*var forIni = Number(campoInicio.value)
    var forFim = Number(campoFim.value)
    var forPas = Number(campoPasso.value)*/
    if (campoInicio.value === '' || campoFim.value === '' || campoPasso.value === '') {
        alert('[ERRO] Verifique os campos vazios e tente novamente!')
        campoRes.innerHTML = `Impossível Contar!`
    } /*else {
        if (forFim <= forIni) {
            alert('Fim deve ser maior que o Inicio!')
        } else if (forPas === 0) {
            campoRes.innerText = "Impossível Contar!"
            campoPasso.focus()
            campoPasso.value = ''
        } else {
            campoRes.innerHTML = `<p>Contando...</p>`
            // var contar = forIni + forPas
            // while (contar <= forFim) {
            //     campoRes.innerText += contar + '...'
            //     contar += forPas
            // }
            for (var c = forIni; c <= forFim; c += forPas) {
                campoRes.innerHTML += ` ${c} \u{1F449}`
            }
            campoRes.innerHTML += `&#x1F3C1`
        }
    }*/
    else {
        let ini = Number(campoInicio.value)
        let fim = Number(campoFim.value)
        let pas = Number(campoPasso.value)
        campoRes.innerHTML = `Contando...</br>`

        if (pas <= 0) {
            alert('Impossível Contar. Considerando Passo 1.')
            pas = 1
            campoPasso.value = 1
        }
        if (ini < fim) {
            //contagem crescente
            for (let c = ini; c <= fim; c += pas) {
                campoRes.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for (let c = ini; c >= fim; c -= pas) {
                campoRes.innerHTML += `${c} \u{1F449}`
            }
        }
        campoRes.innerHTML += ` \u{1F3C1}`
    }
}