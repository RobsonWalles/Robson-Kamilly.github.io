document.addEventListener("DOMContentLoaded", function () {
  var submenuLinks = document.querySelectorAll(".font-3-g");

  submenuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var submenuContent = this.nextElementSibling;
      submenuContent.classList.toggle("show");
    });
  });
});

// Função para abrir o popup
function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Função para fechar o popup
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
