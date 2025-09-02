alert('Bem vindo ao meu primeiro projeto Meu Numero Secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = null;
let tentativas = 1;

while(chute !== numeroSecreto){
    chute = prompt('Digite um numero entre 1 e 10');
    //declarar que o chute realmente é um inteiro. Caso contrario as comparações podem dar errado.
    chute = parseInt(chute);
    if (chute === numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto(${numeroSecreto}) com ${tentativas} tentativas!`);
    }else {
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        }else {
            alert(`O numero secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}