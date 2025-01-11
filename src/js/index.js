import '../scss/style.scss'

const overlayFeedback = document.querySelector('.overlay-feedback')
const overlayMobileMenu = document.querySelector('.overlay-mobile-menu')
const overlayCall = document.querySelector('.overlay-call')
const checkboxFeedback = document.getElementById('message-toggle')
const checkboxMobileMenu = document.getElementById('burger-toggle')
const checkboxCall = document.getElementById('call-toggle')

overlayFeedback.addEventListener('click', (event) => {
  checkboxFeedback.checked = false
})

overlayMobileMenu.addEventListener('click', (event) => {
  checkboxMobileMenu.checked = false
})

overlayCall.addEventListener('click', (event) => {
  checkboxCall.checked = false
})

const readMore = document.querySelector('.block-about-company__readmore')
const textMobile = document.querySelector(
  '.block-about-company__text--text-for-768'
)
const textTablet = document.querySelector(
  '.block-about-company__text--text-for-1120'
)
const textDesktop = document.querySelector(
  '.block-about-company__text--text-for-1120-and-more'
)
const textReadMore = document.querySelector(
  '.block-about-company__readmore-text'
)

const readMoreIcon = document.querySelector(
  '.block-about-company__readmore-icon'
)

readMore.addEventListener('click', () => {
  if (window.innerWidth < 551) {
    if (textReadMore.textContent === 'Читать далее') {
      textTablet.style.display = 'block'
      textDesktop.style.display = 'block'
      textReadMore.textContent = 'Скрыть'
      readMoreIcon.style.transform = 'rotate(180deg)'
    } else {
      textTablet.style.display = 'none'
      textDesktop.style.display = 'none'
      textReadMore.textContent = 'Читать далее'
      readMoreIcon.style.transform = 'rotate(0deg)'
    }
  } else if (window.innerWidth >= 551 && window.innerWidth <= 1366) {
    if (textReadMore.textContent === 'Читать далее') {
      textTablet.style.display = 'block'
      textDesktop.style.display = 'block'
      textReadMore.textContent = 'Скрыть'
      readMoreIcon.style.transform = 'rotate(180deg)'
    } else {
      textTablet.style.display = 'none'
      textDesktop.style.display = 'none'
      textReadMore.textContent = 'Читать далее'
      readMoreIcon.style.transform = 'rotate(0deg)'
    }
  } else if (window.innerWidth > 1366) {
    if (textReadMore.textContent === 'Читать далее') {
      textDesktop.style.display = 'block'
      textReadMore.textContent = 'Скрыть'
      readMoreIcon.style.transform = 'rotate(180deg)'
    } else {
      textDesktop.style.display = 'none'
      textReadMore.textContent = 'Читать далее'
      readMoreIcon.style.transform = 'rotate(0deg)'
    }
  }
})
