let currentQuestion = 1;
const totalQuestions = 7;

document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', previousQuestion);
document.getElementById('finish-btn').addEventListener('click', finishQuiz);

function updateProgress() {
    const progress = (currentQuestion / totalQuestions) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion;
}

function showQuestion(questionNumber) {
  document.getElementById('total-questions').textContent = totalQuestions;
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.querySelector(`[data-question="${questionNumber}"]`).classList.add('active');

    document.getElementById('prev-btn').disabled = questionNumber === 1;
    document.getElementById('next-btn').style.display = questionNumber === totalQuestions ? 'none' : 'inline-block';
    document.getElementById('finish-btn').style.display = questionNumber === totalQuestions ? 'inline-block' : 'none';

    updateProgress();
}

function nextQuestion() {
    const currentQuestionElement = document.querySelector(`[data-question="${currentQuestion}"]`);
    const answered = Array.from(currentQuestionElement.querySelectorAll('input[type="radio"]')).some(r => r.checked);
    if (!answered) {
        alert('Veuillez répondre à cette question avant de continuer.');
        return;
    }
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function previousQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function finishQuiz() {
    let answers = { sportif: 0, calme: 0, joueur: 0 };

    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            alert('Veuillez répondre à toutes les questions.');
            return;
        }
        answers[selected.value]++;
    }

    const resultKey = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
    let message = "";

    switch (resultKey) {
        case 'sportif':
            message = "Tu es un Border Collie : rapide, intelligent et toujours en mouvement !";
            break;
        case 'calme':
            message = "Tu es un Basset Hound : posé, doux et fidèle. Un vrai pote de canapé !";
            break;
        case 'joueur':
            message = "Tu es un Golden Retriever : sociable, joueur et adoré de tous !";
            break;
    }

    document.getElementById('result').innerHTML = `<h3>${message}</h3>
        <a class="dog-result-link" href="Contenu.html">Découvre ton profil canin !</a>`;
    document.getElementById('quiz-form').style.display = 'none';
    document.querySelector('.quiz-navigation').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('question-counter').style.display = 'none';
}

showQuestion(currentQuestion);
