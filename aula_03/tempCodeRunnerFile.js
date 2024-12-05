const leia = require("readline-sync")

let nome, salario, cargo, reajuste

console.log("***TABELA DE REAJUSTES*****")
console.log("\n1 - Gerente")
console.log("\n2 - Vendedor")
console.log("\n3 - Supervisor")
console.log("\n4 - Motorista")
console.log("\n5 - Estoquista")
console.log("\n6 - Técnico de TI")

nome = leia.question("Digite seu nome: ")
Cargo = leia.questionInt("Digite o numero do seu cargo: ")
Salario = leia.questionInt("Digite seu salario: ")

switch(cargo){
    case 1:
        reajuste = salario * 0.10
        console.log("\nCARGO: GERENTE\n SALARIO POS REAJUSTE:", salario + reajuste)
        break;
    case 2:
        reajuste = salario * 0.07
        console.log("\nCARGO: VENDEDOR\n SALARIO POS REAJUSTE:", salario + reajuste)
        break;
    case 3:
        reajuste = salario * 0.09
        console.log("\nCARGO: SUPERVISOR\n SALARIO POS REAJUSTE:", salario + reajuste)
        break;
    case 4:
        reajuste = salario * 0.06
        console.log("\nCARGO: MOTORISTA\n SALARIO POS REAJUSTE:", salario + reajuste)
        break;
    case 5:
        reajuste = salario * 0.05
        console.log("\nCARGO: ESTOQUISTA\n SALARIO POS REAJUSTE:", salario + reajuste)
        
        break
    case 6:
        reajuste = salario * 0.08
        console.log("\nCARGO: TECNICO DE TI\n SALARIO POS REAJUSTE:", salario + reajuste)
        break;
        default:
            console.log("ESCOLHA UM NÚMERO VÁLIDO")
}