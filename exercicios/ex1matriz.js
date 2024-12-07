
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let diagonalp = []
let diagonals = []
let somaprincipal = 0
let somasecundaria = 0

//processamento das linhas e colunas
for(let linhas = 0;linhas < 3; linhas++){     //laço de repetição para percorrer a linha da matriz 
    for(let colunas = 0; colunas < 3; colunas++){   //laço de repetição para percorrer as colunas das linhas da matriz
        
        //descobrir os elementos da diagonal principal
        if(linhas === colunas){   //verifica se a posição linha é igual a posição coluna
            diagonalp.push(matriz[linhas][colunas]) // verifica qual é o valor armazenado e salva ele em unma variavel
            somaprincipal += matriz[linhas][colunas] // ele soma os valores da diagonal principal
        }

        //descobrir os elementos da diagonal secundária
        if(linhas + colunas === 2 ){  // verifica se a soma da posição linha com posição coluna é igual a 2 (2 é o valor em comum dessas posições)
            diagonals.push(matriz[linhas][colunas]) // verifica qual é o valor armazenado e salva ele em unma variavel
            somasecundaria += matriz[linhas][colunas]  // ele soma os valores da diagonal principal
        }
         
    }
}
console.log(`\nElementos da diagonal principal: \n ${diagonalp}`)
console.log(`\n Elementos da diagonal secundaria: \n ${diagonals}`)
console.log(`\n Soma dos elementos da diagonal principal: \n ${somaprincipal}`)
console.log(`\n Soma dos elementos da diagonal secundaria: \n ${somasecundaria}`)