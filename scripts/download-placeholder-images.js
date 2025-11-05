import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '../');

// High-quality placeholder images from Unsplash
const images = [
  // Rugged SA Products
  {
    partner: 'ruggedsa',
    name: 'rugged-phone-x1.jpg',
    url: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  {
    partner: 'ruggedsa',
    name: 'industrial-tablet-t7.jpg',
    url: 'https://images.unsplash.com/photo-1581093057304-46b3b2d6d3a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  
  // Avansa Products
  {
    partner: 'avansa',
    name: 'money-counter-mc2000.jpg',
    url: 'https://images.unsplash.com/photo-1604594849809-dfed84882784?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  {
    partner: 'avansa',
    name: 'pos-security-cabinet.jpg',
    url: 'https://images.unsplash.com/photo-1561487764-7edb2272ba05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  
  // Vanstone Products
  {
    partner: 'vanstone',
    name: 'android-pos-v3.jpg',
    url: 'https://images.unsplash.com/photo-1601784555864-eeacb91ac3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  {
    partner: 'vanstone',
    name: 'mobile-pos-m7.jpg',
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  
  // Additional Rugged SA Products
  {
    partner: 'ruggedsa',
    name: 'handheld-scanner-hs100.jpg',
    url: 'https://images.unsplash.com/photo-1600267165477-6d4cc74b7bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  {
    partner: 'ruggedsa',
    name: 'rugged-smartphone-rs3.jpg',
    url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  
  // Additional Avansa Products
  {
    partner: 'avansa',
    name: 'coin-counter-cc500.jpg',
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  {
    partner: 'avansa',
    name: 'cash-drawer-cd200.jpg',
    url: 'https://images.unsplash.com/photo-1605733514040-b6fb7bdb757f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  
  // Additional Vanstone Products
  {
    partner: 'vanstone',
    name: 'pos-terminal-vt1000.jpg',
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  },
  {
    partner: 'vanstone',
    name: 'barcode-scanner-bs300.jpg',
    url: 'https://images.unsplash.com/photo-1551288043-bdda52f9ebd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&fit=facearea&facepad=3'
  }
];

async function downloadImage(url, filePath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    await writeFile(filePath, Buffer.from(buffer));
    return true;
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Starting image download...');
  let successCount = 0;
  
  for (const img of images) {
    const dir = join(rootDir, 'public', 'images', 'partners', img.partner);
    const filePath = join(dir, img.name);
    
    // Create directory if it doesn't exist
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
    
    // Skip if file already exists
    if (existsSync(filePath)) {
      console.log(`Skipping (exists): ${img.partner}/${img.name}`);
      successCount++;
      continue;
    }
    
    // Download the image
    console.log(`Downloading: ${img.partner}/${img.name}`);
    const success = await downloadImage(img.url, filePath);
    if (success) {
      successCount++;
      console.log(`✅ Downloaded: ${img.partner}/${img.name}`);
    }
    
    // Be nice to the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\n✅ Successfully processed ${successCount} of ${images.length} images`);
  console.log('\nNext steps:');
  console.log('1. Review the downloaded images in the public/images/partners/ directory');
  console.log('2. Replace placeholders with actual product images when available');
  console.log('3. The images are already referenced in your partners.ts data file');
}

main().catch(console.error);
