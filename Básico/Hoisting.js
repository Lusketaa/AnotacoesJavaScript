// Hoisting no JavaScript

// var animal = undefined;

function sayAnimal() {
    console.log('Gato');
}

sayAnimal();

var animal = 'Gato';

// O Hoisting é o comportamento do interpretador padrão do JavaScript de mover as declarações para o topo do seu escopo antes da execução do código
// Porém da forma como está o código acima, no console, ele retornará undefined, pois a var seria jogada para o topo do código, que é mt perigoso
// visto que não dará nenhum erro no código e perderemos muito tempo tentando encontrar o que está acontecendo no código.

// Usando let isso não ocorre, pois dará um erro que animal não foi declarado, visto que let sempre fecha o escopo.