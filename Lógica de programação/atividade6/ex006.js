//semaforo

function semaforo(){
    const prompt = require ('prompt-sync')({sigint:true});
    let cor = prompt("Digite uma cor do semaforo: ");
    cor = cor.toLowerCase();
    switch(cor){
        case ('verde'):
        console.log("SIGA");
        break;

        case ('amarelo'):
        console.log("Desacelere");
        break;

        case('vermelho'):
        console.log(('PAREE'));

        default:
        console.log('cor invalida')
    }
    
}

semaforo();