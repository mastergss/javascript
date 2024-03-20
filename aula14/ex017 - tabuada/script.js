function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.querySelector('#seltab')

    if (num.value === '') {
        alert('[ERRO]: Por favor digite um número!')
    } else {
        let fator = Number(num.value)
        tab.innerText = ''      //limpar conteúdo 

        for (let c = 1; c <= 10; c++) {
            let produ = document.createElement('option')
            produ.text = `${fator} x ${c} = ${fator * c}`
            tab.appendChild(produ)
        }
    }
}