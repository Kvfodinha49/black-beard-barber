const whatsappBtn = document.getElementById("whatsappBtn");
const agendarBtn = document.getElementById("agendarBtn");

const mensagem =
    "Olá! Gostaria de agendar um horário na Black Beard Barber.";

function abrirWhatsApp() {
    window.open(
        "https://wa.me/5599984480666?text=" + encodeURIComponent(mensagem),
        "_blank"
    );
}

if (whatsappBtn) {
    whatsappBtn.addEventListener("click", abrirWhatsApp);
}

if (agendarBtn) {
    agendarBtn.addEventListener("click", abrirWhatsApp);
}


/* MENU */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("ativo");
    });

    const linksMenu = document.querySelectorAll("#menu a");

    linksMenu.forEach(function(link) {

        link.addEventListener("click", function() {
            menu.classList.remove("ativo");
        });

    });
}