//João Vitor Rodrigues dos Santos
//MAT: 25114290126
var n1 = 5 
var n2 = 5
var n3 = 8
var p1 = 3
var p2 = 3
var p3 = 4
var media
var soma
var mult
mult = (n1 + p1) +(n2 + p2) + (n3 + p3)
somap= p1 + p2 + p3
media = mult / somap
if ( media > 5 || media == 5){
    console.log("O estudante foi aprovado, com a média: ", media)
}
else {
    console.log("O estudante foi reprovado, com a média: ", media)
}