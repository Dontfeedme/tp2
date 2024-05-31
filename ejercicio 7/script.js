document.addEventListener('DOMContentLoaded', () => {
    const listaUsuarios = document.getElementById('lista-usuarios');
    const listaTareas = document.getElementById('lista-tareas');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const usuarioDiv = document.createElement('div');
                usuarioDiv.classList.add('usuario');
                usuarioDiv.innerHTML = `
                    <div>
                        <p><strong>ID:</strong> ${usuario.id}</p>
                        <p><strong>Nombre:</strong> ${usuario.name}</p>
                        <p><strong>Nombre de Usuario:</strong> ${usuario.username}</p>
                        <p><strong>Email:</strong> ${usuario.email}</p>
                        <p><strong>Sitio Web:</strong> ${usuario.website}</p>
                    </div>
                    <button onclick="mostrarTareasAleatorias(${usuario.id})">Ver Tareas</button>
                `;
                listaUsuarios.appendChild(usuarioDiv);
            });
        })
        .catch(error => console.error('Error al obtener los usuarios:', error));
});

