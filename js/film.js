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
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');
  const ratingText = document.getElementById('selected-rating');

  // Avaliação padrão inicial (por exemplo, 3 estrelas)
  let userRating = 0;

  // Destacar estrelas conforme avaliação padrão
  highlightStars(userRating);
  ratingText.textContent = `Você avaliou com ${userRating} estrelas.`;

  stars.forEach(star => {
      star.addEventListener('click', function () {
          const ratingValue = this.getAttribute('data-value');
          userRating = ratingValue;
          ratingText.textContent = `Você avaliou com ${userRating} estrelas.`;
          resetStars();
          highlightStars(userRating);
      });

      star.addEventListener('mouseover', function () {
          const ratingValue = this.getAttribute('data-value');
          highlightStars(ratingValue);
      });

      star.addEventListener('mouseout', function () {
          resetStars();
          highlightStars(userRating); // Manter destaque na avaliação do usuário
      });
  });

  function highlightStars(value) {
      stars.forEach(star => {
          if (star.getAttribute('data-value') <= value) {
              star.style.color = '#ffd700';
          }
      });
  }

  function resetStars() {
      stars.forEach(star => {
          star.style.color = '#ccc';
      });
  }
});


