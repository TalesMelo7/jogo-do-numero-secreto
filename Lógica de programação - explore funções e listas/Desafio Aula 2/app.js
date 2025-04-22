// 1.Criar uma função que exibe "Olá, mundo!" no console.
function exibirOla() {
    console.log("Olá, mundo!");
}

exibirOla();

// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}`);
}

exibirOlaNome("Alice");

// 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcularDobro(numero){
    return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

// 4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c){
    return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);

// 5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b){
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

// 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero){
    return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado);


// Me aprofundei em funções, interagindo com funções com parâmetros e retorno, e aprendi sobre outro tipo de variável chamado booleano. 
// Como criar uma função em JavaScript para gerar um número aleatório utilizando o método `Math.random()`, e a importância de utilizar a palavra-chave "return" para retornar o valor gerado. omo criar uma função em JavaScript para gerar um número aleatório utilizando o método `Math.random()`, e a importância de utilizar a palavra-chave "return" para retornar o valor gerado.
// Além disso, criamos a função `exibirTextoNaTela`, que possui dois parâmetros, e discutimos a diferença entre funções com retorno e funções sem retorno. 