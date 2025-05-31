function dobro (x){
    return 2*x;
}
function mensagem(){
    return "VAI CORINTHIANS"
}
console.log(mensagem);

function areaCirc(r){
    return Math.PI*r**2;
}

console.log(areaCirc(1))
console.log("-".repeat(90));
//Área triangulo

function areaTri(base,altura){
return base*altura/2;
}

console.log(areaTri(7,4));

function raizes(a,b,c){
    const delta = b**2-4*a*c;
    return [(-b+Math.sqrt(delta))/(2*a),(-b- Math.sqrt(delta))/(2*a)];
}

console.log(raizes(1,4,-1));