//João Vitor Rodrigues dos Santos
//MAT: 25114290126

const prompt = require ('prompt-sync')({sigint: true})
var numR = parseFloat(prompt ("digite um número positivo "))
numInt=parseInt((numR)) 
if(numInt % 3 == 0 && numInt > 0){
    console.log("Esse número é múltiplo por 3")
}
else if (numInt % 3 == 0 && numInt < 0){
    console.log("Esse número é múltiplo por 3, mas é negativo")
}

else{
    console.log("Esse número não é multiplo por 3")
}
