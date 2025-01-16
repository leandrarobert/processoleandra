const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!email.value || !password.value) {
        message.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    if (!isValidEmail(email.value)) {
        message.textContent = 'E-mail inválido.';
        return;
    }

    if (password.value.length < 6) {
        message.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
    }

    
    message.textContent = 'Login realizado com sucesso!';
});

function isValidEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}