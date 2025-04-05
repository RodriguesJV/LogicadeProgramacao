const prompt = require ('prompt-sync')({sigint: true})
var soma
var div
var num1 = parseFloat (prompt ("digite um número "))
var num2 = parseFloat (prompt("digite um segundo número "))
var num3= parseFloat (prompt("digite um terceiro número "))
soma = num1 + num2 + num3 
div = soma / 3

if ((num1 < 100 && num1 > 0) || (num2 < 100 && num2 > 0) || (num3 < 100 && num3 > 0) ){
    console.log("a média arimética desses números é "+ div)

}else {
    console.log("erro nos números digitados")
}
    

//João Vitor Rodrigues dos Santos
//MAT: 25114290126