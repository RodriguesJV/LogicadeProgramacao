//João Vitor Rodrigues dos Santos
//MAtricula:25114290126

let anoinicial =2024;
let anofinal = 2500;

for(let i = anoinicial; i <= anofinal;i ++)
    if( (i % 4 == 0 && i !=100 ) || (i %100 == 0 && i %400 ==0)){
        console.log(i)
    }

