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
