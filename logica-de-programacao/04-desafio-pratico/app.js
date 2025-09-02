console.log('Boas vindas ao desafio Aula 4');
let nome = "Laercio";
let linguagemDeProgramacao;

console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);
let valor1 = 8;
let valor2 = 7;
let resultado = valor1 + valor2;
let numero;
let contagem = 1;

linguagemDeProgramacao = prompt(`Qual é a linguagem de programação que você mais gosta?`);
console.log(`O usuario gosta da linguagem de programação: ${linguagemDeProgramacao}`);

console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);

valor1 = parseInt(prompt("Informe o valor 1"));
valor2 = parseInt(prompt("Informe o valor 2"));
resultado = valor1 - valor2;
console.log(`A diferença de ${valor1} para ${valor2} é igual a ${resultado}`);

numero = parseInt(prompt("Informe o numero a ser verificado: "));
if (numero === 0) {
    console.log("Numero igual a 0");
} else numero > 0 ? console.log(`Numero ${numero} é positivo`) : console.log("Numero ${numero} é negativo");

while (contagem <= 10) {
    console.log(`Numero igual a ${contagem}`);
    contagem++;
}

let nota = parseInt(prompt("Informe a sua nota:"));
nota >= 7 ? console.log("Aprovado") : console.log("Reprovado");

let numeroAleatorio = Math.random();
console.log(`O numero aleatorio é ${numeroAleatorio}`);

console.log(`O numero aleatório entre 1 e 10 é: ${parseInt((numeroAleatorio) * 10 +1)}`);
console.log(`O numero aleatório entre 1 e 1000 é: ${parseInt((numeroAleatorio) * 1000 +1)}`);