// Callback no Javascript

function saySecretAnimal(callbackAnimalSecreto) {
    const animalSecreto = 'Gato';

    callbackAnimalSecreto(animalSecreto);
}

saySecretAnimal(
    (animal) => {
        console.log(animal)
    }
)

// É uma forma de agendar uma ação para ser realizada após uma determinada tarefa assíncrona ser finalizada.

// A própria função de eventlistener é um callback

document.querySelector("#btn")
    .addEventListener('click', () => { // Estamos executando a função sayName sem que ele esteja definida nesse escopo
        sayName();
        
        // Outras instruções
    });