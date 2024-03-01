var agora = new Date ()
var hora = agora.getHours ()

console.log (`Agora são ${hora} horas...`)

if (hora > 1 && hora < 6) {
    console.log ('boa madruga !')
} else if (hora > 12 && hora < 18) {
    console.log ('Boa tarde')   
} else if (hora > 18 && hora < 24) {
    console.log ('Boa noite!')
} else {
    console.log ('Bom dia')
}
