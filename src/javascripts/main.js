//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

const images = [
    'images/TOE1.png',
    'images/TOE2.png',
    'images/TOE3.png',
    'images/TOE4.png',
    'images/TOE5.png'
  ];

  let currentIndex = 0;

  function updateCarousel() {
    const container = document.getElementById('carousel');
    container.innerHTML = '';

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    const visibleImages = [prevIndex, currentIndex, nextIndex];

    visibleImages.forEach((index, i) => {
      const card = document.createElement('div');
      card.classList.add('carousel-card');
      if (index === currentIndex) {
        card.classList.add('active');
      }

      const img = document.createElement('img');
      img.src = images[index];
      img.alt = `Image ${index + 1}`;
      card.appendChild(img);
      container.appendChild(card);
    });
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

    document.querySelector('#prevBtn').addEventListener('click', prevSlide);
    document.querySelector('#nextBtn').addEventListener('click', nextSlide);

  updateCarousel();
