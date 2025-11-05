import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the previously scraped products
const productsPath = join(__dirname, '..', 'src', 'data', 'products', 'ruggedsa-products.json');
const products = JSON.parse(readFileSync(productsPath, 'utf-8'));

async function scrapeProductDetails() {
  console.log('Starting detailed product scraping...');
  const browser = await chromium.launch({ headless: false, slowMo: 100 }); // Slower for debugging
  
  try {
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      viewport: { width: 1200, height: 800 }
    });
    
    const page = await context.newPage();
    
    // Process each product
    for (let i = 0; i < Math.min(products.length, 3); i++) { // Limit to 3 for testing
      const product = products[i];
      console.log(`\nProcessing product ${i + 1}/${products.length}: ${product.name}`);
      
      try {
        // Navigate to product page
        console.log(`  Navigating to: ${product.url}`);
        await page.goto(product.url, { waitUntil: 'networkidle', timeout: 60000 });
        
        // Extract detailed information
        const details = await page.evaluate(() => {
          // Get description
          const description = document.querySelector('.woocommerce-product-details__short-description')?.innerHTML || 
                            document.querySelector('.woocommerce-Tabs-panel--description')?.innerHTML ||
                            '';
          
          // Get features (from description or features list)
          const features = [];
          document.querySelectorAll('.woocommerce-product-attributes-item').forEach(item => {
            const label = item.querySelector('.woocommerce-product-attributes-item__label')?.textContent?.trim();
            const value = item.querySelector('.woocommerce-product-attributes-item__value')?.textContent?.trim();
            if (label && value) {
              features.push(`${label}: ${value}`);
            }
          });
          
          // Get specifications (from tables or other elements)
          const specifications = {};
          const specTables = document.querySelectorAll('table.woocommerce-product-attributes');
          specTables.forEach(table => {
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
              const th = row.querySelector('th');
              const td = row.querySelector('td');
              if (th && td) {
                specifications[th.textContent.trim()] = td.textContent.trim();
              }
            });
          });
          
          // Get additional images
          const images = [];
          const mainImage = document.querySelector('.woocommerce-product-gallery__image img')?.src;
          if (mainImage) images.push(mainImage);
          
          document.querySelectorAll('.woocommerce-product-gallery__image').forEach(img => {
            const src = img.querySelector('img')?.src;
            if (src && !images.includes(src)) images.push(src);
          });
          
          return {
            description,
            features,
            specifications,
            images: images.length ? images : [document.querySelector('.wp-post-image')?.src || ''],
            category: Array.from(document.querySelectorAll('.posted_in a')).map(a => a.textContent.trim()).join(', '),
            sku: document.querySelector('.sku')?.textContent?.replace('SKU:', '').trim() || '',
          };
        });
        
        // Merge with existing product data
        products[i] = { ...product, ...details };
        console.log(`  ✓ Extracted details: ${details.features.length} features, ${Object.keys(details.specifications).length} specs`);
        
        // Save progress after each product
        saveProducts(products);
        
      } catch (error) {
        console.error(`  ❌ Error processing ${product.name}:`, error.message);
        // Continue with next product even if one fails
      }
      
      // Add a small delay between requests
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log('\n✅ Detailed scraping completed!');
    
  } catch (error) {
    console.error('❌ Fatal error during scraping:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
}

function saveProducts(products) {
  const dataDir = join(__dirname, '..', 'src', 'data', 'products');
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
  }
  
  const outputFile = join(dataDir, 'ruggedsa-products-detailed.json');
  writeFileSync(outputFile, JSON.stringify(products, null, 2));
  console.log(`  💾 Saved progress to: ${outputFile}`);
}

// Run the detailed scraper
scrapeProductDetails().catch(console.error);
