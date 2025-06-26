// Vars = Case Sensitive

// Var = Declara uma variável com escopo de função ou global, sendo suscetível a hoisting e redeclarações, o que pode gerar comportamento inesperado. (MUTÁVEL) - Tem mais riscos de sgurança
// Let = Declara uma variável com escopo de bloco e permite reatribuição , sendo indicada para valores que mudam durante a execução. (MUTÁVEL)
// Const = Declara uma constante com escopo de bloco que não pode ser reatribuída, ideal para valores imutáveis e previsíveis. (IMUTÁVEL)

const lang = "JavaScript";
console.log(lang);


let age = 23;
console.log(age);

age = 24;
console.log(age)


var x = 10;
var y = 7;
var sum = x + y;
console.log(sum);


let med = (x + y) / 2;
console.log(med);

const pi = 3.14;
console.log(pi);