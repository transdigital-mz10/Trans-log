import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Partner image directories
const partnerDirs = {
  'ruggedsa': {
    path: 'partners/ruggedsa',
    description: 'Rugged mobile devices and industrial equipment'
  },
  'avansa': {
    path: 'partners/avansa',
    description: 'Cash handling and POS security solutions'
  },
  'vanstone': {
    path: 'partners/vanstone',
    description: 'POS terminals and payment solutions'
  }
};

// Create directories and README files
Object.entries(partnerDirs).forEach(([partner, data]) => {
  const dirPath = join(rootDir, 'public', 'images', data.path);
  
  // Create directory if it doesn't exist
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
    
    // Create a README file with instructions
    const readmeContent = `# ${partner.toUpperCase()} Images

This directory contains product images for ${partner}.

## Image Requirements
- Format: JPG or PNG
- Recommended size: 800x600px or larger
- File naming: Use descriptive names with dashes (e.g., rugged-phone-x1.jpg)

## Current Images
(Add your images to this directory)
`;
    
    writeFileSync(join(dirPath, 'README.md'), readmeContent);
    console.log(`✅ Created README for ${partner}`);
  }
});

console.log('\n📁 Directory structure created. Next steps:');
console.log('1. Add your partner product images to these directories:');
Object.entries(partnerDirs).forEach(([partner, data]) => {
  console.log(`   - public/images/${data.path}/`);
});
console.log('\n2. Update the partner data in src/data/partners.ts to reference these images');
console.log('3. The images will be available at /images/partners/{partner-name}/*');
