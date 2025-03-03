document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
  
    if (username === 'usuario' && password === 'contraseña') {
      alert('Inicio de sesión exitoso');

        window.location.href = 'pag.html';




      errorMsg.textContent = '';
    } else {
      errorMsg.textContent = 'Nombre de usuario o contraseña incorrectos';
    }
  });
  