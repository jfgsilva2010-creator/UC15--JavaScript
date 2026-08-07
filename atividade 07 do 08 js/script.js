
//================================================== \\
//-------------------------------------------------- \\
//================================================== \\                                                   
// -------------------------------------------------                                                   
//================================================\\ \\
//                                           +
// _______________________________________________ \\ \\ 
// //===========================================\\\\ \\
// //--------------------------------------\\   | \\ \\
// //Sistema de Cálculo de Desconto da Loja\\   | \\ \\
// //--------------------------------------\\   | \\ \\
// //===========================================\\\\ \\
// // ____________________________________________ \\ \\
//================================================   \\
//                                                   \\
//                                                   \\
//===================================================\\
//---------------------------------------------------\\












// Dados do cliente
const nomeCliente = "Lucas";
const valorCompra = 67.000;
const clienteVip = false;

// Variáveis de cálculo
let percentualDesconto = 0;
let valorDesconto = 0;
let valorFinal = 0;

// Verificação do desconto
if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 90;
}

// Cálculos
valorDesconto = (valorCompra * percentualDesconto) / 100;
valorFinal = valorCompra - valorDesconto;

// Exibição dos resultados
console.log("------ RESUMO DA COMPRA ------");
console.log(`Nome do cliente: ${nomeCliente}`);
console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto aplicado: ${percentualDesconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);

// Desafio (Frete Grátis)
if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}