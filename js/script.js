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
        window.location.href = 'index.html'; // Redirecciona al índice (index)
    });
}
