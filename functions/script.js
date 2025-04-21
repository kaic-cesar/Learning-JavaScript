function entrar() {
    alert("Acessou!");
}

var text = document.getElementById('text-h2');

function welcome() {
    var name = prompt("Qual o seu nome?");

    if(name === "" || name === null) {
        text.innerHTML = "Clique no botão para inserir o seu nome";
    } else {
        text.innerHTML = "Bem vindo " + name + " ";

        let buttonOut = document.createElement("button");
        buttonOut.innerHTML = "Sair";
        text.appendChild(buttonOut);
        buttonOut.onclick = sair;
    }
}

function sair() {
    alert("até mais!")
    text.innerHTML = "Você saiu"
}

