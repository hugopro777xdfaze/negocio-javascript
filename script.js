
const botonTema = document.getElementById("tema");
const selectorIdioma = document.getElementById("idioma");

function cambiarIdioma() {
    const idioma = selectorIdioma.value;

    document.querySelectorAll("[data-es]").forEach(function(elemento) {
        elemento.textContent = elemento.getAttribute("data-" + idioma);
    });

    document.querySelectorAll("[data-placeholder-es]").forEach(function(campo) {
        campo.placeholder = campo.getAttribute("data-placeholder-" + idioma);
    });

    document.documentElement.lang = idioma;

    actualizarBotonTema();
}

function actualizarBotonTema() {
    const idioma = selectorIdioma.value;
    const claro = document.body.classList.contains("claro");

    if (idioma === "es") {
        botonTema.textContent = claro ? "☾ Modo oscuro" : "☼ Modo claro";
    } else {
        botonTema.textContent = claro ? "☾ Dark mode" : "☼ Light mode";
    }
}

botonTema.addEventListener("click", function() {
    document.body.classList.toggle("claro");
    actualizarBotonTema();
});

selectorIdioma.addEventListener("change", cambiarIdioma);

cambiarIdioma();

const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const respuesta = document.getElementById("respuesta");

        if (selectorIdioma.value === "es") {
            respuesta.textContent = "Gracias por tu mensaje.";
        } else {
            respuesta.textContent = "Thank you for your message.";
        }

        formulario.reset();
    });
}
