let nomeDoUsuario = prompt('Digite seu nome');
let idadeDoUsuario = prompt('Digite sua idade');

let temPao = prompt('Você tem pão?');
if (temPao === 'sim') {
    alert('Fazer sanduíche');
} else {
    alert('Fazer salada');
}

if (idadeDoUsuario >= 18) {
    alert(`Olá ${nomeDoUsuario} você é maior de idade. Pode entrar`);
} else {
    alert(`Olá ${nomeDoUsuario}  você é menor de idade. Não pode entrar`);
}