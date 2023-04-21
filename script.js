const feedbackDisplay = document.querySelector('.feedback-request')
const feedbackAnswer = document.querySelector('.feedback-answer')

const rateBtn = document.querySelectorAll('.rate-btn')
const submit = document.querySelector('.submit')
const restartBtn = document.querySelector('.restart-btn')
const votePlace = document.querySelector('.rate-score')

let rate = 0
feedbackAnswer.style.display = 'none'
restartBtn.style.display = 'none'

rateBtn.forEach(btn => {
  btn.addEventListener('click', () =>  {
    rate = btn.textContent

    document.querySelector('.active-high-btn')?.classList.remove('active-high-btn')
    btn.classList.add('active-high-btn')
  })
})

submit.addEventListener('click', () => {
  if(rate !== 0) {
    feedbackAnswer.style.display = 'block'
    feedbackDisplay.style.display = 'none'
    restartBtn.style.display = 'block'

    votePlace.textContent = rate
  }
})

restartBtn.addEventListener('click', () => {
  rate = 0

  feedbackDisplay.style.display = 'block'
  feedbackAnswer.style.display = 'none'
  restartBtn.style.display = 'none'

  rateBtn.forEach(btn => {
    btn.classList.remove('active-high-btn')
  })
})