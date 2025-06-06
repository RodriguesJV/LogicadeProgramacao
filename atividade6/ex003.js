//3. Crie uma função que armazene em um array todos números ímpares
// entre dois números dados, inclusive. Contudo, o array não
//deve incluir números múltiplos de 7;

function numimpares(valorInicial,valorFinal){
    impares=[];
    for(let i = valorInicial; i<= valorFinal ; i++){
        if (i %2==1 &&  i %7!==0){
            impares.push(i);
        }
    }
    return impares
}
let imparInicial = 1;
let imparFinal = 50;
console.log(numimpares(imparInicial,imparFinal));

