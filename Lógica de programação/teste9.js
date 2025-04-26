const prompt= require ('prompt-sync')({sigint:true})
let startyear = parseInt(prompt('Digite o ano inicial '));
let finalyear = parseInt(prompt('Digite o ano final '));
let ol=[];
let olimpia = [1916,1940,1944];
for (let ano = startyear; ano <= finalyear; ano ++){
    if(ano % 4 == 0 && ano >= 1896 && !olimpia.includes(ano) ){
        ol.push(ano);
    }
}

console.log(ol)
// O ano da quarta copa do mundo;
console.log(ol[3]);
// O ano da décima copa do mundo;
console.log(ol[9]);
// O ano da última copa do mundo;
console.log(ol[ol.length-1]);
// O ano da primeira copa do mundo.
console.log(ol[0]);
