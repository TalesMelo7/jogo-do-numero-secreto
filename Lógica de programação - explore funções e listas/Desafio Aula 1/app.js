let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function botaoConsole() {
    console.log("O botão foi clicado");
}

function botaoAlert() {
    alert("Eu amo JS");
}

function botaoPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function botaoSoma() {
    let valor1 = parseInt(prompt("Digite um número inteiro."));
    let valor2 = parseInt(prompt("Digite outro número inteiro."));
    let soma = (valor1 + valor2);
    alert(`A soma entre ${valor1} e ${valor2} é igual a: ${soma}`);
}

// Carregamos o projeto com o HTML e o CSS para criar a estrutura e o estilo da página que utilizaremos durante o curso;

// Aprendemos a manipular o conteúdo dos elementos HTML, como o H1 e o parágrafo (p), utilizando JavaScript para alterar dinamicamente o texto exibido na página;

// Entendemos a importância da interação entre o HTML e o JavaScript para criar páginas web dinâmicas e interativas.