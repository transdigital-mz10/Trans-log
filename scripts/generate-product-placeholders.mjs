import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { partnerOfferings } from '../src/data/partners.updated.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const baseDir = join(__dirname, '..');

// Function to create a simple SVG placeholder
const createPlaceholderSVG = (text, width = 800, height = 600) => `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="#e5e7eb" rx="8" ry="8"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="#6b7280">
    ${text}\n${width}×${height}
  </text>
</svg>
`.trim();

// Function to ensure directory exists
const ensureDirectoryExists = (dir) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
};

// Main function to generate placeholders
const generatePlaceholders = async () => {
  console.log('Generating product placeholder images...');
  
  for (const partner of partnerOfferings) {
    const partnerDir = join(baseDir, 'public', 'images', 'partners', partner.id);
    ensureDirectoryExists(partnerDir);
    
    for (const product of partner.products) {
      const filename = product.image.split('/').pop();
      const filePath = join(partnerDir, filename);
      const svgContent = createPlaceholderSVG(
        `${partner.name}\n${product.name}\n${product.sku}`,
        800,
        600
      );
      
      writeFileSync(filePath, svgContent);
      console.log(`Created placeholder: ${filePath}`);
    }
  }
  
  console.log('\n✅ All placeholder images generated successfully!');
  console.log('Please replace these placeholders with actual product images.');
};

// Run the script
generatePlaceholders().catch(console.error);
