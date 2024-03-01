function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = document.getElementById('img')
    var data = new Date ()
     // var hora = data.getHours () 
     var hora = 1
    
    msg.innerHTML = `<br><p> Agora são ${hora} Horas <p>`

    if (hora > 0 && hora < 12) {
         img.src = "imgdia.png";
         document.body.style.background = '#f8b76ce0'
    } else if (hora > 12 && hora < 18) {
         img.src = "imgtarde.png";
         document.body.style.background = '#f1573bb4'
    }      else {
         img.setAttribute('src','imgnoite.png')
         document.body.style.background = '#4858e7b4'
            }
}

