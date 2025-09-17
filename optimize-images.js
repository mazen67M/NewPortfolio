// Image optimization script for GitHub Pages
// This script uses the 'sharp' library to optimize images
// To use: npm install sharp && node optimize-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  inputDir: './images',
  outputDir: './images/optimized',
  quality: 80, // JPEG quality (0-100)
  webpQuality: 75, // WebP quality (0-100)
  maxWidth: 1200, // Maximum width for large images
  thumbnailWidth: 400, // Width for thumbnails
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Get all files from input directory
const imageFiles = fs.readdirSync(config.inputDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
  });

console.log(`Found ${imageFiles.length} images to optimize`);

// Process each image
Promise.all(imageFiles.map(async (file) => {
  const inputPath = path.join(config.inputDir, file);
  const fileBaseName = path.basename(file, path.extname(file));
  const outputPathJpg = path.join(config.outputDir, `${fileBaseName}.jpg`);
  const outputPathWebp = path.join(config.outputDir, `${fileBaseName}.webp`);
  const outputPathThumbJpg = path.join(config.outputDir, `${fileBaseName}-thumb.jpg`);
  const outputPathThumbWebp = path.join(config.outputDir, `${fileBaseName}-thumb.webp`);
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Resize and optimize main image
    await sharp(inputPath)
      .resize({
        width: Math.min(metadata.width, config.maxWidth),
        withoutEnlargement: true
      })
      .jpeg({ quality: config.quality, progressive: true })
      .toFile(outputPathJpg);
      
    // Create WebP version
    await sharp(inputPath)
      .resize({
        width: Math.min(metadata.width, config.maxWidth),
        withoutEnlargement: true
      })
      .webp({ quality: config.webpQuality })
      .toFile(outputPathWebp);
      
    // Create thumbnail
    await sharp(inputPath)
      .resize({
        width: config.thumbnailWidth,
        withoutEnlargement: true
      })
      .jpeg({ quality: config.quality })
      .toFile(outputPathThumbJpg);
      
    // Create WebP thumbnail
    await sharp(inputPath)
      .resize({
        width: config.thumbnailWidth,
        withoutEnlargement: true
      })
      .webp({ quality: config.webpQuality })
      .toFile(outputPathThumbWebp);
      
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const jpgSize = fs.statSync(outputPathJpg).size;
    const webpSize = fs.statSync(outputPathWebp).size;
    
    const savingsPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${file}: Original: ${(originalSize/1024).toFixed(1)}KB, ` +
      `Optimized JPG: ${(jpgSize/1024).toFixed(1)}KB, ` +
      `WebP: ${(webpSize/1024).toFixed(1)}KB (${savingsPercent}% savings)`);
      
    return {
      file,
      originalSize,
      jpgSize,
      webpSize,
      savingsPercent: parseFloat(savingsPercent)
    };
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
    return null;
  }
}))
.then(results => {
  // Filter out null results (errors)
  const validResults = results.filter(r => r !== null);
  
  // Calculate total savings
  const totalOriginal = validResults.reduce((sum, r) => sum + r.originalSize, 0);
  const totalWebp = validResults.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSavingsPercent = ((totalOriginal - totalWebp) / totalOriginal * 100).toFixed(1);
  
  console.log('\nOptimization complete!');
  console.log(`Total images processed: ${validResults.length}`);
  console.log(`Total original size: ${(totalOriginal/1024/1024).toFixed(2)}MB`);
  console.log(`Total optimized size (WebP): ${(totalWebp/1024/1024).toFixed(2)}MB`);
  console.log(`Total space savings: ${totalSavingsPercent}%`);
  console.log('\nTo use WebP images with fallback:');
  console.log(`
<picture>
  <source srcset="images/optimized/filename.webp" type="image/webp">
  <img src="images/optimized/filename.jpg" alt="Description">
</picture>
`);
})
.catch(err => {
  console.error('Error in optimization process:', err);
});