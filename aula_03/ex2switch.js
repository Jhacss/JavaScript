const leia = require("readline-sync");

let nome, salario, cargo, reajuste;

console.log("***TABELA DE REAJUSTES*****");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Técnico de TI");


nome = leia.question("Digite seu nome: ");
cargo = leia.questionInt("Digite o número do seu cargo: "); 
salario = leia.questionFloat("Digite seu salário: "); 


switch (cargo) {
    case 1:
        reajuste = salario * 0.10;
        console.log(`\nCARGO: GERENTE\nSALÁRIO PÓS REAJUSTE: R$ ${(salario + reajuste).toFixed(2)}`);
        break;
    case 2:
        reajuste = salario * 0.07;
        console.log(`\nCARGO: VENDEDOR\nSALÁRIO PÓS REAJUSTE: R$ ${(salario + reajuste).toFixed(2)}`);
        break;
    case 3:
        reajuste = salario * 0.09;
        console.log(`\nCARGO: SUPERVISOR\nSALÁRIO PÓS REAJUSTE: R$ ${(salario + reajuste).toFixed(2)}`);
        break;
    case 4:
        reajuste = salario * 0.06;
        console.log(`\nCARGO: MOTORISTA\nSALÁRIO PÓS REAJUSTE: R$ ${(salario + reajuste).toFixed(2)}`);
        break;
    case 5:
        reajuste = salario * 0.05;
        console.log(`\nCARGO: ESTOQUISTA\nSALÁRIO PÓS REAJUSTE: R$ ${(salario + reajuste).toFixed(2)}`);
        break;
    case 6:
        reajuste = salario * 0.08;
        console.log(`\nCARGO: TÉCNICO DE TI\nSALÁRIO PÓS REAJUSTE: R$ ${(salario + reajuste).toFixed(2)}`);
        break;
    default:
        console.log("ESCOLHA UM NÚMERO VÁLIDO");
        break;
}


    
        
    



