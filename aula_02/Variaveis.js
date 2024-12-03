let nome = "João";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 1990.90;
const bonus = 0.05;
 
console.log("\nNome: ", nome)
console.log("\nProfissão: ", profissao)

//Definir a variável salário em $BRL
let salario =  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(salarioBruto + (bonus * salarioBruto));

//Exibir o salário bruto
console.log(`O Salário Bruto do Colaborador ${nome} é ${salarioBruto}`)

// console.log("\nTipo da variável:", typeof nome)
 
// nome = 12
 
// console.log("\nNome: ", nome)
 
// console.log("\nTipo da variável:", typeof nome)
 