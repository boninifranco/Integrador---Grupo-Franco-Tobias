document.addEventListener('DOMContentLoaded', () => {
    let juegos = JSON.parse(localStorage.getItem('juegos'));
    if (juegos) {
        pintarLista(juegos);
    }
});

function pintarLista(juegos) {
    let lista = document.getElementById('juegos-list');
    lista.innerHTML = '';
    juegos.forEach((juego) => {/*
        lista.innerHTML += `
            <li>
                <img class="juego-imagen" src="${juego.imagen}" alt="${juego.juego}">
                <span>${juego.juego}</span>
                <span>${juego.descripcion}</span>
            </li>
        `;*/
        lista.innerHTML += 
        `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img class="img-fluid" src="${juego.imagen}" alt="${juego.juego}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${juego.juego}</h5>
              <p class="card-text">${juego.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    `;
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
      window.location.href = '../index.html'; // Redirecciona al índice (index)
  });
}