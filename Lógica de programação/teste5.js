/*
let world = 1970
let cup = 2025

for(let i = world; i <= cup; i++){
    if(i % 4  == 2)
        console.log(i,"É um ano de copa do mundo")
}
*/
/*
let anostart = 1930;
let anofinish = 2025;

for(let ano = anostart; ano<= anofinish; ano ++){
    if(ano % 4 == 2 && ano != 1942 && ano != 1946)
        console.log(`${ano} foi um ano de copa do mundo`)
}
    */

const prompt = require('prompt-sync')({sigint:true})
let wordlcup = parseFloat(prompt("Digite um ano e descubra se teve uma copa do mundo ou não "))

for(let i = wordlcup; i <= wordlcup; i++){
    if(i % 4 == 2 && i !=1942 && i!=1946 && i >= 1930)
        console.log(`o ano de ${i} teve uma copa do mundo`)
    
        
    else{
        console.log(`o ano de ${i} não teve uma copa do mundo`)
    }
}