const leia = require("readline-sync")

let numero, contador = 1, menores21 = 0, maiores50 = 0

while (contador) {
    numero = leia.questionInt(`Digite o ${contador}  numero: `)
    contador++

    if (numero < 0) {
        break;
    }

}


if (numero < 21) {
    menores21++

} else if (numero > 50) {
    maiores50++



}







console.log("\ntotal de pessoas menores de 21: ", menores21)
console.log("\ntotal de pessoas maiores de 50: ", maiores50)
