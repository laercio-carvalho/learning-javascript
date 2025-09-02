alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 9000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute = null;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Isso aí! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

chute > numeroSecreto ? alert(`O numero secreto é menor que ${chute}`) : alert(`O numero secreto é maior que ${chute}`);