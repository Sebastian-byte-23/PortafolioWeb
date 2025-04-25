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
    const menuLinks = menu?.querySelectorAll('a');

    function toggleMenu() {
        const isOpen = menu.classList.toggle('open');
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-times', isOpen);
        btn.setAttribute('aria-expanded', isOpen.toString());
    }

    if(btn && menu && icon) {
        const closeBtn = document.getElementById('close-menu-button');
        
        btn.addEventListener('click', toggleMenu);
        closeBtn?.addEventListener('click', toggleMenu);
        
        // Cerrar menú al hacer clic en enlaces
        menuLinks?.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if(!menu.contains(e.target) && !btn.contains(e.target) && menu.classList.contains('open')) {
                toggleMenu();
            }
        });
    }
});

includeHTML("inicio", "./sections/inicio.html");
includeHTML("sobre-mi", "./sections/sobre-mi.html");
includeHTML("tecnologias", "./sections/tecnologias.html");
includeHTML("especializacion", "./sections/especializacion.html");
includeHTML("proyectos", "./sections/proyectos.html");
includeHTML("contacto", "./sections/contacto.html");


