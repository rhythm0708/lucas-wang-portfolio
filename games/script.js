(function(){
    "use strict";
    console.log("reading js");

    // Feather icons.
    feather.replace();

    const imageCarousels = document.querySelectorAll(".image-slideshow");

    imageCarousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll('.slide');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

        prevButton.style.display = "none";
        nextButton.style.display = "none";
        // dotsContainer.style.display = "none";
    
        // Hover = Add controls.
        carousel.addEventListener("mouseover", function(){
            prevButton.style.display = "flex";
            nextButton.style.display = "flex";
            // dotsContainer.style.display = "flex";
        });
        carousel.addEventListener("mouseout", function(){
            prevButton.style.display = "none";
            nextButton.style.display = "none";
            // dotsContainer.style.display = "none";
        });

        // Make dots.
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                slides.forEach((slide, i) => {
                    slide.removeAttribute('data-active');
                    dotsContainer.children[i].classList.remove('active');
                    if (i === index) {
                        slide.setAttribute('data-active', '');
                        dot.classList.add('active');
                    }
                });
            });
            dotsContainer.appendChild(dot);
        });
    
        // Update dots on slide change.
        const updateDots = () => {
            const activeIndex = [...slides].findIndex(slide => slide.hasAttribute('data-active'));
            [...dotsContainer.children].forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        };
    
        prevButton.addEventListener('click', () => {
            const currentIndex = [...slides].findIndex(slide => slide.hasAttribute('data-active'));
            const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    
            slides[currentIndex].removeAttribute('data-active');
            slides[prevIndex].setAttribute('data-active', '');
            updateDots();
        });
    
        nextButton.addEventListener('click', () => {
            const currentIndex = [...slides].findIndex(slide => slide.hasAttribute('data-active'));
            const nextIndex = (currentIndex + 1) % slides.length;
    
            slides[currentIndex].removeAttribute('data-active');
            slides[nextIndex].setAttribute('data-active', '');
            updateDots();
        });
    });
})();