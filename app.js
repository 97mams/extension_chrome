const input = document.getElementById('keno-input')
const btn   = document.getElementById('keno-btn')
const alertElement = document.getElementById('alert')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let formData = input.value
  if (!formData) {
    alertElement.textContent = "💥 Eh ! ampidiro ny chiffre.."
    input.focus()
    setTimeout(() => {
      alertElement.textContent = ""
    }, 3000)

    return
  }
  fetchData(formData)
  input.value = ""
})

const fetchData = (formData) => {
  const url = "http://localhost:3000/api/keno"
  fetch(url, {
    mode:'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ keno: formData })
  })
  .then(response => response.json()) 
  .then(data => {
    console.log('Success:', data)
  })
}