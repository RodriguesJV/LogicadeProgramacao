//João Vitor Rodrigues dos Santos
//Matricula: 25114290126


class soccer{
    constructor(nome,ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
    return data.getFullYear() - this.ano ;
    }
}

const soccer1 = new soccer ('Flamengo','1895');
console.log(soccer1.nome);
console.log(soccer1.ano);
console.log(soccer1.idade());