let num = [5,8,9,3]
num.push(7) /*puxa um número para o elemento*/ 
num.sort() /*deixa o conteúdo dos elementos em ordem*/ 
console.log (num)
console.log (`O vetor tem ${num.length} posições`) /* mostra a quantidade de elementos do vetor */
console.log ( `O segundo valor do vetor é ${num[2]}`) /* mostra o conteúdo do elemento na posição desejada ([2] = elemento)  */


let pos = num.indexOf(12)
if (pos == -1 ) {
    console.log ('Valor não encontrado')
} else {
console.log (`O valor 8 está na posição ${pos}`)
}

