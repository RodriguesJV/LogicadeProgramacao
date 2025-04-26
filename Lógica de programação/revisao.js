let numprem1 = 23;
let numprem2 = 34;
let numprem3 = 94
let tentativas = 3;
let tentativasrest= 3;
const prompt =require('prompt-sync')({sigint:true})

for(let i = 0; i < tentativas; i++){
    var num= parseInt(prompt(`Faça a tentativa ${i+1}: `));
    if(num == numprem1 || num == numprem2 || num == numprem3){
        console.log(`O numero ${num} é premiado, você ganhou!`);
        break;
    }
    else{
        tentativasrest--
        console.log(`Você errou, você tem agora ${tentativasrest} tentativa(s). `)
    }
    if( num !== numprem1 && num !==numprem2 && num !== numprem3){
        console.log("Você perdeu!")
    }
}