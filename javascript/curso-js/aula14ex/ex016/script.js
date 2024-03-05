var ninicio = document.getElementById('ninicio')
var nfinal = document.getElementById('nfinal')
var npasso = document.getElementById('npasso')
var res = document.getElementById('resposta')


function clickar () {
    var nini = Number(ninicio.value)
    var nfin = Number(nfinal.value)
    var npas = Number(npasso.value)
    res.innerHTML += (`Contando... <br>`)

    if (ninicio.value.length == 0 || nfinal.value.length == 0 || npasso.value.length == 0){
    window.alert ('Impossivel contar')
    } else if (npas <= 0 ) {
        res.innerHTML += (` <p> Passo Invalido </p> `)
    } else if (nini < nfin){
            res.innerHTML += (`<strong>${nini}</strong>\u{2714}       `)
        while (nini < nfin) {
            nini += npas
            res.innerHTML += (`<strong>${nini}</strong>\u{2714}       `)
        }
    } else {
        while (nini > nfin) {
            nini -= npas
            res.innerHTML += (`<strong> ${nini} <strong> \u{2714}`)
        }
    }
}