// For e ForEach em JavaScript

const animais = ['Gato', 'Cachorro', 'Papagaio']

for (let i = 0; i < animais.length; i++) {
    console.log(`Esse laço rodou ${i} vezes`);
}

// Fazendo de uma forma menos verbosa

animais.forEach((animal, i) => {
    console.log(animal);
})