let valor = document.getElementById('valor');
let gorjeta = document.getElementById('gorjeta');
let result = document.getElementById('result');

function calcular() {
    let total = Number(valor.value) + (Number(valor.value) * (Number(gorjeta.value) / 100));

    result.innerHTML = `Total: R$${total}`
}