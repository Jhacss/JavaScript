const leia = require("readline-sync")

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

let vetorinteiros = new Array(5);

let vetornumeros = [7, 4, 5, 6, 1, 8, 3, 9, 10, 4

]

for (let contador = 0; contador < vetorStrings.length; contador++) {

    console.log(vetorStrings[contador]);
}

console.log("O tamanho do vetor de strings é: ", vetorStrings.length)

//for (let contador = 0; contador < vetorinteiros.length; contador++) {

    //vetorinteiros[contador] = leia.questionInt("digite um numero")
//}

console.table(vetorinteiros);

console.table(vetorStrings.sort())

console.table(vetornumeros.sort((a, b) => a - b))

console.log("existe o numero 2? ", vetornumeros.indexOf(2))

