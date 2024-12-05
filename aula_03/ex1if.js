const leia = require("readline-sync")

let a, b, c, d;

a = leia.questionInt("\nDigite o numero A: ")

b = leia.questionInt("\nDigite o numero B: ")

c = leia.questionInt("\nDigite o numero C: ")

d = a + b

if(a + b > c){
    console.log(`${a} + ${b} = ${d} > ${c}\n A Soma de A + B é maior que C`)
}else if(a + b === c ){
    console.log(`${a} + ${b} = ${d} = ${c}\n A Soma de A + B é igual a C`)
}else{
    console.log(`${a} + ${b} = ${d} < ${c}\n A soma de A + B é menor que C`)
}

