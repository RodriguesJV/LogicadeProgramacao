//João Vitor Rodrigues dos Santos
//MAT: 25114290126
const prompt = require ('prompt-sync')({sigint:true})
var olimpiadas = parseInt (prompt("digite um ano de 1896 a 2025: "))

if ( olimpiadas % 4 ){
    console.log("Nesse ano corresponde ao um ano de jogos olimpicos")
}
else {
    console.log("Nesse ano não teve jogos olimpicos")
}