document.addEventListener('DOMContentLoaded', function() {
    // Load particles.js configuration
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#0dcaf0"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0dcaf0",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Update particle colors based on theme
    function updateParticleColors() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const particleColor = isDarkMode ? '#0dcaf0' : '#6610f2';
        const lineColor = isDarkMode ? '#0dcaf0' : '#6610f2';
        
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            // Update particle colors
            window.pJSDom[0].pJS.particles.color.value = particleColor;
            window.pJSDom[0].pJS.particles.line_linked.color = lineColor;
            
            // Refresh particles
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }
    
    // Listen for theme changes
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Wait a bit for the theme to change before updating particles
            setTimeout(updateParticleColors, 100);
        });
    }
    
    // Initial color setup
    updateParticleColors();
});