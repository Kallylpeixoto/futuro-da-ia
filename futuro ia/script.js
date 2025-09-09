const perguntas = [
    "Qual impacto positivo você enxerga para a IA na sociedade nos próximos 10 anos?",
    "Você acha que a IA deve ter regulações éticas claras? Por quê?",
    "De que forma a IA pode transformar a educação globalmente?",
    "Quais desafios você acredita que a IA enfrentará para ser aceita mundialmente?",
    "Como a IA pode colaborar para melhorar a sustentabilidade e o meio ambiente?"
];

const alternativas = [
    ["Melhorias na saúde e medicina", "Automação que cria empregos", "Facilitação do cotidiano"],
    ["Sim, para garantir uso responsável", "Não, inovação sem barreiras", "Apenas em algumas áreas específicas"],
    ["Personalização do aprendizado", "Apoio aos professores", "Acesso ampliado ao ensino"],
    ["Medos e desinformação", "Desigualdade no acesso", "Questões de privacidade"],
    ["Monitoramento ambiental", "Otimização de recursos", "Mobilização social"]
];

const resultados = [
    "A IA tem potencial para avanços significativos em diagnósticos e tratamentos médicos.",
    "Regulações éticas são essenciais para prevenir abusos e garantir transparência.",
    "A personalização do ensino pode tornar a aprendizagem mais eficaz e inclusiva.",
    "O esclarecimento e políticas justas são cruciais para superar esses desafios.",
    "A IA pode contribuir para um futuro mais sustentável através da análise eficiente de dados."
];

const caixaPerguntas = document.querySelector('.caixa-perguntas');
const botoes = document.querySelectorAll('.caixa-alternativas button');
const textoResultado = document.querySelector('.texto-resultado');

let indicePergunta = 0;

function mostrarPergunta() {
    caixaPerguntas.textContent = perguntas[indicePergunta];
    botoes.forEach((botao, i) => {
        botao.textContent = alternativas[indicePergunta][i];
        botao.disabled = false;
        botao.style.display = 'inline-block';
    });
    textoResultado.textContent = "";
}

botoes.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        textoResultado.textContent = resultados[indicePergunta];
        botoes.forEach(b => b.disabled = true);
        setTimeout(() => {
            indicePergunta++;
            if (indicePergunta < perguntas.length) {
                mostrarPergunta();
            } else {
                caixaPerguntas.textContent = "Obrigado por compartilhar suas ideias!";
                textoResultado.textContent = "";
                botoes.forEach(b => b.style.display = 'none');
            }
        }, 3000); 
    });
});

mostrarPergunta();
