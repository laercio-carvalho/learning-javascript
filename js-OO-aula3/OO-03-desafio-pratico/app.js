let peso = prompt(`Qual é o seu peso?`);
let altura = prompt(`Qual é a sua altura?`);
let numero = parseInt(prompt(`Informe um numero para calcular o fatorial`));
let dolares = parseFloat(prompt(`Informe quantos Dolares você adquiriu para que eu converta:`));
let largura = parseFloat(prompt(`Para o calculo da area e do perimetro do retangulo informe a Largura:`));
let comprimento = parseFloat(prompt(`Para o calculo da area e do perimetro do retangulo informe a Altura:`));
let raio = parseFloat(prompt(`Para o calculo da area e do perimetro do circulo informe o Raio:`));
let numeroQueSeraCalculado = parseInt(prompt(`Informe um numero para que seja feita a tabuada:`));


function imc(peso,altura) {
    let formulaIMC = peso / (altura * altura);
    console.log(`O seu IMC é: ${formulaIMC}!\n`);
}

function fatorial(numero) {
    let resultado = 1;
    for (let numeroFatorial = numero; numeroFatorial > 0 ; numeroFatorial--) {
        resultado *= numeroFatorial;
    }
    console.log(`O fatorial de ${numero} é ${resultado}!\n`)
}

function valorDolar(dolares) {
    const umDolar = 4.80;
    let reais = dolares * umDolar;
    console.log(`Recebendo ${dolares}$ com o Dollar a ${umDolar}R$ você terá ${reais}R$\n`);
}
function retanguloAreaPerimetro(largura, comprimento) {
    let area = largura * comprimento;
    let perimetro = 2 * (largura) + 2 * (comprimento);
    console.log(`a largura é ${largura} e a altura ${comprimento}`);
    console.log(`Com issa a área é ${area}M² e o Perimetro ${perimetro} Metros\n`);
}

function circuloAreaPerimetro(raio) {
    const Pi = 3.14;
    let area = Pi * raio ** 2;
    let perimetro = 2 * Pi * raio;
    console.log(`Dado o raio ${raio} a área é ${area}M² e o perimetro é ${perimetro}M\n`);
}

function tabuada(numeroQueSeraCalculado) {
    console.log(`Tabuada de ${numeroQueSeraCalculado}:`)
    for (let numero = 1; numero <= 10; numero++) {
        let soma = numeroQueSeraCalculado + numero;
        console.log(`A soma de ${numeroQueSeraCalculado} e ${numero} é ${soma}`);
    }
    for (let numero = 1; numero <= 10; numero++) {
        let subtrai = numeroQueSeraCalculado - numero;
        console.log(`A subtração de ${numeroQueSeraCalculado} e ${numero} é ${subtrai}`);
    }
    for (let numero = 1; numero <= 10; numero++) {
        let multiplica = numeroQueSeraCalculado * numero;
        console.log(`A multiplicação de ${numeroQueSeraCalculado} e ${numero} é ${multiplica}`);
    }
    for (let numero = 1; numero <= 10; numero++) {
        let divida = numeroQueSeraCalculado / numero;
        console.log(`A divisão de ${numeroQueSeraCalculado} por ${numero} é ${divida}`);
    }
}

//CHAMADAS
imc(peso, altura);
fatorial(numero);
valorDolar(dolares);
retanguloAreaPerimetro(largura,comprimento);
circuloAreaPerimetro(raio);
tabuada(numeroQueSeraCalculado);

//DESAFIOS:
//     Ok - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso,
//      em quilogramas, que serão recebidos como parâmetro.
//     Ok - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
//     OK - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
//      Para isso, considere a cotação do dólar igual a R$4,80.
//     Ok - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que
//      serão dadas como parâmetro.
//     Ok - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido
//      como parâmetro. Considere Pi = 3,14.
//     Ok - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

