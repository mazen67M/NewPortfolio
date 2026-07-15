// ========================================
// Project Detail Page JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        showErrorMessage('Project not found. Redirecting to projects page...');
        setTimeout(() => {
            window.location.href = '../index.html#projects';
        }, 2000);
        return;
    }

    // Load project data
    const project = getProjectById(projectId);
    
    if (!project) {
        showErrorMessage('Project not found. Redirecting to projects page...');
        setTimeout(() => {
            window.location.href = '../index.html#projects';
        }, 2000);
        return;
    }

    // Populate page with project data
    populateProjectPage(project);

    // Initialize gallery modal
    initializeGalleryModal(project.gallery);

    // Initialize mobile navigation
    initializeMobileNav();

    // Initialize smooth scrolling
    initializeSmoothScrolling();

    // Load related projects
    loadRelatedProjects(projectId);
});

// Populate the page with project data
function populateProjectPage(project) {
    // Update page title
    document.title = `${project.title} | Mazen Mohsen`;

    // Breadcrumb
    document.getElementById('breadcrumb-title').textContent = project.title;

    // Hero section
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-summary').textContent = project.summary;
    
    // Main image
    const mainImage = document.getElementById('project-main-image');
    mainImage.src = project.mainImage;
    mainImage.alt = project.title;

    // Action buttons
    const liveDemoBtn = document.getElementById('live-demo-btn');
    const githubBtn = document.getElementById('github-btn');
    
    liveDemoBtn.href = project.demoLink;
    githubBtn.href = project.githubLink;

    // If demo link is same as github, update button text
    if (project.demoLink === project.githubLink) {
        liveDemoBtn.innerHTML = '<i class="fab fa-github"></i> View on GitHub';
    }

    // Overview content
    document.getElementById('project-overview').innerHTML = project.overview;

    // Features list
    const featuresList = document.getElementById('project-features');
    featuresList.innerHTML = project.features.map(feature => `
        <li>
            <i class="${feature.icon}"></i>
            <span>${feature.text}</span>
        </li>
    `).join('');

    // Tech stack
    const techStackGrid = document.getElementById('project-tech-stack');
    techStackGrid.innerHTML = project.techStack.map(tech => `
        <div class="tech-item">
            <i class="${tech.icon}"></i>
            <span>${tech.name}</span>
        </div>
    `).join('');

    // Project info
    document.getElementById('project-date').textContent = project.date;
    document.getElementById('project-role').textContent = project.role;
    document.getElementById('project-duration').textContent = project.duration;
    document.getElementById('project-team').textContent = project.team;

    // Code snippets
    const codeSnippetsContainer = document.getElementById('project-code-snippets');
    if (project.codeSnippets && project.codeSnippets.length > 0) {
        codeSnippetsContainer.innerHTML = project.codeSnippets.map(snippet => `
            <div class="code-snippet">
                <div class="code-header">
                    <div class="code-title">
                        <i class="fas fa-file-code"></i>
                        <span>${snippet.title}</span>
                    </div>
                    <span class="code-language">${snippet.language}</span>
                </div>
                <pre><code class="language-${snippet.language}">${escapeHtml(snippet.code)}</code></pre>
            </div>
        `).join('');

        // Re-highlight code after adding
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    } else {
        codeSnippetsContainer.closest('.content-block').style.display = 'none';
    }

    // Gallery
    const galleryGrid = document.getElementById('project-gallery');
    if (project.gallery && project.gallery.length > 0) {
        galleryGrid.innerHTML = project.gallery.map((item, index) => `
            <div class="gallery-item" data-index="${index}">
                <img src="${item.image}" alt="${item.caption}">
                <i class="fas fa-expand gallery-icon"></i>
            </div>
        `).join('');
    } else {
        galleryGrid.closest('.content-block').style.display = 'none';
    }

    // Challenges
    const challengesContainer = document.getElementById('project-challenges');
    if (project.challenges && project.challenges.length > 0) {
        challengesContainer.innerHTML = project.challenges.map(item => `
            <div class="challenge-item">
                <div class="challenge-title">
                    <i class="fas fa-exclamation-circle"></i>
                    Challenge
                </div>
                <p>${item.challenge}</p>
                <div class="solution-title">
                    <i class="fas fa-check-circle"></i>
                    Solution
                </div>
                <p>${item.solution}</p>
            </div>
        `).join('');
    } else {
        challengesContainer.closest('.content-block').style.display = 'none';
    }

    // Lessons Learned
    const lessonsContainer = document.getElementById('project-lessons');
    const lessonsSection = document.getElementById('lessons-section');
    if (project.lessonsLearned && project.lessonsLearned.length > 0) {
        lessonsContainer.innerHTML = project.lessonsLearned.map(item => `
            <li style="display: flex; align-items: flex-start; margin-bottom: 12px; font-size: 1rem; line-height: 1.5;">
                <i class="fas fa-check-circle" style="color: #20c997; margin-right: 12px; margin-top: 5px; font-size: 1.1rem; flex-shrink: 0;"></i>
                <span>${item}</span>
            </li>
        `).join('');
    } else {
        if (lessonsSection) {
            lessonsSection.style.display = 'none';
        }
    }

    // Quick links
    const quickLinksContainer = document.getElementById('project-links');
    if (project.links && project.links.length > 0) {
        quickLinksContainer.innerHTML = project.links.map(link => `
            <a href="${link.url}" class="quick-link" target="_blank">
                <i class="${link.icon}"></i>
                <span>${link.text}</span>
            </a>
        `).join('');
    } else {
        quickLinksContainer.closest('.sidebar-block').style.display = 'none';
    }

    // Animate elements on scroll
    observeElements();
}

