const prompt = require ('prompt-sync') ({sigint:true})
var thebest= prompt ("qual é o jogador que foi mais vezes eleito melhor do mundo? ")
var milior = ( thebest == "Messi")? "Sim, o Messi é o melhor do mundo" : thebest == "Cristiano Ronaldo" ? "Não, o penaldo não é o melhor" : "Não, não mesmo";
console.log(milior) 