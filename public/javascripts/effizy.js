let myInput = document.querySelectorAll('.input')

myInput.forEach((feild) => {
  feild.addEventListener('dblclick', (e) => {
    e.preventDefault()
    e.target.value = e.target.getAttribute('placeholder')
  })
})

let selection = document.querySelector('.selectMe').children
let sect = document.querySelector('.sect').textContent

for (feild of Object.values(selection)) {
  let section = feild.getAttribute('value')

  if (sect === section) {
    feild.setAttribute('selected', 'true')
  }
}

let department = document.querySelector('.selectMe2').children
let dept = document.querySelector('.dept').textContent

for (feild of Object.values(department)) {
  let dept2 = feild.getAttribute('value')

  if (dept2 === dept) {
    feild.setAttribute('selected', 'true')
  }
}

let employment_status = document.querySelector('.selectMe3')
let statusMe = document.querySelector('.status').textContent
console.log(statusMe)
for (feild of Object.values(employment_status)) {
  let stat = feild.getAttribute('value')

  if (stat === statusMe) {
    feild.setAttribute('selected', 'true')
  }
}

const bank_name = document.querySelector('.bank_name')

console.log('hello')

console.log(bank_name)

bank_name.addEventListener('change', (event) => {
  const bankValue = event.target.value
  console.log(bankValue)
})

console.log(bank_code)
