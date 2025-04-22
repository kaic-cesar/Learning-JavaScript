// lista vazia
var lista = [];


// lista inicializada com valores
var listaComValores = ["Kaic", "Cesar", 23];
console.log(listaComValores);
console.log(listaComValores[1]);


// Verificar o tamanho da lista
console.log(listaComValores.length);


// ========= MANIPULANDO ARRAY =========

var list = ['Kaic', 'Gabriela', 'Cesar', 23];


// Verificar se existe um valor
console.log(list.indexOf('Cesar'));
console.log(list.indexOf(5));


// Alterar o valor de um elemento
list[3] = 50;
console.log(list);


// Adicionar elemento
list.push('José');
console.log(list);


// Remover PRIMEIRO elemento
list.shift()
console.log(list);


// remover ÚLTIMO elemento
list.pop();
console.log(list);

// retornar todos os elementos por algo (Ex. Será separado por ;)
console.log(list.join(';'));
