function animal(animal) {
    console.log('Boas vindas, ' + animal);
    debugger;                               // Mesma coisa do que colocar um breakpoint pelo devtools, importante apagar o debugger após de usar
    somAnimal(animal);
}

function somAnimal(animal) {
    switch (animal){
        case 'leao':
            console.log('ROOOAAARRR');
            break;
        case 'pinto':
            console.log('PIIIUUUUU');
            break;
        case 'gato':
            console.log('MIAUUUUUU');
            break;
        default:
            console.log('Não identifiquei o som');
    }
}

animal('pinto');

