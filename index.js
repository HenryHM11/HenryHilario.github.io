window.addEventListener("load", function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 0);
});

window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
});


document.addEventListener("DOMContentLoaded", function () {
    // Manejar el desplazamiento suave al hacer clic en los enlaces del menú
    var links = document.querySelectorAll("nav ul li a");
    for (var link of links) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var target = document.getElementById(targetId);
            target.scrollIntoView({ behavior: "smooth" });
        });
    }
    
});

window.sr = ScrollReveal();

sr.reveal('.habilidades',{
    duration: 3000,
    origin:'bottom',
    distance: '-100px',
});
sr.reveal('.containerh',{
    duration: 3000,
    origin:'top',
    distance: '-100px',
});
sr.reveal('.titulo',{
    duration: 3000,
    origin:'bottom',
    distance: '-100px',
});
sr.reveal('.proyecto1',{
    duration: 3000,
    origin:'top',
    distance: '-100px',
});
sr.reveal('.proyecto2',{
    duration: 3000,
    origin:'top',
    distance: '-100px',
});
sr.reveal('.contacto',{
    duration: 3000,
    origin:'left',
    distance: '100px',
});


//
