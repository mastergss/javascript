/* verificar data atual */
var data = new Date()
var ano = data.getFullYear()

/* ao clicar no btn Verificar chamar função para validar dados
existem duas formar no HTML: onclick() JS: addEventListener */
var btnVerificar = window.document.querySelector('input#btnVerificar')
btnVerificar.addEventListener('click', verIdade)

function verIdade() {
    var anoNasc = window.document.getElementById('txtAno')
    var radsex = window.document.getElementsByName('radsex')
    var minNasc = Number(anoNasc.getAttribute('min'))
    // window.alert(radsex[0].checked)
    //window.alert(anoNasc.getAttribute('min'))
    if (anoNasc.value.length === 0 || anoNasc.value > ano || anoNasc.value < minNasc) {
        window.alert('[ERRO]: Dados inválidos. Tente novamente!')
    } else {
        var idade = ano - anoNasc.value
        var genero = ''
        var res = window.document.querySelector('div#res')
        // criar tag img e acrescentar atributo; no HTML = <img id="foto">
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsex[0].checked) {
            genero = 'Homem'
            if (idade < 12) {
                img.setAttribute('src', '../imagens/M-crianca.png')
            } else if (idade <= 18) {
                img.setAttribute('src', '../imagens/M-jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', '../imagens/M-adulto.png')
            } else {
                img.setAttribute('src', '../imagens/M-melhoridade.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 12) {
                img.setAttribute('src', '../imagens/F-crianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', '../imagens/F-jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', '../imagens/F-adulto.png')
            } else {
                img.setAttribute('src', '../imagens/F-melhoridade.png')
            }
        }
        res.innerHTML = `<p>Detectamos um(a) ${genero} com <strong>${idade} anos</strong>.</p>`
        // inserir elemento criado no HTML
        res.appendChild(img)
        img.style.borderRadius = '50%'
    }
}