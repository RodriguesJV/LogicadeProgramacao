//escreva um programa JS que em que o usuário digita o ano de nascimento e depois exibe a idade do usuário  e se ele é maior de idade
const prompt = require ('prompt-sync')({sigint:true})
var idade = parseFloat(prompt("digite o seu ano de nascimento "))
var calculo
calculo = 2025 - idade 
if ( calculo > 18 ){
    console.log("Você é maior de idade e tem ", calculo, "anos de idade")
}
else {
    console.log("Você é menor de idade e tem ",calculo,"anos de idade")
}
