const prompt = require ('prompt-sync')({sigint:true})
var cor= prompt("digite uma das cores do semáforo(verde,amarelo e vermelho) ")
cor= cor.toLocaleLowerCase()
var mensagem;

switch(cor) {
    case "verde":
    mensagem = "siga";
    break;
    case "amarelo":
    mensagem = "devagar"
    break;
    case "vermelho":
    mensagem = "PARE"
    break;
    default:
    mensagem = "cor invalida"
}

console.log(mensagem);