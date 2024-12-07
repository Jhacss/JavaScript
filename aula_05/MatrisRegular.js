const leia = require("readline-sync")
//linhas da matriz
let matrizinteiros = new Array(3);
//colunas da matriz
for (let indice = 0; indice < matrizinteiros.length; indice++){
    matrizinteiros[indice] = Array(3);
}

//percorrendo a matriz e inserindo dados
for(let indicelinha = 0; indicelinha < matrizinteiros.length; indicelinha++){
    for(let indicecoluna = 0; indicecoluna < matrizinteiros.length; indicecoluna++){
        matrizinteiros[indicelinha][indicecoluna] = leia.questionInt(" Digite um número: ")
    }
}
//exibindo os dados da matriz
console.table(matrizinteiros)
