var data = new Date();
console.log(data)

data.getDay();
data.getDate();
data.getMonth();
data.getHours();
data.getMinutes();
data.getSeconds();
data.getMilliseconds();
data.getFullYear();


var dataNova = new Date("March 10, 2025");
console.log(dataNova);


console.log(dataNova.getDate()+"/"+(data.getMonth() + 1));

dataNova.setDate(dataNova.getDate() + 5);


// EXEMPLO: Descobrir o dia da semana com a data atual:

var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
console.log(dias[data.getDay()])