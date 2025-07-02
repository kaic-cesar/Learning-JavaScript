const area = document.getElementById('area');

function entrar() {
    const nome = prompt("Digite seu nome");

    if(nome === '' || nome === null){
        alert('Ops, algo deu errado...')
        area.innerHTML = "Clique no botão para acessar"
    } else {
        area.innerHTML = `Bem vindo ${nome}   `;

        let btnSair = document.createElement("button"); // criando um novo elemento
        btnSair.innerText = "Sair da conta"; // passando um nome/valor para esse elemento
        btnSair.onclick = sair;
        area.appendChild(btnSair); // adicionando esse elemento como filho de um elemento maior/pai
    }
}


function sair() {
    alert("Até mais");

    area.innerHTML = "Você saiu!"
}



function mediaAluno(n1, n2) {
    const media = (n1 + n2) / 2;

    if(media >= 7) {
        console.log(`Aluno aprovado com média ${media}`);
    } else if(media <= 3) {
        console.log(`Aluno reprovado com média ${media}`);
    } else {
        console.log(`Aluno em recuperação com média ${media}`);
    }
}