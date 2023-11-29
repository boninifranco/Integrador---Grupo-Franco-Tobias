'use strict';

let juegos = [];

// Función para obtener los juegos almacenados en localStorage
function obtenerJuegosGuardados() {
  let juegosGuardados = localStorage.getItem('juegos');
  if (juegosGuardados) {
    juegos = JSON.parse(juegosGuardados);
  }
}

// Función para guardar los juegos en localStorage
function guardarJuegos() {
  localStorage.setItem('juegos', JSON.stringify(juegos));
}

// Cargar los juegos guardados al cargar la página
obtenerJuegosGuardados();
pintarLista();

let agregarElemento = document.getElementById('btnAgregar');
agregarElemento.addEventListener('click', (e) => {
  e.preventDefault();
  let juego = document.getElementById('juego').value;
  let descripcion = document.getElementById('descripcion').value;
  let imagenInput = document.getElementById('imagen');
  let imagen = imagenInput.files[0]; // Obtener el archivo de imagen

  // Utilizar FileReader para leer el archivo de imagen como datos base64
  let reader = new FileReader();
  reader.onload = function (event) {
    let imagenBase64 = event.target.result;
    agregar(juego, descripcion, imagenBase64);
  };
  reader.readAsDataURL(imagen);
});

function modificar(idAModificar) {
  let juego = document.getElementById('juego').value;
  let descripcion = document.getElementById('descripcion').value;
  let imagenInput = document.getElementById('imagen');
  let imagen = imagenInput.files[0];

  let reader = new FileReader();
  reader.onload = function (event) {
    let imagenBase64 = event.target.result;
    for (let i = 0; i < juegos.length; i++) {
      if (juegos[i].id == idAModificar) {
        juegos[i].juego = juego;
        juegos[i].descripcion = descripcion;
        juegos[i].imagen = imagenBase64;
      }
    }
    guardarJuegos(); // Guardar los juegos actualizados
    pintarLista();
  };
  reader.readAsDataURL(imagen);
}

function eliminar(id) {
  console.log('eliminar', id);
  for (let i = 0; i < juegos.length; i++) {
    if (juegos[i].id == id) {
      juegos.splice(i, 1);
    }
  }
  guardarJuegos(); // Guardar los juegos actualizados
  pintarLista();
}

function agregar(juego, descripcion, imagenBase64) {
  let nuevoJuego = {
    id: juegos.length > 0 ? juegos[juegos.length - 1].id + 1 : 1,
    juego: juego,
    descripcion: descripcion,
    imagen: imagenBase64
  };
  juegos.push(nuevoJuego);
  guardarJuegos(); // Guardar los juegos actualizados
  pintarLista();
}

function pintarLista() {
  let lista = document.getElementById('juegos-list');
  lista.innerHTML = '';
  juegos.forEach((juego) => {
    let checkboxId = `checkbox-${juego.id}`; // Generar un ID único para cada checkbox
    lista.innerHTML += `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img class="img-fluid" src="${juego.imagen}" alt="${juego.juego}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${juego.juego}</h5>
              <p class="card-text">${juego.descripcion}</p>
              <button id="${juego.id}" onclick="eliminar(${juego.id})" class="btn btn-danger">Eliminar</button>
              <button id="${juego.id}" onclick="modificar(${juego.id})" class="btn btn-primary">Modificar</button>
              <input type="checkbox" id="${checkboxId}">
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

document.getElementById('btnEliminarSeleccionado').addEventListener('click', () => {
  eliminarSeleccionados();
});

function eliminarSeleccionados() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    let id = checkbox.id.replace('checkbox-', '');
    eliminar(id);
  });
}
function sesionLog() {
  let logged = sessionStorage.getItem('logged');
  let loginTab = document.getElementById('login');
  let logoutTab = document.getElementById('logout');
  let inventarioTab = document.getElementById('inventario');

  if (logged === 'true') {
      loginTab.style.display = 'none';
      logoutTab.style.display = 'block';
      inventarioTab.style.display = 'block';
  } else {
      loginTab.style.display = 'block';
      logoutTab.style.display = 'none';
      inventarioTab.style.display = 'none';
  }

  logoutTab.addEventListener('click', (e) => {
      sessionStorage.setItem('logged', false);
      window.location.href = '../index.html'; // Redirecciona al index
  });
}
