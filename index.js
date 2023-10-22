document.addEventListener("DOMContentLoaded", function () {
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
    sr.reveal('.presentacion',{
        duration: 3000,
        origin:'left',
        distance: '-100px',
    });
    sr.reveal('.habilidades',{
        duration: 3000,
        origin:'bottom',
        distance: '-100px',
    });
    sr.reveal('.iconos-container',{
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
    sr.reveal('.contacto',{
        duration: 3000,
        origin:'left',
        distance: '100px',
    });
    