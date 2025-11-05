import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Partner data
const partnerOfferings = [
  {
    id: 'ruggedsa',
    name: 'Rugged SA',
    products: [
      { image: 'rugged-phone-x1.jpg', sku: 'RS-X1-BLK', name: 'Rugged Phone X1' },
      { image: 'industrial-tablet-t7.jpg', sku: 'RS-T7-10', name: 'Industrial Tablet T7' },
      { image: 'handheld-scanner-hs100.jpg', sku: 'RS-HS100', name: 'Handheld Scanner HS100' },
      { image: 'rugged-phone-x2-pro.jpg', sku: 'RS-X2-PRO', name: 'Rugged Phone X2 Pro' },
      { image: 'wearable-scanner-ws50.jpg', sku: 'RS-WS50', name: 'Wearable Scanner WS50' },
      { image: 'vehicle-mount-kit-vk200.jpg', sku: 'RS-VK200', name: 'Vehicle Mount Kit VK200' }
    ]
  },
  {
    id: 'avansa',
    name: 'Avansa',
    products: [
      { image: 'money-counter-mc2000.jpg', sku: 'AV-MC2000', name: 'Money Counter MC2000' },
      { image: 'pos-security-cabinet.jpg', sku: 'AV-SC1000', name: 'POS Security Cabinet' },
      { image: 'coin-counter-cc500.jpg', sku: 'AV-CC500', name: 'Coin Counter CC500' },
      { image: 'cash-recycler-cr1000.jpg', sku: 'AV-CR1000', name: 'Cash Recycler CR1000' },
      { image: 'check-scanner-cs300.jpg', sku: 'AV-CS300', name: 'Check Scanner CS300' },
      { image: 'smart-safe-ss500.jpg', sku: 'AV-SS500', name: 'Smart Safe SS500' }
    ]
  },
  {
    id: 'vanstone',
    name: 'Vanstone',
    products: [
      { image: 'android-pos-v3.jpg', sku: 'VS-APOS-V3', name: 'Android POS V3' },
      { image: 'mobile-pos-m7.jpg', sku: 'VS-MPOS-M7', name: 'Mobile POS M7' },
      { image: 'barcode-scanner-bs300.jpg', sku: 'VS-BS300', name: 'Barcode Scanner BS300' },
      { image: 'self-service-kiosk-sk500.jpg', sku: 'VS-SK500', name: 'Self-Service Kiosk SK500' },
      { image: 'kitchen-display-kd200.jpg', sku: 'VS-KD200', name: 'Kitchen Display KD200' },
      { image: 'customer-display-cd100.jpg', sku: 'VS-CD100', name: 'Customer Display CD100' }
    ]
  }
];

// Function to create a simple SVG placeholder
function createPlaceholderSVG(text, width = 800, height = 600) {
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="#e5e7eb" rx="8" ry="8"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="#6b7280">
      ${text}\n${width}×${height}
    </text>
  </svg>
  `.trim();
}

// Main function
async function generatePlaceholders() {
  console.log('Generating product placeholder images...');
  
  for (const partner of partnerOfferings) {
    const partnerDir = join(__dirname, '..', 'public', 'images', 'partners', partner.id);
    
    // Create partner directory if it doesn't exist
    if (!existsSync(partnerDir)) {
      mkdirSync(partnerDir, { recursive: true });
      console.log(`Created directory: ${partnerDir}`);
    }
    
    // Create placeholder for each product
    for (const product of partner.products) {
      const filePath = join(partnerDir, product.image);
      const svgContent = createPlaceholderSVG(
        `${partner.name}\n${product.name}\n${product.sku}`
      );
      
      writeFileSync(filePath, svgContent);
      console.log(`Created placeholder: ${filePath}`);
    }
  }
  
  console.log('\n✅ All placeholder images generated successfully!');
  console.log('Please replace these placeholders with actual product images.');
}

// Run the script
generatePlaceholders().catch(console.error);
