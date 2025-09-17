document.addEventListener('DOMContentLoaded', function() {
    // Elements to reveal on scroll
    const sections = document.querySelectorAll('.section');
    
    // Add initial hidden class to all sections except hero and experience
    sections.forEach(section => {
        if (!section.classList.contains('hero-section') && !section.classList.contains('experience-section')) { // Don't hide hero and experience sections
            section.classList.add('reveal-section');
        }
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll reveal
    function handleScrollReveal() {
        sections.forEach(section => {
            if (isInViewport(section) && section.classList.contains('reveal-section')) {
                section.classList.add('revealed');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollReveal);
    
    // Check on initial load
    handleScrollReveal();
});