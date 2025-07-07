// setInterval -> Vai executar de tempos em tempos infinitamente

function acao() {
    document.writeln('Executando... <br/>');
}

setInterval(acao, 1000) // função, tempo em ms


setInterval(() => {
    document.writeln('Executando!!!! <br/>') // criando uma função anônima
}, 1000) // função, tempo em ms


var timer = setInterval(() => {
    document.writeln('Executando!!!! <br/>') // criando uma função anônima
}, 1000) // função, tempo em ms


clearInterval(timer); // Encerra a execução




// setTimeout -> Executa apenas uma vez

setTimeout(acao, 2000); // acao, tempo para unica execucao


// tambem podemos usar função anonima
setTimeout(() => {
    document.writeln("executando time out")
}, 3000) // (acao, tempo para executar) 

