//Var, Let e Const

// Mutáveis
var nome_var = 'Lucca';
let nome_let = 'Lucca'; // Mais comum, pois usando let ele sempre fecha o escopo, independente se o escopo for aberto ou não, é melhor para o controle do código
// Let também é ótimo, pois também não pode ser redeclarado, apenas reatribuído

// nome_var = 'Frietto'; 
// nome_let - 'Frietto';
// Das duas formas daria certo, as variáveis teriam outros valores atribuidos diferentes de 'Lucca' que era o valor original

// Imutável
const nome_const = 'Lucca';

// Se ocorresse o seguinte: nome_const = 'Frietto'; (Ocasionaria um erro, já que uma const é imutável)