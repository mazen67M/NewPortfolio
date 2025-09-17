document.addEventListener('DOMContentLoaded', function() {
    // Check if device supports hover
    if (window.matchMedia("(hover: hover)").matches) {
        initCustomCursor();
    }
});

function initCustomCursor() {
    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const cursorDotOutline = document.createElement('div');
    cursorDotOutline.className = 'cursor-dot-outline';
    document.body.appendChild(cursorDotOutline);
    
    // Set initial opacity after a short delay (for smooth appearance)
    setTimeout(() => {
        cursorDot.style.opacity = '1';
        cursorDotOutline.style.opacity = '1';
    }, 500);
    
    // Initialize cursor position variables
    let cursorVisible = true;
    let cursorEnlarged = false;
    
    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    
    // Dot position (with smoothing)
    let dotX = 0;
    let dotY = 0;
    
    // Outline position (with more smoothing)
    let outlineX = 0;
    let outlineY = 0;
    
    // Speed/smoothing factors
    const dotSmoothing = 0.2; // Higher = faster
    const outlineSmoothing = 0.1; // Higher = faster
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursor
        if (!cursorVisible) {
            cursorDot.style.opacity = '1';
            cursorDotOutline.style.opacity = '1';
            cursorVisible = true;
        }
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseout', function() {
        cursorDot.style.opacity = '0';
        cursorDotOutline.style.opacity = '0';
        cursorVisible = false;
    });
    
    // Click effect
    document.addEventListener('mousedown', function() {
        document.body.classList.add('cursor-click');
    });
    
    document.addEventListener('mouseup', function() {
        document.body.classList.remove('cursor-click');
    });
    
    // Hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, .project-card, .social-link, .nav-links li, .carousel-control');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', function() {
            document.body.classList.add('cursor-hover');
            cursorEnlarged = true;
        });
        
        el.addEventListener('mouseout', function() {
            document.body.classList.remove('cursor-hover');
            cursorEnlarged = false;
        });
    });
    
    // Animation loop for smooth cursor movement
    function animateCursor() {
        // Calculate smooth movement for dot
        dotX += (mouseX - dotX) * dotSmoothing;
        dotY += (mouseY - dotY) * dotSmoothing;
        
        // Calculate smooth movement for outline
        outlineX += (mouseX - outlineX) * outlineSmoothing;
        outlineY += (mouseY - outlineY) * outlineSmoothing;
        
        // Apply positions
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
        cursorDotOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
        
        // Continue animation
        requestAnimationFrame(animateCursor);
    }
    
    // Start animation
    animateCursor();
}