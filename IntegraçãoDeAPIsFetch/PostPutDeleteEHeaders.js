// Headers servem para enviar informações dentro do seu payload para o servidor
const headers = {
    'Content-Type': 'application/jason',
}

const init = {
    headers: headers,
    body: JSON.stringify({
        "nome": "Lucca", // Nesse caso deveria ser um quertSelector capturando o valor do input no HTML
        "idade": 28,
        "sexo": "M",
        "salario": 2000
    }),
    method: 'POST'       // O padrão é GET // No caso de editar é necessário o PUT e passar o parametro de qual id irá editar // Para o DELETE n precisa de boy, apenas o id como parâmetro que irá apagar
}

fetch('https://653eaffc9e8bd3be29dfa27a.mockapi.io/api/listafuncionarios', init) // Por padrão vem com o método GET // O caminho certo seria /listafuncionarios
        .then(res => res.ok ? res.json() : _throw(res.status)) 
        .then(listagem => {
            list = listagem;
            montarTabela();
        })
        .catch(erro =>  errorHandler(erro.message))