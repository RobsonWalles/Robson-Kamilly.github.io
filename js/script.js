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

function enviarMensagemWhatsApp() {
  var nome = prompt("Digite seu nome:");
  if (nome !== null && nome !== "") {
    var mensagem =
      "Olá aqui é " +
      nome +
      ". Gostaria de confirmar se estarei presente no casamento do Robson e Kamilly dia 09/06/2024.";

    var numeroTelefone = "5562981783253";
    var url =
      "https://api.whatsapp.com/send?phone=" +
      numeroTelefone +
      "&text=" +
      encodeURIComponent(mensagem);
    window.open(url);
  }
}
