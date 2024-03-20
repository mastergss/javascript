// window.document.write('Olá, Mundo!')
// window.document.write(window.document.characterSet)
// window.document.write(window.document.URL)

//Acessando elementos por Marca
var corpo = document.body
var p1 = window.document.getElementsByTagName('p')[1] //acessando paragráfo na pos1
p1.style.color = 'rgb(23, 12, 255)'
window.document.write('Está escrito assim: '+ p1.innerText)
window.document.write('Está escrito assim: '+ p1.innerHTML)
corpo.style.backgroundColor = 'orange'

//Acessando elementos por ID
// var msgID = document.getElementById('clique_msg')
// msgID.style.backgroundColor = 'green'
// msgID.innerText = 'aqui Clique ...'

//Acessando elementos por Name
// var msgID = document.getElementsByName('msg')[0]
// msgID.style.backgroundColor = 'green'
// msgID.innerText = 'Clique me...'

//Acessando elementos por ClassName
// var msgID = document.getElementsByClassName('clique')[0]
// msgID.style.backgroundColor = 'green'
// msgID.innerText = 'Clique...'

//Acessando elementos por Seletor
var s = document.querySelector('div#clique_msg') //usar sintaxe do CSS '#' para id e '.' para classe
s.style.backgroundColor = 'blue'
s.innerText = 'querySelector'

titulo = document.getElementsByTagName('h1')[0]
titulo.style.backgroundColor = 'black';

function mudarTexto(){
    titulo = document.querySelector('txtTit')
    
}

