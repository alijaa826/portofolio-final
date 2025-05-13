const form = document.getElementById('contact-form');
const nameInput = fprm.name;
const emailInput = form.email;
const massageInput = form.massage;
const successMsg = document.getElementById('success-massage');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateEmail(email){
    return /^[^\s@]+[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function (e){
    e.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    let valid = true;
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        valid = false;
    }
    if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid emai address.';
        valid = false;
    }
    if (massageInput.value.trim() === '') {
        massageError.textContent = 'Please enter your massage.';
        valid = false;
    }
    if (valid) {
        successMsg.textContent = 'Thank you! Your massage has been sent.';
        form.reset();
    }
});