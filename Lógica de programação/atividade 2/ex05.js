//João Vitor Rodrigues dos Santos
//MAT: 25114290126

const prompt = require ('prompt-sync') ({sigint:true})
var semaforo = prompt("digite uma das cores do semáforo(verde, amarelo ou vermelho ")
if (semaforo == "verde"  ){
    console.log("SIGA!")

} else if (semaforo == "amarelo"){
    console.log("ATENÇÃO!")
}
    

else if (semaforo == "vermelho") {
    console.log("PARE!")
}

else{
    console.log("Cor inválida entrada pelo usuário")
}