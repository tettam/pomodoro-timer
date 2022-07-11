const formUser = document.querySelector('.form-user')

const user = document.querySelector('.user')
const passwordOne = document.querySelector('.passwordOne')
const passwordTwo = document.querySelector('.passwordTwo')
const submitForm = document.querySelector('.submitForm')

//const input = document.querySelectorAll('input')
//console.log(input)




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




const validatorForm = (event) => {
    event.preventDefault()
    console.log('Continuar')
}

formUser.addEventListener('submit', validatorForm)

