// Tipos de dados em JavaScript

// String (Em strings o melhor é usar '')
let nome = 'Lucca';

// Number
let idade = 20;

// Boolean (true / false)
let solteiro = true;

// Array
let frutas = ['uva', 'maça', 'banana'];
frutas[1] // maça

// Objetos (mesma sintaxe que um JSON)
let carro = {
    marca: 'Toyota',
    modelo: 'Etios',
    ano: 2018,
    motor: null
}

// Function 
let soma = function(a, b) {
    return a + b;
}

function soma (a, b) { // Mais comum
    return a + b;
}

let soma = (a, b) => a + b; // Arrow Function

let soma = (a, b) => { // Importante ressaltar que toda vez que se tem { } é necessário chamar um return
    return a + b;
}

soma(2+2);