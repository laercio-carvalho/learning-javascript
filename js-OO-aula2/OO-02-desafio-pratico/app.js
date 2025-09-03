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
olaPessoa('Laercio');
console.log(`O dobro desse numero é: ${numeroEmDobro(5)}`);
console.log(`A media de aluno Laercio é ${media(8,6,9)}`);
console.log(`O maior numero é ${maiorQue(1,5)}`);
console.log(`O quadrado de 5 é ${aoQuadrado(5)}`);

    //DESAFIOS:
    // Criar uma função que exibe "Olá, mundo!" no console.
    // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
    // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
    // Criar uma função que recebe três números como parâmetros e retorna a média deles.
    // Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
    // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo