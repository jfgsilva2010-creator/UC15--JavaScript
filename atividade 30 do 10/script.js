
function calcularMedia() {

    const nome = document.getElementById("nome").value.trim();

    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;

    const resultado = document.getElementById("resultado");

    if (nome === "") {
        mostrarErro("Digite o nome do estudante.");
        return;
    }

    if (nota1 === "" || nota2 === "" || nota3 === "") {
        mostrarErro("Preencha todas as notas.");
        return;
    }

    const n1 = Number(nota1);
    const n2 = Number(nota2);
    const n3 = Number(nota3);

    if (
        !Number.isFinite(n1) ||
        !Number.isFinite(n2) ||
        !Number.isFinite(n3) ||
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
    ) {
        mostrarErro("As notas devem estar entre 0 e 10.");
        return;
    }

    const media = (n1 + n2 + n3) / 3;

    let situacao;
    let classe;

    if (media >= 7) {
        situacao = "Aprovado";
        classe = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classe = "recuperacao";
    } else {
        situacao = "Reprovado";
        classe = "reprovado";
    }

    resultado.className = classe;
    resultado.style.display = "block";

    resultado.innerHTML = `
        <h3>Resultado do estudante</h3>
        <p>Nome: ${nome}</p>
        <p>Média: ${media.toFixed(2)}</p>
        <p>Situação: ${situacao}</p>
    `;
}

function mostrarErro(mensagem) {

    const resultado = document.getElementById("resultado");

    resultado.className = "erro";
    resultado.style.display = "block";

    resultado.textContent = mensagem;
}

function limparCampos() {

    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    const resultado = document.getElementById("resultado");

    resultado.style.display = "none";
    resultado.innerHTML = "";
    resultado.className = "";
}
