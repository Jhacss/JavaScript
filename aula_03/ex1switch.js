const leia = require ("readline-sync")
let numero, quant, valor 




 
console.log("\n  ***TABELA DE LANCHES***")
console.log("\n1 - Cachorro quente    R$ 10.00")
console.log("\n2 - X-SALADA           R$ 15.00")
console.log("\n3 - X-BACON            R$ 18.00")
console.log("\n4 - BAURU              R$ 12.00")
console.log("\n5 - REFRIGERANTE       R$ 8.00")
console.log("\n6 - SUCO DE LARANJA    R$ 13.00")



numero = leia.questionInt("\nDigite o numero do lanche que deseja: ")
quant = leia.questionInt("\nDigite o numero de quantos lanches voce deseja: ")

switch(numero){
    case 1:
        valor = 10.00;
        console.log("\nPRODUTO: CACHORRO QUENTE\n VALOR TOTAL = R$",valor * quant)
        break;
    case 2:
        valor = 15.00
        console.log("\nPRODUTO: X-SALADA\n VALOR TOTAL = R$",valor * quant)
        break;
    case 3:
        valor = 18.00
        console.log("\nPRODUTO: X-BACON\n VALOR TOTAL = R$",valor * quant)
        break;
    case 4:
        valor = 12.00;
        console.log("\nPRODUTO: BAURU\n VALOR TOTAL = R$",valor * quant)
        break;
    case 5:
        valor = 8.00;
        console.log("\nPRODUTO: REFRIGERANTE\n VALOR TOTAL = R$",valor * quant)
        
        break
    case 6:
        valor = 13.00;
        console.log("\nPRODUTO: SUCO DE LARANJA\n VALOR TOTAL = R$",valor * quant)
        break;
        default:
            console.log('Só temos lanche do 1 ao 6')
}

