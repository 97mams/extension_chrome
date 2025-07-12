const input = document.getElementById('keno-input')
const btn   = document.getElementById('keno-btn')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let formData = input.value
  fetchData(formData)
})

const fetchData = (formData) => {
  //
}