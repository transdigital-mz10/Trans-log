import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function scrapeRuggedSA() {
  console.log('Starting Rugged SA product scraping...');
  const browser = await chromium.launch({ headless: true });
  
  try {
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
    });
    
    const page = await context.newPage();
    
    // Navigate to their products page
    console.log('Navigating to Rugged SA products page...');
    await page.goto('https://ruggedsa.co.za/product-category/rugged-phones/', { waitUntil: 'networkidle' });
    
    // Wait for products to load
    await page.waitForSelector('.product');
    
    // Extract product data
    console.log('Extracting product data...');
    const products = await page.$$eval('.product', (items) => {
      return items.map(item => {
        const name = item.querySelector('.woocommerce-loop-product__title')?.textContent?.trim() || '';
        const price = item.querySelector('.price')?.textContent?.trim() || '';
        const image = item.querySelector('img')?.src || '';
        const url = item.querySelector('a')?.href || '';
        
        return {
          name,
          price,
          image,
          url
        };
      });
    });

    // Create data directory if it doesn't exist
    const dataDir = join(__dirname, '..', 'src', 'data', 'products');
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }
    
    // Save to file
    const outputFile = join(dataDir, 'ruggedsa-products.json');
    writeFileSync(outputFile, JSON.stringify(products, null, 2));
    console.log(`✅ Successfully scraped ${products.length} products from Rugged SA`);
    console.log(`📁 Data saved to: ${outputFile}`);
    
  } catch (error) {
    console.error('❌ Error during scraping:', error);
  } finally {
    await browser.close();
    console.log('Scraping completed.');
  }
}

// Run the scraper
scrapeRuggedSA().catch(console.error);
