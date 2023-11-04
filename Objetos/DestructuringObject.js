// Destructuring Object em JavaScript

let carro = {
    marca: 'Fiat',
    modelo: 'Pulse',
    ano: '2023',
    cor: 'cinza',
    valor: 140000
}

// Neste caso criamos as variáveis referenciando o objeto carro
let { marca, modelo, ano, cor, valor: preço } = carro; // com esses : o preço referencia o valor

console.log(preço) // Printará o valor 140000

// let modelo = carro.modelo; Esses dois métodos atuam da mesma coisa
console.log(modelo)

function calculoSeguroCarro({ marca, modelo, ano }) {
    console.log(marca, modelo, ano);

    // Calcularia a lógica
}

calculoSeguroCarro(carro)

// Podemos fazer um Destructuring com arrays também

let frutas = ['Banana', 'Maça', 'Pera'];

let [a, ...resto] = frutas;

console.log(a, resto)