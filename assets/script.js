// script.js
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".dropdown > a");
  const submenu = document.querySelector(".submenu");

  dropdown.addEventListener("click", function(e) {
    // Evita el salto solo si el enlace es "#"
    if (dropdown.getAttribute("href") === "#") {
      e.preventDefault();
      submenu.classList.toggle("active");
    }
  });

  // Cierra el menú cuando se hace clic en un servicio
  document.querySelectorAll(".submenu a").forEach(link => {
    link.addEventListener("click", () => {
      submenu.classList.remove("active");
    });
  });
});
