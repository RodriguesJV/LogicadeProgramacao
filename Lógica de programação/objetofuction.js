function Car(nome,marca,cor,ano){
    this.nome = nome; 
    this.marca = marca;
    this.cor = cor;
    this.ano = ano;
}
console.log(Car);

const cars = new Car ('Gol','Volkswagen','branco','2009');
console.log(cars);

const cars1 = new Car('Ka','Ford','preto','2015');
console.log(cars1)

let Carro = [];
Carro.push(cars,cars1);

console.log(Carro);
