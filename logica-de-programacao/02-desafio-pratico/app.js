alert('Boas vindas ao nosso site');
let numeroJogo;
let nome;
let saldo = 1000;
let semana= prompt('Que dia da semana é hoje? \n 1 - Segunda \n 2 - Terça \n 3 - Quarta' +
    '\n 4 Quinta \n 5 - Sexta \n 6 - Sabado \n 7 - Domingo ');

if (semana>=1 && semana<=5){
    alert('Boa Semana!');
} else if (semana>=6 && semana<=7){
    alert('Bom Final de Semana!');
}else {
    alert('Numero ou dia da Semana Invalido!');
}
//Questão 2
if (semana>0){
    alert('Numero Positivo');
} else if (semana = 0){
    alert('Zero');
}else {
    alert('Numero Negativo');
}

//Questão 3
numeroJogo = prompt('Me diga um numero?');
if (numeroJogo>=100){
    alert('Parabens, você Venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

//Questão 4 e 5
nome = prompt('Qual é o nome?');
alert(`Seja bem-vindo ${nome}, seu saldo é ${saldo}R$`);

    /*
    1-  Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

    2-  Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

    3-  Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

    4-  Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

    5-  Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

     */