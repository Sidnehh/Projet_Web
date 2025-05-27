document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  let answers = {
    sportif: 0,
    calme: 0,
    joueur: 0
  };
  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q3 = document.querySelector('input[name="q3"]:checked');

  let q4 = document.querySelector('input[name="q4"]:checked');
  let q5 = document.querySelector('input[name="q5"]:checked');
  let q6 = document.querySelector('input[name="q6"]:checked');
  let q7 = document.querySelector('input[name="q7"]:checked');

  if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7) {
  document.getElementById("result").textContent = "Merci de répondre à toutes les questions";
  return;}

  answers[q1.value]++;
  answers[q2.value]++;
  answers[q3.value]++;
  answers[q4.value]++;
  answers[q5.value]++;
  answers[q6.value]++;
  answers[q7.value]++;

  // Trouve la catégorie dominante
  let result = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);

  let dogType = "";
  switch(result) {
    case "sportif":
      dogType = "Tu es un Border Collie : rapide, intelligent et toujours en mouvement ! 🐕";
      break;
    case "calme":
      dogType = "Tu es un Basset Hound : posé, doux et fidèle ";
      break;
    case "joueur":
      dogType = "Tu es un Golden Retriever : sociable, joueur et adoré de tous ! ";
      break;
  }

  document.getElementById("result").textContent = dogType;
});