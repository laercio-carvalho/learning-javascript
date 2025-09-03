let nome = prompt('Digite seu nome: ');
let numeroQueSeraDobrado = parseInt(prompt(`${nome} digite o numero a ser dobrado`));
let nota01 = parseFloat(prompt(`${nome}, Digite a nota 1: `));
let nota02 = parseFloat(prompt(`${nome}, Digite a nota 2: `));
let nota03 = parseFloat(prompt(`${nome}, Digite a nota 3: `));
let numero01 = parseInt(prompt(`${nome}, Digite o numero 01: `));
let numero02 = parseInt(prompt(`${nome}, Digite o numero 02: `));
let numeroQuadrado = parseInt(prompt(`${nome}, Digite o numero que será elevado ao quadrado: `));

function olaMundo() {
    console.log('Ola Mundo');
}

function olaPessoa(nome) {
    console.log(`Olá ${nome}`);
}

function numeroEmDobro(numero) {
    return numero * 2;
}

function media(nota01,nota02,nota03) {
    return parseFloat((nota01+nota02+nota03)/3);
}

function maiorQue(numero01,numero02) {
    return parseInt(numero01 >= numero02 ? numero01 : numero02);
}

function aoQuadrado(numeroQuadrado) {
    return parseInt(numeroQuadrado*numeroQuadrado);
}

olaMundo();
olaPessoa(`Seja bem-vindo ${nome}`);
console.log(`O dobro de ${numeroQueSeraDobrado} é: ${numeroEmDobro(numeroQueSeraDobrado)}`);
alert(`As notas do aluno ${nome} são respectivamente ${nota01}, ${nota02}, ${nota03}, e sua media é ${media(nota01,nota02,nota03)}`);
alert(`O maior numero é ${maiorQue(numero01,numero02)}`);
alert(`O quadrado de ${numeroQuadrado} é ${aoQuadrado(numeroQuadrado)}`);

    //DESAFIOS:
    // Criar uma função que exibe "Olá, mundo!" no console.
    // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
    // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
    // Criar uma função que recebe três números como parâmetros e retorna a média deles.
    // Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
    // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo