// Minification script for CSS and JavaScript files
// To use: npm install clean-css terser && node minify.js

const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify } = require('terser');

// Configuration
const config = {
  cssDir: './css',
  jsDir: './js',
  outputCssDir: './dist/css',
  outputJsDir: './dist/js',
  // Files to exclude from minification
  exclude: ['particles.min.js']
};

// Create output directories if they don't exist
if (!fs.existsSync(config.outputCssDir)) {
  fs.mkdirSync(config.outputCssDir, { recursive: true });
}

if (!fs.existsSync(config.outputJsDir)) {
  fs.mkdirSync(config.outputJsDir, { recursive: true });
}

// CSS Minification
function minifyCss() {
  const cssFiles = fs.readdirSync(config.cssDir)
    .filter(file => path.extname(file).toLowerCase() === '.css');
  
  console.log(`Found ${cssFiles.length} CSS files to minify`);
  
  const cssMinifier = new CleanCSS({
    level: 2, // Advanced optimization level
    compatibility: '*', // IE8+ compatibility
    sourceMap: true
  });
  
  let totalOriginalSize = 0;
  let totalMinifiedSize = 0;
  
  cssFiles.forEach(file => {
    const filePath = path.join(config.cssDir, file);
    const outputFilePath = path.join(config.outputCssDir, file);
    const css = fs.readFileSync(filePath, 'utf8');
    
    const originalSize = Buffer.byteLength(css, 'utf8');
    totalOriginalSize += originalSize;
    
    const minified = cssMinifier.minify(css);
    
    if (minified.errors.length > 0) {
      console.error(`Error minifying ${file}:`, minified.errors);
      return;
    }
    
    fs.writeFileSync(outputFilePath, minified.styles);
    
    const minifiedSize = Buffer.byteLength(minified.styles, 'utf8');
    totalMinifiedSize += minifiedSize;
    
    const savingsPercent = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
    console.log(`✓ ${file}: ${(originalSize/1024).toFixed(1)}KB → ${(minifiedSize/1024).toFixed(1)}KB (${savingsPercent}% savings)`);
  });
  
  const totalSavingsPercent = ((totalOriginalSize - totalMinifiedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\nTotal CSS: ${(totalOriginalSize/1024).toFixed(1)}KB → ${(totalMinifiedSize/1024).toFixed(1)}KB (${totalSavingsPercent}% savings)`);
}

// JavaScript Minification
async function minifyJs() {
  const jsFiles = fs.readdirSync(config.jsDir)
    .filter(file => {
      return path.extname(file).toLowerCase() === '.js' && 
             !config.exclude.includes(file) &&
             !file.endsWith('.min.js');
    });
  
  console.log(`\nFound ${jsFiles.length} JavaScript files to minify`);
  
  let totalOriginalSize = 0;
  let totalMinifiedSize = 0;
  
  for (const file of jsFiles) {
    const filePath = path.join(config.jsDir, file);
    const outputFilePath = path.join(config.outputJsDir, file);
    const js = fs.readFileSync(filePath, 'utf8');
    
    const originalSize = Buffer.byteLength(js, 'utf8');
    totalOriginalSize += originalSize;
    
    try {
      const minified = await minify(js, {
        compress: {
          drop_console: false, // Keep console logs
          drop_debugger: true // Remove debugger statements
        },
        mangle: true,
        output: {
          comments: false // Remove comments
        }
      });
      
      fs.writeFileSync(outputFilePath, minified.code);
      
      const minifiedSize = Buffer.byteLength(minified.code, 'utf8');
      totalMinifiedSize += minifiedSize;
      
      const savingsPercent = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
      console.log(`✓ ${file}: ${(originalSize/1024).toFixed(1)}KB → ${(minifiedSize/1024).toFixed(1)}KB (${savingsPercent}% savings)`);
    } catch (err) {
      console.error(`Error minifying ${file}:`, err);
    }
  }
  
  const totalSavingsPercent = ((totalOriginalSize - totalMinifiedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\nTotal JS: ${(totalOriginalSize/1024).toFixed(1)}KB → ${(totalMinifiedSize/1024).toFixed(1)}KB (${totalSavingsPercent}% savings)`);
}

// Create a minified version of index.html that references the minified files
function createMinifiedHtml() {
  const htmlPath = './index.html';
  const outputHtmlPath = './dist/index.html';
  
  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found');
    return;
  }
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Update CSS paths
  html = html.replace(/href="css\/(.*?\.css)"/g, 'href="css/$1"');
  
  // Update JS paths
  html = html.replace(/src="js\/(.*?\.js)"/g, 'src="js/$1"');
  
  // Basic HTML minification
  html = html
    .replace(/\s{2,}/g, ' ') // Remove extra spaces
    .replace(/<!--(.*?)-->/g, '') // Remove comments
    .replace(/\n/g, '') // Remove newlines
    .replace(/\s+</g, '<') // Remove spaces before tags
    .replace(/>\s+/g, '>'); // Remove spaces after tags
  
  fs.writeFileSync(outputHtmlPath, html);
  
  const originalSize = fs.statSync(htmlPath).size;
  const minifiedSize = fs.statSync(outputHtmlPath).size;
  const savingsPercent = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
  
  console.log(`\n✓ index.html: ${(originalSize/1024).toFixed(1)}KB → ${(minifiedSize/1024).toFixed(1)}KB (${savingsPercent}% savings)`);
}

// Copy other necessary files to dist directory
function copyOtherFiles() {
  // Copy images folder
  if (fs.existsSync('./images/optimized')) {
    if (!fs.existsSync('./dist/images')) {
      fs.mkdirSync('./dist/images', { recursive: true });
    }
    
    // Copy optimized images
    const images = fs.readdirSync('./images/optimized');
    images.forEach(file => {
      fs.copyFileSync(
        path.join('./images/optimized', file),
        path.join('./dist/images', file)
      );
    });
    
    console.log(`Copied ${images.length} optimized images to dist/images`);
  } else {
    console.log('No optimized images found. Run optimize-images.js first.');
  }
  
  // Copy other necessary files (favicon, etc.)
  const otherFiles = ['favicon.ico', 'robots.txt', 'site.webmanifest'];
  otherFiles.forEach(file => {
    if (fs.existsSync(`./${file}`)) {
      fs.copyFileSync(`./${file}`, `./dist/${file}`);
      console.log(`Copied ${file} to dist/`);
    }
  });
}

// Main function
async function main() {
  console.log('Starting minification process...');
  
  minifyCss();
  await minifyJs();
  createMinifiedHtml();
  copyOtherFiles();
  
  console.log('\nMinification complete! Minified files are in the dist/ directory.');
  console.log('For GitHub Pages deployment, you can use the contents of the dist/ directory.');
}

main().catch(err => {
  console.error('Error in minification process:', err);
});