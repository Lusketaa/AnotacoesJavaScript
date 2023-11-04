var animal = 'Gato';

function alteraAnimal() {
    var animal = 'Cachorro';
}

alteraAnimal();

console.log(animal);

// Da forma como está o código acima o console printará 'Gato', Pois a var animal está dentro do escopo da função alteraAnimal.

var animal = 'Gato';

function alteraAnimal() {
    var animal = 'Cachorro';
    console.log(animal); // Desta forma o console printará 'Cachorro'
}

alteraAnimal();

console.log(animal);