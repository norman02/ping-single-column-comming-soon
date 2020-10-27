const email = document.getElementById('email')
const submit = document.getElementById('submit')
const message = document.getElementById('error-msg')

const isEmail = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate = ()=> {
    const input = document.getElementById('email').value
    if(!isEmail(input)) {
        email.classList.add('error')
        message.classList.add('error')

    } else {
        email.classList.remove('error')
        message.classList.remove('error')
        alert('Thank you for your submission!')
    }
}

submit.addEventListener('click', e => {
    e.preventDefault()
    validate()
})