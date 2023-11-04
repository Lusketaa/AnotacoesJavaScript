// Getters e Setters no Javascript

let usuario = {
    _nome: 'Lucca',         // No JavaScript não existem propriedades privadas, mas como convenção da comunidade do JS que quando colocam underline 
    _sobrenome: 'Frietto',  // para propriedades privadas

    get getSetnome() {
        return this._nome;  // Dessa forma guardamos a variável dentro de um método
    },

    set getSetnome(valor) {
        this._nome = valor; // Alteramos a variável _nome com um set alterando o nome que captura a propriedade "privada" que criamos no objeto usuario
    }
}

