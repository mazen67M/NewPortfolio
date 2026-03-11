document.addEventListener('DOMContentLoaded', function() {
    // Create splash screen elements
    createSplashScreen();
    
    // Hide splash screen after content is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            const splashScreen = document.querySelector('.splash-screen');
            splashScreen.classList.add('hidden');
            
            // Remove splash screen from DOM after transition
            setTimeout(function() {
                splashScreen.remove();
                // Enable scrolling on body
                document.body.style.overflow = 'auto';
            }, 500);
        }, 1200); // Show splash for a shorter time
    });
});

function createSplashScreen() {
    // Disable scrolling while splash screen is visible
    document.body.style.overflow = 'hidden';
    
    // Create splash screen container
    const splashScreen = document.createElement('div');
    splashScreen.className = 'splash-screen';
    
    // Create logo container
    const logoContainer = document.createElement('div');
    logoContainer.className = 'splash-logo';
    
    // Create SVG logo
    const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgLogo.setAttribute('viewBox', '0 0 100 100');
    svgLogo.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
    // Create logo path - simple P shape for Portfolio
    const logoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    logoPath.setAttribute('d', 'M30,20 L70,20 C80,20 85,30 85,40 C85,50 80,60 70,60 L50,60 L50,80 L30,80 Z M50,40 L65,40 C70,40 70,45 65,45 L50,45 Z');
    logoPath.setAttribute('class', 'logo-path');
    
    // Append path to SVG
    svgLogo.appendChild(logoPath);
    logoContainer.appendChild(svgLogo);
    
    // Create splash text
    const splashText = document.createElement('div');
    splashText.className = 'splash-text';
    splashText.textContent = 'Portfolio';
    
    // Create loading bar
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    
    const loadingProgress = document.createElement('div');
    loadingProgress.className = 'loading-progress';
    loadingBar.appendChild(loadingProgress);
    
    // Append all elements to splash screen
    splashScreen.appendChild(logoContainer);
    splashScreen.appendChild(splashText);
    splashScreen.appendChild(loadingBar);
    
    // Append splash screen to body
    document.body.appendChild(splashScreen);
}