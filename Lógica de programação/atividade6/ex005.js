// 5. Crie uma função que o usuário entra com um número inteiro.
// Se o número entrado for par, retorne a mensagem "Número (Tal) é par",
// caso contrário, retorne "Número (Tal) é ímpar";

function num(){
    const prompt = require ('prompt-sync')({sigint:true});
    let ask = parseFloat (prompt("Digite um número qualquer "));
    if(ask %2==0 ){
        console.log(`O número ${ask} é par`)
    }
    else{
        return `O número ${ask} é ímpar`
    }
}
num();
