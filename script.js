(function(){
    "use strict";
    console.log("reading js");

    // Feather icons.
    feather.replace();

    const carousels = document.querySelectorAll(".card-list");
    const CAROUSEL_ITEMS = 5;

    carousels.forEach((carousel) => {
        const leftArrow = carousel.querySelector(".left-arrow");
        const rightArrow = carousel.querySelector(".right-arrow");
        const items = Array.from(carousel.querySelectorAll(".card-item"));
        const totalItems = items.length;
        let currentIndex = 0;

        if(totalItems <= CAROUSEL_ITEMS) {
            leftArrow.style.display = "none";
            rightArrow.style.display = "none";
        }

        // Left arrow click event
        leftArrow.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel(items, currentIndex, "slide-right");
            }
        });

        // Right arrow click event
        rightArrow.addEventListener("click", () => {
            if (currentIndex < totalItems - CAROUSEL_ITEMS) {
                currentIndex++;
                updateCarousel(items, currentIndex, "slide-left");
            }
        });

        // Initialize the carousel
        updateCarousel(items, currentIndex);
    });

    // FUNCTION: Update the carousel.
    function updateCarousel(items, currentIndex, animationDirection = undefined) {
        items.forEach((item, index) => {
            item.classList.remove("visible", "hidden", "slide-left", "slide-right");
            if (index >= currentIndex && index < currentIndex + CAROUSEL_ITEMS) {
                if(animationDirection == undefined) {
                    item.classList.add("visible");
                } else {
                    item.classList.add("visible", animationDirection);
                }
            } else {
                item.classList.add("hidden", animationDirection);
            }
        });
    }
})()

