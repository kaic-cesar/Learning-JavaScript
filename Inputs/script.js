const nome = prompt("Informe seu nome");
console.log(nome);

let age = prompt("Informe sua idade");
console.log(age);


// Acessar o HTML e inserir o texto do usuário
document.writeln(`<h1>Usuário: ${nome} </h1>`);
document.writeln(`<h1>Idade: ${age} </h1>`);

// Podemos inserir mais coisas no HTML através do writeln
document.writeln("<img src= 'https://sujeitoprogramador.com/steve.png' alt='Foto SteveJobs' />")