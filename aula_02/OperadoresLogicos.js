const leia = require("readline-sync")

//dados usuário
const usuario = "user@email.com" 
const senha = "user1234"
const isadmin = false
const isgerente = true
const isblock = false

console.log("\nTela de login")

let usuariologin = leia.question("digite o seu usuario: ")
let senhalogin = leia.question("coloque sua senha: ", {
    hideEchoBack: true,
})

if (usuariologin === usuario && senha === senhalogin) {
    var mensagem = "seja bem vinde! usuário autenticado com sucesso!"
}else{
    var mensagem = "acesso negado!"
}
console.log(mensagem)

if(!isblock) {
    console.log("Usuário ativo")
}else{ 
    console.log("Usuário inativo! contate um administrador")
    Process.exit(0)
}

if(isadmin || isgerente){
    console.log ("acesso ao painel administrativo liberado!")
}else{
    console.log ("acesso ao painel administrativo negado!")
}