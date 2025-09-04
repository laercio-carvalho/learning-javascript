README.md

# Bem-vindo ao projeto "Jogo do Número Secreto"! 🎮

## Projeto
Este é um simples jogo em que o usuário deve adivinhar um número secreto gerado aleatoriamente entre 1 e 10. O código está escrito em JavaScript puro e utiliza seleção de elementos com querySelector.

## Funcionalidades ✨
• Gera um número aleatório inicialmente
• Exibe texto na tela usando uma função modular
• Verifica se o chute do usuário é correto ou não
• Fornece feedback imediato ao usuário

## Uso 🎮
1. Copie o código para um arquivo .html
2. Abra o arquivo em um navegador
3. Escolha um número entre 1 e 10
4. Verifique se acertou ou errou

## Exemplo Antigo vs Novo
Antigo:
`javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';
`

Novo (recomendado):
`javascript
function exibirTextoNaTela(tag, texto) {
const campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
`

## Arquivo Principal 📄
O código principal está no arquivo index.html, que inclui:
• Geração de número aleatório
• Função para exibição de texto
• Lógica para verificar chutes

## Exemplos de Uso Modernos 🔥
`javascript
// Em vez de:
function verificarChute() {
let chute = document.querySelector('input').value;
if (chute == numeroSecreto) {
alert('Você acertou!');
} else {
alert('Você errou!');
}
}

// Use:
const verificarChute = () => {
const chute = parseFloat(document.querySelector('input').value);
alert(chute === numeroSecreto ? 'Acertou!' : 'Errou!');
};
`

## Boas Práticas para Desenvolvedores ✨
• Modularização: Separe suas funções em módulos independentes
• Utilize Promises/Axios: Para requisições HTTP
• Adicione CSS: Melhore a aparência do jogo
• Event Listeners: Em vez de inline HTML
• TypeScript: Adote para tipagem estática

Sinta-se livre para contribuir ou personalizar o código! 🚀
