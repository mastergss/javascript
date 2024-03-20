function contar() {
    var txtnum = document.getElementsByName('txtnum')
    var ini = Number(txtnum[0].value)
    var fim = Number(txtnum[1].value)
    var pas = Number(txtnum[2].value)
    var resposta = document.querySelector('#res')
    
    if (txtnum[0].value === '' || txtnum[1].value === '' || txtnum[2].value === '') {
        resposta.innerHTML = 'Impossível Contar.'        
    } else if (fim <= ini || pas === 0) {
        if (fim <= ini) {
            alert('Fim deve ser maior que o Início.')
            txtnum[1].focus()
        } else {
            alert('Passo inválido! Considerando passo 1.')
            txtnum[2].value = 1
            pas = 1
            //txtnum[2].focus()
            window.contar()
        }
    } else {
        resposta.innerHTML = `<p>Contando...</p>`
        for (var contar = ini; contar <= fim; contar += pas) {
            resposta.innerHTML += `${contar} \u{1F449}`     
        }
        resposta.innerHTML += `\u{1F3C1}`
    }
}