document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtns = document.querySelectorAll(".dropdown button");

    dropdownBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        // Toggle the visibility of the corresponding dropdown content
        var dropdownContent = btn.nextElementSibling;
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
      });
    });
  });