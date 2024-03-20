var msg = document.getElementById('area')
msg.addEventListener('click', clicar)
msg.addEventListener('mouseenter', entrar)
msg.addEventListener('mouseout', sair)

function clicar() {
    //var msg = document.getElementById('area')
    msg.innerText = 'Clicou!'
    msg.style.background = 'green'
}

function entrar() {
    msg.innerText = 'Entrou!'
    msg.style.background = 'blue'
}

function sair() {
    msg.innerText = 'Saiu!'
    msg.style.background = 'red'
}