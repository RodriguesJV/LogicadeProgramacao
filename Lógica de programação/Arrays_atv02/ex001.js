//Nome: João Vitor Rodrigues dos Santos
//Matricula: 25114290126

//1. Crie um array com 5 elementos da forma string.
let champions=["Barcelona","Inter","PSG","Arsenal","R.Madrid"];

//2. Determine o quarto elemento desse array usando indexação.
console.log("2", champions[3]);

//3. Determine o último elemento deste array.
console.log('3', champions[champions.length-1]);

//4. Use for loops e liste os elementos do array de duas formas:
//4.1. usando for loop sobre os índices
for(let i = 0; i < champions; i ++){
    console.log('4.1',champions.length[i])
}

//4.2. usando for...of
for(let time of champions){
    console.log("4.2",time)
}

//5. Ordene os elementos deste array em forma alfabética.
console.log("5",champions.sort());

//6. Ordene os elementos do array em forma alfabética reversa
console.log("6",champions.sort().reverse()) ;


