let number = document.getElementById('number')
let n = 0;

function add() {
    n = n + 1;
    number.innerText = `${n}`
}

function remove() {
    n = n - 1;
    number.innerText = `${n}`
}


function limpar() {
    n = 0;
    number.innerText = `${n}`
}