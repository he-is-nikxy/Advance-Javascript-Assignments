let slideIndex = 0;
let slideshowInterval;
const slides = document.querySelectorAll('.slide');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
}

function startSlideshow() {
    showSlides();
    slideshowInterval = setInterval(showSlides, 3000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlides();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    showSlides();
}

startBtn.addEventListener('click', startSlideshow);
stopBtn.addEventListener('click', stopSlideshow);
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

document.addEventListener('DOMContentLoaded', function () {
    startSlideshow();
});

   