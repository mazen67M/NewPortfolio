# Portfolio Website

A modern, responsive portfolio website with dark/light mode, animations, and interactive elements.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## Features 

- **Responsive Design**: Works on all devices and screen sizes
- **Dark/Light Mode**: Toggle between themes with smooth animations
- **Loading Animation**: Custom splash screen with animated logo
- **Custom Cursor**: Interactive cursor follower effect
- **Project Cards**: 3D tilt effect on hover
- **Testimonials Carousel**: Showcase client feedback
- **Contact Form**: With client-side validation
- **Particle Background**: Interactive particle animation

## Optimized for GitHub Pages

This portfolio is optimized for hosting on GitHub Pages with:

- Relative file paths for all resources
- Image optimization for faster loading
- CSS and JavaScript minification
- Automated deployment workflow

## Local Development

### Prerequisites

- Node.js (for running optimization scripts)

### Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies for optimization scripts
   ```
   npm install sharp clean-css terser
   ```

3. Run a local server
   ```
   npx http-server
   ```

### Optimization Scripts

- **Image Optimization**: Reduces image file sizes and creates WebP versions
   ```
   node optimize-images.js
   ```

- **File Minification**: Minifies CSS and JavaScript files
   ```
   node minify.js
   ```

## Deployment

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Push your changes to the main branch
2. GitHub Actions will automatically:
   - Optimize images
   - Minify CSS and JavaScript
   - Deploy to GitHub Pages

## Project Structure

```
├── css/                  # CSS stylesheets
├── js/                   # JavaScript files
├── images/               # Original images
├── dist/                 # Optimized files for deployment
│   ├── css/              # Minified CSS
│   ├── js/               # Minified JavaScript
│   └── images/           # Optimized images
├── .github/workflows/    # GitHub Actions workflows
├── optimize-images.js    # Image optimization script
├── minify.js             # CSS/JS minification script
└── index.html            # Main HTML file
```

## License

MIT License

## Credits

- Particles.js for background effects
- Font Awesome for icons
- Google Fonts for typography
