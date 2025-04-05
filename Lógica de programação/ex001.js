const prompt = require ('prompt-sync')({sigint: true})
var soma 
var num1 = parseFloat (prompt("digite um número "))
var num2 = parseFloat (prompt("digite mais um número "))
soma = num1 + num2 
console.log ("A soma desses número é: " + soma)