// Cargar Tailwind dinámicamente con configuración responsiva
// Usamos async para no bloquear el renderizado
let tailwindScript = document.createElement("script");
tailwindScript.src = "https://cdn.tailwindcss.com";
tailwindScript.onload = function () {
    tailwind.config = {
        theme: {
            extend: {
                screens: {
                    'xs': '475px',
                    '3xl': '1920px',
                }
            }
        }
    }
};
document.head.appendChild(tailwindScript);

// Función para cargar archivos HTML dentro de los divs
async function includeHTML(id, file) {
    let response = await fetch(file);
    let text = await response.text();
    document.getElementById(id).innerHTML = text;
}

// Hacer includeHTML disponible globalmente
window.includeHTML = async function(id, file) {
    let response = await fetch(file);
    let text = await response.text();
    document.getElementById(id).innerHTML = text;
    return Promise.resolve();
}

// Cargar las secciones
// Cargar el navbar desde archivo externo
includeHTML("navbar", "./sections/navbar.html").then(() => {
    // Inicializar el menú móvil
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    
    if(btn && menu && icon) {
        btn.addEventListener('click', function() {
            menu.classList.toggle('open');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
});

includeHTML("inicio", "./sections/inicio.html");
includeHTML("sobre-mi", "./sections/sobre-mi.html");
includeHTML("tecnologias", "./sections/tecnologias.html");
includeHTML("especializacion", "./sections/especializacion.html");
includeHTML("proyectos", "./sections/proyectos.html");
includeHTML("contacto", "./sections/contacto.html");


