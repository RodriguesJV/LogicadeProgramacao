//João Vitor Rodrigues dos Santos
//MAtricula:25114290126

const prompt = require ('prompt-sync')({sigint:true})
let D= parseFloat(prompt ("Digite a distância percorrida até o seu destino "));
let custo1 = 5.3 + 4.4 * D;
let custo2 = 3.3 + 3.8 * D;
let custo3 = 4.3 + 4.1 * D; 
let horario = parseFloat(prompt("Digite o horário atual "))

if (horario >= 0 && horario <= 6  ){
    console.log("De acordo com o horário e distancia, sua corrida ficará no preço de:",custo1,"de acordo com o horário dessa madrugada")
}
else if (horario > 6 && horario <= 18){
    console.log("De acordo com o horário e distancia, sua corrida ficará no preço de:", custo2, "de acordo com o horário durante o dia")
}
else if(horario > 18 && horario <=24){
    console.log("De acordo com o horário e distancia, sua corrida ficará no preço de:",custo3,"de acordo com o horário noturno")
}
