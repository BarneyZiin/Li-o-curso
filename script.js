let scorePorcentagem = 0;
let scoreFracao = 0;
let scoreRegraTres = 0;
let scoreEquacao = 0;

// Função para alternar entre abas
function openTab(tabName) {
    let i;
    let tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");

    if (tabName === 'porcentagem') {
        generatePorcentagem();
    } else if (tabName === 'fracao') {
        generateFracao();
    } else if (tabName === 'regraTres') {
        generateRegraTres();
    } else if (tabName === 'equacao') {
        generateEquacao();
    }
}

// Funções de geração de enunciados
function generatePorcentagem() {
    let valor = Math.floor(Math.random() * 1000) + 50;
    let porcentagem = Math.floor(Math.random() * 50) + 1;
    let resultado = valor * (porcentagem / 100);
    document.getElementById('question-porcentagem').textContent = `Quanto é ${porcentagem}% de R$${valor}?`;
    window.correctAnswerPorcentagem = Math.round(resultado);
}

function generateFracao() {
    let numerador = Math.floor(Math.random() * 9) + 1;
    let denominador = Math.floor(Math.random() * 9) + 1;
    let resultado = numerador / denominador;
    document.getElementById('question-fracao').textContent = `Qual é o resultado da fração ${numerador}/${denominador}?`;
    window.correctAnswerFracao = resultado.toFixed(2);
}

function generateRegraTres() {
    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;
    let c = Math.floor(Math.random() * 100) + 1;
    let resultado = (b * c) / a;
    document.getElementById('question-regraTres').textContent = `Se ${a} está para ${b}, quanto ${c} está para X?`;
    window.correctAnswerRegraTres = resultado.toFixed(2);
}

function generateEquacao() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let resultado = -b / a;
    document.getElementById('question-equacao').textContent = `Resolva a equação: ${a}x + ${b} = 0`;
    window.correctAnswerEquacao = resultado.toFixed(2);
}

// Função para verificar a resposta
function checkAnswer(type) {
    let userAnswer, correctAnswer;

    if (type === 'porcentagem') {
        userAnswer = parseInt(document.getElementById('answer-porcentagem').value);
        correctAnswer = parseInt(window.correctAnswerPorcentagem);
    } else if (type === 'fracao') {
        userAnswer = parseFloat(document.getElementById('answer-fracao').value);
        correctAnswer = parseFloat(window.correctAnswerFracao);
    } else if (type === 'regraTres') {
        userAnswer = parseFloat(document.getElementById('answer-regraTres').value);
        correctAnswer = parseFloat(window.correctAnswerRegraTres);
    } else if (type === 'equacao') {
        userAnswer = parseFloat(document.getElementById('answer-equacao').value);
        correctAnswer = parseFloat(window.correctAnswerEquacao);
    }

    if (userAnswer === correctAnswer) {
        document.getElementById(`feedback-${type}`).textContent = 'Correto!';
        document.getElementById(`feedback-${type}`).style.color = '#4caf50';
        if (type === 'porcentagem') {
            scorePorcentagem++;
            document.getElementById('score-porcentagem').textContent = scorePorcentagem;
        } else if (type === 'fracao') {
            scoreFracao++;
            document.getElementById('score-fracao').textContent = scoreFracao;
        } else if (type === 'regraTres') {
            scoreRegraTres++;
            document.getElementById('score-regraTres').textContent = scoreRegraTres;
        } else if (type === 'equacao') {
            scoreEquacao++;
            document.getElementById('score-equacao').textContent = scoreEquacao;
        }
    } else {
        document.getElementById(`feedback-${type}`).textContent = 'Errado! Tente novamente.';
        document.getElementById(`feedback-${type}`).style.color = '#ff6b6b';
    }

    document.getElementById(`answer-${type}`).value = '';
}
