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
        const windowHeight = window.innerHeight;
        const elements = document.querySelectorAll('.project-card, .section-title, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
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

// projectsData is no longer used directly — all real projects are in sideProjectsData below
const projectsData = [];


const sideProjectsData = [
    {
        id: "ARTifactify",
        title: "ARTifactify",
        description: "AI-powered mobile application identifying artworks and cultural artifacts from scanned photos. Graduation project built with Flutter & ASP.NET Core API.",
        image: "./css/images/ARTifactify/home.png",
        techStack: ["Flutter", "Dart", "ASP.NET Core Web API", "SQL Server", "Clean Architecture", "Gemini Vision AI"],
        githubLink: "https://github.com/mazen67M/ARTifactify",
        // TODO: Replace with live demo URL once deployed
        demoLink: null,
        demoAvailable: false,
        categories: ["websites", "apis"],
        featured: true
    },
    {
        id: "e-commerce-platform",
        title: "E-Commerce Platform",
        description: "Full-featured ASP.NET Core MVC web app with Clean Architecture principles, payment integration, and admin dashboard.",
        image: "./css/images/Ecommerce/Home.jpeg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "Clean Architecture", "Bootstrap", "JavaScript", "Redis"],
        githubLink: "https://github.com/mazen67M/E-Commerce-App-With-Recommendation",
        // TODO: Replace with live demo URL once deployed
        demoLink: null,
        demoAvailable: false,
        categories: ["websites", "other"]
    },
    {
        id: "blog-platform",
        title: "Blog Platform",
        description: "Multi-user blogging system with ASP.NET Core MVC, Identity-based authentication, category management, and comments.",
        image: "./css/images/Blog/home.jpeg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "ASP.NET Identity", "Bootstrap"],
        githubLink: "https://github.com/mazen67M/BlogProjectDotNET-9",
        // TODO: Replace with live demo URL once deployed
        demoLink: null,
        demoAvailable: false,
        categories: ["websites"]
    },
    {
        id: "book-verse",
        title: "Book Verse",
        description: "Library management system built with ASP.NET Core & SQL Server, supporting CRUD operations, user roles, and book reviewing system.",
        image: "./css/images/BookVerse/swagger-overview.png",
        techStack: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "LINQ", "ASP.NET WEB API", "JWT", "Google SMTP"],
        githubLink: "https://github.com/mazen67M/LibraryManagement-system-API",
        // TODO: Replace with live Swagger/demo URL once deployed
        demoLink: null,
        demoAvailable: false,
        categories: ["apis"]
    },
    {
        id: "cozy-corner",
        title: "CozyCorner",
        description: "Furniture e-commerce website using ASP.NET Core MVC + Bootstrap, supporting cart, wishlist, and admin product management.",
        image: "./css/images/CozyCorner/Home.jpg",
        techStack: ["ASP.NET Core MVC", "C#", "Entity Framework", "SQL Server", "Clean Architecture", "Bootstrap", "JavaScript", "Redis", "ASP.NET WEB API"],
        githubLink: "https://github.com/ArwaAlaa1/CozyCorners",
        // TODO: Replace with live demo URL once deployed
        demoLink: null,
        demoAvailable: false,
        categories: ["websites"]
    },
    {
        id: "SuperMarketSystem",
        title: "SuperMarket System",
        description: "Desktop Point of Sale (POS) and inventory system synchronized with an administrative ASP.NET Core web dashboard.",
        image: "./css/images/SuperMarket/pos.png",
        techStack: ["C#", "WinForms", "ASP.NET Core API", "SQL Server", "Entity Framework Core", "Bootstrap 5"],
        githubLink: "https://github.com/mazen67M/SuperMarketSystem",
        // TODO: Replace with live demo URL once deployed
        demoLink: null,
        demoAvailable: false,
        categories: ["desktop", "websites"]
    },
    {
        id: "restaurant-management-system",
        // English title only for international audience
        title: "Restaurant Management System",
        description: "A complete Windows desktop app for restaurant operations management — built for an Arabic-speaking market. Covers orders, delivery, inventory, kitchen workflow, and shift-based financial reports.",
        image: "./css/images/restaurantSystem/1.jpeg",
        techStack: ["C#", "WinForms", ".NET Framework", "SQL Server", "Entity Framework", "LINQ"],
        // Private repository
        githubLink: null,
        demoLink: null,
        demoAvailable: false,
        isPrivate: true,
        categories: ["desktop"]
    }
];

// labsData removed — placeholder entries deleted. Add real lab projects here when ready.
const labsData = [];

// Function to create project cards
function createProjectCard(project) {
    const hasDetailPage = project.id ? true : false;
    const detailsLink = hasDetailPage ? `./projects/index.html?id=${project.id}` : project.githubLink;
    
    const categoriesStr = project.categories ? project.categories.join(' ') : 'other';
    const featuredClass = project.featured ? 'featured-project' : '';
    const featuredBadge = project.featured ? '<span class="featured-badge">⭐ Featured Project</span>' : '';

    // Demo button: null = coming soon, false = coming soon, string = live link
    const demoBtn = (!project.demoLink || project.demoAvailable === false)
        ? `<span class="project-link demo-link coming-soon" title="Live demo coming soon" onclick="event.stopPropagation()">
               <i class="fas fa-clock"></i> Demo Soon
           </span>`
        : `<a href="${project.demoLink}" class="project-link demo-link" target="_blank" onclick="event.stopPropagation()">
               <i class="fas fa-external-link-alt"></i> Live Demo
           </a>`;

    // GitHub button: null + isPrivate = private badge, null = hidden, string = link
    const githubBtn = project.githubLink
        ? `<a href="${project.githubLink}" class="project-link github-link" target="_blank" onclick="event.stopPropagation()">
               <i class="fab fa-github"></i> GitHub
           </a>`
        : project.isPrivate
            ? `<span class="project-link private-link" title="Private repository — available upon request" onclick="event.stopPropagation()">
                   <i class="fas fa-lock"></i> Private Repo
               </span>`
            : '';

    return `
        <div class="project-card project-item ${featuredClass}" data-categories="${categoriesStr}" ${hasDetailPage ? `onclick="window.location.href='${detailsLink}'"` : ''}>
            <div class="project-categories-overlay">
                ${project.categories ? project.categories.map(cat => `<span class="cat-tag">${cat.charAt(0).toUpperCase() + cat.slice(1)}</span>`).join('') : ''}
            </div>
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                ${featuredBadge}
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${project.techStack.length > 4 ? `<span class="tech-tag more-tag">+${project.techStack.length - 4} more</span>` : ''}
                </div>
                <div class="project-links">
                    ${githubBtn}
                    ${demoBtn}
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

    // Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterBtns.length > 0 && projectItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter').toLowerCase();

                projectItems.forEach(item => {
                    const categories = item.getAttribute('data-categories').toLowerCase().split(' ');
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        item.classList.remove('hide');
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, 300); // Should match CSS transition duration
                    }
                });
            });
        });
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