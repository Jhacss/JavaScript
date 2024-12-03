const leia = require("readline-sync")
let n1, n2, n3, n4

n1 = leia.questionInt("\nDigite o valor de n1: ")
n2 = leia.questionInt("\nDigite o valor de n2: ")
n3 = leia.questionInt("\nDigite o valor de n3: ")
n4 = leia.questionInt("\nDigite o valor de n4: ")

console.log("Diferença = ", (n1 * n2)-(n3 * n4))
