alert('Bem vindo ao meu primeiro projeto Meu Numero Secreto');

let contadorCres = 1;
let contadorDecres = 10;
let contagem = null;
let numeroAlvo = null;

while(contadorCres <= 10){
    console.log(`Seu contador crescente vale: ${contadorCres}`);
    contadorCres++;
}

while(contadorDecres >= 1){
    console.log(`Seu contador decrescente vale: ${contadorDecres}`);
    contadorDecres--;
}

contagem = parseInt(prompt('Contagem Regressiva: Digite um numero menor que 20'));
while (contagem >= 0){
    console.log(`Contagem Regressiva ${contagem}`);
    contagem--;
}

contagem = parseInt(prompt('Contagem Progressiva: Digite um numero menor que 20'));
numeroAlvo = contagem;
contagem = 0;
while (contagem <= numeroAlvo){
    console.log(`Contagem Progressiva ${contagem}`);
    contagem++;
}