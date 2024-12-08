document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelectorAll(".carousel-images img");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const dots = document.querySelectorAll(".carousel-indicators .dot");
    const carouselContainer = document.querySelector(".carousel-section");
    let currentIndex = 0;
    let timer;

    const showSlide = (index) => {
        carouselImages.forEach((img, i) => {
            img.classList.remove("active");
            img.style.opacity = 0;
            dots[i].classList.remove("active");
        });

        carouselImages[index].classList.add("active");
        carouselImages[index].style.opacity = 1;
        dots[index].classList.add("active");
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        showSlide(currentIndex);
    };

    const startAutoplay = () => {
        timer = setInterval(nextSlide, 5000); 
    };

    const stopAutoplay = () => {
        clearInterval(timer);
    };

    nextBtn.addEventListener("click", () => {
        stopAutoplay();
        nextSlide();
        startAutoplay();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoplay();
        prevSlide();
        startAutoplay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            stopAutoplay();
            currentIndex = index;
            showSlide(currentIndex);
            startAutoplay();
        });
    });

    carouselContainer.addEventListener("mouseenter", stopAutoplay);
    carouselContainer.addEventListener("mouseleave", startAutoplay);

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        } else if (e.key === "ArrowLeft") {
            stopAutoplay();
            prevSlide();
            startAutoplay();
        }
    });
    showSlide(currentIndex);
    startAutoplay();

    document.addEventListener('scroll', () => {
        const parallaxSection = document.querySelector('.parallax-section');
        const sectionTop = parallaxSection.offsetTop;
        const scrollPosition = window.scrollY;
    
        if (scrollPosition > sectionTop - window.innerHeight && scrollPosition < sectionTop + parallaxSection.offsetHeight) {
            const offset = (scrollPosition - sectionTop) * 0.5;
            parallaxSection.style.backgroundPositionY = `${offset}px`;
        }
    });    
    
});
