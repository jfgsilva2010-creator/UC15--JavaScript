
let valor = 10;



function mostrarCidade() {

    let cidade = document.getElementById("cidade").value;

    document.getElementById("mensagem").textContent =
        "Que incrível! Sua próxima aventura será em " + cidade + "! 🌴✈️";
}


function destacarMensagem() {

    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "white";
    mensagem.style.backgroundColor = "blue";
    mensagem.style.fontSize = "28px";
    mensagem.style.padding = "20px";
}



function aumentar() {
    valor++;

    document.getElementById("contador").textContent = valor;
}


 
function diminuir() {
    valor--;

    document.getElementById("contador").textContent = valor;
}

