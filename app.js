document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorContainer = document.getElementById('errorContainer')

    if(email == 'admin@example.com' && password == 'admin'){
        alert('Anda Berhasil Login!');
    } else {
        var errorMessage = document.createElement('div');
        errorMessage.textContent = 'Email atau Password salah'
        errorMessage.classList.add('alert');
        errorContainer.innerHTML = '';
        errorContainer.appendChild(errorMessage);
    }
});