const prompt= require ('prompt-sync') ({sigint:true})
var dia = parseFloat(prompt("Qual o dia que você nasceu? "))
var mes = parseFloat(prompt("Qual o número do mês que você nasceu? "))

if(dia <= 22 && mes == 12  || mes ==1 && dia <= 20){
    console.log(`O seu signo é Capricórnio`)
}
else if(dia <= 21 && mes ==1 ||  dia <=19 && mes ==2){
    console.log("O seu signo é Aquário")
}

else if ( dia <= 20 && mes == 2 || dia <=20 && mes == 3 ) {
    console.log("O seu signo é Peixes")
}

else if( dia <= 21 && mes == 3 || dia <= 20 && mes == 4){
    console.log("O seu signo é Áries")
}

else if( dia <= 21 && mes == 4 || dia <= 20 && mes== 5){
    console.log("O seu signo é Touro")
}
else if(dia <= 21 && mes == 5 || dia <= 20 && mes == 6){
    console.log("O seu signo é Gêmeos")
}

else if( dia <=21 && mes == 6 || dia <= 21 & mes== 7){
    console.log("O seu signo é Cãncer")
}

else if( dia <= 22 && mes == 7 || dia <= 22 && mes==8){
    console.log("O seu signo é Leão")
}

else if( dia <= 23 && mes== 8 || dia <= 22 && mes == 9){
    console.log("O seu signo é Virgem")
}

else if( dia <= 23 && mes == 9 || dia <= 22 && mes == 10 ){
    console.log("O seu signo é Libra")
}

else if( dia <=23 && mes == 10 || dia <=21 && mes== 11){
    console.log("O seu signo é Escorpião")
}

else{
    console.log("O seu signo é Sagitário")
}