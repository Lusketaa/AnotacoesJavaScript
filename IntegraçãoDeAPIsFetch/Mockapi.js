// API (Application Programming Interface)

// Interface que permite comunicação e troca de informações entre diferentes sistemas

// Pode-se usar uma API "Fake" para consumir dados sem ter que criar uma API com backend real.
// Utilizando https://mockapi.io ou https://mockfly.dev, tem uma interface bem interativa e simples.
// A título de curiosidade, podemos criar um projeto no mockapi, nesse exemplo criamos uma lista de funcionários com os dados de
// id, nome, idade, sexo e salário, porém se for utilizar o mockapi, você deve passar essa lista para o mockapi em formato de JSON
// para isso pode utilizar a ferramenta https://www.convertsimple.com/convert-javascript-to-json/ para converter de código Js para JSON.

// No exemplo abaixo, utilizei uma API "fake" do mockapi para capturar os dados dos funcionários que estão na API e colocá-los na tabela que criei

let list = [];

function getFuncionarios() {    // Função para acessar a API da MockAPI e imprimir os dados do array de funcionários que colocamos na API
    fetch('https://653eaffc9e8bd3be29dfa27a.mockapi.io/api/listafuncionarios') // Por padrão vem com o método GET // O caminho certo seria /listafuncionarios
        .then(res => res.ok ? res.json() : _throw(res.status)) 
        .then(listagem => {
            list = listagem;
            montarTabela();
        })
        .catch(erro =>  errorHandler(erro.message))
}   

/* Códigos de status de respostas HTTP:

Respostas Informativas (100 – 199)
Respostas bem-sucedidas (200 – 299)
Mensagens de redirecionamento (300 – 399)
Respostas de erro do cliente (400 – 499)
Respostas de erro do servidor (500 – 599)*/

function montarTabela() {
    document.querySelector("#tabela-body").innerHTML = '';

    if(list.length === 0) {
        document.querySelector("#tabela-body")
            .insertAdjacentHTML("beforeend", '<span>Não há dados!</span>');
        return;
    }
    
    list.forEach(el => {
        let template = `
        <tr>
            <td>${el.nome}</td>
            <td>${el.idade}</td>
            <td>${el.sexo}</td>
            <td>R$ ${el.salario}</td>
        </tr>
        `

        document.querySelector("#tabela-body").insertAdjacentHTML("beforeend", template);
    });
}

getFuncionarios();
