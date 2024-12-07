const leia = require("readline-sync")

let numero, numpos = 0

do {
    numero = leia.questionInt("Digite um numero: ")
    if (numero > 0)
        (numpos += numero)
} while (numero != 0) 
    


console.log(`a soma de todos os números positivo é ${numpos} `)
