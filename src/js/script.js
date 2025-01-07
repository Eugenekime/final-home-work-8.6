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
