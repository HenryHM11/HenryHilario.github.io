window.addEventListener("load", function () {
    setTimeout(function () {
    const loader = document.querySelector(".loader");
    loader.classList.add("fade-out");
    
      // Agrega un retraso adicional para ocultar la pantalla de carga después del desvanecimiento
    setTimeout(function () {
        loader.style.display = "none";
      }, 1000); // 1 segundo
    }, 900); // 5000 milisegundos (5 segundos)
});