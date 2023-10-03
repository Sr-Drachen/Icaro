document.addEventListener("DOMContentLoaded", function () {
  const stardContainer = document.querySelector(".stard");
  const space = document.querySelector(".space");

  // Verifica si el navegador admite el modo de pantalla completa.
  if (document.documentElement.requestFullscreen) {
    // Solicita el modo de pantalla completa en el elemento raíz (document.documentElement).
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  }

  // Asegúrate de que los elementos se oculten después de un tiempo (opcional).

  // Asegúrate de que el video de fondo esté en pantalla completa.
  if (backVideo.requestFullscreen) {
    backVideo.requestFullscreen();
  } else if (backVideo.mozRequestFullScreen) {
    backVideo.mozRequestFullScreen();
  } else if (backVideo.webkitRequestFullscreen) {
    backVideo.webkitRequestFullscreen();
  }
});
