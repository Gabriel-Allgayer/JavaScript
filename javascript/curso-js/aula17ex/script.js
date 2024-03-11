var num = document.getElementById('num')
var resultado = document.getElementById('res')
var select = document.getElementById ('resultado')
var vet = [] // cada número tem que ser guardado no vetor






function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function inNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100 ) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (inNumero(num.value) && !inLista(num.value, vet)) {
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        select.appendChild(item)
        resultado.innerHTML = ``

    }  else {
        window.alert('Número inválido/já adicionado ou campo não preenchido')
    }
    num.value = ``
    num.focus()5
} 

function finalizar() {
    if (vet.length == 0) {
        window.alert('Adicione algum valor antes de finalizar')
    } else {
        let tot = vet.length
        let maior = vet[0]
        let menor = vet [0]
        let soma = 0
        let media = 0
            for (let pos in vet) {
                soma += vet [pos]
                if (vet[pos] > maior)
                maior = vet[pos]
                if (vet[pos] < menor)
                menor = vet[pos]
            }
        media = soma / tot
        resultado.innerHTML = ``
        resultado.innerHTML += `<p>Ao todos temos ${tot} números cadastrados </p>`
        resultado.innerHTML += `<p> O maior valor adicionado foi ${maior}</p>`
        resultado.innerHTML += `<p> O menor valor adicionado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores é ${media}</p>`
        


    }
}




