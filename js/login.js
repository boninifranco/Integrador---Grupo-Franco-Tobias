'use strict';

let usuario = {
    nombre: 'admin123',
    contraseña: 'admin123'
};

let btnLogin = document.getElementById('login');
let btnRefreshCaptcha = document.getElementById('refreshCaptcha');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    validarLogin();
});

btnRefreshCaptcha.addEventListener('click', () => {
    generarCaptcha();
});

// Generar el captcha al cargar la página
window.addEventListener('load', () => {
    generarCaptcha();
});

function validarLogin() {
    let nombre = document.getElementById('username').value;
    let contraseña = document.getElementById('password').value;
    let captcha = document.getElementById('captcha').textContent;
    let captchaInput = document.getElementById('captchaInput').value;

    if (usuario.nombre === nombre.toLowerCase() && usuario.contraseña === contraseña && captchaInput === captcha) {
        window.location = '../index.html';
        sessionStorage.setItem('logged',true)
    } else {
        document.getElementById('errorIngreso').textContent = 'Usuario y/o contraseña incorrectos.';
        generarCaptcha();
    }
}

function generarCaptcha() {
    let captcha = document.getElementById('captcha');
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';

    for (let i = 0; i < 6; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    captcha.textContent = codigo;
}
