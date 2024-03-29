document.addEventListener("DOMContentLoaded", function () {
    function createParticles() {
        const particles = document.querySelector('.background-animations');

        const canvas = document.createElement('canvas');
        particles.appendChild(canvas);

        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');

        VanillaTilt.init(particles, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
        });

        const numParticles = 100;
        const particlesArray = [];

        for (let i = 0; i < numParticles; i++) {
            particlesArray.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 3 + 1,
                color: 'rgba(255, 255, 255, ' + Math.random() + ')',
                speed: Math.random() + 0.1,
                angle: Math.random() * 360,
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);

            particlesArray.forEach(particle => {
                particle.x += Math.cos(particle.angle) * particle.speed;
                particle.y += Math.sin(particle.angle) * particle.speed;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                if (particle.x < 0 || particle.x > width || particle.y < 0 || particle.y > height) {
                    particle.x = Math.random() * width;
                    particle.y = Math.random() * height;
                }
            });

            requestAnimationFrame(drawParticles);
        }

        drawParticles();
    }

    createParticles();
});

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        const movieTitle = card.querySelector('.movie-details h3').textContent.toLowerCase();

        if (movieTitle.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
function filterMovies() {
    const genreFilter = document.getElementById('genreFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        const movieGenre = card.getAttribute('data-genre').toLowerCase();
        const movieRating = parseFloat(card.getAttribute('data-rating'));

        const genreMatch = (genreFilter === 'all' || movieGenre.includes(genreFilter));
        const ratingMatch = (ratingFilter === 'all' || movieRating >= parseFloat(ratingFilter));

        if (genreMatch && ratingMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}






