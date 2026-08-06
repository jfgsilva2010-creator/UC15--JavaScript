

/*clasificação
Abaixo de 18,5 - abaixo do peso
18,5 a 29,9 - peso normal 
30 a 34,9- obesidade grau I
35 a 39,9 - obesidade grau II
40+ - obesidade grau III
*/






let nome = prompt('Qual seu nome');
let pesoStr = prompt('Olá, ${nome}! Qual é seu peso em Kg?|n(use virgula ou ponto - ex:75,5 ou 75,5');
let altStr = prompt('Qual é a sua altura em em metros?\n(ex: 1,75 ou 1.75)  ');

let peso = number(pesoStr.replace(',', '.'));
let alt = number(altStr.replace(',','.'));

console.log('nome:', nome);
console.log('peso:', peso, typeof peso);
console.log('altura', alt, typeof alt);

let imc = peso / (alt*alt);
let imcFormatato = imc.toFixed(1);


if(imc < 18,5) {
    console.log("Abaixo do peso")
} else if (imc < 25) {
    console.log("Peso normal")
}else if (imc< 30) {
    console.log('sobrepeso')
} else if (imc < 35) {
    console.log('obesidade Grau I')
} else if ('imc < 40'){
    console.log ('Obesidade Grau II')
} else
    console.log ('Obesidade grau III')

