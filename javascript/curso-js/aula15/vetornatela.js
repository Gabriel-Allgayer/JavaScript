let num = [5,8,9,3]

num.push(7) 
num.sort()

 /*             FORMA COMPLETA E EXPLICATIVA
  for (let pos = 0; pos < num.length ; pos++ ) {
    console.log(`A posição do elemento ${pos} tem o conteúdo ${num[pos]}`)
} */

//              FORMA SIMPLIFICADA 

for (let pos in num ) {
    console.log(`A posição do elemento ${pos} tem o conteúdo ${num[pos]}`)
}

// for (para cada(let) posição(pos) na (in) variavel composta(num) )