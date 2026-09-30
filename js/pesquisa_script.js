let perguntaAtual = 0

let botaoComecar = document.getElementById('botao_comecar')

let perguntas = [

    {
        pergunta: "Qual sua situação financeira hoje?",
        opcoes: [
            "Consigo guardar dinheiro todos os meses",
            "Consigo pagar minhas contas, mas quase não sobra",
            "Frequentemente preciso usar o limite/cartão",
            "Tenho dívidas e estou tentando organizá-las",
            "Não sei exatamente como está minha situação"
        ]
    },

    {
        pergunta: "Como você se relaciona com sua renda atualmente?",
        opcoes: [
            "Tenho uma renda fixa todos os meses",
            "Minha renda varia bastante de mês para mês",
            "Tenho mais de uma fonte de renda",
            "Minha renda é suficiente, mas tenho dificuldade para administrá-la",
            "Minha renda atualmente não cobre todas as minhas necessidades"
        ]
    },

    {
        pergunta: "Como você costuma lidar com seus gastos?",
        opcoes: [
            "Sei exatamente quanto gasto todos os meses",
            "Tenho uma ideia dos meus gastos, mas não acompanho tudo",
            "Costumo gastar sem planejar muito",
            "Frequentemente gasto mais do que deveria",
            "Não sei exatamente para onde meu dinheiro vai"
        ]
    },

    {
        pergunta: "Como está sua relação com dívidas atualmente?",
        opcoes: [
            "Não tenho dívidas",
            "Tenho algumas parcelas, mas consigo pagar tranquilamente",
            "Tenho dívidas que estão comprometendo meu orçamento",
            "Tenho dificuldade para pagar algumas dívidas",
            "Estou tentando organizar e quitar minhas dívidas"
        ]
    },
    {
        pergunta: "Como está sua reserva financeira atualmente?",
        opcoes: [
            "Tenho uma reserva suficiente para imprevistos",
            "Tenho uma pequena reserva, mas quero aumentá-la",
            "Estou começando a guardar dinheiro",
            "Atualmente não consigo guardar dinheiro",
            "Nunca pensei em criar uma reserva financeira"
        ]
    },
    {
        pergunta: "Qual o seu objetivo financeiro neste momento?",
        opcoes: [
            "Organizar melhor minha vida financeira",
            "Criar uma reserva de emergência",
            "Quitar minhas dívidas",
            "Fazer uma compra ou realizar um projeto",
            "Começar a investir",
        ]
    }
]

function mostrarPergunta() {

    let conteudo = document.getElementById('conteudo')

    let pergunta = perguntas[perguntaAtual]

    conteudo.innerHTML = ""

    let titulo = document.createElement('h1')
    titulo.textContent = pergunta.pergunta

    conteudo.appendChild(titulo)

    let divOpcoes = document.createElement('div')
    divOpcoes.classList.add('opcoes')

    for (let opcao of pergunta.opcoes) {

        let botao = document.createElement('button')

        botao.textContent = opcao

        divOpcoes.appendChild(botao)
    }

    conteudo.appendChild(divOpcoes)
}


function adicionarEventos() {

    let botoes = document.querySelectorAll('.opcoes button')

    for (let i = 0; i < botoes.length; i++) {

        botoes[i].addEventListener('click', proximaPergunta)

    }

}

function proximaPergunta() {

    let conteudo = document.getElementById('conteudo')

    conteudo.classList.add('saindo')

    setTimeout(function() {

        perguntaAtual++

        if(perguntaAtual < perguntas.length) {

            mostrarPergunta()
            adicionarEventos()

            conteudo.classList.remove('saindo')

        } else {

            alert("Questionário concluído!")

            window.location.href = "home.html"

        }

    }, 300)

}

botaoComecar.addEventListener('click', function() {

    perguntaAtual = 0

    mostrarPergunta()

    adicionarEventos()

})