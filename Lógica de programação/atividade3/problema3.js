
const prompt = require('prompt-sync')({sigint:true})

for(let i = 1 ; i<= 3; i++){
    let ask = parseFloat (prompt("Tente adivinhar um dos números premiados, você tem três tentativas "))
    switch(ask) {
        case(84):
        console.log("Parabéns! Você acertou o número premiado") ;
        break;
        case(11):
        console.log("Parabéns! Você acertou o número premiado") ;
        break;
        case(39):
        console.log("Parabéns! Você acertou o número premiado") ;
        default: 
        console.log("Você não acertou") ;
    }
    
}

