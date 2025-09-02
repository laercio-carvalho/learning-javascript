let titulo = document.querySelector("h1");
titulo.innerHTML = 'Hora do Desafio';

function verificarBotao() {
    console.log('O botão foi clicado');
}
function alertJS(){
    alert('Eu amo JS')
}

function promptJS() {
    let cidade = prompt('Informe um nome de Cidade');
    alert(`Estive na cidade ${cidade} e lembrei de você`);
}

function somaJS() {
    let numero01 = parseInt(prompt('Informe um numero para soma'));
    let numero02 = parseInt(prompt('Informe um numero para soma'));
    let resultado = numero01 + numero02;
    alert(`A soma de ${numero01} e ${numero02} é ${resultado}`);
}