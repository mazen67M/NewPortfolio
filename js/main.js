document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle functionality is handled in darkMode.js
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 2rem';
        } else {
            navbar.style.padding = '1rem 2rem';
        }
    });
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .section-title, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
        
        // Animate skill progress bars
        const skillBars = document.querySelectorAll('.skill-progress-fill');
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            
            if (barPosition < windowHeight - 50) {
                const width = bar.getAttribute('data-width') + '%';
                bar.style.width = width;
            }
        });
        
        // Animate timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            
            if (itemPosition < windowHeight - 50) {
                // Add a slight delay for each item to create a cascade effect
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 200 * index);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Sample project data - This would typically come from a CMS or API
const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "Full-featured ASP.NET Core MVC web app with Clean Architecture principles, payment integration, and admin dashboard.",
        image: "./css/images/1.png",
        techStack: ["ASP.NET Core", "Entity Framework", "SQL Server", "Azure", "React"],
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "Healthcare Management System",
        description: "A comprehensive healthcare management application with patient records and appointment scheduling.",
        image: "https://via.placeholder.com/600x400",
        techStack: ["ASP.NET Core", "Entity Framework", "SQL Server", "Identity Server", "Bootstrap"],
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "Real Estate Listing Platform",
        description: "A property listing and search platform with advanced filtering and user accounts.",
        image: "https://via.placeholder.com/600x400",
        techStack: ["ASP.NET Core", "MongoDB", "Docker", "AWS", "Vue.js"],
        githubLink: "#",
        demoLink: "#"
    }
];

// Function to create project cards with tilt effect
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    const sideProjectsGrid = document.querySelector('.side-projects-grid');
    const labsGrid = document.querySelector('.labs-grid');
    
    // Clear existing content
    if (projectsGrid) projectsGrid.innerHTML = '';
    if (sideProjectsGrid) sideProjectsGrid.innerHTML = '';
    if (labsGrid) labsGrid.innerHTML = '';
    
    // Create project cards
    projectsData.forEach(project => {
        if (projectsGrid) {
            projectsGrid.appendChild(createProjectCard(project));
        }
    });
    
    // Create side project cards
    sideProjectsData.forEach(project => {
        if (sideProjectsGrid) {
            sideProjectsGrid.appendChild(createProjectCard(project));
        }
    });
    
    // Create labs cards
    labsData.forEach(project => {
        if (labsGrid) {
            labsGrid.appendChild(createProjectCard(project));
        }
    });
}

