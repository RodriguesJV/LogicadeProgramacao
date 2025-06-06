function num(inicial, final){
    min = Math.min (inicial,final);
    max = Math.max(inicial,final);
    excluidos = [111,333,999];
    impares = [] ;
    for(let i = min; i <= max; i ++)
        if( i %2==1 && i %5 !== 0 && !excluidos.includes(i)){
            impares.push(i)
        }
            
        return impares     
}

console.log(num(7,7001));