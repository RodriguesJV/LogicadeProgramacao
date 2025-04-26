const prompt = require ('prompt-sync')({sigint:true})
let car = prompt("Digite um caractere: ".toLowerCase());
let vogais = ['a', 'e','i','o','u']
if (vogais.includes(car)){
    console.log(`o caractere ${car} é uma vogal `);

}
else{
    console.log(`o caractere ${car} é uma consoante`)
}
