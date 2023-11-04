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

// Outra forma de realizar o fetch, com Async e Await
async function getFuncionariosAsync() {
    try{
        const res = await fetch('https://653eaffc9e8bd3be29dfa27a.mockapi.io/api/listafuncionarios');
        const resJson = res.ok ? await res.json() : _throw(res.status)
        list = resJson;
        montarTabela();    
    } catch(erro){
        errorHandler(erro.message)
    }
    
    // Só executa essa linha quando a linha acima for resolvida
}

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

getFuncionariosAsync();