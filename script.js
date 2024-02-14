const alternatives = [
  { text: "", image: "images/cat-01.gif" },
  { text: "Te prometo que será inolvidable", image: "images/cat-02.gif" },
  { text: "Piénsalo de nuevo", image: "images/cat-03.gif" },
  { text: "Vamos, atrévete a un sí", image: "images/cat-04.gif" },
  { text: "Que el miedo no te detenga", image: "images/cat-05.gif" },
  { text: "No puedo imaginar el día sin ti", image: "images/cat-01.gif" },
  { text: "¿Qué te parece si nos divertimos juntos?", image: "images/cat-02.gif" },
  { text: "Eres lo más bonito que me ha pasado", image: "images/cat-03.gif" },
  { text: "Tú haces mis días mejores", image: "images/cat-04.gif" },
  { text: "Cada momento contigo es especial", image: "images/cat-05.gif" },
  { text: "Eres mi luz en la oscuridad", image: "images/cat-01.gif" },
  { text: "Tu sonrisa alegra mi día", image: "images/cat-02.gif" },
  { text: "Contigo todo es más divertido", image: "images/cat-03.gif" },
  { text: "¿Qué tal si nos perdemos juntos?", image: "images/cat-04.gif" },
  { text: "Eres mi razón para sonreír", image: "images/cat-05.gif" },
];

const ohyes = { text: "Sabía que aceptarías", image: "images/cat-yes.gif" };

const cat = document.querySelector('.cat');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;

function updateDisplay(item) {
  cat.src = item.image;
  text.innerHTML = item.text;
}

function reset() {
  count = 0;
  updateDisplay(alternatives[count]);
  buttons.forEach(btn => btn.style.display = 'inline-block');
  errorButton.style.display = 'none';
}

errorButton.addEventListener('click', reset);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.dataset.answer;
    if (answer === "yes") {
      updateDisplay(ohyes);
      buttons.forEach(btn => btn.style.display = 'none');
    } else if (answer === "no") {
      count = (count + 1) % alternatives.length;
      updateDisplay(alternatives[count]);
      if (count === 0) {
        buttons.forEach(btn => btn.style.display = 'none');
        errorButton.style.display = 'inline-block';
      }
    }
  });
});
