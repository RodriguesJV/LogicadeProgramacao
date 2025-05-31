//1. Crie uma função que dados números inteiros com
// certo valor inicial e certo valor final retorne um array com 
// todos os números ímpares entre este números, inclusive.

function numImpares(vInicial,vFinal){
    impares = [];
    for(let i = vInicial; i<=vFinal; i++){
        if(i% 2==1){
            impares.push(i)
        }
    }
    return impares;
}

let nInicial =0;
let nFinal =15;
console.log(numImpares (nInicial,nFinal));

function numpares(valorInicial,valorFinal){
    pares = [];
    for(let i = valorInicial; i <= valorFinal; i++){
        if (i %2 == 0)
        pares.push(i);

    }

    return pares;
}

console.log(numpares (0,50));

// crie uma função que tem dois números inteiros como entrada,
// e que retore um array contendo somente os números
// múltiplos de 5 entre esses dois números, inclusive.

function multi(valorIni,valorFin){
    multiplo = []
    for(let i = valorIni; i <= valorFin ; i++){
        if(i % 5 == 0){
            multiplo.push(i);
        }
    } 
    return multiplo
}

let start = 1;
let finish = 150;
console.log(multi(start,finish));
        