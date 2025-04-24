function clique() {
    var num1 = prompt('Digite o primeiro número');
    var num2 = prompt('Digite o segundo número');

    if(num1 > num2) {
        alert(`O primeiro número (${num1}) é MAIOR que o segundo número (${num2})`);
    } else if(num1 < num2) {
        alert(`O primeiro número (${num1}) é MENOR que o segundo número (${num2})`);
    } else {
        alert(`O primeiro número (${num1}) é IGUAL ao segundo número (${num2})`);
    }
}


// COMPARAÇÃO DE STRING

var nome = "Kaic";

if(nome === "Kaic") {
    console.log("Esse nome existe");
} else {
    console.log("Esse nome não existe");
}


// MAIS DE UMA CONDIÇÃO

var age = 23;
var isDriver = true;

if(age > 18 || isDriver === true) {
    console.log("É maior que 18 e é motorista")
} 


// CONDIÇÃO TERNÁRIA
var numero = 10;

numero === 10 ? console.log("Número igual a 10") : console.log("Número diferente de 10");
