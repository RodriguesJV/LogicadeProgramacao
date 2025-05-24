//Nome: João Vitor Rodrigues dos Santos
//Matricula: 25114290126 

//2. Crie uma função construtora relativa à mesma classe (tema) que você utilizou na questão 1.
function artilheiro(nome,posicao,clube,pais){
    this.nome= nome;
    this.posicao = posicao;
    this.clube = clube;
    this.pais = pais;
    
}

console.log(artilheiro)

//3. Crie 3 instâncias(objetos) da classe definida na questão 2.
const artilheiros1 = new artilheiro ('Raphinha','Ponta direita','Barcelona','Brasil');
const artilheiros2 = new artilheiro ('Belligham','Meio- campo','Real Madrid','Inglaterra');
const artilheiros3 = new artilheiro ('Messi','Ponta direita','InterMiami','Argentino');

//4. Busque todas as chaves dos objetos definidos em 3).

console.log(Object.keys(artilheiros1));
console.log(Object.keys(artilheiros2));
console.log(Object.keys(artilheiros3));

//5. Busque todos os valores dos objetos definidos em 3).
console.log('-'.repeat(90));
console.log(Object.values(artilheiros1));
console.log(Object.values(artilheiros2));
console.log(Object.values(artilheiros3));

//6. Puxe todos os pares chaves-valores dos 3 objetos definidos.
console.log('-'.repeat(90));
console.log(artilheiros1);
console.log(artilheiros2);
console.log(artilheiros3);

//7 Aplique for loop para buscar todas chaves para cada um dos objetos definidos.
console.log('-'.repeat(90));
for (const goat in artilheiros1){
     console.log(goat)
}

console.log('-'.repeat(90));

for (const goat in artilheiros2){
     console.log(goat)
} 
console.log('-'.repeat(90));

for (const goat in artilheiros3){
     console.log(goat)
}

//8 Aplique for loop para buscar todos valores para cada um dos objetos definidos.
console.log('-'.repeat(90));
for (const goat in artilheiros1){
     console.log(artilheiros1[goat])
}
console.log('-'.repeat(90));
for (const goat in artilheiros2){
     console.log(artilheiros2[goat])
}
console.log('-'.repeat(90));
for (const goat in artilheiros3){
     console.log(artilheiros3[goat])
} 
console.log('-'.repeat(90));

//9 Crie um array que armazene todos os 3 objetos que você criou.
let goat = [];
goat.push(artilheiros1, artilheiros2, artilheiros3);
console.log(goat);
console.log("-".repeat(90));
//10 Adicione um elemento ao final do array criado e outro ao início.
let artilheiros4 = new artilheiro('Haaland','Centroavante','Man City','Noruegues');
let artilheiros5 = new artilheiro('Mbappe','Centroavante','Real Madrid','Francês');
goat.unshift(artilheiros4);
console.log(goat);

console.log("-".repeat(90));

goat.push(artilheiros5);
console.log(goat);

console.log("-".repeat(90));
//11. Desfaça as adições de elementos feitas em 10).
goat.pop(goat);
goat.shift(goat);

console.log(goat);

console.log("-".repeat(90));

//12.  Puxe o terceiro atributo do segundo elemento do array que foi criado em 9)
