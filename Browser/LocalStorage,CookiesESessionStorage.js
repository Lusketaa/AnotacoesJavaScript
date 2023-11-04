// Cookies (Necessidade de enviar a mesma informação várias vezes para o servidor)

// Capacidade: 4kb / expira setando manualmente / armazena no browser e no servidor e é enviado com requests

// Local Storage (Sempre opte por esse)

// Capacidade: 10mb / nunca expira / armazena no browser

// Session Storage (dados sensíveis)

// Capacidade: 5mb / expira quando a aba é fechada (semelhante a uma aplicação de banco) / armazena no browser

// Exemplo
const usuarioCarrinho = [{
    nome: 'margarina',
    preco: 6
    },
    {
    nome: 'leite',
    preco: 9
    }
]

localStorage.setItem('carrinho', JSON.stringify(usuarioCarrinho));

