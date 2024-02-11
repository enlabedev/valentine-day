const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Te prometo que será inolvidable", images:"images/cat-02.gif"},
  {text:"Piénsalo de nuevo", images:"images/cat-03.gif"},
  {text:"Vamos, atrévete a un sí", images:"images/cat-04.gif"},
  {text:"Que el miedo no te detenga", images:"images/cat-05.gif"},
]
const ohyes = {text:"Sabía que aceptarias", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Si"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})