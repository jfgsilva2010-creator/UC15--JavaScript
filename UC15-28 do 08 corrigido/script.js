let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero 1 + numero 2);
console.log("Subtraçao:", numero1 - numero2);
console.log("Multiplicaçao:", numero1 * numero2);
console.log("Divisao:", numero1 / numero2);



let numero = 8;

console.log("Dobro:", numero * 2);1
console.log("Triplo:", numero * 3);



let nome = prompt("Neymar jr:");
let idade = prompt("18 anos:");

console.log("Ola, " + nome + "! Seja bem-vindo! Voce tem " + idade + " anos.");



let nota1 = Number(prompt("10:"));
let nota2 = Number(prompt("07:"));
let nota3 = Number(prompt("08:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Media:", media);



let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt(" Neymar jr:");
let senha = prompt("271210:");

if (usuario !== usuarioCorreto) {
    console.log("Usuario incorreto.");
} else if (senha !== senhaCorreta) {
    console.log("Senha incorreta.");
} else {
    console.log("Login realizado com sucesso!");
}



let primeiroNumero = Number(prompt("22:"));
let segundoNumero = Number(prompt("7:"));

if (primeiroNumero > segundoNumero) {
    console.log("O maior numero é " + primeiroNumero);
} else if (segundoNumero > primeiroNumero) {
    console.log("O maior numero é " + segundoNumero);
} else {
    console.log("Os dois numeros sao iguais.");
}