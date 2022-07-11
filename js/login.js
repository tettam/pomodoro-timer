const formUser = document.querySelector('.form-user')

const user = document.querySelector('.user')
const passwordOne = document.querySelector('.passwordOne')
const passwordTwo = document.querySelector('.passwordTwo')
const submitForm = document.querySelector('.submitForm')

const headerTitle = document.querySelector('.header-title')

const checkForm = () => {
    setInterval(() => {     
        if(user.value == '' || passwordOne.value == '' || passwordTwo.value == '') {
            submitForm.disabled = true
        } else {
            submitForm.disabled = false
        }
    }, 1000);
}
checkForm()


headerTitle.addEventListener('click', () => {
    const url = 'https://tettam.github.io/pomodoro-timer'
    const openHeaderTitle = window.location.href = url
})


const validatorForm = (event) => {
    event.preventDefault()
    console.log('Continuar')
}

formUser.addEventListener('submit', validatorForm)

