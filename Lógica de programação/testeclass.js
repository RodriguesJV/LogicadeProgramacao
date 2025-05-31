class car{
    constructor(nome,ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
    return data.getFullYear () - this.ano ;
    }
}

const car1 = new car ('Gol','2009');
console.log(car1.nome);
console.log(car1.ano);
console.log(car1.idade());