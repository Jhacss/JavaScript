const leia = require("readline-sync")

let numero, contador = 1, menores21 = 0, maiores50 = 0

while(contador <= 10) {
    numero = leia.questionInt(`Digite o ${contador}  numero: `)
    contador++

    if(numero < 21){
        menores21++
    
    }else if(numero > 50){
        maiores50++
    }


}




console.log("total de pessoas menores de 21: ", menores21)
console.log("total de pessoas maiores de 50: ", maiores50)
