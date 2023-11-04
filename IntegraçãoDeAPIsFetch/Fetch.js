// Fetch API em JavaScript

// Fornece uma interface para buscar recursos em toda a rede. O fetch acontece de uma forma assíncrona, com promises.

// Exemplo: 

console.log('Olá');
console.log('Tudo bem:');

// Sabemos que o Js executa seus comandos de forma síncrona, então não tem como o tudo bem ser executado antes do olá no códgio anterior
// É lido de cima pra baixo da esquerda para a direita

// Já o Fetch executa de forma assíncrona

// Exemplo:

// Fetch > Lista de funcionários <pendente>
console.log('Olá');
console.log('Tudo bem:');
// ...
// ...
// ...
// Fetch > voltei com a resposta
// Fetch > response

// No tempo que a requisição está sendo processada, o código não irá parar, dessa forma, para o fetch voltar com a response ele pode voltar a qualquer
// momento.