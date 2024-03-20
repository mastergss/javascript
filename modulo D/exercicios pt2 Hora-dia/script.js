function loadPage() {
    var agora = new Date()
    var hora = agora.getHours()
    //hora = 1
    var msg = window.document.getElementById('msg')
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    var img = window.document.getElementById('img')
    img.style.borderRadius = '50%'

    // mudar imagem e fundo de tela de forma dinâmica cfe a hora do dia
    if (hora < 6) {
        // Boa madrugada
        msg.innerHTML += `<p><strong>Boa Madrugada!</p></strong>`
        img.src = "../imagens/boamadrugada.png"
        window.document.body.style.backgroundColor = '#003541'
    } else if (hora < 12) {
        // Bom dia
        msg.innerHTML += `<p><strong>Bom Dia!</p></strong>`
        img.src = "../imagens/bomdia.png"
        window.document.body.style.backgroundColor = '#bbe3ff'
    } else if (hora < 18) {
        // Boa tarde
        msg.innerHTML += `<p><strong>Boa Tarde!</p></strong>`
        img.src = "../imagens/boatarde.png"
        window.document.body.style.backgroundColor = '#dda069'
    } else {
        // Boa noite
        msg.innerHTML += `<p><strong>Boa Noite!</p></strong>`
        img.src = "../imagens/boanoite.png"
        window.document.body.style.backgroundColor = '#010629'
    }
}