// Function to create a single project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Create card content
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" class="btn small-btn" target="_blank">GitHub</a>
                <a href="${project.demoLink}" class="btn small-btn primary-btn" target="_blank">Demo</a>
            </div>
        </div>
    `;
    
    return card;
}

// Call the function to create cards when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createProjectCards();
});

const sideProjectsData = [
    {
        id: "e-commerce-platform",
        title: "E-Commerce Platform",
        description: "Full-featured ASP.NET Core MVC web app with Clean Architecture principles, payment integration, and admin dashboard.",
        image: "./css/images/Ecommerce/Home.jpeg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "Clean Architecture", "Bootstrap", "JavaScript", "Redis"],
        githubLink: "https://github.com/mazen67M/E-Commerce-App-With-Recommendation",
        demoLink: "https://github.com/mazen67M/E-Commerce-App-With-Recommendation"
    },
    {
        id: "blog-platform",
        title: "Blog Platform",
        description: "Multi-user blogging system with ASP.NET Core MVC, Identity-based authentication, category management, and comments.",
        image: "./css/images/Blog/slider.jpeg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "ASP.NET Identity", "Bootstrap"],
        githubLink: "https://github.com/mazen67M/BlogProjectDotNET-9",
        demoLink: "https://github.com/mazen67M/BlogProjectDotNET-9"
    },
    {
        id: "book-verse",
        title: "Book Verse",
        description: "Library management system built with ASP.NET Core & SQL Server, supporting CRUD operations, user roles, and book reviewing system.",
        image: "./css/images/3.png",
        techStack: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "LINQ","ASP.NET WEB API", "JWT", "Google SMTP"],
        githubLink: "https://github.com/mazen67M/LibraryManagement-system-API",
        demoLink: "https://github.com/mazen67M/LibraryManagement-system-API"
    },
    {
        id: "cozy-corner",
        title: "CozyCorner",
        description: "Furniture e-commerce website using ASP.NET Core MVC + Bootstrap, supporting cart, wishlist, and admin product management.",
        image: "./css/images/CozyCorner/Home.jpg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "Clean Architecture", "Bootstrap", "JavaScript", "Redis","ASP.NET WEB API"],
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        demoLink: "https://github.com/ArwaAlaa1/CozyCorners"
    },
     {
        id: "ARTifactify",
        title: "ARTifactify",
        description: "Furniture e-commerce website using ASP.NET Core MVC + Bootstrap, supporting cart, wishlist, and admin product management.",
        image: "./css/images/CozyCorner/Home.jpg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "Clean Architecture", "Bootstrap", "JavaScript", "Redis","ASP.NET WEB API"],
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        demoLink: "https://github.com/ArwaAlaa1/CozyCorners"
    },
     {
        id: "SuperMarketSystem",
        title: "SuperMarketSystem",
        description: "Furniture e-commerce website using ASP.NET Core MVC + Bootstrap, supporting cart, wishlist, and admin product management.",
        image: "./css/images/CozyCorner/Home.jpg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "Clean Architecture", "Bootstrap", "JavaScript", "Redis","ASP.NET WEB API"],
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        demoLink: "https://github.com/ArwaAlaa1/CozyCorners"
    }
];

const labsData = [
    {
        title: "Authentication Demo",
        description: "A demonstration of different authentication methods in ASP.NET Core.",
        image: "https://via.placeholder.com/600x400",
        techStack: ["ASP.NET Core", "Identity", "JWT", "OAuth"],
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "Microservices Example",
        description: "A simple microservices architecture example with service communication.",
        image: "https://via.placeholder.com/600x400",
        techStack: ["ASP.NET Core", "Docker", "RabbitMQ", "gRPC"],
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "GraphQL API",
        description: "An example GraphQL API implementation with ASP.NET Core.",
        image: "https://via.placeholder.com/600x400",
        techStack: ["ASP.NET Core", "GraphQL", "Entity Framework"],
        githubLink: "#",
        demoLink: "#"
    }
];

// Function to create project cards
function createProjectCard(project) {
    const hasDetailPage = project.id ? true : false;
    const detailsLink = hasDetailPage ? `./projects/index.html?id=${project.id}` : project.githubLink;

    return `
        <div class="project-card" ${hasDetailPage ? `onclick="window.location.href='${detailsLink}'"` : ''}>
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${project.techStack.length > 4 ? `<span class="tech-tag more-tag">+${project.techStack.length - 4} more</span>` : ''}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" class="project-link github-link" target="_blank" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demoLink}" class="project-link demo-link" target="_blank" onclick="event.stopPropagation()">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                    ${hasDetailPage ? `
                        <a href="${detailsLink}" class="project-link details-link" onclick="event.stopPropagation()">
                            <i class="fas fa-arrow-right"></i> Details
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Populate project sections
document.addEventListener('DOMContentLoaded', function() {
    // Main projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(project => createProjectCard(project)).join('');
    }
    
    // Side projects
    const sideProjectsGrid = document.querySelector('.side-projects-grid');
    if (sideProjectsGrid) {
        sideProjectsGrid.innerHTML = sideProjectsData.map(project => createProjectCard(project)).join('');
    }
    
    // Labs
    const labsGrid = document.querySelector('.labs-grid');
    if (labsGrid) {
        labsGrid.innerHTML = labsData.map(project => createProjectCard(project)).join('');
    }

    const items = document.querySelectorAll(".timeline-item");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 });

        items.forEach(item => observer.observe(item));
});