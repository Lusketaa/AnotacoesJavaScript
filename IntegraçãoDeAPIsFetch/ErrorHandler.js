function errorHandler(status) {
    if(status === '404') {  // Esse erro 404 é quando não consegue encontrar o endpoint que criamos na API que seria o listafuncionarios
        console.log('Opa! Não encontrei o endpoint da URL!');
    }

    if(status === '400') {  // Esse erro 404 é quando não consegue encontrar o endpoint que criamos na API que seria o listafuncionarios
        console.log('Opa! Você inseriu alguma informação errada!');
    }

    if(status === '500') {  // Esse erro 404 é quando não consegue encontrar o endpoint que criamos na API que seria o listafuncionarios
        console.log('Erro no servidor! Tente novamente mais tarde!');
    }
}