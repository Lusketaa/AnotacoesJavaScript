// This

let pessoa = {              // Objeto
    nome: 'Lucca',
    sobrenome: 'Frietto'
}

function nomeSobrenome() {                      // Função com esopo fechado, o this.nome e this.sobrenome não retornariam nada se não fosse a 
    return `${this.nome}` `${this.sobrenome}`   // variável nomeCompleto abaixo que recebe um bind.
}

let nomeCompleto = nomeSobrenome.bind(pessoa);  // Este .bind passa o contexto de pessoa para dentro da função nomeSobrenome

// Arorw Function

let NomeSobrenomeArrow = () => `${this.nome}` `${this.sobrenome}` // Exemplo utilizando Arrow Function, sendo mais clean

let nomeCompletoArrow = NomeSobrenomeArrow.bind(pessoa); // Esse exemplo retornaria undefined undefinde, pois as Arrows Function não aceitam this

console.log(nomeCompleto());

// Artigo sobre Arrow Functions https://udgwebdev.github.io/quando-nao-usar-arrow-functions/