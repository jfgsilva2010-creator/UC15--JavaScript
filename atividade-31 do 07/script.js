// Entrada de dados
let nome = prompt("Digite seu nome completo:");
let cargo = prompt("Digite seu cargo:");
let empresa = prompt("Digite a empresa ou escola:");
let email = prompt("Digite seu e-mail:");

// Nome em letras maiúsculas
nome = nome.toUpperCase();

// Cartão de visita

console.log("      CARTÃO DE VISITA");

console.log("Nome: " + nome);
console.log("Cargo: " + cargo);
console.log("Empresa: " + empresa);
console.log("E-mail: " + email);


// Alerta
alert("Cartão de visita gerado com sucesso!");

// Entrada de dados
let produto = prompt("Nome do produto:");
let preco = parseFloat(prompt("Preço original:"));
let percentual = parseFloat(prompt("Percentual de desconto:"));

// Cálculos
let valorDesconto = preco * percentual / 100;
let precoFinal = preco - valorDesconto;

// Console
console.log(" DESCONTO");
console.log("Produto: " + produto);
console.log("Preço original: R$ " + preco.toFixed(2));
console.log("Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço final: R$ " + precoFinal.toFixed(2));

// Alerta
alert(
"Produto: " + produto +
"\nPreço original: R$ " + preco.toFixed(2) +
"\nDesconto: R$ " + valorDesconto.toFixed(2) +
"\nPreço final: R$ " + precoFinal.toFixed(2)
);

// Entrada
let senha = prompt("Digite uma senha:");

// Informações
let tamanho = senha.length;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

// Classificação
let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
} else if (tamanho >= 6 && (temMaiuscula || temMinuscula)) {
    classificacao = "Média";
} else {
    classificacao = "Fraca";
}

// Console
console.log(" VERIFICADOR DE SENHA ");
console.log("Tamanho: " + tamanho);
console.log("Classificação: " + classificacao);

// Alerta
alert("Sua senha é: " + classificacao);