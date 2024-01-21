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
    const reviewForm = document.getElementById('review-form');

    // Default initial rating (e.g., 3 stars)
    let userRating = 0;

    // Highlight stars according to the default rating
    highlightStars(userRating);
    ratingText.textContent = `Você avaliou com ${userRating} estrelas.`;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const ratingValue = this.getAttribute('data-value');
            userRating = ratingValue;
            ratingText.textContent = `Você avaliou com ${userRating} estrelas.`;
            resetStars();
            highlightStars(userRating);

            // Show the review form when a star is clicked
            reviewForm.style.display = 'block';
        });

        star.addEventListener('mouseover', function () {
            const ratingValue = this.getAttribute('data-value');
            highlightStars(ratingValue);
        });

        star.addEventListener('mouseout', function () {
            resetStars();
            highlightStars(userRating); // Keep highlighting the user's rating
        });
    });

    // Submit button click event
    const submitBtn = document.getElementById('submit-review-btn');
    submitBtn.addEventListener('click', function () {
        const titleInput = document.getElementById('review-title').value;
        const reviewInput = document.getElementById('review-text').value;

        // Add logic to handle the submission of the review (e.g., send to server, update UI)
        console.log(`Title: ${titleInput}, Review: ${reviewInput}, Rating: ${userRating}`);
        alert("Critica enviada com sucesso")
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

