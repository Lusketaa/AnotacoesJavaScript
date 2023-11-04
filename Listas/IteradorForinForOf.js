// Iteradores For in e For Of em JavaScript

let jogos = ['Mario', 'Pokemon', 'Tibia'];

// Utilizando For Of
for(let jogo of jogos) {        // Printa o valor de cada item dentro da lista
    console.log(jogo);
}

// Utilizando For In
for(let position in jogos) {    // Dessa forma ele traz o index dentro da lista ou de um objeto
    console.log(position);      // Funciona da mesma forma do ForEach
}

let pessoa = {
    nome: 'Lucca Frietto',
    profissao: 'Programador',
    idade: 20
}

for(let key in pessoa) {        // Dessa forma ele traz os valores de cada um dos atributos do nosso objeto pessoa
    console.log(pessoa[key])
}
