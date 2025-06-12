//1.Dado um array de números, mapeie cada elemento em seu inverso aditivo(simétrico em relação a zero)
//1.1 Faça um usando arrow function
//1.2 faça usando function
let array = [2,5,7,9,10,11,12,16,25,30];
console.log(array.map(x => -x));

function negative(x){
    
    return -x
}
console.log(array.map(negative))
//2.Dado um array A de 3 arrays com 4 elementos. Aplique o 
// método map para calcular a média aritmétida simples de
// cada elemento do array A.
let array1 = [[3,5,8,11],[7,11,12,20],[4,8,9,14]];

function mediaArit(arrays){
    soma = 0 ;
    for(const med of arrays){
        soma+= med ;
    }
    media = soma /arrays.length;

    return media
}

console.log(array1.map(mediaArit))
//3. Dado um array de números inteiros entre 0 e 1000. Retorne um array
// que restrinja aos valores maiores que 5 e menores que 40.
let array2 = [2,4,7,9,13,16,20,30,45,80,77];

console.log(array2.filter( x => x > 5 && x < 40))
