// Atalhos para objetos com Javascript

let idade = 20; 

let pessoa = {
    nome: 'Lucca',
    idade           // passa a varíavel idade para dentro do objeto pessoa criado, é um shortcut
}

// Outra forma, utilizando a variável como chave, casos raros de se ver

let variavelGenerica = 'profissao';

let outraPessoa = {
    nome: 'João',
    [variavelGenerica]: 'Garlom'
}

