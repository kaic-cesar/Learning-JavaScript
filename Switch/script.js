function pedir() {
    const valor = prompt('Digite um valor de 1 a 4');

    switch(Number(valor)) {
        case 1:
            alert('Pedido registrado: Suco de laranja');
            break;
        case 2:
            alert('Pedido registrado: Agua com gás');
            break;
        case 3:
            alert('Pedido registrado: Sorvete');
            break;
        case 4:
            alert('Garçom virá a mesa');
            break;
        default:
            alert('Opção inválida');
            break;
    }
}