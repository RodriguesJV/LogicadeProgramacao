const prompt = require('prompt-sync')({sigint: true})
var idade;
var num1 = parseFloat(prompt ("digite seu ano de nascimento "))
var num2 = parseFloat(prompt ("qual é o ano atual? "))
idade = num2 - num1
console.log("A sua idade é "+idade)