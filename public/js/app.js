const weatherForm = document.querySelector('form')
const searchInput = weatherForm.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('Send your request to fetch weather info on', searchInput.value)
})
