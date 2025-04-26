const prompt = require('prompt-sync')({sigint:true})
let anoinicial = parseInt(prompt("Digite o ano inicial: "));
let anofinal = parseInt(prompt("Digite o ano final: "));
let anosCopa = [];
let without = [1942,1946];
for(let ano = anoinicial; ano <= anofinal; ano ++){
    if(ano % 4 == 2 && ano >= 1930 && !without.includes(ano)){
        anosCopa.push(ano)
    }
    
}
console.log(anosCopa); 
console.log(anosCopa[3]); //o ano da 4º copa do mundo//
console.log(anosCopa[9]); // o ano da 10º copa do mundo//
console.log(anosCopa[anosCopa.length-1]); //o ano da última copa do mundo//
console.log(anosCopa[0]); //o ano da primeira copa do mundo//