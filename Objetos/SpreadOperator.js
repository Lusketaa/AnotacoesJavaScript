// Spread Operator em JavaScript

let pessoa = {      // Objeto pessoa
    nome: 'Lucca',
    idade: 20
}

let endereço = {    // Objeto endereço
    cidade: 'SCS',
    estado: 'RS'
}

let lucca = {       // Soma os objetos e junta no objeto Lucca
    ...pessoa,
    ...endereço
}

// Sobrescrevendo os dados

let outroLucca = {  // Nesse caso, caso exista a variável idade em um desses objetos (pessoa) ela será sobrescrita com o método abaixo
    ...pessoa,
    ...endereço,
    ...{
        idade: 21,  // Além de sobrescrever idade, podemos adicionar a propriedade sexo ao nosso objeto
        sexo: 'M'
    }
}