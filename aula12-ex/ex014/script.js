function carregar() {
  var msg = document.getElementById("msgHora");
  var img = document.getElementById("imgDia");
  var msgImg = document.getElementById("msgSaudacao");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora < 6) {
    img.src = 'boamadrugada.png';
    img.alt = 'Imagem de Boa Madrugada';
    document.body.style.background = '#5e454b';
    msgImg.innerText = 'Boa Madrugada!'
  } else if (hora < 12) {
    img.src = 'bomdia.png';
    img.alt = 'Imagem de Bom dia';
    document.body.style.background = '#fee87a';
    msgImg.innerText = 'Bom Dia!'
  } else if (hora < 18) {
    img.src = 'boatarde.png';
    img.alt = 'Imagem de Boa tarde';
    document.body.style.background = '#e69a30';
    msgImg.innerText ='Boa Tarde!';
  } else {
    img.src = 'boanoite.png';
    img.alt = 'Imagem de Boa noite';
    document.body.style.background = '#22395a';
    msgImg.innerText ='Boa Noite!';
  }
}