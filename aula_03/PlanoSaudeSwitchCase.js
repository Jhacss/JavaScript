const leia = require('readline-sync')

let nome = leia.question('Digite o seu nome: ');

console.log('Faixas Etarias')
console.log('1 - idade entre 0 e 10 anos')
console.log('2 - idade entre 11 e 29 anos')
console.log('3 - idade entre 30 e 45 anos')
console.log('4 - idade entre 46 59 anos')
console.log('5 - idade entre 60 e 65 anos')
console.log('6 - idade acima de 60 anos')

let FaixaEtaria = leia.questionInt('digite a sua faixa etaria: ')
let valor;

switch(FaixaEtaria){
    case 1:
        valor = 100.00;
        break;
    case 2:
        valor = 200.00
        break;
    case 3:
        valor = 300.00
        break;
    case 4:
        valor = 500.00;
        break;
    case 5:
        valor = 600.00;
        break
    case 6:
        valor = 1000.00;
        break;
        default:
            console.log('faixa etaria invalida!')
}

console.log(`O Valor do plano de saúde do(a) ${nome} é igual a R$ ${valor}: `) 