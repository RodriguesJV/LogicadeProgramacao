//Nome: João Vitor Rodrigues dos Santos
//Matricula: 25114290126

//1. Crie um array com 5 elementos da forma string.
let champions=["Barcelona","Inter","PSG","Arsenal","R.Madrid"];

//2. Determine o  quarto elemento desse array usando indexação.
console.log("2", champions[3]);

console.log("-".repeat(90));
//2.1. Indica do elemento "Arsenal"
console.log(`O indice de "Arsenal" ${champions.indexOf("Arsenal")}`)

console.log("-".repeat(90));
//3. Determine o último elemento deste array.
console.log('3', champions[champions.length-1]);

console.log("-".repeat(90));
//4. Use for loops e liste os elementos do array de duas formas:
//4.1. usando for loop sobre os índices
for(let i = 0; i < champions.lenth; i ++){
    console.log('4.1',champions[i])
}
console.log("-".repeat(90));

//4.2. usando for...of

for(let time of champions){
    console.log("4.2",time)
}

console.log("-".repeat(90));

//5. Ordene os elementos deste array em forma alfabética.
console.log("5",champions.sort());

console.log("-".repeat(90));

//6. Ordene os elementos do array em forma alfabética reversa
console.log("6",champions.sort().reverse()) ;

console.log("-".repeat(90));


//7. Crie um array com elementos numéricos. 
let number = [77,40,90,7,9,14,11,3]

//7.1 ordene os elementos em ordem crescente
console.log("7.1",number.sort((a, b) => a-b));

//7.2 ordene os elementos em ordem decrescente
console.log("7.2",number.sort((a, b) => b-a));

//8. Crie um array com 3 elementos.
let Cars =["Voyage","Palio","Gol"]

//8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos
Cars.push("bmw","civic","corola","BYD");
console.log("8.1",Cars.length);

//8.2 remova o último elemento e mostre o elemento que foi eliminado.
console.log("8.2",Cars.pop());