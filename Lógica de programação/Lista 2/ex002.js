const prompt = require ('prompt-sync') ({sigint:true})
var num1 = parseFloat(prompt ("digite um número "))

if (num1 % 2 == 0)
    console.log("este número é par")
else 
    console.log("este número é impar")