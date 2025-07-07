let person = {
    nome: "Kaic",
    idade: 23,
    altura: 1.70,
    cargo: "Full Stack"
};

console.log(person);
console.log(person.nome);
console.log(person.idade);          


let carro = {
    marca: "Audi",
    modelo: "A5",
    ano: 2020
};

console.log(carro);
console.log(`${carro.marca} ${carro.modelo} ${carro.ano}`);



// Lista com Objetos
let users = [
    {nome: "Kaic", cargo: "Programador", status: "ATIVO"},
    {nome: "Lucas", cargo: "QA", status: "ATIVO"},
    {nome: "Jose", cargo: "Tech Lead", status: "ATIVO"}
];

console.log(users);
console.log(users[0].nome);