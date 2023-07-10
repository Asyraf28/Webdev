const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();
    const passwordValue = password.ariaValueMax.trim();
    const password2Value = password2.ariaValueMax.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username tidak boleh kosong');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email tidak boleh kosong');  
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email yang dimasukkan salah');   
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password tidak boleh kosong');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password check tidak boleh kosong');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Password tidak sesuai');
    } else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /><!@#%&/.test(email);
}