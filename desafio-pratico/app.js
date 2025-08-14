alert('Boas vindas ao nosso site');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os Campos!')
let mensagemDeErro = 'Erro! Preencha todos os Campos!';
alert(mensagemDeErro);
alert(`A ${nome} de ${idade} anos fez ${numeroDeVendas} vendas e tem: ${saldoDisponivel} R$ de Saldo`);

nome = prompt('Digite seu nome: ');
idade = prompt('Digite sua idade: ');

if (idade >= 18 ) {
    alert(`${nome} Pode tirar a habilitação`)
} else {
    alert(`${nome} Não pode tirar a habilitação`);
}


    /*
    1 - Declare uma variável chamada nome e atribua a ela o valor "Lua".

    2 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

    3 - Crie uma variável chamada idade e atribua a ela o valor 25.

    4 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.

    5 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

    6 - Exiba um alerta com o texto "Erro! Preencha todos os campos"

    7 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.


    8 - Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .

    9 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
    10 - Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

     */