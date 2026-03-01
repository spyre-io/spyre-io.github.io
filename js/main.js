// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 50);
});

// Mobile hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Trailer modal
const trailerBtn = document.getElementById('trailer-btn');
const trailerModal = document.getElementById('trailer-modal');
const trailerVideo = trailerModal.querySelector('.modal__video');
const modalClose = trailerModal.querySelector('.modal__close');
const modalBackdrop = trailerModal.querySelector('.modal__backdrop');

function openTrailer() {
  trailerModal.classList.add('modal--open');
  trailerVideo.play();
}

function closeTrailer() {
  trailerModal.classList.remove('modal--open');
  trailerVideo.pause();
  trailerVideo.currentTime = 0;
}

trailerBtn.addEventListener('click', openTrailer);
modalClose.addEventListener('click', closeTrailer);
modalBackdrop.addEventListener('click', closeTrailer);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && trailerModal.classList.contains('modal--open')) {
    closeTrailer();
  }
});

// Fade-in cards on scroll
const cards = document.querySelectorAll('.game-card');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 120);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
cards.forEach((card) => observer.observe(card));
