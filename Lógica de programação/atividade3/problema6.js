//João Vitor Rodrigues dos Santos
//MAtricula:25114290126


const prompt = require ('prompt-sync')({sigint:true})
var ask = prompt("Digite o nome de um estado do Brasil e descubra qual é a capital dele ")
ask= ask.toLocaleLowerCase()
switch (ask){
    case("acre"):
    Console.log("Rio Branco");
    break;

    case("alagoas"):
    console.log("Maceió");
    break;

    case("amapá"):
    console.log("Macapá");
    break;

    case("amazonas"):
    console.log("Manaus");
    break;

    case("bahia"):
    console.log("Salvador");
    break;

    case("ceará"):
    console.log("Fortaleza");
    break;

    case("distrito federal"):
    console.log("Brasilia");
    break;

    case("espirito santo"):
    console.log("Vitória")
    break;

    case("goias"):
    console.log("Goiania");
    break;

    case("maranhão"):
    console.log("São Luís");
    break;

    case("mato grosso"):
    console.log("Cuiabá");
    break;

    case("mato grosso do sul"):
    console.log("Campo Grande");
    break;

    case("minas gerais"):
    console.log("Belo Horizonte");
    break;

    case("pará"):
    console.log("Belém");
    break;

    case("paraiba"):
    console.log("João Pessoa");
    break;

    case("paraná"):
    console.log("Curitiba");
    break;

    case("pernambuco"):
    console.log("Recife");
    break;

    case("piauí"):
    console.log("Teresina");
    break;

    case("rio de janeiro"):
    console.log("Rio de Janeiro");
    break;

    case("rio grande do sul"):
    console.log("Porto Alegre");
    break;

    case("rondônia"):
    console.log("Porto Velho");
    break;

    case("roraima"):
    console.log("Boa Vista");
    break;

    case("santa catarina"):
    console.log("Florianópolis");
    break;

    case("são paulo"):
    console.log("São Paulo");
    break;

    case("sergipe"):
    console.log("Aracaju");
    break;

    case("tocatins"):
    console.log("Palmas")
    break;

    default:
    console.log("Estado não identificado, verifique se há algum erro")
}

