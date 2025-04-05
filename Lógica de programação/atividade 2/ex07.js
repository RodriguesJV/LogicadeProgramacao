//João Vitor Rodrigues dos Santos
//MAT: 25114290126
const prompt = require ('prompt-sync')({sigint:true})
var copa = parseInt (prompt("digite um ano de 1970 a 2025: "))

if ( copa % 4 ){
    console.log("Nesse ano teve uma copa do mundo")
}
else {
    console.log("Nesse ano não teve copa")
}