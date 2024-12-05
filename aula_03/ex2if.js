const leia = require("readline-sync")

let numero, parimp, posneg

numero = leia.questionInt("Digite um numero: ")

if (numero % 2 === 0 ){
    parimp = "par"
    }else{
    parimp = "impar"
}
if (numero > 0) {
    posneg = "positivo";
} else if (numero < 0) {
    posneg = "negativo";
} else {
    posneg = "neutro";
}

console.log(`O numero ${numero} é ${parimp} e ${posneg} `)