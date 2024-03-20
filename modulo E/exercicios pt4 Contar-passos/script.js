function contar () {
    // capturar dados do formulário
    var ini = window.document.getElementById('numIni')
    var fim = window.document.querySelector('input#numFim')
    var pas = window.document.getElementsByName('numPas')[0]
    var res = window.document.getElementById('res')

    // converter em número
    var numPas = Number(pas.value)
    var numIni = Number(ini.value)
    var numFim = Number(fim.value)

    if (ini.value === '' || fim.value === '' || pas.value === '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br/>'
        if (numPas <= 0) {
            window.alert('Passo Inválido! Considerando passo = 1.')
            numPas = 1
        }
        if (numIni < numFim) {
            for (var c = numIni; c <= numFim; c += numPas) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        } else {
            for (var c = numIni; c >= numFim; c -= numPas) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        }
        res.innerHTML += ' &#x1F3C1' 
    }
    // else if (numIni > numFim) {
    //     window.alert(`[ERRO]: Numero inicial ${numIni} é maior que o Final ${numFim}`)
    // }     
}