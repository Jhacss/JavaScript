const leia = require("readline-sync")
let salario, abono 

salario =leia.questionInt("\nDigite o salario: ")
abono =leia.questionInt("\nDigite o abono salarial: ")

console.log("Salário liquido: ", salario + abono)
