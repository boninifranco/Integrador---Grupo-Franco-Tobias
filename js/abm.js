'use strict'
let form = document.getElementById ('miForm');
let juegosList = document.getElementById('juegos-list');

//Envio de formulario

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let juego = document.getElementById('juego').value;
    let descripcion = document.getElementById('descripcion-juego').value;

    let listarJuegos = document.createElement('li');
    let imagen = document.createElement('img');
    
    imagen.src = URL.createObjectURL(foto.files[0]);

    // Agregar la imagen, juego y descripción al elemento <li>
    listarJuegos.appendChild(imagen);
    listarJuegos.appendChild(document.createTextNode(juego + ' ' + descripcion));

    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    listarJuegos.appendChild(botonEliminar);

    // Agregar el elemento <li> al principio de la lista
    juegosList.insertBefore(listarJuegos, juegosList.firstChild);

    form.reset();
});

// Eliminar elementos al hacer clic en el botón "eliminar"
juegosList.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'BUTTON') {
        e.target.parentNode.remove();
    }
});