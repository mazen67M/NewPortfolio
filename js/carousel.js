document.addEventListener('DOMContentLoaded', function() {
    // Initialize the testimonials carousel
    initTestimonialsCarousel();
});

function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!carousel || items.length === 0) return;
    
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Set initial active state
    items[0].classList.add('active');
    dots[0].classList.add('active');
    setActiveSlide(currentIndex);
    
    // Event listeners for controls
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            goToPrevSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            goToNextSlide();
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
    });
    
    // Touch events for swipe functionality
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    // Auto-advance the carousel every 5 seconds
    let autoplayInterval = setInterval(goToNextSlide, 5000);
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', function() {
        clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', function() {
        autoplayInterval = setInterval(goToNextSlide, 5000);
    });
    
    // Functions to control the carousel
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        setActiveSlide(currentIndex);
    }
    
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        setActiveSlide(currentIndex);
    }
    
    function goToSlide(index) {
        currentIndex = index;
        setActiveSlide(currentIndex);
    }
    
    function setActiveSlide(index) {
        // Update carousel items
        items.forEach((item, i) => {
            item.classList.remove('active');
            item.style.transform = `translateX(${100 * (i - index)}%)`;
            
            // Add active class to current item
            if (i === index) {
                item.classList.add('active');
            }
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (swipeDistance > swipeThreshold) {
            // Swiped right, go to previous slide
            goToPrevSlide();
        } else if (swipeDistance < -swipeThreshold) {
            // Swiped left, go to next slide
            goToNextSlide();
        }
    }
}