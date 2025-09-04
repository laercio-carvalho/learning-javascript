let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMensagemInicial()

//Apartir daqui estou aceitando a entrada de dois parametros na função exbirTextoNaTela()


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': `tentativa`;
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else chute > numeroSecreto ? exibirTextoNaTela('p','O numero secreto é menor')
        : exibirTextoNaTela('p','O numero secreto é maior');
    tentativas++;
    limparCampo()
}
//Função com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}