let date = new Date(); // Criando date atual
console.log(date);

console.log(date.getHours()); // Horas
console.log(date.getMinutes()); // Minutos
console.log(date.getSeconds()); // Segundos


let datePrev = new Date("July 20, 2025 06:29:30"); // Criando uma date especifica
console.log(datePrev);

console.log(date.getDate()); // Dia do mês
console.log(date.getDay()); // Dia da semana
console.log(date.getMonth()); // Mês


// Somar dias
date.setDate(date.getDate() + 7);
console.log(date);

// Somar horas
date.setHours(date.getHours() + 12);
console.log(date)


// Utilizando um Array com datas
let days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
console.log(days[date.getDay()]);
