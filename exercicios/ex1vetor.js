const leia = require("readline-sync")

let vetornumeros = new Array(2, 5, 1, 3, 4, 9, 7, 8, 10, 6)
let numero, contador, posicao

numero = leia.questionInt("DIgite um numero que queira encontrar no vetor: ")

for (contador = 0; contador < vetornumeros.length; contador++) {
    // numero = leia.questionInt("DIgite um numero que queira encontrar no vetor: ")

    if (numero > 0 && numero <= 10) {
        posicao = vetornumeros.indexOf(numero)

    }

}
if (numero > 0 && numero <= 10) {
    console.log(`O numero ${numero} está na posicao: ${posicao}`)
} else {
    console.log(`O numero ${numero} não foi encontrado!`)
}




