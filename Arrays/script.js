let nums = [1, 4, 6, 7, 9];
console.log(nums);

let list = ['Kaic', 23, 34, 'Steve', 'Test'];
console.log(list[0]); 


// Manipular Array
let newList = ['Jose', 'Lucas', 'Jobs', 150];
console.log(newList);

newList[2]; // Buscar elemento por posição, sendo que 0 é o primeiro elemento do array

newList.indexOf('Kaic'); // Buscar elemento por pesquisa, caso existir, ele devolve a posição que o elemento está, se não, retorna -1
newList.indexOf('Lucas');
newList.indexOf(150);


newList[1] = 'Maria'; // Alterar o elemento pela posição
newList[4] = 350;


newList.push('Matheus'); // Adicionar elemento no Array

console.log(newList)

newList.shift(); // Remove o primeiro elemento
newList.pop(); // Remove o último elemento

console.log(newList);

newList.join(';') // Retorna todos os elementos da lista, separado pelo que foi passado no parâmetro