//Nome: João Vitor Rodrigues dos Santos
//Matricula: 25114290126


//1. Crie um array com 5 elementos da forma string.
let language = ["Python","Java","JavaScript","C++","CSS"];
console.log("-".repeat(90));

//2. Determine o quarto elemento desse array usando indexação.
console.log(`O quarto elemento é ${language[3]}`);
console.log("-".repeat(90));

//3. Determine o último elemento deste array.
console.log(`O ultimo elemento é ${language[language.length-1]}`)
console.log("-".repeat(90));

//4. Use for loops e liste os elementos do array de duas formas:

//4.1. usando for loop sobre os índices
for(let i = 0; i < language.length;i ++){
    console.log(language[i]);
}

console.log("-".repeat(90));

//4.2. usando for...of
for(let languages of language){
    console.log(languages)
}
console.log("-".repeat(90));

//5. Ordene os elementos deste array em forma alfabética.
console.log(language.sort())
console.log("-".repeat(90));


//6. Ordene os elementos do array em forma alfabética reversa
console.log(language.sort().reverse());
console.log("-".repeat(90));

//7. Crie um array com elementos numéricos. 
let number = [77,39,11,7,9,3,100]

//7.1 ordene os elementos em ordem crescente
console.log(number.sort((a,b) => a - b));
console.log("-".repeat(90));


//7.2 ordene os elementos em ordem decrescente
console.log(number.sort((a,b) => b-a));
console.log("-".repeat(90))

//8. Crie um array com 3 elementos. 
let pais =["Brasil","EUA","Argentina"];

//8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos
pais.push("Paraguai","Peru","Japao","Russia");
console.log(pais);

console.log("-".repeat(90))

//8.2 remova o último elemento e mostre o elemento que foi eliminado.
console.log(pais.pop())
console.log(pais)

//Extra: use os métodos shift/unshift para remover/adicionar elementos no início do array.
pais.shift();
console.log(pais);

pais.unshift("Canada");
console.log(pais);
