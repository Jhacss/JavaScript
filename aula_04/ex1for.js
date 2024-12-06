const leia = require("readline-sync")

let numero, contador, impares = 0, pares = 0

for(contador = 1;contador <=10; contador++){
 numero = leia.question(`digite o ${contador} numero `)


if (numero % 2 === 0) {
    pares++
} else {
    impares++
}
}

    console.log("Total de números pares: ", pares)
    console.log(`Total de numeros impares: ${impares}`)

