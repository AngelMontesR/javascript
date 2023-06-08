/*
    ===== Código de JavaScript =====
    Campo de texto, tomar el valor y mostrarlo en pantalla
*/

const nombre = prompt('¿Cuál es tu nombre?');
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;