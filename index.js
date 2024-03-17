document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const dotsContainer = document.querySelector('.carousel-dots');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dotClass = 'carousel-dot';
    let currentSlide = 0;
    let timer;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentSlide * 340}px)`;
        const activeDot = document.querySelector(`.${dotClass}.active`);
        if (activeDot) {
            activeDot.classList.remove('active');
        }
        dotsContainer.children[currentSlide].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        updateCarousel();
    }

    function startAutoSlide() {
        timer = setInterval(nextSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)
    }

    function stopAutoSlide() {
        clearInterval(timer);
    }

    function createDots() {
        for (let i = 0; i < carouselItems.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add(dotClass);
            dot.addEventListener('click', function() {
                currentSlide = i;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        }
        dotsContainer.children[currentSlide].classList.add('active');
    }

    createDots();
    startAutoSlide();

    // Pause auto slide on mouse enter
    carouselInner.addEventListener('mouseenter', stopAutoSlide);

    // Resume auto slide on mouse leave
    carouselInner.addEventListener('mouseleave', startAutoSlide);
});