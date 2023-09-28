// Obtén el elemento del encabezado (header)
const header = document.querySelector('header');

// Obtén la altura del encabezado
const headerHeight = header.clientHeight;

// Función para actualizar el estado del menú de navegación
function updateNavigation() {
    if (window.scrollY >= headerHeight) {
        // Si el usuario ha desplazado más allá de la altura del encabezado, fija el menú
        header.classList.add('fixed');
    } else {
        // Si el usuario está en la parte superior de la página, quita la clase 'fixed'
        header.classList.remove('fixed');
    }
}

// Agrega un event listener para detectar el scroll del usuario
window.addEventListener('scroll', updateNavigation);

// Llama a la función de actualización cuando se carga la página (en caso de que el usuario ya haya desplazado)
window.addEventListener('load', updateNavigation);