// Initialize gallery modal
function initializeGalleryModal(gallery) {
    if (!gallery || gallery.length === 0) return;

    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const modalCounter = document.getElementById('modal-counter');
    const expandBtn = document.getElementById('expand-image-btn');
    const mainImage = document.getElementById('project-main-image');

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        updateModalImage();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateModalImage() {
        modalImage.src = gallery[currentIndex].image;
        modalImage.alt = gallery[currentIndex].caption;
        modalCounter.textContent = `${currentIndex + 1} / ${gallery.length}`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % gallery.length;
        updateModalImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        updateModalImage();
    }

    // Event listeners
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            openModal(parseInt(item.dataset.index));
        });
    });

    expandBtn.addEventListener('click', () => {
        openModal(0);
    });

    mainImage.addEventListener('click', () => {
        openModal(0);
    });

    modalClose.addEventListener('click', closeModal);
    modalNext.addEventListener('click', nextImage);
    modalPrev.addEventListener('click', prevImage);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

// Load related projects
function loadRelatedProjects(currentProjectId) {
    const relatedProjects = getRelatedProjects(currentProjectId, 3);
    const container = document.getElementById('related-projects');

    container.innerHTML = relatedProjects.map(project => `
        <a href="index.html?id=${project.id}" class="related-project-card">
            <div class="related-project-image">
                <img src="${project.mainImage}" alt="${project.title}">
            </div>
            <div class="related-project-content">
                <h3>${project.title}</h3>
                <p>${project.summary.substring(0, 100)}...</p>
            </div>
        </a>
    `).join('');
}

// Initialize mobile navigation
function initializeMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Observe elements for scroll animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-block, .sidebar-block, .related-project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add visible class animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .content-block.visible,
        .sidebar-block.visible,
        .related-project-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// Escape HTML for code snippets
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Show error message
function showErrorMessage(message) {
    const main = document.querySelector('.project-detail-main');
    main.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; text-align: center; padding: 2rem;">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--accent-light); margin-bottom: 1rem;"></i>
            <h2 style="margin-bottom: 1rem;">Oops!</h2>
            <p style="color: var(--secondary-light);">${message}</p>
        </div>
    `;
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 2rem';
        } else {
            navbar.style.padding = '1rem 2rem';
        }
    }
});
