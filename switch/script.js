function pedir() {
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)) {
        case 1:
            alert("Você escolheu o 1 = Suco");
            break;
        case 2:
            alert("Você escolheu o 2 = Agua gelada");
            break;
        case 3:
            alert("Você escolheu o 3 = Sorvete");
            break;
        case 4:
            alert("Você chamou o garçom");
            break;
        default:
            alert("Escolha uma opção entre 1 e 4");
    }
}