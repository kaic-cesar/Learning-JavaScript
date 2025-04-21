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



// FUNÇÕES PARAMETRIZADAS

var area = document.getElementById('area');
var result = document.createElement("h1");
area.appendChild(result);

function mediaAluno(n1, n2) {
    var media = (n1 + n2) / 2

    if(media >= 6.0) {
        result.innerHTML = "Você foi aprovado! Sua média foi de " + media;
    } else {
        result.innerHTML = "Você foi reprovado Sua média foi de " + media;
    }
}

function aluno(nome, curso) {
    var mensagem = `Seja bem vindo ${nome} ao seu curso de ${curso}!` 
    console.log(mensagem);
}