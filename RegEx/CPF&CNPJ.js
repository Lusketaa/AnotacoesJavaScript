// Um exemplo de RegEx que captura o CPF e CNPJ de um usuário pode ser observado abaixo:

// CPF:

// ^\d{3}\.?\d{3}\.?\d{3}\-\d{2}$

//Exemplo

const expressaoRegular = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
const texto = "O nome é João, e 457.724.198-66 é o CPF do segurado.";

console.log(expressaoRegular.exec(texto))
// Lembrando que você tambem pode executar diretamente a RegExp usando
// /\d{3}\.\d{3}\.\d{3}-\d{2}/.exec(texto)

const cpf = expressaoRegular.exec(texto)[0];
console.log(cpf.replace(/\./g, '').replace('-', ''));

// CNPJ:

// ^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?zd{2}$