#!/usr/bin/env node

/**
 * Image Optimization Script for Smart Brains India
 * 
 * This script converts JPG/PNG images to WebP format for better performance.
 * 
 * PREREQUISITES:
 * Install sharp: npm install --save-dev sharp
 * 
 * USAGE:
 * node scripts/convert-images-to-webp.js
 * 
 * WHAT IT DOES:
 * 1. Scans /public/images for JPG/PNG files
 * 2. Converts them to WebP with 85% quality
 * 3. Saves WebP versions alongside originals
 * 4. Generates a mapping file for reference
 * 5. Shows file size savings
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
    inputDir: path.join(__dirname, '../public/images'),
    outputDir: path.join(__dirname, '../public/images'),
    quality: 85, // WebP quality (80-90 recommended)
    extensions: ['.jpg', '.jpeg', '.png'],
    skipExisting: true, // Skip if WebP already exists
};

// Target sizes for different image types
const IMAGE_TARGETS = {
    hero: { maxWidth: 1920, maxHeight: 1080, quality: 85, targetSize: 200 }, // KB
    section: { maxWidth: 1200, maxHeight: 800, quality: 85, targetSize: 150 },
    thumbnail: { maxWidth: 600, maxHeight: 400, quality: 80, targetSize: 80 },
    og: { maxWidth: 1200, maxHeight: 630, quality: 85, targetSize: 150 },
};

// Categorize images by filename patterns
function categorizeImage(filename) {
    const lower = filename.toLowerCase();
    if (lower.includes('hero')) return 'hero';
    if (lower.includes('og-')) return 'og';
    if (lower.includes('thumb') || lower.includes('icon')) return 'thumbnail';
    return 'section';
}

// Format bytes to human-readable
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Get all image files recursively
function getImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getImageFiles(filePath, fileList);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (CONFIG.extensions.includes(ext)) {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

// Convert single image to WebP
async function convertToWebP(inputPath) {
    const parsedPath = path.parse(inputPath);
    const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

    // Skip if WebP already exists
    if (CONFIG.skipExisting && fs.existsSync(outputPath)) {
        console.log(`⏭️  Skipped (already exists): ${path.basename(outputPath)}`);
        return null;
    }

    try {
        const category = categorizeImage(parsedPath.name);
        const target = IMAGE_TARGETS[category];

        // Get original file size
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;

        // Convert to WebP with appropriate settings
        await sharp(inputPath)
            .resize(target.maxWidth, target.maxHeight, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({ quality: target.quality })
            .toFile(outputPath);

        // Get new file size
        const newStats = fs.statSync(outputPath);
        const newSize = newStats.size;
        const savings = ((originalSize - newSize) / originalSize) * 100;

        console.log(
            `✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`
        );
        console.log(
            `   ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${savings.toFixed(1)}% smaller)`
        );
        console.log(`   Category: ${category} | Target: <${target.targetSize}KB\n`);

        return {
            original: path.relative(path.join(__dirname, '../public'), inputPath),
            webp: path.relative(path.join(__dirname, '../public'), outputPath),
            originalSize,
            newSize,
            savings: savings.toFixed(1),
            category,
        };
    } catch (error) {
        console.error(`❌ Error converting ${inputPath}:`, error.message);
        return null;
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting image conversion to WebP...\n');
    console.log(`📁 Input directory: ${CONFIG.inputDir}`);
    console.log(`⚙️  Quality: ${CONFIG.quality}%\n`);

    // Check if sharp is installed
    try {
        require.resolve('sharp');
    } catch (e) {
        console.error('❌ Error: sharp is not installed.');
        console.error('Please run: npm install --save-dev sharp\n');
        process.exit(1);
    }

    // Get all images
    const imageFiles = getImageFiles(CONFIG.inputDir);
    console.log(`📸 Found ${imageFiles.length} images to process\n`);

    if (imageFiles.length === 0) {
        console.log('No images found. Exiting.');
        return;
    }

    // Convert all images
    const results = [];
    for (const file of imageFiles) {
        const result = await convertToWebP(file);
        if (result) results.push(result);
    }

    // Generate summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 CONVERSION SUMMARY');
    console.log('='.repeat(60));

    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
    const totalSavings = ((totalOriginal - totalNew) / totalOriginal) * 100;

    console.log(`✅ Converted: ${results.length} images`);
    console.log(`💾 Original size: ${formatBytes(totalOriginal)}`);
    console.log(`💾 New size: ${formatBytes(totalNew)}`);
    console.log(`📉 Total savings: ${formatBytes(totalOriginal - totalNew)} (${totalSavings.toFixed(1)}%)`);

    // Save mapping file
    const mappingPath = path.join(__dirname, 'image-conversion-map.json');
    fs.writeFileSync(mappingPath, JSON.stringify(results, null, 2));
    console.log(`\n📄 Mapping saved to: ${mappingPath}`);

    console.log('\n✨ Done! Next steps:');
    console.log('1. Update image references in your code to use .webp extensions');
    console.log('2. Test the site thoroughly');
    console.log('3. Delete original JPG/PNG files if everything works');
    console.log('4. Run PageSpeed Insights to see improvements!\n');
}

// Run the script
main().catch(console.error);
