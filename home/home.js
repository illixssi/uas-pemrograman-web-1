document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector('.home-carousel-inner');
    const carouselItems = document.querySelectorAll('.home-carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    const firstClone = carouselItems[0].cloneNode(true);
    carouselInner.appendChild(firstClone);

    function moveToNextSlide() {
        currentIndex++;
        carouselInner.style.transition = 'transform 1s ease';
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (currentIndex >= totalItems) {
            setTimeout(() => {
                carouselInner.style.transition = 'none';
                carouselInner.style.transform = 'translateX(0)';
                currentIndex = 0;
            }, 1000);
        }
    }

    setInterval(moveToNextSlide, 3000);
});
