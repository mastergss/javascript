function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value

    if (fano == '' || fano > ano || fano.length < 4) {
        alert('[ERRO]: Dados inválidos, corrija os dados e tente novamente!')
    } else {
        var genero = ''
        var fsexo = document.getElementsByName('radsex')
        var calcIdade = ano - fano
        var imagem = document.createElement('img')
        imagem.setAttribute('img', 'src')
        var resp = document.querySelector('div#res')
        if (fsexo[0].checked) {
            genero = 'Homem'
            if (calcIdade < 13) {
                imagem.src = 'cria_m.png'
            } else if (calcIdade < 21) {
                imagem.src = 'adol_m.png'
            } else if (calcIdade < 59) {
                imagem.src = 'adul_m.png'
            } else {
                imagem.src = 'idos_m.png'
            }
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (calcIdade < 13) {
                imagem.src = 'cria_f.png'
            } else if (calcIdade < 21) {
                imagem.src = 'adol_f.png'
            } else if (calcIdade < 59) {
                imagem.src = 'adul_f.png'
            } else {
                imagem.src = 'idos_f.png'
            }
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = `<p>Detectamos um(a) ${genero} com ${calcIdade} anos.</p>`
        imagem.style.borderRadius = '50%'
        resp.appendChild(imagem)
    }
}