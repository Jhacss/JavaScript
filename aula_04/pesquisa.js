const leia = require("readline-sync")

let idade, esporte, futebol = 0, voleibolmaiores18 = 0, basquete = 0, outros = 0, continua = `S`;

while (continua === `S`) {
    idade = leia.questionInt("digite a sua idade: ")
    do {
        esporte = leia.questionInt("digite o esporte favorito (1-FUT/2-VOL/3-BAS/4-OUTROS)")

        if (esporte < 1 || esporte > 4)
            console.log("digite um numero entre 1 e 4")

    } while (esporte < 1 || esporte > 4)

    if (esporte === 1) {
        futebol++;
    }

    if (esporte === 2 && idade > 18)
        voleibolmaiores18++;

    if (esporte === 3 && idade < 18)
        basquete++

    if (esporte === 4)
        outros++

    continua = leia.question("Deseja continuar (S/N)?")
}





console.log(`Total de pessoas que gostam de futebol: ${futebol}`)
console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleibolmaiores18}`)
console.log(`Total de pessoas que gostam de basquetebol e são menores de 18 anos: ${basquete}`)
console.log(`Total de pessoas que gostam de outros esportes: ${outros}`)
