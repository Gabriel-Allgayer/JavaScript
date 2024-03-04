function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] O ano de nascimento é invalido!')
    } else {
        var sexo = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (sexo[0].checked) {
            genero = 'Homem'
            if  (idade > 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'img/homembebe.jpg')
            } else if (idade >= 10 && idade < 21) {
                    // jovem
                    img.setAttribute('src', 'img/homemjovem.jpg')
            } else if (idade >= 21 && idade <= 50) {
                    //adulto
                    img.setAttribute('src', 'img/homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/homemvelho.jpg')
            }

        } else {
            genero = 'Mulher'
            if  (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/mulherbebe.jpg')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'img/mulherjovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'img/mulheradulta.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'img/mulhervelha.jpg')
            
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` <p>Seu sexo é ${genero} com ${idade} anos </p> <br> `
        img.style.borderRadius = '100%'
        res.appendChild(img)
    }
}