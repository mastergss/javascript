function tabuada() {
    var txtNum = document.querySelector("#txtNum")
    if (txtNum.value === '') {
        window.alert('[ERRO]: número inválido!')
        txtNum.focus()
    } else {
        var num = Number(txtNum.value)
        var res = document.querySelector("#res")
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var mult = num * c
            var resultados = window.document.createElement('option')
            resultados.innerHTML = `${num} x ${c} = ${mult}`
            res.appendChild(resultados)
        }
    }
}