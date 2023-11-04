// Clonando um objeto e alterando propriedades

/*let pessoa = {
    nome: 'Lucca',
    idade: 20
}*/

// Utilize var nesse caso apenas para não apontar erro no código, a idéia era usar let

var outraPessoa = pessoa;           // Dessa forma os dois objetos se igualam e qualquer alteração feita em um dos dois impactará no outro objeto

JSON.stringify(pessoa)              // Utilizando a Api / biblioteca do JSON tornaremos as propriedades de nosso objeto em strings
JSON.parse(JSON.stringify(pessoa))  // Desta forma transformará as strings em objeto novamente, resolve a maioria dos casos

let outraPessoa = JSON.parse(JSON.stringify(pessoa)) // Desta forma podemos alterar as propriedades da variável outraPessoa sem alterar as propriedades de pessoa

// Exceções do JSON.parse(JSON.stringify())

let pessoa = {
    nome: 'Lucca',
    idade: 20,
    dataDeLogin: new Date() // Api Date do JavaScript que puxa a data atual
}

// Se eu tentar utilizar: let outraPessoa = JSON.parse(JSON.stringify(pessoa)) trará apenas a string de data e hora pois não é possível 
// copiar um prototype (objeto dentro de um objeto) para outro objeto, é o chamado de shallow copy (cópia rasa), é uma limitação do próprio JSON

// Como fazer um deep clone

// Utilizando Lodash, pode instalar importando no HTML ou instalando utilizando o npm
// https://lodash.com