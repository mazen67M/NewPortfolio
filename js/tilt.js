document.addEventListener('DOMContentLoaded', function() {
    // Function to apply tilt effect to elements
    function applyTiltEffect() {
        // Select all project cards
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            // Add event listeners for mouse movement
            card.addEventListener('mousemove', handleTilt);
            card.addEventListener('mouseleave', resetTilt);
        });
    }
    
    // Handle the tilt effect based on mouse position
    function handleTilt(e) {
        const card = this;
        const cardRect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to the card
        const mouseX = e.clientX - cardRect.left;
        const mouseY = e.clientY - cardRect.top;
        
        // Calculate the percentage position
        const percentX = mouseX / cardRect.width;
        const percentY = mouseY / cardRect.height;
        
        // Calculate the tilt angle (max 15 degrees)
        const tiltX = (percentY - 0.5) * 15;
        const tiltY = (0.5 - percentX) * 15;
        
        // Apply the transform
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
        
        // Add a subtle shadow effect
        const shadowX = (percentX - 0.5) * 20;
        const shadowY = (percentY - 0.5) * 20;
        const shadowColor = document.body.classList.contains('dark-mode') ? 'var(--tilt-shadow-dark)' : 'var(--tilt-shadow-light)';
        card.style.boxShadow = `${shadowX}px ${shadowY}px 20px ${shadowColor}`;
        
        // Add a subtle highlight effect
        const glareX = percentX * 100;
        const glareY = percentY * 100;
        const glareColor = document.body.classList.contains('dark-mode') ? 'var(--tilt-glare-dark)' : 'var(--tilt-glare-light)';
        card.style.background = `linear-gradient(${glareX}deg, ${glareColor} 0%, rgba(255, 255, 255, 0) 80%), 
                                var(--card-bg-${document.body.classList.contains('dark-mode') ? 'dark' : 'light'})`;
    }
    
    // Reset the card to its original state
    function resetTilt() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        this.style.boxShadow = '0 4px 6px var(--card-shadow-light)';
        this.style.background = '';
        
        // Reset background based on theme
        if (document.body.classList.contains('dark-mode')) {
            this.style.boxShadow = '0 4px 6px var(--card-shadow-dark)';
        }
    }
    
    // Initialize the tilt effect
    applyTiltEffect();
    
    // Re-apply tilt effect when project cards are dynamically added
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                applyTiltEffect();
            }
        });
    });
    
    // Observe changes to the project grids
    const projectGrids = document.querySelectorAll('.projects-grid, .side-projects-grid, .labs-grid');
    projectGrids.forEach(grid => {
        observer.observe(grid, { childList: true });
    });
});