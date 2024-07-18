const bank_name = document.querySelector('.bank_name')
const bank_code = document.querySelector('.bank_code')

const departments = document.querySelector('.department')

const sections = document.querySelector('.sections')

console.log(departments)

const data = {
  essential: [
    'OFFICE CLEANERS',
    'SPECIAL EQUIPMENT CLEANERS',
    'DRIVERS',
    'NURSES',
    'COOKS',
    'SECRETARIES',
  ],

  special_equipment: [
    'TAILORS',
    'QUALITY CONTROL/CUTTING',
    'MAINTENANCE',
    'HELMET PRODUCTION',
    'STRIKE FACE PRODUCTION',
    'CNC MACHINE',
    'DICON SPECIAL EQUIPMENT',
    'IMPERIUM SPECIAL EQUIPMENT',
    'SPECIAL EQUIPMENT ADMIN',
  ],
}

console.log(bank_code)
bank_name.addEventListener('change', (event) => {
  const bankValue = event.target.value
  console.log(bankValue)
  switch (bankValue) {
    case 'access':
      bank_code.value = '044'
      break

    case 'echo':
      bank_code.value = '050'
      break

    case 'fcmb':
      bank_code.value = '214'
      break

    case 'fcmb':
      bank_code.value = '214'
      break

    case 'fidelity':
      bank_code.value = '070'
      break

    case 'first':
      bank_code.value = '011'
      break

    case 'gtb':
      bank_code.value = '058'
      break

    case 'jaiz':
      bank_code.value = '301'
      break

    case 'keystone':
      bank_code.value = '082'
      break

    case 'polaris':
      bank_code.value = '076'
      break

    case 'stanbic':
      bank_code.value = '221'
      break

    case 'sterling':
      bank_code.value = '232'
      break

    case 'uba':
      bank_code.value = '033'
      break

    case 'union':
      bank_code.value = '032'
      break

    case 'unity':
      bank_code.value = '215'
      break

    case 'wema':
      bank_code.value = '035'
      break

    case 'zenith':
      bank_code.value = '057'
      break
  }
})

departments.addEventListener('change', (event) => {
  const selectedValue = event.target.value
  console.log(selectedValue)

  switch (selectedValue) {
    case 'essential':
      data.essential.map((value) => {
        let option = document.createElement('option')

        option.setAttribute('value', value)

        option.innerText = value

        sections.appendChild(option)
      })
      break

    case 'special equipment':
      console.log('special qqq')
      data.special_equipment.map((value) => {
        let option2 = document.createElement('option')

        option2.setAttribute('value', value)
        option2.innerText = value
        console.log(option2)

        sections.appendChild(option2)
      })

      break

    default:
      console.log('runnitn fint')
  }
})
