document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simular uma validação de login
    if (username === 'user' && password === 'password') {
        alert('Login bem-sucedido!');
        window.location.href = '/index.html'; // Redirecionar para a página inicial
    } else {
        alert('Usuário ou senha inválidos.');
    }
});
