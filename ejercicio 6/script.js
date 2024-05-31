function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseInt(document.getElementById('altura').value);
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre === '' || nombre.length > 50) {
        mensaje.textContent = 'El nombre no puede estar vacío y debe ser de un máximo de 50 caracteres.';
        mensaje.style.color = 'red';
        return;
    }
    if (apellido === '' || apellido.length > 50) {
        mensaje.textContent = 'El apellido no puede estar vacío y debe ser de un máximo de 50 caracteres.';
        mensaje.style.color = 'red';
        return;
    }
    if (edad < 0 || edad < 18) {
        mensaje.textContent = 'La edad no puede ser negativa y debes ser mayor de edad.';
        mensaje.style.color = 'red';
        return;
    }
    if (altura < 0 || altura > 230) {
        mensaje.textContent = 'La altura no puede ser negativa y no puede ser mayor a 230 cm.';
        mensaje.style.color = 'red';
        return;
    }
    if (email === '' || !email.includes('@')) {
        mensaje.textContent = 'El correo electrónico no puede estar vacío y debe incluir el "@"';
        mensaje.style.color = 'red';
        return;
    }

    mensaje.textContent = 'Todas las validaciones son correctas.';
    mensaje.style.color = 'green';
}
