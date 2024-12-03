const leia = require("readline-sync")
let salario, adicionalNoturno, HoraExtra, Descontos

salario = leia.questionInt("\nDigite o valor do salário: ")
adicionalNoturno = leia.questionInt("\nDigite o valor do adicional: ")
HoraExtra = leia.questionInt("\nDigite o valor das Horas extra: ")
Descontos = leia.questionInt("\ndigite o valor dos descontos")

console.log("o valor liquido do salario é: ", salario + adicionalNoturno + (HoraExtra * 5) - Descontos)
