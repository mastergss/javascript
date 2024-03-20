function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('txtano').value

    if (anoNasc === '' || anoNasc > anoAtual || anoNasc < 1900) {
        alert('[ERRO] Ano de Nascimento Inválido!')
    } else {
        var calcIdade = anoAtual - Number(anoNasc)
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var resposta = document.querySelector('#res')
        var foto = document.createElement('img')
        foto.setAttribute('img', 'src')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (calcIdade <= 12) {
                foto.src = 'cria_m.png'
            } else if (calcIdade <= 24) {
                foto.src = 'adol_m.png'
            } else if (calcIdade <= 59) {
                foto.src = 'adul_m.png'
            } else {
                foto.src = 'idos_m.png'
            }
        } else {
            genero = 'Mulher'
            if (calcIdade <= 12) {
                foto.src = 'cria_f.png'
            } else if (calcIdade <= 24) {
                foto.src = 'adol_f.png'
            } else if (calcIdade <= 59) {
                foto.src = 'adul_f.png'
            } else {
                foto.src = 'idos_f.png'
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `<p>Detectamos um(a) ${genero} com ${calcIdade} ano(s).</p>`
        foto.style.borderRadius = '30%'
        resposta.appendChild(foto)
    }
}