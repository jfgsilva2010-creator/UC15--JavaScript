console.log("olá, Josue! Seja bem-vindo!");
console.log("olá, Neymar! seja bem-vindo!");
console.log("olá, Bolsonaro! seja bem-vindo!")


function darBoasVindas(nome){
    console.log('´Ola, ${nome}! Seja bem vindo!`')
}

darBoasVindas("josue");
darBoasVindas("Neymar")
darBoasVindas("Bolsonaro")

function apresentar(nomw,idade){
    console.log(`Meu nome é ${nome} e tenho
         ${idade} anos.`);
}

function("neymar" 18);

//Criar uma função que recebe o nome de uma pessoa e mostra uma mensagem dizendo se ela está estudando


function estudar(nome) {
    console.log(`${nome} está estudando progamação`)
}


estarestudando("neymar");
estarestudando("bolsonaro");
estarestudando("josue");

function somar (a,b) {
    return a + b;
}

somar(5,3)

let resultado = somar(5,3);

console.log(resultado);



//crie uma função que pegue dois valores e de a media deles se for acima de 6 é aprovado senão reprovado

function calcularMedia(nota1, nota2) {
    return (nota1, nota2) / 2;
}
let media = calcularMedia(8, 6);

console.log(media);

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("reprovado");
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = number(prompt("digite a primeira nota:"));
let nota2 = number(prompt("digite a segunda nota:"))

let medial = calcularMedia(nota1, nota2);

console.log(`${nome} ficou com media ${medial}`);

if (medial >= 6) {
    console.log (`${nome} está aprovado!`)
} else {
    console.log(`${nome} está reprovado!`)
}


calcularMedia(nota1, nota2)


//crie um programa q utilize uma função com varios parametros para calcular o custo total de uma viagem. O programa deverá receber os valores da passagem, hospedagem, alimentação e passeios, calcular o total e informar se a viagem está dentro do orçamento de R$ 2.000,00

function calcularViagem(passagem, hospedagem, alimentacao, passeios) {
    const total = passagem + hospedagem + alimentacao + passeios;

    console.log(`Custo total da viagem: R$ ${total.toFixed(2)}`);

    if (total <= 2000) {
        console.log("A viagem está dentro do orçamento!");
    } else {
        console.log("A viagem ultrapassou o orçamento!");
    }
}

calcularViagem(500, 700, 400, 300);