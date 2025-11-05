import { chromium } from 'playwright';
import { mkdir, writeFile, access } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '../');

// Partner configurations
const partners = [
  {
    id: 'ruggedsa',
    url: 'https://ruggedsa.co.za/shop/',
    products: [
      { name: 'rugged-phone-x1', selector: '.product' },
      { name: 'industrial-tablet-t7', selector: '.product' },
    ]
  },
  {
    id: 'avansa',
    url: 'https://avansa.co.za/product-category/cash-handling/',
    products: [
      { name: 'money-counter-mc2000', selector: '.product' },
      { name: 'pos-security-cabinet', selector: '.product' },
    ]
  },
  // Vanstone doesn't have a public product catalog we can scrape
];

// Create output directories
async function setupDirectories() {
  for (const partner of partners) {
    const dir = join(rootDir, 'public', 'images', 'partners', partner.id);
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  }
}

// Download placeholder images for development
async function downloadPlaceholderImages() {
  const images = [
    {
      partner: 'ruggedsa',
      name: 'rugged-phone-x1.jpg',
      url: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      partner: 'ruggedsa',
      name: 'industrial-tablet-t7.jpg',
      url: 'https://images.unsplash.com/photo-1581093057304-46b3b2d6d3a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      partner: 'avansa',
      name: 'money-counter-mc2000.jpg',
      url: 'https://images.unsplash.com/photo-1604594849809-dfed84882784?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      partner: 'avansa',
      name: 'pos-security-cabinet.jpg',
      url: 'https://images.unsplash.com/photo-1561487764-7edb2272ba05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      partner: 'vanstone',
      name: 'android-pos-v3.jpg',
      url: 'https://images.unsplash.com/photo-1601784555864-eeacb91ac3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      partner: 'vanstone',
      name: 'mobile-pos-m7.jpg',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  for (const img of images) {
    const filePath = join(rootDir, 'public', 'images', 'partners', img.partner, img.name);
    if (!existsSync(filePath)) {
      try {
        const response = await fetch(img.url);
        const buffer = await response.arrayBuffer();
        await writeFile(filePath, Buffer.from(buffer));
        console.log(`Downloaded: ${img.partner}/${img.name}`);
      } catch (error) {
        console.error(`Error downloading ${img.url}:`, error);
      }
    } else {
      console.log(`Skipping (exists): ${img.partner}/${img.name}`);
    }
  }
}

// Main function
async function main() {
  console.log('Setting up partner directories...');
  await setupDirectories();
  
  console.log('\nDownloading placeholder images...');
  await downloadPlaceholderImages();
  
  console.log('\n✅ Done! Your partner product images are ready.');
  console.log('You can find them in the public/images/partners/ directory.');
  console.log('\nNote: These are placeholder images. For production, please replace them with actual product images from your partners.');
}

main().catch(console.error);
