document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simular um processo de cadastro
    alert('Cadastro bem-sucedido!');
    window.location.href = '/html/login.html'; // Redirecionar para a página de login
});
