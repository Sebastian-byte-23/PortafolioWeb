// Cargar Tailwind dinámicamente con configuración responsiva
let tailwindScript = document.createElement("script");
tailwindScript.src = "https://cdn.tailwindcss.com";
tailwindScript.onload = function() {
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

// Cargar las secciones
includeHTML("navbar", "/sections/navbar.html");
includeHTML("inicio", "/sections/inicio.html");
includeHTML("sobre-mi", "/sections/sobre-mi.html");
includeHTML("tecnologias", "/sections/tecnologias.html");
includeHTML("especializacion", "/sections/especializacion.html");
includeHTML("proyectos", "/sections/proyectos.html");
includeHTML("contacto", "/sections/contacto.html");
