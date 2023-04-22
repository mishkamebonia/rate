const feedbackDisplay = document.querySelector('.feedback-request')
const feedbackAnswer = document.querySelector('.feedback-answer')

const rateBtn = document.querySelectorAll('.rate-btn')
const submit = document.querySelector('.submit')
const restartBtn = document.querySelector('.restart-btn')
const votePlaceFrom = document.querySelector('.rate-score-from')
const votePlaceTo = document.querySelector('.rate-score-to')

let rateFrom = 0
let rateTo = 0
let rateResult = 0
let rateDuration = 0
feedbackAnswer.style.display = 'none'

rateBtn.forEach(btn => {
  btn.addEventListener('click', () =>  {
    document.querySelector('.to-btn')?.classList.remove('to-btn')

    rateResult = rateResult === 0 ? rateFrom = btn.textContent : rateTo = btn.textContent

    rateDuration = rateDuration === 0 ? btn.classList.add('from-btn') : btn.classList.add('to-btn')
  })
})

submit.addEventListener('click', () => {
  if(rateFrom !== 0 && rateTo !== 0) {
    feedbackAnswer.style.display = 'block'
    feedbackDisplay.style.display = 'none'

    if(rateTo > rateFrom) {
      votePlaceFrom.textContent = rateFrom
      votePlaceTo.textContent = rateTo
    }else {
      votePlaceFrom.textContent = rateTo
      votePlaceTo.textContent = rateFrom
    }
  }
})

restartBtn.addEventListener('click', () => {
  rateDuration = 0
  rateResult = 0
  rateFrom = 0
  rateTo = 0

  feedbackDisplay.style.display = 'block'
  feedbackAnswer.style.display = 'none'

  votePlaceFrom.textContent = 0
  votePlaceTo.textContent = 0

  rateBtn.forEach(btn => {
    btn.classList.remove('from-btn')
    btn.classList.remove('to-btn')
  })
})