const myForm = document.getElementById('my-form')
const nami = document.getElementById('name-text')
const role = document.getElementById('role-text')
const availability = document.getElementById('availability-text')
const age = document.getElementById('age-text')
const lokasi = document.getElementById('lokasi-text')
const experience = document.getElementById('experience-text')

const buttonSubmit = document.getElementById('my-button')
const myBox = document.getElementById('my-box')

let isLowerBracketShow = true
let isInputNotField = true

myForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const currentName = myForm.elements.nami.value
    const currentRole = myForm.elements.role.value
    const currentAvailability = myForm.elements.availability.value
    const currentAge = myForm.elements.age.value
    const currentLokasi = myForm.elements.lokasi.value
    const currentExperience = myForm.elements.experience.value

    console.log(currentName, currentRole ,currentAvailability ,currentAge ,currentLokasi ,currentExperience)
    nami.innerHTML = currentName
    role.innerHTML = currentRole
    availability.innerHTML = currentAvailability
    age.innerHTML = currentAge
    lokasi.innerHTML = currentLokasi
    experience.innerHTML = currentExperience

    toggleBox()
    clearAllInputs()
})

function toggleBox(){
    if(isLowerBracketShow){
        isLowerBracketShow = false
        myBox.classList.remove('hide')
    }
    else{
        isLowerBracketShow = true
        myBox.classList.add('hide')
    }
}

//mau bikin kalo udah diisi valuenya ke-reset tp kalo ga ada isinya dia ga berubah, tp stuck di reset valuenya huhu
function clearAllInputs(event) {
    var allInputs = document.querySelectorAll('input')
    allInputs.forEach(singleInput => singleInput.value = '')
}

buttonSubmit.addEventListener('click', (event)=> {
    event.preventDefault()
    toggleBox()
})